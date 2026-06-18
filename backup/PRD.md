# INGGRISIN YUK — PRODUCT REQUIREMENTS DOCUMENT (PRD)
**Aplikasi Belajar Bahasa Inggris Berbasis AI**
**Iterasi 1 — MVP**

Dikembangkan oleh: **Arif Romadhan — Inggrisin Yuk**
Versi 1.0 — 2026

---

## DAFTAR ISI

1. [Overview Produk](#1-overview-produk)
2. [Target User](#2-target-user)
3. [Fitur Aplikasi](#3-fitur-aplikasi--iterasi-1) *(Homepage, Subscription, Auth, Dashboard, Sub-Fitur, Edit Profil)*
4. [Core Features — 5 Modul Utama + 1 Bonus](#4-core-features--5-modul-utama--1-bonus)
5. [Mekanisme AI — Integrasi AI Tools](#5-mekanisme-ai--integrasi-ai-tools)
6. [Strategi Marketing & Landing Page](#6-strategi-marketing--landing-page)
7. [Competitive Analysis](#7-competitive-analysis)
8. [User Journey Map](#8-user-journey-map)
9. [KPI & Success Metrics](#9-kpi--success-metrics)
10. [Project Roadmap](#10-project-roadmap--iterasi-1)
11. [Catatan & Ketentuan](#11-catatan--ketentuan)

---

## 1. OVERVIEW PRODUK

### 1.1 Nama & Deskripsi Produk

| Atribut | Detail |
|---|---|
| **Nama Produk** | Inggrisin Yuk |
| **Tagline** | Belajar Bahasa Inggris yang Seru, Personal, dan Langsung Praktik menggunakan AI |
| **Platform** | Web App — dapat diakses di Android, iOS, dan Laptop/Desktop via browser |


Inggrisin Yuk adalah platform belajar Bahasa Inggris berbasis AI yang dirancang untuk siapa saja yang ingin meningkatkan kemampuan Bahasa Inggris secara praktis, terjangkau, dan percaya diri. Tidak terbatas usia atau latar belakang — pelajar, mahasiswa, karyawan, pelaku bisnis, ibu rumah tangga, hingga siapa pun yang ingin berkembang untuk kebutuhan karier, bisnis, akademik, traveling, atau pengembangan diri.

Dengan metode belajar yang terstruktur berdasarkan level CEFR (A1–C2), Inggrisin Yuk menghadirkan pengalaman belajar yang personal, adaptif, dan berorientasi pada praktik nyata. Aplikasi ini menghubungkan pengguna langsung dengan AI tools terkemuka — termasuk ChatGPT dan Gemini AI — melalui prompt yang telah dikurasi dan dipersonalisasi oleh Arif Romadhan, sehingga pengalaman belajarnya terasa seperti memiliki tutor pribadi yang asyik, adaptif, efektif, dan selalu siap membantu kapan saja.

Tidak hanya menyesuaikan materi berdasarkan level CEFR, Inggrisin Yuk juga menganalisis respons pengguna dan memberikan umpan balik yang relevan sesuai dengan modul yang sedang dipelajari. Pada modul Vocabulary, pengguna mendapatkan koreksi penggunaan kosakata dan rekomendasi kata yang lebih natural. Pada Grammar, AI membantu memperbaiki struktur kalimat dan tata bahasa yang digunakan saat berbicara. Pada Speaking dan Roleplay Practice, pengguna memperoleh masukan terkait kelancaran, kejelasan penyampaian, pilihan kata, serta tingkat kealamian ekspresi. Sementara pada Listening, AI membantu mengidentifikasi tingkat pemahaman pengguna terhadap materi yang didengarkan.

Melalui kombinasi pembelajaran terstruktur, latihan praktik langsung, dan feedback yang spesifik pada setiap keterampilan, Inggrisin Yuk membantu pengguna berkembang dari sekadar memahami teori menjadi lebih percaya diri menggunakan Bahasa Inggris dalam situasi nyata.

### 1.2 Problem Statement

Banyak orang Indonesia dari berbagai latar belakang ingin meningkatkan kemampuan Bahasa Inggris — baik untuk karier, bisnis, traveling, maupun pengembangan diri — namun terhambat oleh berbagai kendala nyata:

- **Biaya kursus dan tutor privat mahal** — tidak semua orang mampu membayar Rp 500.000–2.000.000/bulan untuk belajar rutin
- **Belajar terlalu teoritis** — banyak yang sudah belajar bertahun-tahun tapi tetap tidak percaya diri saat berbicara
- **Tidak ada partner latihan yang konsisten** — latihan speaking butuh lawan bicara yang sabar, tersedia 24 jam, dan tidak menghakimi
- **Materi tidak disesuaikan level dan kebutuhan individu** — satu metode tidak bisa cocok untuk semua orang
- **Teknologi AI yang terus berkembang belum dimanfaatkan secara optimal** — padahal AI seperti ChatGPT dan Gemini sudah mampu berperan sebagai tutor yang adaptif dan personal
- **Aplikasi belajar bahasa yang ada terasa kaku dan tidak praktis** — gamifikasi ringan tidak cukup untuk mendorong kemampuan berbicara nyata

### 1.3 Solusi

Inggrisin Yuk menjawab semua masalah tersebut dengan pendekatan yang sederhana namun powerful: **memanfaatkan kemajuan teknologi AI untuk membuat belajar Bahasa Inggris menjadi terjangkau, personal, dan praktis bagi siapa saja.**

- **Biaya terjangkau** — Rp 99.000 sekali bayar untuk akses selamanya, jauh lebih murah dari kursus konvensional, dengan kualitas setara tutor pribadi
- **Memanfaatkan AI terkini** — koneksi langsung ke ChatGPT & Gemini AI dengan prompt yang sudah dikurasi, sehingga user mendapat pengalaman belajar yang adaptif dan personal
- **Materi terstruktur berdasarkan level CEFR (A1–C2)** — setiap orang mulai dari levelnya sendiri, tidak perlu mengulang dari nol
- **Gaya belajar santai, conversational, dan berorientasi praktik** — bukan hafalan teori, tapi langsung bicara dan berlatih
- **5 core modul + 1 bonus** yang mencakup semua aspek kemampuan: Vocabulary, Grammar, Speaking, Listening, Roleplay Practice, dan Tool AI (bonus)

---

## 2. TARGET USER

### 2.1 Target Market Utama

| Atribut | Detail |
|---|---|
| **Usia** | 15 tahun ke atas — pelajar, mahasiswa, profesional, ibu rumah tangga, hingga lansia yang ingin berkembang |
| **Lokasi** | Indonesia (seluruh wilayah) |
| **Bahasa Sehari-hari** | Bahasa Indonesia |
| **Level Bahasa Inggris** | A1 hingga C2 (semua level, dari nol hingga mahir) |
| **Akses Teknologi** | Smartphone dan/atau Laptop dengan koneksi internet |
| **Motivasi Belajar** | Karier, bisnis, akademik, traveling, konten kreator, self-improvement, persiapan ke luar negeri |
| **Pertimbangan Utama** | Biaya terjangkau, fleksibel belajar kapan saja, hasil yang terasa nyata |

---

## 3. FITUR APLIKASI — ITERASI 1

### 3.1 Homepage

Halaman pertama yang dilihat pengguna saat membuka aplikasi. Berfungsi sebagai pintu masuk dan branding produk.

| Komponen | Deskripsi | Prioritas |
|---|---|---|
| Hero Section | Headline utama, tagline, CTA langsung **"Beli Sekarang — Rp 99.000"** | Wajib |
| Fitur Unggulan | Highlight 5 core modul + 1 bonus dengan ikon dan deskripsi singkat | Wajib |
| Cara Kerja | Step-by-step: Beli Akses → Login → Pilih Modul → Pilih Level & Topik → Belajar di ChatGPT | Wajib |
| Testimoni | 2–3 testimoni user nyata atau placeholder awal | Penting |
| CTA Beli | Tombol "Beli Sekarang" menuju halaman subscription — tidak ada free trial | Wajib |
| Footer | Link navigasi, sosial media resmi Inggrisin Yuk, copyright | Wajib |
| Navbar | Logo, menu navigasi, tombol **Login** dan **Beli Sekarang** | Wajib |

### 3.2 Subscription & Payment

Halaman yang menjelaskan harga dan memproses pembayaran. Tidak ada free trial — user langsung beli akses lifetime dengan harga flat.

**Paket Subscription:**

| Paket | Harga | Durasi | Akses |
|---|---|---|---|
| **Lifetime Access** | **Rp 99.000** | **Selamanya** | Semua modul, semua level (A1–C2), semua topik (30/level/modul), semua update materi |

**Alur Pembelian & Pembayaran:**

1. User klik "Beli Sekarang" dari homepage atau navbar
2. Halaman subscription tampil — deskripsi akses + harga Rp 99.000
3. User mengisi **nomor WhatsApp** sebagai identitas akun (email opsional)
4. Sistem generate QR Code QRIS unik
5. User scan QR dengan aplikasi e-wallet/mobile banking
6. Sistem menerima konfirmasi pembayaran
7. Akun otomatis aktif — user dapat login menggunakan nomor WA yang didaftarkan
8. Notifikasi konfirmasi dikirim ke nomor WA (atau email jika diisi)

**Spesifikasi Teknis Payment:**

| Atribut | Detail |
|---|---|
| Metode Pembayaran | QRIS (semua e-wallet & mobile banking yang mendukung QRIS) |
| Payment Gateway | Midtrans atau Xendit |
| QR Berlaku | 15 menit sejak dibuat |
| Customer ID | **Nomor WhatsApp — wajib.** Email — opsional |
| Konfirmasi | Notifikasi otomatis ke WA setelah pembayaran berhasil (email jika diisi) |
| Status Transaksi | Pending / Success / Failed / Expired |
| Harga | Flat Rp 99.000, tidak ada langganan bulanan, tidak ada auto-renewal |

### 3.3 Autentikasi — Login & Registrasi

Inggrisin Yuk menggunakan sistem **passwordless login** — user cukup memasukkan nomor WhatsApp yang digunakan saat pembelian. Tidak ada password, tidak ada OTP. Semudah mungkin agar tidak menjadi hambatan di awal.

**Alur Registrasi (Pengguna Baru):**

1. User klik "Beli Sekarang" di homepage
2. Diarahkan langsung ke halaman subscription/checkout
3. Isi **nomor WhatsApp** (wajib) dan email (opsional) → proses pembayaran QRIS
4. Setelah pembayaran berhasil, akun otomatis terdaftar
5. User langsung masuk ke dashboard — tidak ada langkah registrasi terpisah

**Alur Login (Pengguna Lama):**

1. User klik "Login" di navbar
2. Input nomor WhatsApp yang digunakan saat beli
3. Sistem verifikasi → jika terdaftar, langsung masuk ke dashboard
4. Tidak ada password — nomor WA adalah satu-satunya kunci akses

**Spesifikasi Teknis Auth:**

| Atribut | Detail |
|---|---|
| Metode Login | Nomor WhatsApp — tanpa password, tanpa OTP |
| Email | Opsional — diisi saat checkout jika user mau, tidak wajib |
| Customer ID | Nomor WhatsApp yang diisi saat checkout |
| Verifikasi | Cek database: nomor WA terdaftar → akses dashboard langsung |
| Session | Tersimpan di browser (localStorage / cookie) |

**Persyaratan Tambahan — ChatGPT:**

Karena sesi belajar diarahkan ke ChatGPT, user wajib memiliki akun dan aplikasi ChatGPT.

| Platform | Tindakan |
|---|---|
| Android | Saat klik topik pertama → muncul pop-up arahan ke Google Play Store untuk install ChatGPT |
| iOS | Saat klik topik pertama → muncul pop-up arahan ke App Store untuk install ChatGPT |
| Laptop/Desktop | Topik dibuka di tab baru menuju chatgpt.com secara otomatis |

---

### 3.4 Dashboard User

Halaman utama setelah user login. Menampilkan sapaan berbasis waktu, progress per modul, dan akses langsung ke semua modul belajar.

**Komponen Navbar:**

| Komponen | Fungsi | Detail |
|---|---|---|
| Logo + Nama Produk | Branding atas kiri | Klik kembali ke dashboard |
| Avatar + User Badge | Foto/avatar profil + nama + level CEFR aktif | Contoh: ikon avatar bulat + "arif — A1 (Beginner)". Klik untuk masuk ke halaman Edit Profil |
| Ikon Edit Profil | Shortcut edit profil langsung dari navbar | Ikon pensil di samping user badge |
| Tombol Logout | Keluar dari akun | Ikon exit kanan atas |

**Komponen Halaman Dashboard:**

| Komponen | Fungsi | Detail |
|---|---|---|
| Greeting Berbasis Waktu | Sapa user sesuai waktu lokal | 🌅 Selamat pagi / ☀️ Selamat siang / 🌙 Selamat malam — diikuti nama user |
| Heading Utama | Prompt belajar | "Mau belajar apa hari ini?" |
| Streak Counter | Hari berturut-turut belajar | Contoh: "🔥 1 hari berturut-turut · Tetap semangat!" |
| Module Cards (5 Core) | Navigasi ke modul utama | Grid 2 kolom — Vocabulary, Speaking, Grammar, Listening, Roleplay Practice. Tiap card: ikon berwarna, nama modul, deskripsi singkat, persentase progress |
| Module Card (Bonus) | Navigasi ke alat bantu AI | Card ke-6 berlabel "⭐ BONUS" — Tool AI: kumpulan AI tools pendukung belajar |
| Warna Ikon per Modul | Identitas visual modul | Vocabulary (biru), Speaking (oranye), Grammar (kuning), Listening (ungu), Roleplay Practice (hijau), Tool AI (ungu muda) |
| Banner Download ChatGPT | Notifikasi untuk user Android/iOS | Muncul di bawah streak counter khusus untuk pengguna mobile yang belum install ChatGPT — tombol "Download ChatGPT" mengarah ke Play Store (Android) atau App Store (iOS) |

### 3.5 Halaman Sub-Fitur Modul

Setiap modul memiliki halaman sub-fitur tersendiri yang menampilkan daftar topik harian (Day 1–30) beserta status penyelesaian. User mengakses halaman ini dengan mengklik salah satu module card di dashboard.

**Komponen Halaman Sub-Fitur:**

| Komponen | Fungsi | Detail |
|---|---|---|
| Tombol Kembali | Kembali ke dashboard | "← Kembali" di pojok kiri atas |
| Tombol YouTube | Link video panduan modul | Ikon YouTube + teks deskriptif. Contoh: "TONTON — Hafal Vocab Tanpa Hafalan" |
| Header Modul | Identitas modul aktif | Ikon modul + nama + tagline + progress bar + counter "X/30" |
| Tombol Reset | Reset progress modul | Ikon reset + teks "Reset" — muncul di samping counter |
| Daftar Topik Harian | List Day 1–30 | Setiap baris: badge "DAY X" + nama topik + status ikon |

**Status Topik:**

| Status | Tampilan | Kondisi |
|---|---|---|
| Selesai | Baris abu-abu + ikon centang (✓) | Topik sudah pernah dibuka — tertandai otomatis setelah user klik |
| Belum Dibuka | Baris biru + tombol panah (→) | Topik yang belum pernah dibuka — user bebas memilih topik mana saja tanpa urutan wajib |

**Catatan:** Semua topik Day 1–30 dapat diakses bebas sejak awal. User tidak perlu menyelesaikan Day 1 untuk membuka Day 2, dst.

**Alur Lengkap Penggunaan:**

| Langkah | Aksi User | Yang Terjadi |
|---|---|---|
| 1 | Buka aplikasi & login | Dashboard muncul dengan sapaan berbasis waktu |
| 2 | Klik module card | Masuk ke halaman sub-fitur modul tersebut |
| 3 | Pilih topik hari ini | Klik baris Day X yang aktif (biru) |
| 4 | Konfirmasi level CEFR | Sistem membaca level dari profil user secara otomatis |
| 5 | Klik "Mulai Belajar" | Sistem generate URL ChatGPT dengan prompt ter-encode |
| 6 | Tab baru terbuka | ChatGPT langsung merespons dengan sesi belajar terstruktur |
| 7 | Belajar bersama Kak Arif | Tutor AI membimbing step-by-step sesuai level dan modul |
| 8 | Kembali ke aplikasi | Topik otomatis tertandai selesai / user centang manual |

**Tips Penggunaan Optimal:**

- Gunakan headphone untuk latihan listening dan speaking
- Aktifkan Voice Mode di ChatGPT untuk pengalaman speaking yang lebih natural
- Konsisten belajar minimal 1 topik per hari untuk menjaga streak
- Manfaatkan trigger khusus di sesi ChatGPT: `clue`, `Gas speaking!`, `How to say...`, `pause`, `end`

### 3.6 Edit Profil

Halaman untuk mengubah data personal user yang digunakan untuk personalisasi prompt AI. Diakses dengan klik ikon edit di user badge navbar.

| Field | Keterangan | Pilihan / Contoh |
|---|---|---|
| **Nama Panggilan** | Nama yang digunakan AI saat menyapa | "Arif", "Dinda", "Budi" — bebas diisi |
| **Panggilan / Gelar** | Awalan nama yang dipilih user sendiri | Kak, Mas, Bang, Pak, Bu, Mr., Ms., Mbak, Akang, Neng, Bro, Sis, dll |
| **Gender** | Informasi gender untuk personalisasi respons AI | Laki-laki / Perempuan |
| **Level CEFR** | Level belajar aktif — menentukan materi dan bahasa koreksi | A1 (Beginner) hingga C2 (Expert) |

**Contoh Hasil Personalisasi:**
- Nama "Arif" + Panggilan "Mas" → AI menyapa: *"Mas Arif"*
- Nama "Dinda" + Panggilan "Kak" → AI menyapa: *"Kak Dinda"*
- Nama "Budi" + Panggilan "Mr." → AI menyapa: *"Mr. Budi"*

**Catatan:** Perubahan data profil langsung memengaruhi prompt yang di-generate saat membuka topik baru. Tidak ada field password karena login cukup menggunakan nomor WhatsApp.

---

## 4. CORE FEATURES — 5 MODUL UTAMA + 1 BONUS

Setiap modul utama memiliki **6 level berdasarkan CEFR (A1, A2, B1, B2, C1, C2)**, dan setiap level memiliki **30 topik harian tersendiri**. Total per modul: **6 level × 30 topik = 180 topik**. Setiap topik membuka ChatGPT via URL dengan prompt yang telah dikurasi dan di-encode secara otomatis oleh sistem.

**Struktur Materi per Modul:**

| Modul | Level | Topik per Level | Total Topik |
|---|---|---|---|
| Vocabulary | A1, A2, B1, B2, C1, C2 | 30 | 180 |
| Speaking | A1, A2, B1, B2, C1, C2 | 30 | 180 |
| Grammar | A1, A2, B1, B2, C1, C2 | 30 | 180 |
| Listening | A1, A2, B1, B2, C1, C2 | 30 | 180 |
| Roleplay Practice | A1, A2, B1, B2, C1, C2 | 30 | 180 |
| **Total** | | | **900 topik** |

User memilih level CEFR dari profil mereka — sub-fitur modul langsung menampilkan 30 topik untuk level tersebut. User bisa ganti level kapan saja via Edit Profil.

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

Membangun kosakata fungsional dan kontekstual melalui metode Box of Words, Writing Challenge, dan Speaking Practice yang dikembangkan oleh Kak Arif.

**Mekanisme Belajar:**

1. User memilih level CEFR dan topik
2. Klik 'Mulai' → ChatGPT terbuka dengan prompt Vocabulary Kak Arif
3. ChatGPT tampilkan Box of Words (15 kosakata + phonetic symbol UK)
4. User mendapat Writing Challenge (2 opsi)
5. Setelah user jawab, AI berikan Koreksi 6 Langkah
6. Sesi diakhiri dengan Speaking Challenge

**Struktur Analisis & Feedback — Koreksi 6 Langkah:**

| # | Langkah | Output AI |
|---|---|---|
| 1️⃣ | **Koreksi Writing** | Tabel 3 kolom: Kalimat Asli → Penjelasan Grammar → Kalimat Benar |
| 2️⃣ | **Analisa Penggunaan BOW** | Cek setiap kosakata dari Box of Words: ✅ tepat / ⚠️ belum tepat + contoh penggunaan yang benar |
| 3️⃣ | **Analisa Level CEFR** | Level saat ini, kelebihan yang sudah terlihat, dan saran konkret untuk naik ke level berikutnya |
| 4️⃣ | **Perbandingan 5W+1H** | Tabel: What / Why / Where / When / Who / How — diisi dari tulisan user + versi lebih lengkap dari AI |
| 5️⃣ | **Transition Words** | Rekomendasi 2–3 kata penghubung (and, because, so, however, dll.) + contoh kalimat siap pakai |
| 6️⃣ | **Speaking Challenge** | 3 pertanyaan speaking berbasis topik yang baru dipelajari, dalam English + terjemahan Indonesia |

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

### 4.3 Modul 2 — Grammar

Fokus pada grammar praktis yang langsung bisa dipakai saat berbicara, bukan grammar akademik. Pendekatan tutor santai yang relate untuk semua kalangan.

**Mekanisme Belajar:**

1. User pilih level dan topik grammar
2. ChatGPT buka sesi dengan penjelasan grammar detail (gaya Gen Z / millennial)
3. Diberikan 5 contoh kalimat natural + terjemahan Indonesia
4. 3 pertanyaan speaking yang memaksa pakai grammar tersebut
5. Trigger `Gas speaking!` → masuk mode speaking satu per satu
6. Wajib 'Repeat After Me' sebelum lanjut ke pertanyaan berikutnya

**Struktur Analisis & Feedback — Grammar:**

| # | Langkah | Output AI |
|---|---|---|
| 1️⃣ | **Koreksi Struktur Kalimat** | Tabel 3 kolom: Kalimat User → Kesalahan Grammar → Kalimat Benar |
| 2️⃣ | **Analisa Penggunaan Grammar Target** | Apakah grammar yang sedang dipelajari digunakan dengan tepat? ✅ / ⚠️ + penjelasan singkat |
| 3️⃣ | **Repeat After Me** | User wajib mengulang kalimat koreksi dengan keras sebelum lanjut ke pertanyaan berikutnya |
| 4️⃣ | **Analisa Level CEFR** | Penilaian level grammar saat ini + saran konkret untuk naik level |
| 5️⃣ | **Pattern Drill** *(kondisional)* | Jika user kesulitan → AI berikan latihan berulang dengan pola kalimat yang sama, baru lanjut |
| 6️⃣ | **Contoh Kalimat Natural** | AI tampilkan 2–3 kalimat natural yang bisa langsung digunakan dalam percakapan sehari-hari |

**30 Topik Grammar:**

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

### 4.4 Modul 3 — Speaking

Melatih kemampuan berbicara dalam berbagai situasi nyata dengan feedback langsung dari AI. Termasuk latihan pronunciation dengan phonetic symbol UK.

**Mekanisme Belajar:**

1. User pilih level dan topik speaking
2. ChatGPT berikan penjelasan materi speaking + 3–5 frasa contoh siap pakai
3. Trigger `Gas speaking!` → sesi speaking dimulai
4. Pertanyaan diberikan satu per satu dalam English + terjemahan Indonesia
5. Setelah user jawab, AI tampilkan tabel perbandingan (Kalimat User vs Native Speaker)
6. Sesi berjalan adaptif: lancar → tambah kompleksitas; macet → pattern drill

**Struktur Analisis & Feedback — Speaking:**

| # | Langkah | Output AI |
|---|---|---|
| 1️⃣ | **Tabel Perbandingan** | Tabel 2 kolom: Kalimat User vs Versi Native Speaker — tampil setelah setiap jawaban |
| 2️⃣ | **Catatan Pelafalan** | Koreksi pronunciation kata-kata yang salah + phonetic symbol UK dalam tanda / / |
| 3️⃣ | **Analisa Kelancaran & Naturalness** | Penilaian apakah ekspresi terasa natural, terlalu kaku, atau terlalu singkat |
| 4️⃣ | **Saran Pilihan Kata** | Rekomendasi vocab atau frasa yang lebih natural untuk konteks yang sama |
| 5️⃣ | **Analisa Level CEFR** | Penilaian speaking secara keseluruhan + saran untuk naik level |
| 6️⃣ | **Adaptasi Sesi** | Lancar → pertanyaan lebih kompleks. Macet → pattern drill + contoh → ulangi pertanyaan |

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
4. Trigger `Gas speaking!` → comprehension questions satu per satu
5. Pertanyaan dalam English + terjemahan Indonesia
6. Jawaban salah → AI koreksi berdasarkan text monolog, lalu ulangi pertanyaan

**Struktur Analisis & Feedback — Listening:**

| # | Langkah | Output AI |
|---|---|---|
| 1️⃣ | **Comprehension Check** | Penilaian benar/salah per pertanyaan — AI tunjukkan kalimat monolog yang menjadi sumber jawaban |
| 2️⃣ | **Koreksi & Penjelasan** | Jika salah → AI kutip bagian monolog yang relevan + jelaskan mengapa jawaban user kurang tepat |
| 3️⃣ | **Vocabulary Comprehension** | Konfirmasi pemahaman kosakata kunci dari monolog yang muncul dalam jawaban user |
| 4️⃣ | **Analisa Tingkat Pemahaman** | Penilaian level comprehension: sangat baik / cukup / perlu latihan ulang — disertai saran |
| 5️⃣ | **Saran Peningkatan** | Tips konkret meningkatkan listening: strategi menyimak, vocab yang perlu dihapal, dll. |

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

### 4.6 Modul 5 — Roleplay Practice

Modul puncak yang menggabungkan semua skill dalam simulasi percakapan nyata dengan AI. Tersedia dua mode: Roleplay dengan teks dialog (Read Convo) dan improvisasi langsung (Improvise Convo).

**Sub-Modul Roleplay Practice:**

| Sub-Modul | Deskripsi | Mekanisme |
|---|---|---|
| Read & Convo | Baca dialog teks bersama AI yang berperan sebagai tokoh pilihan user | User pilih tokoh. AI tampilkan dialog 5–8 turn dalam tabel 3 kolom (Speaker / English / Indonesia). Sesi baca bergantian. Setelah selesai, bisa lanjut improvise. |
| Improvise Convo | Ngobrol bebas dengan AI yang berperan sebagai tokoh fiksi/nyata pilihan user | User pilih topik dan tokoh. AI langsung masuk karakter. Tidak ada teks dialog — murni improvisasi. Trigger khusus: `clue`, `pause`, `How to say...`, `end`. |

**Struktur Analisis & Feedback — Roleplay Practice (ditampilkan di akhir sesi setelah trigger `end`):**

| # | Langkah | Output AI |
|---|---|---|
| 1️⃣ | **Naturalness Check** | Penilaian apakah ekspresi user terdengar natural seperti native speaker atau masih terasa kaku |
| 2️⃣ | **Vocabulary Choice** | Saran pilihan kata yang lebih tepat atau natural untuk konteks percakapan yang terjadi |
| 3️⃣ | **Grammar Highlights** | Koreksi ringkas grammar yang muncul selama sesi — hanya poin penting, tidak detail berlebihan |
| 4️⃣ | **Flow & Fluency** | Penilaian kelancaran alur percakapan: respons terlalu singkat, terlalu bertele-tele, atau sudah pas |
| 5️⃣ | **Analisa Level CEFR** | Penilaian keseluruhan sesi percakapan + saran konkret untuk naik level |
| 6️⃣ | **Highlight Terbaik** | AI kutip 1–2 kalimat terbaik user selama sesi sebagai apresiasi dan referensi belajar |

**30 Topik Roleplay Practice:**

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

### 4.7 Modul Bonus — Tool AI

Modul bonus yang menyediakan kumpulan AI tools pendukung belajar Bahasa Inggris di luar sesi modul utama. Ditandai badge **⭐ BONUS** di dashboard. Tidak memiliki progress tracking seperti modul utama.

**AI Tools yang Tersedia:**

| Tool | Fungsi | AI yang Digunakan |
|---|---|---|
| **Teleprompter AI** | Latihan membaca teks berbahasa Inggris dengan kecepatan yang bisa disesuaikan | Gemini AI |
| **Pronunciation AI** | Analisis dan koreksi pelafalan kata per kata | Gemini AI |
| **Vocab AI** | Generator kosakata kontekstual berdasarkan tema atau situasi | Gemini AI |
| **Harry Potter AI** | Roleplay percakapan dengan karakter ikonik untuk latihan speaking yang menyenangkan | ChatGPT |

**Mekanisme:**
- User klik salah satu tool → dibuka di tab baru langsung ke AI tool yang sesuai
- Tidak ada topik harian — user bebas menggunakan kapan saja sebagai suplemen belajar
- Akses Tool AI tersedia untuk semua user yang sudah memiliki akses lifetime

---

## 5. MEKANISME AI — INTEGRASI AI TOOLS

### 5.1 Konsep Integrasi

Inggrisin Yuk tidak membangun AI sendiri di iterasi 1. Sebaliknya, aplikasi berfungsi sebagai **prompt delivery platform** — sistem yang meng-encode prompt belajar yang sudah dikurasi ke dalam URL, lalu mengarahkan user langsung ke ChatGPT atau Gemini AI dengan sesi yang sudah siap berjalan.

**Alur Teknis:**

1. User mengisi nama dan gender satu kali saat registrasi — tersimpan di profil
2. User memilih level CEFR (dari placement test atau manual) — tersimpan di profil
3. User klik module card di dashboard → masuk halaman sub-fitur
4. User klik topik hari ini (Day X)
5. Sistem **generate URL** dengan prompt yang di-encode — menggabungkan: nama user, level CEFR, modul, topik hari ini, dan instruksi struktur sesi
6. Tab baru terbuka → ChatGPT langsung merespons dengan sesi belajar terstruktur

**Format URL ChatGPT:**
```
https://chatgpt.com/?prompt=[PROMPT_TERENCODE]
```

**Komponen Prompt yang Di-encode:**

| Komponen | Isi | Contoh |
|---|---|---|
| Identitas User | Nama + panggilan pilihan user | `Namaku Arif. Panggilanku: Mas. Panggil aku Mas Arif.` |
| Level CEFR | Level aktif user | `Level bahasa Inggrisku: A1 (Beginner).` |
| Identitas Tutor | Karakter AI | `Kamu Kak Arif dari Inggrisin Yuk.` |
| Gaya Bahasa | Instruksi karakter | Santai, tunjukkan lewat gaya, pakai emoji secukupnya |
| Bahasa Koreksi | Progressif per level | A1–A2: Indonesia. B1–B2: Mix. C1–C2: Full English |
| Phonetic Symbol | Format pelafalan | UK English, ditampilkan dalam tanda `/ /` |
| Struktur Sesi | Langkah-langkah belajar | LANGKAH 1 (BOW + Challenge), LANGKAH 2 (Koreksi), LANGKAH 3 (Speaking) |
| Topik Hari Ini | Topik yang dipilih user | `TODAY'S TOPIC: Day 2 — Numbers & Time` |

### 5.2 AI Tools yang Didukung

| AI Tool | Provider | Keunggulan untuk Belajar | Mode Suara | Rekomendasi Modul |
|---|---|---|---|---|
| **ChatGPT** | OpenAI | Percakapan natural, Voice Mode matang, respons sangat kontekstual | Ya (Voice Mode) | Speaking, Roleplay Practice, Grammar |
| **Gemini AI** | Google | Multimodal, integrasi Google Workspace, respons cepat | Ya (Gemini Live) | Listening, Vocabulary, Reading |

**Catatan Penggunaan:**
- ChatGPT direkomendasikan untuk modul **Speaking**, **Roleplay Practice**, dan **Grammar** karena Voice Mode-nya yang lebih interaktif.
- Gemini AI direkomendasikan sebagai alternatif untuk modul **Vocabulary** dan **Listening**, serta cocok bagi user yang sudah familiar dengan ekosistem Google.
- Prompt Kak Arif telah dioptimalkan agar kompatibel di kedua platform.

### 5.3 Struktur Prompt

| Komponen Prompt | Fungsi | Contoh |
|---|---|---|
| Identitas User | Nama + panggilan pilihan user | Namaku Arif. Panggilanku: Mas. Panggil aku Mas Arif. |
| Level CEFR | Adaptasi kesulitan materi | Level bahasa Inggrisku: Intermediate (B1) |
| Topik Materi | Konten yang dipelajari | Topik: Daily Routines |
| Identitas Tutor | Konsistensi karakter AI | Kamu Kak Arif dari Inggrisin Yuk |
| Instruksi Bahasa | Bahasa koreksi sesuai level CEFR (progressif) | A1–A2: Indonesia. B1–B2: Mix. C1–C2: Full English |
| Struktur Sesi | Langkah-langkah belajar | LANGKAH 1, LANGKAH 2, LANGKAH 3 |
| Hak Cipta | Perlindungan konten | Struktur ini orisinal oleh Kak Arif, dilindungi hak cipta |

### 5.4 Persona AI Tutor — Kak Arif

| Atribut | Detail |
|---|---|
| Nama | Kak Arif |
| Asal | Inggrisin Yuk |
| Gaya Bahasa | Santai, seru, relate untuk anak muda Indonesia. TIDAK menyebut diri asyik/seru — tunjukkan lewat gaya |
| Bahasa Koreksi | Progressif sesuai level CEFR — lihat detail di 5.5 |
| Adaptivitas | Lancar → tambah kompleksitas. Macet → pattern drill, beri contoh, latih ulang |
| Pujian | Hanya di akhir sesi, tidak berlebihan. Tetap friendly tapi singkat |
| Phonetic Symbol | UK English, ditampilkan setelah setiap kosakata dalam tanda / / |

### 5.5 Kebijakan Bahasa Progressif per Level CEFR

Bahasa yang digunakan Kak Arif — baik dalam penjelasan, koreksi, maupun feedback — menyesuaikan level CEFR user secara otomatis. Semakin tinggi level, semakin dominan English digunakan sehingga user terbiasa berpikir dan merespons langsung dalam Bahasa Inggris.

| Level | Bahasa Pengantar & Penjelasan | Bahasa Koreksi & Feedback | Terjemahan |
|---|---|---|---|
| **A1** | Indonesia dominan | Full Indonesia | Semua kalimat English disertai terjemahan Indonesia |
| **A2** | Indonesia dominan, contoh dalam English | Indonesia | Kalimat English penting disertai terjemahan |
| **B1** | Mix seimbang — penjelasan Indonesia, instruksi English | Indonesia + English key terms | Terjemahan hanya untuk kosakata kritis |
| **B2** | English dominan | English, catatan Indonesia untuk poin kritis saja | Terjemahan hanya jika ada risiko miskonsepsi |
| **C1** | Full English | Full English | Tidak ada terjemahan |
| **C2** | Full English (gaya native speaker) | Full English — singkat, langsung, seperti native feedback | Tidak ada terjemahan |

**Catatan Implementasi dalam Prompt:**
- Level A1–A2: prompt menyertakan instruksi `"Berikan semua koreksi dan penjelasan dalam Bahasa Indonesia. Tambahkan terjemahan untuk setiap kalimat Bahasa Inggris."`
- Level B1–B2: prompt menyertakan instruksi `"Gunakan campuran Bahasa Inggris dan Indonesia. Koreksi boleh dalam Indonesia untuk poin kritis, sisanya dalam English."`
- Level C1–C2: prompt menyertakan instruksi `"All corrections, feedback, and explanations must be in English only. No Indonesian translation."`

---

## 6. STRATEGI MARKETING & LANDING PAGE

### 6.1 Saluran Akuisisi

| Saluran | Platform | Tujuan | CTA |
|---|---|---|---|
| Iklan Berbayar | TikTok Ads, Meta Ads (Instagram/Facebook) | Jangkau target user baru secara luas | Klik → Landing Page |
| Konten Organik | TikTok, Instagram Reels | Edukasi + branding | Klik link bio → Landing Page |
| WhatsApp Marketing | Broadcast ke kontak & komunitas | Warm audience | Link langsung ke halaman beli |

### 6.2 Landing Page

Landing page adalah halaman tersendiri (bukan homepage) yang digunakan khusus untuk traffic dari iklan. Dirancang untuk konversi maksimal — satu tujuan: **user langsung beli**.

| Komponen | Isi | Tujuan |
|---|---|---|
| Hero Section | Headline kuat + sub-headline + harga Rp 99.000 lifetime | Langsung tahu value + harga |
| Pain Points | 3–4 masalah umum yang relatable | User merasa "ini masalah saya" |
| Solusi | Cara kerja singkat + demo GIF/video | Tunjukkan bukti, bukan janji |
| Testimoni | 3–5 testimoni dari beta user | Social proof |
| Perbandingan Harga | Kursus konvensional vs Inggrisin Yuk | Rp 99.000 terasa sangat murah |
| CTA Beli | Tombol "Beli Sekarang — Rp 99.000" — menonjol, di atas dan bawah halaman | Konversi |
| FAQ | 5–7 pertanyaan umum | Hilangkan keraguan |

**Alur dari Iklan → Income:**
```
Iklan TikTok/Meta → Landing Page → Klik Beli → Isi WA/Email → Scan QRIS → Akun Aktif → Dashboard
```

---

## 7. COMPETITIVE ANALYSIS

### 6.1 Kompetitor Utama: inggriskuai.net (Versi Lama)

Berdasarkan analisis terhadap inggriskuai.net sebagai referensi kompetitor langsung dalam kategori yang sama (versi Excel/Spreadsheet):

| Aspek | inggriskuai.net (Versi Lama) | Inggrisin Yuk (Iterasi 1) |
|---|---|---|
| Platform | Web Application (sudah full web) | Web Application (Android, iOS, Laptop) |
| Aksesibilitas | Akses via browser, butuh akun | Akses via browser tanpa install, login cukup dengan nomor WA |
| Personalisasi | Profil user di platform mereka | Profil lengkap: nama, panggilan custom, gender, level CEFR |
| Progress Tracking | Ada di platform mereka | Otomatis, real-time, streak counter, per topik tertandai |
| Payment | Ada sistem payment mereka | QRIS terintegrasi, otomatis, flat Rp 99.000 lifetime |
| UI/UX | Web UI mereka | Modern web UI, responsive, mobile-friendly, dark/light mode |
| Onboarding | Onboarding mereka | Langsung ke dashboard setelah bayar, no setup kompleks |
| Panggilan AI Tutor | Format panggilan fixed | User pilih sendiri: Kak, Mas, Mr., Akang, dll |
| Perlindungan Konten | Sistem auth mereka | Login via nomor WA — tanpa password, tanpa OTP, frictionless |

### 6.2 Keunggulan Inggrisin Yuk vs Kompetitor Lain

| Fitur | Inggrisin Yuk | Duolingo | ELSA Speak | Ruangguru English |
|---|---|---|---|---|
| Bahasa Koreksi | Indonesia ✓ | Inggris | Inggris | Indonesia ✓ |
| Tutor Personal AI | Kak Arif — panggilan custom user ✓ | Tidak ada | Tidak ada | Terbatas |
| Koneksi ke ChatGPT | Ya ✓ | Tidak | Tidak | Tidak |
| Materi CEFR Terstruktur | 6 Level x 30 Topik ✓ | Partial | Tidak | Ya |
| Speaking Practice | Langsung ke ChatGPT ✓ | Terbatas | Ya | Terbatas |
| Harga | Rp 99.000 (lifetime) | Gratis/Rp139rb | Rp 120rb/bln | Bundle |
| Target User Indonesia | Spesifik Indonesia ✓ | Global | Global | Indonesia ✓ |

---

## 8. USER JOURNEY MAP

### 7.1 Journey User Baru

| Fase | Titik Kontak | Aksi User | Perasaan User | Peluang |
|---|---|---|---|---|
| Discovery | Iklan media sosial (TikTok/IG/FB) → Landing Page | Lihat iklan, klik ke landing page | Penasaran, tertarik | Copy iklan yang menekankan harga murah + AI |
| Landing | Landing Page khusus iklan | Baca value proposition, lihat harga Rp 99.000, langsung klik beli | Excited, ingin coba | CTA langsung bayar — tidak ada langkah ekstra |
| Purchase | Halaman Subscription | Isi nomor WA → scan QRIS → bayar | Mudah, cepat | Proses checkout semudah mungkin, maks 3 menit |
| First Login | Dashboard | Input nomor WA → langsung ke dashboard | Lega, antusias | Kesan pertama dashboard yang bersih dan jelas |
| First Use | Sub-Fitur → ChatGPT | Pilih modul, klik topik, buka ChatGPT | Kagum, seru, merasa dibantu | Wow moment di menit pertama |
| Retention | Streak + Progress | Belajar rutin, lihat progress bertambah | Termotivasi, bangga | Streak counter + topik tertandai |
| Advocacy | WhatsApp / Media Sosial | Share ke teman, rekomendasikan | Bangga, merasa maju | Testimoni organik → bahan iklan baru |

---

## 9. KPI & SUCCESS METRICS

**Target Utama: 1.000 user berbayar dalam 1 bulan pertama sejak launch**

| Metrik | Target (Bulan 1) | Cara Ukur |
|---|---|---|
| Paying Users | 1.000 user | Payment gateway records |
| Revenue | Rp 99.000.000 (1.000 × Rp 99.000) | Payment gateway records |
| Day-7 Retention | 40% user aktif di hari ke-7 | Analytics / session tracking |
| Daily Active Users | 30% dari total user | Session tracking |
| Average Session Duration | Minimal 15 menit/sesi | Time on app |
| Module Completion Rate | 50% user selesaikan minimal 5 topik | Progress database |
| Streak > 7 hari | 20% user punya streak 7+ hari | Streak tracking |
| NPS Score | Minimal 7/10 | In-app / WA survey pasca beli |
| Testimoni Terkumpul | Minimal 10 testimoni nyata | Manual collect + in-app |
| ROAS Iklan | Minimal 3× (setiap Rp 1 iklan → Rp 3 revenue) | Meta/TikTok Ads dashboard |

---

## 10. PROJECT ROADMAP — ITERASI 1

**Target: Income pertama maksimal di bulan ke-2 sejak mulai development.**

### 9.1 Timeline Development (Bulan 1)

| Fase | Durasi | Deliverable Utama |
|---|---|---|
| Fase 1 — Foundation & Design | Minggu 1 | PRD final, prompt library semua modul + level, wireframe & UI design system |
| Fase 2 — Development | Minggu 2–3 | Frontend semua halaman, backend auth (login by nomor WA, passwordless), QRIS payment integration, URL prompt generator |
| Fase 3 — QA & Finalisasi | Minggu 4 | Bug fixing, QA testing internal, landing page iklan selesai |

### 9.2 Timeline Launch & Income (Bulan 2)

| Fase | Durasi | Deliverable Utama |
|---|---|---|
| Fase 4 — Beta Testing | Minggu 5–6 | Testing dengan 10–20 user terpilih, collect feedback, perbaikan minor, kumpulkan testimoni nyata |
| Fase 5 — Launch & Iklan | Minggu 7–8 | Soft launch + jalankan iklan (TikTok Ads / Meta Ads) → landing page → pembelian. Target: income masuk |

### 9.3 Iterasi 2 (Bulan 3+)

| Fitur | Keterangan |
|---|---|
| AI Model Sendiri | Tidak lagi menggunakan ChatGPT/Gemini — platform menggunakan model AI proprietary Inggrisin Yuk |
| TOEFL & IELTS Prep | Modul persiapan ujian internasional |
| Referral Program | User dapat komisi untuk setiap referral yang berhasil membeli |
| Mobile App Native | Aplikasi Android & iOS native (bukan web app) |

---

## 11. CATATAN & KETENTUAN

### 10.1 Hak Cipta

Seluruh struktur prompt, metode belajar, dan sistem tutor AI Kak Arif dalam aplikasi ini dikembangkan oleh **Arif Romadhan — Inggrisin Yuk** dan telah didaftarkan dalam proses perlindungan Hak Kekayaan Intelektual (HAKI) sesuai peraturan yang berlaku di Indonesia.

Sistem modul adaptif ini dirancang agar tutor AI dapat menyesuaikan pertanyaan dan koreksi secara dinamis sesuai respons pengguna di setiap sesi belajar.

### 10.2 Disclaimer

- Inggrisin Yuk di iterasi 1 menggunakan ChatGPT dan Gemini AI sebagai engine AI — bukan AI proprietary. Iterasi 2 akan menggunakan model AI sendiri
- Pengalaman belajar bergantung pada koneksi internet dan ketersediaan layanan ChatGPT/Gemini AI
- Harga Rp 99.000 lifetime berlaku untuk pembelian di iterasi 1 — harga iterasi berikutnya dapat berubah
- User yang membeli di iterasi 1 tetap mendapatkan akses selamanya termasuk semua update materi
- Modul TOEFL, IELTS, dan fitur Referral Program dijadwalkan hadir di Iterasi 2

---

*Inggrisin Yuk — Developed by Arif Romadhan — 2026*
