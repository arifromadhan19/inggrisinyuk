export function deriveNicknameFromEmail(email: string): string {
  const localPart = email.split("@")[0] ?? ""
  return localPart.split(".")[0] || localPart
}
