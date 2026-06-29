// Shared types/helpers for precomputed ChatGPT Professional English URL templates.
//
// Used by lib/materi/professional-<level>.ts (one file per CEFR level).
// Same pattern as lib/materi/listening-shared.ts — see architecture.md §6.3
// for the precompute workflow.
//
// keyPhrases: string[] is MANDATORY — stored separately (not just in urlTemplate)
// so checkpoint Day 5/10/15/20 fill-in-blank can pull phrases directly.
// See profesional_analysis.md §2.1, §7.3, checkpoint_result_analysis.md §4.3.

export interface ProfessionalDayData {
  day: number
  topik: string
  keyPhrases: string[]
  urlTemplate: string
}

export function buildProfessionalUrl(
  template: string,
  sapaan: string,
  panggilan: string
): string {
  return template
    .replace("%5BSAPAAN%5D", encodeURIComponent(sapaan))
    .replace("%5BPANGGILAN%5D", encodeURIComponent(panggilan))
}
