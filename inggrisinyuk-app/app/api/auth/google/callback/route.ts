import { NextRequest, NextResponse } from "next/server"
import { exchangeCodeForTokens, verifyGoogleIdToken } from "@/lib/google-oauth"
import { getAppUrl } from "@/lib/app-url"
import { db } from "@/lib/db"
import { createSession } from "@/lib/session"
import { deriveNicknameFromEmail } from "@/lib/nickname"

const PENDING_SIGNUP_TTL_MS = 24 * 60 * 60 * 1000

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code")
  const appUrl = getAppUrl()

  if (!code) {
    return NextResponse.redirect(`${appUrl}/login?error=google_failed`)
  }

  try {
    const { idToken } = await exchangeCodeForTokens(code)
    const identity = await verifyGoogleIdToken(idToken)

    const existing = await db.user.findUnique({ where: { googleSub: identity.sub } })
    if (existing) {
      if (existing.isSuspended || existing.isDeleted) {
        return NextResponse.redirect(`${appUrl}/login?error=suspended`)
      }
      await createSession(existing.id)
      await db.user.update({ where: { id: existing.id }, data: { lastActiveAt: new Date() } })
      return NextResponse.redirect(`${appUrl}/dashboard`)
    }

    const pending = await db.pendingSignup.upsert({
      where: { googleSub: identity.sub },
      create: {
        email: identity.email,
        googleSub: identity.sub,
        name: deriveNicknameFromEmail(identity.email),
        status: "pending",
        expiresAt: new Date(Date.now() + PENDING_SIGNUP_TTL_MS),
      },
      update: {
        email: identity.email,
        name: deriveNicknameFromEmail(identity.email),
        status: "pending",
        expiresAt: new Date(Date.now() + PENDING_SIGNUP_TTL_MS),
      },
    })

    return NextResponse.redirect(`${appUrl}/beli?pending=${pending.id}`)
  } catch (err) {
    console.error("Google OAuth callback failed", err)
    return NextResponse.redirect(`${appUrl}/login?error=google_failed`)
  }
}
