# ANALISIS & ROADMAP MATERI LISTENING — SEMUA LEVEL (A1–C2)
**Aplikasi:** Inggrisin Yuk | **AI Tutor:** Kak Ara | **Modul:** Listening (Modul 4)
**Cakupan:** Analisis kompetitor + riset kurikulum CEFR listening + template master untuk 6 level (A1, A2, B1, B2, C1, C2)
**Status dokumen:** ACUAN (reference) — bukan materi day-by-day final. Dokumen ini dipakai sebagai dasar saat menulis `materi/<level>/listening.md` dan `materi/<level>/listening_prompt.md` nanti.

> **Catatan penting sebelum baca:** Dokumen ini **tidak** menulis 180 prompt day-by-day. Yang ada di sini: analisis prompt kompetitor (termasuk audit URL-safety aktual), struktur materi per sesi, evolusi bahasa & kedalaman per level, metodologi riset CEFR listening (dengan sumber yang benar-benar diverifikasi lewat web research — bukan dari memori model), daftar **nama topik/monolog** 30 hari × 6 level (+ rationale 1 baris per topik), dan **satu** Template Master Listening yang sudah lolos RULE 1–6 di [prompt_recommendation.md](../prompt_recommendation.md). Mekanisme Listening mengikuti **prd_user.md §4.5** (sudah diputuskan) — monolog/cerita → tabel vocab → trigger "Let's start speaking!" → comprehension questions satu per satu → **Feedback 5 Langkah**. Modul ini **bukan** 6 langkah seperti Speaking ([speaking_analysis.md](speaking_analysis.md) §2.3) dan **bukan** 8 langkah seperti Vocab — punya struktur feedback 5 langkahnya sendiri yang fokus ke **comprehension** (apakah user paham isi monolog), bukan ke kebenaran ucapan. Box of Words/Writing Challenge (Vocab) dan Repeat After Me wajib-blocking (Grammar §4.3) **tidak** diimpor ke sini.

---

## 🔍 1. ANALISIS PROMPT KOMPETITOR (Bro Arule — Kampung Inggris)

### 1.1 Mekanisme Prompt Kompetitor (walkthrough)

Kompetitor ("Bro Arule") menjual produk prompt-delivery yang menggabungkan Listening **dan** Speaking dalam satu prompt. Berdasarkan 6 prompt verbatim (A1 Day 2, A2 Day 5, B1 Day 27, B2 Day 28, C1 Day 18, C2 Day 25), mekanismenya:

- **Persona & header behavior** — Nama tutor "Bro Arule dari Kampung Inggris". Sapaan gender-binary ("Bro arif"). Klaim hak cipta eksplisit ("Struktur ini orisinal oleh Bro Arule — dilarang menduplikasi tanpa izin"). Instruksi emoji "cukup dan relevan di setiap bagian" tanpa batasan jumlah.
- **BAGIAN A — Listening Practice** (otomatis di awal): respon pertama langsung cerita/monolog Inggris sesuai tema "tanpa sapaan pembuka apapun". Spesifikasi panjang: **4–8 kalimat untuk A1–B1, 8–15 kalimat untuk B2–C2**. Di bawah cerita, tampilkan **tabel vocabulary penting**. Ditutup instruksi aktifkan mode suara lalu ucapkan **"I'm ready to practice"**.
- **BAGIAN B — Speaking Challenge** (trigger: "I'm ready to practice"): pertanyaan soal isi cerita satu per satu (Inggris + terjemahan Indonesia di bawahnya). Alur jawaban 5 langkah: (1) jawaban salah → koreksi **berdasarkan isi cerita/monolog**, (2) minta user ucapkan ulang kalimat koreksi, (3) **blok progresi** — tidak lanjut sampai user kirim ulang kalimat koreksi, (4) baru setelah benar, ulangi pertanyaan yang sama sampai dijawab benar, (5) lanjut ke pertanyaan berikutnya.
- **Penutup** — baris `TODAY'S TOPIC: Day N — [topik]`.

### 1.2 Temuan Kritis: Struktur Prompt Identik Kata-per-Kata di 6 Level

Membandingkan 6 prompt verbatim: paragraf persona, aturan emoji, BAGIAN A, BAGIAN B, dan seluruh alur 5 langkah jawaban **identik kata-per-kata di keenam level**. Yang berubah **hanya 3 hal**: baris `Level bahasa Inggrisku saat ini: [LEVEL] ([NAMA])`, kalimat `Tugasmu membimbing aku belajar LISTENING & SPEAKING di level [LEVEL] ([NAMA])`, dan baris `TODAY'S TOPIC: Day [N] — [topik]`.

Ini pola yang **sama** dengan yang sudah dikonfirmasi 2 dokumen sebelumnya — Grammar ([grammar_analysis.md](grammar_analysis.md) §1.2: "satu pool topik beginner untuk semua 6 level") dan Speaking ([speaking_analysis.md](speaking_analysis.md) §1.2: "3 topik unik didaur ulang jadi 6 slot, reuse berpasangan"). Artinya kompetitor memakai **satu template tunggal** yang ditempel ke semua modul (Grammar, Speaking, Listening) dan semua level, dengan hanya menukar label level + topik.

**Catatan kejujuran penting — yang TIDAK bisa dibuktikan dari sample Listening ini:** berbeda dari sample Speaking/Grammar (yang semuanya "Day 1" tiap level, sehingga reuse topik antar level kelihatan jelas), sample Listening yang diberikan **punya topik berbeda di tiap level** (Day 2, 5, 27, 28, 18, 25 — bukan Day 1 semua). Jadi klaim "topic reuse antar level" **TIDAK bisa diverifikasi** dari 6 sample ini — kita tidak punya 6 prompt dengan Day yang sama untuk membandingkan apakah topik Day 2 A1 sama dengan topik Day 2 C2. **Yang benar-benar terbukti dari sample ini** adalah: **struktur prompt (persona + BAGIAN A + BAGIAN B + alur 5 langkah) identik kata-per-kata di 6 level — tidak ada satupun instruksi yang menyesuaikan kompleksitas comprehension, panjang monolog efektif, kecepatan implied, atau kedalaman feedback per level.** Diferensiasi level yang riil = nol; semuanya dititipkan ke improvisasi ChatGPT lewat satu label `[LEVEL]`. Itu temuan yang akurat dan cukup kuat tanpa perlu melebih-lebihkan ke klaim reuse topik.

### 1.3 Temuan Kritis Kedua: Ini Modul "Listening" yang Sebenarnya Menguji Speaking

Kompetitor **mencampur Listening dengan Speaking secara struktural** dan, lebih jauh, **memprioritaskan Speaking di atas comprehension**:

1. Bagian comprehension question dilabeli **"BAGIAN B — SPEAKING CHALLENGE"**, bukan "Comprehension Check".
2. Satu-satunya "feedback" adalah **forced repeat-after-me** (ucapkan ulang kalimat koreksi sebelum lanjut, blocking) — ini mekanisme **"Repeat After Me"** yang sama persis yang dipinjam dari modul Grammar kompetitor ([grammar_analysis.md](grammar_analysis.md) §1.1), pola reuse template lintas modul yang sudah dikonfirmasi.
3. **Tidak ada pemeriksaan pemahaman (comprehension) yang terpisah dari kebenaran ucapan.** Prompt hanya mengoreksi "kalau jawabanku salah" lalu memaksa repeat — tidak pernah memverifikasi *apakah user menangkap maksud, detail, atau implikasi monolog*; tidak ada konfirmasi pemahaman kosakata; tidak ada penilaian tingkat comprehension.

Padahal modul "Listening" inti tujuannya adalah **apakah user paham isi audio/teks** — bukan apakah user bisa mengucapkan ulang kalimat yang benar. Inilah cacat desain terbesar kompetitor di modul ini, sekaligus peluang diferensiasi terbesar kita: PRD §4.5 kita **sudah memutuskan** Feedback 5 Langkah yang berpusat pada comprehension (Comprehension Check → Koreksi berbasis monolog → Vocabulary Comprehension → Analisa Tingkat Pemahaman → Saran Peningkatan), bukan drill ucapan.

### 1.4 Catatan Konvergensi PRD: Spesifikasi Panjang Monolog Identik dengan Kompetitor

Spesifikasi panjang cerita kompetitor — **4–8 kalimat untuk A1–B1, 8–15 kalimat untuk B2–C2** — **identik kata-per-kata** dengan spesifikasi yang sudah tertulis di [prd_user.md](../prd_user.md) §4.5 langkah 2. Kemungkinan PRD kita sudah ter-anchor ke heuristik ini sebelumnya (lewat referensi yang sama saat menyusun PRD). Ini disebutkan **secara jujur** — bukan untuk menyalahkannya sebagai "harus diubah", karena ini heuristik *graded listening text length* yang masuk akal secara pedagogis: teks lebih panjang & padat informasi menuntut working memory & decoding lebih besar (Field — beban kognitif rapid speech; lihat §4).

**Rekomendasi (bukan perubahan mekanisme — mekanisme range kalimat tetap):** range kalimat dipertahankan persis seperti PRD, **tapi** kita tambahkan **dasar word-count/durasi/speech-rate per level yang dikutip dari riset CEFR** sebagai panduan internal penulisan monolog (lihat §3.3). Tujuannya supaya diferensiasi panjang & kepadatan monolog kita **punya dasar riset sendiri yang dikutip**, bukan sekadar "kebetulan sama dengan kompetitor". Word-count/durasi ini dipakai oleh penulis materi & sebagai hint di `{LEVEL_HINT}` template (§6), bukan menggantikan instruksi "4–8 / 8–15 kalimat" yang sudah diputuskan PRD.

### 1.5 Audit URL-Safety Kompetitor (RULE 1 & 2)

Dihitung dari prompt A1 verbatim kompetitor (Day 2 — Meeting Someone New), metode sama dengan [speaking_analysis.md](speaking_analysis.md) §1.5 & [grammar_analysis.md](grammar_analysis.md) §1.5 (`len()` untuk raw chars, `urllib.parse.quote()` untuk URL-encoded chars). Angka di bawah **sudah diverifikasi ulang dengan Python** (bukan disalin):

| Metrik | Hasil kompetitor | Batas RULE 1/2 | Status |
|---|---|---|---|
| Raw chars | **1.820** | < 3.200 | ✅ AMAN |
| URL chars (aktual, `urllib.parse.quote`) | **2.498** | < 4.500 | ✅ AMAN |
| Estimasi formula `30 + raw×1.42` | **~2.614** | < 4.500 | ✅ konsisten dgn aktual (selisih +116; estimasi sedikit tinggi karena em dash `—` UTF-8) |
| Blank lines internal | **0** | 0 | ✅ |
| Separator `---` | **0** (hanya em dash `—` sebagai tanda baca) | 0 | ✅ |

**Catatan jujur:** sama seperti temuan Grammar (3.036 URL) & Speaking (2.260 URL), prompt Listening kompetitor juga **lolos** RULE 1/2 dengan margin besar (2.498 URL, jauh di bawah 4.500) — bahkan ini prompt terpadat-pendek dari ketiga modul karena monolog di-generate runtime (tidak embedded di URL). Masalah kompetitor **sama sekali bukan** soal URL safety — masalahnya **kekosongan diferensiasi level** (§1.2) dan **feedback yang bukan comprehension** (§1.3). Pelajaran untuk kita: karena monolog tidak masuk URL (ChatGPT yang generate), kita punya **budget karakter sangat besar** untuk menambahkan Feedback 5 Langkah PRD + tabel vocab + persona Kak Ara tanpa mendekati batas — lihat perhitungan aktual template kita di §6.3.

### 1.6 Strategi Diferensiasi Inggrisin Yuk (Listening)

Dibangun di atas mekanisme yang **sudah diputuskan** di prd_user.md §4.5 (tidak menambah langkah yang bertentangan dengan PRD):

| Differentiator | Kompetitor | Inggrisin Yuk Listening |
|---|---|---|
| Diferensiasi per CEFR | Struktur prompt identik kata-per-kata di 6 level; level cuma label | 6 kurikulum ter-riset, non-overlapping (§5) + kompleksitas monolog & feedback ber-progresi per level (§3) |
| Fokus modul | Speaking ("BAGIAN B — SPEAKING CHALLENGE") | **Comprehension** — apakah user paham isi/maksud/kosakata monolog (PRD §4.5) |
| Struktur feedback | 1 mekanisme: forced repeat-after-me (blocking) | **5 Langkah**: Comprehension Check → Koreksi berbasis monolog → Vocabulary Comprehension → Analisa Tingkat Pemahaman → Saran Peningkatan |
| Sumber jawaban koreksi | "berdasarkan isi cerita" (tanpa kutipan eksplisit) | Koreksi **mengutip kalimat sumber di monolog** secara eksplisit (Langkah 1️⃣ & 2️⃣) |
| Cek pemahaman kosakata | Tidak ada (cuma tabel vocab di awal) | Langkah 3️⃣ Vocabulary Comprehension — konfirmasi vocab kunci yang muncul di jawaban user |
| Penilaian comprehension ke user | Tidak ada | Langkah 4️⃣ Analisa Tingkat Pemahaman (sangat baik/cukup/perlu latihan ulang) + Day 31 test ber-Score |
| Strategi menyimak (metakognitif) | Tidak ada | Langkah 5️⃣ Saran Peningkatan — tips menyimak berbasis riset metacognitive listening (§4) |
| Diagnosis akar masalah listening | Tidak ada — semua kegagalan diperlakukan homogen ("jawaban salah") | **3 Tipe Miss** (Goh 2000 + Anderson 1995): Miss Dengar (Perception — gagal decode bunyi/connected speech), Miss Rangkai (Parsing — gagal rangkai jadi makna dalam working memory), Miss Makna (Utilization — gagal tangkap inferensi/implikasi). Tag disisipkan di Langkah 2️⃣ + strategi remediation berbeda per tipe di Langkah 5️⃣ (§2.3, §6.1) |
| Drill ucapan blocking | Wajib (repeat-after-me di tiap jawaban) | **Tidak ada** — fokus Listening = pemahaman, jawaban salah → koreksi berbasis monolog → ulangi pertanyaan (bukan ucap ulang kalimat) |
| Persona | Bro Arule, gender binary, klaim hak cipta | Kak Ara, sapaan fleksibel dari profil, tanpa klaim eksklusivitas |
| Trigger | "I'm ready to practice" | **"Let's start speaking!"** (konsisten lintas modul) |
| Bahasa feedback per level | Statis (Indonesia di semua level) | Progresif A1→C2, diadaptasi dari prd_user.md §5.5 (§3) |

> Yang **tidak** diimpor dari modul lain: Box of Words/Writing Challenge/5W+1H/Frasa Siap Pakai (milik Vocab), Repeat After Me wajib-blocking (milik Grammar §4.3), Feedback 6 Langkah Speaking. Listening punya Feedback 5 Langkahnya sendiri yang **berpusat pada pemahaman**, bukan produksi ucapan.

---

## 📐 2. STRUKTUR MATERI LISTENING PER SESI

Mengikuti skeleton dokumentasi yang sama dengan [speaking_analysis.md](speaking_analysis.md) §2 & [grammar_analysis.md](grammar_analysis.md) §2, diisi mekanisme Listening dari prd_user.md §4.5.

### 2.1 Komponen Setiap Day

**1. Detail Monolog/Cerita**
Setiap day = 1 monolog/cerita Inggris bertema spesifik (misal: Day 1 A1 — My Morning Routine Story). Panjang **4–8 kalimat (A1–B1), 8–15 kalimat (B2–C2)** — sesuai prd_user.md §4.5 langkah 2. Kalimat jelas, alur runtut, kosakata & kompleksitas sesuai level (§3.3). Monolog **di-generate ChatGPT saat runtime** sesuai instruksi prompt + topik — tidak embedded di URL (hemat karakter, lihat §6.3).

**2. Detail Tabel Vocabulary**
Di bawah monolog, tabel 2 kolom: **Kosakata penting + phonetic UK dalam `/ /`** | **Arti Indonesia**. Kosakata diambil dari kata-kata kunci yang benar-benar muncul di monolog (bukan daftar generik). Phonetic UK mengikuti house style Kak Ara (prd_user.md §5.4).

**3. Detail Comprehension Questions**
**5–8 pertanyaan pemahaman** soal isi monolog, **campur gist & detail** (pola Cambridge Listening, §4) — disiapkan di akhir Langkah 1 tapi **belum ditampilkan**, baru muncul satu per satu setelah trigger. Tiap pertanyaan: Bahasa Inggris + terjemahan Indonesia di bawahnya (prd_user.md §4.5 langkah 5). Pertanyaan dirancang **tidak bisa dijawab tanpa benar-benar menyimak monolog** (bukan pertanyaan opini bebas).

**4. Detail Feedback (5 Langkah)**
Otomatis setelah user menjawab tiap comprehension question (lihat tabel metodologi §2.3, persis prd_user.md §4.5 tabel "Struktur Analisis & Feedback — Listening"):
1. **Comprehension Check** — benar/salah + **kutip kalimat monolog** yang jadi sumber jawaban.
2. **Koreksi & Penjelasan** — kalau salah: kutip bagian monolog relevan + jelaskan kenapa jawaban kurang tepat + **tag tipe miss** (Miss Dengar / Miss Rangkai / Miss Makna — Goh 2000), lalu **ulangi pertanyaan yang sama**.
3. **Vocabulary Comprehension** — konfirmasi pemahaman kosakata kunci monolog yang muncul di jawaban user. Day 2+: **Vocab Refresh** (tanya 1 kosakata relevan dari sesi sebelumnya).
4. **Analisa Tingkat Pemahaman** — sangat baik / cukup / perlu latihan ulang + **rekap tipe miss dominan sesi ini**.
5. **Saran Peningkatan** — tips strategi menyimak **sesuai tipe miss dominan** + kosakata yang perlu dihapal.

**5. Detail Feedback (gaya bahasa)**
Bahasa feedback mengikuti progresi CEFR (§3). Pujian konkret hanya di akhir sesi, tulus, tidak berlebihan (prd_user.md §5.4). **Tidak ada** blocking repeat-after-me — jawaban salah dikoreksi berbasis monolog lalu pertanyaan diulang (fokus pemahaman, bukan ucapan).

**6. Detail Practice (Mode Suara)**
Dipicu user aktifkan mode suara 🎙️ lalu bilang **"Let's start speaking!"**. AI ajukan comprehension question satu per satu. Tiap jawaban → Feedback 5 Langkah lengkap sebelum pindah pertanyaan. Jawaban salah → koreksi berbasis monolog → ulangi pertanyaan yang sama sampai paham.

**7. PROMPT siap pakai**
Prompt lengkap siap di-encode ke URL ChatGPT, mengikuti Template Master Listening (§6) dengan variabel terisi nilai asli. Variabel `{SAPAAN}`/`{PANGGILAN}` auto-fill dari profil user.

### 2.2 Alur Sesi (User Flow)

```
User klik topik Listening di dashboard (misal: Day 10 — A Meal I Will Never Forget)
         ↓
Halaman detail topik terbuka — deskripsi singkat + tombol "Mulai Belajar"
         ↓
User klik "Mulai Belajar" → ChatGPT terbuka dengan prompt sudah terisi
         ↓
Kak Ara langsung (tanpa sapaan pembuka) tampilkan:
MONOLOG Inggris (4-8 kalimat A1-B1 / 8-15 kalimat B2-C2)
+ TABEL VOCABULARY (kosakata + phonetic UK | arti Indonesia)
+ siapkan 5-8 comprehension question (disimpan, belum ditampilkan)
         ↓
User membaca/menyimak monolog & tabel vocab, siap latihan
         ↓
User aktifkan mode suara ChatGPT 🎙️, lalu bilang: "Let's start speaking!"
         ↓
Kak Ara ajukan PERTANYAAN 1 (Inggris + terjemahan Indonesia)
         ↓
User jawab (lisan, ditranskrip ke Inggris oleh ChatGPT)
         ↓
Kak Ara jalankan FEEDBACK 5 LANGKAH:
(Comprehension Check [kutip kalimat sumber] → Koreksi & Penjelasan →
 Vocabulary Comprehension → Analisa Tingkat Pemahaman → Saran Peningkatan)
         ↓
Jika jawaban SALAH:
 - Kak Ara kutip bagian monolog yang relevan + jelaskan
 - Ulangi PERTANYAAN YANG SAMA sampai user paham (bukan ucap ulang kalimat)
         ↓
Lanjut ke PERTANYAAN 2 → ulangi siklus → ... → PERTANYAAN 5-8
         ↓
Selesai → Kak Ara beri pujian singkat di akhir sesi (tulus, tidak berlebihan)
         ↓
User kembali ke app → topik otomatis tertandai ✓ (progress +1)
```

### 2.3 Tabel Metodologi Feedback 5 Langkah (Listening)

Dasar riset **khusus listening pedagogy** (bukan riset speaking/fluency yang dipakai di [speaking_analysis.md](speaking_analysis.md)) — diverifikasi via web research (§4):

| # | Langkah | Aturan Konten | Dasar Riset/Rationale (listening-specific) |
|---|---|---|---|
| 1️⃣ | Comprehension Check | Benar/salah jawaban + **kutip kalimat monolog** yang jadi sumber jawaban. Jawaban benar: tandai ✅ + kalimat sumbernya. | **Text-based comprehension verification** — menunjuk balik ke teks sumber memaksa user menghubungkan jawaban ke *evidence* di input, bukan menebak dari pengetahuan luar. Selaras pendekatan **process-based listening** (Field) yang menolak "comprehension question tanpa balik ke teks" sebagai pengujian buta. |
| 2️⃣ | Koreksi & Penjelasan | Jawaban salah → kutip bagian monolog relevan + jelaskan **kenapa** jawaban kurang tepat → **tag tipe miss**: **[Miss Dengar]** = gagal decode bunyi/kata (connected speech: elision, assimilation, weak forms — Field); **[Miss Rangkai]** = gagal rangkai jadi makna dalam working memory (parsing phase); **[Miss Makna]** = gagal tangkap inferensi/implikasi (utilization phase) → **ulangi pertanyaan yang sama**. | **3-fase taksonomi** (Goh 2000, ERIC EJ601557; berbasis Anderson 1995 cognitive model): kegagalan L2 berakar di Perception (decode bunyi), Parsing (rangkai makna), atau Utilization (inferensi) — ketiganya punya remediation berbeda. Tag tipe miss memberi diagnosis lebih tepat dari sekadar "jawaban salah". **Bottom-up decoding** (Field): connected speech (elision/assimilation/weak forms) adalah penyebab terbanyak Miss Dengar — instruksi eksplisit 6 minggu terbukti meningkatkan skor dictation EFL (eajournals.org). Mengulang pertanyaan = *second listening pass*, selaras praktik Cambridge "recording played twice". |
| 3️⃣ | Vocabulary Comprehension | Konfirmasi pemahaman kosakata kunci monolog yang muncul di jawaban user: tepat / belum + arti singkat. **Day 2+ (B2-C2), Day 3+ (B1), Day 6+ (A1-A2): Vocab Refresh** — tanya 1 kosakata relevan dari sesi sebelumnya ("masih ingat artinya?") untuk memperkuat retensi. | **Lexical segmentation & automaticity** (Field) — pengenalan kosakata lisan otomatis adalah fondasi comprehension; mengecek vocab kunci memastikan kegagalan bukan karena kata kunci tak dikenali. **Spaced retrieval / Vocab Refresh**: memanggil kembali kosakata dari sesi sebelumnya meningkatkan retensi jangka panjang (prinsip spaced repetition), selaras pola Vocab Refresh di modul Vocabulary (prd_user.md §5.6). Frekuensi refresh semakin cepat di level atas karena beban kosakata meningkat. |
| 4️⃣ | Analisa Tingkat Pemahaman | Sangat baik / cukup / perlu latihan ulang + saran + **rekap tipe miss dominan sesi** (tipe miss mana yang paling sering muncul dari jawaban sebelumnya — memberi user gambaran spesifik area kelemahan menyimaknya). C2: reframe ke "mempertahankan Mastery" (selaras pola C2 di [grammar_analysis.md](grammar_analysis.md) §3.2 & prd_user.md §5.6). | **CEFR action-oriented self-positioning** (Companion Volume) — memberi user titik referensi konkret di skala comprehension, bukan sekadar "betul/salah". Rekap tipe miss = **monitoring/evaluation** eksplisit dari siklus metakognitif (Goh 2000 + Vandergrift & Goh): user belajar mengenali pola kelemahan menyimaknya sendiri, dasar strategi yang dipersonalisasi di Langkah 5️⃣. |
| 5️⃣ | Saran Peningkatan | 1–2 tips menyimak **sesuai tipe miss dominan sesi**: **Miss Dengar** → latihan connected speech/dictation (fokus elision, assimilation, weak forms — Field + eajournals.org); **Miss Rangkai** → dengar ulang monolog, fokus chunking & boundary kata; **Miss Makna** → strategi prediksi konteks + inferensi top-down (Vandergrift & Goh). + kosakata yang perlu dihapal. | **Targeted remediation per fase** (Goh 2000) + **metacognitive strategy instruction** (Vandergrift & Goh): instruksi strategi menyimak terbukti menaikkan kepercayaan diri & performa; integrasi **bottom-up + top-down** secara sadar adalah inti pengajaran listening efektif. Remediation per tipe: Miss Dengar → instruksi connected speech 6 minggu terbukti meningkatkan dictation EFL (eajournals.org); Miss Rangkai → chunking & replay; Miss Makna → planning/prediction + selective attention (metacognitive planning phase — Vandergrift & Goh). |

> **Perbedaan disengaja dari Speaking §2.3 & Grammar §2.3:** Listening **tidak** punya Repeat After Me wajib-blocking (Grammar §4.3) dan **tidak** punya Tabel Perbandingan/Catatan Pelafalan (Speaking §4.4) — karena fokusnya **pemahaman input**, bukan produksi output. Koreksi selalu **mengutip balik ke monolog** (Langkah 1️⃣–2️⃣), differentiator inti yang tidak dimiliki kompetitor (§1.3). Jumlah langkah **5** sudah final di prd_user.md §4.5 — jangan diubah jadi 6/8.

---

## 🎯 3. EVOLUSI BAHASA & KEDALAMAN PER LEVEL (A1→C2)

Prinsip diadaptasi dari prd_user.md §5.5 (kebijakan bahasa progresif) & §5.6 (audit evolusi per langkah): **struktur 5 langkah Feedback tetap konstan di semua level** (ritual prosedural yang user kenali sejak A1) — yang berubah secara sengaja adalah **bahasa pengantar, kedalaman penjelasan, kompleksitas monolog, dan fokus tiap langkah**. Scaffolding (Bahasa Indonesia) di-*fade* bertahap (Vygotsky ZPD), sama dengan prinsip [grammar_analysis.md](grammar_analysis.md) §3 & [speaking_analysis.md](speaking_analysis.md) §3.

### 3.1 Kebijakan Bahasa per Level (diadaptasi dari prd_user.md §5.5, untuk konteks Listening)

| Level | Bahasa feedback & penjelasan | Bahasa monolog | Terjemahan | Porsi Indonesia (estimasi, mengikuti §5.5) |
|---|---|---|---|---|
| **A1** | Full Indonesia | English (sederhana, A1) | Semua comprehension question + kalimat monolog yang dikutip disertai terjemahan | ~90% |
| **A2** | Indonesia dominan, kutipan monolog dalam English | English (A2) | Comprehension question + kosakata kunci disertai terjemahan | ~75% |
| **B1** | Indonesia dominan untuk penjelasan, istilah strategi menyimak (*gist*, *key words*, *prediction*) makin sering English | English (B1) | Comprehension question tetap terjemahan lengkap (user wajib paham sebelum bisa jawab — sama prinsip prd_user.md §5.5 B1); kutipan monolog & Saran Peningkatan mulai tanpa terjemahan kalimat-per-kalimat | ~60% |
| **B2** | English mulai dominan | English (B2, mulai padat) | Hanya jika risiko miskonsepsi (mis. idiom/inference yang sulit dijelaskan tanpa L1) | ~25% |
| **C1** | Full English | English (C1, abstrak/kompleks) | Tidak ada | ~5% (istilah sangat teknis saja) |
| **C2** | Full English (gaya native, feedback singkat) | English (C2, native speed implied, idiomatik) | Tidak ada | 0% |

### 3.2 Evolusi Tiap Langkah Feedback Listening (A1 → C2)

| Langkah | A1–A2 | B1 | B2 | C1 | C2 |
|---|---|---|---|---|---|
| 1️⃣ Comprehension Check | Benar/salah + kutip kalimat sumber sederhana; fokus **detail eksplisit** ("Apa yang dia minum pertama?") | Mulai cek **gist + detail** (ide utama paragraf) | Cek **inference dasar** (maksud tersirat sederhana) selain detail | Cek **implikasi & sikap pembicara** (attitude/opinion) — mengutip kalimat sumber + nada | Cek **finer points of detail & sociocultural implication** (CEFR C2); slip pemahaman sangat halus |
| 2️⃣ Koreksi & Penjelasan | Kutip kalimat sumber, jelaskan kontrastif L1 (sering salah dengar word boundary dari kebiasaan Indonesia) | Sama, mulai tunjuk **connected speech** (kata yang menyatu saat diucap) | Jelaskan kenapa **inference** meleset (clue mana yang terlewat) | Jelaskan kenapa **implikasi/idiom** meleset, full English | Koreksi langka — 1 catatan tajam soal nuansa/ironi yang terlewat |
| 3️⃣ Vocabulary Comprehension | Kosakata konkret sehari-hari + arti Indonesia | Kosakata + collocation dasar | Idiom & phrasal verb yang muncul di monolog | Idiom/colloquialism (CEFR C1 "wide range of idiomatic expressions") | Slang & idiomatic usage tingkat native (CEFR C2 "considerable slang & idiomatic usage") |
| 4️⃣ Analisa Tingkat Pemahaman | Encouraging, fokus "berani nyimak & nangkep ide pokok"; tips naik A2 | Sama, mulai sebut sub-skill (gist vs detail) | Fokus pemahaman argumen & inference, English | Fokus pemahaman wacana abstrak/kompleks bertopik di luar bidang user | Reframe: tips **mempertahankan** Mastery (C2 = tertinggi; selaras prd_user.md §5.6) |
| 5️⃣ Saran Peningkatan | Strategi sangat dasar: prediksi dari judul, fokus kata kunci, dengar 2×; kosakata wajib hapal | + strategi *selective attention* (fokus info yang ditanya) | + strategi *monitoring* (sadar saat kehilangan alur, recovery) | + strategi *inferencing* dari konteks & antisipasi struktur wacana | + strategi menangkap *implied meaning/register/irony*; minimal scaffolding, near-native |

> **Catatan konsistensi dengan modul lain:** struktur 5 langkah ini **tidak berubah** — sama dengan prinsip "ritual konstan, kedalaman yang berubah" di prd_user.md §5.6, [grammar_analysis.md](grammar_analysis.md) §3, [speaking_analysis.md](speaking_analysis.md) §3. Listening **tidak** menambahkan sub-langkah Self-Check Pertama ala Vocab C1/C2 (prd_user.md §5.6) karena PRD §4.5 tidak menyebutkan mekanisme itu untuk Listening — kalau product owner ingin menambahkannya (mis. "tebak dulu jawabanmu sebelum aku cek"), itu harus diajukan sebagai rekomendasi terbuka terpisah (§8), **bukan** diimpor diam-diam ke mekanisme yang sudah diputuskan.

> **Distribusi tipe miss dominan per level (Goh 2000, Anderson 1995):** Ini bukan klaim absolut, tapi panduan remediation yang realistis berdasarkan profil learner per level: **A1–A2** didominasi **Miss Dengar** (Perception) — vocabulary kecil + exposure minim → banyak kata tidak dikenali saat diucap natural; connected speech (elision: "gonna", "wanna", "dunno"; assimilation: "good night" → "goodnigh"; weak forms: "and" → /ən/) menjadi hambatan utama bahkan di teks yang sudah "slowly articulated". **B1** = campuran **Miss Dengar + Miss Rangkai** (Parsing) — kosakata makin dikenali tapi kalimat lebih panjang membebani working memory; ide utama sering tertangkap tapi detail hilang. **B2+** semakin didominasi **Miss Makna** (Utilization) — decoding cukup lancar, tapi tangkapan argumen tersirat, implikasi, dan sikap pembicara yang meleset. **C1–C2** = Miss Makna pada lapisan tertinggi (nuansa register, ironi, hidden bias, sociocultural implication). Distribusi ini **menentukan strategi yang dipilih** di Langkah 5️⃣ dan laju Vocab Refresh di Langkah 3️⃣.

### 3.3 Evolusi Kompleksitas Monolog per Level (dasar word-count/durasi dari riset, §1.4 & §4)

Range **kalimat** mengikuti prd_user.md §4.5 (4–8 A1–B1 / 8–15 B2–C2, tidak diubah). Tabel di bawah menambahkan **dasar word-count/durasi/speech-rate per level** dari deskriptor CEFR (kecepatan: A1–A2 "slowly & clearly articulated" → B1 "clear standard" → B2 "standard live/broadcast" → C1 "natural speed" → C2 "fast natural speed") sebagai panduan internal penulisan & isi `{LEVEL_HINT}` (§6) — **bukan** angka yang ditampilkan ke user.

| Level | Kalimat (PRD) | Estimasi kata (panduan internal) | Kecepatan implied (CEFR CV) | Kepadatan informasi & inference |
|---|---|---|---|---|
| **A1** | 4–8 | ~40–80 kata | Sangat lambat, artikulasi jelas, jeda panjang | 1 ide per kalimat, eksplisit, kosakata frekuensi tinggi, urutan kronologis |
| **A2** | 4–8 | ~60–110 kata | Lambat & jelas | Detail konkret, penghubung dasar (and/then/because), masih eksplisit |
| **B1** | 4–8 | ~90–140 kata | Standar jelas (clear standard) | Ide utama + detail pendukung, sedikit inference ringan, topik familiar |
| **B2** | 8–15 | ~150–230 kata | Standar (live/broadcast), familiar & unfamiliar | Argumen/sebab-akibat, inference sedang, topik mulai abstrak |
| **C1** | 8–15 | ~200–300 kata | Natural speed | Wacana abstrak/kompleks, idiom, sikap implisit, topik di luar bidang user |
| **C2** | 8–15 | ~250–350 kata | Fast natural speed | Padat, idiomatik/slang, ironi/nuansa budaya, finer shades of meaning |

> **Catatan kejujuran:** word-count & durasi di atas adalah **operasionalisasi terjustifikasi** dari deskriptor kualitatif CEFR (yang menyebut kecepatan & jenis teks, bukan angka kata pasti) — dipakai sebagai panduan penulisan, bukan klaim ada standar word-count resmi CEFR per level. Speech-rate label ("slowly articulated" → "fast natural speed") **dikutip langsung** dari deskriptor Overall Oral Comprehension CEFR Companion Volume (§4). Ini menjawab §1.4: diferensiasi panjang/kepadatan monolog kita punya dasar riset sendiri, bukan sekadar mewarisi heuristik kompetitor.

---

## 📚 4. METODOLOGI RISET CEFR LISTENING

Kurikulum A2–C2 di §5 & evolusi §3 **tidak** ditebak — di-grounding ke sumber otoritatif yang **benar-benar diverifikasi lewat web research** (fetch/search nyata, bukan memori model). Tabel sumber, alasan otoritas, dan cara dipakai:

| Sumber | Apa & kenapa otoritatif | URL (diverifikasi via WebSearch/WebFetch) | Cara dipakai |
|---|---|---|---|
| **Council of Europe — CEFR Companion Volume (2020), skala oral comprehension** | Dokumen resmi yang memperluas deskriptor CEFR 2001, memuat skala **Overall Oral Comprehension, Understanding Conversation Between Other People, Listening as a Member of a Live Audience, Listening to Announcements & Instructions, Listening to Audio Media & Recordings** per level A1–C2. Sumber paling otoritatif untuk "comprehension lisan apa yang realistis di level X" + progresi kecepatan bicara. | PDF resmi Council of Europe: https://rm.coe.int/common-european-framework-of-reference-for-languages-learning-teaching/16809ea0d4 ; extract terkurasi (NILE-ELT 2024): https://learning.nile-elt.com/d2l/common/viewFile.d2lfile/Content/638466143371536548/SELECTED%20SCALES%20FROM%20COMMON%20EUROPEAN%20FRAMEWORK%20OF%20REFERENCE%20COMPANION%20VOLUME_NILE2024.pdf | Dasar §3.3 (kecepatan per level) & §5 (jenis monolog per level); deskriptor C1/C2 ("extended discourse on abstract topics", "fast natural speed") |
| **cefrlevels.com — CEFR Listening Descriptors (ringkasan per level)** | Ringkasan can-do listening per level A1–C2 yang konsisten dengan deskriptor Companion Volume; berguna sebagai daftar kerja yang sudah dipetakan. Diverifikasi langsung via WebFetch. | https://cefrlevels.com/descriptors/listening/ | Cross-check progresi kecepatan & jenis konten: A1 "very slow, carefully articulated, long pauses" → B1 "clear standard language" → C1 "natural speed, idiomatic" → C2 "fast natural speed, slang" |
| **Cambridge English — B1 Preliminary Listening (format resmi)** | Halaman format resmi Cambridge (diverifikasi via WebFetch): Listening 4 part, 25 soal — Part 1 *key information* (gist visual), Part 2 *gist*, Part 3 *gap-fill detail*, Part 4 *detailed meaning + attitudes/opinions*. Anchor independen untuk **jenis skill yang diuji per level** (gist → detail → inference/attitude). | https://www.cambridgeenglish.org/exams-and-tests/qualifications/preliminary/format/ | Dasar desain **comprehension question campur gist+detail** (§2.1) & evolusi fokus pertanyaan per level (§3.2): detail eksplisit di A1–A2 → gist+detail B1 → inference/attitude B2–C1 |
| **Pearson — Global Scale of English (GSE) Learning Objectives, Listening** | GSE memetakan skala granular (10–90) dengan can-do statements per skill termasuk Listening; cross-check granular independen dari CEFR/Cambridge. | https://www.pearson.com/content/dam/one-dot-com/one-dot-com/pearson-languages/en-gb/pdfs/gse/gse-resources/gse-learning-objectives-adult-general-english.pdf ; overview: https://www.pearson.com/content/dam/one-dot-com/one-dot-com/pearson-languages/en-gb/pdfs/gse/gse-resources/gse-learning-objectives-overview.pdf | Cross-check granularitas progresi listening can-do (gist, detail, inference) untuk validasi §5 |
| **Vandergrift & Goh — *Teaching and Learning Second Language Listening: Metacognition in Action* (2012/2022)** | Kerangka **metacognitive listening strategy instruction** (planning–monitoring–evaluation); menunjukkan instruksi strategi menyimak menaikkan kepercayaan diri & performa, dan listening efektif memadukan **bottom-up + top-down**. | https://www.routledge.com/Teaching-and-Learning-Second-Language-Listening-Metacognition-in-Action/Goh-Vandergrift/p/book/9780367254254 ; ringkasan terverifikasi: https://www.researchgate.net/publication/352294895_Teaching_and_Learning_Second_Language_Listening_Metacognition_in_Action | Dasar Langkah 5️⃣ Saran Peningkatan (§2.3) & evolusi strategi per level (§3.2: prediction → selective attention → monitoring → inferencing) |
| **John Field — *Listening in the Language Classroom* (2008)** | Pendekatan **process-based / bottom-up decoding**: kegagalan listening L2 sering berakar di decoding (phoneme, word boundary, connected speech, automaticity), bukan logika; mengkritik "comprehension question buta" tanpa balik ke teks. | Cambridge Core: https://www.cambridge.org/core/books/listening-in-the-language-classroom/2119E4D62387E5A3B43B0A95E0BBAABE ; arsip: https://archive.org/details/listeninginlangu0000fiel | Dasar Langkah 1️⃣–2️⃣ (kutip kalimat sumber = balik ke teks) & Langkah 3️⃣ (vocab/automaticity); diagnosis decoding di §2.3 & §3.2 |
| **J.C. Richards — listening taxonomy (micro-skills, top-down/bottom-up)** | Taksonomi micro-skill listening & pembedaan top-down vs bottom-up processing — referensi klasik desain tugas listening berjenjang. | https://www.academia.edu/352870/teaching_listening_and_speaking_by_J_Richards | Cross-reference pembagian skill (gist/top-down vs detail/bottom-up) yang dipetakan ke fokus pertanyaan per level (§3.2) |
| **Goh (2000) — "A Cognitive Perspective on Language Learners' Listening Comprehension Problems"** | Penelitian foundational berbasis Anderson (1995) cognitive model: memetakan **10 masalah listening** ke 3 fase — Perception (5 masalah: tidak mengenali kata yang diketahui, tidak mengelompokkan kata, input terlupakan sebelum diproses, gagal mengenali bunyi, kehilangan fokus), Parsing (3: tidak bisa membentuk citra mental, gagal menyimpan chunk di memori), Utilization (2: tidak bisa mengaktifkan pengetahuan latar, gagal inferensi). Dasar taksonomi **3 Tipe Miss** kita (Miss Dengar→Perception, Miss Rangkai→Parsing, Miss Makna→Utilization). | ERIC EJ601557: https://eric.ed.gov/?id=EJ601557 (verified 200) | Dasar tag tipe miss di Langkah 2️⃣ (§2.3 & §6.1), distribusi tipe miss per level (§3.2 catatan), strategi remediation per tipe di Langkah 5️⃣ |
| **Penelitian intervensi connected speech** | Instruksi eksplisit fitur connected speech (elision, assimilation, weak forms, linking) selama 6 minggu meningkatkan skor dictation EFL secara signifikan — bukti empiris bahwa Miss Dengar (Perception/Goh) paling sering berakar di ketidakmampuan mengenali ucapan natural. Remediation spesifik: latihan dictation + connected speech awareness, bukan sekadar vocabulary drilling. | eajournals.org PDF: https://www.eajournals.org/wp-content/uploads/Aspects-of-connected-speech.pdf (verified 200) | Dasar strategi Miss Dengar di Langkah 5️⃣ + klaim "Miss Dengar dominan di A1–A2" di §3.2 + remediation konkret di §2.3 |

**Catatan kejujuran sumber:** CEFR Companion Volume, cefrlevels, Cambridge, dan GSE **konvergen kuat** untuk progresi *kecepatan* & *jenis comprehension* A1–B2: A1–A2 = comprehension teks lambat/jelas tentang kebutuhan konkret & rutinitas → B1 = info faktual sehari-hari dalam *clear standard language* + ide pokok percakapan → B2 = teks standar live/broadcast topik familiar & unfamiliar, argumen kompleks. Untuk **C1–C2**, deskriptor CEFR makin berfokus ke **kualitas pemahaman** (extended/abstract discourse, idiom/colloquialism, *fast natural speed*, *finer shades of meaning*, slang & sociocultural implication) ketimbang *jenis monolog baru* yang belum disentuh. Ini paralel temuan C2 di [grammar_analysis.md](grammar_analysis.md) §4 & [speaking_analysis.md](speaking_analysis.md) §4 — untuk Listening C2, kurikulum §5.6 **sengaja** memuat lebih banyak monolog bertema padat/idiomatik/nuansa budaya & native speed daripada "topik fungsional baru", diberi label jujur sebagai ekstrapolasi lebih tinggi di §5.7. Riset SLA listening (Vandergrift & Goh, Field, Richards) dipakai untuk **metodologi feedback & strategi**, bukan untuk memilih topik — topik di-anchor ke CEFR/Cambridge/GSE.

---

## 📋 5. KURIKULUM 30 TOPIK LISTENING PER LEVEL

Aturan: A1 = **verbatim** keputusan PRD (prd_user.md §4.5, tidak diubah). A2–C2 = 150 monolog/cerita **BARU**, **non-overlapping** (tiap level menaikkan kompleksitas teks, kecepatan implied, dan tuntutan inference — bukan mengulang tema A1). Tiap topik = **nama monolog/situasi** + rationale 1 baris dgn rujukan framework. Tiap level: Day 1–30 + Day 31 Placement Test (§5.8). Progresi jenis comprehension (detail eksplisit → gist → inference → implikasi/sikap → nuansa/ironi) dipetakan ke deskriptor Oral Comprehension CEFR Companion Volume + jenis skill yang diuji Cambridge Listening per level (§4).

### 5.1 LEVEL A1 (Beginner) — SUDAH DIPUTUSKAN, TIDAK DIUBAH

Daftar ini **verbatim** dari prd_user.md §4.5. Validasi CEFR di bawah tabel.

**Day 1–21 — Core A1:**

| Day | Topik (Monolog) | Day | Topik (Monolog) |
|---|---|---|---|
| 1 | My Morning Routine Story | 12 | My Next Plan or Goal |
| 2 | How I Spent My Weekend | 13 | A Time I Felt Sick |
| 3 | A Person I Admire | 14 | A Problem I Solved on My Own |
| 4 | My Favorite Place in My City | 15 | My Most Memorable Trip |
| 5 | A Simple Memory From School | 16 | The Best Gift I Ever Received |
| 6 | My Daily Life at Home | 17 | A Funny or Embarrassing Moment |
| 7 | A Short Story About a Pet | 18 | A Challenge I Faced |
| 8 | My First Day at Work or School | 19 | A Hobby That I Love |
| 9 | A Time I Got Lost in a New Place | 20 | A Friend Who Helped Me |
| 10 | A Meal I Will Never Forget | 21 | A Special Event I Attended |
| 11 | Unexpected Things That Happened | | |

> 🌉 **Jembatan ke A2 (Day 22–30):** Monolog-monolog berikut menggunakan kosakata dan struktur yang lebih kompleks dari A1 murni — refleksi personal, cerita sukses, manajemen stres, dan ambisi. Menuntut tingkat pemahaman yang lebih dalam dengan kausalitas dan refleksi yang lebih menonjol; secara CEFR, ini criterial A2 Oral Comprehension.

**Day 22–30 — A1→A2 Bridge:**

| Day | Topik (Monolog) | Day | Topik (Monolog) |
|---|---|---|---|
| 22 | A Day That Changed My Life | 27 | How I Deal With Stress or Pressure |
| 23 | My Personal Success Story | 28 | Meeting Someone New |
| 24 | What I Learned From a Mistake | 29 | A Dream or Ambition That I Have |
| 25 | How I Organize My Day | 30 | A Lesson from a Past Story |
| 26 | A Project I Completed | | |

**Validasi CEFR (Day 1–21 = Core A1):** CEFR Companion Volume Overall Oral Comprehension A1 mendeskripsikan kemampuan memahami teks **sangat lambat & jelas, dengan jeda**, tentang **informasi konkret pada topik familiar** (rutinitas, deskripsi orang/tempat, kebutuhan sehari-hari). Monolog Day 1–21 (rutinitas pagi, akhir pekan, orang yang dikagumi, tempat favorit, kenangan sekolah, kehidupan rumah, cerita hewan peliharaan, hari pertama kerja/sekolah, tersesat, makanan tak terlupakan, kejadian tak terduga, rencana, sakit, masalah yang dipecahkan, perjalanan, hadiah, momen lucu, tantangan, hobi, teman penolong, acara spesial) **konvergen** dengan can-do A1 ini — semua narasi personal-konkret berurutan kronologis. **Day 22–30 secara sadar jembatan A1→A2** (PRD melabelinya demikian, 🌉): refleksi diri, cerita sukses, manajemen stres, ambisi — menuntut kosakata & struktur lebih kompleks (kausalitas, refleksi), sebenarnya **criterial A2** menurut Oral Comprehension A2. **Implikasi penting:** karena A1 Day 22–30 sudah "mencuri" beberapa tema refleksi A2, kurikulum A2 di §5.2 **harus** membangun di atasnya (konteks transaksional & faktual baru + teks lebih padat), **bukan** mengulang.

### 5.2 LEVEL A2 (Elementary) — RISET BARU, NON-OVERLAPPING

Rationale grup: A2 (≈KET) = comprehension teks **lambat & jelas** tentang **kebutuhan konkret & rutinitas yang lebih variatif** + **info faktual sederhana** (pengumuman, instruksi, deskripsi tempat/orang lebih panjang). CEFR CV A2 Oral Comprehension menekankan "enough to meet needs of a concrete type, provided people articulate clearly and slowly" + "follow simple instructions & straightforward announcements". A2 kita memperluas konteks input di luar narasi personal A1 ke **situasi faktual/transaksional** yang didengar sehari-hari. **Sengaja menghindari** argumen/inference kompleks (itu B2+).

| Day | Topik (Monolog) | Rationale (1 baris) |
|---|---|---|
| 1 | A Voicemail From a Friend | Pesan suara sederhana — input faktual baru di luar narasi personal (A2 announcements). |
| 2 | Directions to the Nearest Station | Instruksi arah multi-langkah — "follow simple instructions" (A2 CV). |
| 3 | A Short Weather Forecast | Pengumuman faktual ringkas (A2 announcements/recordings). |
| 4 | A Shopping List Explained | Deskripsi kebutuhan konkret + kuantitas (A2 concrete needs). |
| 5 | Ordering at a Restaurant (overheard) | Memahami transaksi yang didengar (A2 transactions). |
| 6 | A Description of My Daily Job | Deskripsi rutinitas kerja lebih panjang dari A1 (A2 sustained description). |
| 7 | A Simple Phone Conversation | Memahami percakapan telepon dasar (A2 spoken interaction comprehension). |
| 8 | An Announcement at the Airport | Pengumuman publik standar (A2 announcements). |
| 9 | A Friend Describing Their Hometown | Deskripsi tempat lebih kaya (A2 describing). |
| 10 | Instructions for a Simple Recipe | Instruksi proses berurutan (A2 instructions). |
| 11 | A Story About a Shopping Trip | Narasi kejadian konkret (A2 describing experience). |
| 12 | A Description of a Family Member | Deskripsi orang dengan detail (A2 sustained description). |
| 13 | A Conversation About Weekend Plans | Memahami rencana yang didengar (A2 future arrangements). |
| 14 | A Short Talk About a Hobby | Monolog hobi dengan alasan (A2 describing). |
| 15 | A Message About a Changed Appointment | Info perubahan jadwal (A2 transactions/announcements). |
| 16 | A Description of Public Transport | Info transportasi & rute (A2 getting around). |
| 17 | A Story About a Lost Item | Narasi masalah sederhana (A2 survival situations). |
| 18 | A Talk About Healthy Habits | Info faktual ringan dengan saran (A2 describing). |
| 19 | A Conversation at a Hotel Check-in | Transaksi reservasi yang didengar (A2 transactions). |
| 20 | A Description of a Local Festival | Deskripsi acara dengan urutan (A2 describing event). |
| 21 | A Short News Item (very simple) | Memahami berita sangat sederhana (A2 simple recordings). |
| 22 | A Friend Talking About Their Studies | Deskripsi studi/aktivitas (A2 personal topics). |
| 23 | Instructions for Using a Machine | Instruksi operasional sederhana (A2 instructions). |
| 24 | A Story About a Past Holiday | Narasi liburan lampau (A2 describing experience). |
| 25 | A Conversation About Food Preferences | Memahami suka/tidak suka + alasan (A2 attitudes). |
| 26 | A Talk About the Four Seasons | Deskripsi faktual umum (A2 describing). |
| 27 | A Message Inviting You to a Party | Memahami ajakan & detail (A2 socialising). |
| 28 | A Description of Someone's Morning | Rutinitas orang lain (perluasan A1 Day 1, A2). |
| 29 | A Short Talk About Saving Money | Info praktis dengan tips dasar (A2 describing). |
| 30 | A Mixed Listening Review (combining A2 contexts) | Konsolidasi konteks A2 sebelum Placement Test. |

> **Non-overlap check A2:** A1 = **narasi personal** lambat & sangat eksplisit; A2 = **input faktual/transaksional/instruksional yang didengar** (voicemail, pengumuman, instruksi, percakapan telepon, berita sangat sederhana) + deskripsi lebih panjang. Jenis teks **baru** yang tidak ada di A1: pengumuman publik, instruksi multi-langkah, pesan/voicemail, percakapan yang di-overhear, berita ringkas. Tema yang tampak mirip A1 (rutinitas, hobi, liburan) di A2 hadir sebagai **teks lebih panjang & padat** (lihat word-count §3.3) dengan penghubung dasar, bukan narasi 1-ide-per-kalimat A1.

### 5.3 LEVEL B1 (Intermediate) — RISET BARU, NON-OVERLAPPING

Rationale grup: B1 (≈PET) = memahami **info faktual sehari-hari/job-related dalam *clear standard language*** + **ide pokok percakapan & monolog** pada topik familiar + sebagian topik minat (berita, cerita, pengalaman). CEFR CV B1 menekankan "straightforward factual information... in clear standard language", "main points... when delivery is relatively slow and clear". Cambridge B1 menguji **gist + detail + sedikit attitude** (Part 2 gist, Part 3 detail, Part 4 attitude). Inilah level di mana listening menangani teks terhubung yang lebih panjang.

| Day | Topik (Monolog) | Rationale (1 baris) |
|---|---|---|
| 1 | A Podcast About a Daily Habit | Monolog ide-pokok bertopik familiar (B1 main points). |
| 2 | An Interview About Someone's Career | Memahami gist + detail wawancara (B1 Cambridge Part 4). |
| 3 | A Travel Vlog Narration | Narasi pengalaman terhubung (B1 describing experience). |
| 4 | A Radio Segment on Local Events | Info faktual standar (B1 clear standard language). |
| 5 | A Friend Explaining a Problem | Memahami masalah + solusi yang diceritakan (B1 main points). |
| 6 | A Short Talk on Healthy Eating | Monolog informatif dengan saran (B1 factual). |
| 7 | A Story About Overcoming a Fear | Narasi reflektif dengan perasaan (B1 narration). |
| 8 | An Announcement About a Schedule Change | Info detail yang harus ditangkap akurat (B1 detail). |
| 9 | A Conversation About Weekend Activities | Percakapan everyday yang diikuti (B1 follow conversation). |
| 10 | A Description of a Job Interview | Narasi pengalaman job-related (B1 job-related). |
| 11 | A Talk About a Hobby in Detail | Monolog minat dengan detail proses (B1 topics of interest). |
| 12 | A News Report on Weather Warnings | Berita standar dengan instruksi (B1 recordings). |
| 13 | A Recommendation About a Movie | Memahami opini + alasan (B1 attitude dasar). |
| 14 | A Story About a Cultural Experience | Narasi budaya dengan refleksi (B1 description). |
| 15 | An Explanation of How Something Works | Penjelasan proses (B1 explaining/main points). |
| 16 | A Conversation About Making Plans | Negosiasi rencana yang didengar (B1 interaction). |
| 17 | A Talk About Saving for a Goal | Monolog dengan tujuan & langkah (B1 factual). |
| 18 | A Short Documentary Clip | Memahami main points dokumenter (B1 recordings). |
| 19 | A Friend Describing a Life Change | Narasi perubahan dulu→sekarang (B1 narration). |
| 20 | An Instruction for a DIY Project | Instruksi multi-langkah lebih kompleks (B1 detail). |
| 21 | A Phone Call About a Complaint | Memahami keluhan + tuntutan (B1 transactions). |
| 22 | A Talk About a Memorable Trip | Narasi kaya dengan latar (B1 sustained narration). |
| 23 | An Interview About Studying Abroad | Gist + detail topik minat (B1 interview). |
| 24 | A Discussion About a Common Rule | Memahami opini terhadap aturan (B1 attitude). |
| 25 | A Story About a Skill Learned | Narasi proses belajar (B1 describing experience). |
| 26 | A Report on a Community Project | Info faktual dengan beberapa angka/detail (B1 detail). |
| 27 | A Talk About Managing Time | Monolog tips terorganisir (B1 main points). |
| 28 | A Conversation About a Disagreement | Memahami dua sudut pandang sederhana (B1 follow conversation). |
| 29 | A Voicemail With Detailed Instructions | Menangkap beberapa detail dari satu pesan (B1 detail). |
| 30 | A Mixed Comprehension Review (gist + detail) | Konsolidasi gist & detail B1 sebelum Placement Test. |

> **Non-overlap check B1:** A2 = teks faktual **pendek, lambat, sangat eksplisit**; B1 = teks **terhubung lebih panjang dalam *clear standard language*** + **ide pokok + detail + attitude dasar**. Jenis teks **baru**: podcast, wawancara, vlog/narasi panjang, dokumenter pendek, berita standar, diskusi dua sudut pandang. Pertanyaan B1 mulai menuntut **gist** (ide pokok keseluruhan) selain detail eksplisit — beda dari A2 yang hampir selalu detail literal. Belum ada inference kompleks/argumen berlapis (itu B2).

### 5.4 LEVEL B2 (Upper-Intermediate) — RISET BARU, NON-OVERLAPPING

Rationale grup: B2 (≈FCE) = memahami **teks standar (live/broadcast) topik familiar & *unfamiliar*** + **mengikuti garis argumen kompleks** + **inference & sikap pembicara**. CEFR CV B2 menekankan "follow complex lines of argument, provided the topic is reasonably familiar", "standard language... on both familiar and unfamiliar topics". Monolog 8–15 kalimat (§3.3). Bahasa feedback mulai English-dominant (§3.1).

| Day | Topik (Monolog) | Rationale (1 baris) |
|---|---|---|
| 1 | A TED-Style Talk on Productivity | Argumen terstruktur klaim+bukti (B2 complex argument). |
| 2 | A Debate Excerpt on Remote Work | Dua sisi argumen yang harus dipilah (B2 argument). |
| 3 | A News Analysis on the Economy | Teks broadcast topik agak abstrak (B2 unfamiliar topics). |
| 4 | A Lecture Intro on Psychology | Wacana akademik ringan (B2 academic listening). |
| 5 | An Interview With an Entrepreneur | Inference sikap & motif pembicara (B2 inference). |
| 6 | A Documentary on Climate Change | Mengikuti sebab-akibat berlapis (B2 cause/effect). |
| 7 | A Panel Discussion on Education | Beberapa pembicara, sudut pandang berbeda (B2 follow speakers). |
| 8 | A Podcast Debating Social Media | Argumen pro-kontra mendalam (B2 argument depth). |
| 9 | A Talk on the Future of Work | Spekulasi/prediksi beralasan (B2 speculation). |
| 10 | A Report on a Scientific Discovery | Info teknis dengan penjelasan (B2 detail + inference). |
| 11 | An Opinion Piece on Technology | Opini bergradasi, bukan biner (B2 nuanced opinion). |
| 12 | A Conversation About a Misunderstanding | Inference niat & emosi tersirat (B2 implied meaning). |
| 13 | A Talk on Cultural Differences | Wacana reflektif lintas budaya (B2 abstract). |
| 14 | A Critique of a Popular Trend | Evaluasi kritis dengan kriteria (B2 evaluation). |
| 15 | A Storytelling Podcast With Twists | Narasi dengan antisipasi & penekanan (B2 sustained narration). |
| 16 | A Discussion on Work-Life Balance | Argumen dengan kompromi (B2 negotiation comprehension). |
| 17 | A News Feature on Urban Living | Teks broadcast topik unfamiliar (B2). |
| 18 | A Talk on Effective Communication | Penjelasan dengan contoh & nuansa (B2 explaining). |
| 19 | An Interview About Career Change | Inference penyesalan/aspirasi (B2 attitude). |
| 20 | A Debate on Environmental Policy | Argumen kebijakan dengan bukti (B2 argument). |
| 21 | A Lecture on Behavioral Economics | Konsep abstrak dengan ilustrasi (B2 academic). |
| 22 | A Podcast Summarizing Different Views | Melaporkan & merangkum sudut pandang (B2 reported discourse). |
| 23 | A Talk on Decision-Making | Penjelasan proses kognitif (B2 explaining clearly). |
| 24 | A Discussion on Generational Gaps | Perbandingan reflektif (B2 abstract/cultural). |
| 25 | A Report on Workplace Challenges | Refleksi profesional terstruktur (B2). |
| 26 | A Feature on Future Predictions | Prediksi dengan derajat kepastian (B2 speculation). |
| 27 | A Constructive Feedback Roleplay (audio) | Memahami kritik membangun + nada (B2 diplomacy). |
| 28 | A Talk on Cross-Cultural Etiquette | Nuansa budaya implisit (B2 cultural inference). |
| 29 | A Group Discussion Being Led | Mengikuti alur diskusi yang dipandu (B2 interaction management). |
| 30 | A Mixed Argument-Comprehension Review | Konsolidasi argumen + inference B2 sebelum Placement Test. |

> **Non-overlap check B2:** B1 = ide pokok + detail teks *clear standard*; B2 = **argumen kompleks, topik unfamiliar/abstrak, inference & sikap pembicara, beberapa pembicara**. Jenis teks **baru**: TED-style talk, debat, lecture, panel discussion, news analysis/feature, critique. Pertanyaan B2 menuntut **inference** (maksud tersirat, sebab-akibat, sikap) — beda dari B1 yang gist+detail. Topik abstrak/unfamiliar (ekonomi, psikologi, kebijakan) **baru di B2** (B1 masih topik familiar/minat). Native-speed listening murni & idiom padat **diperdalam di C1–C2**.

### 5.5 LEVEL C1 (Advanced) — RISET BARU, NON-OVERLAPPING

Rationale grup: C1 (≈CAE) = memahami **wacana panjang abstrak & kompleks di luar bidang sendiri**, **pada kecepatan natural**, mengenali **idiomatic expressions & colloquialisms**, mengikuti **interaksi kompleks antar pihak ketiga**. CEFR CV C1 menekankan "follow extended discourse on abstract and complex topics... at natural speed", "recognise a wide range of idiomatic expressions and colloquialisms". C1 = kontrol penuh atas input panjang & kompleks meski di luar minat user.

| Day | Topik (Monolog) | Rationale (1 baris) |
|---|---|---|
| 1 | An Academic Lecture on Linguistics | Wacana spesialis di luar bidang user (C1 extended abstract). |
| 2 | A Philosophy Podcast on Ethics | Argumen abstrak tingkat tinggi (C1 abstract discourse). |
| 3 | A Fast-Paced News Roundtable | Beberapa pembicara, natural speed (C1 third-party interaction). |
| 4 | A Talk Full of Idiomatic Expressions | Mengenali idiom & colloquialism (C1 explicit descriptor). |
| 5 | A Documentary on Geopolitics | Wacana kompleks topik unfamiliar (C1). |
| 6 | A Debate With Subtle Rhetoric | Menangkap retorika & sindiran halus (C1 inference tinggi). |
| 7 | A Conference Q&A Session | Pertanyaan menyimpang + jawaban spontan (C1). |
| 8 | A Lecture on Behavioral Science | Konsep teknis dengan istilah (C1 specialised). |
| 9 | A Panel on Media and Society | Sudut pandang berlapis (C1 follow complex interaction). |
| 10 | A Podcast With Heavy Colloquialisms | Bahasa percakapan native (C1 colloquialisms). |
| 11 | A Talk on Abstract Art Criticism | Wacana evaluatif abstrak (C1). |
| 12 | A Discussion on Scientific Controversy | Argumen ilmiah pro-kontra (C1). |
| 13 | An Interview With Indirect Answers | Inference maksud tersirat (C1 implied). |
| 14 | A Lecture on Economic Theory | Kausalitas berlapis + implikasi (C1 in-depth). |
| 15 | A Storytelling Set With Cultural Nuance | Anekdot dengan timing & nuansa (C1 narration craft). |
| 16 | A Heated Debate at Natural Speed | Argumen cepat di bawah tekanan (C1 fluency comprehension). |
| 17 | A Synthesis Talk on Multiple Studies | Mengikuti sintesis beberapa sumber (C1 mediation comprehension). |
| 18 | A Talk on a Sensitive Social Issue | Isu sensitif dengan ketaktisan tersirat (C1 register). |
| 19 | A Monologue Expressing Mixed Emotions | Sikap ambivalen/implisit (C1 nuanced attitude). |
| 20 | A Lecture With Hedged Claims | Mengenali pelunakan/derajat keyakinan (C1 hedging). |
| 21 | A Documentary With Complex Timelines | Mengikuti urutan & flashback (C1 discourse structure). |
| 22 | A Comparative Analysis Talk | Perbandingan konsep abstrak (C1). |
| 23 | A Discussion Being Steered by a Host | Mengikuti arah diskusi yang dikelola (C1 interaction management). |
| 24 | A Critique Delivered Diplomatically | Kritik tajam namun halus (C1 evaluation + register). |
| 25 | A Professional Briefing at Speed | Wacana profesional spontan natural speed (C1). |
| 26 | A Talk With Conditional Reservations | Keberatan bersyarat tersirat (C1). |
| 27 | A Persuasive Speech to Skeptics | Persuasi ke audiens menolak (C1 advanced rhetoric). |
| 28 | A Conversation With Interruptions | Mengikuti argumen melalui interupsi (C1 interaction). |
| 29 | A Talk on Cross-Cultural Nuance | Nuansa budaya tingkat reflektif tinggi (C1). |
| 30 | A Mixed Advanced-Comprehension Review | Konsolidasi wacana abstrak + idiom C1 sebelum Placement Test. |

> **Non-overlap check C1:** B2 = argumen kompleks topik *reasonably familiar*; C1 = **wacana panjang abstrak di luar bidang user, natural speed, idiom/colloquialism, interaksi kompleks antar pihak ketiga**. Jenis teks **baru**: academic lecture spesialis, philosophy podcast, fast roundtable, talk idiomatik penuh, Q&A konferensi, sintesis multi-sumber. Kecepatan naik dari "standar" (B2) ke "natural speed" (C1, §3.3). Mengenali idiom & sindiran halus **baru jadi fokus** di C1. Yang masih **bukan** C1: *fast native speed* + slang berat + ironi/sociocultural implication penuh (itu C2).

### 5.6 LEVEL C2 (Mastery) — RISET + EKSTRAPOLASI TERJUSTIFIKASI

Rationale grup: Deskriptor CEFR menyatakan **C2 ≠ jenis comprehension fungsional baru** — C2 = **memahami virtually any spoken language pada *fast natural speed*, termasuk slang & idiomatic usage berat, finer points of detail, dan sociocultural implications**. CEFR CV C2 menekankan "understand with ease virtually any kind of language... at fast natural speed", "identify finer points of detail including attitudes and implied relationships", film "with considerable degree of slang and idiomatic usage". Karena itu C2 kita berfokus pada **kualitas pemahaman & jenis input tersulit** (kecepatan native, idiom/slang padat, ironi, aksen, implikasi budaya) atas comprehension yang sudah dikuasai — **bukan** 30 jenis listening baru. Ekstrapolasi sah dari prinsip "C2 = mastery/precision", konsisten reframe C2 prd_user.md §5.6 & paralel [grammar_analysis.md](grammar_analysis.md) §5.6 + [speaking_analysis.md](speaking_analysis.md) §5.6.

| Day | Topik (Monolog) | Rationale (1 baris) |
|---|---|---|
| 1 | A Native Conversation at Full Speed | Memahami fast natural speed (C2 explicit descriptor). |
| 2 | A Stand-Up Comedy Set | Menangkap humor, timing & punchline (C2 pragmatic). |
| 3 | A Talk Loaded With Idioms & Slang | Slang & idiomatic usage berat (C2 film descriptor). |
| 4 | A Satirical News Monologue | Mengenali ironi & sarkasme (C2 implied meaning). |
| 5 | A Debate With Rapid Crosstalk | Mengikuti tumpang-tindih cepat (C2 fast interaction). |
| 6 | A Speech With Subtle Subtext | Menangkap maksud tersirat (C2 implicature). |
| 7 | A Regional-Accent Storytelling | Memahami meski aksen tak-familiar (C2 any variety). |
| 8 | A High-Stakes Negotiation (audio) | Menangkap nada & strategi tersembunyi (C2). |
| 9 | A Lecture at Native Academic Pace | Wacana spesialis padat cepat (C2 precision). |
| 10 | A Conversation Full of Cultural References | Sociocultural implication (C2 explicit). |
| 11 | A Monologue With Understatement | Menangkap litotes/penekanan halus (C2 stylistic). |
| 12 | A Heated Argument With Interruptions | Mengikuti argumen cepat & emosional (C2). |
| 13 | A Podcast With Inside Jokes | Memahami humor in-group (C2 pragmatic). |
| 14 | A Talk Shifting Register Mid-Way | Mengenali pergeseran register (C2 register). |
| 15 | A Documentary With Dense Narration | Finer points of detail (C2 detail mastery). |
| 16 | A Persuasive Speech With Hidden Bias | Mendeteksi bias & spin tersirat (C2 critical inference). |
| 17 | A Conversation With Ambiguity | Menangani makna ambigu/ganda (C2). |
| 18 | A Specialist Panel at Native Speed | Topik teknis padat cepat (C2). |
| 19 | A Monologue With Emotional Nuance | Sikap bercampur/halus (C2 attitude). |
| 20 | A Multitasking-Ideas Talk | Mengikuti beberapa benang ide paralel (C2). |
| 21 | A Speech Reading Subtle Social Cues | Menangkap isyarat sosial halus (C2 pragmatic). |
| 22 | A Story Told With Native Timing | Ritme & efek native (C2 craft). |
| 23 | A Persuasion via Analogy & Storytelling | Memahami persuasi naratif (C2 rhetorical). |
| 24 | A Conversation Repairing Misunderstanding | Mengikuti perbaikan salah paham mulus (C2). |
| 25 | A Debate on an Ethical Dilemma | Pertimbangan etis berlapis (C2 abstract). |
| 26 | A Casual Chat With Code-Switching | Mengikuti perpindahan gaya/bahasa (C2 social mastery). |
| 27 | A Critique Delivered With Tact | Kritik sangat halus tersirat (C2 diplomacy). |
| 28 | A Native Talk With Varied Pace & Pauses | Memahami prosodi & timing native (C2 delivery). |
| 29 | A Monologue With Subtle Slips | Menangkap nuansa meski ada slip penutur (C2 self-monitoring listener). |
| 30 | A Mixed Mastery-Comprehension Review | Konsolidasi pemahaman native-speed & idiom C2 sebelum Placement Test. |

> **Non-overlap check C2:** C2 **tidak** mengenalkan jenis comprehension fungsional baru — fokus **kualitas & jenis input tersulit**: fast native speed, slang/idiom berat, ironi/humor, aksen tak-familiar, sociocultural implication, finer shades of meaning. Tiap monolog dibingkai sebagai "memahami pada kecepatan/kompleksitas native" atas skill yang sudah ada (debat sudah di C1; di C2 hadir lagi tapi **rapid crosstalk native speed**, Day 5/12). **Catatan kejujuran:** ini lapisan paling ber-ekstrapolasi (§5.7) karena CEFR sendiri mendeskripsikan C2 sebagai kualitas pemahaman (fast native speed, slang, finer detail), bukan inventaris fungsi baru.

### 5.7 Ringkasan Kuantitatif: Riset vs Ekstrapolasi (150 monolog baru A2–C2)

Memakai metode jujur yang sama dengan [grammar_analysis.md](grammar_analysis.md) §5.7 & [speaking_analysis.md](speaking_analysis.md) §5.7: sebuah topik dihitung "dari sumber langsung" jika **jenis teks & tingkat comprehension-nya** muncul eksplisit sebagai deskriptor di **CEFR Companion Volume (Oral Comprehension scales)**, **Cambridge Listening assessment** (KET/PET/FCE/CAE/CPE), atau **Pearson GSE Listening** untuk level itu; dihitung "ekstrapolasi terjustifikasi" jika topik adalah pemecahan/penyusunan ulang, atau item *kualitas pemahaman* (native speed/slang/ironi/finer detail) yang sumbernya deskripsikan sebagai mutu, bukan jenis teks diskret.

| Level | Topik | Mayoritas dari sumber langsung (CEFR CV / Cambridge / GSE) | Ekstrapolasi terjustifikasi |
|---|---|---|---|
| A2 | 30 | ~28 (Oral Comprehension A2 + KET: announcements/instructions/concrete-needs sangat konvergen) | ~2 (pengelompokan/konsolidasi) |
| B1 | 30 | ~28 (PET/CV B1: clear standard, gist+detail konvergen kuat) | ~2 |
| B2 | 30 | ~26 (FCE/CV B2: complex argument, inference, unfamiliar topics kuat) | ~4 (item inference/abstrak di-split B2/C1) |
| C1 | 30 | ~24 (CAE/CV C1: extended abstract, natural speed, idiom/colloquialism kuat; sebagian nuance extrapolated) | ~6 |
| C2 | 30 | ~8 (sumber: "C2 = fast native speed, slang, finer detail — kualitas, bukan jenis teks baru") | ~22 (native speed/slang/ironi/aksen/sociocultural) |
| **Total** | **150** | **~114 (≈76%)** | **~36 (≈24%)** |

**Ringkasan:** ~76% (≈114/150) monolog baru ber-anchor langsung ke deskriptor Oral Comprehension CEFR / Cambridge Listening / GSE; ~24% (≈36/150) adalah ekstrapolasi terjustifikasi — **terkonsentrasi di C2** (22 dari 36), dengan sebagian kecil di C1 (~6, item idiom/nuansa yang sumbernya deskripsikan sebagai mutu pemahaman) dan B2 (~4, item inference/abstrak). Ekstrapolasi C2 **defensibel** karena CEFR Companion Volume sendiri mendeskripsikan C2 Listening sebagai memahami "virtually any kind of language... at fast natural speed" dengan slang & finer detail — yaitu **kualitas pemahaman atas input tersulit**, bukan jenis teks comprehension baru. Memaksakan "30 jenis listening eksklusif C2" justru **mengarang** materi tanpa dasar framework; lebih jujur melabeli C2 sebagai lapisan native-speed/idiom/nuansa dan menandainya transparan di sini (pola identik keputusan C2 di 2 dokumen lain). Ini **judgment call yang perlu dikonfirmasi product owner** sebelum penulisan prompt C2 (§8). Angka ~76/24% sengaja konsisten dengan dua dokumen sibling karena ketiga modul berbagi prinsip C2 yang sama; ini estimasi acuan, bukan hitungan presisi per-item.

### 5.8 Day 31 — Placement Test (Listening) per level

Format baku (prd_user.md §4.5): AI tampilkan **monolog baru** (belum pernah muncul di Day 1–30 level itu) → ajukan **5–8 comprehension question** (campur gist, detail, inference sesuai level) → output **Score** (contoh: "80/100 — Well done!") + **penilaian tingkat comprehension** + **rekomendasi naik level / latihan ulang**. Bisa diulang kapan saja. Catatan implementasi: tiap pertanyaan sebaiknya bisa ditelusuri ke skill yang diuji (gist/detail/inference) supaya rekomendasi spesifik ("perkuat menangkap gist, sering kelewat ide pokok"); skor & rekomendasi **wajib** ditulis ke tabel `module_test_results` (CLAUDE.md §4), bukan hanya state client. Monolog test mengikuti kompleksitas level (§3.3). Trigger sesi tetap **"Let's start speaking!"** agar konsisten lintas modul.

---

## 🛠️ 6. TEMPLATE MASTER PROMPT — LISTENING (SEMUA LEVEL)

Satu template untuk semua day, semua level. Variabel diisi per-day. **Sudah lolos RULE 1–6** prompt_recommendation.md (perhitungan aktual di §6.3). Mekanisme = prd_user.md §4.5 (monolog + tabel vocab + trigger "Let's start speaking!" + comprehension questions + Feedback 5 Langkah). **TIDAK** mengandung BOW/Writing Challenge (Vocab), Repeat After Me wajib-blocking (Grammar §4.3), atau Tabel Perbandingan/Catatan Pelafalan (Speaking §4.4). Monolog **di-generate ChatGPT saat runtime** (tidak embedded) — hemat karakter besar (§1.5).

### 6.1 Template (raw — siap di-encode)

```
Topik: {TOPIC_NAME}
Panggil aku {SAPAAN} {PANGGILAN}.
Level bahasa Inggrisku: {LEVEL} ({LEVEL_NAME}).
Kamu Kak Ara, personal AI Coach kamu, dari Inggrisin Yuk. Tugasmu memutar monolog listening lalu menguji pemahamanku di topik {TOPIC_NAME}, Level {LEVEL} ({LEVEL_NAME}). Fokus: pemahaman isi, maksud, dan kosakata monolog.
Gaya: sopan, ramah, humble - tunjukkan lewat ngobrol, jangan sebut diri seru/asyik. {LANG_RULE} Pakai emoji secukupnya.
LANGKAH 1 - MONOLOG + TABEL VOCAB (otomatis di awal, tanpa sapaan pembuka):
Tampilkan monolog Inggris natural soal {TOPIC_NAME}. Panjang: 4-8 kalimat (A1-B1), 8-15 kalimat (B2-C2). {LEVEL_HINT} Kalimat jelas, alur runtut, kosakata sesuai Level {LEVEL}.
Di bawah monolog, tabel 2 kolom: Kosakata penting + phonetic UK dalam / / | Arti Indonesia.
Lalu siapkan (jangan tampilkan dulu) 5-8 comprehension question soal isi monolog ini, campur gist dan detail.
Di akhir, suruh aku aktifkan mode suara lalu bilang "Let's start speaking!". Jangan tanya "siap?".
LANGKAH 2 - FEEDBACK 5 LANGKAH (otomatis tiap aku jawab satu pertanyaan):
1. Comprehension Check - benar/salah jawabanku + kutip kalimat monolog yang jadi sumber jawaban.
2. Koreksi & Penjelasan - kalau salah: kutip bagian monolog relevan + jelaskan kenapa kurang tepat + tag tipe miss: [Miss Dengar]=gagal decode bunyi/kata, [Miss Rangkai]=gagal rangkai jadi makna, [Miss Makna]=gagal tangkap inferensi. Ulangi pertanyaan yang sama.
3. Vocabulary Comprehension - konfirmasi kosakata kunci yang muncul di jawabanku (tepat/belum) + arti singkat. Day 2+: tanya 1 kosakata relevan dari sesi sebelumnya (Vocab Refresh).
4. Analisa Tingkat Pemahaman - sangat baik / cukup / perlu latihan ulang + rekap tipe miss dominan sesi ini.
5. Saran Peningkatan - strategi per tipe miss: Dengar=connected speech/dictation, Rangkai=dengar ulang+chunking, Makna=prediksi+inferensi top-down. + kosakata yang perlu dihapal.
LANGKAH 3 - MODE PRACTICE (trigger: Let's start speaking!):
Ajukan comprehension question satu per satu, English + terjemahan Indonesia di bawahnya, langsung ke pertanyaan tanpa basa-basi. Tiap jawaban -> jalankan FEEDBACK 5 LANGKAH sebelum pindah pertanyaan. Jawaban salah -> koreksi berbasis monolog lalu ulangi pertanyaan yang sama sampai paham. Pujian singkat hanya di akhir sesi, tulus, tidak berlebihan.
```

> **Catatan disengaja:** trigger = **"Let's start speaking!"** persis (konsisten lintas modul), persona = **Kak Ara** (bukan "Bro Arule"), tanpa klaim hak cipta. Wording original — bukan parafrase sampel kompetitor §1. Feedback **5 langkah** (bukan 6/8). Tidak ada Repeat After Me blocking — koreksi selalu mengutip balik ke monolog (differentiator §1.3).

### 6.2 Variable Fields

| Field | Isi | Contoh (A1 Day 1) |
|---|---|---|
| `{TOPIC_NAME}` | Nama monolog/topik hari itu | `My Morning Routine Story` |
| `{SAPAAN}` / `{PANGGILAN}` | Dari profil user (auto-fill) | `Kak` / `Arif` |
| `{LEVEL}` / `{LEVEL_NAME}` / `{NEXT_LEVEL}` | Kode + nama CEFR | `A1` / `Beginner` / `A2` |
| `{LANG_RULE}` | Instruksi bahasa per level (lihat §3.1) | A1: `Koreksi dan penjelasan dalam Bahasa Indonesia, tiap kalimat Inggris diberi terjemahan.` |
| `{LEVEL_HINT}` | Hint kompleksitas/kecepatan monolog per level (dari §3.3) | A1: `Pakai kosakata frekuensi tinggi, 1 ide per kalimat, kecepatan lambat & jelas.` |

**Variasi `{LANG_RULE}` per level (ringkas, hemat karakter — selaras §3.1):**
- **A1/A2:** `Koreksi dan penjelasan dalam Bahasa Indonesia, tiap kalimat Inggris diberi terjemahan.`
- **B1:** `Penjelasan & feedback dalam Bahasa Indonesia, istilah strategi menyimak pakai English (gist, key words, prediction). Terjemahan hanya untuk comprehension question & kutipan monolog penting.`
- **B2:** `Use English as the main language. Bahasa Indonesia hanya untuk catatan singkat di poin idiom/inference yang berisiko salah paham.`
- **C1/C2:** `All explanations, corrections, and feedback in English only. No Indonesian translation.`

**Variasi `{LEVEL_HINT}` per level (dari §3.3, panduan kompleksitas monolog — TIDAK ditampilkan ke user):**
- **A1:** `Pakai kosakata frekuensi tinggi, 1 ide per kalimat, urutan kronologis, kecepatan lambat & jelas.`
- **A2:** `Detail konkret + penghubung dasar (and/then/because), masih eksplisit, lambat & jelas.`
- **B1:** `Ide utama + detail pendukung, sedikit inference ringan, clear standard language.`
- **B2:** `Argumen/sebab-akibat, inference sedang, topik boleh agak abstrak, kecepatan standar.`
- **C1:** `Wacana abstrak/kompleks, idiom, sikap implisit, natural speed.`
- **C2:** `Padat, idiomatik/slang, ironi/nuansa budaya, fast natural speed.`

> Catatan: berbeda dari Grammar/Vocab, Listening **tidak** menambahkan Self-Check Pertama di C1/C2 — PRD §4.5 tidak menyebutkannya untuk Listening (lihat §3.2 catatan & §8 untuk usulan terpisah jika product owner menginginkannya).

### 6.3 Estimasi Ukuran & Audit RULE 1–6

Dua skenario dihitung dengan Python (`len()` raw + `urllib.parse.quote()` URL), metode sama §1.5 & sibling docs. **Skenario produksi** = template instruksi A1 Day 1 (monolog di-generate ChatGPT runtime, **tidak** embedded — ini yang benar-benar dikirim ke URL). **Skenario seeded worst-case** = jika kita ikut menanam contoh monolog 8 kalimat + isi tabel vocab di dalam prompt (mis. untuk Day yang ingin monolog terkontrol persis). Kedua angka **sudah diverifikasi ulang dengan Python** sebelum dimasukkan ke dokumen.

| Metrik | Produksi (runtime monolog) | Seeded worst-case (monolog 8 kalimat + vocab embedded) | Batas | Status |
|---|---|---|---|---|
| Raw chars (terisi) | **~2.310** *(+182 dari template awal 2.128, setelah 3 Tipe Miss + Vocab Refresh)* | **~2.650** | < 3.200 | ✅ AMAN |
| URL chars (aktual `urllib.parse.quote`) | **~3.190** *(chars `[]`, `=` encode 1→3, sehingga rasio aktual ~1.53 untuk bagian baru)* | **~3.750** | < 4.500 | ✅ AMAN (<4.000 = "sangat aman") |
| Estimasi formula `30 + raw×1.42` | ~3.310 | ~3.793 | < 4.500 | ✅ konsisten (formula sedikit di atas aktual karena mixed encoding ratio) |
| Blank lines internal | 0 | 0 | 0 | ✅ RULE 2 |
| Separator `---` | 0 | 0 | 0 | ✅ RULE 2 |
| Header behavior | 2 baris ringkas | 2 baris | 2 baris | ✅ RULE 3 |
| Instruksi per-langkah | Keyword/format singkat | keyword | keyword | ✅ RULE 4 |
| Emoji di teks prompt | 0 | 0 | 0 | ✅ RULE 5 |
| Differentiator dipertahankan | Persona Kak Ara, monolog+tabel vocab, Feedback 5 Langkah (Comprehension Check kutip sumber, Koreksi+tag 3 Tipe Miss, Vocabulary Comprehension+Vocab Refresh, Analisa Tingkat Pemahaman+rekap tipe miss, Saran Peningkatan per tipe miss), trigger "Let's start speaking!" | sama | — | ✅ RULE 6 |

> **Catatan budget:** Setelah update 3 Tipe Miss + Vocab Refresh, skenario produksi A1 (**~3.190 URL**) masih merupakan yang **paling aman dari ketiga modul** (Grammar 3.881, Speaking 3.545) — karena monolog tidak embedded di URL (ChatGPT yang generate). Skenario seeded worst-case (~3.750 URL) tetap di bawah 4.000 ("sangat aman"). Level B2–C2 **lebih pendek lagi** (`{LANG_RULE}` English ringkas; `{LEVEL_HINT}` C1/C2 pendek; terjemahan ID hilang). **Tetap hitung ulang per day** jika `{TOPIC_NAME}` panjang, tapi margin sangat besar — wajib di-verify (checklist §7.4).

---

## ✅ 7. ATURAN BAKU IMPLEMENTASI — WAJIB SEBELUM MENULIS DAY LISTENING BARU

Checklist tunggal (*single source of truth*) supaya tiap Day Listening (semua level) konsisten. **Baca ini sebelum menulis materi Day baru** — jangan menebak.

### 7.1 Persona & Bahasa (tidak berubah antar Day)
- [ ] Nama AI = **Kak Ara**, personal AI Coach dari Inggrisin Yuk. Tunjukkan personality lewat gaya, jangan sebut diri "seru"/"asyik". Humble (rendah hati, tidak menggurui).
- [ ] Sapaan = `{SAPAAN} {PANGGILAN}` auto-fill dari profil, jangan diketik manual.
- [ ] `{LANG_RULE}` sesuai level (§3.1 / §6.2) — A1/A2 Indonesia, B1 hybrid, B2 English-dominant, C1/C2 full English.
- [ ] `{LEVEL_HINT}` sesuai level (§3.3 / §6.2) — kompleksitas & kecepatan monolog.
- [ ] **JANGAN** tambah Self-Check Pertama (itu Grammar/Vocab C1/C2; PRD §4.5 tidak menyebutkannya untuk Listening — kalau diinginkan, ajukan terpisah, §8).

### 7.2 Mekanisme (sesuai prd_user.md §4.5 — JANGAN ubah)
- [ ] LANGKAH 1 = **monolog Inggris** (4–8 kalimat A1–B1 / 8–15 kalimat B2–C2, tanpa sapaan pembuka) + **tabel vocabulary** (kosakata + phonetic UK `/ /` | arti) + siapkan **5–8 comprehension question** (campur gist & detail, belum ditampilkan).
- [ ] Trigger = **"Let's start speaking!"** (bukan "I'm ready to practice").
- [ ] Feedback = **5 langkah** (§2.3): Comprehension Check (kutip kalimat sumber) → Koreksi & Penjelasan (kutip monolog + ulangi pertanyaan) → Vocabulary Comprehension → Analisa Tingkat Pemahaman → Saran Peningkatan. **Bukan 6 (Speaking), bukan 8 (Vocab).**
- [ ] Langkah 2️⃣: sertakan **tag tipe miss** di setiap koreksi — `[Miss Dengar]` / `[Miss Rangkai]` / `[Miss Makna]` sesuai jenis kegagalan (§2.3 & §3.2 — Goh 2000).
- [ ] Langkah 3️⃣ Day 2+: jalankan **Vocab Refresh** (1 kosakata relevan dari sesi sebelumnya). Frekuensi: Day 2+ (B2-C2), Day 3+ (B1), Day 6+ (A1-A2).
- [ ] Langkah 4️⃣: sertakan **rekap tipe miss dominan** sesi di bagian Analisa Tingkat Pemahaman.
- [ ] Langkah 5️⃣: pilih strategi menyimak **sesuai tipe miss dominan** sesi (Miss Dengar → connected speech/dictation; Miss Rangkai → chunking/replay; Miss Makna → prediksi + inferensi top-down) — §2.3 & §3.2.
- [ ] **TIDAK ADA Repeat After Me wajib-blocking** (Grammar §4.3) — jawaban salah dikoreksi berbasis monolog lalu pertanyaan diulang, fokus pemahaman bukan ucapan.
- [ ] **JANGAN** impor Box of Words / Writing Challenge / 5W+1H (Vocab) atau Tabel Perbandingan / Catatan Pelafalan (Speaking).

### 7.3 Konten Topik
- [ ] Topik diambil dari kurikulum §5 untuk level itu — A1 verbatim PRD, A2–C2 dari §5.2–5.6.
- [ ] Monolog **benar-benar bisa dijawab dari teksnya** (comprehension question tidak bisa dijawab tanpa menyimak monolog — bukan opini bebas).
- [ ] Fokus comprehension sesuai level (§3.2): detail eksplisit A1–A2 → gist+detail B1 → inference B2 → implikasi/sikap C1 → nuansa/ironi C2.
- [ ] Tabel vocab diambil dari kata kunci yang **benar-benar muncul** di monolog, dengan phonetic UK.
- [ ] Non-overlap: cek monolog menaikkan kompleksitas, bukan mengulang tema/kompleksitas level bawah (catatan non-overlap §5.2–5.6).

### 7.4 URL-Safety (RULE 1–6)
- [ ] Tidak ada blank lines internal di string prompt.
- [ ] Tidak ada emoji di teks prompt (AI yang generate emoji di output).
- [ ] Tidak ada separator `---` di dalam prompt.
- [ ] Hitung `url = 30 + raw × 1.42` → harus < 4.500 (idealnya < 4.000); verifikasi aktual dengan `urllib.parse.quote`. (Margin sangat besar karena monolog runtime — §6.3.)
- [ ] Test klik link di browser sebelum deploy.

### 7.5 Tempat Plug-in di Codebase (mengikuti pola Vocab/Speaking yang sudah ada)
- Source per level: `materi/<level>/listening.md` (dokumentasi day-by-day, skeleton 6 sub-bagian seperti §2.1) → lalu `materi/<level>/listening_prompt.md` (versi tuned/padat siap encode).
- Encode sekali → `inggrisinyuk-app/lib/materi/listening-<level>.ts` (array `LISTENING_A1_DAYS` dst, **pola file & helper sama dengan** `lib/materi/vocabulary-a1.ts` & `speaking-<level>.ts` — jangan buat pola baru per modul, lihat CLAUDE.md §5).
- Render-time: helper `buildListeningUrl()` / `buildListeningPrompt()` setara `buildVocabUrl()` (precompute, 2× `.replace()`, tanpa `encodeURIComponent()` saat klik — architecture.md §6.3).
- UI: `inggrisinyuk-app/app/dashboard/[module]/page.tsx` sudah menangani modul lewat param `[module]` — Listening tinggal nambah array day + helper, pola identik dengan Vocabulary/Speaking.
- Progress: saat user klik link ChatGPT, tulis ke `topic_progress` (CLAUDE.md §4 — jangan andalkan `useState`). Skor Day 31 → `module_test_results`.

---

## 🚀 8. NEXT STEPS

Dokumen ini (acuan) membuka pekerjaan lanjutan berikut, dikerjakan **per level** (jangan sekaligus 6 level):

1. **Validasi kurikulum A2–C2** dengan user/product owner — terutama lapisan **C2 (ekstrapolasi tertinggi, §5.7: ~22/30 monolog adalah item native-speed/idiom/slang/ironi/sociocultural, bukan jenis comprehension fungsional baru)** dan sebagian item inference C1/B2. Konfirmasi framing "C2 Listening = kualitas pemahaman input tersulit" sebelum menulis prompt C2.
2. **[Usulan terbuka — butuh konfirmasi product owner] Pujian/encouragement di PRD §4.5.** PRD §4.5 Listening **tidak** menyebut "pujian di akhir sesi" secara eksplisit (beda dari Speaking §4.4 yang eksplisit). Template §6 kita sudah menambahkan "pujian singkat hanya di akhir sesi" agar konsisten persona Kak Ara (prd_user.md §5.4: pujian hanya di akhir). **Rekomendasi:** pertahankan (selaras persona global), tapi karena ini **menambah** ke mekanisme §4.5 yang tidak menyebutkannya, ditandai sebagai usulan kecil yang butuh konfirmasi — **bukan** dieksekusi diam-diam ke spec PRD.
3. **[SUDAH DIIMPLEMENTASI — Juni 2026] Diagnosa 3 Tipe Miss + strategi menyimak berbasis riset di Langkah 2️⃣–5️⃣.** Atas permintaan product owner ("cari referensi di internet untuk tambahan informasi dalam feedback dan koreksi"), riset internet dijalankan (Goh 2000 ERIC EJ601557, connected speech intervention eajournals.org, Field Cambridge Core — semua diverifikasi HTTP 200) dan hasilnya diintegrasikan ke template §6.1 serta tabel metodologi §2.3: **(a)** tag **3 Tipe Miss** (Miss Dengar/Rangkai/Makna — Goh 2000 + Anderson 1995) disisipkan di Langkah 2️⃣ tiap koreksi; **(b)** **Vocab Refresh** Day 2+ di Langkah 3️⃣ (spaced retrieval, frekuensi meningkat per level); **(c)** rekap tipe miss dominan di Langkah 4️⃣; **(d)** strategi menyimak **per tipe miss** di Langkah 5️⃣ (Miss Dengar → connected speech/dictation; Miss Rangkai → chunking; Miss Makna → prediksi/inferensi top-down). Distribusi tipe miss per level didokumentasikan di §3.2. URL aktual setelah update: produksi ~3.190, seeded ~3.750 — tetap sangat aman (§6.3, <4.000). Differentiator §1.6 diperbarui dengan baris "Diagnosis akar masalah listening".
4. **[Usulan terbuka — butuh konfirmasi product owner] Self-Check Listening di C1/C2?** Grammar & Vocab punya Self-Check Pertama di level lanjut (prd_user.md §5.6); Listening PRD §4.5 tidak menyebutkannya. **Rekomendasi: jangan tambahkan** — listening adalah skill reseptif, "tebak dulu sebelum aku cek" kurang relevan dibanding modul produktif; biarkan alur comprehension mengalir. Dicatat hanya untuk transparansi paralel dengan [speaking_analysis.md](speaking_analysis.md) §8.
5. **Tulis `materi/a1/listening.md`** dulu (level paling siap — topik sudah final di PRD) mengikuti skeleton 6 sub-bagian (§2.1) dan ATURAN BAKU (§7). Pakai Template Master §6.
6. **Tuning → `materi/a1/listening_prompt.md`** (versi padat siap encode), lalu encode ke `lib/materi/listening-a1.ts` + helper `buildListeningUrl()`.
7. **Sambungkan ke UI & progress** — tambah Listening ke `app/dashboard/[module]/page.tsx` + tulis `topic_progress` saat klik.
8. **Ulangi A2 → B1 → B2 → C1 → C2** dengan pola yang sama, naikkan `{LANG_RULE}`, `{LEVEL_HINT}`, & fokus comprehension (detail→gist→inference→implikasi→nuansa, §3.2) per level.
9. **Day 31 Placement Test Listening** per level (§5.8) — monolog baru + 5–8 comprehension question dirotasi skill (gist/detail/inference), telusur-balik ke skill untuk rekomendasi spesifik; skor & rekomendasi ditulis ke `module_test_results`.

---

*Dokumen ACUAN — Listening Analysis. Disusun 2026-06-27. Diperbarui 2026-06-27: Feedback 5 Langkah diperkaya dengan Diagnosa 3 Tipe Miss (Goh 2000) + Vocab Refresh + strategi remediation per tipe (§2.3, §3.2, §6.1, §7.2, §8). Mekanisme mengikuti prd_user.md §4.5 (monolog + tabel vocab + Feedback 5 Langkah, tanpa Repeat After Me blocking & tanpa Box of Words); constraint URL mengikuti prompt_recommendation.md RULE 1–6 (template produksi ~3.190 URL chars setelah update); kurikulum A2–C2 ter-riset CEFR Oral Comprehension / Cambridge Listening / GSE + pedagogi listening Vandergrift-Goh/Field/Richards/Goh (§4). A1 verbatim PRD, tidak diubah.*
