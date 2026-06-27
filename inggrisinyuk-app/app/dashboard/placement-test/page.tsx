"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
} from "lucide-react"
import type { UserDTO } from "@/lib/types"
import {
  QUESTIONS,
  THRESHOLD,
  ORDER,
  LEVEL_NAME,
  scorePlacement,
  type PlacementQuestion,
} from "@/lib/placement-test-data"

interface ReadingPassage {
  id: "A" | "B"
  title: string
  text: string
}

const PASSAGES: ReadingPassage[] = [
  {
    id: "A",
    title: "New Library Opening Hours",
    text: `Hi Sara,

Thanks for your email. I'm writing to tell you about our new opening hours. From next Monday, the library will open at 8 a.m. and close at 9 p.m. on weekdays. On Saturdays, we open at 10 a.m. and close at 5 p.m. We are closed on Sundays.

Also, you can now borrow up to 10 books at a time, instead of 5. If you return books late, you will pay a fine of Rp2.000 per day.

Best,
The City Library`,
  },
  {
    id: "B",
    title: "Remote Work and the Modern Workplace",
    text: `Remote work, once considered a temporary response to global disruption, has now become a permanent feature of the modern workplace. While many employees praise the flexibility it offers, critics argue that it erodes the sense of community that physical offices once fostered. Studies suggest that although productivity has not declined, feelings of isolation among workers have risen sharply. Companies now face a delicate balancing act: how to preserve efficiency without sacrificing the human connections that drive long-term innovation.`,
  },
]

const LEVEL_BLURB: Record<string, string> = {
  A1: "Kamu baru mulai, dan itu langkah yang bagus! Yuk bangun pondasi dasar bahasa Inggrismu.",
  A2: "Dasar-dasarmu sudah lumayan! Saatnya memperluas vocabulary & pola kalimat.",
  B1: "Kamu sudah bisa berkomunikasi untuk hal-hal sehari-hari. Yuk naik ke level yang lebih mahir!",
  B2: "Kemampuanmu sudah cukup mahir. Yuk pertajam grammar & ekspresi yang lebih natural.",
  C1: "Levelmu sudah tinggi! Tinggal mengasah nuansa & kelancaran berbahasa.",
  C2: "Luar biasa — levelmu hampir setara penutur asli. Yuk pertahankan dan terus berlatih!",
}

const TOTAL_BY_LEVEL = QUESTIONS.reduce<Record<string, number>>((acc, q) => {
  acc[q.level] = (acc[q.level] ?? 0) + 1
  return acc
}, {})

const PART_LABEL: Record<PlacementQuestion["part"], string> = {
  grammar: "Grammar",
  vocabulary: "Vocabulary",
  reading: "Reading",
}

const TOTAL_SECONDS = 30 * 60

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}

type Step = "intro" | "test" | "result"

export default function PlacementTestPage() {
  const router = useRouter()
  const [user, setUser] = useState<UserDTO | null>(null)
  const [step, setStep] = useState<Step>("intro")
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS)
  const submittedRef = useRef(false)

  useEffect(() => {
    fetch("/api/me").then(async (res) => {
      if (!res.ok) { router.replace("/login"); return }
      const { user } = await res.json()
      setUser(user)
    })
  }, [router])

  useEffect(() => {
    if (step !== "test") return
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev <= 1 ? 0 : prev - 1))
    }, 1000)
    return () => clearInterval(interval)
  }, [step])

  useEffect(() => {
    if (step === "test" && secondsLeft === 0 && !submittedRef.current) {
      submittedRef.current = true
      setStep("result")
    }
  }, [step, secondsLeft])

  if (!user) return null

  const question = QUESTIONS[current]
  const passage = question.passageId ? PASSAGES.find((p) => p.id === question.passageId) : undefined
  const answeredCount = Object.keys(answers).length
  const isLast = current === QUESTIONS.length - 1

  function selectAnswer(index: number) {
    setAnswers((prev) => ({ ...prev, [question.id]: index }))
  }

  function goNext() {
    if (isLast) { handleSubmit(); return }
    setCurrent((c) => Math.min(c + 1, QUESTIONS.length - 1))
  }

  function goPrev() {
    setCurrent((c) => Math.max(c - 1, 0))
  }

  function handleSubmit() {
    const unanswered = QUESTIONS.length - answeredCount
    if (unanswered > 0) {
      const ok = window.confirm(
        `Masih ada ${unanswered} soal yang belum dijawab. Soal kosong dihitung salah. Yakin mau selesai sekarang?`
      )
      if (!ok) return
    }
    submittedRef.current = true
    setStep("result")
  }

  async function handleFinish() {
    await fetch("/api/placement-test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers }),
    })
    router.replace("/dashboard/panduan")
  }

  if (step === "intro") {
    return (
      <div className="flex min-h-screen flex-col bg-slate-50">
        <header className="sticky top-0 z-50 border-b border-border bg-background shadow-sm">
          <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
            <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <ArrowLeft className="size-4" />
              Kembali
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-sm font-semibold text-foreground">Placement Test</span>
          </div>
        </header>

        <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center px-4 py-10 sm:px-6">
          <div className="w-full rounded-2xl border border-border bg-white p-6 text-center shadow-sm sm:p-8">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-amber-100">
              <GraduationCap className="size-8 text-amber-600" />
            </div>
            <h1 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">Placement Test</h1>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Cari tahu level CEFR kamu yang paling pas — dari A1 sampai C2 — supaya materi belajarmu nyambung sejak hari pertama.
            </p>

            <div className="mt-6 flex flex-col gap-3 text-left">
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white text-sm font-bold text-primary shadow-sm">
                  40
                </span>
                <p className="text-sm text-foreground">Soal pilihan ganda — Grammar, Vocabulary &amp; Reading</p>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600 shadow-sm">
                  <Clock className="size-4" />
                </span>
                <p className="text-sm text-foreground"><span className="font-bold text-amber-700">±30 menit</span> — waktu total, bukan per soal. Siapkan waktu luangmu ya!</p>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white text-primary shadow-sm">
                  <BookOpen className="size-4" />
                </span>
                <p className="text-sm text-foreground">Soal makin sulit di bagian akhir — itu wajar, tandanya levelmu makin tinggi</p>
              </div>
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              Boleh kembali ke soal sebelumnya selama waktu masih ada. Jawaban kosong dihitung salah, jadi usahakan isi semua ya.
            </p>

            <button
              onClick={() => setStep("test")}
              className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Yuk, Mulai Tes
              <ArrowRight className="size-4" />
            </button>

            <div className="mt-3 flex justify-center">
              <button
                onClick={async () => {
                  await fetch("/api/me", {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ dismissedPlacementTest: true, level: "A1" }),
                  })
                  router.replace("/dashboard/panduan")
                }}
                className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground underline underline-offset-4 decoration-muted-foreground/40 transition-colors hover:text-foreground hover:decoration-foreground/50"
              >
                Nanti dulu — saya pilih level sendiri
                <ArrowRight className="size-3.5" />
              </button>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (step === "test") {
    const progressPct = Math.round(((current + 1) / QUESTIONS.length) * 100)
    const isLowTime = secondsLeft <= 5 * 60

    return (
      <div className="flex min-h-screen flex-col bg-slate-50">
        <header className="sticky top-0 z-50 border-b border-border bg-background px-4 py-3 shadow-sm sm:px-6">
          <div className="mx-auto flex max-w-2xl items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                <span>Soal {current + 1} dari {QUESTIONS.length}</span>
                <span>{progressPct}%</span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progressPct}%` }} />
              </div>
            </div>
            <div className={`flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-bold ${isLowTime ? "bg-red-100 text-red-700" : "bg-slate-100 text-foreground"}`}>
              <Clock className="size-4" />
              {formatTime(secondsLeft)}
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-6 sm:px-6">
          {passage && (
            <div className="mb-4 rounded-2xl border border-border bg-white p-4 shadow-sm">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{passage.title}</p>
              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-foreground">{passage.text}</p>
            </div>
          )}

          <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
            <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-700">
              {PART_LABEL[question.part]}
            </span>
            <h2 className="mt-3 text-base font-semibold leading-relaxed text-foreground sm:text-lg">{question.question}</h2>

            <div className="mt-4 flex flex-col gap-2.5">
              {question.options.map((opt, i) => {
                const isSelected = answers[question.id] === i
                return (
                  <button
                    key={i}
                    onClick={() => selectAnswer(i)}
                    className={`flex items-center gap-3 rounded-xl border-2 p-3.5 text-left text-sm transition-all ${
                      isSelected
                        ? "border-primary bg-primary/5 font-semibold text-primary"
                        : "border-border text-foreground hover:border-primary/30 hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        isSelected ? "bg-primary text-primary-foreground" : "bg-slate-100 text-muted-foreground"
                      }`}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    {opt}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <button
              onClick={goPrev}
              disabled={current === 0}
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground transition-all disabled:cursor-not-allowed disabled:opacity-40 hover:bg-slate-50"
            >
              <ArrowLeft className="size-4" />
              Sebelumnya
            </button>

            <button
              onClick={goNext}
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90"
            >
              {isLast ? "Selesai" : "Berikutnya"}
              <ArrowRight className="size-4" />
            </button>
          </div>

          {!isLast && (
            <div className="mt-3 text-center">
              <button
                onClick={handleSubmit}
                className="text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground hover:underline"
              >
                Selesai lebih awal
              </button>
            </div>
          )}
        </main>
      </div>
    )
  }

  const { level, correctByLevel } = scorePlacement(answers)
  const grammarTotal = QUESTIONS.filter((q) => q.part === "grammar").length
  const vocabTotal = QUESTIONS.filter((q) => q.part === "vocabulary").length
  const readingTotal = QUESTIONS.filter((q) => q.part === "reading").length
  const grammarCorrect = QUESTIONS.filter((q) => q.part === "grammar" && answers[q.id] === q.answerIndex).length
  const vocabCorrect = QUESTIONS.filter((q) => q.part === "vocabulary" && answers[q.id] === q.answerIndex).length
  const readingCorrect = QUESTIONS.filter((q) => q.part === "reading" && answers[q.id] === q.answerIndex).length

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <main className="mx-auto w-full max-w-xl flex-1 px-4 py-10 sm:px-6">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 p-6 text-center shadow-lg sm:p-8">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white/15">
            <CheckCircle2 className="size-7 text-white" />
          </div>
          <p className="mt-3 text-xs font-bold uppercase tracking-widest text-indigo-200">Tes selesai!</p>
          <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
            Level kamu: {level} — {LEVEL_NAME[level]} 🎉
          </h1>
          <p className="mt-2 text-sm text-indigo-200">{LEVEL_BLURB[level]}</p>
        </div>

        <div className="mt-5 rounded-2xl border border-border bg-white px-5 py-4 shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Ringkasan per Level</p>
          <div className="mt-3 flex items-end gap-2">
            {ORDER.map((lvl) => {
              const total = TOTAL_BY_LEVEL[lvl] ?? 0
              const correct = correctByLevel[lvl] ?? 0
              const pct = total > 0 ? Math.round((correct / total) * 100) : 0
              const passed = correct >= THRESHOLD[lvl]
              return (
                <div key={lvl} className="flex flex-1 flex-col items-center gap-1.5">
                  <div className="relative h-16 w-full overflow-hidden rounded-lg bg-muted">
                    <div
                      className={`absolute inset-x-0 bottom-0 rounded-lg transition-all ${passed ? "bg-primary" : "bg-amber-300"}`}
                      style={{ height: `${pct}%` }}
                    />
                  </div>
                  <span className={`text-[11px] font-bold ${lvl === level ? "text-primary" : "text-muted-foreground"}`}>{lvl}</span>
                  <span className="text-[10px] text-muted-foreground">{correct}/{total}</span>
                </div>
              )
            })}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-3 text-center">
            <div>
              <p className="text-sm font-bold text-foreground">{grammarCorrect}/{grammarTotal}</p>
              <p className="text-[11px] text-muted-foreground">Grammar</p>
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">{vocabCorrect}/{vocabTotal}</p>
              <p className="text-[11px] text-muted-foreground">Vocabulary</p>
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">{readingCorrect}/{readingTotal}</p>
              <p className="text-[11px] text-muted-foreground">Reading</p>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 px-5 py-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-sky-500">💬 Langkah Selanjutnya</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            Materi belajarmu sudah disesuaikan ke level <span className="font-semibold">{level} — {LEVEL_NAME[level]}</span>. Kamu tetap bisa ganti level manual lewat halaman profil kapan saja.
          </p>
        </div>

        <button
          onClick={handleFinish}
          className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90"
        >
          Mulai Belajar
          <ArrowRight className="size-4" />
        </button>
      </main>
    </div>
  )
}
