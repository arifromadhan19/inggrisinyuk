import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { db } from "@/lib/db"
import { createAdminSession } from "@/lib/admin-session"
import { toAdminDTO } from "@/lib/admin-types"

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : ""
  const password = typeof body?.password === "string" ? body.password : ""
  if (!email || !password) {
    return NextResponse.json({ error: "credentials_required" }, { status: 400 })
  }

  const admin = await db.admin.findUnique({ where: { email } })
  if (!admin || !(await bcrypt.compare(password, admin.passwordHash))) {
    return NextResponse.json({ error: "invalid_credentials" }, { status: 401 })
  }

  await createAdminSession(admin.id)
  return NextResponse.json({ admin: toAdminDTO(admin) })
}
