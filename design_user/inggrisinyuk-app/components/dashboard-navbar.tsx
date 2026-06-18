"use client"

import Link from "next/link"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import { PenLine, LogOut, ChevronDown, GraduationCap, BookOpen } from "lucide-react"

interface DashboardNavbarProps {
  sapaan: string
  panggilan: string
  level: string
  levelName: string
  avatar?: string
  onLogout: () => void
}

export function DashboardNavbar({ sapaan, panggilan, level, levelName, avatar, onLogout }: DashboardNavbarProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const initials = panggilan.slice(0, 1).toUpperCase()
  const avatarSrc = avatar ? `/robot_icons/${avatar}` : null

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background shadow-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/dashboard" className="flex items-center gap-2 text-lg font-bold text-primary sm:text-xl">
          <Image
            src="/Icon_header.png"
            alt="Inggrisin Yuk"
            width={28}
            height={28}
            className="size-7 object-contain"
          />
          Inggrisin Yuk
        </Link>

        <div className="relative" ref={ref}>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2.5 rounded-xl px-3 py-2 transition-colors hover:bg-muted"
            aria-expanded={open}
            aria-haspopup="menu"
          >
            {avatarSrc ? (
              <Image
                src={avatarSrc}
                alt="Avatar"
                width={32}
                height={32}
                className="size-8 rounded-full object-contain bg-muted"
              />
            ) : (
              <div className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {initials}
              </div>
            )}
            <div className="hidden flex-col items-start text-left sm:flex">
              <span className="text-sm font-semibold leading-tight text-foreground">
                {sapaan} {panggilan}
              </span>
              <span className="text-xs leading-tight text-muted-foreground">
                {level} · {levelName}
              </span>
            </div>
            <ChevronDown
              className={`size-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <div
              role="menu"
              className="absolute right-0 top-full mt-2 w-52 overflow-hidden rounded-xl border border-border bg-background shadow-xl"
            >
              <div className="border-b border-border px-4 py-3">
                <p className="text-sm font-semibold text-foreground">
                  {sapaan} {panggilan}
                </p>
                <span className="mt-1.5 inline-flex rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {level} · {levelName}
                </span>
              </div>

              <div className="py-1">
                <Link
                  href="/dashboard/profil"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-muted"
                >
                  <PenLine className="size-4 text-muted-foreground" />
                  Edit Profil
                </Link>
                <div className="mx-4 my-1 h-px bg-border" />
                <Link
                  href="/dashboard/placement-test"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-muted"
                >
                  <GraduationCap className="size-4 text-muted-foreground" />
                  Placement Test
                </Link>
                <Link
                  href="/dashboard/panduan"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-muted"
                >
                  <BookOpen className="size-4 text-muted-foreground" />
                  Panduan Penggunaan
                </Link>
                <div className="mx-4 my-1 h-px bg-border" />
                <button
                  role="menuitem"
                  onClick={() => {
                    setOpen(false)
                    onLogout()
                  }}
                  className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-destructive transition-colors hover:bg-destructive/5"
                >
                  <LogOut className="size-4" />
                  Keluar
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
