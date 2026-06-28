"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, MessageCircle, ArrowRight } from "lucide-react"

export interface PanduanModulConfig {
  emoji: string
  name: string
  tagline: string
  moduleRoute: string
  tips: { title: string; desc: string }[]
  triggers: { command: string; desc: string }[]
}

export function PanduanModul({ config }: { config: PanduanModulConfig }) {
  const router = useRouter()
  const [canGoBack, setCanGoBack] = useState(false)

  useEffect(() => {
    setCanGoBack(new URLSearchParams(window.location.search).get("back") === "1")
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
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
              <p className="text-sm font-semibold text-foreground">Panduan {config.name}</p>
              <p className="text-xs text-muted-foreground">Cara belajar optimal</p>
            </div>
          </div>
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
        <div className="text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10">
            <span className="text-2xl">{config.emoji}</span>
          </div>
          <h1 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">Panduan {config.name}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{config.tagline}</p>
        </div>

        <div className="mt-8 flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">1</div>
          <h2 className="text-base font-bold text-foreground">Tips Belajar Optimal</h2>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {config.tips.map((tip, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              <div className="p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-foreground">{tip.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{tip.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">2</div>
          <h2 className="text-base font-bold text-foreground">Trigger yang Bisa Kamu Pakai di ChatGPT</h2>
        </div>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
          <div className="flex flex-col divide-y divide-border">
            {config.triggers.map((t, i) => (
              <div key={i} className="flex items-start gap-3 p-4">
                <code className="shrink-0 whitespace-nowrap rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
                  {t.command}
                </code>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-xs font-semibold text-amber-800">Ketik trigger langsung di ChatGPT</p>
          <p className="mt-1 text-xs text-amber-700">
            Trigger di atas bisa kamu ketik kapan saja selama sesi berjalan — Kak Ara mengerti dan akan langsung merespons.
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={() => router.push(config.moduleRoute)}
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-primary py-3.5 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90"
          >
            Mulai Belajar {config.name}
            <ArrowRight className="size-4" />
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Panduan ini bisa dibuka kembali kapan saja dari halaman modul
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
