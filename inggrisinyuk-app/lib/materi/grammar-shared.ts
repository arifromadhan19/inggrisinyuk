// Shared types/helpers for precomputed ChatGPT Grammar URL templates.
//
// Used by lib/materi/grammar-<level>.ts (one file per CEFR level).
// Same pattern as lib/materi/vocab-shared.ts — see architecture.md §6.3
// for the precompute workflow.

export interface GrammarDayData {
  day: number
  topik: string
  urlTemplate: string
}

export function buildGrammarUrl(
  template: string,
  sapaan: string,
  panggilan: string
): string {
  return template
    .replace("%5BSAPAAN%5D", encodeURIComponent(sapaan))
    .replace("%5BPANGGILAN%5D", encodeURIComponent(panggilan))
}
