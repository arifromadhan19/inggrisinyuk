import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { normalizeWaNumber } from "@/lib/wa-number"
import { createSession } from "@/lib/session"
import { toUserDTO } from "@/lib/types"

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const waNumber = typeof body?.waNumber === "string" ? body.waNumber : ""
  if (!waNumber.trim()) {
    return NextResponse.json({ error: "wa_number_required" }, { status: 400 })
  }

  const user = await db.user.findUnique({
    where: { waNumber: normalizeWaNumber(waNumber) },
  })

  if (!user || user.isSuspended || user.isDeleted) {
    return NextResponse.json({ error: "not_found" }, { status: 404 })
  }

  await createSession(user.id)
  await db.user.update({
    where: { id: user.id },
    data: { lastActiveAt: new Date() },
  })

  return NextResponse.json({ user: toUserDTO(user) })
}
