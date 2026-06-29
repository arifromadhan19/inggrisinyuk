# ANALISIS & ROADMAP MATERI ROLEPLAY — SEMUA LEVEL (A1–C2)
**Aplikasi:** Inggrisin Yuk | **AI Tutor:** Kak Ara | **Modul:** Roleplay Practice (Modul 5)
**Cakupan:** Analisis kompetitor (Inggrisku.AI/Kampung Inggris) + riset SLA/CEFR untuk roleplay + sistem pemilihan tokoh baru + template master 6 level (A1–C2)
**Status dokumen:** ACUAN (reference) — dipakai sebagai dasar saat menulis `materi/<level>/roleplay.md` dan `materi/<level>/roleplay_prompt.md`, serta dasar update `prd_user.md` §4.6.

> **Catatan penting sebelum baca:** Dokumen ini **tidak** menulis 180 prompt day-by-day. Yang ada di sini: analisis kompetitor verbatim (termasuk audit URL-safety aktual dari prompt mereka), **sistem pemilihan tokoh baru** (2 mode + persistence), struktur sesi & Feedback 8 Langkah Roleplay, evolusi per level, metodologi riset (CEFR Companion Volume + SLA roleplay/drama research + benchmark kompetitor komersial), daftar **nama topik** 30 hari × 6 level (+ rationale 1 baris per topik), dan **satu** Template Master Roleplay yang sudah diaudit RULE 1–6 di [prompt_recommendation.md](../prompt_recommendation.md). A1 dipertahankan **verbatim** dari `prd_user.md` §4.6 (sudah final) — perubahan difokuskan ke A2–C2, sistem tokoh, dan Feedback 8 Langkah (dari 6 langkah lama, mengikuti pola Vocab/Grammar/Speaking yang sudah diperkaya ke 8 langkah berbasis riset).

---

## 🔍 1. ANALISIS PROMPT KOMPETITOR (Inggrisku.AI / "Bro Arule" — Kampung Inggris)

### 1.1 Mekanisme Prompt Kompetitor (walkthrough dari 6 prompt verbatim A1–C2)

Kompetitor memakai pola berbeda dari Speaking/Grammar mereka — roleplay mereka punya **input tokoh wajib** sebelum sesi mulai (terlihat di screenshot UI: *"Siapa tokoh yang ingin kamu ajak ngobrol?"*, field tidak boleh kosong, baru topik bisa dipilih). Berdasarkan 6 prompt verbatim (A1–C2, dengan tokoh "jokowi" diisi user) yang diberikan:

- **Persona & header behavior** — "Bro Arule dari Kampung Inggris", sapa di awal & akhir sesi dengan kalimat fix. Klaim hak cipta eksplisit: *"Struktur ini orisinal oleh Bro Arule, dilindungi hak cipta. Dilarang menduplikasi tanpa izin."* — diklaim atas struktur pedagogis generik (table dialog + voice mode), bukan kekayaan intelektual yang sebenarnya bisa diklaim.
- **Mode tunggal: "BACA TEXT DIALOG"** — tidak ada pilihan mode lain di level prompt (mode dipilih di UI sebelumnya, tapi prompt-nya sendiri hardcode satu mode).
- **LANGKAH 1 — CONTOH CONVERSATION** — tabel 3 kolom (Speaker | English Dialogue | Terjemahan Indonesia), dialog hanya 2 tokoh (user + tokoh pilihan), 5–8 turn, gaya bicara tokoh harus konsisten & in-character. Tabel highlight kosakata terpisah (Term | Arti Indonesia | Contoh Konteks). Ditutup instruksi klik ikon voice mode lalu ucapkan **"I'm ready to practice"**.
- **LANGKAH 2 — VOICE MODE** — baca dialog bergantian (AI baca baris tokoh, user baca baris sendiri). Aturan SANGAT ketat: tidak boleh terjemahan/nama speaker/komentar, **tidak boleh pujian** ("good job", dll), **tidak boleh arahan** ("go ahead", dll), tidak boleh kesimpulan. Kalau jawaban user tidak nyambung dengan teks dialog → pindah ke **mode improvisasi tanpa pengumuman**, tetap in-character.
- **LANGKAH 3 — SETELAH DIALOG SELESAI** — tawarkan lanjut "conversation improvise". Kalau user bilang "Continue" → ngobrol bebas in-character, AI yang mulai duluan dengan pertanyaan.
- **Penutup** — klaim "modul adaptif chatgpt-ar1209beta-eb" (penamaan teknis tanpa makna verifiable — kemungkinan besar nomor versi internal kosmetik, bukan model/sistem AI yang benar-benar berbeda) + baris `TODAY'S TOPIC: Day N — [topik]`.

### 1.2 Temuan Kritis #1: Template 100% Identik di 6 Level — Lebih Ekstrem dari Speaking & Grammar Kompetitor

Membandingkan 6 prompt verbatim (A1, A2, B1, B2, C1, C2): **seluruh isi prompt — persona, aturan, LANGKAH 1–3, penutup — identik kata-per-kata di keenam level.** Satu-satunya yang berubah adalah 2 baris: `Level bahasa Inggrisku: [X]` dan `TODAY'S TOPIC: Day N — [topik]`. Bahkan instruksi "Panjang dialog: 5–8 turn... sesuaikan kompleksitas dengan levelku" hanya berupa **kalimat generik** yang menyuruh AI berimprovisasi sendiri soal kompleksitas — tidak ada kontrol konten apa pun dari sisi kompetitor.

Ini **lebih ekstrem** dari temuan Speaking kompetitor (`speaking_analysis.md` §1.2: "reuse berpasangan" A1=A2, B1=B2, C1=C2 — minimal masih 3 tingkat kompleksitas topik berbeda) dan sebanding dengan temuan Grammar kompetitor (1 pool topik untuk semua level). Untuk Roleplay, kompetitor bahkan tidak mencoba mendiferensiasi topik **maupun** instruksi kompleksitas — satu-satunya sumber variasi adalah **tokoh yang diketik user sendiri**, yang tidak dikontrol levelnya sama sekali. Implikasinya serius: user A1 (pemula) yang mengetik "Jokowi" (atau tokoh apa pun yang punya gaya bicara formal/kompleks) akan mendapat dialog dengan AI berimprovisasi bebas tanpa batasan kompleksitas bahasa — berisiko jauh di atas level user, bertentangan dengan prinsip *Zone of Proximal Development* (Vygotsky) yang mendasari seluruh pendekatan scaffolding Inggrisin Yuk (lihat `prd_user.md` §5.5).

### 1.3 Temuan Kritis #2: Tidak Ada Personality Guide untuk Tokoh — AI Berimprovisasi Tanpa Kontrol

Prompt kompetitor hanya menulis satu baris: *"Gaya bicara, ekspresi, dan kepribadian dalam dialog HARUS sesuai karakter [tokoh] dan konsisten sepanjang dialog. Kalau tokoh fiksi, ambil referensi dari filmnya. Kalau non-fiksi, ambil dari cerita hidupnya."* Ini instruksi yang **benar arahnya tapi sangat tipis** — tidak ada mekanisme kalibrasi kesulitan interaksi, tidak ada panduan bagaimana AI harus menyesuaikan kepribadian tokoh dengan level belajar user, dan **tidak ada opsi selain mengetik nama tokoh** (tidak ada cara mendeskripsikan karakter custom tanpa nama, lihat §2.2 untuk solusi kita).

Risiko tambahan: tokoh yang dicontohkan UI kompetitor sendiri ("Elon Musk, Taylor Swift, Polisi...") mencampur figur publik nyata yang masih hidup dengan peran fungsional generik — tanpa disclaimer atau batasan, ini membuka risiko reputasi (AI berimprovisasi "menjadi" tokoh publik nyata dalam dialog yang sepenuhnya di luar kendali konten — termasuk kemungkinan menghasilkan ucapan yang terasa merugikan reputasi tokoh tersebut).

### 1.4 Temuan Kritis #3: Zero Structured Feedback

Kompetitor **tidak punya feedback sama sekali** — bandingkan dengan modul Speaking mereka yang setidaknya punya 1 lapis ("kalimat user → versi native, tanpa tabel", lihat `speaking_analysis.md` §1.2). Roleplay kompetitor bahkan tidak punya itu: sesi berakhir begitu user berhenti chat, tidak ada trigger evaluasi, tidak ada skor, tidak ada rekomendasi naik level. Ini berarti **user tidak pernah tahu** apakah roleplay yang baru dijalani sudah bagus atau masih banyak kesalahan — bertentangan dengan riset *corrective feedback* (Lyster & Ranta, 1997; Ellis, *Language Teaching* — lihat §4) yang menunjukkan feedback terstruktur pasca-aktivitas adalah komponen penting pembelajaran lewat roleplay, bukan opsional.

### 1.5 Yang Dilakukan Kompetitor dengan Baik (kita pertahankan & perbaiki)

1. **Tabel dialog 3 kolom (Speaker | English | Indonesia)** — format visual yang jelas dan mudah diikuti. **Kita pertahankan**, tambah tabel Frasa Kunci terpisah (kompetitor sudah punya ini juga — *"tabel highlight: Term | Arti Indonesia | Contoh Konteks"* — kita pertahankan sebagai diferensiator BOW-style yang konsisten dengan modul lain).
2. **Trigger eksplisit untuk masuk voice/acting mode** — mencegah AI lompat ke mode salah sebelum user siap. **Kita pertahankan** konsepnya, ganti kata trigger agar konsisten dengan modul lain (lihat §2.3).
3. **Fallback otomatis ke improvisasi saat user keluar skrip** — ide bagus, mencegah sesi macet kalau user menjawab di luar dialog. **Kita pertahankan**, tapi beri AI instruksi tetap mengarahkan ke topik (bukan improvisasi liar tanpa arah).
4. **Aturan ketat "no praise/no direction" selama mode baca** — secara mengejutkan ini **keputusan desain yang benar** untuk fase membaca-bergantian: pujian/arahan di tengah baca dialog akan memutus imersi dan ritme percakapan. **Kita pertahankan persis** untuk fase ini — feedback tetap ada, tapi dipindah ke akhir sesi (§2.4), bukan dihapus sepenuhnya seperti yang terjadi pada kompetitor.
5. **Sapaan tokoh ditentukan sepenuhnya oleh user** — fleksibilitas memilih siapa saja sebagai lawan bicara adalah inti motivasi roleplay (lihat riset *Ideal L2 Self*, §4). **Kita pertahankan dan kembangkan** lewat sistem 2-mode (§2.2).

### 1.6 Audit URL-Safety Kompetitor (RULE 1 & 2)

Dihitung dari prompt A1 verbatim kompetitor (tokoh "jokowi", Day 1 — First Meeting at School), metode sama dengan `speaking_analysis.md` §1.5 (`len()` untuk raw chars, `urllib.parse.quote()` untuk URL-encoded):

| Metrik | Hasil kompetitor | Batas RULE 1/2 | Status |
|---|---|---|---|
| Raw chars | **~1.450** | < 3.200 | ✅ AMAN |
| URL chars (estimasi `30+raw×1.42`) | **~2.090** | < 4.500 | ✅ AMAN |
| Blank lines internal | 0 | 0 | ✅ |
| Separator `---` | 0 | 0 | ✅ |

**Catatan jujur:** sama seperti Speaking & Grammar kompetitor, prompt Roleplay mereka juga lolos RULE 1/2 dengan margin sangat besar — bahkan lebih pendek dari Speaking kompetitor (2.260 URL chars) karena tidak ada instruksi feedback sama sekali. Ini menegaskan ulang pola yang sudah ditemukan di `speaking_analysis.md` §1.5 dan `grammar_analysis.md`: **masalah kompetitor sama sekali bukan soal budget karakter** — mereka punya banyak ruang tersisa yang tidak dipakai untuk feedback, personalisasi tokoh, atau diferensiasi level. Pelajaran untuk kita: karena prompt Roleplay tanpa feedback secara alami sangat ringkas, kita punya **budget besar** untuk menambahkan sistem tokoh 2-mode + Feedback 8 Langkah tanpa mendekati batas — lihat perhitungan aktual template kita di §6.3 (hasil: ~2.650–2.690 raw, jauh di bawah 3.200).

### 1.7 Strategi Diferensiasi Inggrisin Yuk (Roleplay)

| Differentiator | Kompetitor | Inggrisin Yuk Roleplay |
|---|---|---|
| Sistem pemilihan tokoh | 1 mode: ketik nama tokoh bebas, wajib diisi, tanpa hint selain 1 contoh placeholder | **2 mode**: Tokoh Terkenal (nyata/fiksi) ATAU Custom Character (deskripsi bebas) — dengan hint per form (§2.2) |
| Kalibrasi kesulitan interaksi per level | Tidak ada — tokoh apa pun, level apa pun, AI improvisasi bebas tanpa batas | Eksplisit: kepribadian tokoh dipertahankan, tapi **tingkat kesulitan interaksi** (kooperatif vs menantang) dikalibrasi ke CEFR level user (§3.3) |
| Persistence tokoh antar-Day | Tidak ada — user ketik ulang nama tokoh setiap sesi baru | Tokoh tersimpan, ditawarkan "lanjut sama [tokoh] atau ganti?" saat pindah topik (§2.2) |
| Kurikulum CEFR | Template identik 6 level, hanya beda nama topik (tidak terkontrol kompleksitasnya) | 6 kurikulum ter-riset, non-overlapping, 30 topik/level + kalibrasi kepribadian tokoh per level (§3.3, §5) |
| Lapis feedback | 0 lapis — sesi berakhir tanpa evaluasi apa pun | 8 lapis terstruktur (§2.4), trigger `end` |
| Penilaian level CEFR ke user | Tidak ada | Ada (langkah 7️⃣) + Day 31 test tersimpan ke `module_test_results` |
| Mode baca vs improvisasi | 2 mode terpisah secara konsep, tapi flow-nya sebenarnya sudah mengalir (baca → improvise) | Mengadopsi flow mengalir yang sama (improvement atas PRD lama kita yang memisahkan "Read & Convo" vs "Improvise Convo" sebagai 2 pilihan di awal — lihat §2.3) |
| Persona | Bro Arule, gender binary, klaim hak cipta atas struktur pedagogis generik | Kak Ara sebagai narator tetap (bukan digantikan tokoh), sapaan fleksibel dari profil, tanpa klaim eksklusivitas berlebihan |
| Trigger acting mode | "I'm ready to practice" | **"Let's act it out!"** (konsisten gaya dengan "Let's start speaking!" modul Speaking, tapi distinct secara tematik) |
| Risiko tokoh publik nyata | Dicontohkan bebas (Elon Musk, Taylor Swift) tanpa disclaimer | Custom Character mode mengurangi dependensi ke figur publik nyata untuk skenario yang sebenarnya fungsional (barista, dokter, dll) |

---

## 📐 2. STRUKTUR MATERI ROLEPLAY PER SESI

### 2.1 Komponen Setiap Day

**1. Detail Materi**
Setiap day = 1 skenario sosial/interaksional spesifik (misal: Day 1 A1 — Meeting New People). Skenario selalu melibatkan **lawan bicara** (tokoh/karakter) yang dipilih user — beda dari Speaking yang Q&A monolog, Roleplay selalu dialogis dua arah.

**2. Sistem Pemilihan Tokoh** (lihat detail §2.2) — dipilih SEKALI per sesi pertama, lalu ditawarkan untuk dipertahankan atau diganti di Day berikutnya.

**3. Detail Dialog Contoh + Frasa Kunci**
Dialog contoh 5–8 turn (tabel 3 kolom: Speaker | English | Terjemahan Indonesia) sesuai topik & kepribadian tokoh, ditutup tabel **Frasa Kunci** (5–8 frasa/idiom penting, format: Frasa | Arti | Contoh Konteks) — pola BOW-style yang konsisten dengan diferensiator modul lain (`prompt_recommendation.md` RULE 6).

**4. Detail Practice — Baca Bergantian → Improvisasi**
Trigger **"Let's act it out!"** memulai mode baca bergantian (AI baca baris tokoh, user baca baris sendiri, tanpa pujian/arahan/komentar selama fase ini — dipertahankan dari kelebihan kompetitor, §1.5). Begitu dialog skrip selesai, ditawarkan lanjut improvisasi bebas tanpa teks, tetap in-character. Trigger bantuan selama improvisasi: `clue` (hint singkat, tetap in-character setelahnya), `pause` (Kak Ara keluar karakter sebentar untuk jawab pertanyaan), `how to say...` (terjemahan singkat).

**5. Detail Review & Feedback (8 Langkah)**
Trigger `end` memicu Feedback 8 Langkah (detail metodologi §2.4) — Kak Ara "keluar" dari karakter dan kembali sebagai coach untuk evaluasi terstruktur. Ini satu-satunya titik di sesi roleplay tempat feedback eksplisit muncul — selama dialog/improvisasi berjalan, tidak ada interupsi koreksi (konsisten dengan riset Ellis soal *online vs offline corrective feedback*, §4 — koreksi dipusatkan di debrief terstruktur supaya tidak memutus flow percakapan).

**6. PROMPT siap pakai**
Prompt lengkap siap di-encode ke URL ChatGPT, mengikuti Template Master Roleplay (§6) dengan variabel terisi nilai asli, termasuk variabel tokoh (`{CHARACTER_LINE}`, `{CHARACTER_GUIDE}`, `{CHARACTER_REF}`) dari sistem pemilihan tokoh.

### 2.2 Sistem Pemilihan Tokoh — 2 Mode (Diferensiator Baru)

Perbaikan langsung atas kelemahan kompetitor (§1.3): kompetitor hanya punya 1 cara (ketik nama tokoh bebas, tanpa hint memadai, tanpa opsi lain). Inggrisin Yuk menyediakan **2 mode eksplisit**, ditampilkan sebagai tab (pola UI yang sama dengan halaman Subscription `prd_user.md` §3.2 — *"Daftar dengan WA / Daftar dengan Google"*, jadi user sudah familiar dengan pola tab pilihan ini):

```
┌──────────────────────────────────────────────────┐
│  Mau ngobrol sama siapa hari ini?                │
│                                                   │
│  [ 🎭 Tokoh Terkenal ]  [ ✏️ Buat Karaktermu ]    │  ← tab pilihan
│                                                   │
│  Tab "Tokoh Terkenal" aktif (default):            │
│  Tulis nama tokoh nyata atau fiksi yang ingin     │
│  kamu ajak ngobrol — boleh dari sejarah, publik   │
│  figur, film, series, anime, atau buku.           │
│  [ Contoh: Sherlock Holmes, BJ Habibie...    ]    │
│  ⓘ AI akan berakting seperti tokoh ini.          │
│                                                   │
│  Tab "Buat Karaktermu" (jika diklik):             │
│  Deskripsikan kepribadian, profesi, atau ciri     │
│  khas lawan bicara impianmu — bebas berkreasi!    │
│  [ Contoh: Pria ramah bersuara merdu, profesi-    │
│    nya pilot, suka bercanda dan selalu positif ] │
│  ⓘ Karaktermu akan terasa hidup & konsisten.     │
│                                                   │
│  [ Mulai Roleplay → ]                            │
└──────────────────────────────────────────────────┘
```

**Aturan UI:**
- Hanya **satu mode aktif** per sesi (mutually exclusive, seperti tab WA/Google) — tidak bisa isi keduanya.
- Field wajib diisi di mode mana pun (tidak bisa lanjut kalau kosong) — mempertahankan kelebihan kompetitor (§1.5 poin 1: wajib isi tokoh sebelum lanjut), tapi sekarang dengan 2 jalur valid bukan 1.
- Hint singkat ditampilkan permanen di bawah input (bukan hanya placeholder yang hilang saat user mulai mengetik) — supaya user tetap paham konteks instruksi sambil mengisi.
- Placeholder contoh dirotasi per modul/Day agar tidak terasa statis (opsional, prioritas rendah — lihat §8).

**Persistence & Konfirmasi Ganti Tokoh:**

Tokoh/karakter yang dipilih disimpan (di profil user atau local storage tergantung implementasi — lihat §7.6) supaya tidak perlu diketik ulang setiap Day. Saat user membuka topik Day baru dalam modul Roleplay dan ada tokoh tersimpan dari sesi sebelumnya, sistem menampilkan modal konfirmasi **sebelum** generate URL:

```
┌──────────────────────────────────────────┐
│  Lanjut ngobrol sama Sherlock Holmes?    │
│                                          │
│  [ Lanjut dengan Sherlock Holmes ]       │  ← reuse tokoh tersimpan
│  [ Ganti Tokoh/Karakter ]                │  ← buka form 2-mode lagi
└──────────────────────────────────────────┘
```

**Rasional desain (mengapa ini lebih baik dari kompetitor):**
1. **Mengurangi friksi berulang** — kompetitor memaksa user mengetik ulang nama tokoh di setiap sesi baru, tidak ada memori. Friksi ini bertentangan dengan prinsip *reduce cognitive load* yang juga jadi filosofi desain Babbel Speak ("calming design and scaffolded learning approach reduce cognitive load and anxiety" — lihat §4).
2. **Mendukung kontinuitas relasi** — user yang konsisten ngobrol dengan tokoh yang sama lintas Day membangun semacam "hubungan berkelanjutan" dengan lawan bicaranya, mendekati pengalaman serial drama — sekaligus tetap memberi pilihan ganti untuk variasi/kebutuhan latihan adaptasi ke kepribadian baru.
3. **Custom Character membuka skenario yang secara alami janggal kalau dipaksa pakai tokoh publik** — topik seperti "Asking a Stranger for Directions" atau "Talking to a Mechanic" jauh lebih natural dengan karakter custom ("ibu-ibu pedagang yang ramah") dibanding memaksa user memikirkan selebriti yang masuk akal untuk peran itu. Ini selaras dengan riset *Strategic Interaction* Di Pietro (§4) — peran fungsional yang jelas (bukan sekadar nama tokoh) adalah inti desain skenario yang efektif.
4. **Tokoh Terkenal tetap dipertahankan** karena divalidasi riset *Ideal L2 Self* (Dörnyei) dan *Imagined Communities* (Norton, §4) — roleplay dengan figur yang user "ingin jadi dekat dengannya" meningkatkan *willingness to communicate*. Dua mode ini saling melengkapi, bukan salah satu menggantikan yang lain.
5. **Mengurangi risiko reputasi** dari penggunaan nama tokoh publik nyata di luar kendali konten kita (§1.3) — dengan menyediakan Custom Character sebagai alternatif setara, user tidak "dipaksa" memakai figur publik nyata hanya karena tidak ada pilihan lain.

### 2.3 Alur Sesi (User Flow) — Satu Sesi Mengalir, Bukan 2 Mode Terpisah

**Perbaikan struktural atas PRD lama:** `prd_user.md` §4.6 versi sebelumnya membagi Roleplay jadi 2 sub-modul terpisah yang harus dipilih user **di awal** — "Read & Convo" vs "Improvise Convo". Setelah menganalisis kompetitor (§1.1), ironisnya kompetitor justru sudah melakukan hal yang lebih baik: flow mereka **mengalir otomatis** dari dialog terskrip → baca bergantian → tawaran improvisasi, **tanpa** memaksa user memilih mode di muka. Memaksa pilihan mode di awal menambah satu titik keputusan yang tidak perlu (cognitive overhead) dan berisiko ada user yang melewatkan dialog terskrip (sumber Frasa Kunci & contoh natural) hanya karena memilih "Improvise Convo" duluan — padahal scaffolding dialog terskrip penting terutama di level rendah (prinsip *fading scaffold*, Vygotsky ZPD, konsisten dengan `prd_user.md` §5.5).

**Rekomendasi: gabungkan jadi satu flow** (menggantikan tabel "Sub-Modul Roleplay Practice" lama di PRD §4.6):

```
User klik topik Roleplay di dashboard (misal: Day 5 — Movie or Series Talk)
         ↓
Tokoh tersimpan dari Day sebelumnya? → Modal "Lanjut/Ganti" (§2.2)
Belum ada tokoh tersimpan? → Form 2-mode (§2.2)
         ↓
ChatGPT terbuka dengan prompt sudah terisi (topik + level + tokoh)
         ↓
Kak Ara: sapa singkat + jelaskan situasi 1-2 kalimat
+ Dialog Contoh 5-8 turn (tabel 3 kolom, tokoh in-character)
+ Tabel Frasa Kunci (5-8 frasa penting dari dialog)
         ↓
User aktifkan mode suara 🎙️, lalu bilang: "Let's act it out!"
         ↓
BACA BERGANTIAN — Kak Ara (sebagai tokoh) baca baris tokoh,
user baca baris sendiri. Tanpa pujian/arahan/komentar (§1.5).
         ↓
Jawaban user keluar skrip? → pindah ke IMPROVISASI tanpa pengumuman,
tetap in-character, lanjutkan dari situ secara natural
         ↓
Dialog skrip selesai → tawarkan lanjut improvisasi bebas
(trigger bantuan selama improvisasi: clue / pause / how to say...)
         ↓
User ucapkan "end" → Kak Ara KELUAR dari karakter, kembali sebagai coach
         ↓
FEEDBACK 8 LANGKAH (§2.4):
(Tabel Momen Kunci → Saran Pilihan Kata → Grammar Highlights →
 Discourse & Turn-Taking → Pragmatic & Register Check →
 Catatan Pelafalan → Analisa Level CEFR → Momen Terbaik)
         ↓
User kembali ke app → topik otomatis tertandai ✓ (progress +1)
```

### 2.4 Tabel Metodologi Feedback 8 Langkah (Roleplay)

Diperkaya dari 6 Langkah lama PRD (Naturalness Check, Vocabulary Choice, Grammar Highlights, Flow & Fluency, Analisa CEFR, Highlight Terbaik) menjadi 8 Langkah — mengikuti pola Vocab/Grammar/Speaking yang sudah diperkaya berbasis riset (`prd_user.md` §5.6–5.7). Dua langkah baru (4️⃣ Discourse & Turn-Taking, 5️⃣ Pragmatic & Register Check) spesifik untuk **dimensi interaksional** yang hanya muncul di Roleplay (Speaking adalah monolog Q&A, Roleplay adalah dialog dua arah dengan lawan bicara yang punya cue sosial sendiri).

| # | Langkah | Aturan Konten | Dasar Riset/Rationale |
|---|---|---|---|
| 1️⃣ | Tabel Momen Kunci | 2–3 kalimat user paling representatif selama sesi \| versi native speaker. ≥95% natural: tandai OK. | **Noticing Hypothesis** (Schmidt) — sama seperti Speaking Langkah 1️⃣ (`speaking_analysis.md` §2.3), tapi mengambil snapshot lintas sesi (bukan per-jawaban) karena Roleplay berjalan sebagai dialog kontinu, bukan Q&A bertahap. |
| 2️⃣ | Saran Pilihan Kata | 1–2 vocab/frasa lebih natural untuk konteks yang sama (lexical upgrade, bukan koreksi kesalahan). | **Lexical Approach** (Lewis, 1993) — konsisten dengan diferensiator Frasa Siap Pakai di modul lain (`prd_user.md` §4.2 Langkah 6️⃣). |
| 3️⃣ | Grammar Highlights | Ringkas — maksimal 2 pola error terpenting, **bukan** daftar lengkap semua kesalahan. | **Focused corrective feedback** lebih efektif dari koreksi menyeluruh (Lyster & Ranta 1997 — taksonomi 6 jenis oral CF: recasts, explicit correction, clarification request, metalinguistic feedback, elicitation, repetition; `l2aquisition.wordpress.com` review atas taksonomi ini). Membatasi ke pola terpenting mencegah *cognitive overload* di debrief, konsisten dengan kebijakan Koreksi 8 Langkah Vocab (`prd_user.md` §4.2). |
| 4️⃣ | Discourse & Turn-Taking | Apakah respons user nyambung dengan *cue* sosial dari lawan bicara (tokoh)? Apakah giliran bicara mengalir natural, bukan jawaban yang mengabaikan apa yang baru dikatakan tokoh? Tunjuk 1 gap koneksi jika ada + saran. Runtut → OK. | **Spesifik untuk dialog interaktif** (beda dari Speaking yang monolog) — selaras prinsip *discourse coherence* (Tsunemoto & Trofimovich 2024, sudah dipakai di `speaking_analysis.md` §2.3 langkah 4️⃣) yang diperluas ke konteks dua-arah: di roleplay, "koherensi" berarti merespons isi & nada lawan bicara, bukan cuma struktur kalimat sendiri yang benar. |
| 5️⃣ | Pragmatic & Register Check | Apakah respons user sesuai konteks sosial & kepribadian lawan bicara (tokoh)? Terlalu formal untuk tokoh kasual, atau sebaliknya? 1 alternatif jika kurang pas, sesuai → OK. | **Pragmatic competence dalam speech acts** (Bardovi-Harlig & Dörnyei 1998, EJ567536 — sudah dipakai di `speaking_analysis.md` §2.3 langkah 6️⃣; diperkuat oleh Frontiers in Education 2024 yang menekankan pentingnya *metapragmatic awareness* untuk mencegah negative pragmatic transfer dari L1). Di Roleplay, register harus dicocokkan ke **kepribadian tokoh** secara spesifik — dimensi yang tidak ada di modul lain karena hanya Roleplay punya lawan bicara berkarakter. |
| 6️⃣ | Catatan Pelafalan | Kata yang pelafalannya janggal/salah selama sesi + simbol fonetik UK dalam `/ /` + catatan singkat cara ucap. Tidak ada isu: tulis "-". | **Intelligibility Principle** (Levis 2005) — konsisten dengan Speaking Langkah 2️⃣ (`speaking_analysis.md` §2.3), prioritas pelafalan yang paling mengganggu keterpahaman. |
| 7️⃣ | Analisa Level CEFR | Penilaian level roleplay user saat ini + 1 tips konkret naik ke level berikutnya. C2: reframe jadi "mempertahankan Mastery" (selaras pola C2 di `prd_user.md` §5.6). | **CEFR Companion Volume action-oriented approach** — titik referensi konkret posisi user dalam skala kompetensi interaksional (lihat §4 untuk sumber skala *Spoken Interaction*). |
| 8️⃣ | Momen Terbaik | Kutip 1–2 kalimat terbaik user selama sesi sebagai apresiasi tulus, tidak berlebihan — penutup positif. | Dipertahankan dari versi 6 Langkah PRD lama (sudah jadi diferensiator vs kompetitor yang nol feedback) — selaras prinsip pujian Kak Ara hanya di akhir sesi (`prd_user.md` §5.4) dan riset motivasi: menutup sesi dengan apresiasi konkret memperkuat *willingness to communicate* untuk sesi berikutnya. |

> **Perbedaan disengaja dari Speaking §2.3:** Roleplay **tidak** punya langkah "Adaptasi Sesi" eksplisit di Feedback (Speaking langkah 8️⃣) — karena adaptivitas Roleplay terjadi **selama** dialog berlangsung (lewat kalibrasi kepribadian tokoh per level, §3.3), bukan di titik feedback. Sebagai gantinya, Roleplay mempertahankan **Momen Terbaik** sebagai penutup — elemen yang sudah ada di PRD lama dan terbukti jadi diferensiator kuat vs kompetitor (zero feedback). Roleplay juga **tidak** mengimpor Box of Words/Writing Challenge (milik Vocab) atau Repeat After Me wajib-blocking (milik Grammar) — sesuai pembagian modul yang sudah baku di `prd_user.md`.

---

## 🎯 3. EVOLUSI BAHASA, FEEDBACK & KEPRIBADIAN TOKOH PER LEVEL (A1→C2)

Prinsip diadaptasi dari `prd_user.md` §5.5 (kebijakan bahasa progresif) & §5.6 (audit evolusi per langkah Vocab) — sama dengan pendekatan `speaking_analysis.md` §3: **struktur 8 langkah tetap konstan di semua level** (ritual prosedural yang user kenali sejak A1), yang berubah secara sengaja adalah bahasa pengantar, kedalaman penjelasan, dan **dimensi baru khusus Roleplay: kalibrasi kesulitan kepribadian tokoh** (§3.3).

### 3.1 Kebijakan Bahasa per Level (diadaptasi dari `prd_user.md` §5.5)

| Level | Bahasa dialog & Frasa Kunci | Bahasa Feedback 8 Langkah | Terjemahan | Porsi Indonesia (estimasi) |
|---|---|---|---|---|
| **A1** | Indonesia dominan untuk setup, dialog contoh selalu disertai terjemahan | Full Indonesia | Semua baris dialog & Frasa Kunci disertai terjemahan | ~90% |
| **A2** | Indonesia dominan, dialog contoh disertai terjemahan | Indonesia | Sama seperti A1, mulai dikurangi di Frasa Kunci sekunder | ~75% |
| **B1** | Indonesia dominan untuk setup & arahan, label fungsi komunikatif (*making a complaint*, *giving advice*) makin sering English | Indonesia, istilah pragmatik/fungsi dalam English | Dialog & Frasa Kunci tetap terjemahan lengkap (user wajib paham sebelum bisa roleplay — sama prinsip dengan `prd_user.md` §5.5 poin B1) | ~60% |
| **B2** | English mulai dominan untuk setup | English, catatan Indonesia hanya untuk poin berisiko miskonsepsi pragmatik | Hanya jika risiko miskonsepsi | ~25% |
| **C1** | Full English | Full English | Tidak ada | ~5% (istilah sangat teknis saja) |
| **C2** | Full English (gaya native) | Full English, singkat seperti native feedback | Tidak ada | 0% |

### 3.2 Evolusi Tiap Langkah Feedback Roleplay (A1 → C2)

| Langkah | A1–A2 | B1 | B2 | C1 | C2 |
|---|---|---|---|---|---|
| 1️⃣ Tabel Momen Kunci | Kalimat pendek & literal jadi fokus, native version sangat sederhana | Mulai tunjukkan >1 alternatif natural | Native version menyertakan pilihan register (casual vs sedikit formal) | Catatan ringkas kenapa versi native lebih natural, bukan sekadar benar | Hanya slip halus — fokus geser ke nuansa di langkah 4️⃣–5️⃣ |
| 2️⃣ Saran Pilihan Kata | Vocab dasar pengganti yang lebih umum dipakai native | Lexical chunks/collocation dasar untuk skenario | Collocation lebih presisi + connotation check | Idiomatic expression & register-appropriate phrasing | Pilihan kata untuk craft retoris/nuansa, bukan sekadar "lebih natural" |
| 3️⃣ Grammar Highlights | Maks 2 pola error, bahasa sangat encouraging | Sama, mulai sebut istilah grammar English | Maks 1-2 pola, dalam English | 🔎 Self-Check ringkas (tunjuk lokasi tanpa jawaban) sebelum 1 pola tersisa ditampilkan | Jarang muncul — hanya slip halus, 1 kalimat tajam |
| 4️⃣ Discourse & Turn-Taking | Apakah user merespons sama sekali terhadap cue tokoh (vs diam/ganti topik tiba-tiba)? | Apakah respons nyambung dengan ide tokoh sebelumnya (and/but/because)? | Apakah user membangun di atas argumen/poin tokoh, bukan cuma menjawab literal? | Apakah user mengelola giliran bicara saat tokoh menantang/interupsi? | Apakah user membaca subteks/nada tersembunyi tokoh dan merespons tepat? |
| 5️⃣ Pragmatic & Register Check | Sangat sederhana: terlalu formal/kasual untuk tokoh ramah dasar | Mulai cek kesesuaian dengan mood/situasi tokoh (sibuk, santai) | Cek register saat tokoh mulai menantang/skeptis | Cek kehalusan diplomatik saat tokoh tegang/hostile | Cek nuansa & implicature — apakah user menangkap maksud tersirat tokoh |
| 6️⃣ Catatan Pelafalan | Segmental — vokal/konsonan individual dari interferensi Indonesia | Segmental + word stress dasar | Suprasegmental: sentence stress, rhythm | Intonasi untuk makna pragmatik (penekanan, nada skeptis) | Prosodi & timing native, koreksi langka |
| 7️⃣ Analisa CEFR | Tips naik ke A2, sangat encouraging | Sebut sub-skill spesifik (fluency vs accuracy interaksional) | Fokus ke ketangguhan menjaga argumen | Fokus ke spontanitas & presisi diplomatik di bawah tekanan | Reframe: tips **mempertahankan** Mastery |
| 8️⃣ Momen Terbaik | Kutipan sederhana, pujian sangat hangat | Sama | Kutipan yang menunjukkan keberanian mempertahankan posisi | Kutipan yang menunjukkan kehalusan diplomatik | Kutipan yang menunjukkan craft retoris/nuansa native-level |

### 3.3 Evolusi Kalibrasi Kepribadian & Kesulitan Tokoh per Level (Dimensi Baru — Tidak Ada di Modul Lain)

Ini dimensi desain **unik untuk Roleplay** yang tidak dimiliki modul lain (Speaking tidak punya lawan bicara berkarakter) dan **sama sekali tidak dipikirkan kompetitor** (§1.2 — tokoh apa pun, level apa pun, AI berimprovisasi tanpa batas kesulitan). Prinsipnya: **identitas/kepribadian dasar tokoh tetap dihormati** (kalau user pilih "bos yang galak", tokoh itu tidak dipaksa jadi penyabar total), tapi **tingkat kesulitan interaksi** (seberapa banyak tokoh menantang, menyela, atau butuh effort ekstra dari user) dikalibrasi naik seiring level CEFR — selaras *Zone of Proximal Development* (Vygotsky, sudah jadi prinsip dasar di `prd_user.md` §5.5).

| Level | Kalibrasi Kesulitan Interaksi Tokoh | Instruksi ke AI (ringkas) |
|---|---|---|
| **A1–A2** | Tokoh tetap kooperatif, sabar, bicara pelan & jelas — meski personanya unik/galak secara default, performanya "dilunakkan" demi kelancaran latihan. | "Karakter tetap sabar & kooperatif meski personanya unik — prioritaskan aku lancar berlatih." |
| **B1** | Tokoh boleh punya mood/kesibukan realistis (sedikit terburu-buru, agak ketus di awal), tapi tetap beri ruang user merespons dengan baik — tidak benar-benar menyulitkan. | "Karakter boleh realistis (mood, sibuk) tapi tetap beri aku ruang merespons." |
| **B2** | Tokoh boleh aktif menantang/push back sesuai personanya — mendorong user mempertahankan posisi, bukan cuma mengikuti arus. | "Karakter boleh menantang & push back sesuai personanya — dorong aku mempertahankan posisi." |
| **C1–C2** | Tokoh boleh sepenuhnya menantang, skeptis, emosional, atau bahkan manipulatif sesuai personanya — tidak dilunakkan sama sekali, user dituntut menangani level kesulitan penuh. | "Karakter boleh sepenuhnya menantang/skeptis sesuai personanya — tidak perlu dilunakkan, aku harus bisa handle." |

**Implikasi desain skenario (§5):** karena kalibrasi ini berlaku **terlepas dari tokoh yang dipilih user**, kurikulum topik A1–A2 secara alami berisi skenario berkonflik rendah (tokoh ramah, situasi predictable), sedangkan B2–C2 secara alami memuat skenario yang **menuntut** lawan bicara menantang (negosiasi, mediasi konflik, krisis) — supaya instruksi kalibrasi di atas punya sesuatu yang nyata untuk dieksekusi, bukan instruksi kosong.

---

## 📚 4. METODOLOGI RISET

Kurikulum & sistem feedback Roleplay **tidak** ditebak — di-grounding ke riset CEFR, SLA, dan benchmark produk komersial yang diverifikasi lewat web research nyata.

| Sumber | Apa & kenapa relevan | URL (diverifikasi) |
|---|---|---|
| **Council of Europe — CEFR Companion Volume (2020)** | Skala **Spoken Interaction** (conversation, informal discussion, goal-oriented co-operation, transactions/obtaining goods & services) per level A1–C2 — anchor utama desain skenario Roleplay karena Roleplay secara definisi adalah interaksi lisan dua-arah, bukan monolog. | https://rm.coe.int/common-european-framework-of-reference-for-languages-learning-teaching/16809ea0d4 ; tool pencarian descriptor: https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors-search |
| **CEFR Companion Volume — Action-Oriented Approach** | Menjelaskan kerangka "language use as social action" yang mendasari mengapa skenario/tugas simulasi (termasuk roleplay) adalah unit pedagogis CEFR, bukan tambahan opsional. | https://rm.coe.int/the-cefr-companion-volume-and-the-action-oriented-approach/1680a97137 |
| **Di Pietro (1987) — *Strategic Interaction: Learning Languages through Scenarios*** | Pendekatan klasik yang menjadikan skenario dengan **peran fungsional jelas** (bukan sekadar nama tokoh) sebagai unit latihan — minimal 2 peran berinteraksi (contoh klasik: hotel clerk & guest), siswa menyusun dialog sendiri sambil guru jadi konsultan. Mendasari keputusan desain §2.2 bahwa Custom Character (peran fungsional) sama validnya dengan Tokoh Terkenal. | https://eric.ed.gov/?id=ED238284 ; https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/abs/strategic-interaction-learning-languages-through-scenarios-robert-j-dipietro-new-york-cambridge-university-press-1987-pp-ix-155/ED9A8EF0AC2D047417E7CE1027172E76 |
| **Maley & Duff (1978/1982) — *Drama Techniques in Language Learning*** | Karya fondasional yang mengaitkan teknik drama dengan pengembangan kompetensi linguistik & paralinguistik lewat partisipasi penuh tubuh/suara — dasar konseptual mengapa "akting" (bukan cuma menjawab pertanyaan) punya nilai pedagogis tersendiri dibanding Speaking biasa. | https://www.cambridge.org/core/books/drama-techniques/24D79808606D55B9DE8249FEAE7AB50D |
| **Lyster & Ranta (1997) — taksonomi 6 jenis oral corrective feedback** | Recasts, explicit correction, clarification request, metalinguistic feedback, elicitation, repetition. Dasar keputusan Langkah 3️⃣ (Grammar Highlights) membatasi ke pola terpenting, bukan koreksi menyeluruh. | https://l2aquisition.wordpress.com/wp-content/uploads/2017/06/corrective-feedback-over-a-decade-of-research-since-lyster-and-ranta-1997-where-do-we-stand-today.pdf |
| **Ellis — "Oral Corrective Feedback in Second Language Classrooms"** (*Language Teaching*, Cambridge Core) | Kerangka klasifikasi CF berdasarkan timing (online saat tugas berjalan vs offline setelah selesai). Mendasari keputusan desain memusatkan koreksi di debrief 8 Langkah pasca-`end`, bukan menyela dialog/improvisasi yang sedang berjalan. | https://www.cambridge.org/core/journals/language-teaching/article/abs/oral-corrective-feedback-in-second-language-classrooms/B33FC71C12A1317DCA0CE704B7B0BC00 |
| **Dörnyei — Ideal L2 Self / Imagined Identities** | Learner yang bisa memproyeksikan diri ke identitas masa depan yang diinginkan menunjukkan investasi & motivasi lebih besar. Memerankan tokoh berstatus tinggi (lewat roleplay) mengaktifkan mekanisme "imagined identity" ini, meningkatkan *willingness to communicate* — dasar riset Mode "Tokoh Terkenal" (§2.2). | https://files.eric.ed.gov/fulltext/EJ1171160.pdf |
| **Norton — Imagined Communities, Identity, and English Language Learning** | Learner yang mengidentifikasi diri dengan kelompok sosial yang diinginkan (termasuk figur publik yang dikenal) menunjukkan investasi lebih tinggi dalam latihan speaking. | https://www.researchgate.net/publication/226241279_Imagined_Communities_Identity_and_English_Language_Learning |
| **Frontiers in Education (2024) — Teaching Speech Acts in EFL Context** | Speech act harus diajarkan dalam *full discourse sequence* (bukan ujaran terisolasi); pentingnya *metapragmatic awareness* mencegah negative pragmatic transfer dari L1; penilaian kompetensi speech act idealnya multi-modal. Mendasari Langkah 4️⃣ & 5️⃣ Feedback 8 Langkah. | https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2024.1423498/full |
| **Studi quasi-eksperimental movie/TV clips untuk pragmatic competence** (12 minggu, EFL learners) | Kelompok eksperimen yang dapat instruksi pragmatik lewat klip film/series terkenal menunjukkan peningkatan signifikan dalam produksi *requests* & *suggestions* dibanding kelompok kontrol — mendukung (dengan hati-hati, satu studi) gagasan bahwa karakter yang dikenal bisa jadi model input pragmatik yang efektif. *Catatan kejujuran: temuan ini diukur lewat Written Discourse Completion Test, bukan roleplay lisan — dipakai sebagai dukungan tidak langsung, bukan bukti langsung efektivitas roleplay lisan.* | https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9646295/ |
| **Duolingo Max — AI Roleplay (GPT-4)** | Skenario roleplay ditulis manusia (course designer), bukan input bebas user; feedback AI (akurasi & kompleksitas respons) diberikan **setelah** interaksi selesai, bukan menyela — pola yang konvergen dengan keputusan desain kita memusatkan feedback di debrief. 78% pengguna reguler merasa lebih siap untuk percakapan dunia nyata setelah 4 minggu (klaim Duolingo, belum diverifikasi independen). | https://blog.duolingo.com/duolingo-max/ |
| **Babbel Speak (rilis beta, 2025)** | "Expert-curated real-life scenarios" + filosofi desain eksplisit "calming design and scaffolded learning approach reduce cognitive load and anxiety" — mendukung keputusan UI hint permanen & form yang tidak membebani (§2.2). Feedback diberikan tapi tanpa dimensi terstruktur yang dipublikasikan. | https://www.babbel.com/press/en-us/releases/babbel-speak |
| **ELSA AI (rilis 2023)** | Roleplay → beralih ke "tutor mode" → feedback pronunciation/grammar/vocabulary sebagai **dimensi terpisah dan terskor** setelah sesi selesai — pola multi-dimensi yang konvergen dengan Feedback 8 Langkah kita (meski ELSA hanya 3 dimensi, kita 8). Juga mendukung user-defined scenario, mirip semangat Custom Character (§2.2). | https://elsaspeak.com/en/faqs/elsa-ai-feature |
| **ChatGPT Role-play Dataset Study (arXiv 2403.18121)** | Analisis motif user memilih roleplay dengan ChatGPT — tokoh terkenal/fiksi sering dipilih karena kepribadian & gaya bicaranya yang sudah dikenal **mengurangi cognitive load** dan memberi "skrip interaksi" yang jelas, mendukung validitas Mode "Tokoh Terkenal" sebagai pilihan yang rendah-friksi secara kognitif. | https://arxiv.org/html/2403.18121v1 |

**Catatan kejujuran sumber:** CEFR Companion Volume adalah sumber paling otoritatif untuk skala *Spoken Interaction* per level — konvergen kuat untuk A1–B2 (transaksi sederhana → rutin → narasi & opini → argumentasi & negosiasi). Untuk **C1–C2**, pola yang sama dengan temuan `speaking_analysis.md` §4 dan `grammar_analysis.md` berlaku: CEFR sendiri mendeskripsikan level lanjut sebagai **kualitas eksekusi** (presisi, kehalusan, kemampuan menangani tekanan) ketimbang fungsi/peran baru — sehingga kurikulum C2 kita (§5.6) **sengaja** memuat lebih banyak skenario presisi/diplomasi/nuansa dibanding "fungsi baru", diberi label jujur sebagai ekstrapolasi lebih tinggi di §5.7. Beberapa temuan empiris spesifik (misal angka studi movie/TV clips) berasal dari **satu studi** dan dipakai sebagai dukungan tidak langsung, bukan bukti definitif — konsisten dengan standar kejujuran sumber yang sudah dipakai di dokumen analisis modul lain.

---

## 📋 5. KURIKULUM 30 TOPIK ROLEPLAY PER LEVEL

Aturan: A1 = **verbatim** `prd_user.md` §4.6, tidak diubah. A2–C2 = hasil riset §4, **non-overlapping**, dirancang dengan **peran lawan bicara (counterpart) yang jelas** di setiap topik (selaras Strategic Interaction, Di Pietro) dan tingkat konflik/kesulitan interaksi yang naik bertahap sesuai kalibrasi §3.3. Progresi: A2 = transaksi dengan komplikasi sederhana → B1 = navigasi situasi tak-terduga & emosional → B2 = argumentasi/negosiasi dengan lawan bicara yang menantang → C1 = mediasi & negosiasi taruhan tinggi → C2 = presisi/diplomasi/nuansa (kualitas eksekusi, bukan fungsi baru).

> **Catatan perbedaan dengan Speaking:** beberapa nama domain (hotel, restoran, dokter) bisa terdengar mirip antar modul karena keduanya memang mengambil dari situasi hidup nyata yang sama. Perbedaannya ada di **mekanik**: Speaking = user menjawab pertanyaan Q&A tentang topik tersebut (monolog terstruktur); Roleplay = user benar-benar **berperan** dalam dialog dua-arah dengan lawan bicara yang merespons, punya mood, dan bisa memberi komplikasi/tantangan. Topik di bawah sengaja dipilih berbeda dari daftar `speaking_analysis.md` §5 sejauh mungkin, dan setiap topik diberi "kait" interaksional (komplikasi/ketegangan) yang membuatnya hanya masuk akal sebagai dialog, bukan monolog.

### 5.1 LEVEL A1 (Beginner) — SUDAH DIPUTUSKAN, TIDAK DIUBAH

Daftar ini **verbatim** dari `prd_user.md` §4.6.

**Day 1–21 — Core A1:**

| Day | Topik | Day | Topik |
|---|---|---|---|
| 1 | Meeting New People | 12 | Room/Apartment Inquiry |
| 2 | Talking About Days | 13 | Community Event Talk |
| 3 | Weekend Activity Plans | 14 | Reacting to News |
| 4 | Discussing the Weather | 15 | Sharing Achievements |
| 5 | Movie or Series Talk | 16 | Daily Problem Advice |
| 6 | Asking About Hobbies | 17 | Group Activity Planning |
| 7 | Borrowing Household Items | 18 | How-To Explanation |
| 8 | Transportation Plan Talk | 19 | Conversation Follow-Up |
| 9 | Comparing Product Choices | 20 | Health & Wellness Talk |
| 10 | Simple Etiquette Talk | 21 | Giving Helpful Suggestions |
| 11 | Delivery Problem Help | | |

> 🌉 **Jembatan ke A2 (Day 22–30):** topik berikut melibatkan situasi lebih kompleks — perasaan, keluhan, klarifikasi, konflik kecil, storytelling. Menuntut kelancaran & improvisasi A2.

**Day 22–30 — A1→A2 Bridge:**

| Day | Topik | Day | Topik |
|---|---|---|---|
| 22 | Talking About Feelings | 27 | Asking for Clarification |
| 23 | Making Simple Complaints | 28 | Handling Misunderstandings |
| 24 | Telling Short Stories | 29 | Solving Small Conflicts |
| 25 | Asking About Experiences | 30 | Ordering Coffee Drinks |
| 26 | Discussing Future Plans | | |

**Day 31 — Level Placement Test**

**Validasi CEFR (singkat):** topik Day 1–21 konvergen dengan CEFR A1 *Spoken Interaction* (transaksi & sosial sangat dasar, predictable, lawan bicara kooperatif) — selaras kalibrasi §3.3 (A1 = tokoh tetap sabar & kooperatif).

### 5.2 LEVEL A2 (Elementary) — RISET BARU, NON-OVERLAPPING

Rationale grup: A2 = **transaksi dengan komplikasi sederhana** yang butuh penyelesaian (barang rusak, kamar tertukar, barang hilang) — beda dari A1 yang sosial/predictable tanpa "masalah" untuk dipecahkan. Lawan bicara: staf toko, dokter, sopir, tetangga — tetap kooperatif (kalibrasi §3.3) tapi situasinya butuh negosiasi kecil.

| Day | Topik | Rationale (1 baris) |
|---|---|---|
| 1 | Checking Into a Hotel (Room Mix-Up) | Transaksi + komplikasi sederhana — CEFR A2 "obtaining goods & services". |
| 2 | Ordering at a Restaurant (Item Unavailable) | Perluasan A1 Day 30 — butuh memilih alternatif, bukan cuma memesan. |
| 3 | Asking a Shopkeeper for the Right Size | Transaksi belanja dengan klarifikasi (A2 transactions). |
| 4 | Returning a Faulty Item to a Shop | Komplikasi transaksi — A2 problem-solving sederhana. |
| 5 | Visiting a Doctor for a Minor Illness | Survival situation A2 — deskripsi simptom + ikuti saran. |
| 6 | Buying a Bus or Train Ticket | Transaksi perjalanan — perluasan A1 Day 8. |
| 7 | Asking a Neighbor for a Small Favor | Interaksi sosial dengan permintaan (A2 socialising). |
| 8 | Talking to a Hairdresser About a New Style | Transaksi jasa dengan negosiasi preferensi. |
| 9 | Booking an Appointment Over the Phone | Transaksi telepon — A2 Companion Volume "telephoning". |
| 10 | Bargaining at a Local Market | Negosiasi harga sederhana — A2 transactions. |
| 11 | Asking a Police Officer for Directions | Survival + otoritas — perluasan A1 Day 12 dengan tokoh berperan resmi. |
| 12 | Chatting with a Ride-Hailing Driver | Small talk + transaksi perjalanan modern. |
| 13 | Meeting a Friend's Family for the First Time | Interaksi sosial dengan kesopanan ekstra (A2 socialising). |
| 14 | Asking a Landlord About a Rental Problem | Komplikasi domestik — perluasan A1 Day 12. |
| 15 | Reporting a Lost Item at an Office | Survival/komplikasi — A2 transactions. |
| 16 | Making Small Talk While Waiting in Line | Interaksi sosial spontan dengan orang asing. |
| 17 | Asking a Librarian for Book Recommendations | Transaksi informasi + preferensi personal. |
| 18 | Telling a Waiter About a Food Allergy | Transaksi dengan kebutuhan khusus — butuh kejelasan. |
| 19 | Asking for Help at the Post Office | Survival/transaksi administratif. |
| 20 | Getting to Know a New Coworker | Interaksi sosial profesional dasar. |
| 21 | Asking a Pharmacist About Medicine | Survival — kesehatan dengan otoritas/saran. |
| 22 | Planning a Weekend Trip with a Friend | Perluasan A1 Day 3 — kini dengan negosiasi preferensi. |
| 23 | Talking to a Gym Trainer About a Program | Transaksi jasa + preferensi personal. |
| 24 | Asking a Vet About Pet Care | Survival/transaksi dengan kekhawatiran personal. |
| 25 | Asking a Tour Guide for Recommendations | Transaksi informasi wisata. |
| 26 | Negotiating a Better Price While Shopping | Negosiasi eksplisit — perluasan Day 10. |
| 27 | Talking to a Mechanic About a Problem | Transaksi dengan penjelasan masalah teknis sederhana. |
| 28 | Catching Up with an Old Friend | Interaksi sosial naratif — perluasan A1 Day 25. |
| 29 | Asking a Teacher for Extra Help | Interaksi sosial/edukasi dengan permintaan. |
| 30 | Mini Roleplay Practice (Combining A2 Functions) | Konsolidasi fungsi A2 sebelum Placement Test. |

> **Non-overlap check A2:** A1 = sosial/transaksi sangat predictable tanpa komplikasi; A2 = **transaksi dengan komplikasi yang butuh diselesaikan** (barang rusak, kamar tertukar, alergi, barang hilang) + lawan bicara berperan resmi/profesional (polisi, dokter, apoteker) yang belum muncul di A1. Tetap kooperatif sesuai kalibrasi §3.3.

### 5.3 LEVEL B1 (Intermediate) — RISET BARU, NON-OVERLAPPING

Rationale grup: B1 = **navigasi situasi tak-terduga/emosional** yang butuh narasi & opini beralasan — beda dari A2 yang sekadar "selesaikan masalah transaksional". Lawan bicara mulai punya mood realistis (kalibrasi §3.3) tapi belum benar-benar menantang.

| Day | Topik | Rationale (1 baris) |
|---|---|---|
| 1 | Explaining a Travel Delay to a Hotel Receptionist | Narasi + negosiasi solusi — B1 "deal with situations while travelling". |
| 2 | Negotiating a Refund for Bad Service | Opini beralasan + negosiasi — B1 expressing attitudes. |
| 3 | Discussing a Roommate Conflict | Interaksi emosional — B1 goal-oriented co-operation. |
| 4 | Giving Advice to a Friend Going Through a Hard Time | Empati + saran beralasan — B1 expressing attitudes. |
| 5 | Convincing a Friend to Try Something New | Persuasi ringan — jembatan ke B2. |
| 6 | Explaining a Misunderstanding to a Coworker | Repair komunikasi — perluasan A2 Day 4/A1 Day 28. |
| 7 | Asking a Doctor to Explain a Diagnosis Clearly | Klarifikasi otoritas — B1 information exchange. |
| 8 | Discussing Study or Career Plans with a Mentor | Narasi rencana + alasan — B1 future + ambitions. |
| 9 | Handling a Customer Complaint (You're the Staff) | Perspektif terbalik — melatih empati & de-eskalasi dasar. |
| 10 | Asking an Insurance Agent About a Claim | Transaksi kompleks dengan penjelasan situasi. |
| 11 | Negotiating Moving-In Terms with a Landlord | Negosiasi domestik — perluasan A2 Day 14. |
| 12 | Discussing a Group Project Disagreement | Konflik kolaboratif — B1 goal-oriented co-operation. |
| 13 | Comforting a Friend After Bad News | Empati emosional — dimensi baru, belum ada di A1/A2. |
| 14 | Asking a Stranger for Help in an Emergency | Survival bertekanan — naik dari A2 Day 11. |
| 15 | Explaining Why You're Late to an Important Meeting | Penjelasan + permintaan maaf beralasan. |
| 16 | Discussing Volunteering with an NGO Staff | Topik di luar pengalaman langsung — B1 "topics of interest". |
| 17 | Talking to a Bank Officer About an Account Issue | Transaksi administratif kompleks. |
| 18 | Giving Feedback to a Service Provider | Kritik membangun ringan — jembatan ke B2. |
| 19 | Discussing a Cultural Difference with a Foreign Friend | Refleksi budaya — B1 sustained description abstrak. |
| 20 | Asking a Senior Coworker for Career Advice | Interaksi profesional dengan otoritas. |
| 21 | Negotiating Plans When Friends Disagree | Negosiasi sosial — perluasan A2 Day 22. |
| 22 | Explaining a Technical Problem to Customer Support | Penjelasan proses + kesabaran saat solusi tidak langsung ketemu. |
| 23 | Talking to a Landlord About Moving Out Early | Negosiasi domestik dengan konsekuensi. |
| 24 | Discussing a Family Disagreement Calmly | Konflik interpersonal — dimensi emosional baru. |
| 25 | Asking a Professional for a Second Opinion | Klarifikasi otoritas dengan keraguan. |
| 26 | Apologizing for a Mistake at Work | Repair profesional — perluasan B1 Day 6. |
| 27 | Discussing a Recent News Event with a Friend | Opini di luar pengalaman langsung. |
| 28 | Negotiating Deadlines with a Project Partner | Negosiasi profesional dasar — jembatan ke B2. |
| 29 | Asking for Constructive Feedback on Your Work | Kerentanan profesional + menerima kritik. |
| 30 | Mini Roleplay Practice (Combining B1 Functions) | Konsolidasi sebelum Placement Test. |

> **Non-overlap check B1:** A2 = transaksi + komplikasi yang diselesaikan bersama lawan bicara kooperatif; B1 = **situasi emosional/tak-terduga** (comfort, konflik keluarga, kesalahpahaman, kerentanan profesional) yang butuh narasi & justifikasi opini, belum ada negosiasi dengan lawan bicara yang aktif menentang (itu B2).

### 5.4 LEVEL B2 (Upper-Intermediate) — RISET BARU, NON-OVERLAPPING

Rationale grup: B2 = **argumentasi, negosiasi, dan persuasi dengan lawan bicara yang aktif menantang/push back** — dimensi adversarial baru yang belum ada di B1. Kalibrasi §3.3: tokoh mulai aktif menantang sesuai personanya.

| Day | Topik | Rationale (1 baris) |
|---|---|---|
| 1 | Negotiating a Business Deal with a Difficult Client | Negosiasi dengan resistensi — B2 "negotiate skillfully" tingkat awal. |
| 2 | Defending a Decision to a Skeptical Manager | Mempertahankan posisi — B2 "sustain views". |
| 3 | Mediating a Disagreement Between Two Friends | Mediasi ringan — jembatan ke C1. |
| 4 | Persuading a Landlord to Lower the Rent | Persuasi dengan penolakan awal dari lawan bicara. |
| 5 | Debating a Controversial Topic with a Friend | Argumentasi terbuka — B2 "develop a clear argument". |
| 6 | Handling an Unfair Accusation Calmly | Membela diri dengan tenang — kontrol emosi di bawah tekanan. |
| 7 | Negotiating a Salary or Contract Term | Negosiasi profesional bertaruh tinggi (skala kecil). |
| 8 | Discussing Ethical Dilemmas with a Colleague | Topik abstrak — B2 "abstract topics". |
| 9 | Talking Down an Angry Customer | De-eskalasi — lawan bicara aktif emosional. |
| 10 | Giving Critical Feedback to a Team Member | Kritik konstruktif — B2 diplomacy. |
| 11 | Discussing a Risky Investment with a Financial Advisor | Diskusi keputusan kompleks dengan trade-off. |
| 12 | Convincing a Skeptical Friend About a Plan | Persuasi sosial dengan resistensi. |
| 13 | Handling a Job Interview with Tough Questions | Tekanan performatif + pertanyaan menantang. |
| 14 | Negotiating Travel Plans with Conflicting Preferences | Negosiasi preferensi yang berlawanan. |
| 15 | Discussing a Sensitive Health Decision with a Doctor | Diskusi dengan bobot emosional + otoritas. |
| 16 | Resolving a Dispute Over Shared Responsibilities | Negosiasi tanggung jawab — B2 goal-oriented co-operation lanjutan. |
| 17 | Pitching an Idea to a Potential Investor | Persuasi terstruktur — B2 sustained monologue + Q&A interaktif. |
| 18 | Discussing a Controversial News Story with a Disagreeing Friend | Debat dengan sudut pandang berlawanan. |
| 19 | Handling a Complaint About Your Own Work | Menerima kritik + merespons secara matang. |
| 20 | Negotiating with a Vendor Over a Contract | Negosiasi bisnis dengan syarat. |
| 21 | Discussing Long-Term Goals with a Career Coach | Refleksi terstruktur dengan tantangan reflektif dari coach. |
| 22 | Defusing Tension During a Family Gathering | De-eskalasi sosial — dimensi keluarga. |
| 23 | Convincing a Friend to Reconsider a Bad Decision | Persuasi personal dengan resistensi emosional. |
| 24 | Discussing a Moral Dilemma with a Mentor | Topik abstrak dengan bobot etis. |
| 25 | Handling a Disagreement with a Business Partner | Konflik profesional setara (bukan atasan-bawahan). |
| 26 | Negotiating Terms After a Project Failure | Negosiasi pasca-kegagalan — tekanan akuntabilitas. |
| 27 | Discussing Cultural Misunderstandings in the Workplace | Diskusi sensitif lintas budaya. |
| 28 | Giving an Uncomfortable Truth to a Friend Diplomatically | Kejujuran sulit + diplomasi. |
| 29 | Handling Pushback on a Proposal in a Meeting | Push back langsung dari lawan bicara — puncak adversarial B2. |
| 30 | Mini Roleplay Practice (Combining B2 Functions) | Konsolidasi argumentasi + negosiasi sebelum Placement Test. |

> **Non-overlap check B2:** B1 = navigasi emosional/tak-terduga dengan lawan bicara kooperatif; B2 = **lawan bicara aktif menentang/push back** (skeptis, marah, menuntut) yang memaksa user bertahan/bernegosiasi/mempersuasi — dimensi adversarial yang belum ada di B1. Mediasi & negosiasi **diperkenalkan ringan** di B2 (Day 3, 16) lalu **diperdalam penuh** di C1 (pola sengaja, paralel dengan keputusan Speaking di `speaking_analysis.md` §5.4).

### 5.5 LEVEL C1 (Advanced) — RISET BARU, NON-OVERLAPPING

Rationale grup: C1 = **mediasi, negosiasi taruhan tinggi, dan diplomasi krisis** — lawan bicara boleh hostile/under pressure, multi-pihak. Kalibrasi §3.3: tidak dilunakkan, user dituntut menangani kesulitan penuh.

| Day | Topik | Rationale (1 baris) |
|---|---|---|
| 1 | Mediating a Heated Conflict Between Two Parties | Mediasi penuh — CEFR Mediation, C1 explicit. |
| 2 | Negotiating a High-Stakes Business Merger | Negosiasi kompleks multi-kondisi — C1 "negotiate skillfully". |
| 3 | Handling a Hostile Press Interview | Tekanan publik + pertanyaan menjebak. |
| 4 | Persuading a Skeptical Board of Investors | Persuasi tingkat tinggi ke audiens kritis. |
| 5 | De-escalating an Aggressive Customer Complaint | De-eskalasi tingkat lanjut — lawan bicara agresif. |
| 6 | Diplomatically Rejecting a Bad Business Proposal | Penolakan diplomatis tanpa merusak hubungan. |
| 7 | Negotiating a Complex Contract with Multiple Conditions | Negosiasi berlapis — C1 precision. |
| 8 | Mediating Between Two Departments in Conflict | Mediasi institusional. |
| 9 | Handling a Job Termination Conversation Tactfully | Percakapan sulit dengan kepekaan tinggi. |
| 10 | Negotiating a Sensitive Family Inheritance Matter | Negosiasi personal bertaruh emosional tinggi. |
| 11 | Defusing a Tense Political Discussion | De-eskalasi topik sensitif. |
| 12 | Persuading a Reluctant Partner to Change Strategy | Persuasi terhadap resistensi kuat. |
| 13 | Handling Accusations of Wrongdoing Professionally | Membela diri secara profesional & presisi. |
| 14 | Negotiating International Business Terms Across Cultures | Negosiasi lintas budaya — C1 precision + cultural nuance. |
| 15 | Mediating a Dispute Between Neighbors | Mediasi komunitas. |
| 16 | Discussing a Controversial Policy with a Critic | Diskusi tajam dengan oposisi tegas. |
| 17 | Handling a High-Pressure Crisis Briefing | Komunikasi krisis — C1 fluency under pressure. |
| 18 | Negotiating Terms During a Legal Dispute | Negosiasi formal bertaruh tinggi. |
| 19 | Persuading a Difficult Stakeholder to Approve a Plan | Persuasi ke stakeholder yang resisten. |
| 20 | Diplomatically Handling a Conflict of Interest | Navigasi etis dengan kehalusan. |
| 21 | Mediating a Disagreement on Ethical Grounds | Mediasi berbasis nilai/etika. |
| 22 | Negotiating with a Hard-Bargaining Supplier | Negosiasi bisnis dengan lawan keras. |
| 23 | Handling an Unexpected Scandal Calmly | Manajemen krisis personal/reputasi. |
| 24 | Discussing Sensitive Layoffs with Affected Staff | Percakapan sulit dengan empati & kejelasan. |
| 25 | Negotiating a Peace Agreement Between Rivals | Mediasi puncak — dua pihak bermusuhan. |
| 26 | Persuading a Hostile Audience at a Public Forum | Persuasi ke audiens yang menolak. |
| 27 | Mediating a Dispute Over Intellectual Property | Mediasi teknis/bisnis kompleks. |
| 28 | Handling a Tense Negotiation Under Time Pressure | Negosiasi dengan tekanan waktu. |
| 29 | Discussing a Crisis Response Strategy with the Press | Komunikasi krisis publik. |
| 30 | Mini Roleplay Practice (Combining C1 Functions) | Konsolidasi mediasi + negosiasi + presisi sebelum Placement Test. |

> **Non-overlap check C1:** B2 = argumentasi/negosiasi/persuasi diperkenalkan; C1 = **penguasaan penuh + mediasi multi-pihak + krisis/diplomasi** dengan lawan bicara yang boleh benar-benar hostile/under pressure tanpa dilunakkan (§3.3). Fungsi baru yang tidak ada di B2: mediasi formal (Day 1, 8, 15, 21, 25, 27), manajemen krisis publik (Day 17, 23, 29), negosiasi lintas budaya presisi (Day 14).

### 5.6 LEVEL C2 (Mastery) — RISET + EKSTRAPOLASI TERJUSTIFIKASI

Rationale grup: konsisten dengan pola yang sudah ditetapkan untuk C2 di `grammar_analysis.md` §5.6 dan `speaking_analysis.md` §5.6 — **C2 ≠ fungsi baru**, C2 = **kualitas eksekusi** (presisi, nuansa, komposur, membaca subteks) atas fungsi interaksional yang sudah dikuasai. Tokoh di level ini boleh sepenuhnya kompleks/manipulatif (§3.3) — user dituntut presisi penuh, bukan sekadar "bisa menjawab".

| Day | Topik | Rationale (1 baris) |
|---|---|---|
| 1 | Navigating a Diplomatic Crisis with Total Composure | Komposur penuh di tekanan tertinggi (C2 craft). |
| 2 | Persuading at the Highest Level with Subtle Rhetoric | Persuasi halus, tidak terkesan memaksa (C2 advanced suasion). |
| 3 | Handling Hostile Interrogation Without Losing Control | Kontrol diri di bawah serangan verbal. |
| 4 | Mediating Between Bitter Rivals with Total Neutrality | Netralitas presisi — C2 Mediation mastery. |
| 5 | Negotiating Life-Changing Stakes with Precision | Negosiasi taruhan ekstrem dengan ketepatan kata. |
| 6 | Defusing a Volatile Confrontation with Wit | Humor/kecerdasan sebagai alat de-eskalasi (C2 craft). |
| 7 | Reading Between the Lines in a High-Stakes Conversation | Memahami implicature (C2 pragmatic mastery). |
| 8 | Delivering Devastating News with Grace | Kehalusan menyampaikan kabar buruk. |
| 9 | Outmaneuvering a Manipulative Counterpart | Strategi verbal melawan manipulasi. |
| 10 | Handling Sarcasm and Irony Gracefully Under Pressure | Memahami & merespons ironi/sarkasme (C2 humour). |
| 11 | Negotiating Across Deep Cultural and Power Divides | Nuansa lintas budaya & kekuasaan ekstrem. |
| 12 | Responding to a Loaded, Trick Question Flawlessly | Presisi merespons pertanyaan menjebak. |
| 13 | Maintaining Composure During a Public Confrontation | Komposur publik di bawah sorotan. |
| 14 | Building Rapport with a Naturally Hostile Character | Membangun kedekatan dari titik nol negatif. |
| 15 | Steering a Conversation Away from a Dangerous Topic | Mengarahkan percakapan dengan halus (C2 discourse control). |
| 16 | Delivering Critique So Sharp It Still Builds Trust | Kritik tajam yang tetap membangun kepercayaan. |
| 17 | Reframing a Disaster as an Opportunity Mid-Conversation | Reframing spontan di tengah tekanan. |
| 18 | Handling an Impromptu, High-Pressure Negotiation | Negosiasi tanpa persiapan di bawah tekanan waktu. |
| 19 | Sensing and Defusing Unspoken Tension | Membaca & meredakan ketegangan tak terucap. |
| 20 | Persuading Someone Who Has Already Decided Against You | Persuasi dari posisi yang sangat lemah. |
| 21 | Navigating a Conversation Full of Hidden Agendas | Membaca agenda tersembunyi lawan bicara. |
| 22 | Responding to Betrayal with Composure and Strategy | Respons strategis terhadap pengkhianatan. |
| 23 | Mediating When Both Sides Believe They're Right | Mediasi tanpa pihak yang jelas salah. |
| 24 | Handling a Counterpart Who Refuses to Cooperate | Strategi menghadapi non-kooperasi total. |
| 25 | Delivering an Apology That Truly Repairs Trust | Permintaan maaf presisi yang benar-benar memperbaiki hubungan. |
| 26 | Negotiating When You Hold the Weaker Position | Negosiasi dari posisi lemah secara strategis. |
| 27 | Reading a Room and Adjusting Your Approach Instantly | Audience design instan (C2 craft). |
| 28 | Closing a Deal After Every Objection Has Been Raised | Penutupan setelah semua keberatan muncul. |
| 29 | Ending a Conflict Without Either Side Losing Face | Resolusi konflik yang menjaga martabat kedua pihak. |
| 30 | Mini Roleplay Mastery (Combining All C2 Craft Elements) | Konsolidasi presisi/nuansa/komposur sebelum Placement Test. |

> **Non-overlap check C2:** C2 **tidak** mengenalkan fungsi komunikatif baru — mediasi & negosiasi sudah ada di C1, di C2 keduanya kembali tapi pada **tingkat komposur, presisi, dan kemampuan membaca subteks/manipulasi** yang jauh lebih tinggi (lawan bicara boleh benar-benar manipulatif/hostile tanpa dilunakkan, §3.3). **Catatan kejujuran:** ini lapisan paling ber-ekstrapolasi (lihat §5.7), konsisten dengan pola C2 yang sudah ditetapkan di modul lain.

### 5.7 Ringkasan Kuantitatif: Riset vs Ekstrapolasi (150 topik baru A2–C2)

Memakai metode jujur yang sama dengan `speaking_analysis.md` §5.7 dan `grammar_analysis.md` §5.7: topik dihitung "dari sumber langsung" jika fungsi interaksionalnya muncul eksplisit sebagai can-do descriptor di **CEFR Companion Volume (Spoken Interaction/Mediation)**; dihitung "ekstrapolasi terjustifikasi" jika topik adalah penyusunan ulang/pengelompokan, atau item *kualitas eksekusi* (presisi/komposur/nuansa) yang sumbernya deskripsikan sebagai mutu, bukan fungsi diskret.

| Level | Topik | Mayoritas dari sumber langsung (CEFR Companion Volume — Spoken Interaction/Mediation) | Ekstrapolasi terjustifikasi |
|---|---|---|---|
| A2 | 30 | ~27 (Spoken Interaction A2 "obtaining goods & services" konvergen kuat) | ~3 (pengelompokan/konsolidasi) |
| B1 | 30 | ~26 (Spoken Interaction B1 + goal-oriented co-operation kuat) | ~4 |
| B2 | 30 | ~24 (Spoken Interaction B2 + sebagian mediasi/negosiasi di-split B2/C1) | ~6 |
| C1 | 30 | ~22 (Mediation C1 + Spoken Interaction C1 kuat; sebagian item krisis diekstrapolasi) | ~8 |
| C2 | 30 | ~7 (sumber: "C2 = kualitas eksekusi, bukan fungsi baru") | ~23 (presisi/komposur/nuansa/membaca subteks) |
| **Total** | **150** | **~106 (≈71%)** | **~44 (≈29%)** |

**Ringkasan:** ~71% topik baru ber-anchor langsung ke can-do descriptor CEFR Companion Volume (Spoken Interaction & Mediation scales); ~29% adalah ekstrapolasi terjustifikasi — **terkonsentrasi di C2** (23 dari 44), konsisten dengan pola yang sama di modul Speaking & Grammar. Ini **judgment call yang perlu dikonfirmasi product owner** sebelum penulisan prompt C2 (lihat §8).

### 5.8 Day 31 — Placement Test (Roleplay) per Level

Format mengikuti `prd_user.md` §4.6 (tidak diubah strukturnya, hanya dipertegas): sesi roleplay improvisasi dengan **skenario baru** (belum pernah muncul di Day 1–30 level itu) + **tokoh baru/acak** (bukan tokoh tersimpan user, supaya test mengukur adaptasi ke lawan bicara baru, bukan kenyamanan dengan tokoh yang sudah dihafal). Minimal 5 turn percakapan. Fokus: naturalness, fluency, kemampuan merespons situasi & lawan bicara yang tidak terduga (selaras kalibrasi kesulitan §3.3 — di Day 31, kesulitan interaksi dikalibrasi penuh ke level tersebut, tidak ada keringanan). Output: **Score** + penilaian keseluruhan sesi + rekomendasi naik level/perkuat level saat ini. Skor & rekomendasi **wajib** ditulis ke `module_test_results` (CLAUDE.md §4), bukan hanya state client. Bisa diulang kapan saja.

---

## 🛠️ 6. TEMPLATE MASTER PROMPT — ROLEPLAY (SEMUA LEVEL)

Satu template untuk semua day, semua level, dengan dua varian variabel tokoh (Mode A/B, §2.2). **Sudah lolos RULE 1–6** `prompt_recommendation.md` (perhitungan aktual §6.3). Mekanisme = §2.3 (flow mengalir: setup → dialog contoh → baca bergantian → improvisasi → Feedback 8 Langkah).

### 6.1 Template (raw — siap di-encode)

```
Topik: {TOPIC_NAME}
Panggil aku {SAPAAN} {PANGGILAN}.
Level bahasa Inggrisku: {LEVEL} ({LEVEL_NAME}).
{CHARACTER_LINE}
Kamu Kak Ara, AI Coach dari Inggrisin Yuk. Tugasmu memandu roleplay {TOPIC_NAME} - kamu narator yang memerankan {CHARACTER_REF} saat dialog berjalan, lalu kembali jadi Kak Ara untuk feedback.
Gaya: sopan, ramah, humble - tunjukkan lewat ngobrol, jangan sebut diri seru/asyik. {LANG_RULE} {DIFFICULTY_CALIBRATION} Pakai emoji secukupnya.
LANGKAH 1 - SETUP + DIALOG CONTOH (otomatis di awal):
Sapa singkat, jelaskan situasi {TOPIC_NAME} ini 1-2 kalimat. {CHARACTER_GUIDE}
Tampilkan dialog contoh 5-8 turn, tabel 3 kolom: Speaker | English | Terjemahan Indonesia. Speaker hanya aku dan {CHARACTER_REF}, jangan tambah tokoh ketiga.
Lalu tabel Frasa Kunci - 5-8 frasa/idiom penting dari dialog: Frasa | Arti | Contoh Konteks.
Suruh aku aktifkan mode suara lalu bilang "Let's act it out!". Jangan tanya "siap?".
LANGKAH 2 - BACA BERGANTIAN (trigger: Let's act it out!):
Baca baris {CHARACTER_REF} satu per satu, tunggu aku baca bagianku. Jangan baca bagianku. Hanya teks dialog, tanpa nama speaker/terjemahan/komentar/pujian/arahan.
Jawabanku tidak nyambung dengan teks: langsung pindah ke improvisasi tanpa pengumuman, tetap in-character, lanjutkan dari situ.
LANGKAH 3 - SETELAH DIALOG SELESAI:
Tawarkan lanjut improvisasi bebas dari topik sama, tetap in-character sebagai {CHARACTER_REF}. Trigger bantuan: "clue" (hint grammar/vocab saja, tetap in-character setelahnya), "pause" (Kak Ara keluar karakter sebentar jawab pertanyaanku), "how to say..." (Kak Ara kasih terjemahan singkat).
LANGKAH 4 - FEEDBACK 8 LANGKAH (trigger: end):
1. Tabel Momen Kunci - 2-3 kalimatku selama sesi | versi native speaker. >=95% natural: tandai OK.
2. Saran Pilihan Kata - 1-2 vocab/frasa lebih natural untuk konteks sama.
3. Grammar Highlights - ringkas, maks 2 pola error terpenting, bukan daftar lengkap.
4. Discourse & Turn-Taking - responku nyambung sama cue {CHARACTER_REF}? Tunjuk 1 gap jika ada, runtut -> OK.
5. Pragmatic & Register Check - responku sesuai konteks sosial & lawan bicara {CHARACTER_REF}? 1 alternatif jika kurang pas, sesuai -> OK.
6. Catatan Pelafalan - kata yang janggal diucapkan + fonetik UK dalam / /. Tidak ada isu: tulis "-".
7. Analisa Level CEFR - levelku saat ini + 1 tips naik ke {NEXT_LEVEL}.
8. Momen Terbaik - kutip 1-2 kalimat terbaikku selama sesi sebagai apresiasi.
Transkrip jawabanku ke Inggris, feedback dalam Bahasa Indonesia. Pujian tulus, tidak berlebihan, hanya di Langkah 8.
```

> **Catatan disengaja:** tidak ada Box of Words/Writing Challenge (milik Vocab) dan tidak ada Repeat After Me wajib-blocking (milik Grammar). Trigger acting mode = **"Let's act it out!"** persis, persona = **Kak Ara** (bukan "Bro Arule"), tanpa klaim hak cipta. Wording original — bukan parafrase sampel kompetitor di §1.

### 6.2 Variable Fields

| Field | Isi | Contoh (A1 Day 1, Mode A) |
|---|---|---|
| `{TOPIC_NAME}` | Nama topik/situasi roleplay hari itu | `Meeting New People` |
| `{SAPAAN}` / `{PANGGILAN}` | Dari profil user (auto-fill) | `Kak` / `Arif` |
| `{LEVEL}` / `{LEVEL_NAME}` / `{NEXT_LEVEL}` | Kode + nama CEFR | `A1` / `Beginner` / `A2` |
| `{CHARACTER_LINE}` | Baris tokoh, beda per mode (lihat tabel di bawah) | `Tokoh yang mau aku ajak ngobrol: Sherlock Holmes.` |
| `{CHARACTER_GUIDE}` | Instruksi akting, beda per mode | `Perankan Sherlock Holmes sesuai gaya bicara & kepribadian aslinya dari sumber aslinya, konsisten sepanjang dialog.` |
| `{CHARACTER_REF}` | Sebutan singkat dipakai berulang di prompt | Mode A: nama tokoh. Mode B: `karaktermu` (default) atau nama panggilan custom jika diisi user |
| `{LANG_RULE}` | Instruksi bahasa per level (lihat §3.1) | A1: `Koreksi dan penjelasan dalam Bahasa Indonesia, tiap kalimat Inggris diberi terjemahan.` |
| `{DIFFICULTY_CALIBRATION}` | Kalibrasi kesulitan interaksi tokoh per level (lihat §3.3) | A1/A2: `Karakter tetap sabar & kooperatif meski personanya unik - prioritaskan aku lancar berlatih.` |

**Variasi `{CHARACTER_LINE}` & `{CHARACTER_GUIDE}` per mode:**

| Mode | `{CHARACTER_LINE}` | `{CHARACTER_GUIDE}` |
|---|---|---|
| A — Tokoh Terkenal | `Tokoh yang mau aku ajak ngobrol: {CHARACTER_NAME}.` | `Perankan {CHARACTER_NAME} sesuai gaya bicara & kepribadian aslinya (kalau fiksi: dari sumber aslinya/film/buku; kalau publik figur: dari rekam jejak publiknya), konsisten sepanjang dialog.` |
| B — Custom Character | `Lawan bicara yang aku mau: {CHARACTER_DESC}.` | `Perankan karakter sesuai deskripsi ini secara konsisten sepanjang dialog.` |

**Variasi `{DIFFICULTY_CALIBRATION}` per level (ringkas, lihat §3.3 untuk rationale):**
- **A1/A2:** `Karakter tetap sabar & kooperatif meski personanya unik - prioritaskan aku lancar berlatih.`
- **B1:** `Karakter boleh realistis (mood, sibuk) tapi tetap beri aku ruang merespons.`
- **B2:** `Karakter boleh menantang & push back sesuai personanya - dorong aku mempertahankan posisi.`
- **C1/C2:** `Karakter boleh sepenuhnya menantang/skeptis sesuai personanya - tidak perlu dilunakkan, aku harus bisa handle.`

**Variasi `{LANG_RULE}` per level (selaras §3.1, format sama dengan `speaking_analysis.md` §6.2):**
- **A1/A2:** `Koreksi dan penjelasan dalam Bahasa Indonesia, tiap kalimat Inggris diberi terjemahan.`
- **B1:** `Penjelasan & feedback dalam Bahasa Indonesia, label fungsi komunikatif pakai English (making a complaint, giving advice). Dialog & Frasa Kunci tetap pakai terjemahan Indonesia lengkap.`
- **B2:** `Use English as the main language. Bahasa Indonesia hanya untuk catatan singkat di poin yang berisiko miskonsepsi pragmatik.`
- **C1/C2:** `All explanations, corrections, and feedback in English only. No Indonesian translation.`

### 6.3 Estimasi Ukuran & Audit RULE 1–6

Dihitung dengan template **terisi penuh nilai A1 Day 1 — Meeting New People** (worst-case: terjemahan penuh + Feedback 8 Langkah), kedua mode tokoh. Metode: `len()` untuk raw chars, `urllib.parse.quote()` untuk URL-encoded chars (metode sama dengan §1.6 & `speaking_analysis.md` §6.3).

| Metrik | Mode A (Tokoh Terkenal) | Mode B (Custom Character) | Batas | Status |
|---|---|---|---|---|
| Raw chars (terisi) | **2.690** | **2.647** | < 3.200 | ✅ AMAN |
| URL chars (aktual `urllib.parse.quote`) | **3.688** | **3.631** | < 4.500 | ✅ SANGAT AMAN (di bawah 4.000) |
| Blank lines internal | 0 | 0 | 0 | ✅ RULE 2 |
| Separator `---` | 0 | 0 | 0 | ✅ RULE 2 |
| Header behavior | 2 baris ringkas | 2 baris ringkas | 2 baris | ✅ RULE 3 |
| Instruksi per-langkah | Keyword/format singkat | Keyword/format singkat | keyword | ✅ RULE 4 |
| Emoji di teks prompt | 0 | 0 | 0 | ✅ RULE 5 |
| Differentiator dipertahankan | Persona Kak Ara, dialog 3 kolom, Frasa Kunci, Feedback 8 Langkah, sistem tokoh 2-mode, kalibrasi kesulitan per level, trigger "Let's act it out!" | sama | — | ✅ RULE 6 |

> **Catatan budget:** A1 worst-case (~3.690 URL Mode A) tetap di bawah 4.000 "sangat aman" ✅ — lebih hemat dari Grammar (~4.350) dan sebanding dengan Speaking (~3.850), meski Roleplay punya lebih banyak mekanisme (dialog + Frasa Kunci + sistem tokoh + Feedback 8 Langkah) karena instruksi ditulis padat sesuai RULE 4. Level B2–C2 **lebih pendek lagi** (`{LANG_RULE}` English ringkas, terjemahan hilang). **Custom Character (Mode B) dengan deskripsi sangat panjang** (di atas ~150 karakter) berpotensi mendekati budget A1 — checklist §7.5 mewajibkan validasi panjang input di UI (rekomendasi: batas karakter wajar, misal 150 karakter, untuk `{CHARACTER_DESC}`) supaya tidak ada kombinasi yang melebihi 3.200 raw.

---

## ✅ 7. ATURAN BAKU IMPLEMENTASI — WAJIB SEBELUM MENULIS DAY ROLEPLAY BARU

Checklist tunggal (*single source of truth*) supaya tiap Day Roleplay (semua level) konsisten. **Baca ini sebelum menulis materi Day baru** — jangan menebak.

### 7.1 Persona & Bahasa (tidak berubah antar Day)
- [ ] Nama AI = **Kak Ara**, tetap jadi narator/coach yang konstan — tokoh yang dipilih user adalah peran yang **diperankan** Kak Ara, bukan identitas yang menggantikan Kak Ara secara permanen.
- [ ] Sapaan = `{SAPAAN} {PANGGILAN}` auto-fill dari profil, jangan diketik manual.
- [ ] `{LANG_RULE}` sesuai level (§3.1/§6.2) — A1/A2 Indonesia, B1 hybrid, B2 English-dominant, C1/C2 full English.
- [ ] `{DIFFICULTY_CALIBRATION}` sesuai level (§3.3/§6.2) — **wajib disertakan**, ini mekanisme inti yang membedakan kita dari kompetitor (§1.2).

### 7.2 Mekanisme (sesuai §2.3 — flow mengalir, JANGAN pisah jadi 2 mode di awal)
- [ ] **JANGAN** munculkan pilihan "Read & Convo" vs "Improvise Convo" sebagai keputusan terpisah di awal (keputusan PRD lama yang sudah direvisi, §2.3) — flow harus mengalir: setup → dialog contoh + Frasa Kunci → trigger "Let's act it out!" → baca bergantian → improvisasi → `end` → Feedback 8 Langkah.
- [ ] Dialog contoh 5–8 turn, hanya 2 speaker (user + tokoh), tabel 3 kolom: Speaker | English | Terjemahan Indonesia.
- [ ] Frasa Kunci: 5–8 frasa/idiom dari dialog, tabel: Frasa | Arti | Contoh Konteks.
- [ ] Trigger acting mode = **"Let's act it out!"** (bukan "I'm ready to practice" ala kompetitor, bukan "Let's start speaking!" milik Speaking).
- [ ] Selama baca bergantian: **tidak boleh** pujian/arahan/komentar/terjemahan/nama speaker (dipertahankan dari kelebihan kompetitor, §1.5 poin 4).
- [ ] Jawaban user keluar skrip → pindah ke improvisasi **tanpa pengumuman**, tetap in-character.
- [ ] Trigger bantuan saat improvisasi: `clue`, `pause`, `how to say...` — konsisten dengan trigger yang sudah dikenal user lewat `prd_user.md` §3.7 "Tips Penggunaan Optimal".
- [ ] Feedback = **8 langkah** (§2.4): Tabel Momen Kunci → Saran Pilihan Kata → Grammar Highlights → Discourse & Turn-Taking → Pragmatic & Register Check → Catatan Pelafalan → Analisa CEFR → Momen Terbaik. Trigger = `end`.
- [ ] **TIDAK ADA** Box of Words/Writing Challenge (Vocab) atau Repeat After Me wajib-blocking (Grammar).

### 7.3 Sistem Tokoh (UI/UX — §2.2)
- [ ] Form 2-mode (Tokoh Terkenal / Custom Character) ditampilkan sebagai tab mutually-exclusive, bukan 2 field terbuka sekaligus.
- [ ] Hint tetap tampil di bawah input (tidak hilang saat user mulai mengetik) — bukan cuma placeholder.
- [ ] Field wajib diisi sebelum tombol "Mulai Roleplay" aktif (mempertahankan validasi kompetitor yang sudah benar).
- [ ] `{CHARACTER_DESC}` (Mode B) dibatasi panjang wajar di UI (rekomendasi: ~150 karakter) untuk menjaga budget URL (§6.3).
- [ ] Tokoh/karakter tersimpan per user — saat membuka Day baru dalam modul Roleplay, tampilkan modal "Lanjut dengan [tokoh]?" vs "Ganti Tokoh/Karakter" sebelum generate URL (§2.2).
- [ ] Day 31 (Placement Test) **tidak** memakai tokoh tersimpan — selalu tokoh/skenario baru (§5.8).

### 7.4 Konten Topik
- [ ] Topik diambil dari kurikulum §5 untuk level itu — A1 verbatim PRD, A2–C2 dari §5.2–5.6.
- [ ] Setiap topik baru harus punya **peran lawan bicara (counterpart) yang jelas** (selaras Strategic Interaction, Di Pietro, §4) — bukan topik abstrak tanpa lawan bicara fungsional.
- [ ] Tingkat konflik/komplikasi skenario naik sesuai level (A2: komplikasi transaksi sederhana → C2: presisi/komposur di tekanan ekstrem) — cek tabel non-overlap di §5.2–5.6 sebelum menulis Day baru.
- [ ] Catatan Pelafalan: siapkan fitur fonetik UK yang tepat untuk level (segmental di A1–A2, suprasegmental di B1+, selaras `speaking_analysis.md` §3.2).

### 7.5 URL-Safety (RULE 1–6)
- [ ] Tidak ada blank lines internal di string prompt.
- [ ] Tidak ada emoji di teks prompt (AI yang generate emoji di output).
- [ ] Tidak ada separator `---` di dalam prompt.
- [ ] Hitung `url = 30 + raw × 1.42` → harus < 4.500 (idealnya < 4.000); verifikasi aktual dengan `urllib.parse.quote`.
- [ ] Untuk Mode B (Custom Character): hitung ulang dengan deskripsi user **terpanjang yang masih wajar** (≈150 karakter) sebagai worst-case, bukan hanya contoh singkat.
- [ ] Test klik link di browser sebelum deploy.

### 7.6 Tempat Plug-in di Codebase (mengikuti pola Vocab/Speaking yang sudah ada)
- Source per level: `materi/<level>/roleplay.md` (dokumentasi day-by-day, skeleton 6 sub-bagian seperti §2.1) → lalu `materi/<level>/roleplay_prompt.md` (versi tuned/padat siap encode).
- Encode sekali → `inggrisinyuk-app/lib/materi/roleplay-<level>.ts` (array `ROLEPLAY_A1_DAYS` dst, **pola file & helper sama dengan** `lib/materi/vocabulary-a1.ts` — jangan buat pola baru, CLAUDE.md §5).
- Render-time: helper `buildRoleplayUrl()` / `buildRoleplayPrompt()` setara `buildVocabUrl()` — perlu menyisipkan `{CHARACTER_LINE}`/`{CHARACTER_GUIDE}`/`{CHARACTER_REF}`/`{DIFFICULTY_CALIBRATION}` berdasarkan mode tokoh aktif user, selain variabel topik/level standar.
- **Penyimpanan tokoh tersimpan:** rekomendasi simpan di tabel `users` (kolom baru, misal `last_roleplay_character_mode` enum `'tokoh'|'custom'` + `last_roleplay_character_value` text) supaya persist lintas device — selaras CLAUDE.md §4 (data yang harus persisten lintas device tidak boleh hanya di `localStorage`/state lokal). **Bukan** kolom progress/skor, jadi tidak masuk `topic_progress`/`module_test_results` — ini preferensi UI/personalisasi prompt, disimpan terpisah.
- UI: `inggrisinyuk-app/app/dashboard/[module]/page.tsx` sudah menangani modul lewat param `[module]` — Roleplay tinggal nambah array day + helper + komponen form 2-mode + modal konfirmasi ganti tokoh.
- Progress: saat user klik link ChatGPT (setelah form tokoh terisi/dikonfirmasi), tulis ke `topic_progress` (CLAUDE.md §4). Skor Day 31 → `module_test_results`.

---

## 🚀 8. NEXT STEPS

Dokumen ini (acuan) membuka pekerjaan lanjutan berikut, dikerjakan **per level** (jangan sekaligus 6 level):

1. **Validasi konsep sistem tokoh 2-mode** dengan user/product owner — terutama (a) batas karakter wajar untuk `{CHARACTER_DESC}`, (b) lokasi penyimpanan tokoh tersimpan (kolom `users` baru vs pendekatan lain), (c) apakah Custom Character butuh field "sebutan singkat" opsional terpisah dari deskripsi penuh untuk `{CHARACTER_REF}` yang lebih natural daripada default "karaktermu".
2. **Validasi kurikulum A2–C2** — terutama lapisan **C2 (ekstrapolasi tertinggi, §5.7: ~23/30 topik adalah craft/komposur/presisi, bukan fungsi komunikatif baru)** dan beberapa item krisis/mediasi C1 yang intens secara emosional (pastikan nada tetap sesuai persona Kak Ara yang humble & suportif meski skenarionya menegangkan).
3. **Revisi `prd_user.md` §4.6** — ganti tabel "Sub-Modul Roleplay Practice" (Read & Convo vs Improvise Convo) dengan deskripsi flow mengalir (§2.3) + tambahkan deskripsi sistem tokoh 2-mode (§2.2) + Feedback 8 Langkah (§2.4) menggantikan 6 Langkah lama. Lihat draft update di bagian akhir dokumen ini / PR terpisah ke prd_user.md.
4. **Tulis `materi/a1/roleplay.md`** dulu (topik sudah final di PRD, hanya perlu detail dialog/Frasa Kunci per Day) mengikuti skeleton §2.1 dan ATURAN BAKU §7. Pakai Template Master §6.
5. **Tuning → `materi/a1/roleplay_prompt.md`**, lalu encode ke `lib/materi/roleplay-a1.ts` + helper `buildRoleplayUrl()`.
6. **Bangun komponen UI sistem tokoh** — form 2-mode tab + modal konfirmasi ganti tokoh + validasi panjang input — sebelum modul Roleplay bisa dipakai end-to-end (ini blocker teknis baru yang tidak dimiliki modul lain).
7. **Sambungkan ke UI & progress** — tambah Roleplay ke `app/dashboard/[module]/page.tsx` + tulis `topic_progress` saat klik (setelah tokoh dikonfirmasi).
8. **Ulangi A2 → B1 → B2 → C1 → C2** dengan pola yang sama, naikkan `{LANG_RULE}` & `{DIFFICULTY_CALIBRATION}` per level (§3.1, §3.3).
9. **Day 31 Placement Test Roleplay** per level (§5.8) — skenario & tokoh baru/acak (bukan tokoh tersimpan), skor & rekomendasi ditulis ke `module_test_results`.

---

*Dokumen ACUAN — Roleplay Analysis. Disusun 2026-06-29. Mekanisme mengganti "Sub-Modul Roleplay Practice" lama (Read & Convo vs Improvise Convo terpisah) di `prd_user.md` §4.6 dengan flow mengalir tunggal (§2.3) + sistem pemilihan tokoh 2-mode baru (§2.2, usulan user) + Feedback 6 Langkah diperkaya jadi 8 Langkah (Discourse & Turn-Taking, Pragmatic & Register Check — selaras pola pengayaan feedback di Vocab/Grammar/Speaking, `prd_user.md` §5.6–5.7). Kurikulum A2–C2 ter-riset CEFR Companion Volume (Spoken Interaction & Mediation scales). A1 verbatim PRD, tidak diubah. URL worst-case A1: ~3.690 (Mode A)/~3.630 (Mode B), sangat aman di bawah 4.000.*
