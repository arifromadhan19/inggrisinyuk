"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { BookMarked, PenLine, Mic, Ear, Drama, Star, BookOpen, ArrowRight, Briefcase } from "lucide-react"
import { DashboardNavbar } from "@/components/dashboard-navbar"
import type { UserDTO } from "@/lib/types"

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
  {
    key: "professional",
    name: "Professional English",
    currentTopic: "Introducing Yourself Professionally",
    icon: Briefcase,
    colorStrip: "bg-cyan-500",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-700",
    barColor: "bg-cyan-500",
    badge: "PRO",
    day: 0,
    total: 30,
  },
]

const DAILY_QUOTE = "Every expert was once a beginner. Keep going!"

function getGreeting() {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return "Good morning"
  if (hour >= 12 && hour < 17) return "Good afternoon"
  return "Good evening"
}

function getGreetingEmoji() {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 9)   return "☕"  // pagi — mulai hari
  if (hour >= 9 && hour < 12)  return "🎯"  // siang — fokus belajar
  if (hour >= 12 && hour < 17) return "📚"  // sore — lanjut sesi
  if (hour >= 17 && hour < 21) return "💡"  // malam awal — refleksi
  return "✨"                                // malam — istirahat
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<UserDTO | null>(null)

  useEffect(() => {
    fetch("/api/me").then(async (res) => {
      if (!res.ok) { router.replace("/login"); return }
      const { user } = await res.json()
      setUser(user)
    })
  }, [router])

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" })
    router.replace("/")
  }

  if (!user) return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <div className="sticky top-0 z-50 border-b border-border bg-background shadow-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="h-5 w-32 animate-pulse rounded-md bg-slate-200" />
          <div className="h-8 w-8 animate-pulse rounded-full bg-slate-200" />
        </div>
      </div>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
        <div className="mb-6 space-y-2">
          <div className="h-4 w-40 animate-pulse rounded-md bg-slate-200" />
          <div className="h-8 w-64 animate-pulse rounded-md bg-slate-200" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-32 animate-pulse rounded-2xl bg-slate-200" />
          ))}
        </div>
      </main>
    </div>
  )

  const greeting = getGreeting()
  const greetingEmoji = getGreetingEmoji()
  const streakDays = 2
  const todayIdx = new Date().getDay()                          // 0=Min … 6=Sab
  const weekStudied = Array.from({ length: 7 }, (_, i) => {    // hari mana saja yg sudah belajar
    const diff = (todayIdx - i + 7) % 7
    return diff < streakDays
  })
  const cefrIndex = CEFR.indexOf(user.level)
  const activeModule = modules.find((m) => m.day > 0) ?? modules[0]
  const ActiveIcon = activeModule.icon
  const totalCompleted = modules.reduce((sum, m) => sum + m.day, 0)
  const totalTopics = modules.reduce((sum, m) => sum + m.total, 0)
  const overallPct = totalTopics > 0 ? Math.round((totalCompleted / totalTopics) * 100) : 0

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
        <div className="mb-4 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-xs font-medium text-muted-foreground sm:text-sm">
              {greetingEmoji} {greeting}, {user.sapaan} {user.panggilan}
            </p>
            <h1 className="mt-1 text-[1.75rem] font-bold leading-[1.1] tracking-tight text-foreground sm:text-[2.5rem]">
              Yuk, Latih Bahasa Inggrismu!
            </h1>
          </div>

          {/* Streak — pill dengan 7 titik hari */}
          <div className="flex items-center gap-2.5 rounded-full bg-slate-900 px-4 py-2.5 shadow-md">
            <span className="flame-glow text-xl leading-none">🔥</span>
            <span className="text-sm font-extrabold text-white">Day {streakDays}</span>
            <span className="text-slate-600">·</span>
            <div className="flex items-center gap-1">
              {weekStudied.map((studied, i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all ${
                    i === todayIdx
                      ? "size-2.5 bg-orange-400 ring-2 ring-orange-400/30"
                      : studied
                      ? "size-2 bg-white"
                      : "size-2 bg-slate-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Lanjutkan Belajar — hero card */}
        <div className="mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 shadow-lg">
          <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
            <div className="min-w-0 flex-1">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-indigo-100">
                <ActiveIcon className="size-3" />
                {activeModule.name}
              </div>
              <h2 className="mt-2 font-heading text-lg font-bold text-white sm:text-xl">
                {activeModule.day > 0 ? "Yuk lanjutin dari kemarin!" : "Yuk mulai hari ini! 🚀"}
              </h2>
              <p className="mt-0.5 truncate text-sm font-medium text-indigo-200">{activeModule.currentTopic}</p>
              <div className="mt-1.5 flex items-center gap-2 text-xs text-indigo-300">
                <span>Hari {activeModule.day === 0 ? 1 : activeModule.day} dari {activeModule.total}</span>
                <span>·</span>
                <span>{user.level} — {user.levelName}</span>
              </div>
              <div className="mt-2.5 h-1 w-32 overflow-hidden rounded-full bg-white/20 sm:w-40">
                <div
                  className="h-full rounded-full bg-white"
                  style={{ width: `${Math.max(((activeModule.day === 0 ? 1 : activeModule.day) / activeModule.total) * 100, 4)}%` }}
                />
              </div>
            </div>
            <a
              href={`/dashboard/${activeModule.key}`}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-indigo-700 shadow-md transition-all hover:bg-indigo-50"
            >
              Mulai
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        {/* Semua Modul + Latihan Bebas — card besar */}
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-bold text-foreground">Pilih Modul Latihan</h3>
          <Link
            href="/dashboard/panduan-penggunaan?back=1"
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
          >
            <BookOpen className="size-3.5" />
            Panduan
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {modules.map((mod) => {
            const ModIcon = mod.icon
            return (
              <a
                key={mod.key}
                href={`/dashboard/${mod.key}`}
                className="flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className={`h-1 w-full ${mod.colorStrip}`} />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between">
                    <div className={`flex size-14 items-center justify-center rounded-2xl ${mod.iconBg}`}>
                      <ModIcon className={`size-7 ${mod.iconColor}`} aria-hidden="true" />
                    </div>
                    {"badge" in mod ? (
                      <span className="rounded-full bg-cyan-100 px-2.5 py-1 text-[11px] font-bold text-cyan-700">
                        {(mod as any).badge}
                      </span>
                    ) : (
                      <span className={`rounded-xl px-2.5 py-1 text-xs font-bold ${mod.iconBg} ${mod.iconColor}`}>
                        {Math.round((mod.day / mod.total) * 100)}%
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-base font-bold text-card-foreground">{mod.name}</h3>
                  <p className="mt-1 truncate text-xs text-muted-foreground">{mod.currentTopic}</p>
                  <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full rounded-full ${mod.barColor} transition-all`}
                      style={{ width: `${(mod.day / mod.total) * 100}%` }}
                    />
                  </div>
                  <div className="mt-1.5 flex items-center justify-between">
                    <p className="text-[11px] text-muted-foreground">
                      {mod.day === 0 ? "Belum mulai nih" : `${mod.day} dari ${mod.total} topik`}
                    </p>
                    {mod.day > 0 && mod.day < mod.total && (
                      <p className="text-[11px] font-medium text-primary/70">Lanjut yuk!</p>
                    )}
                  </div>
                </div>
              </a>
            )
          })}

          {/* Latihan Bebas — same grid */}
          <div className="flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-purple-200 bg-purple-50 shadow-sm transition-all hover:border-purple-300 hover:shadow-md">
            <div className="h-1 w-full bg-purple-400" />
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-purple-200">
                  <Star className="size-7 text-purple-600" />
                </div>
              </div>
              <h3 className="mt-4 text-base font-bold text-card-foreground">Latihan Bebas</h3>
              <p className="mt-1 text-xs text-muted-foreground">Akses bebas · level CEFR kamu</p>
              <p className="mt-4 text-[11px] font-medium text-purple-600">
                Baca Bareng · Pronunciation · Vocab Mission
              </p>
            </div>
          </div>
        </div>

        {/* CEFR Journey bar */}
        <div className="mt-5 rounded-2xl border border-border bg-white px-5 py-4 shadow-sm">
          {/* Header: label kiri, % kanan atas */}
          <div className="mb-3 flex items-center justify-between gap-2">
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              Perjalanan CEFR
            </p>
            <span className="text-base font-extrabold leading-none text-primary">{overallPct}%</span>
          </div>

          {/* Level bars — semua sejajar */}
          <div className="flex items-center gap-1">
            {CEFR.map((lvl, i) => (
              <div key={lvl} className="flex flex-1 flex-col items-center gap-1.5">
                {i < cefrIndex ? (
                  <div className="h-2 w-full rounded-full bg-primary" />
                ) : i === cefrIndex ? (
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${overallPct}%` }}
                    />
                  </div>
                ) : (
                  <div className="h-2 w-full rounded-full bg-muted" />
                )}
                <span
                  className={`text-[11px] font-semibold ${
                    i === cefrIndex ? "text-primary" : i < cefrIndex ? "text-primary/60" : "text-muted-foreground"
                  }`}
                >
                  {lvl}{i === cefrIndex && <span className="ml-0.5">◀</span>}
                </span>
              </div>
            ))}
          </div>

          {/* Footer: 4/150 topik kiri, level aktif kanan */}
          <div className="mt-2.5 flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground">
              {totalCompleted}/{totalTopics} topik
            </span>
            <span className="text-[11px] text-muted-foreground">
              Level aktif:{" "}
              <span className="font-semibold text-foreground">{user.level} — {user.levelName}</span>
            </span>
          </div>
        </div>

        {/* Semangat belajar */}
        <div className="mt-5 rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 px-5 py-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-sky-500">
            💬 Semangat Hari Ini
          </p>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-foreground">
            "{DAILY_QUOTE}"
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
            Kamu sudah ada di sini — itu langkah paling berani. Konsisten setiap hari, dan hasilnya pasti terasa,{" "}
            <span className="font-medium">{user.sapaan} {user.panggilan}</span>. 💪
          </p>
        </div>

        {/* Bantuan — entry point Panduan */}
        <Link
          href="/dashboard/panduan-penggunaan?back=1"
          className="group mt-6 flex items-center justify-between gap-4 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-5 shadow-md transition-all hover:shadow-lg hover:brightness-105"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-200">
              Panduan Penggunaan
            </p>
            <p className="mt-1 text-base font-bold text-white">
              Bingung mulai dari mana?
            </p>
            <p className="mt-0.5 text-sm text-indigo-200">
              Baca panduan singkat — 2 menit langsung paham 👌
            </p>
          </div>
          <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/20 transition-transform group-hover:translate-x-1">
            <BookOpen className="size-5 text-white" />
          </div>
        </Link>
      </main>

      <footer className="border-t border-border px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-row items-center justify-center gap-6">
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
