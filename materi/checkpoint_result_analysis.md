# Checkpoint Review Exercise — Analysis & Design Spec

> **Status:** Design doc, belum diimplementasi. Lihat §10 untuk daftar yang harus dibangun sebelum fitur ini bisa hidup.
> **Scope:** Hanya **Vocabulary**, **Grammar**, **English For Professionals**. TIDAK untuk Speaking, Listening, Roleplay Practice (lihat §1 kenapa).
> **Rujukan:** [prd_user.md](../PRD_USER.md) §4.2/§4.3/§4.8 (mekanisme modul existing), [prompt_recommendation.md](../prompt_recommendation.md) (RULE 1–6), [grammar_analysis.md](grammar_analysis.md), [architecture.md](../architecture.md) §6 (skema DB & pola server-recompute).

---

## 1. Apa ini dan kenapa cuma 3 modul

Checkpoint adalah **latihan review hardcoded** (HTML/komponen interaktif, tanpa ChatGPT) yang muncul di **Day 5, 10, 15, 20** tiap level/topik di modul Vocabulary, Grammar, dan English For Professionals. Tujuannya retrieval practice — review sebelum forgetting curve turun terlalu jauh, bukan cuma nunggu sampai Day 31.

Cuma 3 modul ini karena materinya **closed-ended dan punya unit konten yang fixed/predictable per hari** (kata, pola grammar, frasa kerja), jadi soal bisa di-generate sekali oleh tim konten dan di-hardcode — sama seperti 5 contoh HTML quiz (Emails & Memos, Meetings & Presentations, Performance Reviews, Cover Letters) yang jadi acuan awal fitur ini.

Speaking, Listening, dan Roleplay **tidak** masuk scope karena skill yang diuji open-ended/produktif (ngomong, dengar-paham konteks baru, improvisasi percakapan) — itu butuh AI live untuk menilai, nggak bisa di-reduce jadi fill-in-the-blank tanpa kehilangan inti skill yang diuji. Ini konsisten dengan analisis hybrid delivery model yang sudah dibahas sebelumnya di percakapan ini.

---

## 2. Cadence — Day 5, 10, 15, 20 (bukan Day 25)

| Day | Checkpoint? | Kenapa |
|---|---|---|
| 5 | ✅ Checkpoint #1 | Block pertama, full review Day 1–5 |
| 10 | ✅ Checkpoint #2 | |
| 15 | ✅ Checkpoint #3 | |
| 20 | ✅ Checkpoint #4 | |
| 25 | ❌ Tidak ada | Lihat catatan di bawah |
| 30 | ❌ Tidak ada | Day 30 = topik terakhir, langsung disusul Day 31 (berlaku untuk semua modul termasuk Professional English — lihat §8.2) |
| 31 | N/A — bukan checkpoint, tetap Level Placement Test terpisah | Lihat §8.1 |

**Keputusan eksplisit:** user hanya menyebut Day 5/10/15/20, tidak menyebut Day 25. Saya **tidak menambahkan** Day 25 checkpoint karena: (a) user tidak memintanya, dan (b) Day 30 langsung diikuti Day 31 (cumulative test) — checkpoint di Day 25 akan terlalu berdempetan dengan Day 31, bikin user kena 2 review besar dalam 6 hari. Kalau ternyata mau tetap ada Day 25, ini gampang ditambah — pola weighting di §3 sama, cuma ganti angka block.

---

## 3. Scope Soal — Cumulative, Weighted 70/30

Sesuai keputusan user: tiap checkpoint **cumulative**, tapi 70% soal dari block 5-hari paling baru, 30% dari materi sebelumnya (bukan cuma block sebelumnya — **dipool dari semua hari sebelum block terbaru**, supaya materi Day 1 nggak hilang sama sekali begitu sudah lewat Day 15/20).

| Checkpoint | Hari di-cover | Sumber 70% (recent block) | Sumber 30% (pool materi lama) |
|---|---|---|---|
| Day 5 | Day 1–5 | Day 1–5 (100% — belum ada block sebelumnya) | — |
| Day 10 | Day 1–10 | Day 6–10 | Day 1–5 |
| Day 15 | Day 1–15 | Day 11–15 | Day 1–10 (dipool, bukan cuma Day 6-10) |
| Day 20 | Day 1–20 | Day 16–20 | Day 1–15 (dipool) |

**Edge case Day 5:** tidak ada "materi sebelumnya" untuk block pertama, jadi 100% soal dari Day 1–5. Bukan bug — memang nggak ada apa-apa untuk dipool di checkpoint pertama.

**Jumlah soal per checkpoint:** direkomendasikan **8 soal** (lebih ringan dari Day 31 yang 10–15 soal, karena checkpoint jauh lebih sering). Dengan split 70/30 dari 8 soal → 6 soal recent + 2 soal pool lama (genap, gampang dihitung). Ini angka rekomendasi, bukan keputusan final user — lihat §11.

---

## 4. Sumber Konten Soal per Modul — ini bagian paling kritis

Tiga modul ini **tidak punya struktur konten yang sama**, jadi sumber soal checkpoint juga harus beda. Menyamakan ketiganya (misal "semua dari BOW") akan salah secara teknis untuk Grammar dan Professional English. Detail per modul:

### 4.1 Vocabulary — sumber: BOW (Box of Words)

Setiap Day punya **persis 15 kata BOW** yang fixed dan pre-curated (RULE 6, prompt_recommendation.md) — ini konten yang paling aman dijadikan sumber checkpoint karena deterministik: setiap user yang menyelesaikan Day N pasti ketemu 15 kata yang sama persis.

Contoh real dari `materi/a1/vocab.md` Day 1: `wake up, brush teeth, have breakfast, take a shower, get dressed, go to work, have lunch, come home, cook dinner, watch TV, read a book, go to sleep, early, late, always`.

**⚠️ Gap teknis ditemukan saat riset:** BOW 15 kata ini **tidak tersedia sebagai data terstruktur** di `lib/materi/vocabulary-<level>.ts`. Cek `VocabDayData` di `vocab-shared.ts`:

```ts
export interface VocabDayData {
  day: number
  topik: string
  urlTemplate: string   // BOW ada di sini, tapi sudah di-percent-encode jadi 1 string panjang
}
```

BOW hanya eksis sebagai substring di dalam `urlTemplate` yang sudah di-encode untuk URL ChatGPT — bukan array `string[]` yang bisa langsung dipakai generate soal. Untuk checkpoint, kita butuh **sumber data baru**: opsi (a) tambah field `bow: string[]` di `VocabDayData` saat encoding ulang dari `materi/<level>/vocab.md` (sumber aslinya sudah punya BOW dalam format yang jelas: baris `BOW — PERSIS 15 kata ini (jangan tambah/ganti):` diikuti daftar kata), atau (b) bikin file data checkpoint terpisah per level (`lib/materi/checkpoint-vocab-<level>.ts`) yang isinya BOW + soal pre-written, supaya tidak perlu re-parse `urlTemplate`. Opsi (b) lebih aman karena tidak menyentuh file produksi yang sudah jalan.

### 4.2 Grammar — sumber: Grammar Point per Day, BUKAN BOW

**Ini temuan paling penting dari riset:** Grammar **tidak punya BOW**. Dari `materi/a1/grammar.md` baris 12 (catatan teknis tim):

> "5 contoh kalimat & penjelasan grammar **tidak** ditulis manual di dalam PROMPT — itu di-generate ChatGPT secara live dari instruksi `{GRAMMAR_POINT}` (beda dengan modul Vocab yang BOW-nya wajib pre-curated). Yang pre-written dan masuk ke URL hanya: topik, grammar point, dan 3 pertanyaan speaking."

Artinya: 5 contoh kalimat yang user lihat tiap hari **berbeda-beda tiap sesi**, di-generate ChatGPT real-time, tidak deterministik, dan tidak ada di `lib/materi/grammar-<level>.ts`. Kalau checkpoint Grammar dibuat dengan asumsi "ambil kalimat yang sudah diajarkan", itu **salah** — kalimat itu tidak fixed.

Yang fixed dan bisa dijadikan sumber checkpoint per Day Grammar:
- **Grammar Point** (1 per hari, nama pola — contoh Day 1 A1: "Noun: Singular/Plural & Artikel a/an", Day 5: "Past Simple (Verb 2) untuk kejadian lampau"). Ada persis 30 grammar point unik per level, 1:1 dengan 30 Day, tidak ada overlap (sudah dicek di A1).
- 3 pertanyaan speaking per hari (fixed, ada di prompt) — bisa jadi referensi konteks soal, tapi bukan untuk dijawab langsung (itu speaking, bukan written checkpoint).

**Konsekuensi desain:** soal checkpoint Grammar **harus ditulis baru oleh tim konten**, menguji Grammar Point yang sudah diajarkan (bukan kata spesifik), dengan format meniru Day 31 Grammar test yang sudah didefinisikan di PRD: *"koreksi kalimat / pilih bentuk grammar tepat / lengkapi struktur"*. Checkpoint Grammar secara struktural adalah **mini Day-31**, bukan versi word-bank seperti Vocabulary.

### 4.3 English For Professionals — sumber: belum ada, masih harus ditulis dulu

Dicek `materi/profesional_english/level_a1.md` sampai `level_c2.md` — **semua file kosong (0 baris)**. Materi modul ini belum ditulis sama sekali, konsisten dengan pengakuan sebelumnya bahwa modul ini belum di-research.

> **✅ Keputusan arsitektur diselesaikan (2026-06-28):** Kontradiksi lama antara *"30 topik flat, tidak terikat CEFR"* (PRD §4.8 lama) vs 6 file per-level di folder `materi/profesional_english/` **sudah diputuskan** — Professional English sekarang **level-based A1–C2**, 30 topik/level, sama seperti 5 modul utama lain. PRD §4.8 sudah diupdate untuk mencerminkan keputusan ini. File-file kosong di `materi/profesional_english/` adalah scaffolding lama yang perlu dimigrasikan ke pola `materi/<level>/professional.md` saat materi ditulis (lihat `materi/profesional_analysis.md` §7.5 untuk detail). Struktur folder tidak lagi inkonsisten — tidak butuh keputusan user lagi.

Karena konten belum ada, desain checkpoint untuk modul ini **forward-looking saja**: begitu materi ditulis, setiap Day perlu punya unit konten fixed yang setara BOW — yaitu **"Frasa Kunci Profesional"** (8–12 frasa per Day, disimpan sebagai `keyPhrases: string[]` di `lib/materi/professional-<level>.ts`), sesuai desain yang sudah didokumentasikan di `materi/profesional_analysis.md` §2.1 dan §6.2. **5 contoh HTML quiz yang user share di awal percakapan ini (Emails & Memos, Meetings & Presentations, Performance Reviews, Cover Letters) adalah template yang pas dipakai** — bukan cuma untuk checkpoint, tapi sebagai pola untuk keseluruhan materi harian modul ini. Rekomendasi: saat menulis materi Professional English, sertakan field `keyPhrases: string[]` per Day dari awal (jangan ulangi gap teknis yang sama seperti Vocabulary di §4.1). Struktur field ini sudah diamanatkan di `profesional_analysis.md`.

---

## 5. Diferensiasi per Level CEFR — wajib, tidak boleh 1 template untuk semua level

Riset BOW lintas level (`materi/{a1,a2,b1,b2,c1,c2}/vocab.md`) menunjukkan kompleksitas kontennya naik drastis, bukan cuma "kata lebih susah":

| Level | Contoh isi BOW (Day 1 atau sampel) | Karakter unit |
|---|---|---|
| A1 | `wake up, brush teeth, have breakfast, early, late` | Kata tunggal konkret, sehari-hari |
| A2 | `remember, experience, memory, adventure, last week, ago` | Kata tunggal + sedikit time-marker phrase |
| B1 | `achievement, accomplish, milestone, overcome, so far, since` | Kata abstrak + collocation pendek |
| B2 | `trajectory, hindsight, stem from, account for, in retrospect` | Phrasal verb & collocation 2-3 kata |
| C1 | `the crux of the matter, conceivably, to all intents and purposes` | Frasa idiomatik akademik, 3-6 kata |
| C2 | `a wolf in sheep's clothing, the Overton window, hark back to (something)` | Idiom/ungkapan native-level, kadang 1 kalimat pendek |

Implikasi langsung untuk desain checkpoint (berlaku untuk **Vocabulary, Grammar, dan English For Professionals** — ketiganya sekarang sama-sama level-based A1–C2, lihat §4.3):

| Aspek | A1–A2 | B1–B2 | C1–C2 |
|---|---|---|---|
| Bahasa instruksi UI checkpoint | Indonesia penuh | Indonesia minim, istilah Inggris mulai dominan | Inggris penuh (selaras §5.5 PRD — Kebijakan Bahasa Progresif) |
| Word bank ditampilkan? | Selalu tampil | Tampil tapi opsional disembunyikan (toggle) | Disembunyikan default — uji active recall, bukan recognition |
| Unit yang di-blank | 1 kata | 1 frasa/collocation (2-3 kata) | 1 ekspresi idiomatik (bisa sampai 6+ kata, dianggap 1 unit) |
| Kalimat soal | Single-clause sederhana | Single-clause dengan konteks situasional | Multi-clause / butuh inferensi konteks (selaras kompleksitas Grammar Point level itu) |
| Format soal Grammar | Pilih bentuk benar (multiple choice sederhana) | Lengkapi struktur / transformasi kalimat | Identifikasi error + alasan (mirip "Self-Check First" yang sudah dipakai di Grammar C1 — opsional ditiru di checkpoint) |

Catatan tambahan dari riset: Grammar C1 sudah punya kebijakan **"Self-Check First"** sebelum koreksi (`materi/c1/grammar.md`) dan **"Full English only — absolutely no Indonesia"**. Kalau checkpoint Grammar C1/C2 ingin konsisten dengan rigor yang sudah ada di materi utamanya, pertimbangkan menambahkan elemen serupa (user diminta coba spot error sendiri dulu sebelum lihat jawaban) — ini rekomendasi opsional, bukan requirement wajib dari user.

---

## 6. Format Exercise — beda widget per modul, bukan 1 template generik

| Modul | Widget checkpoint | Kenapa |
|---|---|---|
| Vocabulary | Word bank + fill-in-the-blank (popup pilih kata), persis seperti 5 HTML contoh awal | BOW = unit kata diskrit, cocok untuk word bank |
| Grammar | Pilih bentuk yang tepat / lengkapi struktur / identifikasi & koreksi error kalimat | Grammar Point = pola struktural, bukan kata — mirror format Day 31 Grammar yang sudah ada di PRD |
| English For Professionals | Word bank + fill-in-the-blank (sama seperti Vocabulary) — *tentatif, tunggu materi final* | Frasa kerja profesional sifatnya leksikal seperti BOW, begitu materinya ditulis dengan pola serupa §4.1 |

Semua tetap: hardcoded HTML/komponen, jalan client-side, skor dihitung client lalu **direkonsiliasi ulang di server** sebelum disimpan (pola yang sama dengan `placement_test_results`/`module_test_results`, lihat architecture.md §6 baris 207).

**Contoh interaktif (referensi untuk hardcode):** [checkpoint_example_vocab_a1_day10.html](checkpoint_example_vocab_a1_day10.html) — Checkpoint #2 Vocabulary A1 lengkap (8 soal: 6 dari Day 6–10 + 2 dari Day 1–5, sesuai split §3), pakai BOW asli dari `materi/a1/vocab.md`, bisa dibuka langsung di browser. Soal & word bank-nya menunjukkan pola yang sama dengan 5 contoh HTML quiz yang jadi acuan awal fitur ini (§1), plus breakdown skor per Day untuk traceability soal salah (lihat catatan di §10 poin 1). File ini statis/tanpa backend — cuma demonstrasi interaksi & struktur soal, bukan komponen React yang siap pakai.

---

## 7. UI/Flow Penempatan

### 7.1 Checkpoint = row baru yang disisip di antara Day, bukan banner/modal terpisah

Update dari instruksi user: checkpoint **bukan** card/banner melayang seperti draft sebelumnya — checkpoint adalah **row baru yang disisip langsung ke dalam list Day** di `app/dashboard/[module]/page.tsx`, persis di antara dua Day row. Contoh: Day 5 → **[row Checkpoint #1]** → Day 6 → Day 7 → ... → Day 10 → **[row Checkpoint #2]** → Day 11 → dst, untuk Day 15 dan Day 20.

Ini **bukan pola baru** — kode yang sudah ada hari ini punya mekanisme yang persis cocok: `bridgeFromDay`. Saat ini dipakai untuk insert 1 divider "A1 → A2 Bridge" di antara Day 21 dan Day 22 (lihat `MODULE_DATA` di `app/dashboard/[module]/page.tsx`, dirender di dalam loop `displayTopics.map((topic, i) => { const day = i + 1; ... })`):

```tsx
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
```

`bridgeFromDay` saat ini cuma 1 angka (1 titik insert). Checkpoint butuh **4 titik insert** (Day 5/10/15/20), jadi field ini perlu digeneralisasi jadi array, misal `checkpointAfterDay: number[]` (contoh: `[5, 10, 15, 20]`), dicek dengan `mod.checkpointAfterDay?.includes(day)` di tempat yang sama persis dengan `bridgeFromDay` dicek hari ini. Ini perubahan kecil pada pola yang sudah ada, bukan rewrite struktur loop.

### 7.2 Warna row — beda dari Day biasa DAN beda dari Day 31

User minta row checkpoint pakai warna beda, mencontoh bagaimana Day 31 sudah beda warna dari Day biasa. Row Day 31 di kode saat ini (dirender setelah loop utama, dengan divider "Bonus" sebelumnya):

```tsx
<button className="flex w-full items-center gap-4 bg-amber-50 px-4 py-5 text-left transition-colors hover:bg-amber-100 sm:px-6">
  <span className="w-16 shrink-0 rounded-xl bg-amber-400 py-1.5 text-center text-xs font-bold tracking-wide text-white">
    DAY 31
  </span>
  <div className="flex-1">
    <p className="text-base font-semibold text-foreground">Placement Test</p>
    <p className="mt-0.5 text-xs text-amber-600">Uji pemahaman Day 1–30 · Dapat skor &amp; rekomendasi level</p>
  </div>
  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-400">
    <ArrowRight className="size-4 text-white" />
  </div>
</button>
```

**Checkpoint TIDAK boleh ikut pakai amber** — kalau sama dengan Day 31, user bisa salah kira checkpoint = test penentu level (padahal §8.1 checkpoint murni formatif, tidak menggantikan Day 31). Warna checkpoint juga harus beda dari warna aksen modul itu sendiri (Vocabulary = blue, Grammar = amber/stone, English For Professionals = cyan — lihat `MODULE_DATA`), supaya row checkpoint tetap menonjol di tengah list Day yang sudah berwarna sesuai modulnya.

**Rekomendasi: violet** (`bg-violet-50` / `bg-violet-400` / `text-violet-600`) — satu-satunya warna di antara 4 yang relevan (amber Day 31, blue Vocabulary, amber/stone Grammar, cyan Professional) yang tidak bertabrakan dengan satupun. Ini rekomendasi, bukan keputusan final user — lihat §11.

### 7.3 Markup row checkpoint — 2 state (belum dikerjakan vs sudah dikerjakan)

Struktur mengikuti pola Day 31 di atas (badge kiri + judul/subtitle + affordance kanan), supaya konsisten secara visual dengan elemen "spesial" yang sudah ada, hanya beda warna dan beda perilaku setelah selesai.

**State A — belum pernah dikerjakan:**

```tsx
<button className="flex w-full items-center gap-4 bg-violet-50 px-4 py-5 text-left transition-colors hover:bg-violet-100 sm:px-6">
  <span className="w-16 shrink-0 rounded-xl bg-violet-400 py-1.5 text-center text-xs font-bold tracking-wide text-white">
    CP #2
  </span>
  <div className="flex-1">
    <p className="text-base font-semibold text-foreground">Checkpoint #2 — Review Day 6–10</p>
    <p className="mt-0.5 text-xs text-violet-600">8 soal · ±5 menit · tidak mempengaruhi Day 31</p>
  </div>
  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-violet-400">
    <ArrowRight className="size-4 text-white" />
  </div>
</button>
```

**State B — sudah dikerjakan (skor tersimpan di DB, ditarik balik via API saat halaman load):**

```tsx
<button className="flex w-full items-center gap-4 bg-violet-50 px-4 py-5 text-left transition-colors hover:bg-violet-100 sm:px-6">
  <span className="w-16 shrink-0 rounded-xl bg-violet-400 py-1.5 text-center text-xs font-bold tracking-wide text-white">
    CP #2
  </span>
  <div className="flex-1">
    <div className="flex items-center gap-2">
      <p className="text-base font-semibold text-foreground">Checkpoint #2 — Review Day 6–10</p>
      <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[11px] font-bold text-violet-700">7/8</span>
    </div>
    <p className="mt-0.5 text-xs text-violet-600">Terakhir dikerjakan 2 hari lalu · klik untuk ulangi</p>
  </div>
  <span className="group flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-500">
    <CheckCircle2 className="size-5 group-hover:hidden" />
    <RotateCcw className="hidden size-4 group-hover:block" />
  </span>
</button>
```

Badge skor "7/8" dan ikon CheckCircle2/RotateCcw-on-hover **bukan elemen baru yang diciptakan dari nol** — badge skor meniru pola yang sudah ada di card "Placement Test Awal" di `app/dashboard/profil/page.tsx` (`{user.placementTotalCorrect}/40 benar`), dan ikon hover-untuk-retry meniru pola completion icon yang sudah ada di Day row biasa (`CheckCircle2` default, `RotateCcw` saat hover). Yang benar-benar baru hanya **kombinasi keduanya pada 1 row** — checkpoint adalah elemen pertama di codebase yang menampilkan skor numerik langsung di row list, bukan cuma centang ✓.

**Penting — sumber state ini harus dari server, bukan client:** Day row biasa saat ini pakai `completedSet` (`useState<Set<number>>`, hilang saat refresh — gap yang sudah dicatat di CLAUDE.md §4 dan architecture.md §13). Row checkpoint **tidak boleh** mengulang gap yang sama: state "sudah dikerjakan + skornya berapa" wajib datang dari hasil fetch `checkpoint_results` (skor terakhir per `userId`+`module`+`level`+`checkpointDay`), bukan dari state lokal. Halaman modul perlu 1 query tambahan saat load untuk hydrate 4 row checkpoint ini (lihat §9 untuk endpoint yang dibutuhkan).

### 7.4 Klik row checkpoint → render quiz, bukan navigasi keluar halaman

Beda dari Day 31 yang navigasi ke halaman placement test tersendiri (`/dashboard/placement-test`), checkpoint cukup ringan (8 soal, ±5 menit) sehingga lebih pas dirender **in-place** — klik row → expand jadi komponen quiz hardcoded tepat di posisi row itu (accordion-style) atau modal di atas halaman yang sama, tanpa pindah route. User submit jawaban → client kirim ke `POST /api/checkpoint` → server recompute skor dari kunci jawaban → insert ke `checkpoint_results` → response balik skor final → row langsung berubah ke **State B** tanpa perlu refresh halaman.

Checkpoint **tidak memblokir** akses ke Day berikutnya — sama seperti Day 31 yang "bisa diulang kapan saja" dan tidak ada lock system di modul ini (PRD §3.7: "no lock system"). Konsisten dengan filosofi existing.

### 7.5 Summary Checkpoint & Day 31 di Halaman Profile

User minta 1 section baru di `/dashboard/profil` yang merangkum **semua hasil checkpoint dan semua hasil Day 31** lintas modul — supaya user nggak harus masuk ke tiap halaman modul satu-satu untuk lihat riwayat skornya.

**Penting — ini beda dari card "Placement Test Awal" yang sudah ada di halaman itu (`app/dashboard/profil/page.tsx` baris ±126-190).** Card itu adalah test 40-soal sekali waktu saat onboarding yang menentukan level CEFR awal user secara keseluruhan — bukan Day 31 per modul yang dibahas di dokumen ini. Dua hal yang beda, jangan disatukan jadi 1 card supaya user nggak bingung "test yang mana ini". Tapi **gaya visualnya layak ditiru** — card itu sudah punya pola yang pas: badge status (✓ Selesai / Belum diambil), badge skor (`{score}/40 benar`), dan CTA (Ulangi Tes / Mulai Sekarang). Section baru ini memakai pola visual yang sama, cuma per-modul bukan 1 test tunggal.

**Penempatan:** section baru ditempatkan setelah card "Perjalanan CEFR" (baris ±192-237, yang menampilkan progress bar A1→C2 + `{totalCompleted}/{totalTopics} topik`) dan sebelum "Informasi Profil" (baris ±239). Urutan ini logis: "Perjalanan CEFR" kasih angka ringkasan tertinggi (overall %), section baru ini adalah breakdown satu tingkat lebih detail (skor per modul/per test), baru di bawahnya form edit data diri.

**Isi section — 1 card berjudul "Riwayat Checkpoint & Test", isinya 1 row per modul:**

| Modul | Kolom Day 31 | Kolom Checkpoint |
|---|---|---|
| Vocabulary | Badge skor Day 31 level aktif (mis. "Day 31: 8/10") atau "Belum diambil" | 4 chip kecil CP1–CP4, tiap chip skor (mis. "6/8") atau "—" kalau belum dikerjakan |
| Grammar | Sama seperti Vocabulary | Sama seperti Vocabulary |
| Speaking | Badge skor Day 31 saja | — (modul ini tidak punya checkpoint, lihat §1) |
| Listening | Badge skor Day 31 saja | — |
| Roleplay Practice | Badge skor Day 31 saja | — |
| English For Professionals | Badge skor Day 31 level aktif (mis. "Day 31: 8/10") atau "Belum diambil" — sama seperti Vocabulary/Grammar | 4 chip CP1–CP4 (§8.2 — checkpoint Day 30 kini usang karena Day 31 sudah ada) |

Klik badge/chip mana pun → navigasi langsung ke row checkpoint/Day 31 yang relevan di halaman modulnya (`app/dashboard/[module]/page.tsx`), supaya summary ini jadi shortcut, bukan dead-end.

**Cakupan level:** secara default tampilkan baris untuk **level CEFR aktif user saja** (field `level` yang sudah di-fetch di halaman ini dari `/api/me`), karena itu yang paling relevan/actionable. User bisa ganti level CEFR yang ditampilkan lewat dropdown kecil di header card (reuse `CEFR_LEVELS` yang sudah diimport di file ini untuk Edit Profil) — supaya riwayat di level-level lama (sebelum naik level) tetap bisa dilihat, konsisten dengan filosofi history-preserving di §9 (skor lama tidak pernah dihapus/ditimpa).

**Data yang dibutuhkan:** endpoint baru, **belum ada saat ini** — `GET /api/me/test-history?level=<CEFR>` yang mengagregasi: skor Day 31 terbaru per modul dari `module_test_results` (lihat §9 — tabel ini sendiri belum dibangun) dan skor checkpoint terbaru per `checkpointDay` per modul dari `checkpoint_results` (§9). Endpoint ini ditambahkan ke daftar build-order di §10.

**Skala:** kalau ke depan card ini jadi terlalu padat (6 modul × banyak kolom), bisa dipecah jadi halaman tersendiri (`/dashboard/profil/riwayat`) dengan link "Lihat semua riwayat →" dari card ringkas ini — tapi untuk v1, 1 card dengan 6 baris masih cukup ringkas untuk inline di halaman profil.

---

## 8. Hubungan dengan Day 31

### 8.1 Day 31 tetap sole leveling gate

Day 31 **tidak berubah**: tetap fully cumulative (Day 1–30), tetap satu-satunya yang menentukan rekomendasi naik level atau ulang level (`module_test_results`, sesuai PRD §4.2/§4.3 dan architecture.md baris 208). Checkpoint Day 5/10/15/20 **tidak mempengaruhi** keputusan naik level sama sekali — statusnya additive/informational, bukan gate. Skor checkpoint ditampilkan ke user sebagai feedback formatif ("kamu kuat di Day 6-10, perlu review Day 3"), bukan sebagai prasyarat lulus.

### 8.2 English For Professionals — Day 31 sekarang ADA ✅

> **⚠️ OBSOLETE (2026-06-28):** Bagian ini sebelumnya merekomendasikan "checkpoint Day 30 sebagai pengganti informal Day 31" *karena pada saat itu Professional English dirancang flat/skill-based tanpa Day 31*. Rekomendasi itu **sudah tidak berlaku**.

**Keputusan yang sudah diambil:** Professional English sekarang **level-based A1–C2**, 30 topik/level, dengan **Day 31 = Level Placement Test** persis seperti 5 modul utama lainnya. Detail: lihat `materi/profesional_analysis.md` §5.8 dan PRD §4.8 (sudah diupdate).

**Implikasi untuk checkpoint:** checkpoint pattern Professional English sekarang **identik** dengan Vocabulary dan Grammar — Day 5/10/15/20 dengan split 70/30, 8 soal, word-bank fill-in-the-blank dari `keyPhrases: string[]` per Day. **Tidak ada checkpoint ekstra di Day 30** — Day 30 adalah topik terakhir biasa, dan Day 31 sudah menutup modul dengan cumulative test yang sesungguhnya. Field schema `level` di `CheckpointResult` (§9) juga **tidak lagi nullable** untuk modul ini — Professional English punya `level` ("a1" | "a2" | "b1" | "b2" | "c1" | "c2") sama seperti modul lain.

---

## 9. Skema Data (Proposal)

Mengikuti pola yang sudah ada (`placement_test_results`, lihat `prisma/schema.prisma` baris 35-46): tabel terpisah, history-preserving, skor dihitung ulang di server.

```prisma
model CheckpointResult {
  id            String   @id @default(uuid())
  userId        String   @map("user_id")
  module        String   // "vocabulary" | "grammar" | "professional"
  level         String   // "a1" | "a2" | "b1" | "b2" | "c1" | "c2" — berlaku untuk semua 3 modul (Professional English sekarang level-based, §8.2)
  checkpointDay Int      @map("checkpoint_day") // 5 | 10 | 15 | 20 | 30 (professional final)
  totalCorrect  Int      @map("total_correct")
  totalQuestion Int      @map("total_question")
  answersRaw    Json     @map("answers_raw") // jawaban mentah per soal, untuk recompute & audit
  takenAt       DateTime @default(now()) @map("taken_at")

  user User @relation(fields: [userId], references: [id])

  @@map("checkpoint_results")
}
```

**Catatan status — ini belum bisa langsung dibangun:** `module_test_results` (Day 31) dan `topic_progress` (tracking topik selesai) sendiri **belum ada** di `prisma/schema.prisma` saat ini — keduanya masih status prototype/belum dibangun (lihat CLAUDE.md §1 status saat ini). `checkpoint_results` punya dependency konseptual ke pola yang sama, jadi urutan implementasi yang masuk akal: bangun `module_test_results` dan `topic_progress` dulu (keduanya sudah didesain di PRD, cuma belum di-migrate), baru `checkpoint_results` menyusul dengan pola yang konsisten.

API yang dibutuhkan (pola sama dengan `/api/placement-test`): `POST /api/checkpoint` — terima `answersRaw`, server recompute skor dari kunci jawaban (jangan percaya skor dari client), insert ke `checkpoint_results`.

Untuk hydrate state row checkpoint di halaman modul (§7.3) dan summary di halaman profil (§7.5), dibutuhkan 2 endpoint baca tambahan: `GET /api/checkpoint?module=&level=` (skor terbaru per `checkpointDay` untuk 1 modul/level — dipakai halaman modul) dan `GET /api/me/test-history?level=` (agregasi skor Day 31 + checkpoint lintas semua modul untuk 1 level — dipakai summary profil).

---

## 10. Yang Harus Dibangun Sebelum Fitur Ini Hidup (urutan)

1. **Vocabulary:** ekstrak BOW jadi data terstruktur (lihat opsi di §4.1) — prasyarat mutlak, tanpa ini soal checkpoint Vocabulary tidak bisa di-generate sama sekali.
2. **Grammar:** tulis soal checkpoint manual per Grammar Point per level (30 grammar point × 6 level = 180 unit konten yang perlu ditulis tim, meniru format Day 31 Grammar) — tidak bisa otomatis dari prompt karena materinya live-generated.
3. **English For Professionals:** tulis materi 30 topik/level dulu (saat ini 0 baris di semua file level) — checkpoint modul ini sepenuhnya blocked sampai ini selesai. Struktur level-based A1–C2 sudah dikonfirmasi (§4.3); tulis per level dimulai dari B1, ikuti `materi/profesional_analysis.md` §8 (Next Steps) untuk urutan prioritas.
4. **DB:** bangun `module_test_results` + `topic_progress` (prasyarat arsitektural, sudah didesain di PRD, belum di-migrate) sebelum `checkpoint_results`.
5. **Komponen UI:** 1 komponen quiz reusable untuk word-bank-fill-blank (Vocabulary + Professional English), 1 komponen untuk Grammar (pilihan-ganda/transformasi/error-spotting) — parameterized per level sesuai tabel §5. Plus 1 komponen row checkpoint (2 state, §7.3) yang disisip via generalisasi `bridgeFromDay` → `checkpointAfterDay: number[]` (§7.1).
6. **API:** `POST /api/checkpoint` dengan server-side recompute (ikut pola `/api/placement-test`), `GET /api/checkpoint` (hydrate row di halaman modul), `GET /api/me/test-history` (hydrate summary di halaman profil) — detail di §9.
7. **Halaman Profil:** tambah section "Riwayat Checkpoint & Test" (§7.5) — baru bisa dibangun setelah endpoint `GET /api/me/test-history` di atas tersedia.

---

## 11. Keputusan yang Saya Buat Secara Eksplisit (perlu konfirmasi user)

Hal-hal di bawah ini saya putuskan berdasarkan penalaran terbaik karena user tidak menyebutkan secara eksplisit — tandai kalau ada yang mau diubah:

1. **Tidak ada checkpoint Day 25** (§2) — user cuma sebut 5/10/15/20.
2. **30% materi lama di-pool dari SEMUA hari sebelumnya**, bukan cuma block tepat sebelumnya (§3) — interpretasi dari kalimat user yang cuma kasih 1 contoh (Day 10).
3. **8 soal per checkpoint** (6 recent + 2 lama) (§3) — angka rekomendasi, bukan dari user.
4. **Checkpoint Grammar memakai format pilihan-ganda/transformasi/error-spotting, BUKAN word-bank seperti Vocabulary** (§4.2, §6) — karena Grammar tidak punya BOW, ini konsekuensi teknis bukan preferensi gaya.
5. ~~**English For Professionals dapat 1 checkpoint tambahan di Day 30 (full cumulative, no split)** sebagai pengganti informal Day 31 yang sengaja tidak ada di modul ini (§8.2).~~ **→ OBSOLETE (2026-06-28):** Professional English sekarang punya Day 31, checkpoint Day 30 ekstra tidak diperlukan. Pola checkpoint kini identik dengan Vocabulary & Grammar (Day 5/10/15/20 saja).
6. ~~**Flag struktur folder `profesional_english/level_*.md` yang kontradiktif dengan PRD (per-level vs flat 30 topik)** (§4.3) — bukan saya putuskan, cuma diangkat supaya tidak terlewat saat materi modul ini akhirnya ditulis.~~ **→ RESOLVED (2026-06-28):** Keputusan sudah diambil: per-level A1–C2 menang. File-file kosong di `materi/profesional_english/` adalah scaffolding lama, migrasi ke `materi/<level>/professional.md` dilakukan saat materi ditulis.
7. **Label row dipilih "Checkpoint #N"** (§7.3), bukan "Exercise N" — user menyebut dua opsi ("checkpoit atau exercise 1") tanpa memutuskan salah satu. Saya pilih "Checkpoint" karena: (a) sudah dipakai konsisten di seluruh dokumen ini sejak §1, (b) "Exercise" berisiko ambigu dengan istilah "Latihan Bebas" (modul bonus terpisah, §4.7 PRD) dan "Writing Challenge"/"Speaking Challenge" yang sudah jadi istilah baku di prompt materi. Kalau user lebih suka "Exercise", tinggal ganti string label, tidak mengubah desain lain.
8. **Warna row checkpoint = violet** (§7.2) — dipilih karena satu-satunya warna yang tidak bertabrakan dengan amber (Day 31), blue (aksen modul Vocabulary), amber/stone (aksen modul Grammar), maupun cyan (aksen modul Professional). Belum dikonfirmasi user, gampang diganti kalau ada preferensi lain asal tetap beda dari ke-4 warna itu.
