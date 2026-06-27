"use client"

import type React from "react"
import { useState } from "react"
import { Check } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function CheckoutForm({
  onSuccess,
}: {
  onSuccess: (name: string) => void
}) {
  const [name, setName] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate payment processing
    setTimeout(() => {
      setSubmitting(false)
      onSuccess(name.trim() || "Sahabat")
    }, 1200)
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <h1 className="text-2xl font-bold text-card-foreground text-balance">Daftar &amp; Beli Akses</h1>
      <p className="mt-2 text-sm text-muted-foreground text-pretty">
        Isi data di bawah untuk membuat akun sekaligus bayar
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
        {/* Nama */}
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
          />
          <p className="text-xs text-muted-foreground">Digunakan AI tutor untuk menyapa kamu</p>
        </div>

        {/* WhatsApp */}
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
          />
          <p className="text-xs font-medium text-warning-foreground">
            {"⚠️ Pastikan benar — digunakan sebagai kunci login kamu"}
          </p>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email (opsional)</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="contoh: arif@email.com"
          />
          <p className="text-xs text-muted-foreground">Tidak wajib. Tidak digunakan untuk login.</p>
        </div>

        {/* Payment method */}
        <div className="flex flex-col gap-2">
          <Label>Metode Pembayaran</Label>
          <div className="flex items-center gap-3 rounded-lg border-2 border-primary bg-primary/5 p-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-card font-bold text-primary shadow-sm">
              QR
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-card-foreground">QRIS</p>
              <p className="text-xs text-muted-foreground">Semua e-wallet &amp; mobile banking</p>
            </div>
            <Badge className="bg-success text-success-foreground hover:bg-success">Tersedia</Badge>
            <span className="flex size-5 items-center justify-center rounded-full bg-primary">
              <Check className="size-3 text-primary-foreground" strokeWidth={3} />
            </span>
          </div>
        </div>

        <Button type="submit" disabled={submitting} className="h-12 w-full text-base font-semibold">
          {submitting ? "Memproses..." : "Beli Sekarang — Rp 99.000"}
        </Button>
        <p className="text-center text-xs text-muted-foreground text-pretty">
          Dengan melanjutkan, kamu setuju dengan syarat &amp; ketentuan Inggrisin Yuk
        </p>
      </form>
    </div>
  )
}
