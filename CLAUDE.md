# CLAUDE.md — Inggrisin Yuk

Panduan kerja untuk Claude Code di repo ini. Baca [architecture.md](architecture.md) untuk desain teknis lengkap (diagram, skema database, API) — file ini hanya berisi **rules** dan konvensi yang harus dipatuhi.

## 1. Apa project ini

Inggrisin Yuk adalah platform *prompt-delivery* belajar Bahasa Inggris: user pilih modul/level/topik di web app, lalu diarahkan ke ChatGPT dengan prompt yang sudah dipersonalisasi lewat URL. Tidak ada AI inference yang kita jalankan sendiri — backend kita hanya menangani **auth, payment, progress/score, dan content delivery**.

- App utama: [inggrisinyuk-app/](inggrisinyuk-app/) — Next.js 16 (App Router) + React 19 + Tailwind v4 + shadcn/ui.
- Materi prompt (sumber konten yang dikirim ke ChatGPT): [materi/](materi/).
- PRD acuan: [prd_user.md](prd_user.md) (user-facing) dan [prd_admin.md](prd_admin.md) (admin/CS panel) — keduanya lebih baru dan lebih detail daripada [README.md](README.md), jadi jika bertentangan **PRD menang**, bukan README.

**Status saat ini (2026-06-23):** Login, session, placement test, dan edit profil sudah **database-backed** (PostgreSQL via Prisma) — lihat `app/api/auth/*`, `app/api/me`, `app/api/placement-test`, `lib/db.ts`, `lib/session.ts`. `REGISTERED_NUMBERS` hardcoded dan session di `localStorage` sudah dihapus. **Admin panel** (User Management + Audit Log, RBAC `super_admin`/`cs`) juga sudah dibangun di `app/admin/**` + `app/api/admin/**` — auth admin terpisah total dari auth user (cookie `iy_admin_session`, tabel `admins`). Yang **masih** prototype/belum dibangun: pembayaran (`components/checkout-form.tsx` masih simulasi `setTimeout`, belum terhubung ke Midtrans/Xendit, belum ada cara self-serve membuat user baru selain seed manual), Dashboard & Transaction Management admin (menunggu tabel `transactions`), progress topik per modul (`completedSet` di `app/dashboard/[module]/page.tsx` masih `useState`, hilang saat refresh), dan streak counter (masih hardcoded). Database lokal: PostgreSQL native via Homebrew (bukan Docker — VPS kecil tidak butuh overhead container untuk 1 app + 1 DB, lihat architecture.md §2). Lihat architecture.md §2 dan §13 untuk gap list lengkap & ter-update.

## 2. Rule Deployment — VPS

Target deploy adalah **VPS (Hostinger)**, bukan Vercel/serverless — meskipun `@vercel/analytics` masih terpasang di `app/layout.tsx` (lihat architecture.md §8 soal ini).

- **Selalu backup sebelum perubahan destruktif** (terutama database) — `pg_dump` sebelum migration atau deploy yang mengubah schema.
- **Jangan pernah edit `.env` langsung di VPS** lewat Claude — secrets tidak boleh masuk git history maupun terbaca oleh Claude. User yang mengelola `.env` di server secara manual.
- **Jangan jalankan operasi destruktif tanpa konfirmasi** — `rm`, `DROP TABLE`, `git push --force`, restart service produksi, dsb. Selalu tanya dulu.
- **Selalu verifikasi service hidup setelah deploy** — cek `pm2 status` / `curl` health endpoint setelah setiap deploy, jangan asumsikan sukses dari exit code git/ssh saja.
- **Pakai `deploy.sh`** untuk flow deploy (backup → git push → ssh pull → restart → verify) ketimbang menjalankan langkah manual satu-satu — jika belum ada, buat dulu sebelum deploy pertama.
- **Tidak ada `sudo`, `rm -rf`, `chmod` sembarangan** via Claude tanpa izin eksplisit di setiap kesempatan (izin sebelumnya tidak otomatis berlaku ke sesi lain).

## 3. Rule Data — Login via WhatsApp

- **Nomor WhatsApp adalah satu-satunya kunci login** (passwordless, tanpa password, tanpa OTP) — sesuai prd_user.md §3.3. Validasi harus selalu ke tabel `users` di database produksi, **tidak pernah** hardcoded di kode seperti `REGISTERED_NUMBERS` saat ini.
- Saat membangun endpoint login: cek `users.wa_number` (dinormalisasi — strip spasi/`-`, format konsisten) → kalau ada dan status `active`, buat session; kalau tidak ketemu, tampilkan pesan arahkan ke CS WhatsApp (pola ini sudah ada di UI, tinggal disambungkan ke backend nyata).
- **Jangan simpan data session sensitif di `localStorage`** untuk implementasi production — itu rentan XSS. Gunakan httpOnly cookie (JWT atau session token) yang divalidasi server-side. `localStorage` boleh dipakai untuk cache non-sensitif (preferensi UI), bukan sumber kebenaran identitas.
- Update nomor WA (kasus salah input) hanya boleh lewat endpoint admin/CS yang tercatat di `audit_logs` (prd_admin.md §"CS Tools") — jangan pernah update langsung di database tanpa audit trail. **Sudah dibangun**: `PATCH /api/admin/users/:id/wa`, dipakai dari `/admin/users/:id` (lihat `components/admin/edit-wa-form.tsx`).

## 4. Rule Data — Score & Practice Tracking

- **Semua hasil score harus tersimpan di database**, bukan hanya di state client:
  - Placement Test (40 soal, hasil level + skor per CEFR band) → tabel `placement_test_results`.
  - Day-31 test per modul (skor X/100 + rekomendasi) → tabel `module_test_results`.
- **Semua practice/progress tracking harus tersimpan di database**, bukan di React state lokal:
  - Topik yang ditandai selesai per modul (saat ini bug: `completedSet` di `app/dashboard/[module]/page.tsx` hanya `useState`, hilang setiap refresh) → harus ditulis ke tabel `topic_progress` lewat API saat user klik link ChatGPT.
  - Streak counter dan "last active" → derive dari log aktivitas (`activity_log`), jangan hardcode (`streakDays = 2` saat ini di `app/dashboard/page.tsx` adalah placeholder, bukan data asli).
- Setiap perubahan pada flow placement test, module page, atau profil **harus** menyertakan pemanggilan API yang menulis ke database — jangan menambah fitur baru yang hanya mengandalkan `localStorage`/state lokal untuk data yang harus persisten lintas device/refresh.
- Skema lengkap tabel-tabel ini ada di architecture.md §6.

## 5. Rule Materi Prompt — Format untuk Semua Modul (Vocab, Grammar, Listening, Speaking)

- **Setiap prompt materi per day, di semua modul (Vocabulary, Grammar, Listening, Speaking) dan semua level CEFR, wajib mengikuti aturan di [prompt_recommendation.md](prompt_recommendation.md)** sebelum di-encode jadi URL ChatGPT. Ini bukan saran gaya tulisan — prompt yang melanggar rule ini akan melebihi batas aman URL ChatGPT (≥4.500 encoded chars) dan memicu error di ChatGPT, bukan cuma masalah kerapian.
- Ringkasan RULE 1-6 (detail & contoh lengkap ada di prompt_recommendation.md, jangan duplikasi di sini — rujuk dokumen itu):
  - **RULE 1** — raw chars < 3.200 (estimasi cepat: `url ≈ 30 + raw × 1.42`); target URL < 4.500, idealnya < 4.000.
  - **RULE 2** — tidak ada blank lines, tidak ada separator `---` di dalam teks prompt.
  - **RULE 3** — header behavior 2 baris ringkas, bukan 4 baris panjang.
  - **RULE 4** — instruksi per-langkah ditulis keyword/format singkat, bukan kalimat penjelasan panjang.
  - **RULE 5** — tidak ada emoji di dalam teks prompt (biarkan ChatGPT sendiri yang generate emoji di responsnya).
  - **RULE 6** — differentiator produk (BOW 15 kata kurated, 8 sub-step Langkah 2, CEFR analysis, Frasa Siap Pakai, Clarity Check, 3 speaking question pre-defined per day, persona "Kak Ara") tidak boleh dihilangkan saat memadatkan prompt — yang dipadatkan cara menulisnya, bukan isinya.
- Pakai **Template Master** di prompt_recommendation.md sebagai basis semua prompt day baru di modul apa pun — jangan menulis struktur prompt dari nol per modul.
- Sebelum prompt baru di-encode ke `lib/materi/*.ts`, jalankan checklist "Checklist Implementasi per Materi Baru" di prompt_recommendation.md (BOW persis 15 kata, hitung estimasi URL, test klik link di browser sebelum deploy, dst).
- Workflow precompute URL (source `materi/<level>/<modul>_prompt.md` → encode sekali → `lib/materi/<modul>-<level>.ts` → render-time `buildVocabUrl()`/setara, hanya 2× `.replace()`, tanpa `encodeURIComponent()` saat klik) dijelaskan teknis lengkap di architecture.md §6.3. Pola ini sudah diterapkan untuk Vocabulary A1 Day 1-5 (`lib/materi/vocabulary-a1.ts`) — **pakai pola file & helper yang sama** saat membangun modul Grammar, Listening, Speaking, jangan buat pola baru per modul.

## 6. Konvensi Umum

- Bahasa UI dan copy: **Bahasa Indonesia**, gaya santai (lihat persona "Kak Ara" di materi prompt).
- Komponen UI: shadcn/ui + Tailwind v4, ikuti pola yang sudah ada di `components/ui/`.
- Harga, paket, dan kebijakan bisnis (lifetime access **Rp 99.000**, dikonfirmasi user 2026-06-23) adalah keputusan bisnis — **jangan ubah tanpa konfirmasi eksplisit** dari user (lihat architecture.md §13).
- Jangan menambah dependency backend/database baru tanpa menyebutkan trade-off-nya — sistem ini ditargetkan jalan di satu VPS kecil, bukan infrastruktur skala besar.
- **Setiap halaman user-facing wajib menyertakan footer** yang sama dengan footer di `app/dashboard/page.tsx` (copyright © 2026 Inggrisin Yuk + ikon sosmed: Instagram, Facebook, TikTok, LinkedIn). Footer diletakkan setelah `</main>` sebelum `</div>` penutup, dengan `max-w` disesuaikan dengan lebar konten halaman tersebut (dashboard pakai `max-w-6xl`, halaman narrow seperti panduan pakai `max-w-2xl`). Jika membuat halaman baru, salin struktur footer dari salah satu halaman yang sudah ada — jangan buat versi berbeda.
