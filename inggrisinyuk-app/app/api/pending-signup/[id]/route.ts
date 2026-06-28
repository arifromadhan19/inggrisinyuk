import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const pending = await db.pendingSignup.findUnique({ where: { id } })

  if (!pending || pending.status !== "pending" || pending.expiresAt < new Date()) {
    return NextResponse.json({ error: "not_found" }, { status: 404 })
  }

  return NextResponse.json({ email: pending.email, name: pending.name })
}
