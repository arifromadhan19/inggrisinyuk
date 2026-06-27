// Shared types/helpers for precomputed ChatGPT Vocabulary URL templates.
//
// Used by lib/materi/vocabulary-<level>.ts (one file per CEFR level).
// See architecture.md §6.3 for the precompute workflow.

export interface VocabDayData {
  day: number
  topik: string
  urlTemplate: string
}

export function buildVocabUrl(
  template: string,
  sapaan: string,
  panggilan: string
): string {
  return template
    .replace("%5BSAPAAN%5D", encodeURIComponent(sapaan))
    .replace("%5BPANGGILAN%5D", encodeURIComponent(panggilan))
}
