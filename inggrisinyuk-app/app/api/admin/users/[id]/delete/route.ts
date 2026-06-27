import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { requireAdminApi } from "@/lib/require-admin"

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const admin = await requireAdminApi()
  if (!admin) return NextResponse.json({ error: "unauthorized" }, { status: 401 })

  const { id } = await params
  const body = await req.json().catch(() => null)
  if (typeof body?.isDeleted !== "boolean") {
    return NextResponse.json({ error: "invalid_status" }, { status: 400 })
  }
  const isDeleted = body.isDeleted

  const target = await db.user.findUnique({ where: { id } })
  if (!target) return NextResponse.json({ error: "not_found" }, { status: 404 })

  const [updated] = await db.$transaction([
    db.user.update({
      where: { id },
      data: { isDeleted, deletedAt: isDeleted ? new Date() : null },
    }),
    db.auditLog.create({
      data: {
        adminId: admin.id,
        targetUserId: id,
        action: isDeleted ? "delete" : "restore",
        before: { isDeleted: target.isDeleted },
        after: { isDeleted },
      },
    }),
  ])

  return NextResponse.json({ user: updated })
}
