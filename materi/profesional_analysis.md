# ANALISIS & ROADMAP MATERI ENGLISH FOR PROFESSIONALS — SEMUA LEVEL (A1–C2)
**Aplikasi:** Inggrisin Yuk | **AI Tutor:** Kak Ara | **Modul:** English For Professionals (Professional English)
**Cakupan:** Lanskap pasar (tanpa sampel kompetitor verbatim) + riset kurikulum CEFR/Business-English + template master untuk 6 level (A1, A2, B1, B2, C1, C2)
**Status dokumen:** ACUAN (reference) — bukan materi day-by-day final. Dokumen ini dipakai sebagai dasar saat menulis `materi/<level>/professional.md` dan `materi/<level>/professional_prompt.md` nanti.

> **Catatan penting sebelum baca:** Dokumen ini **tidak** menulis 180 prompt day-by-day. Yang ada di sini: lanskap pasar Business English (riset jujur — **tidak ada sampel prompt kompetitor verbatim** untuk niche ini, beda dari Grammar/Speaking/Listening; lihat §1), struktur materi per sesi, evolusi bahasa & kedalaman per level, metodologi riset (Cambridge BEC, Pearson GSE for Professionals, CEFR Companion Volume, ESP/genre/pragmatics — sumber benar-benar diverifikasi lewat web research, bukan dari memori model), daftar **nama topik profesional** 30 hari × 6 level (+ rationale 1 baris per topik), dan **satu** Template Master Professional yang sudah lolos RULE 1–6 di [prompt_recommendation.md](../prompt_recommendation.md).
>
> **KEPUTUSAN ARSITEKTUR (FINAL dari product owner, Juni 2026):** Modul ini **diubah** dari "30 topik flat, tidak terikat CEFR, tanpa Day 31" (prd_user.md §4.8 versi lama) menjadi **level-based A1–C2 (180 topik, 30/level + Day 31 Placement Test)** supaya konsisten dengan 5 modul utama (Vocabulary, Grammar, Speaking, Listening, Roleplay). Dokumen ini mendesain ulang kurikulum di bawah keputusan itu. **30 topik PRD lama tidak dibuang** — dijadikan anchor B1/B2 (rationale di §5.4–5.5). Mekanisme belajar (prd_user.md §4.8: vocabulary + frasa siap pakai → Writing/Speaking Challenge situasi kerja → feedback naturalness/formality/register) **tidak diubah**, hanya dirinci jadi langkah granular (§2). Persona = **Kak Ara**, ikon 💼, warna cyan, badge "PRO" (tidak diubah).

---

## 🔍 1. LANSKAP PASAR & STRATEGI DIFERENSIASI (TANPA SAMPEL KOMPETITOR VERBATIM)

### 1.1 Catatan kejujuran: tidak ada sampel prompt kompetitor untuk niche ini

Tiga dokumen sibling — [grammar_analysis.md](grammar_analysis.md) §1, [speaking_analysis.md](speaking_analysis.md) §1, [listening_analysis.md](listening_analysis.md) §1 — semuanya membuka dengan **walkthrough prompt verbatim kompetitor** ("Bro Arule — Kampung Inggris") karena user membagikan 6 prompt asli per modul. **Untuk English For Professionals, sampel semacam itu TIDAK ADA.** Kampung Inggris (dan produk prompt-delivery sejenis yang kita amati) tidak menjual modul Professional/Business English terstruktur yang prompt-nya bisa kita audit kata-per-kata. Maka §1 ini **sengaja tidak** memuat "Mekanisme Prompt Kompetitor" / "Temuan Kritis" / "Audit URL-Safety Kompetitor" seperti sibling docs — **mengarang** prompt kompetitor untuk mengisi slot itu akan melanggar prinsip kejujuran dokumen ini. Sebagai gantinya: riset ringkas lanskap produk Business English (§1.2–1.3), lalu rigor riset dipindah lebih berat ke framework CEFR/Cambridge/ESP/pragmatics di §4 (lebih panjang dari biasanya, karena tidak ada competitor walkthrough yang substantial untuk di-pivot-kan).

### 1.2 Riset ringkas lanskap produk Business English (verifikasi online, tanpa klaim prompt verbatim)

Yang **terverifikasi exist** dan relevan sebagai pembanding garis-besar (bukan prompt comparison):

| Kategori produk | Contoh terverifikasi | Cara mereka terstruktur (garis besar) | Relevansi untuk kita |
|---|---|---|---|
| **Coursebook Business English ber-CEFR** | Market Leader (Pearson, A1–C1, 5 level), Business Result (Oxford, A2–C2, 6 level Starter–Advanced) | Di-level-kan per CEFR; tiap level punya unit bertema kerja (meeting, presentation, negotiation, email) dengan kompleksitas naik per level | **Preseden kuat** bahwa Business English **memang** di-level-kan A1/A2…C1/C2, bukan flat — memvalidasi keputusan product owner mengubah modul ini ke level-based (§5). Distribusi topik per level kita cross-check ke pola coursebook ini (§4) |
| **Assessment Business English ber-CEFR** | Cambridge BEC (B1 Preliminary / B2 Vantage / C1 Higher), Pearson GSE for Professionals, TOEIC (L&R, S&W) | Skill kerja dipetakan ke band CEFR; BEC tegas hanya B1–C1 (tidak ada "BEC A1/A2") | Memberi tahu **di mana** topik profesional realistis muncul di skala CEFR — penting untuk kejujuran A1/A2 (§4, §5.7) |
| **AI communication/role-play coaching** | Yoodli (AI role-play: sales call, interview, leadership, feedback session; valuasi $300M+ Des 2025), Poised (real-time call feedback: clarity, pace, filler words) | Skenario kerja yang di-roleplay-kan AI + feedback metrik komunikasi; **fokus enterprise/native-ish**, bukan EFL beginner ber-CEFR ber-Bahasa-Indonesia | Membuktikan ada **demand AI-coaching untuk professional communication**, tapi semuanya menyasar penutur menengah-mahir berbahasa Inggris — **celah pasar kita**: EFL Indonesia level rendah yang butuh scaffolding L1 + progresi CEFR + delivery via ChatGPT gratis |

> **Kesimpulan lanskap:** Business English yang di-level-kan per CEFR adalah **praktik mapan** (coursebook + assessment), jadi keputusan mengubah modul ini ke level-based bukan eksperimen liar — justru menyelaraskannya dengan standar industri. Yang **belum** ada di pasar: produk yang menggabungkan (a) prompt-delivery via ChatGPT (gratis, tanpa inference sendiri), (b) scaffolding Bahasa Indonesia progresif untuk EFL pemula, (c) feedback yang eksplisit menyasar **formality/register/naturalness** profesional, dan (d) Frasa Kunci Profesional terkurasi per Day. Itulah ceruk Inggrisin Yuk.

### 1.3 Catatan: tidak ada audit URL-safety kompetitor di sini

Sibling docs punya sub-section "Audit URL-Safety Kompetitor (RULE 1 & 2)" yang menghitung `len()` + `urllib.parse.quote()` dari prompt verbatim kompetitor. Karena **tidak ada prompt kompetitor** untuk modul ini, sub-section itu **dihilangkan secara sadar**. Audit URL-safety tetap ada — tapi untuk **template kita sendiri**, dihitung aktual dengan Python di §6.3. Pelajaran budget karakter: karena Frasa Kunci Profesional (8–12 frasa) **embedded di prompt** (beda dari monolog Listening yang di-generate runtime), modul ini lebih dekat ke profil budget Vocabulary (BOW embedded) daripada Listening — perlu kompresi RULE 4 lebih disiplin (lihat §6.3, worst-case ~3.916 URL).

### 1.4 Strategi Diferensiasi Inggrisin Yuk (Professional English)

Dibangun di atas mekanisme yang **sudah diputuskan** di prd_user.md §4.8 (vocabulary+frasa siap pakai → challenge situasi kerja → feedback naturalness/formality/register), dirinci jadi 7 langkah feedback (§2.3):

| Differentiator | Lanskap pasar (coursebook/AI tools) | Inggrisin Yuk Professional |
|---|---|---|
| Diferensiasi per CEFR | Coursebook: ya (tapi tidak ada A1/A2 di BEC); AI tools: tidak ber-CEFR | 6 kurikulum ter-riset non-overlapping (§5), **termasuk A1/A2 fondasional** yang di-grounding ke GSE for Professionals (§4) |
| Bahasa pengantar | Native/English-only (AI tools); coursebook English | **Progresif** A1→C2 (Indonesia dominan A1 → full English C1/C2), §3.1 — celah EFL pemula |
| Fokus feedback | Filler words/pace/clarity (Poised); generic role-play (Yoodli) | **Naturalness + Formality + Register** profesional eksplisit (PRD §4.8 differentiator), §2.3 langkah 2–3 |
| Frasa kerja terstruktur | Tersebar di coursebook | **Frasa Kunci Profesional 8–12 frasa/Day terkurasi** (setara BOW Vocabulary) + Frasa Siap Pakai lexical chunks native (§2.1, §6.2) |
| Genre/register awareness | Implisit | Eksplisit per topik — email vs meeting vs proposal punya register berbeda (grounded Bhatia/Swales genre analysis, §4) |
| Diagnosis register mismatch | Tidak ada | Tag **[terlalu kasual] / [terlalu kaku] / [pas]** di Langkah 3 Formality & Register Check (grounded Brown & Levinson + business pragmatics, §4) |
| Spaced retrieval frasa | Tidak ada | **Frasa Kunci Refresh** Day 2+ di Langkah 4 (spaced retrieval, §2.3) |
| Penilaian CEFR ke user | Tidak (AI tools); coursebook via test | Langkah 5 Analisa Level + Day 31 Placement Test ber-Score → `module_test_results` (§5.8) |
| Persona | Brand korporat / neutral AI | **Kak Ara** — humble, tidak menyebut diri "seru/asyik", sapaan fleksibel dari profil |
| Trigger speaking | Beragam | **"Let's start speaking!"** (konsisten lintas modul) |
| Biaya | Berbayar/enterprise | Prompt-delivery via ChatGPT (tanpa inference sendiri) |

> Yang **tidak** diimpor dari modul lain: Box of Words 15-kata-fixed (itu Vocab — di sini diganti **Frasa Kunci Profesional 8–12 frasa**, unit leksikal yang lebih relevan untuk konteks kerja, lihat §2.1), Repeat After Me wajib-blocking (Grammar §4.3), Feedback 5 Langkah comprehension-centric (Listening §2.3), monolog runtime + comprehension question (Listening). Professional punya **Feedback 7 Langkahnya sendiri** yang berpusat pada **produksi profesional** (tulisan/ucapan kerja) dengan fokus formality/register — bukan comprehension dan bukan drill struktur.

---

## 📐 2. STRUKTUR MATERI ENGLISH FOR PROFESSIONALS PER SESI

Mengikuti skeleton dokumentasi sama dengan sibling docs §2, diisi mekanisme Professional dari prd_user.md §4.8.

### 2.1 Komponen Setiap Day

**1. Detail Frasa Kunci Profesional (key phrases)**
Setiap Day = 1 topik kerja spesifik (mis. Day 1 B1 — Introducing Yourself Professionally). Komponen inti: **8–12 Frasa Kunci Profesional** yang **fixed/terkurasi** (setara fungsi BOW di Vocabulary, tapi unit = *frasa kerja* bukan *kata tunggal* — lebih relevan untuk register profesional). Ditampilkan tabel 2 kolom: **Frasa + phonetic UK `/ /`** | **Arti + kapan dipakai (konteks/register)**. Frasa **benar-benar muncul** sebagai materi inti hari itu (bukan daftar generik). **PENTING teknis** (checkpoint, checkpoint_result_analysis.md §4.3): frasa-frasa ini harus tersimpan **terstruktur sebagai array `string[]`** di `lib/materi/professional-<level>.ts` (field `keyPhrases`), JANGAN cuma ter-embed di string `urlTemplate` ter-encode — supaya checkpoint Day 5/10/15/20 (word-bank fill-in-blank) bisa menariknya langsung. Lihat §6.2 (`{KEY_PHRASES}`) & §7 (checklist).

**2. Detail Frasa Siap Pakai (lexical chunks native)**
2–3 lexical chunks penutur asli yang **lebih idiomatik/luwes** untuk topik kerja itu (mis. "circle back to", "touch base", "following up on"). Format: `frasa -> "contoh." (arti)`. Ini lapisan di atas Frasa Kunci — Frasa Kunci = frasa fungsional wajib, Frasa Siap Pakai = upgrade naturalness. (Pola identik Langkah 7️⃣ "Frasa Siap Pakai" Vocabulary, prd_user.md §5.7.)

**3. Detail Writing/Speaking Challenge (situasi kerja nyata)**
Challenge berbasis **situasi kerja nyata** sesuai topik (PRD §4.8 langkah 4): tulis email, buka/tutup meeting, slide presentasi, jawaban interview, dst. User wajib pakai **min 4 Frasa Kunci**. Disertai 1 contoh singkat + template kosong. Speaking Challenge (3 pertanyaan konteks kerja) disiapkan untuk Langkah 3.

**4. Detail Feedback (7 Langkah)**
Otomatis setelah user kirim jawaban (lihat tabel metodologi §2.3 — diturunkan dari PRD §4.8 "naturalness, formality level, register" + pola feedback berlapis sibling docs):
1. **Koreksi** — tabel 3 kolom Punyaku | Versi Profesional | Kenapa (max 2 pola error utama).
2. **Naturalness Check** — natural/native vs kaku-terjemahan word-for-word; beri versi lebih luwes.
3. **Formality & Register Check** — cocok untuk konteks topik? tag **[terlalu kasual] / [terlalu kaku] / [pas]** + alternatif frasa pas register + alasan singkat. **Differentiator inti PRD §4.8.**
4. **Frasa Kunci Check** — tiap Frasa Kunci yang dipakai: tepat/belum + contoh benar. Day 2+: **Frasa Kunci Refresh** (1 frasa relevan dari sesi sebelumnya).
5. **Analisa Level** — performa profesional user + 1 tips naik ke level berikutnya.
6. **Frasa Siap Pakai Check + Speaking Challenge** — cek user sudah pakai lexical chunk native belum (kalau belum sarankan 1) + sajikan 3 Speaking Challenge questions untuk Langkah 3.
7. **Transfer Challenge** — buat 1 email/pesan baru (2–3 kalimat) di **situasi kerja berbeda** dari Challenge utama tadi, pakai min 2 Frasa Kunci hari ini → Kak Ara koreksi register & naturalness. Penutup sesi sebelum mode speaking. (Dasar: Transfer-Appropriate Processing, Lightbown 2008 — konsisten Grammar Langkah 7️⃣.)

**5. Detail Feedback (gaya bahasa)**
Mengikuti progresi CEFR (§3). Pujian konkret hanya di akhir sesi, tulus, tidak berlebihan (prd_user.md §5.4). **Tidak ada** Repeat After Me blocking.

**6. Detail Practice (Mode Suara)**
Dipicu user aktifkan mode suara 🎙️ lalu bilang **"Let's start speaking!"**. AI ajukan Speaking Challenge satu per satu. Tiap jawaban → Feedback 7 Langkah ringkas (fokus naturalness/formality/register). Lancar → 1 pertanyaan follow-up lebih menantang. Macet → contoh + pattern drill lalu ulangi.

**7. PROMPT siap pakai**
Prompt lengkap siap di-encode ke URL ChatGPT, mengikuti Template Master Professional (§6) dengan variabel terisi. `{SAPAAN}`/`{PANGGILAN}` auto-fill dari profil.

### 2.2 Alur Sesi (User Flow)

```
User klik topik Professional di dashboard (misal: B1 Day 2 — Writing Professional Emails)
         ↓
Halaman detail topik terbuka — deskripsi singkat + tombol "Mulai Belajar"
         ↓
User klik "Mulai Belajar" → ChatGPT terbuka dengan prompt sudah terisi
         ↓
Kak Ara (sapa singkat) tampilkan dalam 1 response:
TABEL FRASA KUNCI PROFESIONAL (8-12 frasa + phonetic UK | arti + kapan dipakai)
+ FRASA SIAP PAKAI (2-3 lexical chunks native)
+ WRITING/SPEAKING CHALLENGE situasi kerja nyata (min 4 Frasa Kunci) + contoh + template kosong
         ↓
User menulis jawaban (email/meeting opener/jawaban interview, dll)
         ↓
Kak Ara jalankan FEEDBACK 7 LANGKAH:
(Koreksi → Naturalness Check → Formality & Register Check [tag kasual/kaku/pas] →
 Frasa Kunci Check [+Refresh Day 2+] → Analisa Level → Frasa Siap Pakai Check + Speaking Challenge → Transfer Challenge)
         ↓
User aktifkan mode suara ChatGPT 🎙️, lalu bilang: "Let's start speaking!"
         ↓
Kak Ara ajukan PERTANYAAN 1 (konteks kerja; EN + terjemahan ID di A1-B1)
         ↓
User jawab (lisan, ditranskrip ke Inggris) → FEEDBACK 7 LANGKAH ringkas
         ↓
Lancar → 1 follow-up lebih menantang | Macet → pattern drill lalu ulangi
         ↓
Lanjut PERTANYAAN 2 → ... → PERTANYAAN 3
         ↓
Selesai → Kak Ara beri pujian singkat di akhir sesi (tulus, tidak berlebihan)
         ↓
User kembali ke app → topik otomatis tertandai ✓ (progress +1)
```

### 2.3 Tabel Metodologi Feedback 7 Langkah (Professional)

Dasar riset **khusus business communication / ESP / pragmatics** — diverifikasi via web research (§4):

| # | Langkah | Aturan Konten | Dasar Riset/Rationale (professional-specific) |
|---|---|---|---|
| 1️⃣ | Koreksi | Tabel 3 kolom: Punyaku \| Versi Profesional \| Kenapa (akar masalah; fokus max 2 pola error terpenting). Kalimat ≥95% benar: tandai OK, Kenapa "—". | **Direct corrective feedback** (Ellis 2009 typology) — paling sesuai untuk learner yang belum punya cukup sumber daya linguistik untuk self-correct (A1–B2); tetap dipertahankan di C1/C2 untuk semua kalimat (selaras pola Vocab §5.6). "Versi Profesional" (bukan sekadar "versi benar") menekankan target genre kerja, bukan sekadar gramatika. |
| 2️⃣ | Naturalness Check | Natural/native vs **kaku-terjemahan word-for-word dari Bahasa Indonesia** vs terlalu singkat di bawah level. 1–2 catatan + versi lebih luwes. | **Native-like selection / formulaic language** (lexical chunk awareness, SLA) — penutur profesional dikenali bukan dari grammar benar saja tapi pemilihan frasa yang "terdengar alami". EFL Indonesia rentan *translationese* (mentranslasi struktur Indonesia mentah ke Inggris). Selaras Langkah 3️⃣ Naturalness [speaking_analysis.md](speaking_analysis.md) §2.3. |
| 3️⃣ | Formality & Register Check | Register cocok untuk konteks topik? tag **[terlalu kasual] / [terlalu kaku] / [pas]** + 1 alternatif frasa pas register + alasan 1 kalimat. ✅ jika sudah pas. | **Pragmatic competence & politeness theory** (Brown & Levinson 1987 — positive/negative politeness, hedging, indirectness untuk face-threatening acts spt request/refusal; Bardovi-Harlig & Dörnyei 1998 — EFL learners under-weight pragmatic violations). Register/formality = **differentiator eksplisit PRD §4.8**. Genre kerja punya register kontras (email formal vs Slack kasual vs proposal sangat formal) — **genre analysis** (Bhatia 1993, Swales) menegaskan tiap genre punya konvensi register sendiri. |
| 4️⃣ | Frasa Kunci Check | Tiap Frasa Kunci yang dipakai user: tepat/belum + contoh benar. **Day 2+: Frasa Kunci Refresh** — tanya 1 frasa relevan dari sesi sebelumnya ("masih ingat kapan dipakai?"). | **Lexical chunk acquisition** + **spaced retrieval** — frasa profesional sering low-frequency dalam input sehari-hari EFL Indonesia (kurva lupa tajam), retrieval terjadwal memperkuat retensi. Selaras Vocab Refresh Vocabulary (prd_user.md §5.6) & Vocab Refresh Listening (§2.3). Frekuensi refresh meningkat di level atas (§3.2). |
| 5️⃣ | Analisa Level | Penilaian performa profesional user (boleh granular: "solid B1, ada elemen B2") + 1 tips naik level. C2: reframe ke "mempertahankan Mastery" (selaras pola C2 sibling docs & prd_user.md §5.6). | **CEFR action-oriented self-positioning** (Companion Volume) — memberi user titik referensi konkret di skala kompetensi profesional. **GSE for Professionals** memetakan skill kerja granular per level (§4) — dipakai sebagai rujukan penilaian. |
| 6️⃣ | Frasa Siap Pakai Check + Speaking Challenge | Cek user sudah pakai lexical chunk native belum; kalau belum sarankan 1 yang mudah. Lalu sajikan **3 Speaking Challenge** konteks kerja (EN + ID di A1–B1, EN-only B2+). Jawaban kosong/di luar topik/Indonesia semua → jangan koreksi, minta tulis Inggris dulu (off-script redirect). | Selaras Langkah 6️⃣–8️⃣ Vocabulary (Frasa Siap Pakai + Speaking Challenge, prd_user.md §5.7) — retrieval practice lisan memperkuat produksi. Off-script redirect mencegah AI mengoreksi input kosong. |
| 7️⃣ | Transfer Challenge | Buat 1 email/pesan baru (2–3 kalimat) di situasi kerja **berbeda** dari Challenge utama tadi, pakai min 2 Frasa Kunci hari ini → Kak Ara koreksi register & naturalness. Penutup sesi sebelum mode speaking. | **Transfer-Appropriate Processing** (Lightbown 2008) — produksi pola di konteks baru memastikan transfer ke real-world use; tidak cukup hanya repeat dalam situasi yang sama. Konsisten dengan Grammar Langkah 7️⃣ Transfer Challenge (prd_user.md §4.3 catatan optimasi). "Closing loop": user buktikan dapat memakai Frasa Kunci secara mandiri di luar template awal. |

> **Perbedaan disengaja dari sibling §2.3:** Professional **tidak** punya 5W+1H/Paragraf Diperkaya (khusus narrative writing Vocab), **tidak** punya Catatan Pelafalan phonetic-heavy Speaking, **tidak** punya comprehension question Listening, **tidak** punya Repeat After Me blocking Grammar. **7 langkah** (dikonfirmasi product owner 2026-06-28): lebih ringkas dari Vocab/Speaking (8) tapi lebih kaya dari Listening (5), dengan **Formality & Register Check** (Langkah 3) sebagai jantung differentiator PRD §4.8 dan **Transfer Challenge** (Langkah 7) sebagai penutup loop Transfer-Appropriate Processing. **"7 langkah"** adalah **operasionalisasi** dari PRD §4.8 yang hanya menyebut "Koreksi & feedback spesifik (naturalness, formality level, register)" — dikonfirmasi product owner (§8 item 2).

---

## 🎯 3. EVOLUSI BAHASA & KEDALAMAN PER LEVEL (A1→C2)

Prinsip diadaptasi dari prd_user.md §5.5 (kebijakan bahasa progresif) & §5.6 (audit evolusi per langkah): **struktur 7 langkah Feedback tetap konstan di semua level** (ritual prosedural yang user kenali sejak A1) — yang berubah secara sengaja adalah **bahasa pengantar, kedalaman penjelasan, kompleksitas situasi kerja, dan fokus tiap langkah**. Scaffolding (Bahasa Indonesia) di-*fade* bertahap (Vygotsky ZPD), sama dengan prinsip sibling docs §3.

### 3.1 Kebijakan Bahasa per Level (diadaptasi dari prd_user.md §5.5, untuk konteks Professional)

| Level | Bahasa feedback & penjelasan | Bahasa contoh/challenge | Terjemahan | Porsi Indonesia (estimasi, mengikuti §5.5) |
|---|---|---|---|---|
| **A1** | Full Indonesia | English (frasa kerja dasar) | Semua Speaking Challenge + Frasa Kunci + contoh disertai terjemahan | ~90% |
| **A2** | Indonesia dominan, frasa kerja dalam English | English (A2) | Speaking Challenge + Frasa Kunci kunci disertai terjemahan | ~75% |
| **B1** | Indonesia dominan untuk penjelasan, istilah profesional (*register*, *formal/informal*, *follow up*) makin sering English | English (B1) | Speaking Challenge tetap terjemahan lengkap (user wajib paham sebelum jawab — prinsip prd_user.md §5.5 B1); contoh challenge mulai tanpa terjemahan kalimat-per-kalimat | ~60% |
| **B2** | English mulai dominan | English (B2, register kerja standar) | Hanya jika risiko miskonsepsi (mis. idiom bisnis sulit dijelaskan tanpa L1) | ~25% |
| **C1** | Full English | English (C1, register eksekutif/diplomatik) | Tidak ada | ~5% (istilah sangat teknis saja) |
| **C2** | Full English (gaya native, feedback singkat-tajam) | English (C2, idiomatik/high-stakes) | Tidak ada | 0% |

### 3.2 Evolusi Tiap Langkah Feedback Professional (A1 → C2)

| Langkah | A1–A2 | B1 | B2 | C1 | C2 |
|---|---|---|---|---|---|
| 1️⃣ Koreksi | 3 kolom, Kenapa kontrastif Bahasa Indonesia (interferensi L1), max 2 pola | Sama, label profesional English makin sering di kolom Kenapa | Kolom jadi **Why** (English); catatan Indonesia hanya 1–2 pola interferensi | Why digabung, full English, 1 catatan tajam | Why **1 kalimat native-to-native** |
| 2️⃣ Naturalness | Fokus "jangan terjemahan mentah Indonesia"; versi luwes sederhana | + hindari over-formal kaku khas EFL ("I would like to inform you that...") | + variasi sinonim & flow antar kalimat | + idiom bisnis & rhythm native | + nuansa stilistika, understatement, executive polish |
| 3️⃣ Formality & Register | Bedakan **formal vs kasar dasar** (mis. "Hey" vs "Dear") + tag pas/kaku/kasual | + register email vs chat vs meeting | + **hedging & politeness** (softening request/refusal — Brown & Levinson) | + **diplomatic indirectness**, nominalisation, register eksekutif | + pragmatic tone mismatch sangat halus, missing hedges, code-switching register |
| 4️⃣ Frasa Kunci Check | Frasa kerja konkret + arti Indonesia. Refresh mulai **Day 6** | Frasa + collocation dasar. Refresh **Day 3** | Frasa idiomatik bisnis. Refresh **Day 2** | Frasa diplomatik/eksekutif. Refresh Day 2 | Frasa register-tinggi/rhetoris. Refresh Day 2 |
| 5️⃣ Analisa Level | Encouraging, fokus "berani nulis frasa kerja"; tips naik A2 | Sebut sub-skill (gist email vs detail) | Fokus argumen profesional & inference register, English | Fokus wacana profesional kompleks di luar zona nyaman | Reframe: tips **mempertahankan** Mastery (C2 = tertinggi; selaras prd_user.md §5.6) |
| 6️⃣ Frasa Siap Pakai + Speaking | Chunk native sederhana + 3 pertanyaan EN+ID, retrieval wajib | Sama, chunk B1 | Full English, register-aware | Chunk register eksekutif | Chunk rhetoris/persuasif native, fokus timing & nada |
| 7️⃣ Transfer Challenge | Situasi kerja A1 sederhana, 2 kalimat baru | 2-3 kalimat email/pesan pendek, konteks berbeda | Email/pesan multi-kalimat, register bervariasi | Draft tertulis formal/diplomatik, English penuh | Executive-level draft, tone subtil, pragmatic nuance |

> **Catatan konsistensi dengan modul lain:** struktur 7 langkah **tidak berubah** — sama prinsip "ritual konstan, kedalaman yang berubah" prd_user.md §5.6, sibling docs §3. **Self-Check Pertama di C1/C2 ✅ DIKONFIRMASI (2026-06-28)** — saat menulis prompt C1/C2, tambahkan langkah awal sebelum Langkah 1: "Baca ulang jawabanmu — bagian mana yang menurutmu belum natural atau register-nya belum tepat?" (metalinguistic feedback, Ellis 2009; konsisten Grammar C1 `materi/c1/grammar.md`). **Tidak menambah hitungan langkah** — ini pre-step kondisional C1/C2, bukan langkah ke-8.

### 3.3 Evolusi Kompleksitas Situasi Kerja per Level (dasar dari GSE for Professionals & CEFR CV, §4)

Kompleksitas **situasi kerja** & target panjang produksi naik per level, di-grounding ke GSE for Professionals (objektif kerja per band) + CEFR CV Written/Spoken Production scales. **Bukan** angka yang ditampilkan ke user — panduan internal penulisan & isi `{LEVEL_HINT}` (§6).

| Level | Situasi kerja realistis (GSE for Professionals descriptor) | Estimasi panjang produksi (panduan internal) | Kompleksitas register & pragmatik |
|---|---|---|---|
| **A1** | Perkenalan diri dasar di kerja, salam/sopan dasar, nama jabatan, eja nama, frasa fixed (GSE 22–35: "introduce themselves… giving info about their job", "agree to simple requests") | 3–4 kalimat / 5–8 frasa | 1 fungsi per frasa, formal dasar (Dear/Hi), tanpa hedging |
| **A2** | Pesan telepon kerja sederhana, jadwalkan meeting, buat/terima offer, tolak sopan, tanya klarifikasi di telepon, keluhan sederhana (GSE 36–42: "leave simple work-related phone messages", "schedule a meeting using simple fixed expressions", "make and accept offers", "refuse requests politely") | 4–6 kalimat / email pendek | Salam/penutup email standar, sopan fixed-expression |
| **B1** | Email kerja, ide pokok meeting, deskripsi peran, feedback dasar, komplain dengan tuntutan, paraphrase fakta (GSE 43–50: "make a complaint", "paraphrase a factual statement", "understand main points of feedback") | Email/paragraf terstruktur | Register *clear standard*, pembuka-isi-penutup, sopan tapi belum diplomatik halus |
| **B2** | Presentasi data, argumen meeting, proposal awal, negosiasi, performance review, register email vs chat (GSE 51–66: "distinguish facts/opinions", "recognise tone and intended audience of a structured text", "identify styles, genres, registers") | Multi-paragraf, terstruktur argumen | Hedging mulai, register kontras antar genre, diplomatik dasar |
| **C1** | Negosiasi kompleks, crisis comms, kritik diplomatik, briefing spontan, register eksekutif (GSE 67–75+: "infer tone", "recognise contrasting arguments", register-aware discourse) | Wacana profesional panjang, terkontrol | Diplomatic indirectness, nominalisation, executive register, hedging mahir |
| **C2** | High-stakes leadership rhetoric, cross-cultural high-stakes, persuasi ke skeptis, executive presence (ekstrapolasi dari "C2 = mastery/precision") | Native-level, padat, rhetoris | Register slippage halus, irony/subtext, code-switching register, pragmatic mastery |

> **Catatan kejujuran:** estimasi panjang produksi di atas adalah **operasionalisasi terjustifikasi** dari deskriptor kualitatif GSE/CEFR (yang menyebut jenis tugas & kompleksitas, bukan word-count pasti) — panduan penulisan, bukan klaim ada standar word-count resmi. Deskriptor situasi kerja **dikutip langsung** dari GSE for Professionals (nomor GSE point yang diverifikasi di §4). Ini menjawab kebutuhan A1/A2: situasi kerja A1/A2 **bukan dikarang** — di-anchor ke objektif kerja GSE yang benar-benar ada di band itu (lihat §5.1–5.2).

---

## 📚 4. METODOLOGI RISET CEFR / BUSINESS ENGLISH / ESP

Kurikulum A1–C2 di §5 & evolusi §3 **tidak** ditebak — di-grounding ke sumber otoritatif yang **benar-benar diverifikasi lewat web research** (fetch/search nyata, bukan memori model). Karena tidak ada competitor walkthrough (§1.1), section riset ini **lebih berat** dari sibling docs. Tabel sumber, alasan otoritas, status verifikasi, dan cara dipakai:

| Sumber | Apa & kenapa otoritatif | URL (diverifikasi via WebSearch/WebFetch) | Status verifikasi | Cara dipakai |
|---|---|---|---|---|
| **Pearson — GSE Learning Objectives for Professional English (Sept 2022)** | Satu-satunya framework dengan **objektif belajar Business English granular per skill (reading/writing/listening/speaking) yang dipetakan ke CEFR**, dibangun dari job tasks O*NET (US Bureau of Labor Statistics) lewat **GSE Job Profiles**. Memuat objektif profesional **dari Below A1 sampai C2** — krusial untuk A1/A2 yang BEC tidak punya. | https://www.pearson.com/content/dam/one-dot-com/one-dot-com/english/SupportingDocs/gse-learning-objectives/Adult-Professional-English-new.pdf | ✅ **WebFetch + ekstrak teks PDF aktual (pypdf, 64 halaman)** — terverifikasi memuat objektif spt GSE 32 "understand short simple emails on work-related topics", GSE 42 "schedule a meeting / leave work-related phone messages", GSE 48 "understand main points of feedback", GSE 65–67 "recognise tone/audience of structured text / identify genres, registers" | Dasar **utama** situasi kerja per level (§3.3, §5.1–5.6) — terutama A1/A2 (objektif kerja fondasional nyata di band itu) & B2 (register/genre awareness) |
| **Cambridge English — Business (BEC): Preliminary B1 / Vantage B2 / Higher C1** | Sertifikasi Business English paling mapan. **Tegas hanya B1–C1** (tidak ada BEC A1/A2/C2) — bukti kuat bahwa *assessment* Business English secara konvensional mulai di B1. | https://www.cambridgeenglish.org/exams-and-tests/qualifications/business/ | ✅ **WebFetch** — terverifikasi B1 Preliminary (scale 140–159), B2 Vantage (160–179), C1 Higher (180–199). Catatan status: discontinued di luar China, ditawarkan 1×/tahun mulai 2025 | Anchor **B1/B2/C1** core professional skills (§5.4–5.6) + justifikasi jujur bahwa A1/A2 profesional = **survival-level** (di bawah ambang BEC), C2 = ekstrapolasi (di atas BEC Higher) — §5.7 |
| **Council of Europe — CEFR Companion Volume (2020)** | Dokumen resmi memperluas deskriptor CEFR 2001; skala Written Production, Spoken Production, Correspondence, Reports & Essays, Processing/Mediating Text per A1–C2. Otoritatif untuk "produksi kerja apa yang realistis di level X". | https://rm.coe.int/common-european-framework-of-reference-for-languages-learning-teaching/16809ea0d4 ; extract terkurasi (NILE-ELT 2024): https://learning.nile-elt.com/d2l/common/viewFile.d2lfile/Content/638466143371536548/SELECTED%20SCALES%20FROM%20COMMON%20EUROPEAN%20FRAMEWORK%20OF%20REFERENCE%20COMPANION%20VOLUME_NILE2024.pdf | ✅ URL resmi Council of Europe (sama yang sudah diverifikasi di listening_analysis.md §4) — memuat skala Correspondence & Reports relevan untuk email/report kerja | Cross-check progresi produksi (§3.3) & reframe C2 "mastery/precision" (§5.6) |
| **Pearson — GSE Job Profiles (O*NET-based)** | Memetakan **task pekerjaan nyata** (dari O*NET) ke GSE Learning Objectives — bukti empiris skill kerja mana butuh level berapa. | Dijelaskan di GSE Professional PDF hal. 7 + https://www.pearson.com/languages/why-pearson/the-global-scale-of-english/resources.html | ✅ terverifikasi via teks PDF GSE Professional (hal. 7: "GSE Job Profiles… created using job descriptions from O*NET database… each task mapped to GSE Learning Objectives") | Validasi distribusi topik per level (tugas kerja mana criterial A1/A2 vs B1/B2 vs C1/C2) — §5.7 |
| **Hutchinson & Waters — *English for Specific Purposes: A Learning-Centred Approach* (1987)** | Teks foundational ESP: pembedaan **target needs vs learning needs**, ESP sebagai *approach* bukan produk, needs analysis sebagai inti desain kurikulum. | Internet Archive: https://archive.org/details/englishforspecif0000tomh ; needs analysis review (ERIC): https://files.eric.ed.gov/fulltext/EJ1295036.pdf | ✅ **WebSearch terverifikasi** (Archive.org + ERIC EJ1295036 fulltext) | Dasar pendekatan **needs-driven** memilih topik kerja yang benar-benar dibutuhkan (bukan grammar abstrak) + justifikasi "English for Occupational Purposes" sebagai domain sah |
| **Dudley-Evans & St John — *Developments in English for Specific Purposes: A Multi-Disciplinary Approach* (1998, CUP)** | Memperluas ESP: **English for Business Purposes** sebagai area dominan ESP; menekankan **common-core vs specific work**, peran genre/discourse analysis, pembedaan EAP vs EOP. | Google Books: https://books.google.com/books/about/Developments_in_English_for_Specific_Pur.html?id=FY5ChNRKtxwC ; Semantic Scholar: https://www.semanticscholar.org/paper/dc293eedb2d46f365125ad7b0e05e0ef7a975256 | ✅ **WebSearch terverifikasi** (Google Books + Semantic Scholar + CUP catalog) | Justifikasi struktur **common-core (B1) → specific (C1/C2)** profesional + dasar genre/discourse analysis untuk register kerja (§2.3 Langkah 3, §3.2) |
| **Bhatia — *Analysing Genre: Language Use in Professional Settings* (1993, Longman)** | Genre analysis komunikasi profesional: **move analysis** genre kerja (job application letters, business letters); tiap genre punya struktur kognitif & konvensi register sendiri. Inspirasi Swales (1990). | ResearchGate review: https://www.researchgate.net/publication/248670605 ; Cambridge Core (SSLA review): https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/abs/0D2AAC05090DFE12117EF260D14A2BD4 | ✅ **WebSearch terverifikasi** (ResearchGate + Cambridge Core) | Dasar **genre-aware design**: email vs proposal vs report punya register/move berbeda → Langkah 3 Formality & Register Check (§2.3) + justifikasi tiap topik kerja diperlakukan sebagai genre tersendiri |
| **Brown & Levinson — Politeness Theory (1987) + business pragmatics terapan** | **Positive/negative politeness**, hedging, indirectness untuk **face-threatening acts** (request, refusal) — inti komunikasi kerja diplomatik. Diperkuat riset move analysis request emails bisnis. | Politeness in request emails (move analysis): https://www.sciencedirect.com/science/article/abs/pii/S0889490621000235 ; politeness strategies business discourse: https://rudn.tlcjournal.org/archive/3(4)/3(4)-04.pdf | ✅ **WebSearch terverifikasi** — request/refusal sbg FTA, hedging (modal/conditional/vague language) menyoftkan imposition, indirectness naik seiring keseriusan FTA | Dasar **Formality & Register Check** (Langkah 3) + evolusi hedging/diplomatik per level (§3.2: B2 hedging dasar → C1 diplomatic indirectness → C2 pragmatic mastery) |
| **Bardovi-Harlig & Dörnyei (1998) — pragmatic vs grammatical awareness (TESOL Quarterly)** | EFL learners (vs ESL) sistematis menganggap error gramatikal lebih serius dari pelanggaran pragmatik — padahal pragmatic misfires yang bikin penutur asli tidak nyaman. Instruksi pragmatik eksplisit berdampak besar untuk EFL. | Sudah diverifikasi & dipakai di [speaking_analysis.md](speaking_analysis.md) §2.3 (TESOL Quarterly EJ567536) | ✅ (reuse verifikasi sibling Speaking) | Justifikasi kenapa **register/formality** harus jadi langkah eksplisit (Langkah 3) untuk EFL Indonesia — mereka cenderung mengabaikannya |
| **Ellis (2009) — typology of written corrective feedback** | Direct vs indirect/metalinguistic feedback; direct sesuai learner belum mampu self-correct (A1–B2), indirect/metalinguistic untuk learner lanjut (C1/C2). | Sudah diverifikasi & dipakai di Vocab §5.6 (prd_user.md) | ✅ (reuse verifikasi Vocab §5.6) | Dasar Langkah 1 Koreksi (direct semua level) + usulan terbuka Self-Check C1/C2 (§8) |
| **TOEIC — ETS score-to-CEFR mapping (L&R + S&W)** | Tes Business English global. L&R dan S&W dipetakan ke **A1–C1** (tidak menjangkau C2) — konsisten dengan BEC bahwa Business English assessment konvensional berhenti di C1. | https://www.ets.org/pdfs/toeic/toeic-mapping-cefr-reference.pdf (landing readable: https://www.etsglobal.org/pl/en/help-center/score-usage/are-toeic-listening-and-reading-test-scores-mapped-cefr) | ⚠️ **Sebagian** — landing page + WebSearch terverifikasi (L&R/S&W → A1–C1); **PDF resmi tidak ter-ekstrak teksnya** (binary/image, WebFetch gagal baca konten). Klaim mapping A1–C1 di-anchor ke landing page ETS Global yang readable, bukan ke PDF | Cross-check **konvergen** bahwa Business English assessment mainstream = A1–C1 (memperkuat kejujuran §5.7: A1/A2 survival + C2 ekstrapolasi) |
| **Coursebook leveling precedent — Market Leader (Pearson, A1–C1) & Business Result (Oxford, A2–C2)** | Coursebook Business English well-tested, CEFR-mapped, dipakai luas. Market Leader 5 level A1–C1; Business Result 6 level Starter–Advanced (A2–C2). | Market Leader: https://www.pearson.com/english/catalogue/business-english/market-leader.html ; Business Result (TESL-EJ review): https://tesl-ej.org/wordpress/issues/volume15/ej57/ej57r1/ ; ML–GSE alignment PDF: https://www.pearson.com/content/dam/one-dot-com/one-dot-com/apac/japan/catalog/mlgsebookletint.pdf | ✅ **WebSearch terverifikasi** (Pearson catalogue + TESL-EJ review) | **Preseden distribusi topik per level** (§1.2) — memvalidasi Business English memang di-level-kan A1/A2…C1/C2 (Market Leader bahkan punya level Elementary/A1), bukan flat. Cross-check §5 |

**Catatan kejujuran sumber:** Konvergensi terkuat ada di **B1–C1** — Cambridge BEC (B1/B2/C1), Pearson GSE for Professionals (objektif kerja granular per band), TOEIC (A1–C1), dan coursebook (Market Leader A1–C1, Business Result A2–C2) semua **sepakat** Business English inti hidup di B1–C1. Untuk **A1/A2**, GSE for Professionals adalah satu-satunya sumber yang memberi objektif **occupational** eksplisit di band serendah itu (introduce self at work, phone messages, scheduling, offers, polite refusals) — BEC/TOEIC praktis tidak menyentuh A1; maka A1/A2 profesional kita di-frame jujur sebagai **survival-level workplace English** (di-anchor GSE, bukan dikarang kompleksitas bisnis yang tidak realistis). Untuk **C2**, semua assessment Business English (BEC Higher mentok C1, TOEIC mentok C1) **berhenti sebelum C2** — maka C2 profesional adalah **ekstrapolasi terjustifikasi** dari prinsip "C2 = mastery/precision" (sama pola C2 di tiga sibling docs), bukan jenis tugas kerja diskret baru. Ditandai transparan di §5.7. Riset ESP/genre/pragmatics (Hutchinson & Waters, Dudley-Evans & St John, Bhatia, Brown & Levinson, Bardovi-Harlig) dipakai untuk **metodologi feedback & register**, bukan untuk memilih topik — topik di-anchor ke GSE/BEC/coursebook.

---

## 📋 5. KURIKULUM 30 TOPIK PROFESSIONAL PER LEVEL (180 TOPIK, NON-OVERLAPPING)

Aturan: 6 level × 30 topik = **180 topik non-overlapping**. **30 topik PRD lama dipertahankan sebagai anchor B1 (Day 1–21 Core, criterial B1) & B2 (Day 22–30 Advanced, criterial B2)** — daftar asli memang didesain untuk target "B1+". **A1/A2 = topik survival-level BARU** (di-anchor GSE for Professionals occupational descriptors band rendah). **C1/C2 = topik sophisticated BARU** (negosiasi kompleks, crisis comms, executive presence, cross-cultural high-stakes, leadership rhetoric). Tiap topik = nama + rationale 1 baris dgn rujukan framework. Tiap level: Day 1–30 + Day 31 Placement Test (§5.8).

### 5.1 LEVEL A1 (Beginner) — RISET BARU (survival-level workplace), di-anchor GSE for Professionals

Rationale grup: A1 occupational = **frasa kerja fixed, perkenalan diri dasar, salam/sopan dasar, fungsi transaksi tunggal** (GSE 22–35 Professional: "introduce themselves giving info about their job", "agree to simple requests", "greet people, ask how they are"). **Sengaja menghindari** email panjang/negosiasi/argumen (itu B1+). Fokus: *survival* di tempat kerja berbahasa Inggris dengan frasa hafalan.

| Day | Topik | Rationale (1 baris) | Day | Topik | Rationale (1 baris) |
|---|---|---|---|---|---|
| 1 | Saying Your Name & Job Title | GSE 12/22 "introduce themselves… their job" — fungsi paling dasar. | 16 | Saying Goodbye at the End of Day | Leave-taking fixed expressions (GSE 28). |
| 2 | Greeting Colleagues | GSE 24 "greet people, ask how they are". | 17 | Asking Where Something Is (Office) | "ask for simple directions referring to a plan" (GSE 29). |
| 3 | Saying Where You Work | GSE 22 "info about where they live/their job". | 18 | Talking About Your Daily Tasks | "answer simple questions about daily activities, given a model" (GSE 28). |
| 4 | Spelling Your Name & Email | GSE 14 "spell out their name and address". | 19 | Saying You Don't Understand | "ask for repetition or clarification, simple way" (GSE 35). |
| 5 | Saying Your Phone Number | GSE 13 "read out phone numbers". | 20 | Asking a Simple Question to a Coworker | "ask basic requests for information" (GSE 16). |
| 6 | Basic Office Politeness (Please/Thank You) | GSE 12 "words/phrases to show politeness". | 21 | Saying What Department You're In | "name a few common jobs / their department" (GSE 16). |
| 7 | Introducing a Coworker | GSE 28 "make an introduction". | 22 | Talking About Your Work Schedule | "tell the time… simple future arrangements" (GSE 22/28). |
| 8 | Asking Someone's Name & Role | GSE 13/16 "ask name… name common jobs". | 23 | Confirming a Time or Date | "give dates using standard formats" (GSE 24). |
| 9 | Saying Office Items in English | GSE 16/18 "name common everyday objects / describe". | 24 | Saying You Are Busy or Free | "express how they are feeling, basic" (GSE 28). |
| 10 | Asking for Something at Work | GSE 28 "ask people for things". | 25 | Basic Phone Greeting | Bridge ke A2 "answer the phone, simple greeting". |
| 11 | Agreeing to a Simple Request | GSE 24 "agree to simple requests, fixed expressions". | 26 | Saying Numbers & Prices at Work | "give basic info about price" (GSE 23). |
| 12 | Saying Your Working Hours | GSE 16/22 "tell time… working hours". | 27 | A Simple Thank-You Message | Short fixed written thanks (GSE 31 "short simple messages"). |
| 13 | Talking About Your Country & Language | GSE 12 "say country, nationality, language". | 28 | Saying You Will Do Something | "make simple future arrangements" (GSE 28). |
| 14 | Describing Your Job in One Sentence | GSE 22 "introduce job in a basic way". | 29 | Asking a Coworker for Help | "ask for attention / ask for things" (GSE 28/29). |
| 15 | Saying Yes/No Politely at Work | GSE 24/29 "respond politely, basic fixed expressions". | 30 | A Simple Workplace Review (combining A1) | Konsolidasi konteks A1 sebelum Placement Test. |

> **Non-overlap check A1:** A1 = **frasa kerja fixed fungsi tunggal** (perkenalan diri, salam, eja, nomor, sopan dasar) — di-anchor GSE Professional band 12–35. Tidak ada email panjang, argumen, atau negosiasi (itu B1+). Bridge ke A2 mulai terasa Day 25–28 (telepon, future arrangement). **Catatan kejujuran:** A1 profesional adalah lapisan paling "survival" — beberapa topik (Day 1/3/14 perkenalan) tampak mirip topik perkenalan umum, tapi **konteksnya kerja** (job title, department, working hours), bukan personal A1 umum. Dibedakan dari modul lain karena fokus **leksikon kerja**.

### 5.2 LEVEL A2 (Elementary) — RISET BARU (workplace transactions), di-anchor GSE for Professionals

Rationale grup: A2 occupational = **transaksi kerja sederhana multi-langkah, email pendek, pesan telepon, jadwalkan meeting, offer/refusal sopan** (GSE 36–42 Professional: "leave work-related phone messages", "schedule a meeting using simple fixed expressions", "make and accept offers", "refuse requests politely", "ask for repetition/clarification on the phone"). Membangun di atas A1 (frasa tunggal) ke **fungsi transaksional bertahap**.

| Day | Topik | Rationale (1 baris) | Day | Topik | Rationale (1 baris) |
|---|---|---|---|---|---|
| 1 | Writing a Very Short Work Email | GSE 31/32 "short simple emails on work-related topics". | 16 | Asking About a Deadline (simple) | "describe how often a problem occurred" (GSE 42). |
| 2 | Leaving a Phone Message | GSE 42 "leave simple work-related phone messages". | 17 | Saying You Are Late or Absent | "express regret using simple language" (GSE 42). |
| 3 | Scheduling a Simple Meeting | GSE 42 "schedule a meeting, simple fixed expressions". | 18 | Confirming an Order or Delivery | "talk about orders/deliveries, fixed expressions" (GSE 42). |
| 4 | Making a Simple Offer | GSE 36 "make and accept offers". | 19 | Asking a Coworker About Their Day | "make small talk, given a model" (GSE 36). |
| 5 | Politely Refusing a Request | GSE 35 "refuse requests politely, simple language". | 20 | Describing a Simple Work Problem | "describe a problem, simple language" (GSE 42). |
| 6 | Asking for Clarification on the Phone | GSE 35 "ask for clarification on the phone". | 21 | Making an Appointment by Phone | "make an appointment on the phone" (GSE 42). |
| 7 | Introducing Yourself in an Email | GSE 32 "short simple emails… personal details". | 22 | Talking About Your Company (basic) | "give basic info about company/products" (GSE 35). |
| 8 | Answering a Simple Work Question | GSE 35 "answer simple questions about work". | 23 | Saying What You Did at Work Today | "give short basic description of activities" (GSE 42). |
| 9 | Making Small Talk Before a Meeting | GSE 36 "make small talk using simple language". | 24 | Ordering Office Supplies | "ask for/provide goods and services" (GSE 35). |
| 10 | Confirming a Meeting Time | GSE 42 "make future arrangements with a diary". | 25 | Giving Simple Directions in the Office | "ask for/give simple directions" (GSE 29/36). |
| 11 | Saying Your Job Responsibilities | GSE 35 "ask and answer what they do at work". | 26 | Thanking a Client Simply | Short polite written thanks, transactional. |
| 12 | Asking a Coworker for Information | GSE 35 "make simple requests to do something". | 27 | Saying You Agree or Disagree (basic) | "discuss what to do, simple" (GSE 36). |
| 13 | Writing a Short Reminder Note | GSE 42 "clear work-related messages". | 28 | Talking About a Process (first/then) | "give order of a work process, simple" (GSE 42). |
| 14 | Accepting & Declining Invitations | GSE 36 "make and accept offers / invitations". | 29 | Comparing Two Simple Options | "make basic comparisons, simple" (GSE 43 bridge). |
| 15 | Asking About Prices & Quantities | GSE 23/35 "info about price… goods and services". | 30 | A Mixed Workplace Tasks Review (A2) | Konsolidasi konteks transaksional A2 sebelum Placement Test. |

> **Non-overlap check A2:** A1 = frasa tunggal hafalan; A2 = **transaksi kerja bertahap** (email pendek, pesan telepon, jadwalkan meeting, offer/refusal, klarifikasi telepon). Jenis tugas **baru** vs A1: email tertulis pendek, fungsi telepon, offer/decline, future arrangement multi-langkah. Tema mirip A1 (perkenalan) di A2 hadir sebagai **email/percakapan transaksional**, bukan frasa tunggal. Belum ada argumen/negosiasi/register kontras (itu B1+). Di-anchor GSE band 36–42.

### 5.3 Catatan transisi A2 → B1 (kenapa B1 pakai topik PRD lama)

GSE memetakan loncatan jelas di band 43–50 (B1): dari transaksi sederhana ke **email kerja penuh, ide pokok meeting, feedback, komplain dengan tuntutan, paraphrase fakta**. Ini **persis** tingkat 30 topik PRD lama Day 1–21 "Core Professional Skills" yang didesain untuk "B1+". Maka B1 (§5.4) **memakai/mengadaptasi anchor PRD lama** — bukan mengarang topik B1 baru dari nol. Keputusan desain besar ini dijelaskan transparan di bawah.

### 5.4 LEVEL B1 (Intermediate) — ANCHOR DARI PRD LAMA (Day 1–21 Core Professional Skills)

Rationale grup: B1 (≈BEC Preliminary) = **email kerja, ide pokok meeting, deskripsi peran, feedback dasar, komplain, paraphrase** (GSE 43–50 + BEC B1). **30 topik PRD lama "Core Professional Skills" (Day 1–21) didesain untuk B1+** → dijadikan **anchor B1**, ditambah 9 topik untuk genap 30 (diambil dari spektrum B1 yang masih criterial B1, bukan B2). **Keputusan: pertahankan 21 topik Core PRD apa adanya di B1, tambah 9 topik B1-level baru.**

| Day | Topik | Asal & rationale |
|---|---|---|
| 1 | Introducing Yourself Professionally | **PRD Core #1** — perkenalan diri kerja penuh (BEC B1 "everyday business basics"). |
| 2 | Writing Professional Emails | **PRD Core #2** — GSE 43+ email kerja terstruktur. |
| 3 | Business Meetings — Opening & Closing | **PRD Core #3** — GSE 50 "identify main action points in a meeting". |
| 4 | Giving a Presentation | **PRD Core #4** — presentasi dasar terstruktur (BEC B1). |
| 5 | Making & Rejecting Offers | **PRD Core #5** — GSE 43 "make/respond to offers". |
| 6 | Writing a CV/Resume in English | **PRD Core #6** — genre CV (Bhatia move analysis job application letters). |
| 7 | Job Interview — Common Questions | **PRD Core #7** — Q&A kerja standar (BEC B1). |
| 8 | Giving & Receiving Feedback at Work | **PRD Core #10** — GSE 48 "understand main points of feedback". |
| 9 | Leading a Team Meeting (basic) | **PRD Core #11** — memandu meeting sederhana (B1 follow structure). |
| 10 | Writing Meeting Minutes | **PRD Core #12** — genre minutes (factual recording, GSE 50). |
| 11 | Business Phone Calls | **PRD Core #13** — telepon kerja penuh (BEC B1). |
| 12 | Video Call Etiquette | **PRD Core #14** — konvensi rapat daring (B1 functional). |
| 13 | Professional Small Talk | **PRD Core #15** — small talk kerja (GSE 36+ diperdalam). |
| 14 | Handling Complaints from Clients | **PRD Core #16** — GSE 43 "make/respond to a complaint". |
| 15 | Project Updates & Status Reports | **PRD Core #18** — laporan status faktual (BEC B1). |
| 16 | Business Networking | **PRD Core #19** — perkenalan + small talk networking (B1). |
| 17 | Asking for Clarification Professionally | **PRD Core #21** — GSE 35+ klarifikasi register kerja. |
| 18 | Writing a Professional Report (short) | **PRD Core #17** — laporan pendek (CEFR CV Reports B1). |
| 19 | Presenting Data & Statistics (basic) | **PRD Core #20** — deskripsi angka/grafik sederhana (B1). |
| 20 | Job Interview — Behavioral Questions | **PRD Core #8** — cerita pengalaman STAR sederhana (B1 narration). |
| 21 | Negotiating a Salary (basic) | **PRD Core #9** — negosiasi sederhana (B1 functional; versi kompleks → C1). |
| 22 | Out-of-Office & Auto Replies | **B1 baru** — genre email rutin (melengkapi, GSE 42+). |
| 23 | Replying to a Job Posting | **B1 baru** — cover letter dasar (genre, Bhatia). |
| 24 | Booking Business Travel by Email | **B1 baru** — transaksi kerja terstruktur (GSE 43). |
| 25 | Following Up After a Meeting | **B1 baru** — email follow-up (lexical chunk "following up on"). |
| 26 | Explaining a Simple Process at Work | **B1 baru** — penjelasan proses (GSE 48 "follow linear structure"). |
| 27 | Asking for Time Off Professionally | **B1 baru** — request formal (politeness B1). |
| 28 | Giving Simple Instructions to a Team | **B1 baru** — instruksi multi-langkah (GSE 48). |
| 29 | Apologizing for a Mistake at Work | **B1 baru** — apology genre (politeness, face-repair dasar). |
| 30 | A Mixed Professional Review (B1) | Konsolidasi B1 sebelum Placement Test. |

> **Non-overlap & keputusan anchor:** 21 dari 30 topik B1 adalah **PRD lama Core Professional Skills** (dipertahankan apa adanya karena memang didesain B1+; nomor PRD asli dicatat eksplisit). 9 topik sisanya **baru, criterial B1** (email rutin, cover letter dasar, follow-up, request cuti, apology) untuk genap 30. Topik PRD lama yang **versi kompleksnya dipindah ke B2**: Behavioral Questions di-keep B1 versi sederhana, versi mendalam di B2; negosiasi gaji versi kompleks → C1. Detail di §5.5. B1 = level di mana professional English **inti** mulai (selaras BEC Preliminary B1).

### 5.5 LEVEL B2 (Upper-Intermediate) — ANCHOR DARI PRD LAMA (Day 22–30 Advanced) + Core diperdalam

Rationale grup: B2 (≈BEC Vantage) = **argumen meeting kompleks, proposal, negosiasi, performance review, register email vs chat, genre awareness** (GSE 51–66: "recognise tone and intended audience", "identify styles, genres, registers"; BEC B2 "work successfully in international business"). **30 topik PRD lama Day 22–30 "Advanced Professional" didesain B2+** → **anchor B2**, ditambah topik Core PRD yang diperdalam + topik B2 baru.

| Day | Topik | Asal & rationale |
|---|---|---|
| 1 | Delegating Tasks | **PRD Advanced #22** — GSE 51+ instruksi + tone management. |
| 2 | Discussing Deadlines & Priorities | **PRD Advanced #23** — negosiasi prioritas (B2 argument). |
| 3 | Handling Difficult Situations at Work | **PRD Advanced #24** — diplomasi situasi sulit (B2 inference). |
| 4 | Professional Social Media & LinkedIn | **PRD Advanced #25** — register publik-profesional (genre). |
| 5 | Cross-Cultural Communication | **PRD Advanced #26** — sensitivitas budaya (B2 cultural inference). |
| 6 | Giving a Performance Review | **PRD Advanced #27** — feedback terstruktur + register (B2). |
| 7 | Writing a Business Proposal | **PRD Advanced #28** — genre proposal (Bhatia move analysis). |
| 8 | Client Relationship Management | **PRD Advanced #29** — rapport + diplomasi jangka panjang (B2). |
| 9 | Advanced Business Presentations | **PRD Advanced #30** — presentasi argumen kompleks (B2). |
| 10 | Negotiating Terms & Conditions | **PRD Core #9 diperdalam** — negosiasi dengan trade-off (B2). |
| 11 | Presenting Data & Statistics (advanced) | **PRD Core #20 diperdalam** — interpretasi tren + argumen (B2). |
| 12 | Writing a Detailed Report | **PRD Core #17 diperdalam** — laporan analitis (CEFR CV Reports B2). |
| 13 | Behavioral Interview — STAR in Depth | **PRD Core #8 diperdalam** — narasi STAR berlapis (B2). |
| 14 | Leading a Team Meeting (full) | **PRD Core #11 diperdalam** — kelola diskusi + agenda (B2). |
| 15 | Persuading Stakeholders | **B2 baru** — argumen persuasif berbukti (GSE 67 "contrasting arguments"). |
| 16 | Handling Objections in a Meeting | **B2 baru** — merespons keberatan (B2 inference + diplomacy). |
| 17 | Email Register: Formal vs Informal | **B2 baru** — eksplisit genre/register awareness (GSE 67 "identify registers"). |
| 18 | Writing a Formal Complaint Letter | **B2 baru** — genre complaint formal (Bhatia + politeness). |
| 19 | Summarizing a Long Discussion | **B2 baru** — mediasi/merangkum (CEFR CV Mediation B2). |
| 20 | Disagreeing Diplomatically | **B2 baru** — hedging + negative politeness (Brown & Levinson). |
| 21 | Pitching an Idea | **B2 baru** — argumen klaim+bukti ringkas (B2 persuasion). |
| 22 | Managing a Project Update Call | **B2 baru** — laporan + Q&A real-time (B2 interaction). |
| 23 | Writing a Recommendation/Reference | **B2 baru** — genre referensi (register formal). |
| 24 | Networking Follow-Up Strategically | **B2 baru** — rapport-building bertujuan (pragmatik). |
| 25 | Giving Constructive Criticism | **B2 baru** — face-saving feedback (politeness B2). |
| 26 | Explaining Company Policy | **B2 baru** — wacana institusional (register formal). |
| 27 | Responding to a Difficult Client Email | **B2 baru** — de-escalation tertulis (pragmatik diplomatik). |
| 28 | Discussing Budget & Costs | **B2 baru** — argumen kuantitatif + negosiasi (B2). |
| 29 | Conducting a Job Interview (interviewer) | **B2 baru** — sisi pewawancara (perspektif baru, B2). |
| 30 | A Mixed Advanced-Professional Review (B2) | Konsolidasi B2 sebelum Placement Test. |

> **Non-overlap & keputusan anchor:** 9 topik PRD lama "Advanced Professional" (Day 22–30) **dipertahankan apa adanya di B2** (memang dilabeli "B2+" di PRD §4.8 baris bridge). 5 topik PRD Core **diperdalam** dari versi B1-nya (negosiasi, data, report, STAR, lead meeting — diberi label "diperdalam" supaya non-overlap dengan B1 versi sederhana). 16 topik B2 **baru** (persuasi, objection handling, register awareness eksplisit, complaint formal, diplomatic disagreement, dst). **Non-overlap dengan B1 dijaga lewat "diperdalam"**: topik yang muncul di B1 dan B2 punya **tingkat kompleksitas/inference/register berbeda** (B1 = ide pokok + transaksi terstruktur; B2 = argumen + hedging + genre/register kontras). Di-anchor GSE 51–66 + BEC Vantage.

### 5.6 LEVEL C1 (Advanced) — RISET BARU (high-stakes professional) & LEVEL C2 (Mastery) — EKSTRAPOLASI

**C1 (≈BEC Higher)** = **negosiasi kompleks, crisis communication, kritik diplomatik, register eksekutif, wacana profesional spontan** (GSE 67–75+: "infer tone", "recognise contrasting arguments", register-aware discourse; BEC Higher "operate confidently at senior levels"). Topik **BARU sophisticated**, di-anchor BEC Higher C1 + diplomatic indirectness (Brown & Levinson) + genre advanced (Bhatia).

| Day | Topik | Rationale (1 baris) | Day | Topik | Rationale (1 baris) |
|---|---|---|---|---|---|
| 1 | Negotiating a Complex Deal | Trade-off berlapis + BATNA (C1 negotiation). | 16 | Influencing Without Authority | Persuasi tanpa kuasa formal (C1 pragmatik). |
| 2 | Crisis Communication (internal) | Pesan menenangkan saat krisis (C1 register). | 17 | Writing an Executive Summary | Genre ringkas padat untuk eksekutif (Bhatia). |
| 3 | Delivering Bad News Diplomatically | Negative politeness + face-saving (Brown & Levinson). | 18 | Managing a Heated Discussion | Deeskalasi argumen panas (C1 interaction). |
| 4 | Giving Critical Feedback to a Peer | Kritik tajam namun diplomatik (C1 + register). | 19 | Reframing an Objection Strategically | Membingkai ulang keberatan (C1 rhetoric). |
| 5 | Leading a Strategy Meeting | Memandu wacana abstrak/strategis (C1). | 20 | Writing a Persuasive Business Case | Argumen berbukti untuk keputusan (C1). |
| 6 | Presenting to Senior Leadership | Executive register + concision (BEC Higher). | 21 | Handling a Difficult Stakeholder | Diplomasi tekanan tinggi (C1). |
| 7 | Defending a Proposal Under Scrutiny | Argumen di bawah pertanyaan tajam (C1). | 22 | Communicating Organizational Change | Change-management messaging (C1 register). |
| 8 | Mediating a Team Conflict | Mediasi pihak ketiga (CEFR CV Mediation C1). | 23 | Negotiating With a Vendor | Negosiasi komersial detail (C1). |
| 9 | Writing a Diplomatic Refusal | Menolak tanpa merusak relasi (hedging mahir). | 24 | Giving an Impromptu Briefing | Wacana profesional spontan (C1 fluency). |
| 10 | Cross-Cultural Negotiation | Sensitivitas budaya tinggi dalam negosiasi (C1). | 25 | Responding to Criticism Professionally | Menerima kritik dengan tenang (C1 pragmatik). |
| 11 | Managing Up (communicating with bosses) | Register ke atasan + tact (C1). | 26 | Writing a Thought-Leadership Post | Wacana opini profesional publik (C1 genre). |
| 12 | Handling a PR-Sensitive Email | Bahasa hati-hati risiko reputasi (C1 register). | 27 | Negotiating Scope Creep | Menahan ekspansi cakupan diplomatik (C1). |
| 13 | Facilitating a Workshop | Memandu interaksi kompleks (C1 management). | 28 | Coaching a Junior Colleague | Mentoring register suportif (C1). |
| 14 | Persuading a Skeptical Audience | Persuasi ke audiens menolak (C1 rhetoric). | 29 | Communicating a Difficult Decision | Justifikasi keputusan tidak populer (C1). |
| 15 | Discussing Sensitive Performance Issues | HR-sensitive, hedged language (C1 register). | 30 | A Mixed High-Stakes Review (C1) | Konsolidasi C1 sebelum Placement Test. |

**C2 (Mastery) — EKSTRAPOLASI TERJUSTIFIKASI.** Deskriptor (BEC mentok C1, TOEIC mentok C1) menyatakan **C2 bukan jenis tugas kerja fungsional baru** — C2 = **mastery/precision atas tugas tersulit**: leadership rhetoric, executive presence, cross-cultural high-stakes, pragmatic nuance native, register slippage sangat halus. C2 berfokus pada **kualitas & jenis situasi tersulit** atas skill yang sudah dikuasai — bukan 30 jenis tugas baru. Sah dari prinsip "C2 = mastery", konsisten reframe C2 prd_user.md §5.6 & paralel sibling docs §5.6.

| Day | Topik | Rationale (1 baris) | Day | Topik | Rationale (1 baris) |
|---|---|---|---|---|---|
| 1 | Delivering a Keynote With Presence | Executive presence + rhetoric native (C2). | 16 | Negotiating a High-Stakes Merger | Negosiasi paling kompleks (C2 precision). |
| 2 | High-Stakes Crisis Press Statement | Bahasa publik di bawah tekanan ekstrem (C2). | 17 | Diplomatic Damage Control | Memulihkan relasi yang rusak (C2 pragmatik). |
| 3 | Leading Through Major Change | Leadership rhetoric inspiratif (C2). | 18 | Reading the Room & Adjusting Register | Code-switching register real-time (C2). |
| 4 | Persuading a Hostile Boardroom | Persuasi ke audiens bermusuhan (C2 rhetoric). | 19 | Closing a Complex Deal | Penutupan negosiasi multi-pihak (C2). |
| 5 | Cross-Cultural High-Stakes Negotiation | Nuansa budaya + taruhan tinggi (C2). | 20 | Communicating With Total Tact | Tact maksimal di topik paling sensitif (C2). |
| 6 | Handling a Media Interview | Spin, bridging, message control (C2 pragmatik). | 21 | Mentoring a Senior Leader | Coaching peer eksekutif (C2 register). |
| 7 | Defusing an Executive Conflict | Mediasi konflik level senior (C2). | 22 | Writing With Rhetorical Craft | Prosa persuasif tingkat native (C2 craft). |
| 8 | Inspiring a Demotivated Team | Motivational rhetoric autentik (C2). | 23 | Subtle Influence in Negotiation | Pengaruh halus tak kentara (C2 subtext). |
| 9 | Navigating Office Politics Verbally | Membaca subtext & aliansi (C2 implicature). | 24 | Handling Ambiguous Stakeholder Signals | Menafsir sinyal ganda (C2 inference). |
| 10 | Delivering a Vision Statement | Artikulasi visi memikat (C2 rhetoric). | 25 | Executive Apology Done Right | Permintaan maaf high-stakes (C2 face-work). |
| 11 | High-Pressure Q&A Handling | Jawab spontan di bawah serangan (C2). | 26 | Persuasion via Storytelling | Persuasi naratif eksekutif (C2 craft). |
| 12 | Communicating Layoffs Humanely | Pesan paling sensitif HR (C2 register mastery). | 27 | Reframing a Failure as Learning | Spin konstruktif autentik (C2). |
| 13 | Diplomatic Disagreement at the Top | Menentang eksekutif dengan tact (C2). | 28 | Closing Remarks That Land | Penutup berkesan native timing (C2 delivery). |
| 14 | Managing a Cross-Functional Standoff | Menyatukan pihak buntu (C2 mediation). | 29 | Reading & Responding to Subtext | Menangkap maksud tersirat & merespons (C2). |
| 15 | Executive Storytelling for Buy-In | Narasi strategis untuk dukungan (C2). | 30 | A Mixed Mastery-Professional Review (C2) | Konsolidasi C2 sebelum Placement Test. |

> **Non-overlap check C1/C2:** B2 = argumen/proposal/negosiasi *standar bisnis*; **C1 = high-stakes diplomatik** (crisis comms, kritik diplomatik, mediasi, managing up, register eksekutif) di luar zona nyaman; **C2 = mastery rhetoris & pragmatik native** (leadership rhetoric, executive presence, cross-cultural high-stakes, subtext, register slippage halus). Topik yang tampak berulang (negosiasi muncul B2/C1/C2) dibingkai **beda tingkat**: B2 "negotiating terms with trade-off", C1 "negotiating a complex deal/cross-cultural", C2 "high-stakes merger / subtle influence". **Catatan kejujuran:** C2 adalah lapisan paling ber-ekstrapolasi (§5.7) — BEC Higher mentok C1, jadi C2 profesional **tidak punya assessment anchor langsung**; dibingkai jujur sebagai mastery/precision atas tugas tersulit, bukan jenis tugas kerja diskret baru.

### 5.7 Ringkasan Kuantitatif: Riset vs Ekstrapolasi (180 topik)

Metode jujur sama dengan sibling docs §5.7: topik dihitung "dari sumber langsung" jika jenis tugas kerja & level-nya muncul eksplisit sebagai deskriptor di **GSE for Professionals**, **Cambridge BEC**, **CEFR CV** (Correspondence/Reports/Production/Mediation), atau preseden coursebook (Market Leader/Business Result) untuk level itu; "ekstrapolasi terjustifikasi" jika topik adalah penyusunan ulang, atau item *kualitas/mastery* (high-stakes/native pragmatik) yang sumbernya deskripsikan sebagai mutu bukan tugas diskret.

| Level | Topik | Mayoritas dari sumber langsung (GSE Prof / BEC / CEFR CV / coursebook) | Ekstrapolasi terjustifikasi |
|---|---|---|---|
| A1 | 30 | ~24 (GSE Professional band 12–35: introduce self at work, greetings, phone numbers, polite requests, fixed expressions — eksplisit) | ~6 (survival-workplace framing; A1 occupational tipis di luar GSE) |
| A2 | 30 | ~26 (GSE band 36–42: phone messages, scheduling, offers, refusals, clarification, short emails — sangat konvergen) | ~4 (konsolidasi/penyusunan ulang) |
| B1 | 30 | ~28 (21 PRD Core di-anchor B1+ + GSE 43–50 + BEC Preliminary; konvergen kuat) | ~2 (9 topik B1 baru, mostly anchored) |
| B2 | 30 | ~26 (9 PRD Advanced "B2+" + GSE 51–66 genre/register + BEC Vantage; kuat) | ~4 (item persuasi/diplomatik di-split B2/C1) |
| C1 | 30 | ~22 (BEC Higher "senior level" + GSE 67–75 + Mediation C1 + politeness/genre advanced) | ~8 (item diplomatik/register di batas C1/C2) |
| C2 | 30 | ~6 (sumber: "C2 = mastery/precision atas tugas tersulit — bukan jenis tugas baru"; BEC mentok C1) | ~24 (leadership rhetoric/executive presence/high-stakes/native pragmatik) |
| **Total** | **180** | **~132 (≈73%)** | **~48 (≈27%)** |

**Ringkasan:** ~73% (≈132/180) topik ber-anchor langsung ke GSE for Professionals / BEC / CEFR CV / coursebook; ~27% (≈48/180) ekstrapolasi terjustifikasi — **terkonsentrasi di C2** (24 dari 48), dengan sebagian di C1 (~8, item diplomatik di batas C1/C2) dan A1 (~6, survival-workplace yang tipis anchor-nya karena A1 occupational jarang di-assess). Ekstrapolasi C2 **defensibel** karena semua assessment Business English (BEC Higher, TOEIC) berhenti di C1 — memaksakan "30 tugas kerja eksklusif C2" justru **mengarang**; lebih jujur melabeli C2 sebagai mastery rhetoris/pragmatik native atas tugas tersulit. Ekstrapolasi A1 juga ditandai jujur: A1 profesional adalah **survival workplace English** (di-anchor GSE band rendah, bukan kompleksitas bisnis yang tidak realistis di A1 — kita sengaja TIDAK mengarang "negosiasi A1"). Ini **judgment call yang perlu dikonfirmasi product owner** (§8). Angka ~73/27% sengaja sebanding dengan sibling docs (~76/24%) karena prinsip C2-mastery-nya sama; sedikit lebih tinggi di sisi ekstrapolasi karena **A1/A2 occupational + C2** sama-sama lemah anchor-nya di niche ini. Estimasi acuan, bukan hitungan presisi per-item.

### 5.8 Day 31 — Placement Test (Professional) per level

**Modul ini SEKARANG punya Day 31** (konsekuensi keputusan level-based — dulu PRD §4.8 eksplisit tidak punya). Format baku (pola §5.8 sibling + prd_user.md §4.2/§4.3): AI sajikan **task kerja BARU** (belum pernah muncul di Day 1–30 level itu — mis. "tulis email menolak permintaan klien" untuk B1) → user kerjakan → AI nilai dengan **5–6 kriteria** (akurasi, naturalness, **formality/register** — fokus PRD, kelengkapan tugas, frasa kunci dipakai) → output **Score** (mis. "82/100 — Well done!") + **penilaian register/naturalness** + **rekomendasi naik level / latihan ulang**. Bisa diulang kapan saja. Skor & rekomendasi **wajib** ditulis ke `module_test_results` (CLAUDE.md §4), bukan state client. Trigger sesi lisan tetap **"Let's start speaking!"**; bagian writing langsung. Kompleksitas task mengikuti level (§3.3).

> **Catatan checkpoint (checkpoint_result_analysis.md §8.2):** dokumen checkpoint sebelumnya merekomendasikan **checkpoint cumulative Day 30** sebagai pengganti Day 31 *karena saat itu modul ini tidak punya Day 31*. Dengan keputusan level-based baru, **Day 31 sekarang ADA** → rekomendasi "Day 30 pengganti Day 31" jadi **usang**; Day 30 cukup jadi review konsolidasi biasa (seperti sibling docs), Day 31 jadi placement test sungguhan. Checkpoint Day 5/10/15/20 tetap berlaku (word-bank fill-blank dari Frasa Kunci Profesional — itulah kenapa Frasa Kunci harus terstruktur, §2.1 & §6.2). Ini **temuan yang perlu diteruskan** ke pemilik checkpoint_result_analysis.md (§8).

---

## 🛠️ 6. TEMPLATE MASTER PROMPT — PROFESSIONAL (SEMUA LEVEL)

Satu template untuk semua day, semua level. Variabel diisi per-day. **⚠️ URL WAJIB DIHITUNG ULANG** setelah penambahan Langkah 7 (Transfer Challenge) — angka §6.3 di bawah berdasarkan template lama 6 langkah dan sudah tidak valid; lihat catatan §6.3. Mekanisme = prd_user.md §4.8 (Frasa Kunci + Frasa Siap Pakai + Challenge situasi kerja + trigger "Let's start speaking!" + Feedback 7 Langkah fokus naturalness/formality/register + Transfer Challenge). **TIDAK** mengandung 5W+1H/Paragraf Diperkaya (Vocab), Repeat After Me blocking (Grammar), comprehension question (Listening), atau Catatan Pelafalan phonetic-heavy (Speaking). **Frasa Kunci embedded** di prompt (beda dari monolog Listening runtime) — perlu disiplin RULE 4 (§6.3).

### 6.1 Template (raw — siap di-encode)

```
Topik: {TOPIC_NAME}
Panggil aku {SAPAAN} {PANGGILAN}.
Level: {LEVEL} ({LEVEL_NAME}).
Kamu Kak Ara, AI Coach dari Inggrisin Yuk. Latih Professional English-ku di topik {TOPIC_NAME}, konteks kerja nyata, Level {LEVEL}. Fokus feedback: naturalness, formality, register.
Gaya: sopan, ramah, humble - lewat ngobrol, jangan sebut diri seru/asyik. {LANG_RULE} Emoji secukupnya.
LANGKAH 1 - FRASA KUNCI + FRASA SIAP PAKAI + CHALLENGE (1 response, jangan tanya "siap?"):
Sapa singkat "Halo! Aku Kak Ara". {LEVEL_HINT}
Tabel Frasa Kunci Profesional - PERSIS frasa ini (jangan ganti), format: Frasa + phonetic UK / / | Arti + kapan dipakai:
{KEY_PHRASES}
Frasa Siap Pakai: 2-3 lexical chunks native untuk {TOPIC_NAME}, format frasa -> "contoh." (arti).
Challenge situasi kerja nyata: {CHALLENGE_DESC} Min 4 Frasa Kunci dipakai. Beri 1 contoh + template kosong. Jangan bocorkan koreksi - tunggu jawabanku.
LANGKAH 2 - FEEDBACK 7 LANGKAH (otomatis tiap aku kirim jawaban):
1. Koreksi - tabel: Punyaku | Versi Profesional | Kenapa (max 2 pola). >=95% benar: OK.
2. Naturalness - natural/native atau kaku-terjemahan? + versi lebih luwes.
3. Formality & Register - cocok konteks {TOPIC_NAME}? tag [kasual]/[kaku]/[pas] + frasa pas register + alasan.
4. Frasa Kunci Check - tiap frasa kunci yang kupakai: tepat/belum + benarnya. Day 2+: Refresh 1 frasa sesi lalu.
5. Analisa Level - performa profesionalku + 1 tips ke {NEXT_LEVEL}.
6. Frasa Siap Pakai Check - sudah pakai chunk native? kalau belum sarankan 1. + Speaking Challenge 3 pertanyaan topik {TOPIC_NAME}:
{SPEAKING_Q1_EN}
{SPEAKING_Q1_ID}
{SPEAKING_Q2_EN}
{SPEAKING_Q2_ID}
{SPEAKING_Q3_EN}
{SPEAKING_Q3_ID}
Jawaban kosong/di luar topik/Indonesia semua: jangan koreksi, minta tulis Inggris dulu dengan ramah.
7. Transfer Challenge - tulis email/pesan baru (2-3 kal.) di situasi kerja LAIN dari tadi, pakai min 2 Frasa Kunci -> koreksi register & naturalness.
LANGKAH 3 - MODE SPEAKING (trigger: Let's start speaking!):
Ajukan Speaking Challenge satu per satu, langsung ke pertanyaan. Transkrip jawabanku ke Inggris. Tiap jawaban -> FEEDBACK 7 LANGKAH ringkas (fokus naturalness, formality, register). Lancar -> 1 follow-up lebih menantang. Macet -> contoh + pattern drill lalu ulangi. Pujian singkat hanya di akhir, tulus, tidak berlebihan.
```

> **Catatan disengaja:** trigger = **"Let's start speaking!"** persis (konsisten lintas modul), persona = **Kak Ara**, tanpa klaim hak cipta. Wording original. Feedback **7 langkah** (6 + Transfer Challenge, dikonfirmasi product owner 2026-06-28). Tidak ada Repeat After Me blocking. **Frasa Kunci 8–12 frasa embedded** (`{KEY_PHRASES}`) — wajib juga disimpan sebagai array terstruktur di kode (§6.2). Untuk **B2+**, blok Speaking Challenge **English-only** (hilangkan baris `{SPEAKING_Qn_ID}`) — jangan biarkan baris ID kosong (memicu blank line, RULE 2). **⚠️ URL harus dihitung ulang** setelah Langkah 7 ditambahkan — angka lama (§6.3) berdasarkan template 6 langkah.

### 6.2 Variable Fields

| Field | Isi | Contoh (B1 Day 1) |
|---|---|---|
| `{TOPIC_NAME}` | Nama topik kerja hari itu | `Introducing Yourself Professionally` |
| `{SAPAAN}` / `{PANGGILAN}` | Dari profil user (auto-fill) | `Kak` / `Arif` |
| `{LEVEL}` / `{LEVEL_NAME}` / `{NEXT_LEVEL}` | Kode + nama CEFR | `B1` / `Intermediate` / `B2` |
| `{LANG_RULE}` | Instruksi bahasa per level (§3.1) | B1: `Penjelasan & feedback dalam Bahasa Indonesia, istilah profesional pakai English. Terjemahan hanya untuk Speaking Challenge & contoh.` |
| `{LEVEL_HINT}` | Hint kompleksitas situasi kerja per level (§3.3) | B1: `Email/paragraf terstruktur, register clear standard, pembuka-isi-penutup.` |
| `{KEY_PHRASES}` | **8–12 Frasa Kunci Profesional terkurasi** (format: frasa1, frasa2, ...) **— WAJIB juga disimpan sebagai array `keyPhrases: string[]` di kode** (untuk checkpoint, §2.1) | `Nice to meet you, I'm in charge of, My role involves, ...` |
| `{CHALLENGE_DESC}` | 1 kalimat instruksi Writing/Speaking Challenge situasi kerja | `perkenalkan dirimu ke rekan kerja baru dalam 3-4 kalimat.` |
| `{SPEAKING_Q1/2/3_EN}` | Pertanyaan Inggris dalam `**...**` | `**What is your role at your company?**` |
| `{SPEAKING_Q1/2/3_ID}` | Terjemahan Indonesia dalam `*...*` (A1–B1 saja; **hapus baris ini di B2+**) | `*Apa peranmu di perusahaanmu?*` |

**Variasi `{LANG_RULE}` per level (ringkas, hemat karakter — selaras §3.1):**
- **A1/A2:** `Koreksi dan penjelasan dalam Bahasa Indonesia, tiap kalimat Inggris diberi terjemahan.`
- **B1:** `Penjelasan & feedback dalam Bahasa Indonesia, istilah profesional pakai English (register, follow up, formal/informal). Terjemahan hanya untuk Speaking Challenge & contoh.`
- **B2:** `Use English as the main language. Bahasa Indonesia hanya untuk catatan singkat di poin register/idiom bisnis yang berisiko salah paham.`
- **C1/C2:** `All explanations, corrections, and feedback in English only. No Indonesian translation.`

**Variasi `{LEVEL_HINT}` per level (dari §3.3, panduan situasi kerja — TIDAK ditampilkan ke user):**
- **A1:** `Frasa kerja fixed fungsi tunggal, formal dasar (Dear/Hi), 3-4 kalimat.`
- **A2:** `Transaksi kerja sederhana, email pendek, salam/penutup standar, sopan fixed-expression.`
- **B1:** `Email/paragraf terstruktur, register clear standard, pembuka-isi-penutup.`
- **B2:** `Argumen terstruktur, hedging dasar, register kontras antar genre, multi-paragraf.`
- **C1:** `Diplomatic indirectness, executive register, hedging mahir, wacana profesional panjang.`
- **C2:** `Native rhetoris, register slippage halus dihindari, irony/subtext terkendali, executive presence.`

**Contoh `{KEY_PHRASES}` + `{CHALLENGE_DESC}` (panduan per level):**
- **A1 Day 1 (Saying Your Name & Job Title):** key phrases `My name is, I work as a, I work at, I'm from, Nice to meet you, This is my colleague, I'm in the ... team, Please call me` (8 frasa); challenge: `kenalkan dirimu (nama, jabatan, perusahaan) dalam 3 kalimat.`
- **C1 Day 1 (Negotiating a Complex Deal):** key phrases `with all due respect, I'd be inclined to, that said, we may need to revisit, on balance, I take your point but, where I'd differ is, let's circle back to, that's a fair concern, to play devil's advocate, in the interest of, I'm not entirely convinced that` (12 frasa); challenge: `reply to a counter-offer while protecting your margin, in a written message.`

> **Self-Check Pertama C1/C2 ✅ DIKONFIRMASI (2026-06-28):** saat encode prompt C1/C2, tambahkan sebelum Langkah 1: "Baca ulang jawabanmu — bagian mana yang menurutmu belum natural atau register-nya belum tepat?" Ini pre-step, bukan langkah bernomor baru (hitungan tetap 7 langkah). Lihat §3.2 catatan.

### 6.3 Estimasi Ukuran & Audit RULE 1–6

Dua skenario dihitung dengan Python (`len()` raw + `urllib.parse.quote()` URL), metode sama sibling docs §6.3. **Worst-case A1 Day 2** = `{LANG_RULE}` Indonesia (terpanjang) + 12 Frasa Kunci embedded + Frasa Kunci Refresh aktif + 3 Speaking Q dengan terjemahan ID. **C1** = `{LANG_RULE}` English ringkas + 13 frasa + Speaking Q English-only. Kedua angka **sudah diverifikasi ulang dengan Python** sebelum dimasukkan.

| Metrik | Worst-case (A1 Day 2, 12 frasa + ID terjemahan) | C1 (English rule, 13 frasa, EN-only) | Batas | Status |
|---|---|---|---|---|
| Raw chars (terisi) | **2.770** | **2.822** | < 3.200 | ✅ AMAN |
| URL chars (aktual `urllib.parse.quote`) | **3.916** | **3.956** | < 4.500 | ✅ AMAN (<4.000 = "sangat aman") |
| Estimasi formula `30 + raw×1.42` | ~3.963 | ~4.037 | < 4.500 | ✅ konsisten (formula sedikit di atas/sekitar aktual) |
| Blank lines internal | 0 | 0 (Speaking Q English-only, **tanpa baris ID kosong**) | 0 | ✅ RULE 2 |
| Separator `---` | 0 | 0 | 0 | ✅ RULE 2 |
| Header behavior | 2 baris ringkas | 2 baris | 2 baris | ✅ RULE 3 |
| Instruksi per-langkah | Keyword/format singkat | keyword | keyword | ✅ RULE 4 |
| Emoji di teks prompt | 0 | 0 | 0 | ✅ RULE 5 |
| Differentiator dipertahankan | Persona Kak Ara, Frasa Kunci 8–12 + Frasa Siap Pakai, Challenge situasi kerja, Feedback 7 Langkah (Koreksi, Naturalness, Formality&Register, Frasa Kunci Check+Refresh, Analisa Level, Frasa Siap Pakai+Speaking, **Transfer Challenge**), trigger "Let's start speaking!" | sama | — | ✅ RULE 6 |

> **⚠️ ANGKA URL DI TABEL INI SUDAH TIDAK VALID** — dihitung berdasarkan template 6 langkah (sebelum Transfer Challenge ditambahkan, 2026-06-28). Langkah 7 menambah ~70–90 raw chars → ~100–130 URL chars estimasi → worst-case A1 baru ~4.020–4.050 URL, C1 ~4.060–4.090 (masih di bawah hard limit 4.500, tapi sedikit di atas target 4.000). **Wajib hitung ulang dengan Python saat menulis prompt pertama** (B1 Day 1) dan kompres jika perlu: (a) Langkah 7 sudah ditulis keyword-only (RULE 4); (b) mitigasi lain sama seperti sebelumnya: 8–10 frasa di A1/A2 (bukan 12), `{CHALLENGE_DESC}` ringkas 1 kalimat, B2+ English-only. Prinsip RULE 4 tetap: **jangan menulis instruksi bertele-tele — Langkah 7 harus tetap 1 baris keyword singkat.**

---

## ✅ 7. ATURAN BAKU IMPLEMENTASI — WAJIB SEBELUM MENULIS DAY PROFESSIONAL BARU

Checklist tunggal (*single source of truth*) supaya tiap Day Professional (semua level) konsisten. **Baca ini sebelum menulis materi Day baru** — jangan menebak.

### 7.1 Persona & Bahasa (tidak berubah antar Day)
- [ ] Nama AI = **Kak Ara**, AI Coach dari Inggrisin Yuk. Personality lewat gaya, jangan sebut diri "seru"/"asyik". Humble.
- [ ] Sapaan = `{SAPAAN} {PANGGILAN}` auto-fill dari profil, jangan diketik manual.
- [ ] `{LANG_RULE}` sesuai level (§3.1 / §6.2) — A1/A2 Indonesia, B1 hybrid, B2 English-dominant, C1/C2 full English.
- [ ] `{LEVEL_HINT}` sesuai level (§3.3 / §6.2) — kompleksitas situasi kerja.
- [ ] **Self-Check Pertama di C1/C2:** tambahkan pre-step sebelum Langkah 1 — "Baca ulang jawabanmu — bagian mana yang menurutmu belum natural atau register-nya belum tepat?" (dikonfirmasi product owner 2026-06-28, §8 item 4). **Tidak berlaku untuk A1–B2.**

### 7.2 Mekanisme (sesuai prd_user.md §4.8 — JANGAN ubah inti)
- [ ] LANGKAH 1 = **Tabel Frasa Kunci Profesional (8–12 frasa, phonetic UK `/ /` | arti + kapan dipakai)** + **Frasa Siap Pakai (2–3 lexical chunks native)** + **Writing/Speaking Challenge situasi kerja nyata** (min 4 Frasa Kunci) + contoh + template kosong.
- [ ] Trigger = **"Let's start speaking!"**.
- [ ] Feedback = **7 langkah** (§2.3): Koreksi → Naturalness Check → **Formality & Register Check (tag [kasual]/[kaku]/[pas])** → Frasa Kunci Check → Analisa Level → Frasa Siap Pakai Check + Speaking Challenge → **Transfer Challenge**. **Bukan 5 (Listening), bukan 6 (versi lama), bukan 8 (Vocab/Speaking).**
- [ ] Langkah 3 = **fokus eksplisit naturalness + formality + register** (differentiator PRD §4.8) — jangan dihilangkan saat memadatkan (RULE 6).
- [ ] Langkah 4 Day 2+: jalankan **Frasa Kunci Refresh** (1 frasa relevan sesi sebelumnya). Frekuensi: Day 2+ (B2–C2), Day 3+ (B1), Day 6+ (A1–A2) — §3.2.
- [ ] Langkah 7 = **Transfer Challenge** — situasi kerja BERBEDA, min 2 Frasa Kunci → koreksi register & naturalness. Ditulis 1 baris keyword singkat di prompt (RULE 4 — jangan bertele-tele, margin URL tipis).
- [ ] **TIDAK ADA Repeat After Me wajib-blocking** — macet → pattern drill lalu ulangi (tidak memblokir).
- [ ] **JANGAN** impor 5W+1H/Paragraf Diperkaya (Vocab), comprehension question (Listening), Catatan Pelafalan phonetic-heavy (Speaking).

### 7.3 Konten Topik & Frasa Kunci
- [ ] Topik dari kurikulum §5 untuk level itu — A1/A2 §5.1–5.2, B1 anchor PRD §5.4, B2 anchor PRD §5.5, C1/C2 §5.6.
- [ ] **Frasa Kunci 8–12 frasa terkurasi** yang **benar-benar relevan & dipakai** di topik (bukan generik), dengan phonetic UK + kolom "kapan dipakai" (register).
- [ ] **WAJIB simpan Frasa Kunci sebagai array `keyPhrases: string[]` terstruktur** di `lib/materi/professional-<level>.ts` — JANGAN cuma di string `urlTemplate` ter-encode (gap teknis Vocabulary BOW yang harus dihindari, checkpoint_result_analysis.md §4.3). Ini prasyarat checkpoint Day 5/10/15/20.
- [ ] Fokus register sesuai level (§3.2): formal-vs-kasar dasar A1–A2 → register genre B1 → hedging/genre kontras B2 → diplomatic indirectness C1 → pragmatic mastery C2.
- [ ] Non-overlap: cek topik menaikkan kompleksitas/register, bukan mengulang level bawah (catatan §5.1–5.6; topik yang muncul lintas level harus berbeda tingkat, mis. "negosiasi" B2 vs C1 vs C2).

### 7.4 URL-Safety (RULE 1–6)
- [ ] Tidak ada blank lines internal (B2+: **hapus baris `{SPEAKING_Qn_ID}`**, jangan biarkan kosong).
- [ ] Tidak ada emoji di teks prompt.
- [ ] Tidak ada separator `---` di dalam prompt.
- [ ] Hitung `url = 30 + raw × 1.42` → < 4.500 (idealnya < 4.000); **verifikasi aktual dengan `urllib.parse.quote`** — margin modul ini **lebih tipis** dari Listening (Frasa Kunci embedded), jangan skip verifikasi. Mitigasi §6.3 jika mepet.
- [ ] Test klik link di browser sebelum deploy.

### 7.5 Tempat Plug-in di Codebase (mengikuti pola Vocab/Listening yang sudah ada)
- Source per level: `materi/<level>/professional.md` (dokumentasi day-by-day, skeleton 7 sub-bagian seperti §2.1) → lalu `materi/<level>/professional_prompt.md` (versi tuned/padat siap encode). **Pola sama dengan `materi/<level>/listening.md` → `listening_prompt.md`.**
- **TEMUAN — folder lama harus dimigrasi (JANGAN dieksekusi sekarang, cuma catatan):** `materi/profesional_english/level_a1.md` ... `level_c2.md` (**6 file, semua diverifikasi 0 baris/kosong** via `wc -l`) adalah sisa scaffolding lama. **Rekomendasi:** hapus/ganti dengan pola `materi/<level>/professional.md` konsisten modul lain saat materi ditulis. Folder `materi/profesional_english/` (note: ejaan "profesional" 1 huruf 's') sebaiknya ditinggalkan — pakai `materi/<level>/professional.md`. **Ini hanya dokumentasi temuan — jangan hapus file via tool sekarang.**
- Encode sekali → `inggrisinyuk-app/lib/materi/professional-<level>.ts` (array `PROFESSIONAL_A1_DAYS` dst + `professional-shared.ts`), **pola file & helper sama dengan** `lib/materi/listening-<level>.ts` & `vocabulary-a1.ts` — jangan buat pola baru per modul (CLAUDE.md §5). **Sertakan field `keyPhrases: string[]`** di tiap objek Day (§7.3).
- Render-time: helper `buildProfessionalUrl()` / `buildProfessionalPrompt()` setara `buildVocabUrl()`/`buildListeningUrl()` (precompute, 2× `.replace()`, tanpa `encodeURIComponent()` saat klik — architecture.md §6.3).
- **TEMUAN — `app/dashboard/[module]/page.tsx`:** `MODULE_DATA.professional` (sekitar baris 204–229) saat ini masih **flat 30 topik** (`topics: [...]`, `bridgeFromDay: 22`, `bridgeLabel: "Advanced Professional"`) — sama seperti PRD lama. Dengan keputusan level-based, ini **perlu di-rewrite jadi per-level array** seperti modul lain (Listening sudah pola per-level). **Catat sebagai temuan — jangan ubah kode sekarang** (di luar scope dokumen acuan ini). Identitas visual (emoji 💼, accentColor `#0891b2` cyan, badge PRO) **dipertahankan**.
- Progress: saat user klik link ChatGPT, tulis ke `topic_progress` (CLAUDE.md §4 — jangan andalkan `useState`). Skor Day 31 → `module_test_results` (§5.8).

---

## 🚀 8. NEXT STEPS

Dokumen ini (acuan) membuka pekerjaan lanjutan, dikerjakan **per level** (jangan sekaligus 6 level):

1. **[✅ DIKONFIRMASI] Validasi 3 asumsi desain besar** — product owner konfirmasi OK (2026-06-28):
   - **(a) Anchor B1/B2 ke 30 topik PRD lama** (§5.4–5.5): 21 Core → B1, 9 Advanced + Core-diperdalam → B2. ✅
   - **(b) Plausibilitas A1/A2 = survival workplace English** (§5.1–5.2, §5.7): A1/A2 sengaja survival (perkenalan, telepon, jadwal, offer, klarifikasi), di-anchor GSE for Professionals band rendah. ✅
   - **(c) Ekstrapolasi C1/C2** (§5.6–5.7): C1 high-stakes diplomatik, C2 leadership rhetoric/executive presence/native pragmatik. ✅
2. **[✅ DIKONFIRMASI] Jumlah Feedback = 7 langkah** (§2.3) — product owner memilih Transfer Challenge sebagai Langkah 7 (2026-06-28). Dasar: Transfer-Appropriate Processing (Lightbown 2008), konsisten Grammar Langkah 7️⃣. **URL wajib dihitung ulang** saat menulis prompt B1 Day 1 — angka lama §6.3 (3.916/3.956) belum memperhitungkan Langkah 7; estimasi baru ~4.020–4.090 (masih di bawah hard limit 4.500, RULE 4 wajib ketat).
3. **[✅ SELESAI] Day 31 sekarang ADA** — prd_user.md §4.8 sudah diupdate (Day 31 format table ditambahkan, 2026-06-28). checkpoint_result_analysis.md §8.2 juga sudah diupdate (rekomendasi "Day 30 pengganti Day 31" ditandai OBSOLETE, 2026-06-28).
4. **[✅ DIKONFIRMASI] Self-Check Pertama di C1/C2** — product owner konfirmasi "bisa ditambahkan" (2026-06-28). Implementasi: saat menulis prompt C1/C2, tambahkan langkah awal "Self-Check dulu: tandai bagian mana yang kamu rasa belum natural atau register-nya belum tepat" sebelum Langkah 1 Koreksi — konsisten dengan Grammar C1 (`materi/c1/grammar.md`) dan Ellis (2009) metalinguistic feedback (§4). Ini berlaku untuk **C1 dan C2 saja** (A1–B2 tidak punya Self-Check).
5. **[✅ DIKONFIRMASI — migrasi folder]** `materi/profesional_english/level_*.md` (6 file kosong) → dihapus (2026-06-28, user setuju). Konten baru ditulis langsung ke `materi/<level>/professional.md` (pola terpusat per level). `MODULE_DATA.professional` di `[module]/page.tsx` perlu rewrite flat→per-level saat implementasi (§7.5).
6. **Tulis `materi/b1/professional.md` dulu** (level paling siap — anchor PRD Core sudah ada) mengikuti skeleton 7 sub-bagian (§2.1) & ATURAN BAKU (§7). Pakai Template Master §6. **Sertakan `keyPhrases` terstruktur** sejak awal (§7.3) — jangan ulangi gap BOW Vocabulary.
7. **Tuning → `materi/b1/professional_prompt.md`** (versi padat), encode ke `lib/materi/professional-b1.ts` + helper `buildProfessionalUrl()`. **Verifikasi URL aktual per day** (margin tipis, §6.3).
8. **Ulangi A1 → A2 → B2 → C1 → C2** dengan pola sama, naikkan `{LANG_RULE}`, `{LEVEL_HINT}`, & fokus register (formal-dasar → genre → hedging → diplomatik → pragmatic mastery, §3.2) per level.
9. **Day 31 Placement Test Professional** per level (§5.8) — task kerja baru + nilai 5–6 kriteria (akurasi/naturalness/**register**/kelengkapan/frasa kunci), telusur-balik untuk rekomendasi spesifik; skor → `module_test_results`.

---

*Dokumen ACUAN — English For Professionals Analysis. Disusun 2026-06-28. Mekanisme mengikuti prd_user.md §4.8 (vocabulary+frasa siap pakai → Challenge situasi kerja → feedback naturalness/formality/register), dioperasionalkan jadi Feedback 7 Langkah (+ Transfer Challenge Langkah 7, dikonfirmasi product owner 2026-06-28) + Frasa Kunci Profesional 8–12 frasa terstruktur (untuk checkpoint, checkpoint_result_analysis.md §4.3). Modul DIUBAH dari flat-30-topik menjadi level-based A1–C2 (180 topik + Day 31) atas keputusan final product owner Juni 2026; 30 topik PRD lama dipertahankan sebagai anchor B1 (Core) & B2 (Advanced). Constraint URL mengikuti prompt_recommendation.md RULE 1–6 (worst-case A1 ~3.916 URL chars setelah kompresi RULE 4). Kurikulum ter-riset GSE for Professionals (verified, ekstrak teks PDF 64 hal.) / Cambridge BEC (B1–C1, verified) / CEFR Companion Volume / coursebook Market Leader & Business Result + ESP (Hutchinson & Waters, Dudley-Evans & St John) / genre analysis (Bhatia, Swales) / pragmatics (Brown & Levinson, Bardovi-Harlig) — semua diverifikasi web research (§4). TIDAK ada sampel prompt kompetitor verbatim untuk niche ini (§1) — riset di-pivot ke framework akademik (lebih berat di §4).*
