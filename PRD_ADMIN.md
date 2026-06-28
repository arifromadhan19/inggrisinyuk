# INGGRISIN YUK — PRD ADMIN

**Versi:** 1.0  
**Tanggal:** 2026-06-16  
**Status:** Draft  
**Scope:** Iterasi 1 — Admin Panel untuk monitoring, tracking, dan CS tools

---

## Daftar Isi

1. [Overview](#1-overview)
2. [Admin User & Akses](#2-admin-user--akses)
3. [Fitur Admin Panel](#3-fitur-admin-panel)
   - 3.1 [Dashboard Overview](#31-dashboard-overview)
   - 3.2 [User Management](#32-user-management)
   - 3.3 [Transaction Management](#33-transaction-management)
   - 3.4 [CS Tools — Update Data User](#34-cs-tools--update-data-user)
   - 3.5 [Export Data](#35-export-data)
4. [Alur Operasional CS](#4-alur-operasional-cs)
5. [Spesifikasi Teknis](#5-spesifikasi-teknis)
6. [Non-Functional Requirements](#6-non-functional-requirements)
7. [Roadmap Admin Panel](#7-roadmap-admin-panel)

---

## 1. Overview

Admin Panel Inggrisin Yuk adalah internal web tool yang digunakan oleh tim operasional untuk:
- Memonitor pertumbuhan user dan revenue platform
- Memverifikasi dan mengelola transaksi pembayaran (QRIS)
- Menangani permintaan CS — termasuk update nomor WhatsApp user yang salah input saat registrasi

Admin panel **bukan** fitur yang diakses oleh end-user. Akses terbatas untuk internal tim Inggrisin Yuk.

---

## 2. Admin User & Akses

### Tipe Admin

| Role | Akses | Keterangan |
|---|---|---|
| Super Admin | Full access | Developer / Founder |
| CS (Customer Support) | User Management + CS Tools saja | Tim support |

### Autentikasi Admin

- Login via email + password (berbeda dari sistem login user)
- Password minimal 8 karakter, harus ada angka dan huruf besar
- Session expire setelah 8 jam idle
- Tidak ada OTP — cukup email + password untuk iterasi 1

---

## 3. Fitur Admin Panel

### 3.1 Dashboard Overview

Halaman pertama setelah login admin. Menampilkan ringkasan metrik penting platform secara real-time.

**Komponen Dashboard:**

| Widget | Metrik | Keterangan |
|---|---|---|
| Total User | Jumlah akun terdaftar | Semua user yang sudah bayar dan terdaftar |
| Total Revenue | Total pendapatan (Rp) | Akumulasi dari semua transaksi berhasil |
| New User Hari Ini | User baru dalam 24 jam terakhir | Refresh tiap halaman dibuka |
| Transaksi Pending | Jumlah pembayaran yang belum terkonfirmasi | Perlu tindak lanjut segera |
| Transaksi Hari Ini | Jumlah transaksi berhasil hari ini | |

**Grafik Dashboard:**

| Grafik | Tipe | Keterangan |
|---|---|---|
| Pertumbuhan User | Line chart | 30 hari terakhir |
| Revenue Harian | Bar chart | 30 hari terakhir |
| Distribusi Level User | Pie chart | Jumlah user per level CEFR (A1–C2) — dari data profil |

---

### 3.2 User Management

Halaman untuk melihat dan mengelola data seluruh user terdaftar.

**Fitur Pencarian & Filter:**

| Filter | Pilihan |
|---|---|
| Cari by WA | Input nomor WA (eksak atau parsial) — hanya untuk WA user |
| Cari by Email | Input email (eksak atau parsial) — hanya untuk Google user |
| Cari by Nama | Input nama panggilan |
| Filter Auth Method | Semua / WA / Google |
| Filter Status | Aktif / Suspended |
| Filter Level | A1, A2, B1, B2, C1, C2 |
| Sort | Tanggal daftar terbaru, Nama A–Z |

**Tabel User:**

| Kolom | Keterangan |
|---|---|
| No WA / Email | Nomor WhatsApp (WA user) atau Email (Google user) — Customer ID |
| Auth Method | WA atau Google — badge visual di tabel |
| Nama Panggilan | Nama yang diinput user |
| Level | Level CEFR saat ini |
| Status | Aktif / Suspended |
| Tanggal Daftar | Timestamp registrasi |
| Last Active | Timestamp terakhir login atau klik topik |
| Order ID | ID transaksi pembayaran |
| Aksi | Lihat detail, Edit WA (hanya untuk WA user), Suspend |

**Detail User (modal/halaman):**

- Informasi dasar: auth method badge, WA atau Email, nama, panggilan, gender, level aktif
- Status akun, Order ID transaksi, tanggal daftar
- Last Active: timestamp terakhir user login
- Catatan: Google user tidak memiliki nomor WA — tombol "Edit WA" tidak ditampilkan untuk Google user

**Hasil Placement Test:**

| Field | Keterangan |
|---|---|
| Status | Sudah ikut / Belum ikut |
| Rekomendasi Level | Level CEFR yang direkomendasikan dari hasil test |
| Tanggal Test | Kapan terakhir ikut placement test |

**Hasil Kerja User (Day 31 — Level Test per Modul):**

| Kolom | Keterangan |
|---|---|
| Modul | Vocabulary / Grammar / Speaking / Listening / Roleplay |
| Level | Level CEFR yang di-test (A1–C2) |
| Score | Nilai yang didapat (contoh: 85/100) |
| Tanggal | Kapan test diselesaikan |

Catatan: hanya menampilkan Day 31 test yang sudah pernah dikerjakan user. Jika belum ada, kolom kosong.

- Tombol: Edit WA, Suspend Akun

---

### 3.3 Transaction Management

Halaman untuk memantau semua transaksi pembayaran QRIS.

**Status Transaksi:**

| Status | Keterangan | Aksi yang Tersedia |
|---|---|---|
| Success | Pembayaran berhasil, akun aktif | Lihat detail |
| Pending | Menunggu konfirmasi dari payment gateway | Cek manual, Konfirmasi manual |
| Failed | Pembayaran gagal atau expired | Lihat detail |
| Expired | Invoice 24 jam telah habis tanpa pembayaran | Lihat detail |

**Tabel Transaksi:**

| Kolom | Keterangan |
|---|---|
| Order ID | ID unik transaksi (format: INY-YYYYMMDD-XXXX) |
| Customer ID | No WA (WA user) atau Email (Google user) |
| Auth Method | WA / Google — menunjukkan flow yang digunakan |
| Metode Bayar | DANA / Gopay / VA BCA / VA Mandiri / VA BNI / VA BRI |
| Jumlah | Rp 99.000 |
| Status | Success / Pending / Failed / Expired |
| Payment Gateway | **Xendit** |
| Waktu Transaksi | Timestamp |
| Aksi | Lihat detail, Konfirmasi manual |

**Konfirmasi Manual:**

Jika payment gateway tidak auto-confirm (edge case), admin dapat konfirmasi manual dengan:
1. Upload bukti transfer dari user
2. Cek nomor Order ID
3. Klik "Konfirmasi Manual" → akun user diaktifkan

---

### 3.4 CS Tools — Update Data User

Halaman khusus CS untuk menangani permintaan user yang mengalami masalah data, terutama salah input nomor WhatsApp saat registrasi.

**Use Case Utama:**

> User salah input nomor WA saat subscribe → tidak bisa login → hubungi CS via WhatsApp → CS update nomor WA berdasarkan Order ID

**Alur Update WA via Order ID:**

| Langkah | Aksi CS | Detail |
|---|---|---|
| 1 | Terima laporan user | User kirim WA ke CS dengan Order ID + WA lama + WA baru yang benar |
| 2 | Cari Order ID | CS input Order ID di kolom pencarian CS Tools |
| 3 | Verifikasi data | Sistem tampilkan: WA terdaftar, nama, tanggal transaksi, status |
| 4 | Konfirmasi identitas | CS pastikan user adalah pemilik Order ID (opsional: minta screenshot bukti bayar) |
| 5 | Update WA | CS input WA baru → klik "Update Nomor WA" |
| 6 | Konfirmasi | Sistem minta konfirmasi ulang sebelum eksekusi |
| 7 | Selesai | WA lama diganti WA baru — user bisa login dengan WA baru |

**Form CS Tools:**

```
[ Cari Order ID ]  ← input field
[ Cari ]

--- Hasil ---
Order ID   : INY-20260616-0042
WA Terdaftar: 081234567890
Nama       : Budi
Level      : A2
Status Akun: Aktif
Tgl Daftar : 16 Juni 2026

[ Nomor WA Baru ] ← input field
[ Update Nomor WA ]
```

**Log Perubahan:**

Setiap perubahan WA dicatat otomatis di audit log:
- Timestamp perubahan
- WA lama → WA baru
- Order ID terkait
- Admin/CS yang melakukan perubahan

---

### 3.5 Export Data

Admin dapat export data ke CSV dari halaman masing-masing.

| Export | Tersedia Di | Kolom yang Di-export |
|---|---|---|
| Daftar User | User Management | No WA, Nama, Level, Status, Tanggal Daftar, Order ID |
| Data Transaksi | Transaction Management | Order ID, No WA, Jumlah, Status, Waktu Transaksi |

---

## 4. Alur Operasional CS

### Skenario 1: User Salah Input WA

```
User lapor via WA CS
       ↓
CS minta Order ID + WA baru yang benar
       ↓
CS buka CS Tools → cari Order ID
       ↓
Verifikasi data (nama, tanggal transaksi)
       ↓
CS update WA baru → konfirmasi
       ↓
User coba login dengan WA baru → berhasil
       ↓
CS informasikan ke user: "Sudah diupdate, silahkan coba login lagi"
```

### Skenario 2: Pembayaran Tidak Terkonfirmasi Otomatis

```
User lapor sudah bayar tapi akun belum aktif
       ↓
User kirim bukti bayar + Order ID ke CS
       ↓
Admin cek di Transaction Management → cari Order ID
       ↓
Jika status Pending → cek Xendit dashboard
       ↓
Jika terkonfirmasi di Xendit tapi gagal auto-update → Konfirmasi Manual
       ↓
Akun user diaktifkan → informasikan ke user
```

### Skenario 3: Google User — Sudah Bayar VA tapi Tidak Bisa Login

```
User Google bayar via VA → pembayaran sukses di Xendit → tapi user tidak tahu harus login ulang
       ↓
User lapor "sudah bayar tapi tidak bisa masuk"
       ↓
CS cek Transaction Management → cari Order ID → status Success, auth method Google
       ↓
CS cek User Management → cari by email → akun ADA (sudah dibuat oleh webhook)
       ↓
Instruksikan user: "Silakan klik Login dengan Google di halaman login"
       ↓
User login dengan Google → email ditemukan di DB → masuk Dashboard
```

Catatan: Google user tidak perlu update WA — identitasnya adalah email Google. Jika email Google berubah (edge case ekstrem), harus dibuat akun baru karena Google OAuth menggunakan `google_sub` (ID unik permanen dari Google) sebagai identifier utama.

---

## 5. Spesifikasi Teknis

### Stack Admin Panel

| Komponen | Teknologi | Keterangan |
|---|---|---|
| Frontend | React / Next.js atau Vue | Simple admin UI, tidak perlu fancy |
| Backend | Sama dengan backend user app | Tambah endpoint admin |
| Auth | Email + password, JWT | Terpisah dari sistem user |
| Database | Sama dengan database user | Read untuk monitoring, write untuk CS tools & konfirmasi manual |
| Role & Permission | RBAC sederhana | Super Admin (full), CS (User Management + CS Tools) |

### Schema Database — Perubahan dari Arsitektur Awal

**Tabel `users` (update):**

| Kolom | Tipe | Keterangan |
|---|---|---|
| `wa_number` | TEXT, nullable | Nomor WhatsApp — wajib ada jika Google user null. Format dinormalisasi |
| `email` | TEXT, nullable, unique | Email Google — wajib ada jika WA user null |
| `google_sub` | TEXT, nullable, unique | Google's unique user ID — lebih stabil dari email (tidak berubah jika email ganti) |
| CONSTRAINT | — | `CHECK (wa_number IS NOT NULL OR email IS NOT NULL)` — salah satu wajib ada |

Semua user di tabel `users` adalah **user berbayar** — tidak ada field `is_paid`. Keberadaan di tabel ini adalah bukti sudah bayar.

**Tabel `pending_signups` (baru):**

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | UUID, PK | |
| `email` | TEXT, not null | Email dari Google OAuth |
| `google_sub` | TEXT, not null | Google's unique user ID |
| `name` | TEXT | Nama dari Google profile |
| `xendit_invoice_id` | TEXT, nullable | ID invoice Xendit yang dibuat untuk signup ini |
| `status` | ENUM | `pending` / `paid` / `expired` |
| `created_at` | TIMESTAMP | |
| `expires_at` | TIMESTAMP | `created_at + 24 jam` |

Catatan: `pending_signups` menggunakan soft delete — record tidak dihapus setelah expire, hanya status diubah ke `expired`. Ini memungkinkan webhook Xendit tetap memproses VA payment yang datang dalam kondisi race condition (edge case). Invoice Xendit juga di-set 24 jam — setelah 24 jam tidak ada VA payment yang bisa masuk karena Xendit sudah batalkan nomor VA-nya.

### Endpoint Admin (Tambahan dari Backend User)

| Endpoint | Method | Keterangan |
|---|---|---|
| `/admin/auth/login` | POST | Login admin |
| `/admin/dashboard/metrics` | GET | Metrik overview dashboard |
| `/admin/users` | GET | List user dengan filter & pagination (termasuk filter auth_method: WA/Google) |
| `/admin/users/:id` | GET | Detail user |
| `/admin/users/:id/wa` | PATCH | Update nomor WA user — hanya untuk WA user, tidak berlaku untuk Google user |
| `/admin/users/:id/suspend` | PATCH | Suspend/aktifkan akun |
| `/admin/transactions` | GET | List transaksi dengan filter (termasuk filter metode bayar dan auth method) |
| `/admin/transactions/:orderId` | GET | Detail transaksi |
| `/admin/transactions/:orderId/confirm` | POST | Konfirmasi manual transaksi |
| `/admin/audit-log` | GET | Log perubahan data oleh admin/CS |
| `/api/auth/google` | GET | Inisiasi Google OAuth (user-facing, bukan admin) |
| `/api/auth/google/callback` | GET | Google OAuth callback — cek DB, buat session atau redirect ke subscribe |
| `/api/webhooks/xendit` | POST | Webhook dari Xendit — buat user setelah pembayaran sukses |

### Keamanan

- Semua endpoint admin harus melewati middleware auth + role check
- Rate limiting pada endpoint sensitif (update-wa, confirm transaksi)
- Audit log wajib untuk semua operasi write dari admin/CS
- Admin panel di-deploy di subdomain terpisah: `admin.inggrisinyuk.ai`
- Akses hanya dari IP whitelist (opsional, jika setup simple VPN terlalu rumit untuk iterasi 1)

---

## 6. Non-Functional Requirements

| Requirement | Target |
|---|---|
| Response Time | Dashboard load < 3 detik |
| Availability | Tidak perlu 99.9% — admin tools bisa down sesekali, tidak kritikal untuk user |
| Data Freshness | Metrik dashboard refresh setiap 5 menit (tidak perlu real-time) |
| Export Limit | Max 10.000 rows per export CSV |
| Audit Log Retention | Simpan log minimal 6 bulan |
| Concurrent Admin | Cukup support 5 admin simultan untuk iterasi 1 |

---

## 7. Roadmap Admin Panel

### Iterasi 1 (Scope Dokumen Ini)

- [x] Dashboard: Total User, Total Revenue, New User Hari Ini, Transaksi Pending, Transaksi Hari Ini
- [x] Grafik: Pertumbuhan User, Revenue Harian, Distribusi Level User
- [x] User Management: search by WA/nama, filter status, filter level, detail user, edit WA, suspend
- [x] Detail User: hasil Placement Test + hasil Day 31 test per modul
- [x] Transaction Management: list, detail, konfirmasi manual
- [x] CS Tools: update WA via Order ID
- [x] Export CSV: daftar user & transaksi
- [x] Audit log untuk setiap perubahan data oleh admin/CS
- [x] 2 role: Super Admin + CS

### Ditambahkan ke Iterasi 1 (keputusan 2026-06-28)

- [ ] Integrasi Xendit (payment gateway) — menggantikan QRIS/Midtrans
- [ ] Support metode bayar: DANA, Gopay, VA BCA, VA Mandiri, VA BNI, VA BRI
- [ ] Google OAuth login + subscription flow
- [ ] Tabel `pending_signups` (soft delete, berlaku 24 jam)
- [ ] Schema update `users`: tambah `email`, `google_sub`, buat `wa_number` nullable + constraint
- [ ] User Management: filter by auth method (WA/Google), tampilkan email untuk Google user
- [ ] Transaction Management: kolom metode bayar + auth method
- [ ] CS Skenario 3: Google user tidak bisa login setelah VA payment

### Iterasi 2 (Future)

- DAU / WAU / MAU
- Role tambahan: Admin (mid-level access)
- Status transaksi Refunded
- Event tracking per topik/modul (Topik Paling Populer, Total Klik, Completion Rate)
- Metrik streak & retensi (Day 1 / Day 7 / Day 30 Retention, Churn Rate)
- Analytics lanjutan (cohort analysis, funnel)
- Notifikasi internal (alert transaksi pending > X jam)
- Bulk action (suspend multiple user)
- Integrasi langsung dengan Xendit dashboard
- Admin mobile-friendly (PWA)
