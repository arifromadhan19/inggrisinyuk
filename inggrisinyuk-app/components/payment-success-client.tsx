"use client"

import { useEffect, useRef, useState } from "react"
import { Loader2, CheckCircle2, XCircle } from "lucide-react"

type PollStatus = "pending" | "success" | "failed" | "expired" | "not_found"

export function PaymentSuccessClient({ orderId }: { orderId: string | null }) {
  const [status, setStatus] = useState<PollStatus>(orderId ? "pending" : "not_found")
  const redirected = useRef(false)

  useEffect(() => {
    if (!orderId) return

    let cancelled = false

    async function poll() {
      const res = await fetch(`/api/checkout/finalize?orderId=${encodeURIComponent(orderId as string)}`)
      if (cancelled) return

      if (!res.ok) {
        setStatus("not_found")
        return
      }

      const body = await res.json()
      if (cancelled) return

      if (body.status === "success") {
        setStatus("success")
        if (!redirected.current) {
          redirected.current = true
          window.location.href = body.goToPlacementTest ? "/dashboard/placement-test" : "/dashboard"
        }
        return
      }

      if (body.status === "failed" || body.status === "expired") {
        setStatus(body.status)
        return
      }

      setTimeout(poll, 2000)
    }

    poll()
    return () => {
      cancelled = true
    }
  }, [orderId])

  if (status === "pending") {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <Loader2 className="size-10 animate-spin text-primary" aria-hidden="true" />
        <div>
          <p className="font-semibold text-card-foreground">Memverifikasi pembayaran...</p>
          <p className="mt-1 text-sm text-muted-foreground">Mohon tunggu sebentar, jangan tutup halaman ini.</p>
        </div>
      </div>
    )
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <CheckCircle2 className="size-10 text-success" aria-hidden="true" />
        <div>
          <p className="font-semibold text-card-foreground">Pembayaran berhasil!</p>
          <p className="mt-1 text-sm text-muted-foreground">Mengarahkan kamu ke dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <XCircle className="size-10 text-destructive" aria-hidden="true" />
      <div>
        <p className="font-semibold text-card-foreground">
          {status === "expired" ? "Invoice sudah kadaluwarsa" : status === "failed" ? "Pembayaran gagal" : "Order tidak ditemukan"}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">Silakan ulangi dari halaman pembelian.</p>
      </div>
      <a href="/beli" className="text-sm font-semibold text-primary hover:underline">
        Kembali ke halaman pembelian
      </a>
    </div>
  )
}
