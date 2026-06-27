import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { requireAdminApi } from "@/lib/require-admin"
import { normalizeWaNumber } from "@/lib/wa-number"
import { LEVEL_NAME } from "@/lib/placement-test-data"

export async function POST(req: NextRequest) {
  const admin = await requireAdminApi()
  if (!admin) return NextResponse.json({ error: "unauthorized" }, { status: 401 })

  const body = await req.json().catch(() => null)
  const orderId = typeof body?.orderId === "string" ? body.orderId.trim() : ""
  const waNumber = typeof body?.waNumber === "string" ? body.waNumber : ""
  const panggilan = typeof body?.panggilan === "string" ? body.panggilan.trim() : ""
  const sapaan = typeof body?.sapaan === "string" && body.sapaan.trim() ? body.sapaan.trim() : "Kak"
  const level = typeof body?.level === "string" && body.level in LEVEL_NAME ? body.level : "A1"
  const email = typeof body?.email === "string" && body.email.trim() ? body.email.trim() : null

  if (!orderId || !waNumber.trim() || !panggilan) {
    return NextResponse.json({ error: "order_id_wa_panggilan_required" }, { status: 400 })
  }

  const normalized = normalizeWaNumber(waNumber)

  const existingOrder = await db.transaction.findUnique({ where: { orderId } })
  if (existingOrder) return NextResponse.json({ error: "order_id_taken" }, { status: 409 })

  const existingUser = await db.user.findUnique({ where: { waNumber: normalized } })
  if (existingUser) return NextResponse.json({ error: "wa_number_taken" }, { status: 409 })

  const user = await db.$transaction(async (tx) => {
    const created = await tx.user.create({
      data: {
        waNumber: normalized,
        panggilan,
        sapaan,
        level,
        levelName: LEVEL_NAME[level],
        email,
      },
    })
    await tx.transaction.create({
      data: { orderId, waNumber: normalized, status: "success" },
    })
    await tx.auditLog.create({
      data: {
        adminId: admin.id,
        targetUserId: created.id,
        action: "create_user",
        after: { waNumber: normalized, panggilan, orderId },
      },
    })
    return created
  })

  return NextResponse.json({ user })
}
