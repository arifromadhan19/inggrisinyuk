import { Check } from "lucide-react"

const features = [
  "5 Modul Utama (Vocabulary, Grammar, Speaking, Listening, Roleplay)",
  "6 Level CEFR per modul (A1–C2)",
  "900 Topik (150 topik/level, 30 topik/modul)",
  "Professional English — 30 topik bahasa Inggris dunia kerja",
  "Placement Test di setiap modul & level untuk membuktikan kemajuan Bahasa Inggrismu",
  "Akses Selamanya + semua update gratis",
]

export function OrderSummary() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm lg:sticky lg:top-6">
      <h2 className="text-lg font-semibold text-card-foreground">Ringkasan Pesanan</h2>

      <p className="mt-4 font-medium text-card-foreground">Inggrisin Yuk — Lifetime Access</p>

      <ul className="mt-4 space-y-2.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-success/15">
              <Check className="size-3 text-success" strokeWidth={3} />
            </span>
            <span className="leading-relaxed text-pretty">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="my-5 h-px bg-border" />

      <div className="flex items-center justify-between">
        <span className="font-medium text-card-foreground">Total</span>
        <span className="text-2xl font-bold text-primary">Rp 99.000</span>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">Sekali bayar, tidak ada biaya tambahan</p>
    </div>
  )
}
