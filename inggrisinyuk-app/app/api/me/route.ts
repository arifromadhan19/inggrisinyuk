import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUserId } from "@/lib/session"
import { toUserDTO } from "@/lib/types"
import { LEVEL_NAME } from "@/lib/placement-test-data"

export async function GET() {
  const userId = await getSessionUserId()
  if (!userId) return NextResponse.json({ error: "unauthorized" }, { status: 401 })

  const user = await db.user.findUnique({ where: { id: userId } })
  if (!user || user.isSuspended || user.isDeleted) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  }

  return NextResponse.json({ user: toUserDTO(user) })
}

export async function PATCH(req: NextRequest) {
  const userId = await getSessionUserId()
  if (!userId) return NextResponse.json({ error: "unauthorized" }, { status: 401 })

  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: "invalid_body" }, { status: 400 })

  const data: Record<string, unknown> = {}

  if (typeof body.sapaan === "string") data.sapaan = body.sapaan
  if (typeof body.panggilan === "string") data.panggilan = body.panggilan
  if (typeof body.avatar === "string") data.avatar = body.avatar
  if (typeof body.dismissedPlacementTest === "boolean") data.dismissedPlacementTest = body.dismissedPlacementTest

  if (typeof body.level === "string") {
    if (!(body.level in LEVEL_NAME)) {
      return NextResponse.json({ error: "invalid_level" }, { status: 400 })
    }
    data.level = body.level
    data.levelName = LEVEL_NAME[body.level]
  }

  const user = await db.user.update({ where: { id: userId }, data })
  return NextResponse.json({ user: toUserDTO(user) })
}
