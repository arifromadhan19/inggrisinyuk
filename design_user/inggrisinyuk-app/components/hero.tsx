import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section id="beranda" className="bg-background px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Text content */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Belajar Bahasa Inggris yang Seru, Personal, dan Langsung Praktik dengan AI
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Bukan kelas, bukan aplikasi biasa. Kak Ara, AI Coach Bahasa Inggris Personal kamu siap latih —
              sesuai level, sesuai topik, kapan saja dan di mana saja.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-5 py-3 text-base font-semibold text-primary">
              <Sparkles className="size-5" aria-hidden="true" />
              AI Coach Personal — Akses Selamanya Rp 99.000
            </div>

            <div className="mt-6">
              <Button
                size="lg"
                nativeButton={false}
                className="h-14 rounded-xl px-8 text-base font-semibold sm:text-lg"
                render={<a href="/beli">Beli Sekarang — Rp 99.000</a>}
              />
              <p className="mt-3 text-sm text-muted-foreground">
                Tidak ada langganan bulanan. Tidak ada biaya tambahan.
              </p>
            </div>
          </div>

          {/* Mascot image */}
          <div className="flex w-full flex-shrink-0 items-center justify-center lg:w-[400px]">
            <Image
              src="/icon_logo.png"
              alt="Inggrisin Yuk — AI Tutor Belajar Bahasa Inggris"
              width={400}
              height={400}
              className="h-auto w-64 sm:w-80 lg:w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
