// Shared types/helpers for precomputed ChatGPT Speaking URL templates.
//
// Used by lib/materi/speaking-<level>.ts (one file per CEFR level).
// Same pattern as lib/materi/grammar-shared.ts — see architecture.md §6.3
// for the precompute workflow.

export interface SpeakingDayData {
  day: number
  topik: string
  urlTemplate: string
}

export function buildSpeakingUrl(
  template: string,
  sapaan: string,
  panggilan: string
): string {
  return template
    .replace("%5BSAPAAN%5D", encodeURIComponent(sapaan))
    .replace("%5BPANGGILAN%5D", encodeURIComponent(panggilan))
}
