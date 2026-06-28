// Shared types/helpers for precomputed ChatGPT Listening URL templates.
//
// Used by lib/materi/listening-<level>.ts (one file per CEFR level).
// Same pattern as lib/materi/speaking-shared.ts — see architecture.md §6.3
// for the precompute workflow.

export interface ListeningDayData {
  day: number
  topik: string
  urlTemplate: string
}

export function buildListeningUrl(
  template: string,
  sapaan: string,
  panggilan: string
): string {
  return template
    .replace("%5BSAPAAN%5D", encodeURIComponent(sapaan))
    .replace("%5BPANGGILAN%5D", encodeURIComponent(panggilan))
}
