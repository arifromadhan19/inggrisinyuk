"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function DeleteRestoreButton({ userId, isDeleted }: { userId: string; isDeleted: boolean }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleToggle() {
    if (!isDeleted && !window.confirm("Hapus user ini? Data tetap tersimpan dan bisa di-restore kapan saja.")) return
    setLoading(true)
    await fetch(`/api/admin/users/${userId}/delete`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isDeleted: !isDeleted }),
    })
    setLoading(false)
    router.refresh()
  }

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      className={`mt-3 h-9 rounded-lg px-4 text-sm font-semibold disabled:opacity-50 ${
        isDeleted ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200" : "bg-destructive/10 text-destructive hover:bg-destructive/20"
      }`}
    >
      {loading ? "Memproses..." : isDeleted ? "Restore User" : "Hapus User"}
    </button>
  )
}
