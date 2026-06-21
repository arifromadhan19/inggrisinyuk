"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, GraduationCap, ArrowRight } from "lucide-react"

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

const ROBOT_ICONS = Array.from({ length: 12 }, (_, i) => `robot_${String(i + 1).padStart(2, "0")}.png`)

const CEFR_LEVELS = [
  { value: "A1", label: "Beginner" },
  { value: "A2", label: "Elementary" },
  { value: "B1", label: "Intermediate" },
  { value: "B2", label: "Upper Intermediate" },
  { value: "C1", label: "Advanced" },
  { value: "C2", label: "Proficient" },
]

// Sama dengan data di dashboard — kelak dari backend
const MODULES = [
  { key: "vocabulary", day: 4, total: 30 },
  { key: "grammar",    day: 0, total: 30 },
  { key: "speaking",   day: 0, total: 30 },
  { key: "listening",  day: 0, total: 30 },
  { key: "roleplay",   day: 0, total: 30 },
]
const totalCompleted = MODULES.reduce((s, m) => s + m.day, 0)
const totalTopics    = MODULES.reduce((s, m) => s + m.total, 0)
const overallPct     = totalTopics > 0 ? Math.round((totalCompleted / totalTopics) * 100) : 0

export default function ProfilPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  const [selectedAvatar, setSelectedAvatar] = useState("robot_03.png")
  const [avatarSaved, setAvatarSaved] = useState(false)

  const [sapaan, setSapaan] = useState("Kak")
  const [panggilan, setPanggilan] = useState("")
  const [level, setLevel] = useState("A1")
  const [infoSaved, setInfoSaved] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("iy_user")
    if (!stored) { router.replace("/login"); return }
    const userData: User = JSON.parse(stored)
    // Migration: old format has panggilan="Kak" (sapaan) and name="Arif" (panggilan)
    if (!userData.sapaan) {
      userData.sapaan = userData.panggilan || "Kak"
      userData.panggilan = userData.name || ""
      localStorage.setItem("iy_user", JSON.stringify(userData))
    }
    setUser(userData)
    setSelectedAvatar(userData.avatar ?? "robot_03.png")
    setSapaan(userData.sapaan)
    setPanggilan(userData.panggilan)
    setLevel(userData.level ?? "A1")
  }, [router])

  function handleSaveAvatar() {
    if (!user) return
    const updated = { ...user, avatar: selectedAvatar }
    localStorage.setItem("iy_user", JSON.stringify(updated))
    setUser(updated)
    setAvatarSaved(true)
    setTimeout(() => setAvatarSaved(false), 2000)
  }

  function handleSaveInfo() {
    if (!user) return
    const cefrData = CEFR_LEVELS.find((l) => l.value === level)
    const updated = { ...user, sapaan, panggilan, level, levelName: cefrData?.label ?? user.levelName }
    localStorage.setItem("iy_user", JSON.stringify(updated))
    setUser(updated)
    setInfoSaved(true)
    setTimeout(() => setInfoSaved(false), 2000)
  }

  const currentLevelLabel = CEFR_LEVELS.find((l) => l.value === level)?.label ?? ""

  if (!user) return null

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="sticky top-0 z-50 border-b border-border bg-background shadow-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Kembali
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm font-semibold text-foreground">Edit Profil</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-8 sm:px-6">

        {/* Avatar preview — live update */}
        <div className="flex flex-col items-center gap-3">
          <div className="overflow-hidden rounded-3xl border-4 border-primary/20 bg-white p-2 shadow-md">
            <Image
              src={`/robot_icons/${selectedAvatar}`}
              alt="Avatar terpilih"
              width={96}
              height={96}
              className="size-24 object-contain"
            />
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-foreground">{sapaan} {panggilan}</p>
            <p className="text-xs text-muted-foreground">{level} · {currentLevelLabel}</p>
          </div>
        </div>

        {/* Placement Test */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-amber-200 bg-amber-50 shadow-sm">
          <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-200">
                <GraduationCap className="size-5 text-amber-700" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Cek level CEFR kamu</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Ikuti Placement Test singkat untuk menentukan level yang paling pas buat kamu.
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <Link
                href="/dashboard/placement-test"
                className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-amber-600"
              >
                Mulai Sekarang
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Perjalanan CEFR — live update saat level berubah */}
        <div className="mt-4 rounded-2xl border border-border bg-white px-5 py-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between gap-2">
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              Perjalanan CEFR
            </p>
            <span className="text-base font-extrabold leading-none text-primary">{overallPct}%</span>
          </div>

          <div className="flex items-center gap-1">
            {CEFR_LEVELS.map((lvl, i) => {
              const activeIdx = CEFR_LEVELS.findIndex((l) => l.value === level)
              const isPast = i < activeIdx
              const isActive = i === activeIdx
              return (
                <div key={lvl.value} className="flex flex-1 flex-col items-center gap-1.5">
                  {isPast ? (
                    <div className="h-2 w-full rounded-full bg-primary" />
                  ) : isActive ? (
                    <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="absolute inset-y-0 left-0 rounded-full bg-primary transition-all duration-500"
                        style={{ width: `${overallPct}%` }}
                      />
                    </div>
                  ) : (
                    <div className="h-2 w-full rounded-full bg-muted" />
                  )}
                  <span className={`text-[11px] font-semibold ${isActive ? "text-primary" : isPast ? "text-primary/50" : "text-muted-foreground"}`}>
                    {lvl.value}{isActive && <span className="ml-0.5">◀</span>}
                  </span>
                </div>
              )
            })}
          </div>

          <div className="mt-2.5 flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground">
              {totalCompleted}/{totalTopics} topik
            </span>
            <span className="text-[11px] text-muted-foreground">
              Level aktif:{" "}
              <span className="font-semibold text-foreground">{level} — {currentLevelLabel}</span>
            </span>
          </div>
        </div>

        {/* Informasi Profil */}
        <div className="mt-4 rounded-2xl border border-border bg-white p-5 shadow-sm">
          <h2 className="text-base font-bold text-foreground">Informasi Profil</h2>

          <div className="mt-4 flex flex-col gap-4">

            {/* Sapaan */}
            <div>
              <label className="text-xs font-semibold text-muted-foreground" htmlFor="sapaan">
                Sapaan
              </label>
              <input
                id="sapaan"
                type="text"
                value={sapaan}
                onChange={(e) => { setSapaan(e.target.value); setInfoSaved(false) }}
                placeholder="Kak, Mas, Mbak, Pak, Bu..."
                className="mt-1.5 h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <p className="mt-1 text-[11px] text-muted-foreground">
                Bebas — Kak, Mas, Mbak, Pak, Bu, atau sesuai kesukaan kamu
              </p>
            </div>

            {/* Nama Panggilan */}
            <div>
              <label className="text-xs font-semibold text-muted-foreground" htmlFor="panggilan">
                Nama Panggilan
              </label>
              <input
                id="panggilan"
                type="text"
                value={panggilan}
                onChange={(e) => { setPanggilan(e.target.value); setInfoSaved(false) }}
                placeholder="Arif, Danu, Budi..."
                className="mt-1.5 h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <p className="mt-1 text-[11px] text-muted-foreground">
                Tampilan nama di dashboard — misal{" "}
                <span className="font-medium text-foreground">{sapaan} {panggilan || "Arif"}</span>
              </p>
            </div>

            {/* Level CEFR */}
            <div>
              <label className="text-xs font-semibold text-muted-foreground" htmlFor="level">
                Level CEFR
              </label>
              <select
                id="level"
                value={level}
                onChange={(e) => { setLevel(e.target.value); setInfoSaved(false) }}
                className="mt-1.5 h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                {CEFR_LEVELS.map((l) => (
                  <option key={l.value} value={l.value}>
                    {l.value} — {l.label}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Level bisa juga ditentukan otomatis melalui Placement Test
              </p>
            </div>
          </div>

          <button
            onClick={handleSaveInfo}
            className={`mt-5 w-full rounded-xl py-3 text-sm font-bold text-primary-foreground transition-all ${
              infoSaved ? "bg-emerald-500" : "bg-primary hover:bg-primary/90"
            }`}
          >
            {infoSaved ? "✓ Profil Tersimpan!" : "Simpan Perubahan"}
          </button>
        </div>

        {/* Avatar picker */}
        <div className="mt-6">
          <h2 className="text-base font-bold text-foreground">Pilih Avatar</h2>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Pilih karakter robot yang paling cocok — ada {ROBOT_ICONS.length} pilihan
          </p>
          <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6">
            {ROBOT_ICONS.map((icon) => {
              const isSelected = selectedAvatar === icon
              return (
                <button
                  key={icon}
                  onClick={() => { setSelectedAvatar(icon); setAvatarSaved(false) }}
                  className={`relative aspect-square overflow-hidden rounded-2xl border-2 bg-white p-1.5 transition-all hover:scale-105 ${
                    isSelected
                      ? "border-primary shadow-md scale-105"
                      : "border-transparent hover:border-muted-foreground/20 shadow-sm"
                  }`}
                >
                  <Image
                    src={`/robot_icons/${icon}`}
                    alt={icon.replace(".png", "").replace("_", " ")}
                    width={80}
                    height={80}
                    className="h-full w-full object-contain"
                  />
                  {isSelected && (
                    <span className="absolute bottom-1 right-1 flex size-5 items-center justify-center rounded-full bg-primary">
                      <Check className="size-3 text-primary-foreground" />
                    </span>
                  )}
                </button>
              )
            })}
          </div>
          <button
            onClick={handleSaveAvatar}
            className={`mt-4 w-full rounded-xl py-3 text-sm font-bold text-primary-foreground transition-all ${
              avatarSaved ? "bg-emerald-500" : "bg-primary hover:bg-primary/90"
            }`}
          >
            {avatarSaved ? "✓ Avatar Tersimpan!" : "Simpan Avatar"}
          </button>
        </div>
      </main>
    </div>
  )
}
