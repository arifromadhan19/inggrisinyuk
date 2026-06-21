"use client"

import { useEffect, useState } from "react"
import { Check, Copy, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}

export function PaymentSuccess({
  name,
  orderId,
}: {
  name: string
  orderId: string
}) {
  const [secondsLeft, setSecondsLeft] = useState(14 * 60 + 59)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (secondsLeft <= 0) return
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [secondsLeft])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(orderId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable
    }
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="flex flex-col items-center text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-success/15">
          <Check className="size-9 text-success" strokeWidth={3} />
        </span>
        <h2 className="mt-4 text-2xl font-bold text-card-foreground text-balance">{"Pembayaran Berhasil! 🎉"}</h2>
        <p className="mt-2 text-muted-foreground">
          Akun kamu sudah aktif, <span className="font-medium text-card-foreground">{name}</span>!
        </p>
      </div>

      {/* QR code */}
      <div className="mt-6 flex flex-col items-center">
        <div className="flex size-48 items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/40">
          <QrPlaceholder />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">Scan dengan e-wallet/m-banking</p>
        <p className="mt-1 text-sm font-medium text-warning-foreground">
          QR berlaku: <span className="font-mono">{formatTime(secondsLeft)}</span>
        </p>
      </div>

      <div className="my-6 h-px bg-border" />

      {/* Important info box */}
      <div className="rounded-lg border border-warning/40 bg-warning-bg p-4">
        <p className="text-sm font-semibold text-warning-foreground">{"📋 Simpan Order ID kamu"}</p>
        <div className="mt-2 flex items-center gap-2">
          <code className="flex-1 rounded-md bg-card px-3 py-2 font-mono text-base font-semibold tracking-wide text-card-foreground">
            {orderId}
          </code>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={handleCopy}
            aria-label="Salin Order ID"
            className="shrink-0 bg-card"
          >
            {copied ? <Check className="size-4 text-success" /> : <Copy className="size-4" />}
          </Button>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-warning-foreground/80">
          Simpan ini. Jika ada masalah (salah nomor WA, dll) kamu perlu Order ID ini untuk lapor ke CS.
        </p>
      </div>

      <Button className="mt-6 h-12 w-full text-base font-semibold">
        Masuk ke Dashboard
        <ArrowRight className="size-4" />
      </Button>
    </div>
  )
}

function QrPlaceholder() {
  // Decorative QR-like grid
  return (
    <svg viewBox="0 0 100 100" className="size-40 text-card-foreground" aria-hidden="true">
      <rect x="6" y="6" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="6" />
      <rect x="72" y="6" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="6" />
      <rect x="6" y="72" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="6" />
      <rect x="13" y="13" width="8" height="8" fill="currentColor" />
      <rect x="79" y="13" width="8" height="8" fill="currentColor" />
      <rect x="13" y="79" width="8" height="8" fill="currentColor" />
      {[
        [40, 10],
        [50, 10],
        [60, 10],
        [40, 20],
        [60, 20],
        [40, 40],
        [50, 40],
        [70, 40],
        [80, 40],
        [10, 40],
        [20, 40],
        [10, 50],
        [30, 50],
        [50, 50],
        [70, 50],
        [90, 50],
        [40, 60],
        [60, 60],
        [80, 60],
        [50, 70],
        [70, 70],
        [90, 70],
        [40, 80],
        [60, 80],
        [80, 80],
        [50, 90],
        [70, 90],
        [90, 90],
        [40, 90],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="9" height="9" fill="currentColor" />
      ))}
    </svg>
  )
}
