import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section id="beranda" className="bg-background px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Belajar Bahasa Inggris yang Seru, Personal, dan Langsung Praktik dengan AI
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Bukan aplikasi biasa — kamu langsung belajar bareng AI tutor Kak Arif, sesuai levelmu, sesuai topikmu, kapan
          saja dan di mana saja.
        </p>

        <div className="mt-8 inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-5 py-3 text-base font-semibold text-primary">
          <Sparkles className="size-5" aria-hidden="true" />
          Akses Selamanya — hanya Rp 99.000 sekali bayar
        </div>

        <div className="mt-8">
          <Button
            size="lg"
            nativeButton={false}
            className="h-14 rounded-xl px-8 text-base font-semibold sm:text-lg"
            render={<a href="#beli">Beli Sekarang — Rp 99.000</a>}
          />
          <p className="mt-3 text-sm text-muted-foreground">
            Tidak ada langganan bulanan. Tidak ada biaya tambahan.
          </p>
        </div>
      </div>
    </section>
  )
}
