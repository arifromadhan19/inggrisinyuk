"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function RedirectIfLoggedIn() {
  const router = useRouter()

  useEffect(() => {
    const stored = localStorage.getItem("iy_user")
    if (stored) {
      router.replace("/dashboard")
    }
  }, [router])

  return null
}
