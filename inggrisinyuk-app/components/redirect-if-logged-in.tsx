"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function RedirectIfLoggedIn() {
  const router = useRouter()

  useEffect(() => {
    fetch("/api/me").then((res) => {
      if (res.ok) router.replace("/dashboard")
    })
  }, [router])

  return null
}
