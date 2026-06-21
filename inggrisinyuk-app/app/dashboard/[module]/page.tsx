"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, BookOpen } from "lucide-react"
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

const MODULE_DATA: Record<string, {
  name: string
  tagline: string
  colorBg: string
  colorBtn: string
  colorBadge: string
  colorArrow: string
  accentColor: string
  emoji: string
  youtubeLabel: string
  completedDays: number
  topics: string[]
  bridgeFromDay?: number
  bridgeLabel?: string
}> = {
  vocabulary: {
    name: "Vocabulary",
    tagline: "Kosakata fungsional dan kontekstual",
    colorBg: "bg-gradient-to-br from-slate-700 to-blue-900",
    colorBtn: "border-blue-300 text-blue-100 hover:bg-blue-500",
    colorBadge: "bg-blue-600 text-white",
    colorArrow: "bg-blue-600",
    accentColor: "#2563eb",
    emoji: "📖",
    youtubeLabel: "Hafal Vocab Tanpa Hafalan",
    completedDays: 2,
    topics: [
      "Daily Routines & Activities", "Family & People", "Food & Drinks",
      "Shopping & Money", "Travel & Transportation", "Common Actions",
      "Places in Town", "Time & Calendar", "Feelings & Emotions",
      "Health & Body", "House & Furniture", "Weather",
      "Jobs & Workplaces", "School & Learning", "Basic Descriptions",
      "Describing People", "Describing Places", "Ordering Food",
      "Travel & Holidays", "Technology & Gadgets", "Hobbies & Free Time",
      "Transition Words for Speaking", "Common Collocations", "Phrasal Verbs (Everyday)",
      "Phrasal Verbs (Work & Study)", "Expressing Opinions", "Advanced Feelings & Emotions",
      "Common Fixed Expressions", "Business Basics", "Business Talk",
    ],
    bridgeFromDay: 22,
  },
  grammar: {
    name: "Grammar",
    tagline: "Tata bahasa Inggris yang tepat dan natural",
    colorBg: "bg-gradient-to-br from-stone-700 to-amber-900",
    colorBtn: "border-amber-300 text-amber-100 hover:bg-amber-500",
    colorBadge: "bg-amber-600 text-white",
    colorArrow: "bg-amber-600",
    accentColor: "#d97706",
    emoji: "✏️",
    youtubeLabel: "Grammar Tanpa Ribet",
    completedDays: 0,
    topics: [
      "Kata Benda (Noun)", "Kata Sifat (Adjective)", "Verb 1 (Sehari-hari)",
      "Kapan pakai Verb s/es", "Verb 2 (tadi/kemarin)", "Verb 1 VS Verb 2",
      "Do/does/did", "Is/am/are VS Was/were", "Do/does VS is/am/are",
      "V-ing (sedang terjadi)", "Did VS was/were", "Verb 3 (sudah terjadi)",
      "Verb 2 VS Verb 3", "Kapan pakai be", "Kapan pakai been",
      "Have been + V-ing", "Used to + Verb 1", "tobe + used to + V-ing",
      "Will (akan/masa depan)", "Will VS Going to", "Have to VS Must",
      "Penyesalan datang terlambat", "Berandai-andai (If I were...)", "5W + 1H",
      "Could, Would, Should", "Kalimat Passive (di/ter)", "Transition Words",
      "Who VS Whom", "Which & Whose", "Comparative & Superlative",
    ],
    bridgeFromDay: 22,
  },
  speaking: {
    name: "Speaking",
    tagline: "Latihan bicara langsung dengan AI coach",
    colorBg: "bg-gradient-to-br from-slate-700 to-orange-900",
    colorBtn: "border-orange-300 text-orange-100 hover:bg-orange-500",
    colorBadge: "bg-orange-600 text-white",
    colorArrow: "bg-orange-600",
    accentColor: "#ea580c",
    emoji: "🎙️",
    youtubeLabel: "Tips Percaya Diri Ngomong Inggris",
    completedDays: 0,
    topics: [
      "Introducing Yourself", "Asking Questions", "Talking About Daily Routines",
      "Describing People", "Describing Things Around You", "Talking About Time",
      "Likes and Dislikes", "Giving Directions", "Ordering Food and Drinks",
      "Making Small Talk", "Talking About Past Experiences", "Talking About Future Plans",
      "Describing Places", "Talking About Frequency", "Giving Opinions",
      "Agreeing and Disagreeing", "Making Suggestions", "Making Invitations",
      "Apologizing and Responding", "Offering Help", "Talking About Problems & Solutions",
      "Explaining Something Clearly", "Comparing People, Things, and Places", "Telling a Short Story",
      "Giving Instructions (How to...)", "Making Complaints Politely", "Talking About Expectations",
      "Talking About Habits (Past & Present)", "Talking About Preferences", "Mini Presentation",
    ],
    bridgeFromDay: 22,
  },
  listening: {
    name: "Listening",
    tagline: "Melatih pemahaman audio dalam konteks nyata",
    colorBg: "bg-gradient-to-br from-slate-700 to-violet-900",
    colorBtn: "border-violet-300 text-violet-100 hover:bg-violet-500",
    colorBadge: "bg-violet-600 text-white",
    colorArrow: "bg-violet-600",
    accentColor: "#7c3aed",
    emoji: "🎧",
    youtubeLabel: "Cara Cepat Paham Native Speaker",
    completedDays: 0,
    topics: [
      "My Morning Routine Story", "How I Spent My Weekend", "A Person I Admire",
      "My Favorite Place in My City", "A Simple Memory From School", "My Daily Life at Home",
      "A Short Story About a Pet", "My First Day at Work or School", "A Time I Got Lost in a New Place",
      "A Meal I Will Never Forget", "Unexpected Things That Happened", "My Next Plan or Goal",
      "A Time I Felt Sick", "A Problem I Solved on My Own", "My Most Memorable Trip",
      "The Best Gift I Ever Received", "A Funny or Embarrassing Moment", "A Challenge I Faced",
      "A Hobby That I Love", "A Friend Who Helped Me", "A Special Event I Attended",
      "A Day That Changed My Life", "My Personal Success Story", "What I Learned From a Mistake",
      "How I Organize My Day", "A Project I Completed", "How I Deal With Stress or Pressure",
      "Meeting Someone New", "A Dream or Ambition That I Have", "A Lesson from a Past Story",
    ],
    bridgeFromDay: 22,
  },
  roleplay: {
    name: "Roleplay Practice",
    tagline: "Simulasi percakapan nyata bersama AI",
    colorBg: "bg-gradient-to-br from-slate-700 to-emerald-900",
    colorBtn: "border-emerald-300 text-emerald-100 hover:bg-emerald-500",
    colorBadge: "bg-emerald-600 text-white",
    colorArrow: "bg-emerald-600",
    accentColor: "#059669",
    emoji: "🎭",
    youtubeLabel: "Roleplay Seru Bareng AI Coach",
    completedDays: 0,
    topics: [
      "Meeting New People", "Talking About Days", "Weekend Activity Plans",
      "Discussing the Weather", "Movie or Series Talk", "Asking About Hobbies",
      "Borrowing Household Items", "Transportation Plan Talk", "Comparing Product Choices",
      "Simple Etiquette Talk", "Delivery Problem Help", "Room/Apartment Inquiry",
      "Community Event Talk", "Reacting to News", "Sharing Achievements",
      "Daily Problem Advice", "Group Activity Planning", "How-To Explanation",
      "Conversation Follow-Up", "Health & Wellness Talk", "Giving Helpful Suggestions",
      "Talking About Feelings", "Making Simple Complaints", "Telling Short Stories",
      "Asking About Experiences", "Discussing Future Plans", "Asking for Clarification",
      "Handling Misunderstandings", "Solving Small Conflicts", "Ordering Coffee Drinks",
    ],
    bridgeFromDay: 22,
  },
  professional: {
    name: "English For Professionals",
    tagline: "Bahasa Inggris untuk dunia kerja dan karier",
    colorBg: "bg-gradient-to-br from-slate-700 to-cyan-900",
    colorBtn: "border-cyan-300 text-cyan-100 hover:bg-cyan-500",
    colorBadge: "bg-cyan-600 text-white",
    colorArrow: "bg-cyan-600",
    accentColor: "#0891b2",
    emoji: "💼",
    youtubeLabel: "English For Work — Tips Profesional",
    completedDays: 0,
    topics: [
      "Introducing Yourself Professionally", "Writing Professional Emails", "Business Meetings — Opening & Closing",
      "Giving a Presentation", "Making & Rejecting Offers", "Writing a CV/Resume in English",
      "Job Interview — Common Questions", "Job Interview — Behavioral Questions", "Negotiating a Salary",
      "Giving & Receiving Feedback at Work", "Leading a Team Meeting", "Writing Meeting Minutes",
      "Business Phone Calls", "Video Call Etiquette", "Professional Small Talk",
      "Handling Complaints from Clients", "Writing a Professional Report", "Project Updates & Status Reports",
      "Business Networking", "Presenting Data & Statistics", "Asking for Clarification Professionally",
      "Delegating Tasks", "Discussing Deadlines & Priorities", "Handling Difficult Situations at Work",
      "Professional Social Media & LinkedIn", "Cross-Cultural Communication", "Giving a Performance Review",
      "Writing a Business Proposal", "Client Relationship Management", "Advanced Business Presentations",
    ],
    bridgeFromDay: 22,
    bridgeLabel: "Advanced Professional",
  },
}

export default function ModulePage() {
  const router = useRouter()
  const params = useParams()
  const moduleKey = typeof params.module === "string" ? params.module : ""

  const [user, setUser] = useState<User | null>(null)
  const [completedSet, setCompletedSet] = useState<Set<number>>(new Set())
  const [showResetConfirm, setShowResetConfirm] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const mod = MODULE_DATA[moduleKey]

  useEffect(() => {
    const stored = localStorage.getItem("iy_user")
    if (!stored) { router.replace("/login"); return }
    setUser(JSON.parse(stored))
  }, [router])

  useEffect(() => {
    if (!mod) return
    setCompletedSet(new Set(Array.from({ length: mod.completedDays }, (_, i) => i + 1)))
  }, [mod])

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 100) }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function handleLogout() {
    localStorage.removeItem("iy_user")
    router.replace("/")
  }

  if (!mod) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Modul tidak ditemukan.</p>
      </div>
    )
  }

  if (!user) return null

  const progress = Math.round((completedSet.size / 30) * 100)

  function getMotivation(pct: number): string {
    if (pct === 0)   return "Yuk mulai perjalananmu! 🚀"
    if (pct <= 15)   return "Langkah pertama sudah diambil! 💪"
    if (pct <= 30)   return "Kamu makin keren, terus! 🔥"
    if (pct <= 50)   return "Sudah setengah jalan, luar biasa! ⭐"
    if (pct <= 70)   return "Hampir sampai, jangan berhenti! 🎯"
    if (pct <= 90)   return "Sedikit lagi, kamu pasti bisa! 🏆"
    if (pct < 100)   return "Hampir selesai, last push! 🎉"
    return "Selesai! Kamu luar biasa! 🎊"
  }

  function handleReset() {
    setCompletedSet(new Set())
    setShowResetConfirm(false)
  }

  function handleResetDay(day: number) {
    setCompletedSet(prev => { const next = new Set(prev); next.delete(day); return next })
  }

  function handleCompleteDay(day: number) {
    setCompletedSet(prev => { const next = new Set(prev); next.add(day); return next })
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">

      {/* Navbar — sama dengan dashboard */}
      <DashboardNavbar
        sapaan={user.sapaan}
        panggilan={user.panggilan}
        level={user.level}
        levelName={user.levelName}
        avatar={user.avatar}
        onLogout={handleLogout}
      />

      {/* Compact sticky bar — muncul saat scroll, fixed agar tidak makan space */}
      <div
        className={`fixed inset-x-0 top-16 z-40 ${mod.colorBg} transition-all duration-200 ${
          scrolled ? "translate-y-0 shadow-lg" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto flex h-12 max-w-6xl items-center gap-4 px-4 sm:px-6">
          <a
            href="/dashboard"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            <span>Kembali</span>
          </a>
          <div className="flex flex-1 items-center justify-center gap-2">
            <span className="text-base leading-none">{mod.emoji}</span>
            <span className="text-sm font-bold text-white">{mod.name}</span>
          </div>
          <span className="shrink-0 text-sm font-extrabold text-white">{progress}%</span>
        </div>
      </div>

      {/* Wrapper — menyamakan lebar header & list */}
      <div className="mx-auto w-full max-w-6xl flex-1 px-0 sm:px-6 sm:py-4">

        {/* Module Header */}
        <div className={`${mod.colorBg} px-4 pb-5 pt-5 sm:rounded-t-2xl sm:px-6`}>
          <a
            href="/dashboard"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Kembali ke Dashboard
          </a>

          {/* Judul + % sejajar */}
          <div className="mt-3 flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl leading-none">{mod.emoji}</span>
              <div>
                <h1 className="text-2xl font-bold text-white sm:text-3xl">{mod.name}</h1>
                <p className="mt-0.5 text-sm text-white/60">{mod.tagline}</p>
              </div>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-3xl font-extrabold leading-none text-white">
                {progress}<span className="text-base font-semibold text-white/60">%</span>
              </p>
              <p className="mt-1 text-[11px] leading-tight text-white/60">
                {getMotivation(progress)}
              </p>
            </div>
          </div>

          {/* Progress bar + reset sejajar di tengah bar */}
          <div className="mt-5">
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-white transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
              <div className="shrink-0">
                {showResetConfirm ? (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleReset}
                      className="rounded-lg bg-white/20 px-3 py-1.5 text-[11px] font-bold text-white hover:bg-white/30"
                    >
                      Ya, Reset
                    </button>
                    <button
                      onClick={() => setShowResetConfirm(false)}
                      className="rounded-lg px-3 py-1.5 text-[11px] text-white/50 hover:text-white"
                    >
                      Batal
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowResetConfirm(true)}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 px-3 py-1.5 text-[11px] font-semibold text-white/50 transition-colors hover:bg-white/10 hover:text-white/80"
                  >
                    <RotateCcw className="size-3" />
                    Reset
                  </button>
                )}
              </div>
            </div>
            <p className="mt-1.5 text-xs text-white/50">
              {completedSet.size} dari 30 topik selesai
            </p>
          </div>
        </div>

        {/* Panduan entry point */}
        <div className="flex items-center justify-end bg-white px-4 py-2.5 sm:border-x sm:border-border sm:px-6">
          <a
            href="/dashboard/panduan"
            className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600 transition-colors hover:bg-indigo-100"
          >
            <BookOpen className="size-3.5" />
            Panduan
          </a>
        </div>

        {/* Topic list */}
        <main className="bg-white sm:rounded-b-2xl sm:border sm:border-t-0 sm:border-border sm:shadow-sm">
          <div className="flex flex-col gap-2 p-3 sm:p-4">
            {mod.topics.map((topic, i) => {
              const day = i + 1
              const isCompleted = completedSet.has(day)
              const isNext = !isCompleted && day === completedSet.size + 1
              return (
                <div key={day}>
                  {mod.bridgeFromDay === day && (
                    <div className="flex items-center gap-3 px-2 py-3">
                      <div className="h-px flex-1 bg-amber-200" />
                      <div className="flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5">
                        <span className="text-sm leading-none">🌉</span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500">{mod.bridgeLabel ?? "A1 → A2 Bridge"}</span>
                      </div>
                      <div className="h-px flex-1 bg-amber-200" />
                    </div>
                  )}
                  <div
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 transition-all ${
                      isCompleted
                        ? "border-transparent bg-slate-50"
                        : isNext
                        ? "border-border bg-white shadow-sm"
                        : "border-border/40 bg-white hover:border-border hover:shadow-sm"
                    }`}
                    style={isNext ? { borderLeftColor: mod.accentColor, borderLeftWidth: "3px" } : undefined}
                  >
                    {/* Day badge */}
                    <span
                      className={`w-14 shrink-0 rounded-xl py-1 text-center text-[11px] font-bold tracking-wide ${
                        isCompleted
                          ? "text-slate-300"
                          : isNext
                          ? mod.colorBadge
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      DAY {day}
                    </span>

                    {/* Topic name */}
                    <span className={`flex-1 text-sm leading-snug ${
                      isCompleted
                        ? "text-slate-400"
                        : isNext
                        ? "font-semibold text-foreground"
                        : "font-medium text-foreground/80"
                    }`}>
                      {topic}
                    </span>

                    {/* Action */}
                    {isCompleted ? (
                      <button
                        onClick={() => handleResetDay(day)}
                        title="Klik untuk reset topik ini"
                        className="group flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-500 transition-all hover:bg-red-100 hover:text-red-400"
                      >
                        <CheckCircle2 className="size-5 group-hover:hidden" />
                        <RotateCcw className="hidden size-4 group-hover:block" />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleCompleteDay(day)}
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all hover:opacity-80 ${
                          isNext ? mod.colorArrow : "bg-slate-100 hover:bg-slate-200"
                        }`}
                      >
                        <ArrowRight className={`size-4 ${isNext ? "text-white" : "text-slate-400"}`} />
                      </button>
                    )}
                  </div>
                </div>
              )
            })}

            {/* Divider sebelum Day 31 */}
            <div className="flex items-center gap-3 px-4 py-2 sm:px-6">
              <div className="h-px flex-1 bg-amber-200" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Bonus</span>
              <div className="h-px flex-1 bg-amber-200" />
            </div>

            {/* Day 31 — Placement Test */}
            <button className="flex w-full items-center gap-4 bg-amber-50 px-4 py-5 text-left transition-colors hover:bg-amber-100 sm:px-6">
              <span className="w-16 shrink-0 rounded-xl bg-amber-400 py-1.5 text-center text-xs font-bold tracking-wide text-white">
                DAY 31
              </span>
              <div className="flex-1">
                <p className="text-base font-semibold text-foreground">Placement Test</p>
                <p className="mt-0.5 text-xs text-amber-600">
                  Uji pemahaman Day 1–30 · Dapat skor &amp; rekomendasi level
                </p>
              </div>
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-400">
                <ArrowRight className="size-4 text-white" />
              </div>
            </button>
          </div>
        </main>
      </div>

      {/* Footer — sama dengan dashboard */}
      <footer className="mt-6 border-t border-border px-4 py-4 sm:px-6">
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
