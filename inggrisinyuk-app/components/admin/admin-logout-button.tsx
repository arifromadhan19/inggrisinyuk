"use client"

import { useRouter } from "next/navigation"

export function AdminLogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    await fetch("/api/admin/auth/logout", { method: "POST" })
    router.replace("/admin/login")
  }

  return (
    <button onClick={handleLogout} className="text-sm font-medium text-destructive hover:underline">
      Keluar
    </button>
  )
}
