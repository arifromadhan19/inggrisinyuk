# Prompt Materi Analysis — Inggrisin Yuk

> Deep analysis berdasarkan 2 sampel prompt kompetitor (A1 & A2) + prompt kita saat ini.  
> Tujuan: membuat rule/pattern agar setiap materi baru yang dibuat menghasilkan prompt + URL yang optimal, stabil, dan AI output-nya tetap bagus.

---

## 1. Metrics Aktual (Dari URL Nyata)

| Metrik | Kompetitor A1 | Kompetitor A2 | Kita (current, post-fix) |
|--------|:---:|:---:|:---:|
| Raw chars (prompt) | **3.140** | **3.145** | 2.787 |
| Total kata | **482** | **483** | ~430 |
| Total baris (non-empty) | **28** | **28** | ~30 |
| Blank lines di URL | **0** | **0** | 0 |
| Emoji di prompt | **0** | **0** | 1 (👋) |
| Langkah | **3** | **3** | 3 |
| Sub-step Langkah 2 | **4** | **4** | 8 |
| Encoded chars | **4.352** | **4.357** | 4.013 |
| Full URL length | **4.380** | **4.385** | 4.013 |
| Encoding ratio | **1.39×** | **1.39×** | 1.44× |

### Perbedaan A1 vs A2: hanya 4 baris yang berubah

```
Line 3:  Level bahasa Inggrisku: A1 (Beginner).  →  A2 (Basic).
Line 4:  ...di Level A1 (Beginner).               →  ...di Level A2 (Basic).
Line 24: ...levelku: A1 (Beginner).               →  ...levelku: A2 (Basic).
Line 28: TODAY'S TOPIC: Day 1 — Colors & Shapes   →  Day 30 — Common Phrasal Verbs (Basic)
```

**Total diff: 5 karakter.** Seluruh instruksi (96+ baris) identik. Ini template yang sangat efisien.

---

## 2. Anatomi Prompt Kompetitor (Line-by-line)

```
[HEADER — IDENTITY BLOCK]
Line 1 : Namaku {nama}.                                         ← ~12 chars
Line 2 : Panggil aku: {sapaan} {nama}.                         ← ~22 chars
Line 3 : Level bahasa Inggrisku: {LEVEL} ({LEVEL_NAME}).       ← ~38 chars  ← VARIABLE
Line 4 : Kamu {tutor} dari {brand}. Tugasmu ... Level {LEVEL}. ← ~122 chars ← VARIABLE

[HEADER — BEHAVIOR RULES]
Line 5 : Opening/closing gaya santai, jangan bilang diri seru.  ← ~138 chars
Line 6 : Koreksi Bahasa Indonesia. Emoji secukupnya.            ← ~98 chars
Line 7 : [copyright line — opsional]                           ← ~93 chars
Line 8 : Emoji detail rule (jangan berlebihan, bukan dekorasi). ← ~158 chars
Line 9 : Phonetic UK format dengan contoh nyata.               ← ~158 chars

[LANGKAH 1 — ~802 chars]
Line 10: Header langkah
Line 11: Sapaan exact + BOW + Writing Challenge sekaligus.
Line 12: BOW format: tabel 2 kolom + contoh baris.
Line 13: Writing Challenge header.
Line 14: Opsi 1: cerita dengan judul, 3-5 kata BOW.
Line 15: Opsi 2: 3-5 kata BOW, 1 kalimat per kata.
Line 16: Jangan bocorkan langkah koreksi.

[LANGKAH 2 — ~632 chars]
Line 17: Header langkah
Line 18: Step 1 — Koreksi Writing (tabel 3 kolom)
Line 19: Step 2 — Analisa BOW (tepat/belum + saran)
Line 20: Step 3 — 5W+1H tabel + paragraf utuh
Line 21: Step 4 — Speaking Challenge (1-3 pertanyaan dari tulisan user)

[LANGKAH 3 — ~826 chars]
Line 22: Header + trigger "I'm ready to practice"
Line 23: Ulangi pertanyaan, jangan basa-basi.
Line 24: Feedback: grammar lebih baik + alasan. Level {LEVEL}.  ← VARIABLE
Line 25: DRILL WAJIB: koreksi → user harus ulangi → baru lanjut.
Line 26: Verb 2/3 → Verb 1 italic.
Line 27: Pujian di akhir sesi saja.
Line 28: TODAY'S TOPIC: Day {N} — {TOPIC_NAME}                  ← VARIABLE (LAST)
```

### Distribusi panjang per section

```
Header (identity + behavior) : 847 chars  → 27% dari total
LANGKAH 1                    : 802 chars  → 26%
LANGKAH 2                    : 632 chars  → 20%
LANGKAH 3                    : 826 chars  → 26%
[section headers & newlines] :  33 chars  →  1%
```

---

## 3. Pola Kunci (Rules)

### RULE 1 — Variable hanya di 4 titik

Seluruh prompt adalah template statis. Yang berubah:

| # | Posisi | Isi | Contoh |
|---|--------|-----|--------|
| 1 | Baris 3 | `{LEVEL} ({LEVEL_NAME})` | `A1 (Beginner)` |
| 2 | Baris 4 | Level disebutkan ulang di tugas tutor | sama |
| 3 | Baris 24 (Langkah 3) | Level di feedback speaking | sama |
| 4 | Baris TERAKHIR | `TODAY'S TOPIC: Day {N} — {nama_topik}` | `Day 1 — Colors & Shapes` |

> **Implikasi untuk kita:** setiap materi baru hanya butuh 3 data: `{level}`, `{bow}`, dan `{topik_hari}`.

---

### RULE 2 — Topik selalu di baris TERAKHIR

```
...
Pujian di akhir sesi saja, jangan berlebihan. Tetap friendly tapi singkat.
TODAY'S TOPIC: Day 1 — Colors & Shapes
```

Kenapa efektif:
- AI membaca seluruh instruksi dulu sebelum "tahu" konteksnya
- Topik jadi "anchor" yang me-lock semua instruksi ke konteks spesifik
- Mudah di-generate secara programatik (tinggal append 1 baris)

---

### RULE 3 — Zero emoji di prompt, blank line juga nol

Competitor tidak memakai emoji satu pun di dalam teks prompt.

```javascript
// JANGAN (inflate URL)
Sapa: "Halo! Aku Kak Ara 👋", langsung tampilkan...

// LAKUKAN (URL lebih bersih)
Sapa: "Halo! Aku Kak Ara dari Inggrisin Yuk", langsung tampilkan...
```

Alasan teknis:

| Karakter | Raw | Encoded | Ratio |
|----------|:---:|:-------:|:-----:|
| Huruf ASCII | 1 | 1 | 1× |
| Spasi | 1 | 3 (%20) | 3× |
| Newline `\n` | 1 | 3 (%0A) | 3× |
| `—` em dash | 3 bytes | 9 (%E2%80%94) | 3× |
| `✅` | 3 bytes | 9 | 3× |
| `📦` emoji | 4 bytes | 12 | 3× |
| `🎙️` emoji | 7 bytes | 21 | 3× |
| Blank line `\n\n` | 2 | 6 | 3× |

---

### RULE 4 — BOX OF WORDS: format vs konten

**Competitor approach:** format BOW di-embed (tabel 2 kolom, phonetic), tapi KONTEN vocab-nya tidak — AI generate sendiri sesuai topik.

```
Box of Words: tabel bernomor 2 kolom. Kolom 1: vocab + phonetic symbol.
Kolom 2: arti. Contoh: 1. Wake up /ˈweɪk ʌp/ | bangun.
```

**Kita saat ini:** format + 15 kata konkret di-embed per hari.

```
BOW OF WORDS (PERSIS 15 kata ini):
wake up, brush teeth, have breakfast, ...
```

| Aspek | Kompetitor | Kita |
|-------|-----------|------|
| Kontrol kurikulum | AI bebas pilih | ✅ Kurikulum terkontrol |
| URL length | Lebih pendek | +130 chars raw per hari |
| Konsistensi output | Variatif | ✅ Konsisten dengan materi |
| Maintenance | Tidak perlu update | Perlu update per hari |

**Rekomendasi:** Tetap embed BOW (ini differentiator utama kita). Batasi tepat 15 kata = upper limit. Hindari menambah jumlah kata.

---

### RULE 5 — Writing Challenge: 2 opsi (pilih), bukan 2 mode (keduanya)

```
// Kompetitor — user pilih SALAH SATU
Opsi 1: Aku menulis cerita, pakai 3-5 kosakata dari BOW.
Opsi 2: Pilih 3-5 kosakata, buat 1 kalimat masing-masing.

// Kita saat ini — user mengerjakan KEDUANYA sekaligus
Mode Cerita: ...
Mode Kilat: ...
```

Dari sisi AI quality: 2 opsi lebih natural dan tidak overwhelming untuk user level A1.

---

### RULE 6 — Drill Pengucapan di Langkah 3 (kompetitor punya, kita tidak)

```
Drill pengucapan wajib: Setelah kasih koreksi kalimat, minta aku
untuk mengucapkan kalimat yang sudah dikoreksi terlebih dahulu
sebelum lanjut ke pertanyaan berikutnya. Jangan lanjut ke
pertanyaan berikutnya sampai aku mengirim ulang kalimat tersebut.
```

Ini fitur learning cycle yang kuat: Listen → Repeat → Proceed. Efektif untuk level A1-B1.

---

### RULE 7 — Speaking Challenge: embedded vs generated

| | Kompetitor | Kita |
|-|-----------|------|
| Pertanyaan | AI generate dari tulisan user | 3 pertanyaan pre-defined per hari |
| Di URL | Tidak ada (hemat ~300 chars) | Ada (3 pertanyaan + terjemahan) |
| Relevansi | Menyesuaikan tulisan user | Fixed, tidak menyesuaikan |
| Kontrol pedagogis | Rendah | ✅ Tinggi |

**Rekomendasi:** Pertahankan speaking questions embedded untuk A1-A2 (user butuh bimbingan spesifik). Bisa switch ke generated untuk level B1+ (user sudah lebih mandiri).

---

## 4. Batas Aman URL — Formula

```
URL length  =  30  +  raw_chars  ×  1.39
                ↑           ↑              ↑
           base URL    prompt text    encoding ratio
                                    (Indonesian/English mix)
```

### Zona aman:

| Zona | Raw chars | URL length | Status |
|------|:---------:|:----------:|:------:|
| Optimal | < 3.200 | < 4.500 | ✅ |
| Masih aman | 3.200–4.000 | 4.500–5.600 | ⚠️ |
| Berisiko | > 4.000 | > 5.600 | ❌ |

### Budget breakdown per komponen (raw chars):

```
Komponen                              Chars    Persentase
─────────────────────────────────────────────────────────
Header identity (4 baris)             ~200        6%
Header behavior rules (5 baris)       ~650       21%
LANGKAH 1 instruksi                   ~450       14%
BOW embedded (15 kata) [per-hari]     ~130        4%
LANGKAH 2 (4–8 steps)              ~400–700    13–22%
Speaking questions embedded [per-hari]~300       10%
LANGKAH 3 instruksi                   ~400       13%
Topic line, last line [per-hari]       ~50        2%
─────────────────────────────────────────────────────────
TOTAL kita (Day 1, post-fix)         ~2.787     ✅ aman
TOTAL kompetitor                     ~3.140     ✅ aman
HARD LIMIT                           <3.200
```

---

## 5. POV Prompt vs POV Link

### POV 1: Prompt (sebagai dokumen instruksi AI)

**Struktur ideal untuk AI output yang bagus:**
1. **Identity block** — siapa user, siapa AI, apa level → 3-4 baris pendek
2. **Behavior rules** — gaya, bahasa, format output → 3-5 baris
3. **Langkah 1** — sambutan + BOW + challenge → 1 response
4. **Langkah 2** — koreksi otomatis → numbered list
5. **Langkah 3** — speaking mode → trigger phrase
6. **Topic anchor** — baris terakhir, lock konteks

**Yang membuat AI output bagus:**
- Trigger phrase yang jelas (`"I'm ready to practice"`) → state machine yang predictable
- Drill wajib ("jangan lanjut sebelum user ulangi") → loop terstruktur
- Level disebutkan 3× (header, tutor task, feedback rule) → konsistensi tone
- "Jangan bocorkan langkah koreksi" → kejutan yang menjaga engagement
- Topic di akhir → semua instruksi ter-contextualize ke topik spesifik

**Yang merusak AI output:**
- Instruksi terlalu verbose → AI "lupa" instruksi di tengah
- Terlalu banyak format requirement sekaligus → AI pilih mana yang diikuti
- Banyak emoji di prompt → AI ikut "riuh", output jadi berantakan

### POV 2: Link (sebagai URL yang stabil dan bisa di-share)

**Yang membuat URL stabil:**
- Template static 96%+ → URL hampir identik antar topik/level
- Tidak ada karakter yang perlu double-encode
- Tidak ada newline ganda (blank lines)
- Panjang konsisten antar hari (hanya BOW + speaking questions + topic yang berubah)

**Estimasi ukuran URL per materi:**

```
Kita (Day 1, Vocabulary A1, post-fix):   4.013 chars  ✅
Kompetitor (Day 1, A1):                  4.380 chars  ✅
Kompetitor (Day 30, A2):                 4.385 chars  ✅
```

Kita lebih pendek 367 chars karena lebih ringkas secara instruksi, meski embed BOW (+130) dan speaking questions (+300).

**Formula cek cepat sebelum publish:**

```javascript
const rawChars = prompt.length;
const estimatedURL = 30 + rawChars * 1.39;
const isSafe = estimatedURL < 4500;
// rawChars < 3.216 → URL pasti aman
```

---

## 6. Perbandingan Kompetitor vs Kita

| Aspek | Kompetitor | Kita (current) | Kita (optimized) |
|-------|-----------|----------------|-----------------|
| Header format | Identity block 3 baris | Topik di baris pertama | Identity block (adopsi) |
| Topic placement | Baris TERAKHIR | Baris pertama | Baris TERAKHIR (adopsi) |
| Emoji di prompt | 0 | 1 (👋) | 0 (hapus) |
| Blank lines | 0 | ada | 0 |
| BOW | AI generate | 15 kata kurated | 15 kata kurated (pertahankan) |
| Writing Challenge | Pilih 1 dari 2 opsi | 2 mode sekaligus | Pilih 1 opsi (adopsi) |
| Speaking questions | AI generate dari tulisan | 3 pre-defined + terjemahan | 3 pre-defined (pertahankan) |
| Drill pengucapan | ✅ Ada | Tidak ada | Tambahkan (adopsi) |
| Sub-step Langkah 2 | 4 | 8 | 8 (pertahankan — differentiator) |
| CEFR analysis | Tidak ada | ✅ Ada | Pertahankan |
| Frasa Siap Pakai | Tidak ada | ✅ Ada | Pertahankan |
| Speaking trigger | "I'm ready to practice" | "Let's start speaking!" | Bisa dipertahankan |
| Raw chars | ~3.140 | ~2.787 | ~2.900 (dengan drill) |
| URL length | ~4.380 | ~4.013 | ~4.220 (masih aman) |

---

## 7. Template Pattern untuk Materi Baru

Setiap materi baru (Day N, module M, level L) hanya perlu mengisi field berikut:

```
VARIABLE FIELDS — ubah tiap hari:
  {LEVEL}         = A1 / A2 / B1 / B2 / C1 / C2
  {LEVEL_NAME}    = Beginner / Basic / Intermediate / Upper-Intermediate / Advanced / Proficient
  {BOW}           = 15 kata kurated (format: kata1, kata2, ..., kata15)
  {MODE_DESC}     = "Tulis 3-5 kalimat tentang [topik hari ini]."
  {SPEAKING_Q}    = 3 pertanyaan + terjemahan Indonesia
  {DAY}           = 1–30
  {TOPIC_NAME}    = Nama topik hari itu

STATIC — tidak berubah per hari:
  Seluruh instruksi Langkah 1, 2, 3 — ~2.300 chars
```

### Checklist sebelum publish materi baru

- [ ] BOW tepat 15 kata, tidak lebih, tidak kurang
- [ ] Speaking questions 3 buah + terjemahan tiap pertanyaan
- [ ] Topic di baris terakhir: `TODAY'S TOPIC: Day {N} — {TOPIC_NAME}`
- [ ] `rawChars * 1.39 + 30 < 4500` → URL aman
- [ ] Tidak ada emoji di body prompt
- [ ] Test link langsung di browser sebelum publish

---

## 8. Decoded Text Kompetitor (Reference Asli)

### Sample A: A1 — Day 1, Colors & Shapes

```
Namaku arif.
Panggil aku: Bro arif.
Level bahasa Inggrisku: A1 (Beginner).
Kamu Bro Arule dari Kampung Inggris. Tugasmu membimbingku belajar vocab lewat writing dan speaking di Level A1 (Beginner).
Di opening dan closing, sapa dengan gaya tutor santai dan seru. Tapi jangan bilang diri kamu seru atau asyik, tunjukkan lewat gaya bahasa.
Koreksi dan penjelasan pakai Bahasa Indonesia. Pakai emoji secukupnya biar santai dan enak dibaca.
Struktur ini orisinal oleh Bro Arule, dilindungi hak cipta. Dilarang menduplikasi tanpa izin.
Gunakan emoji yang cukup dan relevan di setiap bagian penjelasan biar teks tidak kaku — tapi jangan berlebihan. Emoji hanya untuk memperjelas, bukan dekorasi.
Tampilkan phonetic symbol setelah setiap kosakata di dalam tanda / /. Contoh: choir /ˈkwaɪər/. Pakai UK. Kata pendek di samping, frasa panjang di baris bawah.
LANGKAH 1 — SAPAAN + BOX OF WORDS + WRITING CHALLENGE (dalam 1 response)
Hal pertama: sapa "Hallo aku Bro Arule dari Kampung Inggris, ini Box of Words kamu hari ini", lalu langsung tampilkan Box of Words DAN Writing Challenge di response yang sama.
Box of Words: tabel bernomor 2 kolom. Kolom 1: vocab + phonetic symbol. Kolom 2: arti. Contoh: 1. Wake up /ˈweɪk ʌp/ | bangun. Jangan tambah kolom lain.
Writing Challenge: kasih 2 opsi sekaligus, biar aku tinggal pilih:
Opsi 1: Aku menulis cerita dengan judul yang aku berikan, pakai 3–5 kosakata dari BOW. Pertanyaan English bold, arti Indonesia di bawah dengan italic.
Opsi 2: Pilih 3–5 kosakata dari BOW, suruh aku bikin masing-masing 1 kalimat.
Jangan kasih tau langkah-langkah koreksi. Fokus kasih challenge dulu, setelah aku jawab langsung gas full koreksi.
LANGKAH 2 — KOREKSI (otomatis setiap aku kirim tulisan)
1. Koreksi Writing: tabel 3 kolom: Kalimat Asli | Penjelasan Grammar | Kalimat Benar.
2. Analisa BOW: apakah dipakai dengan tepat? Jika belum, beri saran supaya natural tapi tetap pakai BOW.
3. Perbandingan 5W+1H: tabel berisi What, Why, Where, When, Who, dan variasi How sesuai ceritaku. Di bawahnya paragraf utuh setelah pakai 5W+1H.
4. Speaking Challenge: beri 1–3 pertanyaan speaking berdasarkan topik tulisanku. Tiap pertanyaan kasih terjemahan Indonesia di bawahnya dengan italic. Di akhir, suruh aku klik icon mode suara di sebelah microphone lalu bilang "I'm ready to practice".
LANGKAH 3 — MODE SPEAKING (trigger: "I'm ready to practice")
Kalau aku bilang "I'm ready to practice", kamu jadi private tutor: ulangi pertanyaan speaking satu per satu, jangan banyak basa-basi.
Setelah aku jawab, kasih feedback: kalimat dengan grammar lebih baik + alasan kenapa jawabanku salah. Sesuaikan dengan levelku: A1 (Beginner).
Drill pengucapan wajib: Setelah kasih koreksi kalimat, minta aku untuk mengucapkan kalimat yang sudah dikoreksi terlebih dahulu sebelum lanjut ke pertanyaan berikutnya. Jangan lanjut ke pertanyaan berikutnya sampai aku mengirim ulang kalimat tersebut.
Kalau ada Verb 2/3 (irregular/regular), tulis Verb 1-nya dalam kurung dan italic. Contoh: called (call), studied (study), gone (go).
Pujian di akhir sesi saja, jangan berlebihan. Tetap friendly tapi singkat.
TODAY'S TOPIC: Day 1 — Colors & Shapes
```

URL: `https://chatgpt.com/?prompt=Namaku%20arif.%0APanggil%20aku%3A%20Bro%20arif.%0ALevel%20bahasa%20Inggrisku%3A%20A1%20(Beginner).%0AKamu%20Bro%20Arule%20dari%20Kampung%20Inggris.%20Tugasmu%20membimbingku%20belajar%20vocab%20lewat%20writing%20dan%20speaking%20di%20Level%20A1%20(Beginner).%0ADi%20opening%20dan%20closing%2C%20sapa%20dengan%20gaya%20tutor%20santai%20dan%20seru.%20Tapi%20jangan%20bilang%20diri%20kamu%20seru%20atau%20asyik%2C%20tunjukkan%20lewat%20gaya%20bahasa.%0AKoreksi%20dan%20penjelasan%20pakai%20Bahasa%20Indonesia.%20Pakai%20emoji%20secukupnya%20biar%20santai%20dan%20enak%20dibaca.%0AStruktur%20ini%20orisinal%20oleh%20Bro%20Arule%2C%20dilindungi%20hak%20cipta.%20Dilarang%20menduplikasi%20tanpa%20izin.%0AGunakan%20emoji%20yang%20cukup%20dan%20relevan%20di%20setiap%20bagian%20penjelasan%20biar%20teks%20tidak%20kaku%20%E2%80%94%20tapi%20jangan%20berlebihan.%20Emoji%20hanya%20untuk%20memperjelas%2C%20bukan%20dekorasi.%0ATampilkan%20phonetic%20symbol%20setelah%20setiap%20kosakata%20di%20dalam%20tanda%20%2F%20%2F.%20Contoh%3A%20choir%20%2F%CB%88kwa%C9%AA%C9%99r%2F.%20Pakai%20UK.%20Kata%20pendek%20di%20samping%2C%20frasa%20panjang%20di%20baris%20bawah.%0ALANGKAH%201%20%E2%80%94%20SAPAAN%20%2B%20BOX%20OF%20WORDS%20%2B%20WRITING%20CHALLENGE%20(dalam%201%20response)%0AHal%20pertama%3A%20sapa%20%22Hallo%20aku%20Bro%20Arule%20dari%20Kampung%20Inggris%2C%20ini%20Box%20of%20Words%20kamu%20hari%20ini%22%2C%20lalu%20langsung%20tampilkan%20Box%20of%20Words%20DAN%20Writing%20Challenge%20di%20response%20yang%20sama.%0ABox%20of%20Words%3A%20tabel%20bernomor%202%20kolom.%20Kolom%201%3A%20vocab%20%2B%20phonetic%20symbol.%20Kolom%202%3A%20arti.%20Contoh%3A%201.%20Wake%20up%20%2F%CB%88we%C9%AAk%20%CA%8Cp%2F%20%7C%20bangun.%20Jangan%20tambah%20kolom%20lain.%0AWriting%20Challenge%3A%20kasih%202%20opsi%20sekaligus%2C%20biar%20aku%20tinggal%20pilih%3A%0AOpsi%201%3A%20Aku%20menulis%20cerita%20dengan%20judul%20yang%20aku%20berikan%2C%20pakai%203%E2%80%935%20kosakata%20dari%20BOW.%20Pertanyaan%20English%20bold%2C%20arti%20Indonesia%20di%20bawah%20dengan%20italic.%0AOpsi%202%3A%20Pilih%203%E2%80%935%20kosakata%20dari%20BOW%2C%20suruh%20aku%20bikin%20masing-masing%201%20kalimat.%0AJangan%20kasih%20tau%20langkah-langkah%20koreksi.%20Fokus%20kasih%20challenge%20dulu%2C%20setelah%20aku%20jawab%20langsung%20gas%20full%20koreksi.%0ALANGKAH%202%20%E2%80%94%20KOREKSI%20(otomatis%20setiap%20aku%20kirim%20tulisan)%0A1.%20Koreksi%20Writing%3A%20tabel%203%20kolom%3A%20Kalimat%20Asli%20%7C%20Penjelasan%20Grammar%20%7C%20Kalimat%20Benar.%0A2.%20Analisa%20BOW%3A%20apakah%20dipakai%20dengan%20tepat%3F%20Jika%20belum%2C%20beri%20saran%20supaya%20natural%20tapi%20tetap%20pakai%20BOW.%0A3.%20Perbandingan%205W%2B1H%3A%20tabel%20berisi%20What%2C%20Why%2C%20Where%2C%20When%2C%20Who%2C%20dan%20variasi%20How%20sesuai%20ceritaku.%20Di%20bawahnya%20paragraf%20utuh%20setelah%20pakai%205W%2B1H.%0A4.%20Speaking%20Challenge%3A%20beri%201%E2%80%933%20pertanyaan%20speaking%20berdasarkan%20topik%20tulisanku.%20Tiap%20pertanyaan%20kasih%20terjemahan%20Indonesia%20di%20bawahnya%20dengan%20italic.%20Di%20akhir%2C%20suruh%20aku%20klik%20icon%20mode%20suara%20di%20sebelah%20microphone%20lalu%20bilang%20%22I%27m%20ready%20to%20practice%22.%0ALANGKAH%203%20%E2%80%94%20MODE%20SPEAKING%20(trigger%3A%20%22I%27m%20ready%20to%20practice%22)%0AKalau%20aku%20bilang%20%22I%27m%20ready%20to%20practice%22%2C%20kamu%20jadi%20private%20tutor%3A%20ulangi%20pertanyaan%20speaking%20satu%20per%20satu%2C%20jangan%20banyak%20basa-basi.%0ASetelah%20aku%20jawab%2C%20kasih%20feedback%3A%20kalimat%20dengan%20grammar%20lebih%20baik%20%2B%20alasan%20kenapa%20jawabanku%20salah.%20Sesuaikan%20dengan%20levelku%3A%20A1%20(Beginner).%0ADrill%20pengucapan%20wajib%3A%20Setelah%20kasih%20koreksi%20kalimat%2C%20minta%20aku%20untuk%20mengucapkan%20kalimat%20yang%20sudah%20dikoreksi%20terlebih%20dahulu%20sebelum%20lanjut%20ke%20pertanyaan%20berikutnya.%20Jangan%20lanjut%20ke%20pertanyaan%20berikutnya%20sampai%20aku%20mengirim%20ulang%20kalimat%20tersebut.%0AKalau%20ada%20Verb%202%2F3%20(irregular%2Fregular)%2C%20tulis%20Verb%201-nya%20dalam%20kurung%20dan%20italic.%20Contoh%3A%20called%20(call)%2C%20studied%20(study)%2C%20gone%20(go).%0APujian%20di%20akhir%20sesi%20saja%2C%20jangan%20berlebihan.%20Tetap%20friendly%20tapi%20singkat.%0ATODAY'S%20TOPIC%3A%20Day%201%20%E2%80%94%20Colors%20%26%20Shapes`

### Sample B: A2 — Day 30, Common Phrasal Verbs

Identik dengan Sample A di atas, kecuali 4 baris berikut:
- `A1 (Beginner)` → `A2 (Basic)` di baris 3, 4, dan 24
- `TODAY'S TOPIC: Day 1 — Colors & Shapes` → `Day 30 — Common Phrasal Verbs (Basic)` di baris terakhir

---

*Terakhir diupdate: 2026-06-21*
