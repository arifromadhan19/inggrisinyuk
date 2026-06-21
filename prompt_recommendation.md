# Prompt Recommendation — Inggrisin Yuk

> Dokumen ini adalah hasil eksperiment nyata dari dua versi prompt yang di-encode ke URL ChatGPT.
> Berlaku untuk **semua day, semua materi, semua level** (Vocab, Grammar, dll).

---

## Hasil Eksperimen

| | Option A | Option B |
|-|:---:|:---:|
| Raw chars | 3.098 | 5.251 |
| URL chars | 4.496 | 7.469 |
| Hasil di ChatGPT | **WORKS** ✅ | **ERROR** ❌ |
| Blank lines | Tidak ada | Ada |
| Separator `---` | Tidak ada | Ada |
| Instruksi per-step | Keyword | Kalimat panjang |
| Header behavior | 2 baris ringkas | 4 baris panjang |

**Kesimpulan:** Batas aman URL ChatGPT adalah **< 4.500 encoded chars** (raw < ~3.200 chars).

---

## Summary: Apa yang Menyebabkan Error

Option B (5.251 raw → 7.469 URL) gagal karena **3 pola penyebab utama**:

### 1. Blank lines (baris kosong antar paragraf)
Setiap blank line = 1 `\n` ekstra = 3 chars di URL (`%0A`). Prompt B punya ~15 blank lines = +45 chars URL. Ini bukan penyebab terbesar, tapi perlu dihilangkan.

### 2. Separator `---`
Setiap baris `---` = 3 chars raw + newline = 12 chars URL. Ada 3 separator = +36 chars URL. Bukan masalah besar, tapi tidak memberikan nilai apapun ke AI.

### 3. Instruksi verbose — ini penyebab terbesar
| Section | Option B | Option A | Selisih |
|---------|:-------:|:-------:|:------:|
| Header behavior | 4 baris (734 chars) | 2 baris (580 chars) | 154 chars |
| L1 Format (a)(b)(c) | Kalimat panjang (1.040 chars) | Keyword (850 chars) | 190 chars |
| L2 per-step | Kalimat penjelasan (2.218 chars) | Keyword + format (1.400 chars) | 818 chars |
| L3 | Kalimat panjang (648 chars) | Keyword (400 chars) | 248 chars |

**Total selisih: ~1.410 chars raw → ~2.000 chars URL.**

AI tidak perlu kalimat panjang untuk memahami instruksi. Keyword sudah cukup — bahkan sering lebih konsisten.

---

## Rekomendasi: Aturan Baru untuk Semua Prompt

### RULE 1 — Batas karakter wajib dipenuhi

```
raw chars  <  3.200  →  URL < 4.500  →  AMAN
raw chars  <  2.800  →  URL < 4.000  →  SANGAT AMAN (direkomendasikan)
```

Estimasi cepat sebelum publish: `url_length = 30 + raw_chars × 1.42`

---

### RULE 2 — Tidak ada blank lines, tidak ada separator

```
// JANGAN
LANGKAH 1 — ...

Sapa dengan gaya santai: "..."

Box of Words:
Gunakan PERSIS ...

// LAKUKAN
LANGKAH 1 — ...
Sapa: "...", langsung tampilkan Box of Words dan Writing Challenge.
Box of Words — PERSIS 15 kata ini:
...
```

Setiap blank line = 3 chars di URL. 15 blank lines = 45 chars. Tidak ada manfaatnya untuk AI.

---

### RULE 3 — Header behavior: 2 baris, bukan 4

```
// JANGAN (terlalu verbose)
Gaya bahasa: sopan, ramah, casual, friendly, dan humble (rendah hati — tidak menggurui,
hargai usaha user) — tunjukkan lewat caramu ngobrol, jangan deskripsi diri sendiri
dengan kata-kata seperti "seru" atau "asyik".
Semua koreksi dan penjelasan dalam Bahasa Indonesia penuh (level A1 — tidak ada
penjelasan dalam English).
Pakai emoji secukupnya biar enak dibaca.
Tampilkan phonetic symbol UK setelah setiap kosakata dalam tanda / /.
Kata pendek di samping vocab, frasa panjang di baris bawah.

// LAKUKAN (sama efektifnya, 60% lebih pendek)
Gaya: sopan, ramah, humble — tunjukkan lewat ngobrol, jangan sebut diri seru/asyik.
Koreksi dan penjelasan dalam Bahasa Indonesia. Pakai emoji secukupnya. Phonetic UK setelah setiap kosakata dalam / /.
```

**Yang berubah:** tidak ada. Yang dibuang: kata-kata penjelasan yang sudah implicit ("tidak ada penjelasan dalam English" = sama dengan "dalam Bahasa Indonesia penuh").

---

### RULE 4 — Instruksi per-langkah: keyword, bukan kalimat panjang

AI memahami keyword sama baiknya (atau lebih baik) dari kalimat panjang.

| Langkah | Versi panjang | Versi keyword |
|---------|--------------|--------------|
| L1 format | "(a) 1 kalimat deskripsi singkat di bawah nama mode — apa yang membedakannya (Mode Cerita = ...)" | "(a) deskripsi singkat" |
| L2 step 1 | "tabel 3 kolom: Kalimat Asli \| Kalimat yang Benar \| Kenapa (akar masalah ala Bahasa Indonesia; fokus penjelasan mendalam ke maksimal 2 pola error terpenting, sisanya cukup versi benarnya saja)" | "tabel 3 kolom: Kalimat Asli \| Kalimat Benar \| Kenapa (max 2 pola error utama)" |
| L2 step 4 | "tabel: What/Why/Where/When/Who/How dari tulisanku vs versi lebih lengkap. Di bawahnya, judul Paragraf Diperkaya: tiap kalimat Inggris langsung diikuti terjemahan Indonesianya dalam kurung di baris bawahnya (bukan dikumpulkan jadi 2 blok terpisah Inggris/Indonesia)" | "tabel + Paragraf Diperkaya: tiap kalimat Inggris diikuti terjemahan Indonesia di baris bawahnya" |

---

### RULE 5 — Tidak ada emoji di dalam teks prompt

Emoji di URL = 12–21 chars per emoji (vs 1 char raw). Contoh:
- `👋` → 12 chars encoded
- `📦` → 12 chars encoded
- `1️⃣` → 27 chars encoded

Cukup gunakan angka biasa: `1.`, `2.`, `3.`, dst.

---

### RULE 6 — Pertahankan differentiator kita (jangan ditiru competitor)

| Feature | Competitor | Kita | Tetap? |
|---------|-----------|------|:------:|
| BOW 15 kata kurated | AI generate bebas | Embed 15 kata per hari | ✅ Tetap |
| 8 sub-step Langkah 2 | 4 sub-step | 8 sub-step | ✅ Tetap |
| CEFR analysis | Tidak ada | Ada (step 3) | ✅ Tetap |
| Frasa Siap Pakai | Tidak ada | Ada (step 6) | ✅ Tetap |
| Clarity Check | Tidak ada | Ada (step 7) | ✅ Tetap |
| Speaking pre-defined | AI generate dari tulisan | 3 pertanyaan per hari | ✅ Tetap |
| Persona "Kak Ara" | "Bro Arule" | "Kak Ara" | ✅ Tetap |

Differentiator di atas tidak perlu diubah isinya — hanya cara menulisnya di prompt yang dipadatkan.

---

## Template Master (Pakai ini untuk semua day, semua materi)

```
Topik: {TOPIC_NAME}
Panggil aku {SAPAAN} {PANGGILAN}.
Level bahasa Inggrisku: {LEVEL} ({LEVEL_NAME}).
Kamu Kak Ara, personal AI Coach kamu, dari Inggrisin Yuk. Tugasmu membimbingku belajar vocab lewat writing dan speaking di Level {LEVEL} ({LEVEL_NAME}).
Gaya: sopan, ramah, humble — tunjukkan lewat ngobrol, jangan sebut diri seru/asyik.
Koreksi dan penjelasan dalam Bahasa Indonesia. Pakai emoji secukupnya. Phonetic UK setelah setiap kosakata dalam / /.
LANGKAH 1 — SAPAAN + BOX OF WORDS + WRITING CHALLENGE (dalam 1 response):
Sapa: "Halo! Aku Kak Ara dari Inggrisin Yuk", langsung tampilkan Box of Words dan Writing Challenge. Jangan tanya "mau lanjut?".
Box of Words — PERSIS 15 kata ini (jangan tambah/ganti):
{BOW_15_KATA}
Tabel bernomor 2 kolom: Kosakata + phonetic UK | Arti Indonesia.
Writing Challenge (2 mode sekaligus):
Mode Cerita: {MODE_DESC_CERITA} Min 5 kata dari BOW.
Mode Kilat: Pilih 5 kata dari BOW, 1 kalimat per kata.
Tiap mode: (a) deskripsi singkat, (b) contoh dengan KATA YANG SAMA dari BOW di kedua mode, (c) template latihan kosong.
Jangan bocorkan langkah koreksi — tunggu jawabanku.
LANGKAH 2 — KOREKSI 8 LANGKAH (otomatis setelah aku kirim tulisan):
1. Koreksi Writing — tabel 3 kolom: Kalimat Asli | Kalimat Benar | Kenapa (max 2 pola error utama). Kalimat >=95% benar: tandai OK, Kenapa isi "-"
2. Analisa BOW — tiap kata BOW yang aku pakai: tepat / belum tepat + contoh benar
3. Analisa CEFR — level tulisanku + yang sudah bagus + 2 tips naik ke {NEXT_LEVEL}
4. Perbandingan 5W+1H — tabel + "Paragraf Diperkaya": tiap kalimat Inggris diikuti terjemahan Indonesia di baris bawahnya.
5. Transition Words — jika belum: sarankan 2–3 penghubung {LEVEL} + contoh + arti italic.
6. Frasa Siap Pakai — 2–3 lexical chunks penutur asli untuk topik ini. Format: frasa -> "contoh." (arti). Cek tulisanku sudah pakai belum. Kalau belum, sarankan 1 yang mudah.
Kalau tulisanku kosong/di luar topik/Indonesia semua: jangan koreksi — minta tulis Inggris dulu dengan ramah.
7. Clarity Check — kalimat ambigu/janggal? Jika semua jelas: tulis OK dan lewati.
8. Speaking Challenge — 3 pertanyaan topik {TOPIC_NAME}:
{SPEAKING_Q1_EN}
{SPEAKING_Q1_ID}
{SPEAKING_Q2_EN}
{SPEAKING_Q2_ID}
{SPEAKING_Q3_EN}
{SPEAKING_Q3_ID}
LANGKAH 3 — MODE SPEAKING (trigger: Let's start speaking!):
Ulangi Speaking Challenge satu per satu. Langsung ke pertanyaan, jangan basa-basi.
Transkrip jawabanku ke Inggris. Koreksi dalam Bahasa Indonesia.
Feedback: kalimat lebih baik ({LEVEL}) + penjelasan singkat. Verb 2/3 -> Verb 1 dalam kurung italic.
"clue" -> petunjuk grammar saja. Lancar -> tambah 1 pertanyaan. Macet -> contoh + pattern drill.
Pujian singkat hanya di akhir sesi, tulus dan tidak berlebihan.
```

### Variable fields per materi baru

| Field | Isi | Contoh |
|-------|-----|--------|
| `{TOPIC_NAME}` | Nama topik hari itu | `Daily Routines & Activities` |
| `{SAPAAN}` | Dari data user | `Kak` |
| `{PANGGILAN}` | Dari data user | `Arif` |
| `{LEVEL}` | Kode CEFR | `A1` |
| `{LEVEL_NAME}` | Nama level | `Beginner` |
| `{NEXT_LEVEL}` | Level berikutnya | `A2` |
| `{BOW_15_KATA}` | 15 kata kurated (format: kata1, kata2, ...) | `wake up, brush teeth, ...` |
| `{MODE_DESC_CERITA}` | 1 kalimat instruksi Mode Cerita | `Tulis 3–5 kalimat tentang rutinitas harianmu.` |
| `{SPEAKING_Q1/2/3_EN}` | Pertanyaan Inggris dalam `**...**` | `**What time do you wake up?**` |
| `{SPEAKING_Q1/2/3_ID}` | Terjemahan Indonesia dalam `*...*` | `*Jam berapa kamu bangun?*` |

### Estimasi ukuran template ini

```
Static (tidak berubah per hari) : ~2.150 chars raw
BOW 15 kata                     : ~130  chars raw  (per hari)
Mode desc cerita                : ~60   chars raw  (per hari)
3 speaking questions + terjemahan: ~250  chars raw  (per hari)
─────────────────────────────────────────────────────────────
TOTAL estimasi per hari          : ~2.590 chars raw
URL estimasi                     : ~3.710 chars     ← jauh di bawah 4.500
```

---

## Checklist Implementasi per Materi Baru

Sebelum menambahkan hari baru ke kode, pastikan:

- [ ] `{BOW_15_KATA}` tepat 15 kata, dipisah koma, tidak ada newline di tengah
- [ ] `{MODE_DESC_CERITA}` adalah 1 kalimat singkat tentang topik hari itu
- [ ] Speaking questions: 3 buah, format `**EN?**` lalu `*ID?*` di baris bawah
- [ ] Tidak ada blank lines di dalam prompt string
- [ ] Tidak ada emoji di prompt (AI yang akan generate emoji di output)
- [ ] Hitung `url = 30 + raw * 1.42` → harus < 4.500
- [ ] Test klik link di browser sebelum deploy

---

## Catatan untuk Implementasi di Kode

File terkait: `inggrisinyuk-app/app/dashboard/[module]/page.tsx`

Fungsi `buildVocabPrompt()` yang sudah ada di kode sudah mengikuti sebagian besar aturan ini.
Yang perlu diupdate saat menambah materi hari baru:
1. Tambah objek baru ke array `VOCAB_A1_DAYS` (atau array level lain)
2. Isi field: `topik`, `bow`, `modeDesc`, `speaking`
3. Tidak perlu ubah template — template sudah statis di `buildVocabPrompt()`

```typescript
// Pola yang benar untuk object baru:
{
  topik: "Topic Name Here",
  bow: "kata1, kata2, kata3, ..., kata15",     // tepat 15 kata
  modeDesc: "Tulis 3–5 kalimat tentang ...",   // 1 kalimat singkat
  speaking: `**Question 1 in English?**\n*Terjemahan Indonesia?*\n**Question 2 in English?**\n*Terjemahan Indonesia?*\n**Question 3 in English?**\n*Terjemahan Indonesia?*`,
}
```

---

*Dokumen ini dibuat berdasarkan hasil eksperiment nyata: 2026-06-21*
