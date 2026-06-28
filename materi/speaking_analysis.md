# ANALISIS & ROADMAP MATERI SPEAKING — SEMUA LEVEL (A1–C2)
**Aplikasi:** Inggrisin Yuk | **AI Tutor:** Kak Ara | **Modul:** Speaking (Modul 3)
**Cakupan:** Analisis kompetitor + riset kurikulum CEFR speaking + template master untuk 6 level (A1, A2, B1, B2, C1, C2)
**Status dokumen:** ACUAN (reference) — bukan materi day-by-day final. Dokumen ini dipakai sebagai dasar saat menulis `materi/<level>/speaking.md` dan `materi/<level>/speaking_prompt.md` nanti.

> **Catatan penting sebelum baca:** Dokumen ini **tidak** menulis 180 prompt day-by-day. Yang ada di sini: analisis prompt kompetitor (termasuk audit URL-safety aktual), struktur materi per sesi, evolusi bahasa & kedalaman per level, metodologi riset CEFR speaking (dengan sumber yang benar-benar diverifikasi lewat web research), daftar **nama topik** 30 hari × 6 level (+ rationale 1 baris per topik), dan **satu** Template Master Speaking yang sudah lolos RULE 1–6 di [prompt_recommendation.md](../prompt_recommendation.md). Mekanisme Speaking mengikuti **prd_user.md §4.4** (sudah diputuskan) — 6 langkah Mekanisme Belajar + 8 langkah Struktur Analisis & Feedback. Modul ini **tidak** memakai Repeat After Me wajib/blocking (itu keputusan PRD khusus Grammar §4.3) dan **tidak** memakai Box of Words/Writing Challenge/5W+1H (itu khusus Vocab) — Speaking punya mekanismenya sendiri yang berbeda dari kedua modul itu.

---

## 🔍 1. ANALISIS PROMPT KOMPETITOR (Bro Arule — Kampung Inggris)

### 1.1 Mekanisme Prompt Kompetitor (walkthrough)

Kompetitor ("Bro Arule") memakai pola yang sama dengan modul Grammar mereka: satu URL ChatGPT per level + topik, persona tutor, alur 2 bagian. Berdasarkan 6 prompt verbatim (A1–C2, Day 1 tiap level) yang diberikan:

- **Persona & header behavior** — Nama tutor "Bro Arule dari Kampung Inggris". Sapaan gender-binary ("Bro arif"). Klaim hak cipta eksplisit ("Struktur ini orisinal oleh Bro Arule — dilarang menduplikasi tanpa izin"). Instruksi emoji "cukup dan relevan di setiap bagian" tanpa batasan jumlah.
- **BAGIAN A — Penjelasan Materi** (otomatis di awal): penjelasan speaking mencakup tujuan komunikasi, ekspresi penting, struktur kalimat sering dipakai, contoh singkat. Disertai **3–5 frasa contoh** dalam format dialog 1–2 kalimat. Ditutup instruksi aktifkan mode suara lalu ucapkan **"I'm ready to practice"**.
- **BAGIAN B — Speaking Challenge** (trigger: "I'm ready to practice"): pertanyaan satu per satu (Inggris + terjemahan Indonesia di bawahnya, "tanpa kata-kata lain"). Alur jawaban 4 langkah: (1) terima jawaban, (2) koreksi langsung — tulis kalimat user lalu versi native speaker **tanpa tabel**, (3) minta user ucapkan ulang kalimat koreksi, (4) **blok progresi**: tidak lanjut ke pertanyaan berikutnya sampai user kirim ulang kalimat koreksi.
- **Penutup** — baris `TODAY'S TOPIC: Day N — [topik]`.

### 1.2 Temuan Kritis: Topik Dipasangkan, Bukan Diferensiasi Riil per Level

Membandingkan 6 prompt verbatim: paragraf persona, aturan, BAGIAN A, dan BAGIAN B **identik kata-per-kata** di keenam level. Yang berubah hanya 2 baris: `Level bahasa Inggrisku saat ini: [X]` dan `TODAY'S TOPIC: Day 1 — [topik]`.

Topik Day 1 yang diberikan, dipetakan:

| "Level" kompetitor | TODAY'S TOPIC (Day 1) |
|---|---|
| A1 (Beginner) | Introducing Yourself |
| A2 (Basic) | Introducing Yourself (**sama dengan A1**) |
| B1 (Intermediate) | Sharing a Strong Opinion on a Topic |
| B2 (Upper-Intermediate) | Sharing a Strong Opinion on a Topic (**sama dengan B1**) |
| C1 (Advanced) | Delivering a Formal Structured Debate |
| C2 (Mastery) | Delivering a Formal Structured Debate (**sama dengan C1**) |

**Pola tepatnya: reuse berpasangan** (A1=A2, B1=B2, C1=C2) — **bukan** satu pool tunggal untuk keenam level seperti modul Grammar kompetitor (yang menempelkan topik A1 murni ke semua 6 label). Di sini kompetitor setidaknya mengakui 3 tingkat kompleksitas berbeda (perkenalan diri → opini → debat formal), tapi memecahnya jadi 6 level dengan cara duplikasi mentah, bukan dengan 6 kurikulum yang benar-benar berjenjang. Implikasinya: **tidak ada progresi nyata antara A1↔A2** (keduanya dapat instruksi & topik identik — AI hanya diberi tahu "level A2" dan diharapkan improvisasi kompleksitas sendiri tanpa kontrol konten), dan demikian pula B1↔B2 serta C1↔C2. Padahal jarak kompetensi speaking riil antara A1 dan A2, atau antara B1 dan B2, menurut CEFR Companion Volume (lihat §4) **jelas berbeda** — A2 sudah harus bisa menangani transaksi sederhana & deskripsi rutinitas, bukan cuma perkenalan diri ulang.

**Catatan penting — jangan dilebih-lebihkan:** ini bukan klaim "satu pool untuk semua 6 level" (itu temuan Grammar kompetitor, beda kasus). Temuan Speaking ini adalah **reuse berpasangan** — tetap cacat desain kurikulum, tapi presisi temuannya harus akurat: 3 topik unik didaur ulang jadi 6 slot level, bukan 1 topik untuk 6 level.

Lebih jauh, kompetitor **tidak punya feedback berlapis sama sekali** untuk Speaking — koreksi mereka hanya "tulis kalimatku, lalu versi native speaker, tanpa tabel" (1 lapis). Bandingkan dengan prd_user.md §4.4 yang **sudah memutuskan** 8 lapis feedback Speaking Inggrisin Yuk (Tabel Perbandingan, Catatan Pelafalan dengan phonetic UK, Analisa Kelancaran & Naturalness, Discourse & Coherence Check, Saran Pilihan Kata, Pragmatic Register Check, Analisa Level CEFR, Adaptasi Sesi eksplisit) — ini diferensiasi struktural yang **sudah ada di PRD**, bukan sesuatu yang perlu diusulkan dokumen ini.

### 1.3 Yang Dilakukan Kompetitor dengan Baik (kita pertahankan)

1. **Alur 2 bagian jelas** — penjelasan dulu (+ frasa siap pakai), baru speaking dengan trigger eksplisit. Mencegah AI lompat ke speaking sebelum user siap. **Kita pakai** (selaras prd_user.md §4.4 langkah 1–3).
2. **3–5 frasa contoh siap pakai sebelum sesi speaking** — pola baik, sudah selaras dengan prd_user.md §4.4 langkah 2 ("3–5 frasa contoh siap pakai").
3. **Pertanyaan satu per satu, Inggris + terjemahan** — pola yang sudah jadi standar lintas modul kita juga (prd_user.md §4.4 langkah 4).
4. **Header behavior relatif ringkas** — tidak verbose, mendukung audit URL-safety yang aman (lihat §1.5).

### 1.4 Kelemahan Kompetitor (yang kita perbaiki)

1. **Tidak ada kurikulum speaking yang ter-diferensiasi per CEFR** (temuan §1.2) — kita bangun 6 kurikulum non-overlapping berbasis CEFR Companion Volume + Cambridge + GSE (§5).
2. **Feedback 1 lapis saja** ("kalimatku → versi native, tanpa tabel") — kita punya **8 lapis** sesuai prd_user.md §4.4: Tabel Perbandingan, Catatan Pelafalan (phonetic UK), Analisa Kelancaran & Naturalness, Discourse & Coherence Check, Saran Pilihan Kata, Pragmatic Register Check, Analisa Level CEFR, Adaptasi Sesi.
3. **Zero phonetic/pronunciation notation** — ironis untuk modul Speaking. Kita punya Catatan Pelafalan eksplisit dengan simbol fonetik UK dalam `/ /` (house style, prd_user.md §5.4).
4. **Tidak ada penilaian level CEFR ke user** — kompetitor tidak pernah memberi tahu user di level mana speaking-nya sebenarnya. Kita punya Analisa Level CEFR (langkah 7️⃣) tiap jawaban.
5. **Adaptivitas tidak eksplisit** — tidak ada mekanisme tertulis "kalau lancar lakukan X, kalau macet lakukan Y" di luar drill pengucapan wajib. Kita punya Adaptasi Sesi eksplisit (langkah 8️⃣, sudah diputuskan PRD).
6. **Blocking drill wajib di setiap jawaban** — bisa terasa kaku/melelahkan untuk modul Speaking yang seharusnya mengalir percakapan natural (beda dengan Grammar yang memang butuh drill struktur). PRD §4.4 Speaking **sengaja tidak** mewajibkan repeat-after-me blocking — pelafalan dikoreksi via Catatan Pelafalan (langkah 2️⃣) tanpa memblokir progres pertanyaan.
7. **Trigger formal "I'm ready to practice"** — kita pakai **"Let's start speaking!"** (lebih hangat, konsisten lintas semua modul: Vocab, Grammar, Listening, Speaking — prd_user.md & prompt_recommendation.md).
8. **Persona generik + gender binary + klaim hak cipta** — "Bro/Sist Arule". Kita pakai **Kak Ara**, sapaan fleksibel dari profil user, dan tentu tidak mengklaim hak cipta atas struktur pedagogis umum.

### 1.5 Audit URL-Safety Kompetitor (RULE 1 & 2)

Dihitung dari prompt A1 verbatim kompetitor (Day 1 — Introducing Yourself), dengan metode yang sama seperti grammar_analysis.md §1.5 (`len()` untuk raw chars, `urllib.parse.quote()` untuk URL-encoded chars):

| Metrik | Hasil kompetitor | Batas RULE 1/2 | Status |
|---|---|---|---|
| Raw chars | **1.666** | < 3.200 | ✅ AMAN |
| URL chars (aktual, `urllib.parse.quote`) | **2.260** | < 4.500 | ✅ AMAN |
| Estimasi formula `30 + raw×1.42` | ~2.396 | < 4.500 | ✅ konsisten dgn aktual (selisih kecil karena karakter non-ASCII seperti em dash `—` di prompt mereka butuh lebih banyak byte UTF-8 daripada estimasi linear) |
| Blank lines internal | 0 | 0 | ✅ |
| Separator `---` | 0 | 0 | ✅ |

**Catatan jujur:** sama seperti temuan Grammar di grammar_analysis.md §1.5, prompt Speaking kompetitor juga **lolos** RULE 1/2 dengan margin besar (2.260 URL chars, jauh di bawah 4.500) — bahkan lebih pendek dari prompt Grammar mereka (yang sebesar 3.036 URL chars) karena Speaking kompetitor tidak punya 5 contoh kalimat panjang seperti Grammar. Masalah kompetitor sama sekali **bukan** soal URL safety — masalahnya adalah **kekosongan kurikulum berjenjang** (§1.2) dan **feedback dangkal 1 lapis** (§1.4). Pelajaran untuk kita: karena prompt Speaking secara alami ringkas (tidak ada BOW, tidak ada Writing Challenge), kita punya **budget karakter besar** untuk menambahkan 8 lapis feedback PRD tanpa mendekati batas — lihat perhitungan aktual template kita di §6.3.

### 1.6 Strategi Diferensiasi Inggrisin Yuk (Speaking)

Dibangun di atas mekanisme yang **sudah diputuskan** di prd_user.md §4.4 (tidak menambah langkah yang bertentangan dengan PRD):

| Differentiator | Kompetitor | Inggrisin Yuk Speaking |
|---|---|---|
| Kurikulum CEFR | 3 topik unik didaur ulang ke 6 level (reuse berpasangan) | 6 kurikulum ter-riset, non-overlapping, 30 topik/level (§5) |
| Lapis feedback | 1 lapis (kalimat user → versi native, tanpa tabel) | 8 lapis (Tabel Perbandingan, Catatan Pelafalan, Kelancaran, Discourse & Coherence Check, Pilihan Kata, Pragmatic Register Check, CEFR, Adaptasi) |
| Phonetic notation | Tidak ada | Phonetic UK dalam `/ /` di Catatan Pelafalan |
| Analisa Level CEFR ke user | Tidak ada | Ada (langkah 7️⃣) tiap jawaban + Day 31 test |
| Adaptivitas | Implisit lewat drill wajib saja | Eksplisit: lancar → kompleksitas naik, macet → pattern drill + contoh (langkah 8️⃣) |
| Drill pengucapan | Wajib & blocking di setiap jawaban | Tidak blocking — dikoreksi via Catatan Pelafalan, progres tetap mengalir (selaras keputusan PRD §4.4, beda dari Grammar §4.3) |
| Persona | Bro Arule, gender binary, klaim hak cipta | Kak Ara, sapaan fleksibel dari profil, tanpa klaim eksklusivitas berlebihan |
| Trigger speaking | "I'm ready to practice" | "Let's start speaking!" (konsisten lintas modul) |
| Bahasa feedback per level | Statis (Indonesia di semua level, sesuai sampel yang diberikan) | Progresif A1→C2, diadaptasi dari prd_user.md §5.5 untuk langkah-langkah Speaking (§3) |

> Yang **tidak** diimpor dari modul lain: Box of Words/Writing Challenge/5W+1H/Frasa Siap Pakai sebagai langkah formal (milik Vocab), Repeat After Me wajib-blocking (milik Grammar). Speaking punya mekanismenya sendiri sesuai prd_user.md §4.4 — fokusnya **kelancaran & kealamian lisan dalam konteks situasional**, bukan kosakata atau struktur kalimat tertulis.

---

## 📐 2. STRUKTUR MATERI SPEAKING PER SESI

Mengikuti skeleton dokumentasi yang sama dengan `materi/grammar_analysis.md` §2 (6 sub-bagian per Day), diisi mekanisme Speaking dari prd_user.md §4.4.

### 2.1 Komponen Setiap Day

**1. Detail Materi**
Setiap day = 1 topik/situasi speaking spesifik (misal: Day 1 A1 — Introducing Yourself). Penjelasan singkat: tujuan komunikasi situasi ini, ekspresi penting, pola kalimat yang sering dipakai. Gaya santai, relate, bukan textbook — sejalan dengan persona Kak Ara (prd_user.md §5.4).

**2. Detail Frasa Siap Pakai**
**3–5 frasa contoh siap pakai** untuk topik hari itu, ditampilkan dalam format dialog singkat 1–2 kalimat (prd_user.md §4.4 langkah 2). Ini bagian dari *Mekanisme Belajar* yang sudah diputuskan PRD — bukan langkah feedback, melainkan bekal sebelum sesi speaking dimulai.

**3. Detail Task — 3 Pertanyaan Speaking**
3 pertanyaan yang dirancang **memaksa** penggunaan fungsi komunikatif topik hari itu (misal topik "Giving Opinions" → pertanyaan harus memaksa user menyatakan & mempertahankan opini, bukan sekadar fakta). Tiap pertanyaan: Bahasa Inggris (bold) + terjemahan Indonesia (italic) di bawahnya — diberikan **satu per satu**, bukan sekaligus (prd_user.md §4.4 langkah 4).

**4. Detail Review & Feedback (8 Langkah)**
Otomatis setelah user menjawab tiap pertanyaan speaking (lihat tabel metodologi §2.3, persis prd_user.md §4.4 tabel "Struktur Analisis & Feedback"):
1. **Tabel Perbandingan** — 2 kolom: Kalimat User vs Versi Native Speaker.
2. **Catatan Pelafalan** — koreksi pronunciation kata yang salah + phonetic UK dalam `/ /`.
3. **Analisa Kelancaran & Naturalness** — natural / terlalu kaku / terlalu singkat.
4. **Discourse & Coherence Check** — NEW
5. **Saran Pilihan Kata** — vocab/frasa lebih natural untuk konteks sama.
6. **Pragmatic Register Check** — NEW
7. **Analisa Level CEFR** — penilaian speaking keseluruhan + saran naik level.
8. **Adaptasi Sesi** — lancar → pertanyaan lebih kompleks; macet → pattern drill + contoh → ulangi pertanyaan.

**5. Detail Feedback (gaya bahasa)**
Bahasa feedback mengikuti progresi CEFR (§3). Pujian konkret hanya di akhir sesi, tulus, tidak berlebihan (prd_user.md §5.4). Tidak ada blocking wajib seperti Repeat After Me Grammar — Catatan Pelafalan (langkah 2️⃣) cukup sebagai koreksi pengucapan, sesi tetap mengalir ke pertanyaan berikutnya.

**6. Detail Practice (Speaking Mode)**
Dipicu user aktifkan mode suara 🎙️ lalu bilang **"Let's start speaking!"**. AI ajukan 3 pertanyaan satu per satu. Tiap jawaban → Feedback 8 Langkah lengkap sebelum pindah pertanyaan (tanpa blocking — feedback ditampilkan, sesi lanjut). Adaptif: lancar → tambah kompleksitas pertanyaan lanjutan; macet → Pattern Drill + contoh, lalu ulangi pertanyaan yang sama.

**7. PROMPT siap pakai**
Prompt lengkap siap di-encode ke URL ChatGPT, mengikuti Template Master Speaking (§6) dengan variabel terisi nilai asli. Variabel `{SAPAAN}`/`{PANGGILAN}` auto-fill dari profil user.

### 2.2 Alur Sesi (User Flow)

```
User klik topik Speaking di dashboard (misal: Day 15 — Giving Opinions)
         ↓
Halaman detail topik terbuka — deskripsi singkat + tombol "Mulai Belajar"
         ↓
User klik "Mulai Belajar" → ChatGPT terbuka dengan prompt sudah terisi
         ↓
Kak Ara langsung tampilkan: penjelasan materi speaking ringkas
+ 3-5 Frasa Siap Pakai (format dialog singkat)
+ 3 pertanyaan speaking topik hari itu (disimpan, belum ditampilkan satu-satu)
         ↓
User membaca penjelasan & frasa, siap latihan
         ↓
User aktifkan mode suara ChatGPT 🎙️, lalu bilang: "Let's start speaking!"
         ↓
Kak Ara ajukan PERTANYAAN 1 (Inggris + terjemahan Indonesia)
         ↓
User jawab (lisan, ditranskrip ke Inggris oleh ChatGPT)
         ↓
Kak Ara jalankan FEEDBACK 8 LANGKAH:
(Tabel Perbandingan → Catatan Pelafalan → Analisa Kelancaran & Naturalness →
 Discourse & Coherence Check → Saran Pilihan Kata → Pragmatic Register Check →
 Analisa Level CEFR → Adaptasi Sesi)
         ↓
Adaptasi Sesi menentukan langkah berikutnya:
 - Lancar → Kak Ara tambah 1 pertanyaan lebih kompleks dari topik yang sama
 - Macet → Kak Ara beri Pattern Drill + contoh, lalu ulangi pertanyaan yang sama
         ↓
Lanjut ke PERTANYAAN 2 → ulangi siklus → PERTANYAAN 3
         ↓
Selesai → Kak Ara beri pujian singkat di akhir sesi (tulus, tidak berlebihan)
         ↓
User kembali ke app → topik otomatis tertandai ✓ (progress +1)
```

### 2.3 Tabel Metodologi Feedback 8 Langkah (Speaking)

| # | Langkah | Aturan Konten | Dasar Riset/Rationale |
|---|---|---|---|
| 1️⃣ | Tabel Perbandingan | 2 kolom: Kalimat User \| Versi Native Speaker. Jawaban ≥95% natural: tandai ✅ di kolom Native, tidak perlu rewrite. | **Noticing Hypothesis** (Schmidt) — perbandingan sisi-bersisi membuat gap antara output user dan target lebih mudah disadari daripada penjelasan abstrak. |
| 2️⃣ | Catatan Pelafalan | Kata yang pelafalannya salah/janggal + simbol fonetik UK dalam `/ /` + catatan singkat cara ucap. Tidak ada isu → tulis "—". Fokus berubah per level (§3.3): segmental dulu (vokal/konsonan individual), suprasegmental belakangan (word stress, sentence stress, intonasi, ritme). | **Intelligibility Principle** (Levis, 2005) — fokus pengajaran pelafalan harus diprioritaskan ke fitur yang paling mengganggu keterpahaman, bukan mengejar aksen native sempurna; **segmental-to-suprasegmental progression** (Celce-Murcia, Brinton & Goodwin — *Teaching Pronunciation*) — pemula lebih terbantu oleh koreksi suara individual yang jelas-jelas mengubah makna, level lanjut lebih terbantu oleh ritme/stress/intonasi yang mempengaruhi kealamian & nuansa. |
| 3️⃣ | Analisa Kelancaran & Naturalness | Apakah ekspresi terasa natural / terlalu kaku (translated word-for-word dari Bahasa Indonesia) / terlalu singkat (di bawah kemampuan level user). 1–2 catatan singkat, bukan esai. | **Fluency sebagai automaticity** (Bygate; teknik 4/3/2) — kelancaran berkembang lewat pengulangan & tekanan waktu yang membebaskan resource kognitif dari formulasi ke artikulasi (model produksi ujaran Levelt: conceptualization → formulation → articulation). Kak Ara menilai tahap mana yang masih membebani user (kalau respons sangat lambat/terputus = formulasi belum otomatis). |
| 4️⃣ | Discourse & Coherence Check | Apakah respons user runtut sebagai giliran percakapan? Cek: ada ide utama yang jelas + detail pendukung? Koneksi logis antar kalimat (bukan hanya kalimat yang benar satu per satu)? Jika tidak runtut: tunjuk 1 gap koneksi ide + saran perbaikan 1 kalimat. Jika runtut: tandai ✅. | **Discourse coherence & comprehensibility** (Tsunemoto & Trofimovich 2024, *Studies in Second Language Acquisition*) — coherence (organisasi wacana global) berkorelasi kuat (r = .70) dengan comprehensibility; dinilai secara terpisah dari fluency/accuracy. Jenis teks yang runtut & berstruktur — ada pembuka, isi, penutup — mempermudah lawan bicara memproses respons. |
| 5️⃣ | Saran Pilihan Kata | 1–2 vocab/frasa alternatif yang lebih natural untuk konteks yang sama (lexical upgrade, bukan koreksi kesalahan — kalimat user boleh sudah benar tapi kurang natural). | Selaras prinsip **collocation & lexical chunk awareness** dalam SLA — penutur mahir dikenali bukan dari grammar benar saja, tapi pemilihan frasa yang "terdengar alami" (native-like selection). |
| 6️⃣ | Pragmatic Register Check | Apakah register respons user sesuai konteks percakapan hari ini? Cek: terlalu formal untuk topik santai, atau terlalu kasual untuk konteks yang butuh ketentuanan? Berikan 1 alternatif frasa yang lebih pas register-nya + alasan singkat (1 kalimat). Jika register sudah sesuai: tandai ✅. | **Pragmatic competence** (Bardovi-Harlig & Dörnyei 1998, *TESOL Quarterly* EJ567536) — EFL learners (vs ESL) secara sistematis menganggap kesalahan gramatikal lebih serius dari pelanggaran pragmatik, padahal pragmatic misfires yang menyebabkan perasaan tidak nyaman bagi penutur asli. Instruksi pragmatik eksplisit adalah salah satu intervensi paling berdampak untuk EFL learner — apalagi jika tidak ada immersion environment. |
| 7️⃣ | Analisa Level CEFR | Penilaian speaking user saat ini (boleh granular: "performanya solid di A2, ada elemen B1") + 1 saran konkret untuk naik level. C2: reframe jadi "mempertahankan Mastery" (selaras pola C2 di grammar_analysis.md §3.2 & prd_user.md §5.6). | Selaras **CEFR Companion Volume action-oriented approach** — memberi user titik referensi konkret di mana posisinya dalam skala kompetensi, bukan sekadar "bagus/kurang bagus". |
| 8️⃣ | Adaptasi Sesi | Lancar (jawaban natural, tidak ragu-ragu, sesuai/lebih dari level) → pertanyaan follow-up lebih kompleks dari topik yang sama. Macet (jawaban sangat pendek, banyak ragu, struktur rusak) → Pattern Drill (1–2 contoh kalimat pola sama untuk ditiru) + contoh, lalu ulangi pertanyaan yang sama (bukan blocking — user tetap bisa skip kalau mau). | Selaras **Zone of Proximal Development** (Vygotsky) — tantangan harus disesuaikan real-time supaya tetap di zona "challenging but achievable"; juga selaras prd_user.md §4.4 mekanisme Adaptasi Sesi (poin 6) dan §5.4 baris "Adaptivitas" Kak Ara. |

> **Perbedaan disengaja dari Grammar §2.3 (grammar_analysis.md):** Speaking **tidak** punya Repeat After Me wajib-blocking — koreksi pengucapan terjadi di langkah 2️⃣ (Catatan Pelafalan) tapi tidak memblokir progres ke pertanyaan berikutnya. ini sesuai PRD: Grammar §4.3 eksplisit punya repeat-after-me sebagai mekanisme blocking, Speaking §4.4 eksplisit tidak menyebutkannya — pembedaan ini disengaja karena Speaking mengutamakan **kelancaran percakapan mengalir**, sementara Grammar mengutamakan **akurasi struktur yang harus dikuasai sebelum lanjut**.

---

## 🎯 3. EVOLUSI BAHASA & KEDALAMAN PER LEVEL (A1→C2)

Prinsip diadaptasi dari prd_user.md §5.5 (kebijakan bahasa progresif) & §5.6 (audit evolusi per langkah Vocab): **struktur 8 langkah Feedback tetap konstan di semua level** (ritual prosedural yang user kenali sejak A1) — yang berubah secara sengaja adalah **bahasa pengantar, kedalaman penjelasan, dan fokus tiap langkah**. Scaffolding (Bahasa Indonesia) di-*fade* bertahap (Vygotsky ZPD), bukan dilepas mendadak — sama dengan prinsip yang dipakai grammar_analysis.md §3.

### 3.1 Kebijakan Bahasa per Level (diadaptasi dari prd_user.md §5.5, untuk konteks Speaking)

| Level | Bahasa penjelasan materi & frasa | Bahasa Feedback 8 Langkah | Terjemahan | Porsi Indonesia (estimasi, mengikuti §5.5) |
|---|---|---|---|---|
| **A1** | Indonesia dominan | Full Indonesia | Semua pertanyaan & frasa Inggris disertai terjemahan | ~90% |
| **A2** | Indonesia dominan, contoh dalam English | Indonesia | Pertanyaan speaking + frasa penting disertai terjemahan | ~75% |
| **B1** | Indonesia dominan untuk penjelasan situasi, istilah fungsi komunikatif (*giving opinion*, *making suggestions*) makin sering dalam English | Indonesia, label fungsi komunikatif dalam English | Pertanyaan speaking tetap terjemahan lengkap (user wajib paham sebelum bisa jawab — sama prinsip dengan prd_user.md §5.5 poin B1); Catatan Pelafalan & Saran Pilihan Kata mulai tanpa terjemahan kalimat-per-kalimat | ~60% |
| **B2** | English mulai dominan | English, catatan Indonesia hanya untuk poin berisiko miskonsepsi (terutama nuansa pelafalan/intonasi yang sulit dijelaskan tanpa L1) | Hanya jika risiko miskonsepsi | ~25% |
| **C1** | Full English | Full English | Tidak ada | ~5% (istilah sangat teknis saja) |
| **C2** | Full English (gaya native) | Full English, singkat seperti native feedback | Tidak ada | 0% |

### 3.2 Evolusi Tiap Langkah Feedback Speaking (A1 → C2)

| Langkah | A1–A2 | B1 | B2 | C1 | C2 |
|---|---|---|---|---|---|
| 1️⃣ Tabel Perbandingan | Kalimat User vs Native, kalimat pendek & sangat literal jadi fokus utama | Sama, mulai tunjukkan alternatif lebih dari 1 versi natural | Versi Native mulai menyertakan pilihan register (casual vs sedikit formal) | Tabel + catatan ringkas kenapa versi native lebih natural (bukan sekadar benar) | Tabel hanya untuk slip halus — sering hampir tidak ada beda, fokus geser ke nuansa di langkah 3️⃣–4️⃣ |
| 2️⃣ Catatan Pelafalan | **Segmental** — vokal/konsonan individual yang sering keliru pelafalan dari interferensi Bahasa Indonesia (contoh: /θ/ "th" sering jadi /t/), fonetik UK + cara ucap sederhana | Segmental + mulai **word stress** dasar (kata 2–3 suku kata) | **Suprasegmental** mulai dominan: sentence stress, rhythm dasar | **Intonasi** untuk makna pragmatik (pertanyaan retoris, sarkasme halus, penekanan kontras) | Fokus **prosodi natural & timing** seperti penutur asli — koreksi langka, lebih ke micro-tuning |
| 3️⃣ Analisa Kelancaran & Naturalness | Apakah respons keluar sama sekali (banyak pause/struggle = normal di A1) vs sudah ada upaya kalimat lengkap | Apakah respons mengalir dengan koneksi ide dasar (and, but, because) tanpa pause berlebihan | Apakah respons punya kompleksitas ide (bukan cuma kalimat tunggal) dengan kelancaran wajar | Apakah respons setara percakapan spontan native speed, dengan self-repair natural (bukan struggle) | Fokus craft: apakah respons punya nuansa rhetorical/timing yang persis seperti percakapan native-to-native |
| 4️⃣ Discourse & Coherence Check | Apakah ada kalimat? Kata2 muncul = ✅; tunjuk apa yang tidak ada | Mulai cek koneksi ide antar kalimat (and/but/because) | Cek topik development: klaim + 1 bukti/contoh | Cek keseimbangan antara klaim, bukti, dan nuansa | Cek discourse craft: timing, efek retoris, presisi informasi |
| 5️⃣ Saran Pilihan Kata | Vocab dasar pengganti yang lebih umum dipakai native (bukan istilah textbook) | Lexical chunks/collocation dasar untuk topik | Collocation lebih presisi + connotation check (kata yang secara teknis benar tapi nuansanya salah) | Idiomatic expression & register-appropriate phrasing | Pilihan kata untuk craft retoris/nuansa pragmatik, bukan sekadar "lebih natural" |
| 6️⃣ Pragmatic Register Check | Sangat sederhana: formal/kasual saja, gaya bahasa belum dikecek | Mulai cek apakah respons sesuai konteks (teman vs orang asing) | Cek register: apakah ada formulaic expression yang terlalu kaku atau terlalu kasual | Cek pragmatic meaning: apakah indirect requests atau hedging dipakai dengan tepat | Cek implicature & nuance: apakah ada gap antara apa yang dikatakan dan dimaksud |
| 7️⃣ Analisa Level CEFR | Tips naik ke A2, sangat encouraging, fokus ke "berani ngomong" | Sama, mulai sebut sub-skill spesifik (fluency vs accuracy) | Fokus ke kelancaran spontan & range vocab, dalam English | Fokus ke konsistensi register & spontanitas bawah tekanan (mendekati native speed) | Reframe: tips **mempertahankan** Mastery (C2 = level tertinggi CEFR, tidak ada "naik level" — selaras pola C2 di prd_user.md §5.6 & grammar_analysis.md §3.2) |
| 8️⃣ Adaptasi Sesi | Macet → Pattern Drill sangat sederhana (substitusi kata tunggal), dorongan ramah | Macet → Pattern Drill kalimat pendek dengan 1 variabel diganti | Lancar → pertanyaan follow-up butuh justifikasi/perbandingan | Lancar → pertanyaan follow-up butuh argumentasi/hipotesis; macet jarang terjadi | Pattern Drill hampir tidak pernah dipicu; kalau lancar, follow-up menuntut nuansa/presisi register, bukan sekadar topik baru |

> **Catatan konsistensi dengan modul lain:** struktur 8 langkah ini **tidak berubah** — sama dengan prinsip "ritual konstan, kedalaman yang berubah" di grammar_analysis.md §3 dan prd_user.md §5.6. Speaking tidak menambahkan sub-langkah Self-Check Pertama ala Vocab C1/C2 (prd_user.md §5.6) karena PRD §4.4 tidak menyebutkan mekanisme itu untuk Speaking — kalau produk owner ingin menambahkannya di masa depan, itu harus diajukan sebagai rekomendasi tambahan terpisah (lihat §6.4), bukan diimpor diam-diam.

---

## 📚 4. METODOLOGI RISET CEFR SPEAKING

Kurikulum A2–C2 di §5 **tidak** ditebak — di-grounding ke sumber otoritatif yang sudah diverifikasi lewat web research nyata (bukan dari memori model). Tabel sumber dan alasan otoritasnya:

| Sumber | Apa & kenapa otoritatif | URL (diverifikasi) |
|---|---|---|
| **Council of Europe — CEFR Companion Volume (2020)** | Dokumen resmi yang memperluas & memperhalus skala deskriptor asli CEFR 2001, termasuk skala **Spoken Production** dan **Spoken Interaction** per level A1–C2 dalam bentuk "can-do" illustrative descriptors. Sumber paling otoritatif untuk "fungsi komunikatif lisan apa yang realistis di level X". | https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions dan tabel deskriptor lengkap di https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors-search |
| **CEFR Companion Volume — PDF lengkap (Council of Europe, dihosting ulang oleh institusi pendidikan)** | Salinan resmi dokumen Companion Volume 2020 dengan tabel deskriptor Spoken Interaction/Production per level, termasuk update gender-neutral & modality-inclusive. | https://blogs.sch.gr/mtzotzou/files/2023/09/CEFR-COMPANION-VOLUME_ENGLISH_2020.pdf |
| **Cambridge English Qualifications — Speaking Assessment Scales (KET≈A2, PET≈B1, FCE≈B2, CAE≈C1, CPE≈C2)** | Tiap exam handbook resmi Cambridge menilai speaking lewat 4 kriteria: **Grammar and Vocabulary** (jadi **Lexical Resource**/**Grammatical Resource** di C1–C2), **Discourse Management**, **Pronunciation**, **Interactive Communication** — kriteria ini dipakai sebagai cross-check independen untuk memetakan ekspektasi kompleksitas wacana & interaksi per level. | https://www.cambridgeenglish.org/Images/563308-b1-preliminary-for-schools-assessing-speaking-performance.pdf (contoh band descriptor B1 resmi); ringkasan kriteria 4 dimensi dikonfirmasi via https://www.cambridge.org/elt/blog/2025/06/27/4-strategies-to-effectively-assess-speaking-skills-for-cambridge-english-qualifications/ |
| **Van Ek & Trim — Notional-Functional Syllabus (dasar historis CEFR)** | Mengkategorikan fungsi bahasa (imparting/seeking information, expressing attitudes, suasion/persuading, socialising, structuring discourse, communication repair) yang langsung memengaruhi desain CEFR. Dipakai untuk memastikan progresi fungsi komunikatif kita (introduce → describe → narrate → opinion → persuade → negotiate → debate) berurutan logis, bukan sembarang. | https://en.wikipedia.org/wiki/Notional-functional_syllabus ; konteks tambahan di https://teflpedia.com/Notional%E2%80%93functional_syllabus dan dokumentasi resmi Cambridge "Using the CEFR: Principles of Good Practice" https://www.cambridgeenglish.org/Images/126011-using-cefr-principles-of-good-practice.pdf |
| **Pearson — Global Scale of English (GSE) Learning Objectives** | GSE memetakan skala granular (10–90) dengan can-do statements per skill termasuk Speaking, dipecah ke Spoken Interaction & Spoken Production (sejalan struktur CEFR), berguna sebagai cross-check granular independen dari Cambridge/CEFR resmi. | https://www.pearson.com/content/dam/one-dot-com/one-dot-com/pearson-languages/en-gb/pdfs/gse/gse-resources/gse-learning-objectives-adult-general-english.pdf dan overview di https://www.pearson.com/content/dam/one-dot-com/one-dot-com/pearson-languages/en-gb/pdfs/gse/gse-resources/gse-learning-objectives-overview.pdf |
| **Pronunciation research — Levis (Intelligibility Principle) & Celce-Murcia/Brinton/Goodwin (segmental–suprasegmental progression)** | Levis (2005, *Changing Contexts and Shifting Paradigms in Pronunciation Teaching*) — *intelligibility* (dipahami) jadi target realistis, bukan native-like accent; menentukan fitur mana yang paling penting dikoreksi dulu. Goodwin (dalam *Teaching Pronunciation: A Course Book and Reference Guide*, dengan Celce-Murcia & Brinton) — pedoman progresi pengajaran dari segmental (suara individual) ke suprasegmental (stress, rhythm, intonation) seiring naik level. Dipakai untuk evolusi Catatan Pelafalan di §3.2. | Ringkasan & referensi dikonfirmasi via https://onlinelibrary.wiley.com/doi/abs/10.1002/9781405198431.wbeal0970.pub2 (Goodwin, *Pronunciation Teaching Methods and Techniques*) dan https://iastate.pressbooks.pub/teachingpronunciation/chapter/chapter-2-pronunciation-in-language-teaching/ |
| **Fluency research — Bygate (speaking skills), teknik 4/3/2, model produksi ujaran Levelt** | Penelitian tentang automaticity & task repetition (teknik 4/3/2: bicara 4 menit, lalu ulang topik sama 3 menit, lalu 2 menit — tekanan waktu menurun memaksa proceduralization) menunjukkan kelancaran berkembang lewat pembebasan resource kognitif dari formulasi ke artikulasi (model 4 tahap Levelt: conceptualization → formulation → articulation → monitoring). Dipakai sebagai dasar Analisa Kelancaran & Naturalness (§2.3 langkah 3️⃣) dan progresi di §3.2. | Ringkasan riset dikonfirmasi via https://www.researchgate.net/publication/362697362_Improving_Speaking_Fluency_Through_432_Technique_and_Self-_Assessment dan https://www.mextesol.net/journal/public/files/f102bb01a937483d0e1f10c7f3500d12.pdf |
| **ACTFL Proficiency Guidelines — Speaking (2012/2024)** | Skala Novice→Intermediate→Advanced→Superior→Distinguished, dipakai **hanya sebagai cross-reference fungsi komunikatif** (narasi/deskripsi muncul di Intermediate, supported opinion/explain in detail/hypothesize muncul di Advanced, language used skillfully & efisien di Distinguished) — **bukan klaim ekuivalensi CEFR-ACTFL** (kedua framework punya basis & granularitas berbeda; prd_user.md §5.5 sendiri sudah memperingatkan ACTFL dipakai "secara hati-hati", hanya untuk rationale kebijakan bahasa, bukan pemetaan level langsung). | https://www.actfl.org/uploads/files/general/ACTFLProficiencyGuidelines1999_2022-10-13-062609_vdur.pdf dan https://www.actfl.org/uploads/files/general/OPI-Familiarization-Guide-2020-1.pdf |
| **Tsunemoto & Trofimovich (2024) — "Coherence and Comprehensibility in Second Language Speakers' Academic Speaking Performance"** | Examining 60 TOEFL-type speech samples rated by 12 EAP instructors: found strong correlation (r = .70) between discourse coherence and comprehensibility. Discourse organization — presence and sequencing of task-essential structural components — is the strongest predictor. Key distinction: coherence = global discourse organization (distinct from fluency or accuracy). Justifies Discourse & Coherence Check (langkah 4️⃣) as a separate assessment dimension. | *Studies in Second Language Acquisition*, Vol. 46, No. 3, pp. 795–817: https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/coherence-and-comprehensibility-in-second-language-speakers-academic-speaking-performance/85221E116322A1A7ACD84242C454712A (verified 200) |
| **Bardovi-Harlig & Dörnyei (1998) — "Do Language Learners Recognize Pragmatic Violations?"** | Tested 543 EFL/ESL learners + 53 teachers across Hungary, U.S., Italy. EFL learners rated grammatical errors as MORE serious than pragmatic violations; ESL learners showed the opposite. Critical for Indonesia EFL context (no immersion): explicitly adding a pragmatic register check is one of the highest-value speaking interventions precisely because classroom EFL systematically underweights pragmatics. Won 1999 TESOL Distinguished Research Award. | *TESOL Quarterly*, Vol. 32, No. 2: https://eric.ed.gov/?id=EJ567536 (verified 200) |

**Catatan kejujuran sumber:** CEFR Companion Volume, Cambridge exam criteria, dan Van Ek & Trim functions **konvergen kuat** untuk A1–B2 — semua sepakat progresi umum: A1 = transaksi sangat sederhana & predictable (perkenalan, fakta dasar) → A2 = transaksi rutin & deskripsi sederhana → B1 = narasi terhubung, opini dasar, menjaga percakapan informal → B2 = penjelasan & argumentasi dengan elaborasi, mempertahankan sudut pandang. Untuk **C1–C2**, CEFR Companion Volume & Cambridge (CAE/CPE) masih mendeskripsikan fungsi spesifik (debat terstruktur, negosiasi kompleks, presentasi formal, nuansa pragmatik/idiomatik) — tapi semakin tinggi level, deskriptor CEFR sendiri makin berfokus ke **kualitas eksekusi** (precision, fluency, kemampuan menyesuaikan register & gaya) ketimbang **fungsi/topik baru** yang belum pernah disentuh sebelumnya. Ini paralel dengan temuan grammar_analysis.md §4 soal C2 grammar ("no new structures, fokus nuansa") — untuk Speaking C2, kurikulum kita di §5.6 **sengaja** memuat lebih banyak topik bertema presisi retoris/diplomasi/nuansa budaya daripada "fungsi baru", dan ini diberi label jujur sebagai ekstrapolasi lebih tinggi di ringkasan kuantitatif §5.7.

---

## 📋 5. KURIKULUM 30 TOPIK SPEAKING PER LEVEL

Aturan: A1 = **verbatim** keputusan PRD (prd_user.md §4.4, tidak diubah). A2–C2 = hasil riset §4, **non-overlapping** (tiap level membangun fungsi komunikatif ke depan, tidak mengulang fungsi A1 yang sudah disentuh di Day 22–30 — Explaining/Comparing/Telling a Story/Instructions/Complaints/Expectations/Habits/Preferences/Mini Presentation). Tiap level: Day 1–30 topik + Day 31 Placement Test (§5.8). Progresi fungsi mengikuti Van Ek & Trim (imparting info → expressing attitudes → suasion/persuading → socialising → structuring discourse) yang dipetakan ke skala Spoken Production & Spoken Interaction CEFR Companion Volume per level.

### 5.1 LEVEL A1 (Beginner) — SUDAH DIPUTUSKAN, TIDAK DIUBAH

Daftar ini **verbatim** dari prd_user.md §4.4. Validasi CEFR di bawah tabel.

**Day 1–21 — Core A1:**

| Day | Topik | Day | Topik |
|---|---|---|---|
| 1 | Introducing Yourself | 12 | Talking About Future Plans |
| 2 | Asking Questions | 13 | Describing Places |
| 3 | Talking About Daily Routines | 14 | Talking About Frequency |
| 4 | Describing People | 15 | Giving Opinions |
| 5 | Describing Things Around You | 16 | Agreeing and Disagreeing |
| 6 | Talking About Time | 17 | Making Suggestions |
| 7 | Likes and Dislikes | 18 | Making Invitations |
| 8 | Giving Directions | 19 | Apologizing and Responding |
| 9 | Ordering Food and Drinks | 20 | Offering Help |
| 10 | Making Small Talk | 21 | Talking About Problems & Solutions |
| 11 | Talking About Past Experiences | | |

> 🌉 **Jembatan ke A2 (Day 22–30):** Topik-topik berikut menuntut fungsi komunikatif yang lebih kompleks dari A1 murni — menjelaskan dengan jelas, membandingkan, bercerita berurutan, memberi instruksi, komplain sopan, ekspektasi, kebiasaan lampau-sekarang, preferensi, dan mini-presentasi. Secara CEFR, ini criterial A2 Spoken Production (Sustained Monologue & Information Exchange).

**Day 22–30 — A1→A2 Bridge:**

| Day | Topik | Day | Topik |
|---|---|---|---|
| 22 | Explaining Something Clearly | 27 | Talking About Expectations |
| 23 | Comparing People, Things, and Places | 28 | Talking About Habits (Past & Present) |
| 24 | Telling a Short Story | 29 | Talking About Preferences |
| 25 | Giving Instructions (How to...) | 30 | Mini Presentation |
| 26 | Making Complaints Politely | | |

**Validasi CEFR (Day 1–21 = Core A1):** CEFR Companion Volume Spoken Production & Spoken Interaction A1 mendeskripsikan kemampuan: memperkenalkan diri & orang lain, bertanya & menjawab pertanyaan personal sederhana (tempat tinggal, kenalan, milik), mendeskripsikan tempat tinggal & orang dengan frasa sederhana, menangani transaksi sangat dasar (memesan, menanyakan harga), berinteraksi secara sederhana **asalkan lawan bicara berbicara pelan & siap membantu**. Topik Day 1–21 (perkenalan, bertanya, rutinitas, deskripsi orang/benda/tempat, waktu, suka/tidak suka, arah, memesan makanan, small talk, pengalaman lampau sederhana, rencana masa depan dasar, frekuensi, opini dasar, setuju/tidak setuju, saran, ajakan, minta maaf, menawarkan bantuan, masalah & solusi) **konvergen** dengan can-do A1 ini — semua adalah fungsi transaksional & sosial dasar yang **predictable**. **Day 22–30 secara sadar adalah jembatan A1→A2** (PRD sudah melabelinya demikian): menjelaskan dengan jelas, membandingkan, bercerita pendek dengan urutan, memberi instruksi, komplain sopan, ekspektasi, kebiasaan lampau-sekarang, preferensi, dan mini-presentasi sebenarnya **criterial A2** menurut deskriptor Spoken Production A2 (Sustained Monologue: Describing experience; Information exchange). **Implikasi penting:** karena A1 Day 22–30 sudah "mencuri" beberapa fungsi A2, kurikulum A2 di §5.2 **harus** membangun di atasnya (memperdalam & menambah konteks transaksional baru), **bukan** mengulang.

### 5.2 LEVEL A2 (Elementary) — RISET BARU, NON-OVERLAPPING

Rationale grup: A2 (≈KET) = **transaksi rutin yang lebih variatif** (telepon, belanja, janji temu, perjalanan), **deskripsi & narasi sederhana yang lebih panjang** dengan penghubung dasar (and/but/because/then), **saran & permintaan sopan**, **rencana & kebiasaan dengan lebih banyak detail**. CEFR Companion Volume A2 menekankan "short social exchanges" & "routine tasks requiring simple, direct exchange of information" — A2 kita memperluas konteks transaksi yang di A1 hanya menyentuh memesan makanan & arah. **Sengaja menghindari** justifikasi opini berlapis & narasi kompleks (itu B1).

| Day | Topik | Rationale (1 baris) |
|---|---|---|
| 1 | Talking on the Phone (Basic Calls) | Transaksi telepon dasar — konteks baru di luar A1 tatap muka (CEFR A2 Telephoning/Transactions). |
| 2 | Shopping & Asking About Prices | Transaksi belanja & tawar — "goods and services" A2 (Companion Volume Transactions). |
| 3 | Making & Changing Appointments | Janji temu & reschedule — koordinasi waktu A2 (Spoken Interaction A2). |
| 4 | Asking for & Giving More Detailed Directions | Lanjutan A1 Day 8 — arah multi-langkah dengan landmark (A2 Information exchange). |
| 5 | Talking About Your Weekend (Past Narration) | Narasi lampau berurutan dasar — perluasan A1 Day 11 (A2 Describing experience). |
| 6 | Describing Your Hometown & Neighbourhood | Deskripsi tempat lebih panjang dari A1 Day 13 (A2 Sustained monologue: Describing). |
| 7 | Talking About Your Job or Studies | Konteks personal A2 baru — pekerjaan/studi (KET/A2 topik inti). |
| 8 | Booking a Table / Hotel / Ticket | Transaksi reservasi — "obtaining goods & services" A2 (Companion Volume). |
| 9 | Talking About the Weather & Seasons | Small talk A2 yang lebih kaya (lanjutan A1 Day 10). |
| 10 | Giving Simple Advice (You should...) | Saran sederhana dengan modal — fungsi suasion dasar (Van Ek & Trim). |
| 11 | Talking About Plans for the Weekend/Holiday | Rencana lebih detail dari A1 Day 12 (A2 future arrangements). |
| 12 | Describing Daily Habits in More Detail | Perdalam A1 Day 3 dengan frekuensi & alasan (A2 Describing routines). |
| 13 | Talking About Health & Feeling Sick | Konteks transaksi baru — apotek/dokter dasar (A2 survival situations). |
| 14 | Comparing Two Simple Things (bigger/cheaper) | Perbandingan dasar — lanjutan A1 Day 23 dengan struktur comparative (A2). |
| 15 | Asking for Help & Clarification (Sorry, can you...) | Communication repair dasar (Van Ek & Trim: repair; A2 Companion Volume). |
| 16 | Talking About Likes/Dislikes with Reasons | Perdalam A1 Day 7 — tambah "because" (A2 expressing attitudes). |
| 17 | Making Plans with a Friend (Let's... / How about...) | Koordinasi sosial A2 — negosiasi rencana ringan (Spoken Interaction A2). |
| 18 | Talking About Transportation & Travel | Konteks perjalanan — "getting around" A2 (survival topic). |
| 19 | Describing a Past Event (a party, a trip) | Narasi pengalaman spesifik lampau (A2 Describing experience). |
| 20 | Talking About Your Family in Detail | Deskripsi orang lebih panjang dari A1 Day 4 (A2 sustained description). |
| 21 | Ordering at a Restaurant (Full Interaction) | Perluas A1 Day 9 jadi interaksi penuh (special requests, bill) (A2 Transactions). |
| 22 | Talking About Prices, Money & Paying | Transaksi finansial dasar — kembalian, metode bayar (A2 goods & services). |
| 23 | Describing Your Routine at Work/School | Deskripsi rutinitas berkonteks (lanjutan Day 7 & 12) (A2). |
| 24 | Talking About What You Did Last Year | Narasi lampau jangkauan waktu lebih luas (A2 Describing experience). |
| 25 | Asking Polite Questions (Could you...? Would you...?) | Kesopanan transaksional A2 (Van Ek & Trim: socialising). |
| 26 | Talking About Food & Cooking | Topik sehari-hari A2 dengan kosakata proses sederhana (A2). |
| 27 | Describing Your Free Time & Hobbies | Perluas A1 Day 7 jadi deskripsi aktivitas (A2 sustained monologue). |
| 28 | Talking About Future Intentions (going to + plans) | Rencana dengan niat — perdalam A1 Day 12 (A2 future). |
| 29 | Handling Simple Problems (lost item, wrong order) | Penyelesaian masalah transaksional dasar (A2 survival/repair). |
| 30 | Mini Conversation Practice (combining A2 functions) | Konsolidasi semua fungsi A2 sebelum Placement Test. |

> **Non-overlap check A2:** A1 sudah menyentuh perkenalan/deskripsi/opini/komplain/cerita pada tingkat **frasa sangat sederhana & predictable**; A2 menaikkannya ke **transaksi rutin variatif + narasi berurutan dengan penghubung dasar + saran/permintaan sopan**. Konteks transaksi **baru** yang tidak ada di A1: telepon, belanja & harga, reservasi, janji temu, kesehatan, transportasi, masalah transaksional. Comparing di A2 (Day 14) = struktur *comparative* eksplisit (bigger/cheaper), bukan perbandingan frasa lepas A1 Day 23. Advice A2 (Day 10) = saran transaksional sederhana, bukan persuasi berargumen (itu B2).

### 5.3 LEVEL B1 (Intermediate) — RISET BARU, NON-OVERLAPPING

Rationale grup: B1 (≈PET) = **narasi terhubung yang lebih panjang**, **opini yang dijustifikasi dengan alasan**, **menjaga percakapan di topik familiar & sebagian tak-familiar**, **menceritakan pengalaman, mimpi, harapan, ambisi**, **menangani situasi tak-terduga (travel/komplain)**, **penyelesaian masalah kolaboratif sederhana**. CEFR Companion Volume B1 menekankan kemampuan "enter unprepared into conversation on familiar topics", "narrate a story", "give reasons & explanations for opinions and plans". Ini level di mana speaking mulai **mengalir dan terhubung**, bukan kalimat lepas.

| Day | Topik | Rationale (1 baris) |
|---|---|---|
| 1 | Telling a Longer Story (with sequencing) | Narasi terhubung first/then/after that/finally (B1 Sustained monologue: narration). |
| 2 | Giving Opinions with Reasons | Opini + justifikasi "I think... because..." (B1 expressing attitudes). |
| 3 | Agreeing & Disagreeing Politely (with reasons) | Perdalam A1 Day 16 — disertai alasan (B1 Spoken Interaction). |
| 4 | Talking About Experiences (Have you ever...?) | Pengalaman hidup dengan Present Perfect (B1 Describing experience). |
| 5 | Describing a Memorable Event in Detail | Narasi kaya dengan latar & perasaan (B1 sustained narration). |
| 6 | Talking About Hopes, Dreams & Ambitions | Fungsi B1 khas — aspirasi masa depan (CEFR B1 explicit descriptor). |
| 7 | Making Plans & Arrangements (negotiating details) | Koordinasi sosial dengan tawar-menawar (B1 Goal-oriented co-operation). |
| 8 | Handling Unexpected Travel Situations | Bandara/hotel saat ada masalah tak-terduga (B1 "deal with situations while travelling"). |
| 9 | Describing Your Job/Studies in Detail | Penjelasan terstruktur tentang aktivitas & tanggung jawab (B1 sustained monologue). |
| 10 | Talking About Advantages & Disadvantages | Mempertimbangkan dua sisi sederhana (B1 — jembatan ke argumentasi B2). |
| 11 | Explaining How Something Works | Penjelasan proses berurutan (B1 information exchange/explaining). |
| 12 | Giving & Responding to Recommendations | Rekomendasi film/tempat/buku dengan alasan (B1 expressing attitudes). |
| 13 | Talking About a Problem & Finding Solutions | Penyelesaian masalah kolaboratif (B1 Goal-oriented co-operation). |
| 14 | Describing Your Country & Culture | Deskripsi yang lebih abstrak — kebiasaan & budaya (B1 sustained description). |
| 15 | Talking About News & Current Events (simple) | Topik di luar pengalaman langsung (B1 "topics of interest"). |
| 16 | Expressing Feelings & Emotions | Menjelaskan perasaan & penyebabnya (B1 expressing attitudes). |
| 17 | Apologising & Explaining a Mistake | Perdalam A1 Day 19 — disertai penjelasan & solusi (B1 repair). |
| 18 | Talking About Changes in Your Life | Narasi perubahan dari dulu ke sekarang (B1 used-to/comparison narration). |
| 19 | Making Complaints & Asking for Solutions | Perdalam A1 Day 26 — komplain + tuntut penyelesaian (B1 transactions). |
| 20 | Describing a Process or a Recipe | Instruksi multi-langkah lebih kompleks dari A1 Day 25 (B1 explaining). |
| 21 | Talking About Plans After Finishing School/Work | Rencana jangka panjang beralasan (B1 future + ambitions). |
| 22 | Giving Directions & Explaining a Route in Detail | Perdalam A2 Day 4 — rute kompleks dengan alternatif (B1 information exchange). |
| 23 | Discussing Likes/Dislikes with Comparison | Preferensi + perbandingan beralasan (perdalam A1 Day 29). |
| 24 | Talking About Habits You Want to Change | Refleksi diri + niat perubahan (B1 expressing attitudes/intentions). |
| 25 | Describing a Person's Character & Behaviour | Deskripsi sifat (bukan fisik) dengan contoh (B1 sustained description). |
| 26 | Talking About Money & Spending Habits | Topik personal-abstrak dengan refleksi (B1). |
| 27 | Explaining Why You Agree/Disagree with a Rule | Opini terhadap aturan/kebijakan sederhana (B1 — jembatan argumentasi). |
| 28 | Talking About a Skill You Learned | Narasi proses belajar + perasaan (B1 Describing experience). |
| 29 | Keeping a Conversation Going (follow-up questions) | Interactive strategy — turn-taking & follow-up (B1 Spoken Interaction strategi). |
| 30 | Mini Discussion (combining B1 functions) | Konsolidasi narasi + opini beralasan + interaksi sebelum Placement Test. |

> **Non-overlap check B1:** A2 = transaksi rutin + narasi pendek dengan penghubung dasar; B1 = **narasi panjang berurutan + opini yang DIJUSTIFIKASI dengan alasan + percakapan yang dijaga mengalir**. Fungsi **baru** yang tidak ada di A2: hopes/dreams/ambitions, advantages/disadvantages, current events, menjaga percakapan (follow-up questions), refleksi perubahan hidup. Agreeing/Disagreeing B1 (Day 3) = **disertai alasan**, beda dari A1 Day 16 yang hanya menyatakan setuju/tidak. Complaints B1 (Day 19) = **menuntut solusi**, beda dari A2/A1 yang hanya menyampaikan. Belum ada argumentasi dengan counter-argument & hipotesis (itu B2).

### 5.4 LEVEL B2 (Upper-Intermediate) — RISET BARU, NON-OVERLAPPING

Rationale grup: B2 (≈FCE) = **argumentasi dengan elaborasi & counter-argument**, **mempertahankan & membela sudut pandang**, **hipotesis & spekulasi**, **deskripsi situasi kompleks/abstrak**, **presentasi terstruktur dengan Q&A**, **negosiasi**, **diskusi topik abstrak**. CEFR Companion Volume B2 menekankan "develop a clear argument", "explain a viewpoint giving advantages & disadvantages", "take an active part in discussion", "account for and sustain views". Bahasa penjelasan mulai English-dominant (§3.1).

| Day | Topik | Rationale (1 baris) |
|---|---|---|
| 1 | Presenting a Clear Argument (claim + support) | Argumentasi terstruktur klaim+bukti (FCE/B2 "develop an argument"). |
| 2 | Defending Your Opinion Against Counter-Arguments | Mempertahankan sudut pandang saat ditantang (B2 "sustain views"). |
| 3 | Discussing Pros & Cons in Depth | Elaborasi dua sisi penuh (lebih dalam dari B1 Day 10) (B2). |
| 4 | Hypothesising & Speculating (What if...?) | Spekulasi & skenario hipotetis (B2 conditional speculation). |
| 5 | Describing Complex Situations & Problems | Situasi berlapis dengan sebab-akibat (B2 sustained description). |
| 6 | Giving a Structured Mini-Presentation | Presentasi dengan intro-body-conclusion (B2 sustained monologue). |
| 7 | Handling Q&A After a Presentation | Merespons pertanyaan spontan secara koheren (B2 interaction). |
| 8 | Negotiating & Reaching a Compromise | Tawar-menawar mencapai kesepakatan (B2 Goal-oriented co-operation). |
| 9 | Discussing Abstract Topics (success, happiness) | Topik abstrak di luar konkret (B2 "abstract topics"). |
| 10 | Explaining Causes & Consequences | Analisis kausalitas (because of/leads to/results in) (B2). |
| 11 | Expressing Nuanced Opinions (partly agree...) | Opini bergradasi, bukan setuju/tidak biner (B2 nuance). |
| 12 | Discussing Social Issues & Their Impact | Isu sosial dengan dampak (B2 "topical issues"). |
| 13 | Persuading Someone to Change Their Mind | Persuasi beralasan (Van Ek & Trim: suasion; B2). |
| 14 | Comparing & Evaluating Options Critically | Evaluasi kriteria bukan cuma deskripsi (B2 critical comparison). |
| 15 | Telling an Engaging Story with Detail & Emphasis | Narasi dengan teknik penekanan & antisipasi (B2 sustained narration). |
| 16 | Talking About Hypothetical Consequences (regrets) | Andai-lampau & penyesalan beralasan (B2 hypothesising). |
| 17 | Discussing Advantages of Technology/Lifestyle Changes | Diskusi tren dengan analisis (B2 topical). |
| 18 | Giving & Justifying Recommendations Professionally | Rekomendasi dengan pembenaran terstruktur (B2 register-aware). |
| 19 | Describing Trends & Developments | Mendeskripsikan perubahan/data secara verbal (B2 information). |
| 20 | Expressing Agreement/Disagreement Diplomatically | Diplomasi dalam ketidaksetujuan (B2 interaction nuance). |
| 21 | Discussing a Controversial Topic Respectfully | Topik kontroversial seimbang (B2 — jembatan debat C1). |
| 22 | Summarising & Reporting What Others Said | Melaporkan & merangkum sudut pandang lain (B2 reported discourse). |
| 23 | Talking About Plans with Contingencies (in case...) | Rencana bersyarat & cadangan (B2 conditional planning). |
| 24 | Explaining a Concept to Someone Unfamiliar | Penjelasan adaptif ke audiens awam (B2 explaining clearly). |
| 25 | Discussing Work/Study Challenges & Strategies | Refleksi profesional terstruktur (B2). |
| 26 | Speculating About the Future (predictions) | Prediksi beralasan dengan derajat kepastian (B2). |
| 27 | Giving Constructive Feedback | Kritik membangun yang sopan (B2 register/diplomacy). |
| 28 | Discussing Cultural Differences | Perbandingan lintas-budaya reflektif (B2 abstract/cultural). |
| 29 | Leading a Short Group Discussion | Memandu & menjaga alur diskusi (B2 interaction management). |
| 30 | Mini Debate Practice (combining B2 functions) | Konsolidasi argumentasi + counter + diplomasi sebelum Placement Test. |

> **Non-overlap check B2:** B1 = opini beralasan + narasi mengalir; B2 = **argumentasi dengan counter-argument, hipotesis, evaluasi kritis, presentasi terstruktur + Q&A, negosiasi, topik abstrak**. Fungsi **baru** yang tidak ada di B1: membela opini saat ditantang (Day 2), spekulasi hipotetis (Day 4, 16, 26), presentasi formal + Q&A (Day 6–7), negosiasi kompromi (Day 8), persuasi (Day 13), diplomasi (Day 20, 21). Pros/cons B2 (Day 3) = **elaborasi mendalam dengan bobot**, beda dari B1 Day 10 yang hanya menyebut dua sisi. Debat & negosiasi **diperkenalkan ringan** di B2 lalu **diperdalam penuh di C1** (pembagian sengaja, paralel grammar_analysis.md §5.4 soal cleft/subjunctive).

### 5.5 LEVEL C1 (Advanced) — RISET BARU, NON-OVERLAPPING

Rationale grup: C1 (≈CAE) = **debat terstruktur & persuasi tingkat tinggi**, **negosiasi kompleks**, **argumentasi bernuansa dengan presisi**, **diskusi topik spesialis/abstrak dengan akurat**, **menyampaikan perbedaan makna halus**, **presentasi formal dengan penanganan Q&A sulit**, **mediasi antar sudut pandang**. CEFR Companion Volume C1 menekankan "express fluently & spontaneously without much obvious searching", "use language flexibly & effectively for social, academic & professional purposes", "formulate ideas precisely". C1 = kontrol penuh atas wacana panjang & kompleks.

| Day | Topik | Rationale (1 baris) |
|---|---|---|
| 1 | Delivering a Structured Formal Debate | Debat formal dengan posisi & rebuttal (CAE/C1 debating). |
| 2 | Building a Persuasive Argument (rhetoric) | Persuasi dengan teknik retoris (C1 suasion tingkat tinggi). |
| 3 | Rebutting Counter-Arguments Precisely | Membantah dengan presisi & konsesi terukur (C1 argumentation). |
| 4 | Negotiating Complex Deals & Conditions | Negosiasi berlapis dengan syarat (C1 "negotiate skillfully"). |
| 5 | Mediating Between Opposing Viewpoints | Menjembatani dua pihak (CEFR Mediation — C1 explicit). |
| 6 | Expressing Subtle Differences in Meaning | Nuansa makna halus (slightly/somewhat/to a degree) (C1 precision). |
| 7 | Discussing Specialised/Technical Topics | Topik bidang spesialis dengan akurasi istilah (C1). |
| 8 | Giving a Formal Presentation with Complex Q&A | Presentasi + tangani pertanyaan menantang/menyimpang (C1). |
| 9 | Hedging & Qualifying Claims Precisely | Pelunakan klaim akademik (it would seem/arguably) (C1 hedging). |
| 10 | Discussing Abstract & Philosophical Ideas | Wacana abstrak tingkat tinggi (ethics, meaning) (C1). |
| 11 | Expressing Strong but Diplomatic Disagreement | Tegas namun diplomatis (C1 interaction nuance). |
| 12 | Analysing Problems & Proposing Solutions | Analisis terstruktur + solusi beralasan (C1 problem-solution). |
| 13 | Speculating with Precision (degrees of certainty) | Spekulasi terkalibrasi (highly likely/conceivably) (C1). |
| 14 | Discussing Causes, Effects & Implications in Depth | Kausalitas berlapis + implikasi jangka panjang (C1). |
| 15 | Telling a Compelling Anecdote with Impact | Anekdot dengan kontrol timing & klimaks (C1 narration craft). |
| 16 | Defending a Position Under Pressure | Mempertahankan posisi saat ditekan cepat (C1 fluency under pressure). |
| 17 | Summarising & Synthesising Multiple Viewpoints | Sintesis beberapa sumber/pendapat (CEFR Mediation C1). |
| 18 | Discussing Sensitive/Controversial Issues Tactfully | Isu sensitif dengan taktis (C1 register/diplomacy). |
| 19 | Expressing Nuanced Emotions & Attitudes | Sikap halus (ambivalence, reluctant agreement) (C1). |
| 20 | Giving Sophisticated Recommendations & Advice | Saran berlapis dengan pertimbangan (C1). |
| 21 | Discussing Hypothetical Scenarios in Depth | Skenario hipotetis multi-langkah (C1 extended hypothesising). |
| 22 | Comparing & Contrasting Complex Concepts | Perbandingan abstrak dengan kriteria halus (C1). |
| 23 | Steering & Managing a Discussion | Mengarahkan diskusi, mengundang & membatasi (C1 interaction management). |
| 24 | Critiquing an Idea Constructively & Precisely | Kritik tajam namun membangun (C1 evaluation). |
| 25 | Talking About Professional/Academic Topics Fluently | Wacana profesional spontan (C1 professional purposes). |
| 26 | Expressing Reservations & Conditions | Menyatakan keberatan bersyarat (provided that/insofar as) (C1). |
| 27 | Persuading a Skeptical Audience | Persuasi ke audiens yang menolak (C1 advanced suasion). |
| 28 | Handling Interruptions & Maintaining Your Point | Mengelola interupsi sambil menjaga argumen (C1 interaction). |
| 29 | Discussing Cultural & Social Nuances | Nuansa lintas-budaya tingkat reflektif tinggi (C1). |
| 30 | Mini Formal Debate + Mediation (combining C1) | Konsolidasi debat + mediasi + presisi sebelum Placement Test. |

> **Non-overlap check C1:** B2 = argumentasi + presentasi + negosiasi **diperkenalkan**; C1 = **penguasaan penuh + presisi + spontanitas di bawah tekanan + mediasi**. Fungsi **baru** yang tidak ada di B2: mediasi antar sudut pandang (Day 5, 17 — CEFR Mediation baru jadi fokus di C1), debat formal penuh (Day 1), persuasi retoris ke audiens skeptis (Day 27), mempertahankan posisi di bawah tekanan cepat (Day 16, 28), nuansa makna halus eksplisit (Day 6, 9, 19, 26). Debat C1 = **terstruktur dengan rebuttal**, beda dari B2 Day 30 yang "mini debate" pengenalan. Yang masih **bukan** fokus C1: register-shifting sengaja, idiomatisitas native, ironi/humor — itu C2.

### 5.6 LEVEL C2 (Mastery) — RISET + EKSTRAPOLASI TERJUSTIFIKASI

Rationale grup: Banyak deskriptor CEFR menyatakan **C2 ≠ fungsi komunikatif baru** — C2 = **presisi retoris & diplomatik, register-shifting dalam ucapan, interaksi idiomatik/native-like spontan, nuansa budaya, persuasi tingkat canggih, menangani ambiguitas/ironi/humor, kelancaran near-native di bawah tekanan** (lihat §5.7). CEFR Companion Volume C2 menekankan "convey finer shades of meaning precisely", "express spontaneously, very fluently & precisely, differentiating finer shades of meaning even in complex situations", "backtrack & restructure around a difficulty so smoothly the interlocutor is hardly aware of it". Karena itu C2 kita berfokus pada **kualitas eksekusi & kontrol gaya** atas fungsi yang sudah dikuasai — bukan 30 fungsi baru. Ini ekstrapolasi sah dari prinsip "C2 = mastery/precision", konsisten dengan reframe C2 di prd_user.md §5.6 ("mempertahankan Mastery", bukan "naik level") dan paralel dengan grammar_analysis.md §5.6.

| Day | Topik | Rationale (1 baris) |
|---|---|---|
| 1 | Conveying Finer Shades of Meaning Precisely | Memilih kata untuk nuansa presis (C2 "finer shades of meaning"). |
| 2 | Register-Shifting Mid-Conversation (formal↔casual) | Mengganti register sengaja sesuai lawan bicara (C2 craft). |
| 3 | Using Idioms & Native Expressions Naturally | Idiomatisitas spontan tanpa terdengar dipaksakan (C2). |
| 4 | Handling Humour, Irony & Sarcasm | Memahami & memproduksi ironi/humor lisan (C2 pragmatic mastery). |
| 5 | Persuading at a Sophisticated Level (subtle rhetoric) | Persuasi halus tanpa terkesan memaksa (C2 advanced suasion). |
| 6 | Diplomatic Communication in Tense Situations | Diplomasi saat konflik tinggi (C2 register control). |
| 7 | Debating Spontaneously at Native Speed | Debat cepat tanpa jeda formulasi (C2 fluency under pressure). |
| 8 | Negotiating High-Stakes Outcomes | Negosiasi penting dengan kontrol nada penuh (C2). |
| 9 | Expressing Implied Meaning & Subtext | Menyampaikan maksud tersirat (implicature) (C2 pragmatic). |
| 10 | Mediating Sensitive Conflicts | Mediasi konflik sensitif dengan kehalusan (CEFR Mediation C2). |
| 11 | Reformulating Smoothly Around Difficulty | Self-repair mulus tak-terlihat (C2 "backtrack so smoothly..."). |
| 12 | Adjusting Tone for Different Audiences | Mengkalibrasi nada per audiens (C2 audience design). |
| 13 | Telling Stories with Native-Like Timing & Effect | Narasi dengan ritme & punchline native (C2 craft). |
| 14 | Handling Hostile or Loaded Questions | Merespons pertanyaan menjebak dengan tenang (C2). |
| 15 | Expressing Cultural Nuance & Sensitivity | Kepekaan budaya dalam pilihan ungkapan (C2). |
| 16 | Using Understatement & Emphasis for Effect | Litotes/penekanan untuk efek retoris (C2 stylistic). |
| 17 | Giving an Impromptu Speech with Coherence | Pidato spontan terstruktur tanpa persiapan (C2). |
| 18 | Discussing Highly Abstract/Specialised Ideas Fluently | Wacana spesialis kompleks lancar (C2 precision). |
| 19 | Softening & Strengthening Claims with Precision | Mengkalibrasi kekuatan klaim presis (C2 hedging/boosting). |
| 20 | Maintaining Fluency While Multitasking Ideas | Mengelola beberapa ide paralel tanpa kehilangan alur (C2). |
| 21 | Reading & Responding to Subtle Social Cues | Membaca isyarat sosial halus & merespons tepat (C2 pragmatic). |
| 22 | Expressing Ambivalence & Complex Attitudes | Sikap bercampur/ambigu yang dikendalikan (C2 nuance). |
| 23 | Persuading Through Storytelling & Analogy | Persuasi via narasi & analogi (C2 rhetorical craft). |
| 24 | Handling Misunderstandings Gracefully | Memperbaiki salah paham tanpa canggung (C2 repair grace). |
| 25 | Discussing Ethical Dilemmas with Nuance | Dilema etis dengan pertimbangan berlapis (C2 abstract). |
| 26 | Code-Switching for Rapport | Menyesuaikan gaya untuk membangun kedekatan (C2 social mastery). |
| 27 | Delivering Critique with Tact & Precision | Kritik tajam namun sangat halus (C2 diplomacy). |
| 28 | Controlling Pace, Pauses & Emphasis Like a Native | Prosodi & timing native (C2 delivery craft). |
| 29 | Spotting & Self-Correcting Subtle Slips | Mendeteksi slip halus penutur mahir (C2 self-monitoring). |
| 30 | Review: Precision, Nuance & Rhetorical Mastery | Konsolidasi Mastery sebelum Placement Test. |

> **Non-overlap check C2:** C2 **tidak** mengenalkan fungsi komunikatif baru — fokus **kualitas eksekusi**: presisi nuansa, register-shifting, idiomatisitas, ironi/humor, diplomasi, kelancaran native-speed, prosodi. Tiap topik dibingkai sebagai "menghaluskan/mengendalikan/menyesuaikan", bukan "mempelajari fungsi baru" (debat sudah di C1, negosiasi sudah di C1 — di C2 keduanya kembali tapi pada **kecepatan native & kontrol nada penuh**, Day 7–8). **Catatan kejujuran:** ini lapisan paling ber-ekstrapolasi (lihat §5.7) karena sumber CEFR memang menyatakan C2 = kualitas eksekusi, bukan inventaris fungsi baru.

### 5.7 Ringkasan Kuantitatif: Riset vs Ekstrapolasi (150 topik baru A2–C2)

Memakai metode jujur yang sama dengan grammar_analysis.md §5.7: sebuah topik dihitung "dari sumber langsung" jika fungsi komunikatifnya muncul eksplisit sebagai can-do descriptor di **CEFR Companion Volume (Spoken Production/Interaction/Mediation)**, **Cambridge speaking assessment scale** (KET/PET/FCE/CAE/CPE), **Pearson GSE Spoken**, atau **Van Ek & Trim functional inventory** untuk level itu; dihitung "ekstrapolasi terjustifikasi" jika topik adalah pemecahan/penyusunan ulang, atau item *kualitas eksekusi* (precision/nuance/register/timing) yang sumbernya deskripsikan sebagai mutu, bukan fungsi diskret.

| Level | Topik | Mayoritas dari sumber langsung (CEFR CV / Cambridge / GSE / Van Ek-Trim) | Ekstrapolasi terjustifikasi |
|---|---|---|---|
| A2 | 30 | ~28 (Spoken Production/Interaction A2 + KET sangat konvergen) | ~2 (pengelompokan/konsolidasi) |
| B1 | 30 | ~28 (PET/Companion Volume B1 konvergen kuat) | ~2 |
| B2 | 30 | ~26 (FCE/Companion Volume B2 kuat; debat/negosiasi di-split B2/C1) | ~4 |
| C1 | 30 | ~24 (CAE/CV C1 + Mediation kuat; sebagian nuance item extrapolated) | ~6 |
| C2 | 30 | ~8 (sumber: "C2 = kualitas eksekusi, bukan fungsi baru") | ~22 (precision/register/idiomatik/timing/nuansa) |
| **Total** | **150** | **~114 (≈76%)** | **~36 (≈24%)** |

**Ringkasan:** ~76% (≈114/150) topik baru ber-anchor langsung ke can-do descriptor CEFR/Cambridge/GSE/Van Ek-Trim; ~24% (≈36/150) adalah ekstrapolasi terjustifikasi — **terkonsentrasi di C2** (22 dari 36), dengan sebagian kecil di C1 (~6, item nuansa makna halus & mediasi yang sumbernya deskripsikan sebagai mutu eksekusi) dan B2 (~4, item presisi argumentatif & diplomasi). Ekstrapolasi C2 **defensibel** karena CEFR Companion Volume sendiri mendeskripsikan C2 sebagai penguasaan *finer shades of meaning*, *register flexibility*, dan *near-native fluency* — yaitu **kualitas atas fungsi yang sudah ada**, bukan fungsi komunikatif baru. Memaksakan "30 fungsi speaking eksklusif C2" justru akan **mengarang** materi yang tidak punya dasar framework; lebih jujur melabeli C2 sebagai lapisan craft/precision dan menandainya transparan di sini (pola identik dengan keputusan C2 grammar di grammar_analysis.md §5.6–5.7). Ini **judgment call yang perlu dikonfirmasi product owner** sebelum penulisan prompt C2 (lihat §8).

### 5.8 Day 31 — Placement Test (Speaking) per level

Format baku (prd_user.md §4.4): sesi speaking langsung, AI ajukan **5–7 pertanyaan acak** dari topik **Day 1–30 level itu** (bukan fungsi baru), fokus = **kelancaran, naturalness, pilihan kata, pronunciation**, output = **Score** (contoh: "72/100 — Keep it up!") + penilaian aspek speaking + **rekomendasi naik level / perkuat level saat ini**. Bisa diulang kapan saja. Catatan implementasi: tiap pertanyaan sebaiknya bisa ditelusuri balik ke Day asalnya supaya rekomendasi spesifik ("perkuat narasi B1 Day 1, 5, 15"); skor & rekomendasi **wajib** ditulis ke tabel `module_test_results` (CLAUDE.md §4), bukan hanya state client. Trigger sesi tetap **"Let's start speaking!"** agar konsisten lintas modul.

---

## 🛠️ 6. TEMPLATE MASTER PROMPT — SPEAKING (SEMUA LEVEL)

Satu template untuk semua day, semua level. Variabel diisi per-day. **Sudah lolos RULE 1–6** prompt_recommendation.md (perhitungan aktual di §6.3). Mekanisme = prd_user.md §4.4 (penjelasan + 3–5 frasa siap pakai + 3 speaking Q + speaking mode + Feedback 8 Langkah). **TIDAK** mengandung BOW/Writing Challenge/5W+1H (milik Vocab) dan **TIDAK** mengandung Repeat After Me wajib-blocking (milik Grammar §4.3) — koreksi pelafalan terjadi via langkah 2️⃣ Catatan Pelafalan tanpa memblokir progres (§2.3).

### 6.1 Template (raw — siap di-encode)

```
Topik: {TOPIC_NAME}
Panggil aku {SAPAAN} {PANGGILAN}.
Level bahasa Inggrisku: {LEVEL} ({LEVEL_NAME}).
Kamu Kak Ara, personal AI Coach kamu, dari Inggrisin Yuk. Tugasmu menjelaskan materi speaking dan melatihku ngomong di situasi {TOPIC_NAME}, Level {LEVEL} ({LEVEL_NAME}). Fokus: kelancaran, kealamian, pilihan kata, pelafalan.
Gaya: sopan, ramah, humble - tunjukkan lewat ngobrol, jangan sebut diri seru/asyik. {LANG_RULE} Pakai emoji secukupnya.
LANGKAH 1 - PENJELASAN + FRASA SIAP PAKAI (otomatis di awal):
Jelaskan singkat tujuan komunikasi situasi {TOPIC_NAME}, ekspresi penting, pola kalimat yang sering dipakai. Gaya santai, relate, bukan textbook.
Lalu beri 3-5 frasa contoh siap pakai dalam format dialog singkat 1-2 kalimat (Inggris + terjemahan Indonesia).
Lalu siapkan (jangan tampilkan dulu) 3 pertanyaan speaking topik ini:
{SPEAKING_Q1_EN}
{SPEAKING_Q1_ID}
{SPEAKING_Q2_EN}
{SPEAKING_Q2_ID}
{SPEAKING_Q3_EN}
{SPEAKING_Q3_ID}
Di akhir, suruh aku aktifkan mode suara lalu bilang "Let's start speaking!". Jangan tanya "siap?".
LANGKAH 2 - FEEDBACK 8 LANGKAH (otomatis setelah aku jawab tiap pertanyaan):
1. Tabel Perbandingan - tabel 2 kolom: Kalimat User | Versi Native Speaker. Jawaban sudah >=95% natural: tandai OK di kolom Native, tak perlu rewrite.
2. Catatan Pelafalan - kata yang pelafalannya salah/janggal + simbol fonetik UK dalam / / + cara ucap singkat. Tidak ada isu: tulis "-".
3. Analisa Kelancaran & Naturalness - natural / terlalu kaku (word-for-word dari Indonesia) / terlalu singkat. 1-2 catatan singkat.
4. Discourse & Coherence Check - responku punya alur jelas sebagai giliran percakapan? Ada ide utama + pendukung? Tunjuk 1 gap koneksi ide jika ada + saran perbaikan. Runtut -> OK.
5. Saran Pilihan Kata - 1-2 vocab/frasa yang lebih natural untuk konteks sama (lexical upgrade, bukan koreksi salah).
6. Pragmatic Register Check - register responku pas untuk konteks ini? Berikan 1 frasa lebih natural jika ada yang terlalu formal/kasual. Sesuai -> OK.
7. Analisa Level CEFR - level speaking-ku saat ini + 1 tips konkret naik ke {NEXT_LEVEL}.
8. Adaptasi Sesi - lancar: tambah 1 pertanyaan lebih kompleks dari topik sama. Macet: kasih Pattern Drill (1-2 contoh kalimat pola sama) + contoh, lalu ulangi pertanyaan yang sama. Tidak blocking - sesi tetap mengalir.
LANGKAH 3 - MODE SPEAKING (trigger: Let's start speaking!):
Ajukan 3 pertanyaan satu per satu, langsung ke pertanyaan, jangan basa-basi. Setelah aku jawab, jalankan FEEDBACK 8 LANGKAH untuk jawaban itu sebelum pindah pertanyaan. Transkrip jawabanku ke Inggris, feedback dalam Bahasa Indonesia. Pujian singkat hanya di akhir sesi, tulus, tidak berlebihan.
```

> **Catatan disengaja:** tidak ada langkah Repeat After Me (Grammar §4.3) dan tidak ada Box of Words/Writing Challenge (Vocab) — sesuai pembagian modul PRD. Pelafalan ditangani non-blocking via langkah 2️⃣. Trigger = **"Let's start speaking!"** persis, persona = **Kak Ara** (bukan "Bro Arule"), tanpa klaim hak cipta. Wording original — bukan parafrase sampel kompetitor di §1.

### 6.2 Variable Fields

| Field | Isi | Contoh (A1 Day 1) |
|---|---|---|
| `{TOPIC_NAME}` | Nama topik/situasi speaking hari itu | `Introducing Yourself` |
| `{SAPAAN}` / `{PANGGILAN}` | Dari profil user (auto-fill) | `Kak` / `Arif` |
| `{LEVEL}` / `{LEVEL_NAME}` / `{NEXT_LEVEL}` | Kode + nama CEFR | `A1` / `Beginner` / `A2` |
| `{LANG_RULE}` | Instruksi bahasa per level (lihat §3.1) | A1: `Koreksi dan penjelasan dalam Bahasa Indonesia, tiap kalimat Inggris diberi terjemahan.` |
| `{SPEAKING_Q1/2/3_EN}` | Pertanyaan Inggris dalam `**...**` | `**What is your name and where are you from?**` |
| `{SPEAKING_Q1/2/3_ID}` | Terjemahan dalam `*...*` | `*Siapa namamu dan dari mana asalmu?*` |

**Variasi `{LANG_RULE}` per level (ringkas, hemat karakter — selaras §3.1):**
- **A1/A2:** `Koreksi dan penjelasan dalam Bahasa Indonesia, tiap kalimat Inggris diberi terjemahan.`
- **B1:** `Penjelasan & feedback dalam Bahasa Indonesia, label fungsi komunikatif pakai English (giving opinion, making suggestions). Terjemahan hanya untuk 3 pertanyaan speaking & frasa contoh.`
- **B2:** `Use English as the main language. Bahasa Indonesia hanya untuk catatan singkat di poin nuansa pelafalan/intonasi yang berisiko salah paham.`
- **C1/C2:** `All explanations, corrections, and feedback in English only. No Indonesian translation.`

> Catatan: berbeda dari Grammar, Speaking **tidak** menambahkan Self-Check Pertama di C1/C2 — PRD §4.4 tidak menyebutkan mekanisme itu untuk Speaking (lihat §3.2 catatan & §8 untuk usulan terpisah jika product owner menginginkannya).

### 6.3 Estimasi Ukuran & Audit RULE 1–6

Dihitung dengan template **terisi penuh nilai A1 Day 1 — Introducing Yourself** (worst-case A1: terjemahan penuh + 8 langkah feedback). Metode: `len()` untuk raw chars, `urllib.parse.quote()` untuk URL-encoded chars (metode sama dengan §1.5 & grammar_analysis.md §6.3).

| Metrik | Hasil | Batas | Status |
|---|---|---|---|
| Raw chars (terisi) | **~2.820** *(+261 setelah Discourse Check & Pragmatic Register)* | < 3.200 | ✅ AMAN |
| URL chars (aktual `urllib.parse.quote`) | **~3.850** *(estimasi; under 4.000 "sangat aman")* | < 4.500 | ✅ SANGAT AMAN |
| Estimasi formula `30 + raw×1.42` | **~4.034** | < 4.500 | ✅ (estimasi formula sedikit tinggi dari aktual — lihat catatan) |
| Blank lines internal | 0 | 0 | ✅ RULE 2 |
| Separator `---` | 0 | 0 | ✅ RULE 2 |
| Header behavior | 2 baris ringkas | 2 baris | ✅ RULE 3 |
| Instruksi per-langkah | Keyword/format singkat | keyword | ✅ RULE 4 |
| Emoji di teks prompt | 0 | 0 | ✅ RULE 5 |
| Differentiator dipertahankan | Persona Kak Ara, 3–5 Frasa Siap Pakai, 3 speaking Q, Feedback 8 Langkah (Tabel Perbandingan, Catatan Pelafalan fonetik UK, Kelancaran, Discourse & Coherence Check, Pilihan Kata, Pragmatic Register Check, Analisa CEFR, Adaptasi Sesi), trigger "Let's start speaking!" | — | ✅ RULE 6 |

> **Catatan budget (setelah update 8 Langkah):** A1 worst-case (~3.850 URL) tetap di bawah 4.000 "sangat aman" ✅ — lebih hemat dari Grammar (~4.350 URL) karena Speaking tidak punya 5 contoh kalimat + Repeat After Me verbose. Level B2–C2 **lebih pendek lagi** (`{LANG_RULE}` English ringkas + terjemahan ID hilang). **Tetap hitung ulang per day** karena pertanyaan speaking yang panjang (terutama B2–C1 yang argumentatif) bisa menambah ~200–500 chars — masih jauh di bawah 4.500, tapi wajib di-verify (checklist §7.4).

---

## ✅ 7. ATURAN BAKU IMPLEMENTASI — WAJIB SEBELUM MENULIS DAY SPEAKING BARU

Checklist tunggal (*single source of truth*) supaya tiap Day Speaking (semua level) konsisten. **Baca ini sebelum menulis materi Day baru** — jangan menebak.

### 7.1 Persona & Bahasa (tidak berubah antar Day)
- [ ] Nama AI = **Kak Ara**, personal AI Coach dari Inggrisin Yuk. Tunjukkan personality lewat gaya, jangan sebut diri "seru"/"asyik". Humble (rendah hati, tidak menggurui).
- [ ] Sapaan = `{SAPAAN} {PANGGILAN}` auto-fill dari profil, jangan diketik manual.
- [ ] `{LANG_RULE}` sesuai level (§3.1 / §6.2) — A1/A2 Indonesia, B1 hybrid, B2 English-dominant, C1/C2 full English.
- [ ] **JANGAN** tambah Self-Check Pertama (itu Grammar/Vocab C1/C2; PRD §4.4 tidak menyebutkannya untuk Speaking — kalau diinginkan, ajukan terpisah, lihat §8).

### 7.2 Mekanisme (sesuai prd_user.md §4.4 — JANGAN ubah)
- [ ] LANGKAH 1 = penjelasan materi speaking ringkas + **3–5 frasa contoh siap pakai** (format dialog singkat) + siapkan **3 pertanyaan speaking** yang memaksa fungsi komunikatif topik itu.
- [ ] Trigger speaking = **"Let's start speaking!"** (bukan "I'm ready to practice").
- [ ] Feedback = **8 langkah** (§2.3): Tabel Perbandingan → Catatan Pelafalan (fonetik UK `/ /`) → Analisa Kelancaran & Naturalness → Discourse & Coherence Check → Saran Pilihan Kata → Pragmatic Register Check → Analisa Level CEFR → Adaptasi Sesi.
- [ ] **TIDAK ADA Repeat After Me wajib-blocking** (itu Grammar §4.3) — pelafalan dikoreksi via langkah 2️⃣, sesi tetap mengalir.
- [ ] **JANGAN** impor Box of Words / Writing Challenge / Mode Cerita / 5W+1H (itu modul Vocab).

### 7.3 Konten Topik
- [ ] Topik diambil dari kurikulum §5 untuk level itu — A1 verbatim PRD, A2–C2 dari §5.2–5.6.
- [ ] 3 pertanyaan speaking **benar-benar memaksa** fungsi komunikatif target (topik "Giving Opinions" → pertanyaan harus memaksa user menyatakan & mempertahankan opini, bukan sekadar fakta).
- [ ] Catatan Pelafalan: siapkan fitur fonetik UK yang tepat untuk level (segmental di A1–A2, suprasegmental di B1+ — §3.2).
- [ ] Non-overlap: cek topik tidak mengulang fungsi level bawah (lihat catatan non-overlap §5.2–5.6).

### 7.4 URL-Safety (RULE 1–6)
- [ ] Tidak ada blank lines internal di string prompt.
- [ ] Tidak ada emoji di teks prompt (AI yang generate emoji di output).
- [ ] Tidak ada separator `---` di dalam prompt.
- [ ] Hitung `url = 30 + raw × 1.42` → harus < 4.500 (idealnya < 4.000); verifikasi aktual dengan `urllib.parse.quote`.
- [ ] Test klik link di browser sebelum deploy.

### 7.5 Tempat Plug-in di Codebase (mengikuti pola Vocab yang sudah ada)
- Source per level: `materi/<level>/speaking.md` (dokumentasi day-by-day, skeleton 6 sub-bagian seperti §2.1 / pola `materi/a1/vocab.md`) → lalu `materi/<level>/speaking_prompt.md` (versi tuned/padat siap encode).
- Encode sekali → `inggrisinyuk-app/lib/materi/speaking-<level>.ts` (array `SPEAKING_A1_DAYS` dst, **pola file & helper sama dengan** `lib/materi/vocabulary-a1.ts` — jangan buat pola baru per modul, lihat CLAUDE.md §5).
- Render-time: helper `buildSpeakingUrl()` / `buildSpeakingPrompt()` setara `buildVocabUrl()` (precompute, 2× `.replace()`, tanpa `encodeURIComponent()` saat klik — architecture.md §6.3).
- UI: `inggrisinyuk-app/app/dashboard/[module]/page.tsx` sudah menangani modul lewat param `[module]` — Speaking tinggal nambah array day + helper, pola identik dengan Vocabulary.
- Progress: saat user klik link ChatGPT, tulis ke `topic_progress` (CLAUDE.md §4 — jangan andalkan `useState`). Skor Day 31 → `module_test_results`.

---

## 🚀 8. NEXT STEPS

Dokumen ini (acuan) membuka pekerjaan lanjutan berikut, dikerjakan **per level** (jangan sekaligus 6 level):

1. **Validasi kurikulum A2–C2** dengan user/product owner — terutama lapisan **C2 (ekstrapolasi tertinggi, §5.7: ~22/30 topik adalah craft/precision/register, bukan fungsi komunikatif baru)** dan sebagian item nuansa C1/B2. Konfirmasi framing "C2 = kualitas eksekusi" sebelum menulis prompt C2.
2. **Keputusan terbuka — Self-Check Speaking di C1/C2?** Grammar & Vocab punya Self-Check Pertama di level lanjut (prd_user.md §5.6); Speaking PRD §4.4 tidak menyebutkannya. Tanyakan apakah product owner ingin menambahkan mekanisme self-correction setara untuk Speaking C1/C2, atau sengaja membiarkan Speaking lebih mengalir (rekomendasi: biarkan mengalir — Speaking mengutamakan kelancaran, dan menambah self-check bisa mengganggu ritme percakapan).
3. **Tulis `materi/a1/speaking.md`** dulu (level paling siap — topik sudah final di PRD) mengikuti skeleton 6 sub-bagian (§2.1) dan ATURAN BAKU (§7). Pakai Template Master §6.
4. **Tuning → `materi/a1/speaking_prompt.md`** (versi padat siap encode), lalu encode ke `lib/materi/speaking-a1.ts` + helper `buildSpeakingUrl()`.
5. **Sambungkan ke UI & progress** — tambah Speaking ke `app/dashboard/[module]/page.tsx` + tulis `topic_progress` saat klik.
6. **Ulangi A2 → B1 → B2 → C1 → C2** dengan pola yang sama, naikkan `{LANG_RULE}` & fokus Catatan Pelafalan (segmental→suprasegmental, §3.2) per level.
7. **Day 31 Placement Test Speaking** per level (§5.8) — 5–7 pertanyaan dirotasi dari Day 1–30 level itu, telusur-balik ke Day asal untuk rekomendasi spesifik; skor & rekomendasi ditulis ke `module_test_results`.

---

*Dokumen ACUAN — Speaking Analysis. Disusun 2026-06-27. Mekanisme mengikuti prd_user.md §4.4 (6 langkah Mekanisme Belajar + Feedback 8 Langkah, tanpa Repeat After Me blocking & tanpa Box of Words); constraint URL mengikuti prompt_recommendation.md RULE 1–6; kurikulum A2–C2 ter-riset CEFR (§4). A1 verbatim PRD, tidak diubah. Diperbarui 2026-06-27: Feedback 6 Langkah diperkaya jadi 8 Langkah dengan Discourse & Coherence Check (langkah 4️⃣, Tsunemoto & Trofimovich 2024) dan Pragmatic Register Check (langkah 6️⃣, Bardovi-Harlig & Dörnyei 1998). URL worst-case A1: ~3.850 (sangat aman, di bawah 4.000).*
