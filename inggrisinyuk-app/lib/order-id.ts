import { randomBytes } from "crypto"

export function generateOrderId(): string {
  const now = new Date()
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, "0")
  const d = String(now.getDate()).padStart(2, "0")
  const suffix = randomBytes(4).toString("hex").toUpperCase()
  return `INY-${y}${m}${d}-${suffix}`
}
