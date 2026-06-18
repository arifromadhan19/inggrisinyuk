"use client"

import { useState, type FormEvent } from "react"
import { ArrowRight, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const REGISTERED_NUMBERS: Record<string, { name: string; sapaan: string; panggilan: string; level: string; levelName: string; avatar: string }> = {
  "123456": { name: "Arif", sapaan: "Kak", panggilan: "Arif", level: "A1", levelName: "Beginner", avatar: "robot_03.png" },
  "08123456789": { name: "Arif", sapaan: "Kak", panggilan: "Arif", level: "A1", levelName: "Beginner", avatar: "robot_03.png" },
}

export function LoginForm() {
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "loading") return

    setStatus("loading")

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const normalized = phone.replace(/\s|-/g, "")
    const userData = REGISTERED_NUMBERS[normalized]
    if (userData) {
      localStorage.setItem("iy_user", JSON.stringify({ phone: normalized, ...userData }))
      window.location.href = "/dashboard"
    } else {
      setStatus("error")
    }
  }

  const isLoading = status === "loading"
  const isError = status === "error"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-card-foreground text-balance">Masuk ke Akun Kamu</h1>
        <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
          Masukkan nomor WhatsApp yang kamu daftarkan saat beli akses
        </p>
      </div>

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
            Masuk
            <ArrowRight className="size-4" aria-hidden="true" />
          </>
        )}
      </Button>

      <div className="flex items-center gap-3" aria-hidden="true">
        <span className="h-px flex-1 bg-border" />
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">atau</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Belum punya akun?{" "}
        <a href="/beli" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
          Beli Akses — Rp 99.000
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </a>
      </p>
    </form>
  )
}
