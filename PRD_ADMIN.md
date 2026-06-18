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
| Cari by WA | Input nomor WA (eksak atau parsial) |
| Cari by Nama | Input nama panggilan |
| Filter Status | Aktif / Suspended |
| Filter Level | A1, A2, B1, B2, C1, C2 |
| Sort | Tanggal daftar terbaru, Nama A–Z |

**Tabel User:**

| Kolom | Keterangan |
|---|---|
| No WA | Nomor WhatsApp (Customer ID) |
| Nama Panggilan | Nama yang diinput user |
| Level | Level CEFR saat ini |
| Status | Aktif / Suspended |
| Tanggal Daftar | Timestamp registrasi |
| Last Active | Timestamp terakhir login atau klik topik |
| Order ID | ID transaksi pembayaran |
| Aksi | Lihat detail, Edit WA, Suspend |

**Detail User (modal/halaman):**

- Informasi dasar: WA, nama, panggilan, gender, level aktif, email (jika ada)
- Status akun, Order ID transaksi, tanggal daftar
- Last Active: timestamp terakhir user login

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

**Tabel Transaksi:**

| Kolom | Keterangan |
|---|---|
| Order ID | ID unik transaksi (format: INY-YYYYMMDD-XXXX) |
| No WA | WA yang didaftarkan saat bayar |
| Jumlah | Rp 99.000 |
| Status | Success / Pending / Failed |
| Payment Gateway | Midtrans / Xendit |
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
Jika status Pending → cek payment gateway dashboard
       ↓
Jika terkonfirmasi di gateway tapi gagal auto-update → Konfirmasi Manual
       ↓
Akun user diaktifkan → informasikan ke user
```

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

### Endpoint Admin (Tambahan dari Backend User)

| Endpoint | Method | Keterangan |
|---|---|---|
| `/admin/auth/login` | POST | Login admin |
| `/admin/dashboard/metrics` | GET | Metrik overview dashboard |
| `/admin/users` | GET | List user dengan filter & pagination |
| `/admin/users/:id` | GET | Detail user |
| `/admin/users/:id/update-wa` | PATCH | Update nomor WA user |
| `/admin/users/:id/suspend` | PATCH | Suspend/aktifkan akun |
| `/admin/transactions` | GET | List transaksi dengan filter |
| `/admin/transactions/:orderId` | GET | Detail transaksi |
| `/admin/transactions/:orderId/confirm` | POST | Konfirmasi manual transaksi |
| `/admin/audit-log` | GET | Log perubahan data oleh admin/CS |

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

### Iterasi 2 (Future)

- DAU / WAU / MAU
- Role tambahan: Admin (mid-level access)
- Status transaksi Refunded
- Event tracking per topik/modul (Topik Paling Populer, Total Klik, Completion Rate)
- Metrik streak & retensi (Day 1 / Day 7 / Day 30 Retention, Churn Rate)
- Analytics lanjutan (cohort analysis, funnel)
- Notifikasi internal (alert transaksi pending > X jam)
- Bulk action (suspend multiple user)
- Integrasi langsung dengan payment gateway dashboard
- Admin mobile-friendly (PWA)
