"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"

const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"]

export function CreateUserForm() {
  const router = useRouter()
  const [orderId, setOrderId] = useState("")
  const [waNumber, setWaNumber] = useState("")
  const [panggilan, setPanggilan] = useState("")
  const [sapaan, setSapaan] = useState("Kak")
  const [level, setLevel] = useState("A1")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    const res = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId, waNumber, panggilan, sapaan, level, email }),
    })
    if (res.ok) {
      const { user } = await res.json()
      router.push(`/admin/users/${user.id}`)
    } else {
      const body = await res.json().catch(() => null)
      setErrorMsg(
        body?.error === "order_id_taken"
          ? "Order ID sudah dipakai user lain."
          : body?.error === "wa_number_taken"
            ? "Nomor WA sudah dipakai user lain."
            : "Order ID, Nomor WA, dan Nama Panggilan wajib diisi."
      )
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="orderId" className="text-sm font-medium text-foreground">
          Order ID <span className="text-destructive">*</span>
        </label>
        <input
          id="orderId"
          required
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="INY-YYYYMMDD-XXXX"
          className="h-11 rounded-xl border border-border px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        <p className="text-xs text-muted-foreground">Wajib — dari konfirmasi transfer manual/Order ID checkout.</p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="waNumber" className="text-sm font-medium text-foreground">
          Nomor WhatsApp <span className="text-destructive">*</span>
        </label>
        <input
          id="waNumber"
          required
          value={waNumber}
          onChange={(e) => setWaNumber(e.target.value)}
          placeholder="08123456789"
          className="h-11 rounded-xl border border-border px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="panggilan" className="text-sm font-medium text-foreground">
          Nama Panggilan <span className="text-destructive">*</span>
        </label>
        <input
          id="panggilan"
          required
          value={panggilan}
          onChange={(e) => setPanggilan(e.target.value)}
          placeholder="Arif"
          className="h-11 rounded-xl border border-border px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="sapaan" className="text-sm font-medium text-foreground">
            Sapaan
          </label>
          <input
            id="sapaan"
            value={sapaan}
            onChange={(e) => setSapaan(e.target.value)}
            className="h-11 rounded-xl border border-border px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="level" className="text-sm font-medium text-foreground">
            Level
          </label>
          <select
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="h-11 rounded-xl border border-border px-4 text-sm outline-none focus:border-primary"
          >
            {CEFR_LEVELS.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email (opsional)
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11 rounded-xl border border-border px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {status === "error" && <p className="text-sm text-destructive">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 h-11 rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50"
      >
        {status === "loading" ? "Menyimpan..." : "Tambah User"}
      </button>
    </form>
  )
}
