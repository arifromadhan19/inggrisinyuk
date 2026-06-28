"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  Smartphone,
  Apple,
  Monitor,
  Globe,
  LogIn,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  ChevronLeft,
} from "lucide-react"

type Platform = "android" | "ios" | "desktop"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PLATFORMS: { id: Platform; label: string; icon: any }[] = [
  { id: "android", label: "Android", icon: Smartphone },
  { id: "ios", label: "iPhone / iPad", icon: Apple },
  { id: "desktop", label: "Laptop / PC", icon: Monitor },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const STEPS: Record<Platform, { icon: any; title: string; desc: string; cta?: { label: string; href: string }; ctaSecondary?: { label: string; href: string } }[]> = {
  android: [
    {
      icon: Globe,
      title: "Download ChatGPT",
      desc: "ChatGPT adalah AI tutor kamu. Download dulu di Google Play Store — gratis, tidak perlu berlangganan ChatGPT Plus.",
      cta: { label: "Download ChatGPT di Play Store", href: "https://play.google.com/store/apps/details?id=com.openai.chatgpt" },
    },
    {
      icon: Globe,
      title: "Download Chrome (jika belum)",
      desc: "Inggrisin Yuk bekerja paling baik di browser Chrome. Jika belum punya, download sekarang.",
      cta: { label: "Download Chrome di Play Store", href: "https://play.google.com/store/apps/details?id=com.android.chrome" },
    },
    {
      icon: LogIn,
      title: "Daftar & Login ChatGPT",
      desc: "Buka aplikasi ChatGPT yang sudah di-download, buat akun gratis (atau login jika sudah punya). Setelah login, kamu siap belajar bersama Kak Ara!",
    },
  ],
  ios: [
    {
      icon: Globe,
      title: "Download ChatGPT",
      desc: "ChatGPT adalah AI tutor kamu. Download dulu di App Store — gratis, tidak perlu berlangganan ChatGPT Plus.",
      cta: { label: "Download ChatGPT di App Store", href: "https://apps.apple.com/app/chatgpt/id6448311069" },
    },
    {
      icon: Globe,
      title: "Download Chrome (jika belum)",
      desc: "Inggrisin Yuk bekerja paling baik di browser Chrome. Jika belum punya, download sekarang.",
      cta: { label: "Download Chrome di App Store", href: "https://apps.apple.com/app/google-chrome/id535886823" },
    },
    {
      icon: LogIn,
      title: "Daftar & Login ChatGPT",
      desc: "Buka aplikasi ChatGPT yang sudah di-download, buat akun gratis (atau login jika sudah punya). Setelah login, kamu siap belajar bersama Kak Ara!",
    },
  ],
  desktop: [
    {
      icon: LogIn,
      title: "Daftar & Login ChatGPT",
      desc: "Buka chatgpt.com di browser, buat akun gratis (atau login jika sudah punya). Akun gratis sudah cukup — setelah login, kamu siap belajar bersama Kak Ara!",
      cta: { label: "Buka ChatGPT", href: "https://chatgpt.com" },
    },
  ],
}

export default function PanduanPage() {
  const router = useRouter()
  const [platform, setPlatform] = useState<Platform>("android")
  const [canGoBack, setCanGoBack] = useState(false)

  useEffect(() => {
    // ?back=1 is added by dashboard links (via <Link>), so this only
    // shows the back button when the user actually came from within the app.
    setCanGoBack(new URLSearchParams(window.location.search).get('back') === '1')
  }, [])

  const steps = STEPS[platform]

  function handlePaham() {
    router.replace("/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background shadow-sm">
        <div className="mx-auto flex h-16 max-w-2xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            {canGoBack && (
              <button
                onClick={() => router.back()}
                className="flex items-center justify-center rounded-xl p-1.5 text-muted-foreground transition-colors hover:bg-slate-100 hover:text-foreground"
                aria-label="Kembali"
              >
                <ChevronLeft className="size-5" />
              </button>
            )}
            <div>
              <p className="text-sm font-semibold text-foreground">Panduan Penggunaan</p>
              <p className="text-xs text-muted-foreground">Sebelum mulai belajar</p>
            </div>
          </div>
          {/* WA CS button */}
          <a
            href="https://wa.me/6285294569271?text=Hi%2C%20mohon%20dibantu%20untuk%20penggunaan%20aplikasi%20Inggrisin%20Yuk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-600"
          >
            <MessageCircle className="size-4" />
            Butuh bantuan?
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-8 sm:px-6">

        {/* Intro */}
        <div className="text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10">
            <CheckCircle2 className="size-7 text-primary" />
          </div>
          <h1 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">Satu langkah lagi!</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Kamu perlu akun ChatGPT untuk belajar bersama Kak Ara. Setup-nya cepat — ikuti panduan di bawah sesuai perangkatmu.
          </p>
        </div>

        {/* Setup Header */}
        <div className="mt-8 flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">1</div>
          <h2 className="text-base font-bold text-foreground">Setup ChatGPT di Perangkatmu</h2>
        </div>

        {/* Platform Tabs */}
        <div className="mt-4 flex gap-2 rounded-2xl border border-border bg-white p-1.5 shadow-sm">
          {PLATFORMS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setPlatform(id)}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-semibold transition-all ${
                platform === id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="size-3.5" />
              {label}
            </button>
          ))}
        </div>

        {/* Steps */}
        <div className="mt-5 flex flex-col gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                <div className="p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">
                          Langkah {i + 1}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm font-bold text-foreground">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>

                  {(step.cta || step.ctaSecondary) && (
                    <div className="mt-4 flex flex-wrap gap-2 pl-12">
                      {step.cta && (
                        <a
                          href={step.cta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                          {step.cta.label}
                          <ArrowRight className="size-3.5" />
                        </a>
                      )}
                      {step.ctaSecondary && (
                        <a
                          href={step.ctaSecondary.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-white px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-slate-50"
                        >
                          {step.ctaSecondary.label}
                          <ArrowRight className="size-3.5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Info box */}
        <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-xs font-semibold text-amber-800">Akun ChatGPT gratis sudah cukup</p>
          <p className="mt-1 text-xs text-amber-700">
            Kamu tidak perlu berlangganan ChatGPT Plus. Akun gratis sudah bisa digunakan untuk semua modul belajar di Inggrisin Yuk.
          </p>
        </div>

        {/* Cara Menggunakan */}
        <div className="mt-8">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">2</div>
            <h2 className="text-base font-bold text-foreground">Tonton Video Cara Pakai Inggrisin Yuk</h2>
          </div>

          {/* YouTube Embed */}
          <div className="overflow-hidden rounded-2xl border border-border bg-black shadow-sm">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/DUMMY_VIDEO_ID"
                title="Tutorial Cara Menggunakan Inggrisin Yuk"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          {/* Deskripsi di bawah video */}
          <div className="mt-4 flex flex-col gap-3">
            {[
              { step: 1, text: "Pilih modul yang ingin dipelajari di dashboard" },
              { step: 2, text: "Pilih level CEFR dan klik topik hari ini (Day X)" },
              { step: 3, text: 'Klik "Mulai Belajar" — ChatGPT terbuka otomatis dengan sesi yang sudah siap' },
              { step: 4, text: "Belajar bersama Kak Ara — ikuti instruksi yang muncul di ChatGPT" },
              { step: 5, text: "Topik otomatis tertandai selesai saat kamu kembali ke aplikasi" },
            ].map(({ step, text }) => (
              <div key={step} className="flex items-start gap-3 rounded-xl border border-border bg-white p-3.5">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                  {step}
                </span>
                <p className="text-sm text-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={handlePaham}
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-primary py-3.5 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90"
          >
            Paham, Lanjut ke Dashboard
            <ArrowRight className="size-4" />
          </button>
          <a
            href="https://wa.me/6285294569271?text=Hi%2C%20mohon%20dibantu%20untuk%20penggunaan%20aplikasi%20Inggrisin%20Yuk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 py-3 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
          >
            <MessageCircle className="size-4" />
            Masih bingung? Chat CS via WhatsApp
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Panduan ini bisa dibuka kembali kapan saja dari dashboard
        </p>
      </main>

      <footer className="border-t border-border px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-2xl flex-row items-center justify-center gap-6">
          <p className="text-xs text-muted-foreground">© 2026 Inggrisin Yuk</p>
          <div className="flex items-center gap-5">
            <a href="#" title="Instagram" className="text-muted-foreground/50 transition-colors hover:text-muted-foreground">
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" title="Facebook" className="text-muted-foreground/50 transition-colors hover:text-muted-foreground">
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" title="TikTok" className="text-muted-foreground/50 transition-colors hover:text-muted-foreground">
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.54V6.76a4.85 4.85 0 0 1-1.03-.07z" />
              </svg>
            </a>
            <a href="#" title="LinkedIn" className="text-muted-foreground/50 transition-colors hover:text-muted-foreground">
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
