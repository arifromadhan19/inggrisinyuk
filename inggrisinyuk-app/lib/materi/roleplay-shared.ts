// Shared types/helpers for precomputed ChatGPT Roleplay URL templates.
//
// Used by lib/materi/roleplay-<level>.ts (one file per CEFR level).
// See materi/roleplay_analysis.md §6-7 for the full design + precompute workflow,
// and architecture.md §6.3 for the general precompute pattern shared with other modules.
//
// Roleplay differs from other modules: besides [SAPAAN]/[PANGGILAN], the encoded
// urlTemplate also carries [CHARACTER_LINE], [CHARACTER_GUIDE], and [CHARACTER_REF]
// placeholder tokens (percent-encoded as %5B...%5D) because the lawan bicara
// (tokoh/karakter) is chosen by the user at runtime, not fixed per Day like topik.

export interface RoleplayDayData {
  day: number
  topik: string
  urlTemplate: string
}

export type RoleplayCharacterMode = "tokoh" | "custom"

export interface RoleplayCharacter {
  mode: RoleplayCharacterMode
  value: string
}

function characterRef(character: RoleplayCharacter): string {
  return character.mode === "tokoh" ? character.value : "karaktermu"
}

function characterLine(character: RoleplayCharacter): string {
  return character.mode === "tokoh"
    ? `Tokoh yang mau aku ajak ngobrol: ${character.value}.`
    : `Lawan bicara yang aku mau: ${character.value}.`
}

function characterGuide(character: RoleplayCharacter): string {
  return character.mode === "tokoh"
    ? `Perankan ${character.value} sesuai gaya bicara & kepribadian aslinya (kalau fiksi: dari sumber aslinya/film/buku; kalau publik figur: dari rekam jejak publiknya), konsisten sepanjang dialog.`
    : `Perankan karakter sesuai deskripsi ini secara konsisten sepanjang dialog.`
}

export function buildRoleplayUrl(
  template: string,
  sapaan: string,
  panggilan: string,
  character: RoleplayCharacter
): string {
  return template
    .replace("%5BSAPAAN%5D", encodeURIComponent(sapaan))
    .replace("%5BPANGGILAN%5D", encodeURIComponent(panggilan))
    .replace("%5BCHARACTER_LINE%5D", encodeURIComponent(characterLine(character)))
    .replace("%5BCHARACTER_GUIDE%5D", encodeURIComponent(characterGuide(character)))
    .replaceAll("%5BCHARACTER_REF%5D", encodeURIComponent(characterRef(character)))
}
