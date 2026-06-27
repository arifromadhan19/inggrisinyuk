"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"

export function EditWaForm({ userId, currentWaNumber }: { userId: string; currentWaNumber: string }) {
  const router = useRouter()
  const [orderId, setOrderId] = useState("")
  const [waNumber, setWaNumber] = useState(currentWaNumber)
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "mismatch" | "success">("idle")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    const res = await fetch(`/api/admin/users/${userId}/wa`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId, waNumber }),
    })
    if (res.ok) {
      setStatus("success")
      router.refresh()
    } else {
      const body = await res.json().catch(() => null)
      setStatus(body?.error === "order_id_mismatch" ? "mismatch" : "error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3 flex flex-col gap-2">
      <label className="text-xs font-semibold text-muted-foreground" htmlFor="orderId">
        Order ID (verifikasi dari user)
      </label>
      <input
        id="orderId"
        value={orderId}
        onChange={(e) => {
          setOrderId(e.target.value)
          setStatus("idle")
        }}
        placeholder="INY-YYYYMMDD-XXXX"
        className="h-10 rounded-lg border border-border px-3 text-sm outline-none focus:border-primary"
      />
      <label className="text-xs font-semibold text-muted-foreground" htmlFor="waNumber">
        Nomor WhatsApp Baru
      </label>
      <input
        id="waNumber"
        value={waNumber}
        onChange={(e) => {
          setWaNumber(e.target.value)
          setStatus("idle")
        }}
        className="h-10 rounded-lg border border-border px-3 text-sm outline-none focus:border-primary"
      />
      {status === "mismatch" && (
        <p className="text-xs text-destructive">
          Order ID tidak ditemukan atau tidak cocok dengan nomor WA user ini. Minta user konfirmasi ulang Order ID-nya.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-destructive">Gagal update — nomor mungkin sudah dipakai user lain.</p>
      )}
      {status === "success" && <p className="text-xs text-emerald-600">Nomor WA berhasil diperbarui.</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="h-9 rounded-lg bg-primary text-sm font-semibold text-primary-foreground disabled:opacity-50"
      >
        {status === "loading" ? "Memverifikasi..." : "Verifikasi & Update Nomor WA"}
      </button>
    </form>
  )
}
