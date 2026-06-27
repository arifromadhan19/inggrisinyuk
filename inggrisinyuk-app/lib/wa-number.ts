export function normalizeWaNumber(input: string): string {
  const digits = input.replace(/[^\d]/g, "")
  if (digits.startsWith("0")) return `62${digits.slice(1)}`
  return digits
}
