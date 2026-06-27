"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function SuspendButton({ userId, isSuspended }: { userId: string; isSuspended: boolean }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleToggle() {
    setLoading(true)
    await fetch(`/api/admin/users/${userId}/suspend`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isSuspended: !isSuspended }),
    })
    setLoading(false)
    router.refresh()
  }

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      className={`mt-3 h-9 rounded-lg px-4 text-sm font-semibold disabled:opacity-50 ${
        !isSuspended ? "bg-destructive/10 text-destructive hover:bg-destructive/20" : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
      }`}
    >
      {loading ? "Memproses..." : isSuspended ? "Aktifkan Kembali" : "Suspend Akun"}
    </button>
  )
}
