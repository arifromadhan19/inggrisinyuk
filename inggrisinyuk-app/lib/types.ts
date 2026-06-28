export interface UserDTO {
  id: string
  waNumber: string | null
  email: string | null
  panggilan: string
  sapaan: string
  level: string
  levelName: string
  avatar: string | null
  placementTestDone: boolean
  dismissedPlacementTest: boolean
  placementTotalCorrect: number | null
}

export function toUserDTO(user: {
  id: string
  waNumber: string | null
  email: string | null
  panggilan: string
  sapaan: string
  level: string
  levelName: string
  avatar: string | null
  placementTestDone: boolean
  dismissedPlacementTest: boolean
  placementTotalCorrect: number | null
}): UserDTO {
  return {
    id: user.id,
    waNumber: user.waNumber,
    email: user.email,
    panggilan: user.panggilan,
    sapaan: user.sapaan,
    level: user.level,
    levelName: user.levelName,
    avatar: user.avatar,
    placementTestDone: user.placementTestDone,
    dismissedPlacementTest: user.dismissedPlacementTest,
    placementTotalCorrect: user.placementTotalCorrect,
  }
}
