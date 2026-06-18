"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { BookMarked, PenLine, Mic, Ear, Drama, Star, ChevronRight, BookOpen, ArrowRight, GraduationCap } from "lucide-react"
import { DashboardNavbar } from "@/components/dashboard-navbar"

interface User {
  phone: string
  name: string
  sapaan: string
  panggilan: string
  level: string
  levelName: string
  avatar?: string
  placementTestDone?: boolean
}

const CEFR = ["A1", "A2", "B1", "B2", "C1", "C2"]

const modules = [
  {
    key: "vocabulary",
    name: "Vocabulary",
    currentTopic: "Daily Routines & Activities",
    icon: BookMarked,
    colorStrip: "bg-blue-500",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    barColor: "bg-blue-500",
    day: 4,
    total: 30,
  },
  {
    key: "grammar",
    name: "Grammar",
    currentTopic: "Simple Present Tense",
    icon: PenLine,
    colorStrip: "bg-amber-500",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    barColor: "bg-amber-500",
    day: 0,
    total: 30,
  },
  {
    key: "speaking",
    name: "Speaking",
    currentTopic: "Introducing Yourself",
    icon: Mic,
    colorStrip: "bg-orange-500",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    barColor: "bg-orange-500",
    day: 0,
    total: 30,
  },
  {
    key: "listening",
    name: "Listening",
    currentTopic: "Short Conversations",
    icon: Ear,
    colorStrip: "bg-violet-500",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    barColor: "bg-violet-500",
    day: 0,
    total: 30,
  },
  {
    key: "roleplay",
    name: "Roleplay Practice",
    currentTopic: "At the Café",
    icon: Drama,
    colorStrip: "bg-emerald-500",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    barColor: "bg-emerald-500",
    day: 0,
    total: 30,
  },
]

const DAYS = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"]

function getGreeting() {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return "Good morning"
  if (hour >= 12 && hour < 17) return "Good afternoon"
  return "Good evening"
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem("iy_user")
    if (!stored) { router.replace("/login"); return }
    const userData = JSON.parse(stored)
    // Migration: old localStorage has panggilan="Kak" (sapaan) and name="Arif" (panggilan)
    if (!userData.sapaan) {
      userData.sapaan = userData.panggilan || "Kak"
      userData.panggilan = userData.name || ""
      localStorage.setItem("iy_user", JSON.stringify(userData))
    }
    setUser(userData)
  }, [router])

  function handleLogout() {
    localStorage.removeItem("iy_user")
    router.replace("/")
  }

  if (!user) return null

  const greeting = getGreeting()
  const todayIndex = new Date().getDay()
  const cefrIndex = CEFR.indexOf(user.level)
  const activeModule = modules.find((m) => m.day > 0) ?? modules[0]
  const ActiveIcon = activeModule.icon
  const showPlacementTest = !user.placementTestDone

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <DashboardNavbar
        sapaan={user.sapaan}
        panggilan={user.panggilan}
        level={user.level}
        levelName={user.levelName}
        avatar={user.avatar}
        onLogout={handleLogout}
      />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 sm:py-8">

        {/* Greeting + Streak */}
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-lg font-bold text-foreground sm:text-xl">
              {greeting}, {user.sapaan} {user.panggilan}! 👋
            </h1>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Level{" "}
              <span className="font-semibold text-primary">{user.level} — {user.levelName}</span>
              {" "}· Yuk lanjut latihan!
            </p>
          </div>

          {/* Streak card */}
          <div className="flex items-center gap-4 self-start rounded-2xl border border-orange-200 bg-orange-50 px-4 py-3">
            <div className="text-center">
              <div className="flex items-end gap-1 leading-none">
                <span className="text-2xl">🔥</span>
                <span className="text-2xl font-extrabold text-orange-600">1</span>
              </div>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-orange-600">Hari Streak</p>
            </div>
            <div className="h-8 w-px bg-orange-200" />
            <div>
              <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-orange-500">Minggu ini</p>
              <div className="flex gap-1.5">
                {DAYS.map((day, i) => (
                  <div key={day} className="flex flex-col items-center gap-0.5">
                    <div className={`size-5 rounded-full ${i === todayIndex ? "bg-orange-500" : "bg-orange-100"}`} />
                    <span className="text-[9px] font-medium text-orange-400">{day.slice(0, 1)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Placement Test banner — hilang setelah 100% selesai */}
        {showPlacementTest && (
          <div className="mb-5 overflow-hidden rounded-2xl border border-amber-200 bg-amber-50 shadow-sm">
            <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-200">
                  <GraduationCap className="size-5 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Belum cek level CEFR kamu?</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Ikuti Placement Test singkat — 5–10 menit — untuk mulai belajar di level yang tepat.
                  </p>
                </div>
              </div>
              <div className="shrink-0 pl-13 sm:pl-0">
                <a
                  href="/dashboard/placement-test"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-amber-600"
                >
                  Mulai Sekarang
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Lanjutkan Belajar — hero card */}
        <div className="mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 shadow-lg">
          <div className="p-6 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0 flex-1">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-indigo-100">
                  <ActiveIcon className="size-3" />
                  {activeModule.name}
                </div>
                <h2 className="mt-2.5 text-xl font-bold text-white sm:text-2xl">
                  {activeModule.day > 0 ? "Lanjutkan Belajar" : "Mulai Belajar"}
                </h2>
                <p className="mt-1 text-sm font-medium text-indigo-200">{activeModule.currentTopic}</p>
                <div className="mt-2 flex items-center gap-2 text-xs text-indigo-300">
                  <span>Hari {activeModule.day === 0 ? 1 : activeModule.day} dari {activeModule.total}</span>
                  <span>·</span>
                  <span>{user.level} — {user.levelName}</span>
                </div>
                <div className="mt-3 h-1 w-40 overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-white"
                    style={{
                      width: `${Math.max(((activeModule.day === 0 ? 1 : activeModule.day) / activeModule.total) * 100, 4)}%`,
                    }}
                  />
                </div>
              </div>
              <button className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl bg-white px-6 py-3 text-sm font-bold text-indigo-700 shadow-md transition-all hover:bg-indigo-50 sm:self-center">
                Mulai Sekarang
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Semua Modul + Latihan Bebas — card besar */}
        <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Semua Modul
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {modules.map((mod) => {
            const ModIcon = mod.icon
            return (
              <div
                key={mod.key}
                className="flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className={`h-1.5 w-full ${mod.colorStrip}`} />
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-start justify-between">
                    <div className={`flex size-11 items-center justify-center rounded-xl ${mod.iconBg}`}>
                      <ModIcon className={`size-5 ${mod.iconColor}`} aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground">
                      {mod.day}/{mod.total}
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-card-foreground">{mod.name}</h3>
                  <p className="mt-0.5 truncate text-[11px] text-muted-foreground">{mod.currentTopic}</p>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full rounded-full ${mod.barColor} transition-all`}
                      style={{ width: `${(mod.day / mod.total) * 100}%` }}
                    />
                  </div>
                  <p className="mt-1 text-[10px] text-muted-foreground">Hari {mod.day} dari {mod.total}</p>
                </div>
              </div>
            )
          })}

          {/* Latihan Bebas — same grid */}
          <div className="flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-purple-200 bg-purple-50 shadow-sm transition-all hover:border-purple-300 hover:shadow-md">
            <div className="h-1.5 w-full bg-purple-400" />
            <div className="flex flex-1 flex-col p-4">
              <div className="flex items-start justify-between">
                <div className="flex size-11 items-center justify-center rounded-xl bg-purple-200">
                  <Star className="size-5 text-purple-600" />
                </div>
                <span className="rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-amber-950">
                  BONUS
                </span>
              </div>
              <h3 className="mt-3 text-sm font-bold text-card-foreground">Latihan Bebas</h3>
              <p className="mt-0.5 text-[11px] text-muted-foreground">Akses bebas · level CEFR kamu</p>
              <p className="mt-3 text-[10px] font-medium text-purple-600">
                Baca Bareng · Pronunciation · Vocab Mission
              </p>
            </div>
          </div>
        </div>

        {/* CEFR Journey bar */}
        <div className="mt-5 rounded-2xl border border-border bg-white px-5 py-4 shadow-sm">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            Perjalanan CEFR
          </p>
          <div className="flex items-end gap-1">
            {CEFR.map((lvl, i) => (
              <div key={lvl} className="flex flex-1 flex-col items-center gap-1.5">
                <div
                  className={`h-2 w-full rounded-full transition-all ${
                    i <= cefrIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
                <span
                  className={`text-[11px] font-semibold ${
                    i === cefrIndex ? "text-primary" : i < cefrIndex ? "text-primary/60" : "text-muted-foreground"
                  }`}
                >
                  {lvl}
                  {i === cefrIndex && <span className="ml-0.5">◀</span>}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Entry point: Panduan */}
        <div className="mt-3">
          <button className="inline-flex w-full items-center justify-between gap-3 rounded-xl border border-border bg-white px-4 py-3 text-sm text-muted-foreground shadow-sm transition-colors hover:bg-muted">
            <div className="flex items-center gap-2">
              <BookOpen className="size-4" />
              <span>Panduan Penggunaan — Cara pakai Inggrisin Yuk</span>
            </div>
            <ChevronRight className="size-4 shrink-0" />
          </button>
        </div>

        {/* Semangat belajar */}
        <div className="mt-5 rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 px-5 py-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-sky-500">
            💬 Semangat Hari Ini
          </p>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-foreground">
            "Every expert was once a beginner. Keep going!"
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
            Kamu sudah ada di sini — itu langkah paling berani. Konsisten setiap hari, dan hasilnya pasti terasa,{" "}
            <span className="font-medium">{user.sapaan} {user.panggilan}</span>. 💪
          </p>
        </div>
      </main>

      <footer className="border-t border-border px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">© 2026 Inggrisin Yuk</p>
          <div className="flex items-center gap-5">
            <a href="#" title="Instagram" className="text-muted-foreground/50 transition-colors hover:text-muted-foreground">
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" title="Facebook" className="text-muted-foreground/50 transition-colors hover:text-muted-foreground">
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" title="TikTok" className="text-muted-foreground/50 transition-colors hover:text-muted-foreground">
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.54V6.76a4.85 4.85 0 0 1-1.03-.07z" />
              </svg>
            </a>
            <a href="#" title="LinkedIn" className="text-muted-foreground/50 transition-colors hover:text-muted-foreground">
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
