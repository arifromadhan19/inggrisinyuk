"use client"

import { useState, type FormEvent } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowRight, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const GOOGLE_ERROR_MESSAGES: Record<string, string> = {
  suspended: "Akun kamu sedang di-suspend. Hubungi CS WhatsApp untuk bantuan.",
  google_failed: "Login dengan Google gagal. Coba lagi atau pakai nomor WhatsApp di bawah.",
}

export function LoginForm() {
  const searchParams = useSearchParams()
  const googleError = searchParams.get("error")

  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "loading") return

    setStatus("loading")

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ waNumber: phone }),
    })

    if (res.ok) {
      const { user } = await res.json()
      const goToPlacementTest = !user.placementTestDone && !user.dismissedPlacementTest
      window.location.href = goToPlacementTest ? "/dashboard/placement-test" : "/dashboard"
    } else {
      setStatus("error")
    }
  }

  const isLoading = status === "loading"
  const isError = status === "error"

  return (
    <div className="flex flex-col gap-5">
      {googleError && GOOGLE_ERROR_MESSAGES[googleError] && (
        <div role="alert" className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3">
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-destructive">{GOOGLE_ERROR_MESSAGES[googleError]}</p>
        </div>
      )}

      <a
        href="/api/auth/google"
        className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-border bg-white text-base font-semibold text-foreground shadow-sm transition-colors hover:bg-slate-50"
      >
        <GoogleIcon className="size-5" />
        Lanjut dengan Google
      </a>

      <div className="flex items-center gap-3" aria-hidden="true">
        <span className="h-px flex-1 bg-border" />
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">atau</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone" className="text-sm font-medium">
            Nomor WhatsApp
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="08123456789"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value)
              if (isError) setStatus("idle")
            }}
            disabled={isLoading}
            aria-invalid={isError}
            aria-describedby={isError ? "phone-error" : undefined}
            required
            className="h-12 text-base"
          />

          {isError && (
            <div
              id="phone-error"
              role="alert"
              className="mt-1 flex flex-col gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3"
            >
              <div className="flex items-start gap-2">
                <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-destructive">
                  Nomor WhatsApp tidak ditemukan. Pastikan nomor yang kamu masukkan sama dengan saat pembelian.
                </p>
              </div>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 pl-6 text-sm font-medium text-primary hover:underline"
              >
                Nomor WA berbeda saat daftar? Hubungi CS via WhatsApp
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          )}
        </div>

        <Button type="submit" disabled={isLoading} className="h-12 w-full text-base font-semibold">
          {isLoading ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Memverifikasi...
            </>
          ) : (
            <>
              Masuk dengan WA
              <ArrowRight className="size-4" aria-hidden="true" />
            </>
          )}
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Belum punya akses?{" "}
        <a href="/beli" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
          Beli Sekarang — Rp 99.000
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </a>
      </p>
    </div>
  )
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v2.97h3.86c2.26-2.09 3.56-5.17 3.56-8.79z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-2.97c-1.07.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.27v3.09C3.26 21.3 7.31 24 12 24z" />
      <path fill="#FBBC05" d="M5.27 14.32c-.24-.72-.38-1.49-.38-2.32s.14-1.6.38-2.32V6.59H1.27A11.93 11.93 0 0 0 0 12c0 1.92.46 3.74 1.27 5.41z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.18 15.24 0 12 0 7.31 0 3.26 2.7 1.27 6.59l4 3.09c.95-2.85 3.6-4.93 6.73-4.93z" />
    </svg>
  )
}
