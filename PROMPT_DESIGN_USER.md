# INGGRISIN YUK — PROMPT DESIGN USER APP (v0.dev)

## Cara Penggunaan

1. Buka [v0.dev](https://v0.dev)
2. Copy prompt pada section screen yang ingin dibuat
3. Paste ke v0.dev chat → klik Generate
4. Review hasil, iterate via chat jika ada yang kurang
5. Klik "Open in v0" → Export code ke project Next.js

## Design Language (konsisten semua halaman)

- **Framework**: Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/ui
- **Primary color**: Blue `#2563EB`
- **Background**: White / `gray-50`
- **Font**: Inter
- **Style**: Modern, clean, friendly, mobile-first responsive
- **Language**: Bahasa Indonesia untuk semua UI text

---

## Screen 1 — Homepage

**Deskripsi:** Halaman utama yang dilihat user pertama kali. Berfungsi sebagai branding dan pintu masuk ke pembelian.

**Prompt:**

```
Build a homepage for "Inggrisin Yuk" - an AI-powered English learning web app for Indonesian users.

Tech stack: Next.js 14 TypeScript, Tailwind CSS, shadcn/ui. Mobile-first responsive.

NAVBAR (sticky, white background, subtle bottom shadow):
- Left: Logo text "Inggrisin Yuk" bold blue (#2563EB)
- Right: "Login" ghost button + "Beli Sekarang" solid blue button

HERO SECTION (centered, white bg, generous padding):
- Small badge: "🤖 Powered by ChatGPT & Gemini AI"
- H1 (large bold): "Belajar Bahasa Inggris yang Seru, Personal, dan Langsung Praktik dengan AI"
- Subtitle: "Bukan aplikasi biasa — kamu langsung belajar bareng AI tutor Kak Arif, sesuai levelmu, sesuai topikmu, kapan saja dan di mana saja."
- Price highlight box: "✨ Akses Selamanya — hanya Rp 99.000 sekali bayar"
- CTA button (large, blue, rounded): "Beli Sekarang — Rp 99.000"
- Fine print below button: "Tidak ada langganan bulanan. Tidak ada biaya tambahan."

HOW IT WORKS (gray-50 bg, "Cara Kerja" heading, 4 steps):
Horizontal on desktop, vertical on mobile. Each step: number circle, icon, title, description.
1. 💳 Beli Akses — "Bayar QRIS Rp 99.000, akun langsung aktif"
2. 🔑 Login — "Masuk dengan nomor WhatsApp, tanpa password"
3. 📚 Pilih Modul & Topik — "7 fitur, 6 level CEFR, 30 topik per level"
4. 🤖 Belajar di ChatGPT — "AI tutor Kak Arif membimbing langsung"

7 MAIN FEATURES SECTION (white bg, "7 Fitur Unggulan" heading, grid 3 col desktop / 2 col mobile):
Each card: colored icon background, feature name bold, short description.
1. 🎯 Placement Test (gray) — "Cari tahu level bahasa Inggrismu dulu"
2. 📖 Vocabulary (blue #2563EB) — "Kosakata fungsional + Writing & Speaking Challenge"
3. ✏️ Grammar (amber #F59E0B) — "Grammar praktis yang langsung bisa dipakai"
4. 🎤 Speaking (orange #F97316) — "Latihan speaking dengan feedback AI langsung"
5. 👂 Listening (purple #8B5CF6) — "Latih pemahaman dari cerita bahasa Inggris"
6. 🎭 Roleplay Practice (green #10B981) — "Simulasi percakapan nyata dengan AI"
7. ⭐ Latihan Bebas — BONUS (light purple #A78BFA, gold "BONUS" badge top-right) — "Baca Bareng Kak Arif · Pronunciation Challenge · Vocab Mission — disesuaikan level CEFR otomatis"

KENAPA CARA LAMA TIDAK CUKUP? (white bg, heading centered "Kenapa cara lama tidak cukup?"):
Subheading (gray): "Banyak cara belajar Bahasa Inggris — tapi kenapa hasilnya masih sama saja?"
3 problem cards in a grid (1 col mobile, 3 col desktop):

Card 1 — Kursus Grup (red-50 bg, red border, rounded-2xl):
- Emoji: 😔
- Title: "Kursus Grup" + Badge (red small pill): "Waktu sangat terbatas"
- Problem: "Waktu belajar dibagi 10–20 orang. Giliran ngomong cuma sebentar — latihan speaking tidak pernah cukup."

Card 2 — Private Lesson (orange-50 bg, orange border):
- Emoji: 😤
- Title: "Private Lesson" + Badge (orange small pill): "Mahal & tidak fleksibel"
- Problem: "Personal memang, tapi Rp 500.000–2.000.000 per bulan. Tidak semua orang sanggup bayar rutin."

Card 3 — Aplikasi Belajar Biasa (yellow-50 bg, yellow border):
- Emoji: 😴
- Title: "Aplikasi Belajar Biasa" + Badge (yellow small pill): "Tidak ada hasil nyata"
- Problem: "Gamifikasi yang membosankan. Sudah belajar bertahun-tahun tapi masih tidak pede ngomong."

Solution callout below cards (blue-50 bg, blue border, rounded-2xl, centered text):
"💡 Inggrisin Yuk: AI tutor Kak Arif 100% fokus ke kamu — Rp 99.000 sekali bayar, akses selamanya."
Small text: "Tidak ada giliran. Tidak ada jadwal. Mulai kapan saja, dari level mana saja."

TESTIMONIALS (gray-50 bg, 3 placeholder cards):
Each card: 5 stars, quote text placeholder, avatar circle with initial, name, role.

BOTTOM CTA (blue gradient bg, white text):
- H2: "Siap Upgrade Bahasa Inggrismu?"
- Large white button: "Beli Sekarang — Rp 99.000 Selamanya"
- Subtext: "Sekali bayar, akses selamanya. Semua modul, semua level."

FOOTER (dark gray bg, white text):
- Logo + tagline "Belajar Bahasa Inggris yang Seru, Personal, dan Langsung Praktik dengan AI"
- Links: Beranda, Fitur, Cara Kerja
- "© 2026 Inggrisin Yuk. Developed by Arif Romadhan"
```

---

## Screen 2 — Landing Page (Iklan)

**Deskripsi:** Halaman khusus untuk traffic dari iklan TikTok/Meta. Fokus konversi, tanpa navigasi yang mengalihkan perhatian.

**Prompt:**

```
Build a high-conversion landing page for "Inggrisin Yuk" specifically for paid ads traffic (TikTok Ads / Meta Ads). Design for maximum conversion — one goal: user buys.

Tech stack: Next.js 14 TypeScript, Tailwind CSS, shadcn/ui. Mobile-first.

MINIMAL NAVBAR (no nav links, no distraction):
- Left: Logo "Inggrisin Yuk"
- Right only: "Beli Sekarang" blue button

HERO (above the fold, conversion-focused):
- Eyebrow pill: "🤖 Belajar Bahasa Inggris x AI"
- H1 (large, bold, impactful): "Ngomong Bahasa Inggris Lancar Pakai AI — Bayar Sekali, Belajar Selamanya"
- Subtitle: "Bukan hafalan. Bukan video boring. Kamu langsung practice bareng AI tutor Kak Arif yang sabar, tersedia 24 jam."
- CTA button (large, blue, full-width on mobile): "Beli Sekarang — Rp 99.000"
- Social proof: "⭐⭐⭐⭐⭐ Dipercaya ratusan pelajar Indonesia"

PAIN POINTS SECTION (white bg, "Masalahnya Apa?" heading):
4 items with ❌ icons:
❌ Kursus bahasa Inggris mahal Rp 500rb–2jt/bulan, tapi tetap gak pede ngomong
❌ Sudah belajar bertahun-tahun tapi stuck di grammar teori doang
❌ Gak ada teman latihan speaking yang sabar dan tidak menghakimi
❌ Aplikasi belajar yang ada membosankan dan tidak terasa hasilnya

SOLUTION SECTION (light blue bg, "Inggrisin Yuk Solusinya" heading):
4 items with ✅ icons:
✅ Langsung practice speaking & conversation dengan AI tutor personal
✅ AI tutor Kak Arif yang adaptif — materi sesuai levelmu dan topikmu
✅ Struktur belajar CEFR A1–C2: dari nol sampai mahir, tidak perlu ngulang dari awal
✅ Hanya Rp 99.000 — sekali bayar untuk selamanya, tidak ada biaya lagi

PRICE COMPARISON (two cards side by side):
Left card (gray, strikethrough prices): 
"Kursus Konvensional"
Rp 500.000 – 2.000.000 / bulan
• Jadwal terbatas
• Mahal

Right card (blue, highlighted, "PILIHAN CERDAS" badge):
"Inggrisin Yuk"
Rp 99.000 SELAMANYA
• Akses 24 jam
• Semua level & modul
• Update gratis selamanya

CTA BUTTON (full width, blue): "Beli Sekarang — Rp 99.000"

TESTIMONIALS (3 cards, 5-star rating):
Placeholder cards with avatar, name, short quote about speaking improvement.

FAQ ACCORDION (6 items):
Q: Apakah harus install aplikasi?
A: Tidak. Inggrisin Yuk berbasis web — bisa dibuka langsung di browser HP atau laptop, tanpa install.

Q: Apakah perlu akun ChatGPT?
A: Ya, perlu akun ChatGPT (gratis) di chatgpt.com. Semua sesi belajar berlangsung di ChatGPT.

Q: Berapa lama aksesnya?
A: Selamanya. Bayar sekali Rp 99.000, akses tidak pernah expired.

Q: Bagaimana cara bayarnya?
A: QRIS — scan dengan e-wallet atau mobile banking apapun yang mendukung QRIS.

Q: Apakah ada uji coba gratis?
A: Tidak ada free trial. Langsung beli akses lifetime dengan harga Rp 99.000.

Q: Untuk level bahasa Inggris berapa?
A: Semua level! Dari A1 (pemula absolut) sampai C2 (hampir native). Ada Placement Test untuk cari tahu levelmu.

FINAL CTA (blue gradient, white text):
H2: "Mulai Belajar Sekarang"
Price: "Rp 99.000 — Akses Selamanya"
Button (large, white text, blue bg): "Beli Sekarang"
Fine print: "Pembayaran aman via QRIS. Akun aktif otomatis setelah bayar."
```

---

## Screen 3 — Subscription & Checkout

**Deskripsi:** Halaman pembelian akses. User isi nama panggilan + nomor WA, lalu bayar QRIS.

**Prompt:**

```
Build a checkout/subscription page for "Inggrisin Yuk".

Tech stack: Next.js 14 TypeScript, Tailwind CSS, shadcn/ui. Mobile-first.

Layout: Two columns on desktop (form left, order summary right), single column stacked on mobile (summary first, then form).

LEFT COLUMN — CHECKOUT FORM:
- Heading: "Daftar & Beli Akses"
- Subtext: "Isi data di bawah untuk membuat akun sekaligus bayar"

Form fields:
1. Label "Nama Panggilan *" — text input, required, placeholder "contoh: Arif"
   Helper text: "Digunakan AI tutor untuk menyapa kamu"
2. Label "Nomor WhatsApp *" — tel input, required, placeholder "contoh: 08123456789"  
   Helper text (amber warning): "⚠️ Pastikan benar — digunakan sebagai kunci login kamu"
3. Label "Email (opsional)" — email input, placeholder "contoh: arif@email.com"
   Helper text: "Tidak wajib. Tidak digunakan untuk login."

Payment method section:
- Label: "Metode Pembayaran"
- Single selected option card: QRIS logo + "QRIS — Semua e-wallet & mobile banking" + green "Tersedia" badge

Submit button (full width, blue, large): "Beli Sekarang — Rp 99.000"
Fine print: "Dengan melanjutkan, kamu setuju dengan syarat & ketentuan Inggrisin Yuk"

RIGHT COLUMN — ORDER SUMMARY (sticky on desktop):
- Card heading: "Ringkasan Pesanan"
- Product row: "Inggrisin Yuk — Lifetime Access"
- Feature list (green checkmarks, small text):
  ✓ Placement Test untuk cari tahu levelmu
  ✓ 5 Modul Utama (Vocabulary, Grammar, Speaking, Listening, Roleplay)
  ✓ 6 Level CEFR per modul (A1–C2)
  ✓ 30 Topik + Day 31 Test per level
  ✓ Modul Bonus — Tool AI
  ✓ Akses Selamanya + semua update gratis
- Divider
- Total row: "Total" + "Rp 99.000" (large, bold, blue)
- "Sekali bayar, tidak ada biaya tambahan" (small, gray)

SUCCESS STATE (replace form content after payment, or show as modal):
- Large green checkmark icon
- H2: "Pembayaran Berhasil! 🎉"
- "Akun kamu sudah aktif, Arif!"
- QR Code placeholder box (large, centered) with label "Scan dengan e-wallet/m-banking"
- Countdown timer: "QR berlaku: 14:59" (amber text)
- Divider
- Important info box (amber/yellow bg):
  "📋 Simpan Order ID kamu"
  Order ID in large monospace: "INY-20260617-0042"
  Copy button next to it
  Small text: "Simpan ini. Jika ada masalah (salah nomor WA, dll) kamu perlu Order ID ini untuk lapor ke CS."
- Button (blue, full width): "Masuk ke Dashboard →"
```

---

## Screen 4 — Login

**Deskripsi:** Halaman login sederhana. User hanya input nomor WhatsApp, tanpa password.

**Prompt:**

```
Build a clean minimal login page for "Inggrisin Yuk". Passwordless login using WhatsApp number only — no password, no OTP.

Tech stack: Next.js 14 TypeScript, Tailwind CSS, shadcn/ui. Mobile-first.

Layout: Full page gray-50 background. Centered card (max-width 400px, white, rounded-xl, shadow).

ABOVE CARD:
- Logo "Inggrisin Yuk" (bold, blue) centered
- Tagline (small, gray): "Belajar Bahasa Inggris dengan AI"

CARD CONTENT:
- Heading: "Masuk ke Akun Kamu"
- Subtext (gray): "Masukkan nomor WhatsApp yang kamu daftarkan saat beli akses"

- Label "Nomor WhatsApp"
- Tel input (large, full width, placeholder "08123456789")

- "Masuk" button (full width, blue): "Masuk →"

- Divider with "atau" text

- Secondary text: "Belum punya akun?" + "Beli Akses — Rp 99.000 →" (blue link)

ERROR STATE (show inline below input if WA not found):
- Red alert box: "Nomor WhatsApp tidak ditemukan. Pastikan nomor yang kamu masukkan sama dengan saat pembelian."
- Link: "Nomor WA berbeda saat daftar? Hubungi CS via WhatsApp →"

LOADING STATE: Button shows spinner + "Memverifikasi..."
```

---

## Screen 5 — Dashboard

**Deskripsi:** Halaman utama setelah login. User melihat streak, pilih modul yang ingin dipelajari.

**Prompt:**

```
Build a user dashboard for "Inggrisin Yuk" - shown after login. This is the main navigation hub.

Tech stack: Next.js 14 TypeScript, Tailwind CSS, shadcn/ui. Mobile-first responsive.

NAVBAR (sticky, white, shadow-sm):
- Left: Logo "Inggrisin Yuk" (blue, bold)
- Right: User info row — avatar circle (blue, shows initials "A") + "Arif — A1 (Beginner)" text + pencil icon button + logout icon button

MAIN CONTENT (container, centered, padding x-4):

1. BANNER — mobile only (orange/amber gradient, rounded-xl, dismissible X):
"📱 Butuh ChatGPT untuk belajar" + small text "Download gratis di Play Store / App Store" + "Download" white outline button

2. GREETING:
Time-based: "🌅 Selamat pagi, Arif!" in heading size
Below: Streak pill (fire emoji bg, orange): "🔥 3 hari berturut-turut · Tetap semangat!"

3. SECTION HEADING: "Mau belajar apa hari ini?" (h2)

4. MODULE CARDS GRID (2 col mobile, 3 col desktop, gap-4):

Card style: rounded-xl, shadow-sm, hover:shadow-md, cursor-pointer, white bg with colored header strip.

Card 1 — Vocabulary:
- Color strip: blue #2563EB
- Icon: 📖 on blue bg
- Title: "Vocabulary"
- Desc: "Kosakata fungsional + Writing & Speaking Challenge"
- Progress: progress bar (thin, blue) + "0/30 topik"

Card 2 — Grammar:
- Color strip: amber #F59E0B
- Icon: ✏️ on amber bg
- Title: "Grammar"
- Desc: "Grammar praktis untuk percakapan sehari-hari"
- Progress: progress bar (amber) + "0/30 topik"

Card 3 — Speaking:
- Color strip: orange #F97316
- Icon: 🎤 on orange bg
- Title: "Speaking"
- Desc: "Latihan speaking dengan feedback AI langsung"
- Progress: progress bar (orange) + "0/30 topik"

Card 4 — Listening:
- Color strip: purple #8B5CF6
- Icon: 👂 on purple bg
- Title: "Listening"
- Desc: "Latih pemahaman dari cerita berbahasa Inggris"
- Progress: progress bar (purple) + "0/30 topik"

Card 5 — Roleplay Practice:
- Color strip: green #10B981
- Icon: 🎭 on green bg
- Title: "Roleplay Practice"
- Desc: "Simulasi percakapan nyata dengan AI"
- Progress: progress bar (green) + "0/30 topik"

Card 6 — Latihan Bebas (special, full-width on mobile or spans 2 col):
- Color strip: light purple #A78BFA
- Icon: 🎯
- "BONUS" gold badge (top-right corner)
- Title: "Latihan Bebas"
- Desc: "Baca Bareng Kak Arif · Pronunciation Challenge · Vocab Mission"
- No progress bar — "Akses Bebas" tag instead
- Small caption below desc (extra small, purple muted): "Disesuaikan level CEFR kamu secara otomatis"

5. PANDUAN PENGGUNAAN ENTRY POINT (below module cards grid, subtle):
Small row: 📖 icon + "Panduan Penggunaan — Cara pakai Inggrisin Yuk" + chevron right icon
Style: gray-500 text, text-sm, rounded-lg, border border-gray-200, py-3 px-4, hover:bg-gray-50
Purpose: for users who skipped the guide on first login and want to read it again
```

---

## Screen 6 — Halaman Sub-Fitur Modul

**Deskripsi:** Halaman daftar topik per modul. Template ini dipakai oleh semua 5 modul utama. Contoh: Vocabulary.

**Prompt:**

```
Build a module topic list page for "Inggrisin Yuk". This is a template used by all 5 core learning modules.
Using Vocabulary module as the example.

Tech stack: Next.js 14 TypeScript, Tailwind CSS, shadcn/ui. Mobile-first.

NAVBAR:
- Left: "← Kembali" text button (gray, small)
- Center: Logo "Inggrisin Yuk"
- Right: User avatar + name

MODULE HEADER SECTION (blue #2563EB background, white text, rounded-b-2xl):
- Row 1: 📖 icon (large, white) + "Vocabulary" heading (bold, large)
- Row 2: Tagline "Kosakata fungsional dan kontekstual"
- Row 3: "▶ TONTON — Hafal Vocab Tanpa Hafalan" — YouTube link button (white outline, small)
- Row 4: 
  Left: Progress bar (white bg, blue fill, 2/30 filled as example) + "2/30 topik"
  Right: "↺ Reset" ghost button (white, small)

TOPIC LIST (white bg, no padding between items, divide-y):

Day 1–30 rows:
Each row (py-3, px-4, flex items-center, gap-3):
- Left: Badge "DAY 1" (rounded, bold, small) — blue bg white text when unvisited, faded when visited
- Middle: Topic name "Daily Routines" (flex-1)
- Right: → arrow button (blue) OR ✓ check icon (gray) if visited

Show these states in the list:
- Row "DAY 1" — Daily Routines → VISITED state (faded blue badge, gray text, ✓ icon, whole row opacity-70)
- Row "DAY 2" — Family & People → VISITED state
- Row "DAY 3" — Food & Drinks → UNVISITED state (full blue badge, dark text, → arrow)
- Row "DAY 4" to "DAY 10" — various topics, all UNVISITED
...continue pattern for up to DAY 30

DAY 31 ROW (special, after a thin divider line):
- Different styling: amber/gold accent
- Left: "⭐ DAY 31" badge (amber bg, white text)
- Middle: 
  Top: "Level Placement Test" (bold)
  Bottom: "Test materi Day 1–30 · Dapat score" (small, gray)
- Right: → arrow button (amber)
- Row bg: amber-50
```

---

## Screen 7 — Edit Profil

**Deskripsi:** Halaman untuk mengubah data profil user. Diakses dari ikon pensil di navbar dashboard.

**Prompt:**

```
Build an edit profile page for "Inggrisin Yuk".

Tech stack: Next.js 14 TypeScript, Tailwind CSS, shadcn/ui. Mobile-first.

Layout: Max-width 480px, centered. Or full-width on mobile with padding.

TOP:
- "← Kembali ke Dashboard" link (small, gray, with arrow)
- Page heading: "Edit Profil" (bold, large)

PROFILE CARD (white, rounded-xl, shadow-sm, p-6):

Avatar section (centered at top):
- Large circle (80px) with user's initials "A" in white on blue bg
- "Ubah Foto" text link below (gray, small) — placeholder only

Form fields (stack with gap-4):

1. "Nama Panggilan" (required)
   - Text input, value "Arif"
   - Helper: "Digunakan AI untuk menyapa kamu"

2. "Panggilan / Gelar"
   - Select dropdown
   - Options: Kak (default), Mas, Bang, Pak, Bu, Mr., Ms., Mbak, Akang, Bro, Sis, Neng
   - Helper: "Contoh hasil: Kak Arif, Mas Arif, Mr. Arif"

3. "Gender"
   - Radio group (horizontal): ● Laki-laki  ○ Perempuan
   
4. "Level CEFR Aktif"
   - Select dropdown with 6 options:
     A1 — Pemula (Beginner)
     A2 — Dasar (Elementary)
     B1 — Menengah (Intermediate)
     B2 — Menengah Atas (Upper-Intermediate)
     C1 — Mahir (Advanced)
     C2 — Expert (Mastery)
   - Helper: "Menentukan materi dan bahasa koreksi AI"

Info box (blue-50 bg, blue border-left, rounded):
"💡 Perubahan profil langsung mempengaruhi sesi belajar AI berikutnya"

"Simpan Perubahan" button (full width, blue)

PLACEMENT TEST SECTION (below card, separate card, gray-50 bg):
- Heading: "Placement Test"
- Row: "Level Rekomendasi:" + "A2 (Elementary)" in blue badge  
  — or if not taken: "Belum ikut placement test" (gray italic)
- Row: "Terakhir ikut:" + "15 Juni 2026" (gray small)
  — or if not taken: "-"
- Link button: "Ikut Placement Test →" or "Ulangi Placement Test →"
```

---

## Screen 8 — Placement Test Modal (First Login)

**Deskripsi:** Modal yang muncul setelah login pertama kali. User memilih antara ikut placement test atau pilih level manual.

**Prompt:**

```
Build a modal/dialog that appears after a user's very first login to "Inggrisin Yuk". 
It prompts them to take a Placement Test or choose their level manually.
Modal should NOT be dismissible by clicking the backdrop — user must choose one option.

Tech stack: Next.js 14 TypeScript, Tailwind CSS, shadcn/ui Dialog component.

MODAL (centered, white, rounded-2xl, shadow-xl, max-width 440px, padding generous):

Top section:
- Large emoji centered: 🎯 (or a target/level illustration)
- H2: "Hei Arif, selamat datang! 🎉"
- Subheading (gray): "Mau tahu level Bahasa Inggrismu sekarang?"

Description text:
"Ikut Placement Test singkat untuk tahu kamu ada di level mana — A1 sampai C2. Hasilnya jadi panduan modul dan topik yang paling pas buat kamu."

Feature list (3 items with checkmark icons, small):
✓ 15–20 pertanyaan adaptif
✓ Dibuka di ChatGPT (gratis)
✓ Selesai dalam 10–15 menit

Divider

TWO ACTION BUTTONS (stacked, gap-3):

Button 1 (primary, blue, full width, large):
"🎯 Mulai Placement Test"
Small text below button (gray): "Dibuka di ChatGPT · Hasil masuk ke profilmu"

Button 2 (outline/ghost, full width):
"Pilih Level Sendiri"
Small text below button (gray): "Langsung ke dashboard, atur level di Edit Profil kapan saja"

Bottom note (very small, gray, centered):
"Kamu bisa ikut Placement Test kapan saja dari halaman Edit Profil"
```

---

## Screen 9 — Panduan Penggunaan

**Deskripsi:** Halaman panduan cara menggunakan Inggrisin Yuk. Tampil otomatis setelah payment berhasil atau login pertama kali. Bisa diakses kembali kapan saja dari dashboard.

**Prompt:**

```
Build a "How to Use" onboarding guide page for "Inggrisin Yuk". This page appears automatically after first payment or first login. User can also access it anytime from the dashboard.

Tech stack: Next.js 14 TypeScript, Tailwind CSS, shadcn/ui. Mobile-first.

Layout: Max-width 560px, centered, white bg, padding generous. No navbar — minimal header only.

TOP HEADER (centered):
- Logo text "Inggrisin Yuk" (blue bold, small)
- H1: "Panduan Penggunaan" (large, bold)
- Subtext (gray): "Ikuti 4 langkah berikut sebelum mulai belajar"

STEPS (stacked, card style each step, rounded-xl, border, shadow-sm, gap-4):

STEP 1 — Buat Akun ChatGPT (blue left border accent):
- Step badge: "Langkah 1" (small, blue pill)
- Icon: 🤖
- Title: "Buat Akun ChatGPT"
- Description: "Semua sesi belajar berlangsung di ChatGPT. Pastikan kamu punya akun ChatGPT — akun gratis sudah cukup, tidak perlu berlangganan ChatGPT Plus."
- Two rows (icon + text):
  ✓ ChatGPT — untuk semua modul (Vocabulary, Grammar, Speaking, Listening, Roleplay)
  ✓ ChatGPT — untuk Tool AI (Teleprompter, Pronunciation, Vocab AI, Harry Potter AI)
- Small link: "Belum punya? Daftar gratis di chatgpt.com →"

STEP 2 — Download Aplikasi (orange left border accent, mobile-only indicator):
- Step badge: "Langkah 2" (small, orange pill)
- Icon: 📱
- Title: "Download Aplikasi ChatGPT"
- Description: "Untuk pengguna Android dan iOS, download aplikasi ChatGPT terlebih dahulu agar sesi belajar bisa langsung dibuka."
- Two big download buttons (side by side on desktop, stacked on mobile):
  Button A: Google Play logo + "Download di Google Play" (dark/black bg, white text, rounded-xl)
  Button B: Apple logo + "Download di App Store" (dark/black bg, white text, rounded-xl)
- Small note below buttons (gray, italic): "Pengguna laptop/desktop tidak perlu download — langsung buka di browser."

STEP 3 — Login ke ChatGPT (purple left border accent):
- Step badge: "Langkah 3" (small, purple pill)
- Icon: 🔑
- Title: "Login di ChatGPT"
- Description (two sub-points):
  📱 Mobile: Login di aplikasi ChatGPT yang sudah kamu download
  💻 Web: Login di chatgpt.com di browser
- Info box (blue-50 bg, rounded-lg): "💡 Pastikan sudah login sebelum klik topik — sesi belajar akan langsung terbuka tanpa perlu setup manual."

STEP 4 — Cara Pakai (green left border accent):
- Step badge: "Langkah 4" (small, green pill)
- Icon: 📚
- Title: "Cara Menggunakan Inggrisin Yuk"
- Mini step list (small, numbered, compact):
  1. Pilih modul di dashboard (Vocabulary, Grammar, Speaking, dll)
  2. Pilih topik hari ini (Day 1–30)
  3. Klik "Mulai Belajar" → ChatGPT terbuka otomatis
  4. Belajar bareng AI tutor Kak Arif
  5. Kembali ke app — topik otomatis tertandai ✓

BOTTOM ACTIONS (sticky on mobile, or fixed at bottom of page):
- Primary button (full width, blue, large): "Mulai Belajar →"
- Secondary link (small, gray, centered below button): "Lewati — buka panduan ini kapan saja dari Dashboard"
```

---

*File ini berisi 9 prompt untuk semua screen User App Inggrisin Yuk.*
*Setelah generate, iterate via v0.dev chat untuk refinement detail.*
