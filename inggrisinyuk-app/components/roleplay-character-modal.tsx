"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { RoleplayCharacter, RoleplayCharacterMode } from "@/lib/materi/roleplay-shared"

// See materi/roleplay_analysis.md §2.2 for the design rationale behind the
// 2-mode character system (Tokoh Terkenal vs Buat Karaktermu) and the
// "lanjut / ganti tokoh" confirmation when switching topics.

export const ROLEPLAY_CHARACTER_MAX_LENGTH = 150

function characterLabel(character: RoleplayCharacter): string {
  return character.mode === "tokoh" ? character.value : "karaktermu"
}

interface RoleplayConfirmModalProps {
  character: RoleplayCharacter
  onContinue: () => void
  onChangeCharacter: () => void
  onClose: () => void
}

export function RoleplayConfirmModal({
  character,
  onContinue,
  onChangeCharacter,
  onClose,
}: RoleplayConfirmModalProps) {
  const label = characterLabel(character)
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-base font-semibold text-foreground">
          Lanjut ngobrol sama {label}?
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Kamu bisa lanjut dengan tokoh/karakter yang sama, atau ganti khusus untuk topik ini.
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <Button onClick={onContinue} className="w-full justify-center">
            Lanjut dengan {label}
          </Button>
          <Button variant="outline" onClick={onChangeCharacter} className="w-full justify-center">
            Ganti Tokoh/Karakter
          </Button>
        </div>
      </div>
    </div>
  )
}

interface RoleplayCharacterFormModalProps {
  initialMode?: RoleplayCharacterMode
  initialValue?: string
  onSubmit: (character: RoleplayCharacter) => void
  onClose: () => void
}

export function RoleplayCharacterFormModal({
  initialMode = "tokoh",
  initialValue = "",
  onSubmit,
  onClose,
}: RoleplayCharacterFormModalProps) {
  const [mode, setMode] = useState<RoleplayCharacterMode>(initialMode)
  const [value, setValue] = useState("")

  // Clear the field on tab switch so a tokoh name can't leak in as a
  // custom description (and vice versa) — each mode starts fresh.
  useEffect(() => {
    setValue("")
  }, [mode])

  const trimmed = value.trim()
  const canSubmit = trimmed.length > 0 && trimmed.length <= ROLEPLAY_CHARACTER_MAX_LENGTH

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-5 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3">
          <p className="text-base font-semibold text-foreground">
            Mau ngobrol sama siapa hari ini?
          </p>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="shrink-0 rounded-full p-1 text-muted-foreground transition-colors hover:bg-slate-100"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-1.5 rounded-xl bg-slate-100 p-1">
          <button
            onClick={() => setMode("tokoh")}
            className={`rounded-lg px-2 py-2 text-xs font-semibold transition-colors ${
              mode === "tokoh" ? "bg-white text-foreground shadow-sm" : "text-muted-foreground"
            }`}
          >
            🎭 Tokoh Terkenal
          </button>
          <button
            onClick={() => setMode("custom")}
            className={`rounded-lg px-2 py-2 text-xs font-semibold transition-colors ${
              mode === "custom" ? "bg-white text-foreground shadow-sm" : "text-muted-foreground"
            }`}
          >
            ✏️ Buat Karaktermu
          </button>
        </div>

        <div className="mt-4">
          <Label htmlFor="roleplay-character-input">
            {mode === "tokoh" ? "Nama tokoh" : "Deskripsi karaktermu"}
          </Label>

          {mode === "tokoh" ? (
            <Input
              id="roleplay-character-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Contoh: Sherlock Holmes, BJ Habibie..."
              maxLength={ROLEPLAY_CHARACTER_MAX_LENGTH}
              className="mt-1.5"
              autoFocus
            />
          ) : (
            <textarea
              id="roleplay-character-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Contoh: Pria ramah bersuara merdu, profesinya pilot, suka bercanda dan selalu positif"
              maxLength={ROLEPLAY_CHARACTER_MAX_LENGTH}
              rows={3}
              autoFocus
              className="mt-1.5 w-full resize-none rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            />
          )}

          <p className="mt-1.5 text-xs text-muted-foreground">
            {mode === "tokoh"
              ? "Tulis nama tokoh nyata atau fiksi — sejarah, publik figur, film, series, anime, atau buku. AI akan berakting seperti tokoh ini."
              : "Deskripsikan kepribadian, profesi, atau ciri khas lawan bicara impianmu — bebas berkreasi! Karaktermu akan terasa hidup & konsisten."}
          </p>
          <p className="mt-1 text-right text-[11px] text-muted-foreground/70">
            {trimmed.length}/{ROLEPLAY_CHARACTER_MAX_LENGTH}
          </p>
        </div>

        <Button
          onClick={() => canSubmit && onSubmit({ mode, value: trimmed })}
          disabled={!canSubmit}
          className="mt-2 w-full justify-center"
        >
          Mulai Roleplay →
        </Button>
      </div>
    </div>
  )
}
