import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { requireAdminApi } from "@/lib/require-admin"
import { normalizeWaNumber } from "@/lib/wa-number"

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const admin = await requireAdminApi()
  if (!admin) return NextResponse.json({ error: "unauthorized" }, { status: 401 })

  const { id } = await params
  const body = await req.json().catch(() => null)
  const waNumber = typeof body?.waNumber === "string" ? body.waNumber : ""
  const orderId = typeof body?.orderId === "string" ? body.orderId.trim() : ""
  if (!waNumber.trim() || !orderId) {
    return NextResponse.json({ error: "wa_number_and_order_id_required" }, { status: 400 })
  }
  const normalized = normalizeWaNumber(waNumber)

  const target = await db.user.findUnique({ where: { id } })
  if (!target) return NextResponse.json({ error: "not_found" }, { status: 404 })

  const transaction = await db.transaction.findUnique({ where: { orderId } })
  if (!transaction || transaction.waNumber !== target.waNumber) {
    return NextResponse.json({ error: "order_id_mismatch" }, { status: 400 })
  }

  const existing = await db.user.findUnique({ where: { waNumber: normalized } })
  if (existing && existing.id !== id) {
    return NextResponse.json({ error: "wa_number_taken" }, { status: 409 })
  }

  const [updated] = await db.$transaction([
    db.user.update({ where: { id }, data: { waNumber: normalized } }),
    db.transaction.update({ where: { orderId }, data: { waNumber: normalized } }),
    db.auditLog.create({
      data: {
        adminId: admin.id,
        targetUserId: id,
        action: "update_wa",
        before: { waNumber: target.waNumber, orderId },
        after: { waNumber: normalized, orderId },
      },
    }),
  ])

  return NextResponse.json({ user: updated })
}
