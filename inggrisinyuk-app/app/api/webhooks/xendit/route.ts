import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { isValidWebhookToken } from "@/lib/xendit"
import { deriveNicknameFromEmail } from "@/lib/nickname"

export async function POST(req: NextRequest) {
  const token = req.headers.get("x-callback-token")
  if (!isValidWebhookToken(token)) {
    return NextResponse.json({ error: "invalid_token" }, { status: 401 })
  }

  const payload = await req.json().catch(() => null)
  const externalId = typeof payload?.external_id === "string" ? payload.external_id : ""
  const status = typeof payload?.status === "string" ? payload.status : ""

  if (!externalId) {
    return NextResponse.json({ error: "missing_external_id" }, { status: 400 })
  }

  const transaction = await db.transaction.findUnique({ where: { orderId: externalId } })
  if (!transaction) {
    return NextResponse.json({ error: "transaction_not_found" }, { status: 404 })
  }

  if (transaction.status === "success") {
    return NextResponse.json({ ok: true })
  }

  if (status === "PAID" || status === "SETTLED") {
    const paymentMethod = typeof payload?.payment_method === "string" ? payload.payment_method : null

    await db.$transaction(async (tx) => {
      let userId: string

      if (transaction.flow === "google" && transaction.pendingSignupId) {
        const pending = await tx.pendingSignup.findUnique({ where: { id: transaction.pendingSignupId } })
        if (!pending) throw new Error(`pending_signup_not_found: ${transaction.pendingSignupId}`)

        const user = await tx.user.upsert({
          where: { googleSub: pending.googleSub },
          create: {
            googleSub: pending.googleSub,
            email: pending.email,
            panggilan: transaction.panggilan ?? pending.name ?? deriveNicknameFromEmail(pending.email),
          },
          update: {},
        })
        await tx.pendingSignup.update({ where: { id: pending.id }, data: { status: "used" } })
        userId = user.id
      } else {
        if (!transaction.waNumber) throw new Error(`wa_number_missing_for_wa_flow: ${transaction.orderId}`)
        const user = await tx.user.upsert({
          where: { waNumber: transaction.waNumber },
          create: {
            waNumber: transaction.waNumber,
            panggilan: transaction.panggilan ?? "Sahabat",
          },
          update: {},
        })
        userId = user.id
      }

      await tx.transaction.update({
        where: { orderId: externalId },
        data: { status: "success", paidAt: new Date(), userId, paymentMethod },
      })
    })

    return NextResponse.json({ ok: true })
  }

  if (status === "EXPIRED") {
    await db.$transaction(async (tx) => {
      await tx.transaction.update({ where: { orderId: externalId }, data: { status: "expired" } })
      if (transaction.pendingSignupId) {
        await tx.pendingSignup.update({ where: { id: transaction.pendingSignupId }, data: { status: "expired" } })
      }
    })
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ ok: true })
}
