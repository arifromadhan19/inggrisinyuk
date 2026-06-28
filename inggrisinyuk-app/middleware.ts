import { jwtVerify } from "jose"
import { NextResponse, type NextRequest } from "next/server"

const COOKIE_NAME = "iy_admin_session"

function getSecretKey() {
  const secret = process.env.SESSION_SECRET
  if (!secret) throw new Error("SESSION_SECRET is not set")
  return new TextEncoder().encode(secret)
}

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(COOKIE_NAME)?.value

  if (token) {
    try {
      await jwtVerify(token, getSecretKey())
      return NextResponse.next()
    } catch {
      // invalid/expired token falls through to redirect below
    }
  }

  return NextResponse.redirect(new URL("/admin/login", request.url))
}

export const config = {
  matcher: ["/admin/users/:path*", "/admin/audit-log/:path*"],
}
