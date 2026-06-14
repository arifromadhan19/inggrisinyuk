# INGGRISIN YUK — PRODUCT REQUIREMENTS DOCUMENT (PRD)
**Aplikasi Belajar Bahasa Inggris Berbasis AI**
**Iterasi 1 — MVP**

Dikembangkan oleh: **Bro Arule — Kampung Inggris**
Versi 1.0 — 2025

---

## DAFTAR ISI

1. [Overview Produk](#1-overview-produk)
2. [Target User](#2-target-user)
3. [Fitur Aplikasi](#3-fitur-aplikasi--iterasi-1)
4. [Core Features — 5 Modul Utama](#4-core-features--5-modul-utama)
5. [Mekanisme AI — Integrasi ChatGPT](#5-mekanisme-ai--integrasi-chatgpt)
6. [Competitive Analysis](#6-competitive-analysis)
7. [User Journey Map](#7-user-journey-map)
8. [KPI & Success Metrics](#8-kpi--success-metrics)
9. [Project Roadmap](#9-project-roadmap--iterasi-1)
10. [Catatan & Ketentuan](#10-catatan--ketentuan)

---

## 1. OVERVIEW PRODUK

### 1.1 Nama & Deskripsi Produk

| Atribut | Detail |
|---|---|
| **Nama Produk** | Inggrisin Yuk |
| **Tagline** | Belajar Bahasa Inggris yang Seru, Personal, dan Langsung Praktik |
| **Platform** | Web App (Laptop & Mobile Responsive) |

Inggrisin Yuk adalah platform belajar Bahasa Inggris berbasis kecerdasan buatan yang dirancang khusus untuk pelajar Indonesia usia 16 tahun ke atas (minimal setara SMA). Aplikasi ini menghubungkan pengguna langsung dengan ChatGPT melalui prompt yang telah dikurasi dan dipersonalisasi oleh Bro Arule dari Kampung Inggris, sehingga pengalaman belajarnya terasa seperti memiliki tutor pribadi yang asyik, adaptif, dan efektif.

### 1.2 Problem Statement

Banyak pelajar Indonesia mengalami kesulitan berbicara Bahasa Inggris meskipun sudah bertahun-tahun belajar di sekolah. Masalah utama yang ditemukan:

- Belajar terlalu teoritis — banyak grammar tapi tidak bisa ngomong
- Tidak ada partner latihan speaking yang sabar dan konsisten
- Materi tidak terstruktur dan tidak disesuaikan level individu
- Tutor manusia mahal dan tidak selalu tersedia
- Aplikasi belajar bahasa yang ada terasa kaku dan membosankan

### 1.3 Solusi

Inggrisin Yuk menjembatani gap tersebut dengan:

- Koneksi langsung ke ChatGPT dengan prompt yang sudah dikurasi ahli
- Materi terstruktur berdasarkan level CEFR (A1 – C2)
- Gaya belajar santai, conversational, dan adaptif
- 5 core modul: Vocabulary, Grammar for Speaking, Speaking + Pronunciation, Listening, Conversation
- Tutor AI bernama Bro Arule yang konsisten, sabar, dan personal

---

## 2. TARGET USER

### 2.1 Target Market Utama

| Atribut | Detail |
|---|---|
| **Usia** | 16 tahun ke atas (SMA, mahasiswa, profesional muda) |
| **Lokasi** | Indonesia (seluruh wilayah) |
| **Bahasa Sehari-hari** | Bahasa Indonesia |
| **Level Bahasa Inggris** | A1 hingga C2 (semua level) |
| **Akses Teknologi** | Smartphone dan/atau Laptop dengan koneksi internet |
| **Motivasi Belajar** | Karir, akademik, traveling, konten kreator, self-improvement |

### 2.2 User Persona

**Persona 1 — Siswa SMA / Mahasiswa**
- Nama: Rizky, 17 tahun, Surabaya
- Tujuan: Nilai Ujian Bahasa Inggris dan bisa ngomong sama bule
- Pain Point: Grammar bingung, vocab sedikit, malu kalau salah
- Kebiasaan: Sering pakai HP, aktif di TikTok dan YouTube

**Persona 2 — Profesional Muda**
- Nama: Dinda, 24 tahun, Jakarta
- Tujuan: Persiapan interview kerja di perusahaan internasional
- Pain Point: Bisa baca tapi tidak bisa speaking dengan percaya diri
- Kebiasaan: Pakai laptop, sibuk, butuh belajar fleksibel

**Persona 3 — Pengguna Umum / Self-Improver**
- Nama: Arif, 28 tahun, Bandung
- Tujuan: Lancar Bahasa Inggris untuk traveling dan konten
- Pain Point: Pernah coba banyak aplikasi tapi tidak konsisten
- Kebiasaan: Familiar dengan AI tools, suka belajar mandiri

---

## 3. FITUR APLIKASI — ITERASI 1

### 3.1 Homepage

Halaman pertama yang dilihat pengguna saat membuka aplikasi. Berfungsi sebagai pintu masuk dan branding produk.

| Komponen | Deskripsi | Prioritas |
|---|---|---|
| Hero Section | Headline utama, tagline, CTA 'Mulai Belajar Gratis' | Wajib |
| Fitur Unggulan | Highlight 5 core modul dengan ikon dan deskripsi singkat | Wajib |
| Cara Kerja | Step-by-step: Pilih Modul → Pilih Level → Pilih Topik → Belajar di ChatGPT | Wajib |
| Testimoni | 2–3 testimoni user nyata atau placeholder awal | Penting |
| CTA Subscription | Tombol menuju halaman subscription/harga | Wajib |
| Footer | Link navigasi, sosial media (@arullangit), copyright | Wajib |
| Navbar | Logo, menu navigasi, tombol Login/Daftar | Wajib |

### 3.2 Subscription & Payment

Halaman yang menjelaskan paket berlangganan dan memproses pembayaran. Payment menggunakan QRIS sebagai metode utama.

**Paket Subscription:**

| Paket | Harga | Durasi | Akses | Target User |
|---|---|---|---|---|
| Free Trial | Rp 0 | 7 hari | Semua modul (terbatas 3 topik/modul) | User baru |
| Basic | Rp 49.000 | 1 bulan | Semua modul, semua level, semua topik | Pelajar umum |
| Pro | Rp 120.000 | 3 bulan | Semua fitur Basic + akses prioritas materi baru | Pelajar serius |
| Premium | Rp 180.000 | 6 bulan | Semua fitur Pro + request topik custom | Power user |

**Alur Pembayaran QRIS:**

1. User memilih paket subscription
2. Klik tombol 'Bayar Sekarang'
3. Sistem generate QR Code QRIS unik per transaksi
4. User scan QR dengan aplikasi e-wallet/mobile banking
5. Sistem menerima konfirmasi pembayaran otomatis
6. Akun user diupgrade dan dashboard terbuka
7. User menerima email konfirmasi + detail akses

**Spesifikasi Teknis Payment:**

- Payment Gateway: Midtrans atau Xendit (mendukung QRIS)
- QR berlaku selama 15 menit sejak dibuat
- Auto-renewal opsional (default: OFF)
- Invoice otomatis dikirim ke email user
- Status transaksi: Pending / Success / Failed / Expired

### 3.3 Dashboard User

Halaman utama setelah user login. Menampilkan progress belajar, akses ke semua modul, dan informasi personal user.

| Komponen | Fungsi | Detail |
|---|---|---|
| Header User | Sapa user dengan nama | Contoh: 'Hallo Bro Arif! Siap belajar hari ini?' |
| Progress Overview | Ringkasan progress semua modul | Bar progress per modul, total hari streak |
| Quick Access | Shortcut ke materi terakhir dibuka | Resume dari mana terakhir berhenti |
| Module Cards | 5 kartu navigasi ke core modul | Ikon, nama modul, progress bar |
| Level Indicator | Menampilkan level CEFR saat ini | Berdasarkan hasil placement test |
| Streak Counter | Hari berturut-turut belajar | Motivasi konsistensi harian |
| Subscription Status | Status & sisa masa berlangganan | Badge Free/Basic/Pro/Premium |
| Notifikasi | Reminder belajar & info terbaru | Bisa dimatikan di settings |

### 3.4 Cara Menggunakan Fitur

Halaman panduan interaktif yang menjelaskan cara menggunakan aplikasi kepada pengguna baru. Ditampilkan saat pertama kali masuk dan bisa diakses kapan saja dari menu Help.

| Langkah | Judul | Penjelasan |
|---|---|---|
| 1 | Pilih Modul | Pilih salah satu dari 5 core modul: Vocabulary, Grammar, Speaking, Listening, atau Conversation |
| 2 | Pilih Level CEFR | Tentukan level kamu: A1 (Pemula) hingga C2 (Expert). Bisa ikut placement test dulu |
| 3 | Pilih Topik | Setiap level punya 30 topik harian. Pilih sesuai kebutuhan atau ikuti urutan |
| 4 | Klik 'Mulai Belajar' | Aplikasi akan membuka ChatGPT dengan prompt yang sudah disiapkan otomatis |
| 5 | Aktifkan Voice Mode | Di ChatGPT, aktifkan mode suara untuk latihan speaking dan listening |
| 6 | Ikuti Arahan Bro Arule | Tutor AI Bro Arule akan membimbing step by step sesuai level kamu |
| 7 | Tandai Selesai | Kembali ke aplikasi dan centang topik yang sudah dipelajari untuk track progress |

**Tips Penggunaan Optimal:**

- Gunakan headphone untuk latihan listening dan speaking
- Aktifkan Voice Mode di ChatGPT untuk pengalaman speaking yang lebih natural
- Konsisten belajar minimal 1 topik per hari untuk menjaga streak
- Manfaatkan trigger khusus: `clue`, `I'm ready to practice`, `How to say...`

---

## 4. CORE FEATURES — 5 MODUL UTAMA

Setiap modul memiliki 6 level berdasarkan CEFR (A1, A2, B1, B2, C1, C2) dengan masing-masing 30 topik harian. Setiap topik akan membuka ChatGPT dengan prompt yang telah dikurasi khusus oleh Bro Arule.

### 4.1 Level Framework — CEFR

| Level | Nama | Deskripsi Kemampuan |
|---|---|---|
| A1 | Pemula / Beginner | Bisa memahami kata dan frasa sangat dasar. Bisa memperkenalkan diri |
| A2 | Dasar / Elementary | Bisa berkomunikasi dalam situasi sederhana dan rutinitas sehari-hari |
| B1 | Menengah / Intermediate | Bisa menangani situasi umum saat traveling. Bisa cerita pengalaman |
| B2 | Menengah Atas / Upper-Intermediate | Bisa berinteraksi dengan native speaker dengan lancar dan spontan |
| C1 | Mahir / Advanced | Bisa menggunakan bahasa secara fleksibel untuk tujuan sosial & akademik |
| C2 | Expert / Mastery | Bisa memahami hampir semua yang didengar/dibaca dengan sangat mudah |

---

### 4.2 Modul 1 — Vocabulary

Membangun kosakata fungsional dan kontekstual melalui metode Box of Words, Writing Challenge, dan Speaking Practice yang dikembangkan oleh Bro Arule.

**Mekanisme Belajar:**

1. User memilih level CEFR dan topik
2. Klik 'Mulai' → ChatGPT terbuka dengan prompt Vocabulary Bro Arule
3. ChatGPT tampilkan Box of Words (15 kosakata + phonetic symbol UK)
4. User mendapat Writing Challenge (2 opsi)
5. Setelah user jawab, AI berikan Koreksi 6 Langkah
6. Sesi diakhiri dengan Speaking Challenge

**30 Topik Vocabulary:**

| Day | Topik | Day | Topik | Day | Topik |
|---|---|---|---|---|---|
| 1 | Daily Routines | 11 | Health & Body | 21 | Hobbies & Free Time |
| 2 | Family & People | 12 | House & Furniture | 22 | Common Collocations |
| 3 | Food & Drinks | 13 | Weather | 23 | Phrasal Verbs (Everyday) |
| 4 | Jobs & Workplaces | 14 | Basic Descriptions | 24 | Phrasal Verbs (Work & Study) |
| 5 | Places in Town | 15 | Travel & Holidays | 25 | Expressing Opinions |
| 6 | Common Actions | 16 | Ordering Food | 26 | Advanced Feelings & Emotions |
| 7 | Feelings & Emotions | 17 | Technology & Gadgets | 27 | Business Basics |
| 8 | Shopping & Money | 18 | School & Learning | 28 | Idioms for Daily Situations |
| 9 | Transportation | 19 | Describing Places | 29 | Transition Words for Speaking |
| 10 | Time & Calendar | 20 | Describing People | 30 | Business Talk |

---

### 4.3 Modul 2 — Grammar for Speaking

Fokus pada grammar praktis yang langsung bisa dipakai saat berbicara, bukan grammar akademik. Pendekatan tutor santai 'warung kopi' yang relate untuk generasi muda.

**Mekanisme Belajar:**

1. User pilih level dan topik grammar
2. ChatGPT buka sesi dengan penjelasan grammar detail (gaya Gen Z / millennial)
3. Diberikan 5 contoh kalimat natural + terjemahan Indonesia
4. 3 pertanyaan speaking yang memaksa pakai grammar tersebut
5. Trigger `I'm ready to practice` → masuk mode speaking satu per satu
6. Wajib 'Repeat After Me' sebelum lanjut ke pertanyaan berikutnya

**30 Topik Grammar for Speaking:**

| Day | Topik | Day | Topik |
|---|---|---|---|
| 1 | Kata Benda (Noun) | 16 | Have been + V-ing |
| 2 | Kata Sifat (Adjective) | 17 | Used to + Verb 1 |
| 3 | Verb 1 (Sehari-hari) | 18 | tobe + used to + V-ing |
| 4 | Kapan pakai Verb s/es | 19 | Will (akan/masa depan) |
| 5 | Verb 2 (tadi/kemarin) | 20 | Will VS Going to |
| 6 | Verb 1 VS Verb 2 | 21 | Have to VS Must |
| 7 | Do/does/did | 22 | Penyesalan datang terlambat |
| 8 | Is/am/are VS Was/were | 23 | Berandai-andai (If I were...) |
| 9 | Do/does VS is/am/are | 24 | 5W + 1H |
| 10 | V-ing (sedang terjadi) | 25 | Could, Would, Should |
| 11 | Did VS was/were | 26 | Kalimat Passive (di/ter) |
| 12 | Verb 3 (sudah terjadi) | 27 | Transition Words |
| 13 | Verb 2 VS Verb 3 | 28 | Who VS Whom |
| 14 | Kapan pakai be | 29 | Which & Whose |
| 15 | Kapan pakai been | 30 | Comparative & Superlative |

---

### 4.4 Modul 3 — Speaking + Pronunciation

Melatih kemampuan berbicara dalam berbagai situasi nyata dengan feedback langsung dari AI. Termasuk latihan pronunciation dengan phonetic symbol UK.

**Mekanisme Belajar:**

1. User pilih level dan topik speaking
2. ChatGPT berikan penjelasan materi speaking + 3–5 frasa contoh siap pakai
3. Trigger `I'm ready to practice` → sesi speaking dimulai
4. Pertanyaan diberikan satu per satu dalam English + terjemahan Indonesia
5. Setelah user jawab, AI tampilkan tabel perbandingan (Kalimat User vs Native Speaker)
6. Sesi berjalan adaptif: lancar → tambah kompleksitas; macet → pattern drill

**30 Topik Speaking:**

| Day | Topik | Day | Topik |
|---|---|---|---|
| 1 | Introducing Yourself | 16 | Agreeing and Disagreeing |
| 2 | Asking Questions | 17 | Making Suggestions |
| 3 | Talking About Daily Routines | 18 | Making Invitations |
| 4 | Describing People | 19 | Apologizing and Responding |
| 5 | Describing Things Around You | 20 | Offering Help |
| 6 | Talking About Time | 21 | Talking About Problems & Solutions |
| 7 | Likes and Dislikes | 22 | Explaining Something Clearly |
| 8 | Giving Directions | 23 | Comparing People, Things, and Places |
| 9 | Ordering Food and Drinks | 24 | Telling a Short Story |
| 10 | Making Small Talk | 25 | Giving Instructions (How to...) |
| 11 | Talking About Past Experiences | 26 | Making Complaints Politely |
| 12 | Talking About Future Plans | 27 | Talking About Expectations |
| 13 | Describing Places | 28 | Talking About Habits (Past & Present) |
| 14 | Talking About Frequency | 29 | Talking About Preferences |
| 15 | Giving Opinions | 30 | Mini Presentation |

---

### 4.5 Modul 4 — Listening

Melatih kemampuan mendengarkan melalui cerita/monolog dalam Bahasa Inggris, diikuti dengan comprehension questions dan speaking practice.

**Mekanisme Belajar:**

1. User pilih level dan topik listening
2. ChatGPT langsung tampilkan cerita/monolog (4–8 kalimat untuk A1–B1, 8–15 kalimat untuk B2–C2)
3. Di bawah cerita, tampil tabel vocabulary penting dari monolog
4. Trigger `I'm ready to practice` → comprehension questions satu per satu
5. Pertanyaan dalam English + terjemahan Indonesia
6. Jawaban salah → AI koreksi berdasarkan text monolog, lalu ulangi pertanyaan

**30 Topik Listening:**

| Day | Topik | Day | Topik |
|---|---|---|---|
| 1 | My Morning Routine Story | 16 | The Best Gift I Ever Received |
| 2 | How I Spent My Weekend | 17 | A Funny or Embarrassing Moment |
| 3 | A Person I Admire | 18 | A Challenge I Faced |
| 4 | My Favorite Place in My City | 19 | A Hobby That I Love |
| 5 | A Simple Memory From School | 20 | A Friend Who Helped Me |
| 6 | My Daily Life at Home | 21 | A Special Event I Attended |
| 7 | A Short Story About a Pet | 22 | A Day That Changed My Life |
| 8 | My First Day at Work or School | 23 | My Personal Success Story |
| 9 | A Time I Got Lost in a New Place | 24 | What I Learned From a Mistake |
| 10 | A Meal I Will Never Forget | 25 | How I Organize My Day |
| 11 | Unexpected Things That Happened | 26 | A Project I Completed |
| 12 | My Next Plan or Goal | 27 | How I Deal With Stress or Pressure |
| 13 | A Time I Felt Sick | 28 | Meeting Someone New |
| 14 | A Problem I Solved on My Own | 29 | A Dream or Ambition That I Have |
| 15 | My Most Memorable Trip | 30 | A Lesson from a Past Story |

---

### 4.6 Modul 5 — Conversation

Modul puncak yang menggabungkan semua skill dalam simulasi percakapan nyata dengan AI. Tersedia dua mode: Roleplay dengan teks dialog (Read Convo) dan improvisasi langsung (Improvise Convo).

**Sub-Modul Conversation:**

| Sub-Modul | Deskripsi | Mekanisme |
|---|---|---|
| Read & Convo | Baca dialog teks bersama AI yang berperan sebagai tokoh pilihan user | User pilih tokoh. AI tampilkan dialog 5–8 turn dalam tabel 3 kolom (Speaker / English / Indonesia). Sesi baca bergantian. Setelah selesai, bisa lanjut improvise. |
| Improvise Convo | Ngobrol bebas dengan AI yang berperan sebagai tokoh fiksi/nyata pilihan user | User pilih topik dan tokoh. AI langsung masuk karakter. Tidak ada teks dialog — murni improvisasi. Trigger khusus: `clue`, `pause`, `How to say...`, `end`. |

**30 Topik Conversation:**

| Day | Topik | Day | Topik |
|---|---|---|---|
| 1 | Meeting New People | 16 | Daily Problem Advice |
| 2 | Talking About Days | 17 | Group Activity Planning |
| 3 | Weekend Activity Plans | 18 | How-To Explanation |
| 4 | Discussing the Weather | 19 | Conversation Follow-Up |
| 5 | Movie or Series Talk | 20 | Health & Wellness Talk |
| 6 | Asking About Hobbies | 21 | Giving Helpful Suggestions |
| 7 | Borrowing Household Items | 22 | Talking About Feelings |
| 8 | Transportation Plan Talk | 23 | Making Simple Complaints |
| 9 | Comparing Product Choices | 24 | Telling Short Stories |
| 10 | Simple Etiquette Talk | 25 | Asking About Experiences |
| 11 | Delivery Problem Help | 26 | Discussing Future Plans |
| 12 | Room/Apartment Inquiry | 27 | Asking for Clarification |
| 13 | Community Event Talk | 28 | Handling Misunderstandings |
| 14 | Reacting to News | 29 | Solving Small Conflicts |
| 15 | Sharing Achievements | 30 | Ordering Coffee Drinks |

---

## 5. MEKANISME AI — INTEGRASI CHATGPT

### 5.1 Konsep Integrasi

Inggrisin Yuk tidak membangun AI sendiri di iterasi 1. Sebaliknya, aplikasi berfungsi sebagai **prompt delivery platform** yang mengirimkan user ke ChatGPT dengan prompt yang sudah dikurasi, dipersonalisasi, dan di-encode dalam URL.

**Alur Teknis:**

1. User mengisi nama dan gender (satu kali di awal, tersimpan di profil)
2. User memilih: Modul → Level → Topik
3. Sistem generate URL ChatGPT dengan prompt yang telah dipersonalisasi
4. User diarahkan ke ChatGPT (tab baru)
5. ChatGPT langsung merespons dengan sesi belajar yang terstruktur

### 5.2 Struktur Prompt

| Komponen Prompt | Fungsi | Contoh |
|---|---|---|
| Identitas User | Personalisasi panggilan | Namaku Arif. Genderku: male. Panggil aku Bro Arif. |
| Level CEFR | Adaptasi kesulitan materi | Level bahasa Inggrisku: Intermediate (B1) |
| Topik Materi | Konten yang dipelajari | Topik: Daily Routines |
| Identitas Tutor | Konsistensi karakter AI | Kamu Bro Arule dari Kampung Inggris |
| Instruksi Bahasa | Koreksi dalam Bahasa Indonesia | Koreksi dan penjelasan pakai Bahasa Indonesia |
| Struktur Sesi | Langkah-langkah belajar | LANGKAH 1, LANGKAH 2, LANGKAH 3 |
| Hak Cipta | Perlindungan konten | Struktur ini orisinal oleh Bro Arule, dilindungi hak cipta |

### 5.3 Persona AI Tutor — Bro Arule

| Atribut | Detail |
|---|---|
| Nama | Bro Arule |
| Asal | Kampung Inggris |
| Gaya Bahasa | Santai, seru, relate untuk anak muda Indonesia. TIDAK menyebut diri asyik/seru — tunjukkan lewat gaya |
| Bahasa Koreksi | Selalu dalam Bahasa Indonesia |
| Adaptivitas | Lancar → tambah kompleksitas. Macet → pattern drill, beri contoh, latih ulang |
| Pujian | Hanya di akhir sesi, tidak berlebihan. Tetap friendly tapi singkat |
| Phonetic Symbol | UK English, ditampilkan setelah setiap kosakata dalam tanda / / |

---

## 6. COMPETITIVE ANALYSIS

### 6.1 Kompetitor Utama: inggriskuai.net (Versi Lama)

Berdasarkan analisis terhadap inggriskuai.net sebagai referensi kompetitor langsung yang dikembangkan oleh Bro Arule sendiri (versi Excel/Spreadsheet):

| Aspek | inggriskuai.net (Versi Lama) | Inggrisin Yuk (Iterasi 1) |
|---|---|---|
| Platform | Google Spreadsheet (Excel-based) | Web Application (Laptop & Mobile) |
| Aksesibilitas | Harus download/copy spreadsheet | Langsung akses via browser, tanpa install |
| Personalisasi | User isi nama & level di spreadsheet | Otomatis tersimpan di profil user |
| Progress Tracking | Manual (centang di spreadsheet) | Otomatis, real-time, dengan streak counter |
| Payment | Manual / belum terintegrasi | QRIS terintegrasi, otomatis, digital |
| UI/UX | Spreadsheet interface | Modern web UI, responsive, mobile-friendly |
| Onboarding | Perlu tonton tutorial YouTube dulu | In-app guide, langsung paham |
| Distribusi Materi | File Excel, rawan disebarkan | Akses terkontrol via login + subscription |
| Perlindungan Konten | Hanya mengandalkan kesadaran user | Akses dibatasi oleh sistem autentikasi |

### 6.2 Keunggulan Inggrisin Yuk vs Kompetitor Lain

| Fitur | Inggrisin Yuk | Duolingo | ELSA Speak | Ruangguru English |
|---|---|---|---|---|
| Bahasa Koreksi | Indonesia ✓ | Inggris | Inggris | Indonesia ✓ |
| Tutor Personal AI | Bro Arule (konsisten) ✓ | Tidak ada | Tidak ada | Terbatas |
| Koneksi ke ChatGPT | Ya ✓ | Tidak | Tidak | Tidak |
| Materi CEFR Terstruktur | 6 Level x 30 Topik ✓ | Partial | Tidak | Ya |
| Speaking Practice | Langsung ke ChatGPT ✓ | Terbatas | Ya | Terbatas |
| Harga | Mulai Rp 49.000/bln | Gratis/Rp139rb | Rp 120rb/bln | Bundle |
| Target User Indonesia | Spesifik Indonesia ✓ | Global | Global | Indonesia ✓ |

---

## 7. USER JOURNEY MAP

### 7.1 Journey User Baru

| Fase | Titik Kontak | Aksi User | Perasaan User | Peluang |
|---|---|---|---|---|
| Discovery | Media sosial / SEO | Lihat konten/iklan Inggrisin Yuk | Penasaran, tertarik | Hook dengan value proposition kuat |
| Landing | Homepage | Baca fitur, lihat cara kerja | Excited, tapi masih ragu | CTA Free Trial yang jelas |
| Onboarding | Registrasi + Placement Test | Daftar, isi profil, ikut test CEFR | Antusias, ingin tahu hasilnya | Pengalaman pertama yang menyenangkan |
| First Use | Dashboard + Modul pertama | Pilih modul, klik topik pertama, buka ChatGPT | Kagum, seru, merasa dibantu | Wow moment di menit pertama |
| Retention | Streak + Progress | Belajar rutin, dapat notifikasi reminder | Termotivasi, bangga | Gamifikasi streak & milestone badge |
| Conversion | Subscription Page | Free trial habis, upgrade ke paket berbayar | Sadar value, mau bayar | Harga transparan, mudah bayar via QRIS |
| Advocacy | Sosial Media | Share progress, rekomendasikan ke teman | Bangga, merasa maju | Referral program (Iterasi 2) |

---

## 8. KPI & SUCCESS METRICS

| Metrik | Target Iterasi 1 (3 Bulan) | Cara Ukur |
|---|---|---|
| Registered Users | 500 user | Database registrasi |
| Paying Subscribers | 100 user berbayar (20%) | Payment gateway records |
| Day-7 Retention | 40% user kembali di hari ke-7 | Analytics dashboard |
| Daily Active Users | 30% dari total user terdaftar | Session tracking |
| Average Session Duration | Minimal 15 menit/sesi | Time on app tracking |
| Module Completion Rate | 50% user selesaikan minimal 5 topik/modul | Progress database |
| Streak > 7 hari | 20% user punya streak 7+ hari | Streak tracking |
| NPS Score | Minimal 7/10 | In-app survey |
| Conversion Free to Paid | Minimal 15% | Funnel analytics |

---

## 9. PROJECT ROADMAP — ITERASI 1

| Fase | Durasi | Deliverable Utama |
|---|---|---|
| Fase 1 — Foundation | Minggu 1–2 | PRD final, User Persona, Level Framework, AI Prompt library semua modul |
| Fase 2 — Design | Minggu 3–4 | Wireframe semua halaman, UI Design System, Prototype clickable |
| Fase 3 — Development | Minggu 5–8 | Frontend semua halaman, Backend auth + progress, QRIS payment integration |
| Fase 4 — Testing | Minggu 9–10 | QA testing, User Acceptance Testing (UAT) dengan 10 beta user |
| Fase 5 — Launch | Minggu 11–12 | Soft launch, monitoring, bug fix, collect feedback |
| Iterasi 2 (Next) | Bulan 4–6 | TOEFL Prep, IELTS Prep, Referral Program, Mobile App |

---

## 10. CATATAN & KETENTUAN

### 10.1 Hak Cipta

Seluruh struktur prompt, metode belajar, dan sistem tutor AI Bro Arule dalam aplikasi ini dikembangkan oleh **@arullangit** dan telah didaftarkan dalam proses perlindungan Hak Kekayaan Intelektual (HAKI) sesuai peraturan yang berlaku di Indonesia.

Sistem modul adaptif ini menggunakan referensi internal `chatgpt-ar1209beta-eb` yang didesain agar tutor AI dapat menyesuaikan pertanyaan dan koreksi sesuai respons pengguna.

### 10.2 Disclaimer

- Inggrisin Yuk di iterasi 1 menggunakan ChatGPT sebagai engine AI — bukan AI proprietary
- Pengalaman belajar bergantung pada koneksi internet dan ketersediaan layanan ChatGPT
- Harga dan paket berlangganan dapat berubah sesuai kebijakan bisnis
- Modul TOEFL dan IELTS dijadwalkan hadir di Iterasi 2

---

*Inggrisin Yuk — Developed by Bro Arule, Kampung Inggris — 2025*
*Instagram: @arullangit*
