import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { createSession } from "@/lib/session"

export async function GET(req: NextRequest) {
  const orderId = req.nextUrl.searchParams.get("orderId")
  if (!orderId) {
    return NextResponse.json({ error: "order_id_required" }, { status: 400 })
  }

  const transaction = await db.transaction.findUnique({ where: { orderId } })
  if (!transaction) {
    return NextResponse.json({ error: "not_found" }, { status: 404 })
  }

  if (transaction.status !== "success") {
    return NextResponse.json({ status: transaction.status })
  }

  if (!transaction.userId) {
    return NextResponse.json({ status: "pending" })
  }

  const user = await db.user.findUnique({ where: { id: transaction.userId } })
  if (!user) {
    return NextResponse.json({ error: "user_not_found" }, { status: 404 })
  }

  await createSession(user.id)
  await db.user.update({ where: { id: user.id }, data: { lastActiveAt: new Date() } })

  const goToPlacementTest = !user.placementTestDone && !user.dismissedPlacementTest
  return NextResponse.json({ status: "success", goToPlacementTest })
}
