import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUserId } from "@/lib/session"
import { toUserDTO } from "@/lib/types"
import { scorePlacement, LEVEL_NAME } from "@/lib/placement-test-data"

export async function POST(req: NextRequest) {
  const userId = await getSessionUserId()
  if (!userId) return NextResponse.json({ error: "unauthorized" }, { status: 401 })

  const body = await req.json().catch(() => null)
  const rawAnswers = body?.answers
  if (!rawAnswers || typeof rawAnswers !== "object") {
    return NextResponse.json({ error: "answers_required" }, { status: 400 })
  }

  const answers: Record<number, number> = {}
  for (const [questionId, optionIndex] of Object.entries(rawAnswers)) {
    if (typeof optionIndex === "number") answers[Number(questionId)] = optionIndex
  }

  const { level, correctByLevel, totalCorrect } = scorePlacement(answers)

  const [user] = await db.$transaction([
    db.user.update({
      where: { id: userId },
      data: {
        level,
        levelName: LEVEL_NAME[level],
        placementTestDone: true,
        dismissedPlacementTest: false,
        placementTotalCorrect: totalCorrect,
      },
    }),
    db.placementTestResult.create({
      data: {
        userId,
        levelRecommended: level,
        correctByLevel,
        totalCorrect,
      },
    }),
  ])

  return NextResponse.json({ user: toUserDTO(user) })
}
