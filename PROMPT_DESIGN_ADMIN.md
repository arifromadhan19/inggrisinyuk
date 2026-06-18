# INGGRISIN YUK — PROMPT DESIGN ADMIN PANEL (v0.dev)

## Cara Penggunaan

1. Buka [v0.dev](https://v0.dev)
2. **Mulai dari Screen 1 (Login Admin)** — untuk set design language dulu
3. Copy prompt screen berikutnya, tambahkan: *"Use the same design language as the previous screen"*
4. Export code ke project Next.js di folder `/app/admin/`

## Design Language Admin Panel

- **Framework**: Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/ui
- **Layout**: Sidebar kiri (fixed) + main content kanan
- **Primary color**: Blue `#2563EB`
- **Sidebar bg**: Dark (`gray-900` atau `slate-800`)
- **Content bg**: `gray-50`
- **Style**: Clean, data-dense, professional — bukan flashy
- **Language**: Bahasa Indonesia untuk semua UI text

## Struktur Layout Admin (semua screen kecuali Login)

```
┌─────────────────────────────────────────────┐
│  SIDEBAR (fixed, dark, 240px)               │
│  - Logo "Inggrisin Yuk" + "Admin" badge     │
│  - Nav: Dashboard, Users, Transaksi,        │
│         CS Tools, Export                    │
│  - Bottom: Admin name + Logout              │
├─────────────────────────────────────────────┤
│  MAIN CONTENT (scroll, gray-50)             │
│  - Page header (title + actions)            │
│  - Content area                             │
└─────────────────────────────────────────────┘
```

---

## Screen 1 — Login Admin

**Deskripsi:** Halaman login khusus admin. Email + password. Terpisah dari sistem login user.

**Prompt:**

```
Build an admin login page for "Inggrisin Yuk" internal admin panel.

Tech stack: Next.js 14 TypeScript, Tailwind CSS, shadcn/ui. 

Layout: Full page, dark blue-gray gradient background (#0F172A to #1E293B). 
Centered login card (max-width 400px, white, rounded-2xl, shadow-2xl, p-8).

ABOVE CARD (centered):
- Logo text "Inggrisin Yuk" (white, bold, large)
- Badge below logo: "Admin Panel" (red/rose pill badge)

CARD CONTENT:
- Heading: "Masuk ke Admin Panel" (gray-900, bold)
- Subtext: "Akses terbatas untuk tim internal Inggrisin Yuk" (gray-500, small)

Form:
1. Label "Email" — email input (full width, placeholder "admin@inggrisinyuk.ai")
2. Label "Password" — password input (full width) with show/hide eye icon toggle

"Masuk" button (full width, blue #2563EB, large): "Masuk ke Admin Panel"

ERROR STATE (red alert box above form):
"Email atau password salah. Coba lagi."

LOADING STATE: Button spinner + "Memverifikasi..."

Bottom note (very small, gray-400, centered):
"Lupa akses? Hubungi developer Arif Romadhan"
```

---

## Screen 2 — Dashboard Admin

**Deskripsi:** Halaman pertama setelah login admin. Menampilkan metrik utama platform dan grafik pertumbuhan.

**Prompt:**

```
Build an admin dashboard for "Inggrisin Yuk" admin panel.

Tech stack: Next.js 14 TypeScript, Tailwind CSS, shadcn/ui, Recharts for charts.

LAYOUT: Fixed sidebar left (240px, dark gray-900) + main content right (gray-50 bg, scrollable).

SIDEBAR (dark gray-900, white text):
- Top: Logo "Inggrisin Yuk" (white, bold) + "Admin" red badge
- Nav items (with icons, hover bg-gray-800, active bg-blue-600):
  📊 Dashboard (active)
  👥 User Management
  💳 Transaksi
  🛠 CS Tools
  📥 Export Data
- Bottom (mt-auto): "Super Admin" label + small email + logout button

TOPBAR (white, shadow-sm, flex between):
- Left: Page title "Dashboard" (h1, gray-900)
- Right: Current date "Selasa, 17 Juni 2026" (gray-500, small)

METRIC CARDS (grid 2 col mobile / 5 col desktop, gap-4):

Card 1 — Total User (blue icon):
- Icon: 👥 (blue circle bg)
- Label: "Total User"
- Value: "1.247" (large, bold)
- Subtext: "+12 hari ini" (green, small)

Card 2 — Total Revenue (green icon):
- Icon: 💰 (green circle bg)
- Label: "Total Revenue"
- Value: "Rp 123.453.000" (large, bold)
- Subtext: "Akumulasi semua transaksi" (gray, small)

Card 3 — New User Hari Ini (purple icon):
- Icon: 🆕 (purple circle bg)
- Label: "User Baru Hari Ini"
- Value: "12" (large, bold)
- Subtext: "24 jam terakhir" (gray, small)

Card 4 — Transaksi Pending (amber icon, attention):
- Icon: ⏳ (amber circle bg)
- Label: "Transaksi Pending"
- Value: "3" (large, bold, amber color)
- Subtext: "Perlu tindak lanjut" (amber, small)
- Card has amber left border accent

Card 5 — Transaksi Hari Ini (teal icon):
- Icon: ✅ (teal circle bg)
- Label: "Transaksi Hari Ini"
- Value: "12" (large, bold)
- Subtext: "Berhasil terkonfirmasi" (gray, small)

CHARTS SECTION (grid 2 col desktop, 1 col mobile):

Chart 1 — Pertumbuhan User (line chart, Recharts):
- Title: "Pertumbuhan User"
- Subtitle: "30 hari terakhir"
- Line chart (blue line, smooth)
- X axis: dates (Jun 1 ... Jun 17 etc)
- Y axis: user count
- Show tooltip on hover

Chart 2 — Revenue Harian (bar chart, Recharts):
- Title: "Revenue Harian"
- Subtitle: "30 hari terakhir"
- Bar chart (green bars)
- X axis: dates
- Y axis: Rp amount
- Show tooltip on hover with formatted Rp

DISTRIBUSI LEVEL USER (below charts, full width):
- Title: "Distribusi Level User"
- Pie chart or donut chart (Recharts) with 6 segments:
  A1 (blue), A2 (indigo), B1 (purple), B2 (green), C1 (orange), C2 (red)
- Legend showing count per level: "A1: 430 user (34%)", etc
```

---

## Screen 3 — User Management

**Deskripsi:** Halaman untuk melihat dan mengelola semua user terdaftar. Termasuk detail user dengan hasil placement test dan Day 31 test.

**Prompt:**

```
Build a user management page for "Inggrisin Yuk" admin panel.

Tech stack: Next.js 14 TypeScript, Tailwind CSS, shadcn/ui (Table, Badge, Dialog, Select components).

LAYOUT: Same sidebar as dashboard + main content.

PAGE HEADER:
- Title: "User Management"
- Right: Total count badge "1.247 user"

FILTER & SEARCH BAR (white card, flex wrap, gap-3):
- Search input (flex-1): placeholder "Cari nama atau nomor WA..."
- Filter "Status": Select — Semua / Aktif / Suspended
- Filter "Level": Select — Semua / A1 / A2 / B1 / B2 / C1 / C2
- Sort: Select — Terbaru / Nama A–Z

USER TABLE (white card, full width, rounded-xl, shadow-sm):
Table columns:
| No WA | Nama | Level | Status | Tgl Daftar | Last Active | Order ID | Aksi |

Sample rows:
Row 1: 081234567890 | Arif | A1 (blue badge) | Aktif (green badge) | 15 Jun 2026 | 17 Jun 2026 | INY-20260615-0001 | [Detail] [•••]
Row 2: 085678901234 | Dinda | B2 (green badge) | Aktif (green badge) | 14 Jun 2026 | 16 Jun 2026 | INY-20260614-0042 | [Detail] [•••]
Row 3: 089012345678 | Budi | A2 (indigo badge) | Suspended (red badge) | 13 Jun 2026 | 10 Jun 2026 | INY-20260613-0018 | [Detail] [•••]

Level badge colors:
A1: blue, A2: indigo, B1: purple, B2: green, C1: orange, C2: red

Pagination: "Menampilkan 1–20 dari 1.247 user" + prev/next buttons

USER DETAIL MODAL (Dialog, max-width 600px, when "Detail" clicked):

MODAL HEADER: "Detail User" + close X button

SECTION 1 — Info Dasar (grid 2 col):
- No WA: 081234567890
- Nama Panggilan: Arif
- Panggilan: Kak → "Kak Arif"
- Gender: Laki-laki
- Level Aktif: A1 (Beginner) [blue badge]
- Email: arif@email.com (atau "-" jika kosong)
- Status Akun: Aktif [green badge]
- Order ID: INY-20260615-0001
- Tanggal Daftar: 15 Juni 2026
- Last Active: 17 Juni 2026, 09:14 WIB

SECTION 2 — Hasil Placement Test (gray-50 card):
Heading: "🎯 Hasil Placement Test"
Row: Status → "Sudah ikut" (green badge) atau "Belum ikut" (gray badge)
Row: Level Rekomendasi → "A2 (Elementary)" (blue badge)
Row: Tanggal Test → "15 Juni 2026"

SECTION 3 — Hasil Day 31 Test (gray-50 card):
Heading: "📊 Hasil Day 31 — Level Test"
Small subtext: "Hanya menampilkan test yang sudah pernah dikerjakan"

Table (compact):
| Modul | Level | Score | Tanggal |
| Vocabulary | A1 | 85/100 ⭐ Great! | 16 Jun 2026 |
| Grammar | A1 | 72/100 Good | 16 Jun 2026 |
(other modules show "-" if not done)

Score color: ≥80 green, 60–79 amber, <60 red

MODAL FOOTER (flex, justify-between):
Left: "Edit Nomor WA" button (outline, blue)
Right: "Suspend Akun" button (outline, red) OR "Aktifkan Akun" if suspended
```

---

## Screen 4 — Transaction Management

**Deskripsi:** Halaman untuk memantau semua transaksi QRIS dan konfirmasi manual jika ada yang gagal auto-confirm.

**Prompt:**

```
Build a transaction management page for "Inggrisin Yuk" admin panel.

Tech stack: Next.js 14 TypeScript, Tailwind CSS, shadcn/ui (Table, Badge, Dialog components).

LAYOUT: Same sidebar + main content.

PAGE HEADER:
- Title: "Transaksi"
- Stats row: "Success: 1.247" (green) | "Pending: 3" (amber) | "Failed: 12" (red)

FILTER BAR (white card, flex):
- Search: "Cari Order ID atau nomor WA..."
- Filter Status: Semua / Success / Pending / Failed
- Filter Tanggal: Date range picker (dari ... sampai ...)

TRANSACTION TABLE (white card):
Columns: | Order ID | No WA | Nama | Jumlah | Status | Gateway | Waktu | Aksi |

Sample rows:
Row 1: INY-20260617-0051 | 081234... | Arif | Rp 99.000 | Success (green badge) | Midtrans | 17 Jun 09:14 | [Detail]
Row 2: INY-20260617-0050 | 085678... | Sari | Rp 99.000 | Pending (amber badge) | Midtrans | 17 Jun 08:55 | [Detail] [Konfirmasi]
Row 3: INY-20260617-0049 | 089012... | Budi | Rp 99.000 | Failed (red badge) | Xendit | 17 Jun 07:30 | [Detail]

Status badge colors: Success=green, Pending=amber, Failed=red

TRANSACTION DETAIL MODAL (Dialog, when "Detail" or "Konfirmasi" clicked):

For PENDING transaction — Konfirmasi Manual:
- Heading: "Konfirmasi Transaksi Manual"
- Transaction info:
  Order ID: INY-20260617-0050
  Nama: Sari
  No WA: 085678901234
  Jumlah: Rp 99.000
  Status: Pending (amber badge)
  Waktu: 17 Juni 2026, 08:55 WIB
  Gateway: Midtrans

- Upload area: "Upload Bukti Transfer User" (dashed border, file upload)
- Warning box (amber): "Pastikan kamu sudah verifikasi bukti pembayaran sebelum konfirmasi manual"
- Footer buttons:
  Left: "Batal" (ghost)
  Right: "Konfirmasi & Aktifkan Akun" (blue, solid)

For SUCCESS transaction — Detail only:
- Same info display
- No action buttons, just "Tutup"
```

---

## Screen 5 — CS Tools

**Deskripsi:** Halaman khusus CS untuk update nomor WA user yang salah input saat registrasi. Search by Order ID.

**Prompt:**

```
Build a CS Tools page for "Inggrisin Yuk" admin panel. 
Primary use case: customer support needs to update a user's WhatsApp number when they registered with the wrong one.

Tech stack: Next.js 14 TypeScript, Tailwind CSS, shadcn/ui. 

LAYOUT: Same sidebar + main content.

PAGE HEADER:
- Title: "CS Tools — Update Data User"
- Subtitle: "Gunakan Order ID dari user untuk cari dan update data akun mereka"

USE CASE INFO CARD (blue-50 bg, blue border-left):
- Title: "Cara Penggunaan"
- Steps:
  1. Minta user kirim Order ID mereka (format: INY-YYYYMMDD-XXXX)
  2. Input Order ID di bawah untuk cari data akun
  3. Verifikasi identitas user (nama, tanggal beli)
  4. Update nomor WA baru jika sudah terverifikasi

SEARCH SECTION (white card):
- Label: "Cari User Berdasarkan Order ID"
- Row: Order ID text input (placeholder "INY-20260617-0042", monospace font) + "Cari" blue button
- Helper: "Format Order ID: INY-YYYYMMDD-XXXX (lihat di halaman konfirmasi pembayaran)"

RESULT SECTION (shows after search, white card with gray-50 header):

Result header: "✅ Data Ditemukan" (green) OR "❌ Order ID Tidak Ditemukan" (red)

If found — User info display (grid 2 col, compact):
- Order ID: INY-20260617-0042
- Nama: Budi
- No WA Terdaftar: 089012345678 (red/amber highlight — the problematic number)
- Level: A2
- Status Akun: Aktif (green badge)
- Tanggal Daftar: 16 Juni 2026

UPDATE WA FORM (below user info, separated by divider):
- Label: "Nomor WhatsApp Baru"
- Tel input (full width, placeholder "nomor WA yang benar")
- Warning box (amber): "⚠️ Perubahan ini tidak bisa dibatalkan. Pastikan nomor WA baru sudah benar."
- "Update Nomor WA" button (blue, full width)

CONFIRM DIALOG (shows before executing update):
- Title: "Konfirmasi Update Nomor WA"
- Content:
  WA Lama: 089012345678
  WA Baru: 081111222333
  "Apakah kamu yakin ingin mengganti nomor WA ini?"
- Buttons: "Batal" (ghost) + "Ya, Update Sekarang" (blue)

SUCCESS STATE (after confirmed):
- Green checkmark + "Nomor WA berhasil diupdate!"
- "User sekarang bisa login dengan: 081111222333"
- "Informasikan ke user bahwa nomor WA sudah diupdate" (gray note)
- "Cari Order ID Lain" button (reset form)

AUDIT LOG SECTION (below, collapsible):
- Title: "Log Perubahan Terakhir" (small heading, collapsible)
- Table (compact, gray-50 bg):
  | Waktu | Order ID | WA Lama | WA Baru | Diubah Oleh |
  | 17 Jun 09:30 | INY-...0042 | 0890...678 | 0811...333 | cs@inggrisinyuk.ai |
```

---

*File ini berisi 5 prompt untuk semua screen Admin Panel Inggrisin Yuk.*
*Generate Screen 1 (Login) dulu untuk set design language, lalu lanjut screen berikutnya.*
*Tambahkan "Use the same design language, sidebar, and color scheme as the previous screens" di setiap prompt berikutnya.*
