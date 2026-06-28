"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Loader2, AlertCircle, Lock } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type Pending = { id: string; email: string; name: string | null }

export function CheckoutForm({
  pending,
  pendingExpired,
}: {
  pending: Pending | null
  pendingExpired: boolean
}) {
  const [tab, setTab] = useState<"wa" | "google">(pending ? "google" : "wa")
  const [name, setName] = useState(pending?.name ?? "")
  const [whatsapp, setWhatsapp] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const isLocked = pending !== null
  const isLoading = status === "loading"

  async function handleSubmitWa(e: React.FormEvent) {
    e.preventDefault()
    if (isLoading) return
    setStatus("loading")
    setErrorMessage("")

    const res = await fetch("/api/checkout/wa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nama: name, waNumber: whatsapp }),
    })

    if (res.ok) {
      const { invoiceUrl } = await res.json()
      window.location.href = invoiceUrl
      return
    }

    const body = await res.json().catch(() => null)
    setStatus("error")
    setErrorMessage(
      body?.error === "wa_number_taken"
        ? "Nomor WhatsApp ini sudah terdaftar. Coba masuk lewat halaman Login."
        : "Gagal membuat pesanan. Coba lagi sebentar."
    )
  }

  async function handleSubmitGoogle(e: React.FormEvent) {
    e.preventDefault()
    if (isLoading || !pending) return
    setStatus("loading")
    setErrorMessage("")

    const res = await fetch("/api/checkout/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pendingSignupId: pending.id, nama: name }),
    })

    if (res.ok) {
      const { invoiceUrl } = await res.json()
      window.location.href = invoiceUrl
      return
    }

    setStatus("error")
    setErrorMessage("Gagal membuat pesanan. Coba lagi sebentar.")
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <h1 className="text-2xl font-bold text-card-foreground text-balance">Lifetime Access — Rp 99.000</h1>
      <p className="mt-2 text-sm text-muted-foreground text-pretty">
        Isi data di bawah untuk membuat akun. Pembayaran diproses aman lewat Xendit.
      </p>

      {pendingExpired && (
        <div role="alert" className="mt-5 flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3">
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
          <div className="text-sm leading-relaxed text-destructive">
            <p>Link pendaftaran Google kamu sudah tidak berlaku.</p>
            <a href="/api/auth/google" className="mt-1 inline-flex items-center gap-1 font-semibold underline">
              Ulangi Login dengan Google
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}

      <div className="mt-6 grid grid-cols-2 gap-2">
        <button
          type="button"
          disabled={isLocked}
          onClick={() => setTab("wa")}
          className={`h-10 rounded-lg text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
            tab === "wa" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/70"
          }`}
        >
          Daftar dengan WA
        </button>
        <button
          type="button"
          disabled={isLocked}
          onClick={() => setTab("google")}
          className={`flex h-10 items-center justify-center gap-1.5 rounded-lg text-sm font-semibold transition-colors disabled:cursor-not-allowed ${
            tab === "google" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/70"
          }`}
        >
          {isLocked && <Lock className="size-3.5" aria-hidden="true" />}
          Daftar dengan Google
        </button>
      </div>

      {tab === "wa" && !isLocked && (
        <form onSubmit={handleSubmitWa} className="mt-6 flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name">
              Nama Panggilan <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="contoh: Arif"
              disabled={isLoading}
            />
            <p className="text-xs text-muted-foreground">Digunakan AI tutor untuk menyapa kamu</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="whatsapp">
              Nomor WhatsApp <span className="text-destructive">*</span>
            </Label>
            <Input
              id="whatsapp"
              type="tel"
              inputMode="numeric"
              required
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="contoh: 08123456789"
              disabled={isLoading}
            />
            <p className="text-xs font-medium text-warning-foreground">
              Pastikan benar — digunakan sebagai kunci login kamu
            </p>
          </div>

          {status === "error" && (
            <div role="alert" className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3">
              <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-destructive">{errorMessage}</p>
            </div>
          )}

          <Button type="submit" disabled={isLoading} className="h-12 w-full text-base font-semibold">
            {isLoading ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                Membuat pesanan...
              </>
            ) : (
              "Bayar Sekarang — Rp 99.000"
            )}
          </Button>
          <p className="text-center text-xs text-muted-foreground text-pretty">
            Kamu akan diarahkan ke halaman pembayaran Xendit (QRIS, e-wallet, atau VA)
          </p>
        </form>
      )}

      {tab === "google" && !isLocked && (
        <div className="mt-6 flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">
            Login dengan Google dulu — kami cek email kamu, lalu kamu kembali ke halaman ini untuk menyelesaikan pembayaran.
          </p>
          <a
            href="/api/auth/google"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-border bg-white text-base font-semibold text-foreground shadow-sm transition-colors hover:bg-slate-50"
          >
            Lanjut dengan Google
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      )}

      {tab === "google" && isLocked && pending && (
        <form onSubmit={handleSubmitGoogle} className="mt-6 flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2.5">
              <span className="flex-1 text-sm text-card-foreground">{pending.email}</span>
              <Lock className="size-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
            </div>
            <p className="text-xs text-muted-foreground">Dari akun Google kamu, tidak bisa diubah</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name">
              Nama Panggilan <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="contoh: Arif"
              disabled={isLoading}
            />
            <p className="text-xs text-muted-foreground">Digunakan AI tutor untuk menyapa kamu</p>
          </div>

          {status === "error" && (
            <div role="alert" className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3">
              <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-destructive">{errorMessage}</p>
            </div>
          )}

          <Button type="submit" disabled={isLoading} className="h-12 w-full text-base font-semibold">
            {isLoading ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                Membuat pesanan...
              </>
            ) : (
              "Bayar Sekarang — Rp 99.000"
            )}
          </Button>
          <p className="text-center text-xs text-muted-foreground text-pretty">
            Kamu akan diarahkan ke halaman pembayaran Xendit (QRIS, e-wallet, atau VA)
          </p>
        </form>
      )}

      <p className="mt-4 text-center text-xs text-muted-foreground text-pretty">
        Dengan melanjutkan, kamu setuju dengan syarat &amp; ketentuan Inggrisin Yuk
      </p>
    </div>
  )
}
