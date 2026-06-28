# ANALISIS & ROADMAP MATERI GRAMMAR — SEMUA LEVEL (A1–C2)
**Aplikasi:** Inggrisin Yuk | **AI Tutor:** Kak Ara | **Modul:** Grammar (Modul 2)
**Cakupan:** Analisis kompetitor + riset kurikulum CEFR + template master untuk 6 level (A1, A2, B1, B2, C1, C2)
**Status dokumen:** ACUAN (reference) — bukan materi day-by-day final. Dokumen ini dipakai sebagai dasar saat menulis `materi/<level>/grammar.md` dan `materi/<level>/grammar_prompt.md` nanti.

> **Catatan penting sebelum baca:** Dokumen ini **tidak** menulis 180 prompt day-by-day. Yang ada di sini: analisis prompt kompetitor, struktur materi per sesi, evolusi bahasa per level, metodologi riset CEFR, daftar **nama topik** 30 hari × 6 level (+ rationale 1 baris per grup), dan **satu** Template Master Grammar yang sudah lolos RULE 1–6 di [prompt_recommendation.md](../prompt_recommendation.md). Mekanisme Grammar mengikuti **prd_user.md §4.3** (sudah diputuskan) — bukan mekanisme Vocab (BOW/Writing Challenge/Mode Cerita milik modul lain, **jangan** diimpor ke sini).

---

## 🔍 1. ANALISIS PROMPT KOMPETITOR (Bro Arule — Kampung Inggris)

### 1.1 Mekanisme Prompt Kompetitor (walkthrough)

Kompetitor ("Bro Arule") punya produk prompt-delivery Grammar yang strukturnya mirip dengan modul Vocab kompetitor: satu URL ChatGPT per topik, persona tutor, dan alur 2 langkah. Berdasarkan 6 prompt verbatim yang diberikan (A1–C2), mekanismenya:

- **Persona & header behavior** — Nama tutor "Bro Arule dari Kampung Inggris". Sapaan gender-binary ("Bro arif"). Klaim hak cipta ("Struktur ini orisinal oleh Bro Arule, dilindungi hak cipta"). Gaya "tutor santai dan seru", koreksi Bahasa Indonesia, pakai emoji.
- **LANGKAH 1 — Penjelasan Grammar** (trigger: user tanya grammar / "How to say + kata Indonesia"): penjelasan gaya Gen Z/millennial → istilah dikasih arti dalam kurung italic → Verb 2/3 ditulis Verb 1-nya dalam kurung → **5 contoh kalimat natural + terjemahan** → **3 pertanyaan speaking** yang memaksa pakai grammar target → tutup dengan suruh aktifkan mode suara lalu bilang "I'm ready to practice".
- **LANGKAH 2 — Mode Speaking** (trigger: "I'm ready to practice"): ulangi pertanyaan satu per satu → **drill pengucapan wajib** (user harus ucapkan ulang kalimat koreksi sebelum lanjut — ini "Repeat After Me" versi mereka) → pujian di akhir saja.
- **Penutup** — Baris "Sistem ini berdasarkan modul adaptif chatgpt-ar1209beta-eb..." (klaim adaptivitas) lalu `TODAY'S TOPIC: Day N — [topik]`.

### 1.2 Temuan Kritis: Satu Pool Topik Beginner Dipakai untuk SEMUA 6 Level

Setelah membandingkan struktur 6 prompt verbatim: **paragraf persona, aturan, LANGKAH 1, dan LANGKAH 2 identik kata-per-kata di keenam prompt.** Yang berubah **hanya 2 hal**: baris `Level bahasa Inggrisku: [X]` dan baris `TODAY'S TOPIC: Day N — [topik]`.

Lebih parah lagi — `TODAY'S TOPIC` di tiap "level" ternyata mengambil topik dari **pool beginner yang sama**:

| "Level" kompetitor | TODAY'S TOPIC kompetitor | Setara di kurikulum kita | Level CEFR riil topik itu |
|---|---|---|---|
| A1 (Beginner) | Day 12 — Verb 3 (Sudah) | Day 12 A1 | A1 ✅ wajar |
| A2 (Basic) | Day 9 — Do/Does VS Is/Am/Are | **Day 9 A1** | A1 ❌ (di-label A2) |
| B1 (Intermediate) | Day 5 — Verb 2 (Tadi/Kemarin) | **Day 5 A1** | A1 ❌ (di-label B1) |
| B2 (Upper-Int) | Day 7 — Do/Does/Did | **Day 7 A1** | A1 ❌ (di-label B2) |
| C1 (Advanced) | Day 11 — Did VS Was/Were | **Day 11 A1** | A1 ❌ (di-label C1) |
| C2 (Mastery) | Day 2 — Kata Sifat (Adjective) | **Day 2 A1** | A1 ❌ (di-label C2) |

**Verifikasi:** dari 6 sampel, 5 di antaranya (A2, B1, B2, C1, C2) memakai topik yang secara konten murni **level A1** (Present Simple vs to-be, Past Simple, do/does/did auxiliary, adjective dasar) — namun dipasangkan ke label CEFR setinggi C2. C2 ("Mastery") bahkan diajari **Kata Sifat (Adjective)**, materi paling dasar yang muncul di Day 2 A1 mana pun.

**Kesimpulan temuan:** Kompetitor **tidak punya kurikulum grammar yang ter-diferensiasi per CEFR**. Mereka memakai **satu pool topik beginner tunggal** lalu menempelkannya ke 6 label level. Satu-satunya "personalisasi per level" adalah kalimat `Level bahasa Inggrisku: [X]` — AI diharapkan mengimprovisasi tingkat kesulitan sendiri secara on-the-fly, tanpa kurikulum, tanpa kontrol konten, tanpa progresi yang terbukti. Untuk learner B2/C1/C2 yang butuh inversion, cleft sentences, subjunctive, atau nominalisation, prompt kompetitor **tidak pernah menyentuh struktur itu** — yang dipelajari tetap Past Simple.

**Ini cacat desain kurikulum paling besar dari kompetitor, sekaligus peluang diferensiasi terbesar kita.** Inilah alasan dokumen ini: membangun kurikulum 30 topik × 5 level baru (A2–C2) yang **benar-benar ter-riset CEFR dan non-overlapping**, bukan daur ulang topik A1.

### 1.3 Yang Dilakukan Kompetitor dengan Baik (kita pertahankan)

1. **Alur 2 langkah jelas** — penjelasan dulu, lalu speaking dengan trigger eksplisit. Mencegah AI lompat ke speaking sebelum user siap. **Kita pakai** (sudah selaras prd_user.md §4.3).
2. **5 contoh + terjemahan, 3 speaking question per topik** — pola yang baik, sudah jadi keputusan kita juga.
3. **Repeat After Me / drill pengucapan wajib** — bagus untuk speaking; pengucapan tidak dilewati. Kita pakai (langkah 3️⃣ kita).
4. **Header behavior ringkas** — relatif padat, tidak verbose.

### 1.4 Kelemahan Kompetitor (yang kita perbaiki)

1. **Tidak ada kurikulum CEFR riil** (temuan §1.2) — kita bangun 6 kurikulum non-overlapping.
2. **Persona generik + gender binary** — "Bro/Sist". Kita pakai **Kak Ara** + sapaan fleksibel dari profil user.
3. **Trigger formal "I'm ready to practice"** — kita pakai **"Let's start speaking!"** (lebih hangat, konsisten lintas modul).
4. **Bahasa koreksi statis (Indonesia di semua level)** — tidak ada progresi bahasa. Kita pakai kebijakan bahasa progresif A1→C2 (prd_user.md §5.5).
5. **Tidak ada Analisa CEFR sebagai feedback** — kompetitor tidak pernah menilai level grammar user. Kita punya langkah 4️⃣ Analisa Level CEFR.
6. **Koreksi tidak kontrastif L1** — kompetitor hanya tunjuk salah→benar. Kita jelaskan **kenapa** dari kebiasaan Bahasa Indonesia (L1-contrastive), seperti modul Vocab.
7. **"Modul adaptif chatgpt-ar1209beta-eb"** — ini klaim kosong/sugesti, bukan mekanisme nyata. Adaptivitas kita eksplisit di prompt (lancar→tambah pertanyaan, macet→Pattern Drill).

### 1.5 Audit URL-Safety Kompetitor (RULE 1 & 2)

Dihitung dari prompt A1 verbatim kompetitor (Day 12 — Verb 3):

| Metrik | Hasil kompetitor | Batas RULE 1/2 | Status |
|---|---|---|---|
| Raw chars | **2.218** | < 3.200 | ✅ AMAN |
| URL chars (aktual, `urllib.quote`) | **3.036** | < 4.500 | ✅ AMAN |
| Estimasi formula `30 + raw×1.42` | ~3.180 | < 4.500 | ✅ konsisten dgn aktual |
| Blank lines internal | 0 (hanya trailing `\n`) | 0 | ✅ |
| Separator `---` | 0 | 0 | ✅ |

**Catatan jujur:** prompt grammar kompetitor justru **lolos** RULE 1/2 — pendek dan rapi. Masalah kompetitor **bukan** URL safety, melainkan **kekosongan kurikulum** (§1.2). Pelajaran untuk kita: prompt Grammar secara alami lebih ringkas dari Vocab (tidak ada BOW 15 kata, tidak ada Writing Challenge 2 mode) — jadi kita punya **budget karakter lega** untuk menambahkan differentiator (Analisa CEFR + koreksi L1-contrastive) tanpa melewati batas. Lihat §6 untuk perhitungan template kita.

### 1.6 Strategi Diferensiasi Inggrisin Yuk (Grammar)

Dibangun di atas differentiator yang sudah memisahkan modul Vocab kita dari kompetitor, **diadaptasi ke mekanisme Grammar yang sudah diputuskan di prd_user.md §4.3** (tidak menambah langkah baru yang bertentangan dengan PRD):

| Differentiator | Kompetitor | Inggrisin Yuk Grammar |
|---|---|---|
| Kurikulum CEFR | 1 pool beginner untuk semua level | 6 kurikulum ter-riset, non-overlapping (§5) |
| Persona | Bro Arule, gender binary | Kak Ara, sapaan fleksibel dari profil |
| Trigger speaking | "I'm ready to practice" | "Let's start speaking!" |
| Bahasa per level | Statis (Indonesia) | Progresif A1→C2 (§3) |
| Analisa Level CEFR | Tidak ada | Ada (langkah 4️⃣) + tips naik level |
| Koreksi | Salah→benar saja | + kolom kontrastif L1 (kenapa, ala Bahasa Indonesia) |
| Adaptivitas | Klaim kosong | Eksplisit: lancar→+1 pertanyaan, macet→Pattern Drill |

> Yang **tidak** diimpor dari Vocab: Box of Words, Writing Challenge (Mode Cerita/Kilat), 5W+1H, Frasa Siap Pakai sebagai langkah terpisah. Mekanisme Grammar berbeda — fokusnya **struktur kalimat**, bukan **kosakata**.

---

## 📐 2. STRUKTUR MATERI GRAMMAR PER SESI

Mengikuti skeleton dokumentasi yang sama dengan `materi/a1/vocab.md` (6 sub-bagian per Day), tapi diisi mekanisme Grammar dari prd_user.md §4.3.

### 2.1 Komponen Setiap Day

**1. Detail Materi**
Setiap day = 1 topik grammar spesifik (misal: Day 12 A1 — Verb 3 / Past Participle). Penjelasan gaya Gen Z/millennial, relate, bukan textbook. Istilah grammar diberi arti singkat dalam kurung italic (contoh: *Singular (tunggal)*). Verb 2/3 selalu ditulis Verb 1-nya dalam kurung italic (contoh: *went (go)*). Disertai **5 contoh kalimat natural + terjemahan Indonesia**.

**2. Detail Task**
**3 pertanyaan speaking** yang **memaksa** user pakai grammar target hari itu. Tiap pertanyaan: Bahasa Inggris (bold) + terjemahan Indonesia (italic) di bawahnya. Pertanyaan tidak boleh bisa dijawab tanpa memakai struktur grammar yang diajarkan (misal topik "Will VS Going to" → pertanyaan harus tentang rencana/prediksi masa depan).

**3. Detail Review & Koreksi (8 Langkah)**
Otomatis setelah user menjawab tiap pertanyaan speaking (lihat tabel metodologi §2.3):
1. **Koreksi Struktur Kalimat** — tabel 3 kolom: Kalimat User | Kesalahan Grammar | Kalimat Benar.
2. **Analisa Penggunaan Grammar Target** — apakah struktur yang dipelajari dipakai tepat? ✅/⚠️ + penjelasan singkat kontrastif L1 (kenapa salah dari kebiasaan Bahasa Indonesia).
3. **Repeat After Me** — WAJIB & blocking: minta ucap ulang kalimat koreksi; jangan lanjut sampai dikirim ulang.
4. **Kolokasi & Chunk Alami** — 1–2 chunk natural pakai grammar target + contoh kalimat + arti. Cek apakah jawaban user sudah natural atau masih terjemahan kaku Bahasa Indonesia.
5. **Analisa Level CEFR** — level grammar saat ini + saran konkret naik level.
6. **Pattern Drill** (*kondisional*) — hanya jika user kesulitan: latihan berulang pola sama.
7. **Transfer Challenge** — minta user buat 1 kalimat BARU pakai grammar target di konteks berbeda dari pertanyaan tadi. Benar → lanjut; salah → koreksi singkat + minta ulang 1×.
8. **Contoh Kalimat Natural** — 2–3 kalimat siap pakai sehari-hari dengan grammar target.

**4. Detail Feedback**
Bahasa koreksi mengikuti level CEFR (§3). Encouraging, tidak menghakimi. Pujian konkret hanya di akhir sesi. Prioritas koreksi grammar: (1) struktur target hari itu → (2) tense/agreement → (3) urutan kata → (4) articles/preposisi.

**5. Detail Practice (Speaking Mode)**
Dipicu user aktifkan mode suara 🎙️ lalu bilang **"Let's start speaking!"**. AI ajukan 3 pertanyaan satu per satu (tidak sekaligus). Tiap jawaban → Koreksi 8 Langkah, termasuk Repeat After Me wajib, **sebelum** pindah pertanyaan. Adaptif: lancar → +1 pertanyaan lanjutan; macet → Pattern Drill lalu ulangi.

**6. PROMPT siap pakai**
Prompt lengkap siap di-encode ke URL ChatGPT, mengikuti Template Master Grammar (§6) dengan variabel terisi nilai asli. Variabel `[PANGGILAN]`/`[NAMA]` auto-fill dari profil user.

### 2.2 Alur Sesi (User Flow)

```
User klik topik Grammar di dashboard (misal: Day 20 — Will VS Going to)
         ↓
Halaman detail topik terbuka — deskripsi singkat + tombol "Mulai Belajar"
         ↓
User klik "Mulai Belajar" → ChatGPT terbuka dengan prompt sudah terisi
         ↓
Kak Ara langsung jalankan LANGKAH 1: penjelasan grammar (Gen Z style)
+ 5 contoh natural + terjemahan + 3 pertanyaan speaking
         ↓
User membaca penjelasan, paham → siap latihan
         ↓
User aktifkan mode suara ChatGPT 🎙️, lalu bilang: "Let's start speaking!"
         ↓
Kak Ara ajukan pertanyaan speaking SATU PER SATU
         ↓
User jawab pertanyaan 1 → Kak Ara jalankan KOREKSI 8 LANGKAH
(Koreksi Struktur → Analisa Grammar Target → Repeat After Me [WAJIB] →
 Kolokasi & Chunk Alami → Analisa CEFR → Pattern Drill [jika macet] →
 Transfer Challenge → Contoh Natural)
         ↓
Repeat After Me memblok: user WAJIB ucapkan ulang kalimat koreksi dulu
         ↓
Baru lanjut ke pertanyaan 2 → ulangi siklus → pertanyaan 3
         ↓
Selesai → Kak Ara beri pujian singkat di akhir sesi
         ↓
User kembali ke app → topik otomatis tertandai ✓ (progress +1)
```

### 2.3 Tabel Metodologi Koreksi 8 Langkah (Grammar)

| # | Langkah | Aturan Konten | Dasar Riset/Rationale |
|---|---|---|---|
| 1️⃣ | Koreksi Struktur Kalimat | Tabel 3 kolom: Kalimat User → Kesalahan Grammar → Kalimat Benar. Kalimat ≥95% benar: tandai ✅, kolom Kesalahan isi "—" | **Noticing Hypothesis** (Schmidt 1990) — perbandingan eksplisit output user vs target yang benar memaksa noticing gap; tanpa noticing, pola error tidak terkurangi. |
| 2️⃣ | Analisa Penggunaan Grammar Target | Struktur target dipakai tepat? ✅/⚠️ + penjelasan singkat. **Kontrastif L1** (kenapa salah dari kebiasaan Bahasa Indonesia) — mulai A1, makin halus tiap level | **L1-contrastive explanation** — akar masalah via perbandingan Bahasa Indonesia lebih efektif dari label "salah grammar" untuk EFL learner Indonesia. **Metalinguistic feedback** (Lyster & Ranta 1997) — explicit explanation why the error occurred is more effective than recasts alone in triggering self-correction. |
| 3️⃣ | Repeat After Me | **WAJIB & blocking** — user ucapkan ulang kalimat koreksi sebelum lanjut. Masih salah → koreksi lagi, minta ulang | **Output Hypothesis / pushed output** (Swain) — produksi ulang yang akurat memaksa noticing + memperkuat retensi pola target; forced output lebih efektif dari resepsi pasif. |
| 4️⃣ | Kolokasi & Chunk Alami | 1–2 chunk/kolokasi natural yang umum memakai grammar target hari ini + contoh kalimat + arti singkat (Indonesia). Cek apakah jawaban user sudah natural atau masih terjemahan kaku kata per kata dari Bahasa Indonesia. Kalimat ≥95% natural: skip. | **Form-meaning-use connection** (Lyster & Ranta 1997) — grammar yang dipelajari harus terkoneksi ke penggunaan natural, bukan kalimat terisolasi. Learner yang hanya melatih struktur dalam drill tersendiri sering gagal menggunakannya dalam chunks alami percakapan. |
| 5️⃣ | Analisa Level CEFR | Level grammar saat ini + 1 tips konkret naik ke level berikutnya. C2: reframe jadi "mempertahankan Mastery" | **CEFR action-oriented self-positioning** (Companion Volume) — memberi user titik referensi konkret di skala kompetensi, bukan sekadar "betul/salah". |
| 6️⃣ | Pattern Drill *(kondisional)* | Hanya jika user macet/salah berulang: 2–3 latihan pola kalimat sama, baru lanjut | **Focused practice** — drill berulang pola sama terbukti efektif untuk otomatisasi struktur target pada learner yang belum lancar (proceduralization via practice). |
| 7️⃣ | Transfer Challenge | Minta user buat **1 kalimat BARU** pakai grammar target di **konteks yang berbeda** dari pertanyaan sebelumnya (forcing generalisasi pola, bukan pengulangan jawaban sama). Benar → lanjut; salah → koreksi singkat + minta ulang 1×. | **Transfer-Appropriate Processing** (Lightbown 2008) — memory retrieval paling berhasil saat kondisi produksi mirip kondisi nyata; drill terisolasi (Repeat After Me, Pattern Drill) tanpa transfer task tidak menjamin generalisasi ke percakapan real-world. Transfer Challenge menjembatani form-focused practice → authentic use. |
| 8️⃣ | Contoh Kalimat Natural | 2–3 kalimat natural pakai grammar target, siap dipakai ngobrol | Model input untuk pola yang sudah dipelajari — memperkuat representasi mental kalimat natural dengan grammar target, sebagai penutup sesi sebelum pertanyaan berikutnya. |

**Dasar riset:** *Noticing Hypothesis* (Schmidt) — user maju kalau menyadari pola error (1️⃣–2️⃣); *Metalinguistic feedback* (Lyster & Ranta 1997, ERIC EJ539354) — penjelasan eksplisit lebih efektif dari recast untuk EFL; *L1-contrastive explanation* — kontrastif Bahasa Indonesia efektif untuk menjawab "kenapa salah"; *Output Hypothesis* (Swain) — Repeat After Me (3️⃣) memaksa produksi akurat; *Form-meaning-use connection* (Lyster & Ranta 1997) — grammar harus terkoneksi ke chunk natural (4️⃣); *focused practice* — Pattern Drill (6️⃣) mengotomatisasi struktur; *Transfer-Appropriate Processing* (Lightbown 2008) — Transfer Challenge (7️⃣) menjembatani drill ke real-world use.

---

## 🎯 3. EVOLUSI BAHASA & KEDALAMAN PER LEVEL (A1→C2)

Prinsip diadaptasi dari prd_user.md §5.5 & §5.6: **struktur 8 langkah tetap konstan di semua level** (ritual prosedural yang user kenali sejak A1) — yang berubah secara sengaja adalah **bahasa pengantar, kedalaman penjelasan, dan istilah tiap langkah**. Scaffolding (Bahasa Indonesia) di-*fade* bertahap, bukan dilepas mendadak (Vygotsky ZPD).

### 3.1 Kebijakan Bahasa per Level (sama dengan Vocab)

| Level | Bahasa penjelasan grammar | Bahasa koreksi & feedback | Terjemahan |
|---|---|---|---|
| **A1** | Indonesia dominan | Full Indonesia | Semua kalimat Inggris + terjemahan |
| **A2** | Indonesia dominan, contoh English | Indonesia | Kalimat penting + terjemahan |
| **B1** | Indonesia dominan, label grammar English (*Present Perfect*, *2nd Conditional*) makin sering | Indonesia, istilah grammar English | Hanya di 2 titik: 3 speaking questions + contoh kalimat model |
| **B2** | English mulai dominan | English, catatan Indonesia hanya untuk poin risiko miskonsepsi | Hanya jika risiko miskonsepsi |
| **C1** | Full English | Full English | Tidak ada |
| **C2** | Full English (gaya native) | Full English, singkat seperti native feedback | Tidak ada |

### 3.2 Evolusi Tiap Langkah Grammar (A1 → C2)

| Langkah | A1–A2 | B1 | B2 | C1 | C2 |
|---|---|---|---|---|---|
| 1️⃣ Koreksi Struktur | Tabel 3 kolom, kolom Kesalahan kontrastif Bahasa Indonesia | Sama, label grammar English | Kolom jadi **Error/Correction** English; catatan Indonesia hanya 1–2 pola interferensi | Full English, didahului **🔎 Self-Check** (tandai 1 pola error tanpa jawaban, tunggu user) | Self-Check + Error 1 kalimat tajam, native-to-native |
| 2️⃣ Analisa Grammar Target | Kontrastif L1, mendalam | Sama, label English | English dominan | Fokus konsistensi & nuansa register | Fokus craft/nuansa, bukan benar-salah dasar |
| 3️⃣ Repeat After Me | Kalimat koreksi penuh, ucap ulang | Sama | Sama | Fokus pengucapan + ritme/stress native | Fokus prosodi & timing native |
| 4️⃣ Kolokasi & Chunk Alami | 1–2 chunk + arti ID; cek naturalness jawaban user | Sama, label English; terjemahan hanya jika kritis | Chunk English; cek terjemahan kaku vs natural | Cek kolokasi vs idiom native; tanpa terjemahan | Fokus presisi kolokasional & nuansa pragmatik |
| 5️⃣ Analisa CEFR | Tips naik ke A2/B1, encouraging | Sama | English | Fokus kefasihan spontan & register | Reframe: tips **mempertahankan** Mastery (tidak ada "naik level") |
| 6️⃣ Pattern Drill | Drill pola dasar (substitusi sederhana) | Drill struktur menengah | Drill transformasi (aktif↔pasif, dll) | Drill jarang dipicu (learner lebih mandiri) | Hampir tidak dipicu; jika ya, fokus nuansa |
| 7️⃣ Transfer Challenge | 1 kalimat BARU konteks berbeda + koreksi singkat jika salah (ID) | Sama, instruksi English sebagian | Full English; konteks lebih spontan/percakapan | Konteks native-like; Self-Check sebelum konfirmasi | Konteks bebas pilihan user; fokus craft & register |
| 8️⃣ Contoh Natural | 2–3 kalimat sederhana + terjemahan | + label English | Full English, register lebih luas | High-register + idiomatik | Native-craft, nuansa pragmatik |

> Self-Check Pertama (metalinguistic feedback) **hanya** di C1 & C2 — konsisten dengan implementasi Vocab (prd_user.md §5.6): learner level lanjut diberi satu kesempatan self-correction sebelum direct feedback penuh (Ellis 2009, typology of written corrective feedback).

---

## 📚 4. METODOLOGI RISET CEFR

Kurikulum A2–C2 di §5 **tidak** ditebak — di-grounding ke sumber otoritatif yang saling silang. Sumber utama dan alasan otoritasnya:

| Sumber | Apa & kenapa otoritatif | URL |
|---|---|---|
| **English Grammar Profile (EGP) — English Profile / Cambridge** | Sub-proyek English Profile (Cambridge + Council of Europe). O'Keeffe & Mark menambang **Cambridge Learner Corpus** (tulisan learner riil) untuk memetakan **>1.200 konstruksi grammar** ke level CEFR berdasarkan kapan learner benar-benar menguasainya — bukan opini. **Sumber paling otoritatif** untuk "grammar X milik level berapa". | https://www.englishprofile.org/english-grammar-profile/egp-online |
| **Cambridge English — CEFR criterial features (blog metodologi)** | Menjelaskan konsep *criterial features*: struktur grammar yang membedakan satu level dari level sebelumnya (contoh: indirect questions = criterial untuk B1, bukan A2). | https://www.cambridge.org/elt/blog/2021/06/23/using-cefr-criterial-features-for-grammar-instruction/ |
| **examenglish.com — CEFR Grammar mapping** | Tabel grammar per level A1–C1 yang dipakai luas penyelenggara tes; berguna sebagai daftar kerja yang sudah dipetakan ke level. | https://www.examenglish.com/CEFR/cefr_grammar.htm |
| **Cambridge exam handbooks (KET≈A2, PET≈B1, FCE≈B2, CAE≈C1, CPE≈C2)** | Handbook resmi tiap exam menyebut struktur grammar yang diharapkan per level — anchor silang yang independen dari EGP. | (FCE handbook) https://egzaminy-cambridge.pl/wp-content/uploads/2017/02/cambridge-english-first-handbook-2015.pdf |
| **British Council — LearnEnglish Grammar (B1–B2, C1)** | Materi grammar gratis terorganisir per level dari British Council; berguna konfirmasi topik C1 (cleft, inversion, ellipsis, nominalisation). | https://learnenglish.britishcouncil.org/free-resources/grammar/c1 |
| **Pearson — Global Scale of English (GSE) Grammar** | GSE memetakan tiap struktur grammar ke nilai numerik + CEFR via "Can do" descriptor; cross-check granular independen. | https://www.pearson.com/content/dam/one-dot-com/one-dot-com/pearson-languages/en-gb/pdfs/gse/gse-resources/gse-grammar-guide-adult-framework.pdf |
| **grade-university — Typical grammar structures per level** | Sintesis ringkas grammar per level A1–C2; dipakai sanity-check, bukan sumber primer. | https://grade-university.com/blog/typical-grammar-structures-for-each-level |
| **English Grammar in Use (Murphy) — mapping** | *Essential* ≈ A1–A2, *English Grammar in Use* ≈ B1–B2, *Advanced* ≈ C1–C2. **Cross-reference, bukan sumber CEFR primer.** | https://www.cambridge.org/elt (seri referensi) |
| **Lyster & Ranta (1997) — "Corrective Feedback and Learner Uptake"** | Analisis 18,3 jam interaksi kelas immersion: mengidentifikasi 6 tipe corrective feedback. Recasts (paling sering dipakai guru) paling TIDAK efektif memicu self-correction; elicitation + metalinguistic feedback + clarification request jauh lebih efektif. Dasar: (a) langkah 2️⃣ memakai metalinguistic explanation (kontrastif L1), bukan recast; (b) langkah 4️⃣ Kolokasi memastikan grammar terkoneksi ke chunk natural, bukan hanya "koreksi kalimat". | ERIC EJ539354: https://eric.ed.gov/?id=EJ539354 (verified 200); Cambridge Core: https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/abs/corrective-feedback-and-learner-uptake/59229F0CA2F085F5F5016FB4674877BF |
| **Lightbown (2008) — Transfer-Appropriate Processing (TAP) in L2** | Diterapkan dari cognitive psychology: memory retrieval paling berhasil ketika kondisi encoding & retrieval match. Untuk L2 grammar: drill terisolasi (Repeat After Me, Pattern Drill) mengkodekan pola dalam kondisi form-focused — jika tidak ada transfer task, learner gagal menggunakan pola dalam percakapan nyata (kondisi berbeda). Transfer Challenge (langkah 7️⃣) menjembatani gap ini: user harus produksi pola dalam konteks baru yang lebih mirip percakapan asli. | Bab dalam buku "Understanding Second Language Process" (Han ed., 2008, Multilingual Matters) — tidak ada open-access URL; dikonfirmasi bibliografis. |

**Catatan kejujuran sumber:** EGP, examenglish, dan Cambridge handbooks **konvergen kuat** untuk A2–B2 (mis. semua sepakat: passive Present/Past Simple = A2; conditional Type 3 & reported speech = B1; mixed conditionals & narrative tenses & relative clauses = B2; inversion & cleft = C1). Untuk **C2**, banyak sumber (termasuk examenglish & grade-university) menyatakan C2 = "no new grammar structures" — fokus C2 adalah penguasaan/nuansa, bukan struktur baru. Karena itu kurikulum **C2 kita di §5 sengaja diisi topik nuansa/craft/register** (subjunctive halus, hedging, fronting retoris, ellipsis lanjut) — ini **ekstrapolasi terjustifikasi** dari prinsip "C2 = mastery & precision", bukan klaim bahwa ada 30 struktur grammar baru eksklusif C2 (lihat ringkasan kuantitatif sumber di §5.7).

---

## 📋 5. KURIKULUM 30 TOPIK GRAMMAR PER LEVEL

Aturan: A1 = **verbatim** keputusan PRD (tidak diubah). A2–C2 = hasil riset §4, **non-overlapping** (tiap level membangun ke depan, tidak mengulang A1 Day 22–30 yang sudah menyentuh conditional/passive/who-whom/which-whose/comparative/could-would-should/5W1H/transition words). Tiap level: Day 1–30 topik + Day 31 Placement Test.

### 5.1 LEVEL A1 (Beginner) — SUDAH DIPUTUSKAN, TIDAK DIUBAH

Daftar ini **verbatim** dari prd_user.md §4.3. Validasi CEFR di bawah tabel.

**Day 1–21 — Core A1:**

| Day | Topik | Day | Topik |
|---|---|---|---|
| 1 | Kata Benda (Noun) | 12 | Verb 3 (sudah terjadi) |
| 2 | Kata Sifat (Adjective) | 13 | Verb 2 VS Verb 3 |
| 3 | Verb 1 (Sehari-hari) | 14 | Kapan pakai be |
| 4 | Kapan pakai Verb s/es | 15 | Kapan pakai been |
| 5 | Verb 2 (tadi/kemarin) | 16 | Have been + V-ing |
| 6 | Verb 1 VS Verb 2 | 17 | Used to + Verb 1 |
| 7 | Do/does/did | 18 | tobe + used to + V-ing |
| 8 | Is/am/are VS Was/were | 19 | Will (akan/masa depan) |
| 9 | Do/does VS is/am/are | 20 | Will VS Going to |
| 10 | V-ing (sedang terjadi) | 21 | Have to VS Must |
| 11 | Did VS Was/were | | |

> 🌉 **Jembatan ke A2 (Day 22–30):** Topik-topik berikut — conditional unreal, passive voice, relative pronoun (who/whom/which/whose), discourse markers, dan comparative/superlative — secara CEFR criterial A2–B1. User diperkenalkan lebih awal agar siap menghadapi kurikulum A2 yang langsung membangun di atasnya, bukan mengulang.

**Day 22–30 — A1→A2 Bridge:**

| Day | Topik | Day | Topik |
|---|---|---|---|
| 22 | Penyesalan datang terlambat | 27 | Transition Words |
| 23 | Berandai-andai (If I were...) | 28 | Who VS Whom |
| 24 | 5W + 1H | 29 | Which & Whose |
| 25 | Could, Would, Should | 30 | Comparative & Superlative |
| 26 | Kalimat Passive (di/ter) | | |

**Validasi CEFR (Day 1–21 = Core A1):** EGP & examenglish menempatkan noun/adjective dasar, Present Simple (+ verb s/es untuk he/she/it), Past Simple (regular & irregular), do/does/did auxiliary, to be (present & past), Present Continuous, Present Perfect (`have/has + V3`, `have been + V-ing`), `used to`, dan future (`will`, `going to`) **semua di rentang A1–A2** — inti A1. **Day 22–30 secara sadar adalah jembatan A1→A2** (PRD sudah melabelinya demikian): conditional unreal (`If I were`), passive, relative pronoun (who/whom, which/whose), comparative/superlative, dan discourse markers sebenarnya **criterial A2–B1** menurut EGP — itulah kenapa dilabeli "Bridge". **Implikasi penting:** karena A1 Day 22–30 sudah "mencuri" beberapa topik A2, kurikulum A2 di §5.2 **harus** membangun di atasnya, **bukan** mengulang.

### 5.2 LEVEL A2 (Elementary) — RISET BARU, NON-OVERLAPPING

Rationale grup: A2 = pendalaman tense yang sudah dikenal + perluasan modal & determiner + kontras tense yang sering tertukar pemula Indonesia. **Sengaja menghindari** conditional/passive/relative pronoun yang sudah disentuh A1 Day 22–30 — A2 memperkuat fondasi tense dulu sebelum naik ke kompleksitas B1.

| Day | Topik | Rationale (1 baris) |
|---|---|---|
| 1 | Present Simple vs Present Continuous (kebiasaan vs sekarang) | Kontras tense paling sering tertukar pemula ID (EGP A2). |
| 2 | Past Continuous (was/were + V-ing) | Aksi berlangsung di masa lalu (EGP A2). |
| 3 | Past Simple vs Past Continuous (interupsi) | "while/when" — aksi panjang diinterupsi aksi pendek. |
| 4 | Present Perfect vs Past Simple (sudah vs lampau spesifik) | Distingsi paling membingungkan A2 (EGP A2 criterial). |
| 5 | Present Perfect + for/since | Durasi sampai sekarang. |
| 6 | Present Perfect + already/yet/just/ever/never | Adverb penanda Present Perfect. |
| 7 | Going to vs Present Continuous (rencana masa depan) | Dua cara future selain `will` (PET/A2). |
| 8 | Quantifiers: some/any/much/many/a lot of | Countable vs uncountable + quantifier (examenglish A2). |
| 9 | Countable & Uncountable Nouns (+ a few/a little) | Fondasi sebelum quantifier lanjut. |
| 10 | Articles: a/an/the/zero article | Sistem artikel — tidak ada di Bahasa Indonesia (interferensi L1). |
| 11 | Comparatives + as...as | Lanjutan dari A1 Day 30 — tambah struktur kesetaraan. |
| 12 | Adverbs of manner & frequency | Posisi adverb (slowly, always) — sering salah letak. |
| 13 | Modals: have to / don't have to | Kewajiban & ketiadaan kewajiban (PET/A2). |
| 14 | Modals: should / shouldn't (saran) | Memberi saran. |
| 15 | Modals: might / may (kemungkinan) | Kemungkinan ringan (≠ A1 will yang pasti). |
| 16 | Gerund vs Infinitive (like doing / want to do) | Pola verb + -ing vs verb + to (EGP A2). |
| 17 | Verb + Object + Infinitive (want someone to...) | Pola kalimat menengah. |
| 18 | Zero & First Conditional (fakta & rencana nyata) | Conditional **nyata** — beda dari A1 Day 23 yang *unreal* (If I were). |
| 19 | Prepositions of time (in/on/at) | Sistem preposisi waktu — interferensi L1 tinggi. |
| 20 | Prepositions of place & movement | Lanjutan preposisi. |
| 21 | Question tags (..., don't you?) | Penegasan percakapan (EGP A2). |
| 22 | Possessive pronouns (mine/yours/theirs) | Lanjutan possessive 's dari A1. |
| 23 | Reflexive pronouns (myself/yourself) | Diri sendiri sebagai objek. |
| 24 | Imperatives & Let's (ajakan/perintah) | Fungsi percakapan sehari-hari. |
| 25 | So / Because / But / Although (penghubung dasar) | Penghubung melampaui transition words A1 Day 27. |
| 26 | Used to vs Past Simple (kontras kebiasaan lampau) | Perdalam A1 Day 17 dengan kontras. |
| 27 | There is/are + There was/were | Eksistensial present & past. |
| 28 | Phrasal Verbs sehari-hari (get up, turn on) | Phrasal verb dasar (A2/B1 EGP). |
| 29 | Future: will vs going to (perdalam keputusan vs rencana) | Perdalam A1 Day 20 dengan nuansa spontan vs terencana. |
| 30 | Review: tense timeline (semua tense A1–A2) | Konsolidasi sebelum Placement Test. |

> **Non-overlap check A2:** Conditional di A2 = **Zero/First (nyata)** — tidak tumpang tindih dengan A1 Day 23 (`If I were` = *unreal/second conditional*). Comparative A2 (Day 11) = `as...as`, bukan superlative dasar A1 Day 30. Phrasal verb A2 = dasar sehari-hari, diperdalam lagi di B1.

### 5.3 LEVEL B1 (Intermediate) — RISET BARU, NON-OVERLAPPING

Rationale grup: B1 (≈PET) = penguasaan **semua tense perfect + continuous**, **conditional Type 1–3 lengkap**, **reported speech**, **passive perluasan**, **modal deduksi**. Inilah level di mana learner mulai menangani struktur kompleks-tapi-umum.

| Day | Topik | Rationale (1 baris) |
|---|---|---|
| 1 | Past Perfect (had + V3) | Aksi sebelum aksi lampau lain (EGP B1). |
| 2 | Past Perfect vs Past Simple (urutan kejadian) | Narasi berurutan (B1). |
| 3 | Present Perfect Continuous (have been + V-ing) | Durasi + masih berlangsung (EGP B1). |
| 4 | Present Perfect vs Present Perfect Continuous | Hasil vs proses (criterial B1). |
| 5 | Future Continuous (will be + V-ing) | Aksi berlangsung di masa depan. |
| 6 | Second Conditional (If I were... — perdalam) | *Unreal present* penuh (lebih dalam dari A1 Day 23). |
| 7 | Third Conditional (If I had..., I would have...) | *Unreal past* — penyesalan (EGP B1). |
| 8 | Conditionals overview (Type 0–3 dibandingkan) | Konsolidasi keempat conditional. |
| 9 | Reported Speech: statements | "He said that..." (criterial B1). |
| 10 | Reported Speech: questions & commands | "He asked if..." / "told me to...". |
| 11 | Passive: present & past simple (perdalam A1 Day 26) | Passive penuh dengan by-agent. |
| 12 | Passive: present perfect & future | "has been done" / "will be done". |
| 13 | Modals of deduction present (must/can't/might be) | Menyimpulkan situasi sekarang (B1). |
| 14 | Modals: used to vs would (kebiasaan lampau) | "would" untuk kebiasaan lampau (B1). |
| 15 | Relative Clauses: defining (who/which/that) | Klausa relatif penting (perdalam A1 Day 29). |
| 16 | Relative Clauses: non-defining (..., which...) | Info tambahan dengan koma (EGP B1). |
| 17 | Gerund vs Infinitive (perubahan makna: stop to/doing) | Verb yang ubah makna (B1). |
| 18 | Verbs of perception (see someone do/doing) | Pola persepsi. |
| 19 | Causative: have/get something done | "I got my hair cut" (EGP B1). |
| 20 | Wish + Past Simple (wish I were...) | Pengandaian sekarang (B1). |
| 21 | Wish + Past Perfect (wish I had...) | Penyesalan masa lalu. |
| 22 | Future Time Clauses (when/as soon as + present) | "When I arrive, I'll call" (B1). |
| 23 | Quantifiers lanjut: enough/too/too much/too many | Derajat kuantitas. |
| 24 | Comparatives lanjut: the more... the more... | Korelasi paralel (B1). |
| 25 | Modal Perfect: should have / could have | Kritik/penyesalan masa lalu (EGP B1). |
| 26 | Phrasal Verbs (separable vs inseparable) | Pemisahan objek phrasal verb (B1). |
| 27 | Linking words: however/therefore/moreover | Penghubung formal (melampaui A2 because/but). |
| 28 | Defining purpose: so that / in order to | Menyatakan tujuan. |
| 29 | Question forms: indirect questions (Can you tell me where...) | Criterial B1 (EGP: A2 belum, B1 mulai akurat). |
| 30 | Review: narrative & hypothetical mixing | Konsolidasi tense + conditional. |

> **Non-overlap check B1:** Conditional di B1 = **Type 2 & 3 penuh + overview** (A1 hanya intro `If I were`, A2 hanya Type 0/1). Passive B1 = **perfect & future** (A1/A2 hanya simple). Relative clause B1 = **defining vs non-defining penuh** (A1 Day 28–29 hanya kenalkan who/whom/which/whose). **Indirect questions sengaja di B1** — EGP eksplisit menyebutnya criterial B1.

### 5.4 LEVEL B2 (Upper-Intermediate) — RISET BARU, NON-OVERLAPPING

Rationale grup: B2 (≈FCE) = **mixed conditionals**, **narrative tenses lanjut**, **passive kompleks (reporting/impersonal)**, **modal nuansa**, **relative & participle clauses**, awal **emphasis/cleft sederhana**. Bahasa penjelasan mulai English-dominant.

| Day | Topik | Rationale (1 baris) |
|---|---|---|
| 1 | Narrative Tenses (4 past tenses bersama) | Past Simple/Continuous/Perfect/Perfect Continuous dalam 1 cerita (FCE/B2). |
| 2 | Mixed Conditionals (past condition → present result) | Campuran Type 2/3 (criterial B2). |
| 3 | Mixed Conditionals (present condition → past result) | Arah sebaliknya. |
| 4 | Future Perfect (will have done) | Selesai sebelum titik masa depan (B2). |
| 5 | Future Perfect Continuous (will have been doing) | Durasi sampai titik masa depan. |
| 6 | Past Perfect Continuous (had been doing) | Durasi sebelum aksi lampau (B2). |
| 7 | Passive: reporting verbs (It is said that.../He is said to...) | Passive impersonal (EGP B2). |
| 8 | Passive: causative & complex | "have/get done" diperluas + double object. |
| 9 | Modals of deduction past (must have/can't have been) | Menyimpulkan masa lalu (B2). |
| 10 | Modals: needn't have vs didn't need to | Nuansa kewajiban masa lalu (FCE). |
| 11 | Relative Clauses: reduced (the man sitting there) | Participle sebagai klausa relatif (B2). |
| 12 | Participle Clauses (Having finished,...) | Klausa partisip awal kalimat (EGP B2). |
| 13 | Wish/If only + would (keluhan/iritasi) | "I wish you would stop" (B2). |
| 14 | Inversion sederhana setelah negative adverbial (Hardly... when) | Pengantar inversi (jembatan ke C1). |
| 15 | Cleft sentences: It-cleft (It was X that...) | Penekanan (awal emphasis, B2/C1). |
| 16 | Cleft sentences: What-cleft (What I need is...) | Penekanan alternatif. |
| 17 | Gradable & non-gradable adjectives (+ absolutely/very) | Kolokasi intensifier (B2). |
| 18 | Advanced linking: despite/in spite of/whereas | Kontras formal (B2). |
| 19 | Concession: even though / however / nonetheless | Konsesi tingkat lanjut. |
| 20 | Reported speech: backshift & reporting verbs lanjut | "admitted/denied/suggested + -ing" (B2). |
| 21 | Verb patterns: verb + object + to-infinitive/-ing lanjut | Pola kompleks (persuade/allow/let). |
| 22 | so/such...that (result clauses) | Klausa hasil (B2). |
| 23 | Determiners: all/both/whole/each/every nuansa | Distribusi & totalitas. |
| 24 | Future in the past (was going to / would) | Rencana lampau yang tak terjadi (B2). |
| 25 | Emphasis with auxiliary do (I do believe...) | Penekanan emfatik. |
| 26 | Comparatives lanjut: far/considerably/slightly + nuansa | Derajat perbandingan presisi. |
| 27 | Conditional alternatives: unless/provided that/as long as | Pengganti "if" (B2). |
| 28 | Subjunctive dasar: suggest/insist that + base form | "I suggest he go" (awal subjunctive, B2/C1). |
| 29 | Hedging dasar: tend to/seem to/appear to | Pelunakan klaim (jembatan akademik C1). |
| 30 | Review: register & complex sentence building | Konsolidasi B2. |

> **Non-overlap check B2:** Conditional B2 = **mixed** (B1 sudah Type 0–3 "murni"). Passive B2 = **reporting/impersonal** (B1 hanya perfect/future). Inversion & cleft **diperkenalkan ringan** di B2 lalu **diperdalam di C1** — pembagian sengaja: B2 = pengenalan emphasis, C1 = penguasaan penuh. Subjunctive & hedging **dimulai dasar** di B2, **diperdalam** di C1.

### 5.5 LEVEL C1 (Advanced) — RISET BARU, NON-OVERLAPPING

Rationale grup: C1 (≈CAE) = **inversi penuh**, **cleft & fronting**, **nominalisation**, **ellipsis & substitution**, **subjunctive/unreal past lanjut**, **discourse markers akademik**, **modal nuansa halus**. British Council C1 mengkonfirmasi cluster ini (cleft, inversion, all passive forms, despite/whereas, ellipsis).

| Day | Topik | Rationale (1 baris) |
|---|---|---|
| 1 | Inversion after negative adverbials (Never have I...) | Inversi formal penuh (British Council C1). |
| 2 | Inversion in conditionals (Had I known...) | "Were I to.../Should you need..." (C1). |
| 3 | Inversion after so/such/only (Only then did...) | Inversi penekanan (CAE). |
| 4 | Cleft sentences lanjut (All I want is.../The reason why...) | Emphasis penuh (lebih dalam dari B2). |
| 5 | Fronting & marked word order | Memajukan elemen untuk efek (C1). |
| 6 | Nominalisation (the failure of.../an increase in...) | Gaya akademik padat (British Council C1). |
| 7 | Ellipsis (leaving out words) | Menghindari pengulangan (British Council C1). |
| 8 | Substitution (so/such/one/do so) | "I think so" / "do so" (C1). |
| 9 | this/that/such/so untuk kohesi teks | Referensi antar-kalimat (British Council C1). |
| 10 | Subjunctive & unreal past lanjut (It's time you.../I'd rather you...) | Unreal past struktur tinggi (CAE). |
| 11 | Wish/If only lanjut + would rather/sooner | Nuansa pengandaian (C1). |
| 12 | Modal nuance: may well/might as well/could do with | Idiom modal halus (C1). |
| 13 | Advanced passives (all forms review + get-passive nuance) | Penguasaan penuh passive (British Council C1). |
| 14 | Impersonal reporting (It is widely believed...) | Objektivitas akademik (C1). |
| 15 | Participle clauses lanjut (perfect & passive participle) | "Having been told,..." (C1). |
| 16 | Relative clauses lanjut (prepositional: in which/of whom) | Klausa relatif formal (CAE). |
| 17 | Discourse markers akademik (insofar as/by virtue of) | Penanda wacana tingkat tinggi (C1). |
| 18 | Concession lanjut (much as/whereas/albeit) | Kontras canggih (British Council C1). |
| 19 | Conditional alternatives lanjut (but for/were it not for) | Pengganti "if" formal (C1). |
| 20 | Causative & complex have/get + nuance | Kausatif lanjut. |
| 21 | Future forms nuance (be to/be about to/be on the verge of) | Future formal & idiomatik (C1). |
| 22 | Hedging & cautious language lanjut (it would appear that...) | Kehati-hatian akademik (C1). |
| 23 | Emphasis with auxiliaries & intensifiers (do/very much/indeed) | Penekanan presisi. |
| 24 | Comparatives nuance (no less than/all the more) | Perbandingan idiomatik (C1). |
| 25 | Verb patterns lanjut (verb + that-clause vs -ing nuance) | Pola verb tingkat tinggi. |
| 26 | Adverb position for emphasis & meaning shift | Posisi adverb mengubah makna (C1). |
| 27 | Conjunctions of contrast/result lanjut (hence/thereby/whereby) | Penghubung formal (CAE). |
| 28 | Articles nuance (generic/idiomatic/zero article patterns) | Artikel tingkat lanjut (sering masih salah di C1). |
| 29 | Idiomatic structures & collocational grammar | Tata bahasa kolokasional (C1). |
| 30 | Review: cohesion, register & academic style | Konsolidasi C1. |

> **Non-overlap check C1:** Inversion & cleft **diperdalam penuh** (B2 hanya kenalkan 1–2 pola). Nominalisation, ellipsis, substitution, discourse markers akademik **baru muncul di C1** — tidak ada di level bawah. Passive C1 = **review semua bentuk + nuance** (penguasaan, bukan pengenalan).

### 5.6 LEVEL C2 (Mastery) — RISET + EKSTRAPOLASI TERJUSTIFIKASI

Rationale grup: Banyak sumber CEFR menyatakan **C2 ≠ struktur grammar baru** — C2 = **presisi, nuansa, register, craft retoris, idiomatisitas** atas struktur yang sudah dikuasai (lihat §5.7). Karena itu C2 kita berfokus pada **penghalusan, ambiguitas terkontrol, gaya, dan tata bahasa pragmatik** — bukan 30 struktur baru. Ini ekstrapolasi sah dari prinsip "C2 = mastery", konsisten dengan reframe C2 di prd_user.md §5.6 ("mempertahankan Mastery", bukan "naik level").

| Day | Topik | Rationale (1 baris) |
|---|---|---|
| 1 | Rhetorical fronting & marked structures (craft) | Memilih urutan untuk efek retoris, bukan sekadar benar. |
| 2 | Inversion for stylistic effect (review + nuance) | Inversi sebagai pilihan gaya (C2 craft). |
| 3 | Advanced cleft & pseudo-cleft for emphasis nuance | Memilih cleft yang paling pas konteks. |
| 4 | Subjunctive nuance (lest/be it/so be it/come what may) | Subjunctive idiomatik tingkat tinggi. |
| 5 | Litotes & understatement (not unlike/no small feat) | Pernyataan halus negatif-ganda (C2 register). |
| 6 | Hedging & boosting precision (arguably/conceivably) | Mengkalibrasi derajat keyakinan presisi. |
| 7 | Ellipsis & substitution lanjut (gapping, stripping) | Penghilangan kompleks untuk kepadatan. |
| 8 | Nominalisation for density & objectivity (review + craft) | Gaya akademik padat tingkat C2. |
| 9 | Cohesion & reference chains lanjut | Rantai referensi panjang antar-paragraf. |
| 10 | Discourse markers (native conversational: if anything/for what it's worth) | Penanda percakapan native (prd §5.6 C2). |
| 11 | Pragmatic softening & politeness strategies | Tata bahasa kesopanan native. |
| 12 | Emphatic & concessive structures nuance (granted that/that said) | Konsesi percakapan halus. |
| 13 | Modal nuance high (would have it that/be that as it may) | Idiom modal langka. |
| 14 | Conditional idioms & fixed unreal expressions | "If anything were to.../had it not been for". |
| 15 | Advanced passive & impersonal style nuance | Memilih passive untuk nada, bukan aturan. |
| 16 | Complex noun phrases & embedded modification | Frasa nomina bertingkat (kepadatan C2). |
| 17 | Participle & verbless clauses for economy | Klausa tanpa verb untuk ringkas. |
| 18 | Register shifting (formal↔informal control) | Mengendalikan register sengaja (C2). |
| 19 | Idiomatic & collocational precision | Memilih kolokasi paling tepat konteks. |
| 20 | Tense & aspect for subtle meaning (narrative present, etc.) | Aspek untuk efek makna halus. |
| 21 | Marked vs unmarked structures (information packaging) | Mengemas informasi untuk fokus. |
| 22 | Anaphora & cataphora control | Referensi maju-mundur untuk kohesi. |
| 23 | Cohesive ellipsis in extended discourse | Penghilangan lintas-kalimat. |
| 24 | Subordination vs coordination for rhetorical effect | Memilih struktur klausa untuk ritme. |
| 25 | Intensification & downtoning nuance | Menaik-turunkan kekuatan klaim presisi. |
| 26 | Pragmatic implicature in grammar choice | Makna tersirat lewat pilihan struktur. |
| 27 | Stylistic word order & rhythm (prosody in writing) | Urutan kata untuk ritme/aliran. |
| 28 | Native-like fixed expressions & sentence stems | Frame kalimat native siap pakai. |
| 29 | Error-spotting at the margins (subtle slips C2) | Mendeteksi kesalahan halus penutur mahir. |
| 30 | Review: precision, nuance & rhetorical control | Konsolidasi Mastery. |

> **Non-overlap check C2:** C2 **tidak** mengulang struktur baru — fokus **craft/nuance/register/pragmatik** atas struktur C1. Tiap topik dibingkai sebagai "memilih/menghaluskan", bukan "mempelajari struktur baru". **Catatan kejujuran:** ini lapisan paling ber-ekstrapolasi (lihat §5.7) karena sumber CEFR memang menyatakan C2 tidak punya inventaris struktur baru.

### 5.7 Ringkasan Kuantitatif: Riset vs Ekstrapolasi (150 topik baru A2–C2)

| Level | Topik | Mayoritas dari sumber langsung (EGP/Cambridge/BC/GSE) | Ekstrapolasi terjustifikasi |
|---|---|---|---|
| A2 | 30 | ~28 (mapping A2 sangat konvergen) | ~2 (urutan/pengelompokan) |
| B1 | 30 | ~28 (PET/EGP B1 konvergen kuat) | ~2 |
| B2 | 30 | ~26 (FCE/EGP B2 kuat; cleft/subjunctive di-split B2/C1) | ~4 |
| C1 | 30 | ~25 (CAE/BC C1 kuat; nuance items extrapolated) | ~5 |
| C2 | 30 | ~8 (sumber: "C2 = no new grammar, fokus nuance") | ~22 (craft/nuance/register) |
| **Total** | **150** | **~115 (≈77%)** | **~35 (≈23%)** |

**Ringkasan:** ~77% (≈115/150) topik baru ber-anchor langsung ke sumber CEFR otoritatif; ~23% (≈35/150) adalah ekstrapolasi terjustifikasi — **terkonsentrasi di C2** (22 dari 35), karena framework CEFR sendiri menyatakan C2 tidak menambah struktur grammar baru, hanya menuntut presisi/nuansa atas struktur yang ada.

### 5.8 Day 31 — Placement Test (Grammar) per level

Format baku (prd_user.md §4.3): 10–15 soal, format = **koreksi kalimat / pilih bentuk grammar tepat / lengkapi kalimat**, scope = **Day 1–30 level itu** (bukan struktur baru), output = score + rekomendasi ("Lanjut ke level berikutnya" / "Ulangi topik X"). Bisa diulang kapan saja. Setiap soal salah sebaiknya bisa ditelusuri balik ke Day asalnya supaya rekomendasi spesifik.

---

## 🛠️ 6. TEMPLATE MASTER PROMPT — GRAMMAR (SEMUA LEVEL)

Satu template untuk semua day, semua level. Variabel diisi per-day. **Sudah lolos RULE 1–6** prompt_recommendation.md (perhitungan di §6.3). Mekanisme = prd_user.md §4.3 (penjelasan grammar + 5 contoh + 3 speaking Q + speaking mode + Repeat After Me). **TIDAK** mengandung BOW/Writing Challenge/Mode Cerita (itu milik Vocab).

### 6.1 Template (raw — siap di-encode)

```
Topik: {TOPIC_NAME}
Panggil aku {SAPAAN} {PANGGILAN}.
Level bahasa Inggrisku: {LEVEL} ({LEVEL_NAME}).
Kamu Kak Ara, personal AI Coach kamu, dari Inggrisin Yuk. Tugasmu menjelaskan grammar dan melatihku speaking di Level {LEVEL} ({LEVEL_NAME}). Fokus: pola kalimat, cara pakai saat speaking sehari-hari, contoh alami.
Gaya: sopan, ramah, humble — tunjukkan lewat ngobrol, jangan sebut diri seru/asyik. {LANG_RULE} Pakai emoji secukupnya. Verb 2/3 -> tulis Verb 1 dalam kurung italic, contoh: went (go).
LANGKAH 1 — PENJELASAN GRAMMAR (otomatis di awal):
Jelaskan {GRAMMAR_POINT} gaya Gen Z/millennial, relate, bukan textbook. Pakai sub-bagian jika perlu. Istilah grammar kasih arti singkat dalam kurung italic, contoh: Singular (tunggal).
Lalu beri 5 contoh kalimat natural + terjemahan Indonesia (italic).
Lalu beri 3 pertanyaan speaking yang memaksaku pakai {GRAMMAR_POINT}:
{SPEAKING_Q1_EN}
{SPEAKING_Q1_ID}
{SPEAKING_Q2_EN}
{SPEAKING_Q2_ID}
{SPEAKING_Q3_EN}
{SPEAKING_Q3_ID}
Di akhir, suruh aku aktifkan mode suara lalu bilang "Let's start speaking!". Jangan tanya "siap?".
LANGKAH 2 — KOREKSI 8 LANGKAH (otomatis setelah aku jawab tiap pertanyaan):
1. Koreksi Struktur Kalimat — tabel 3 kolom: Kalimat User | Kesalahan Grammar | Kalimat Benar. Kalimat >=95% benar: tandai OK, kolom Kesalahan isi "-".
2. Analisa Penggunaan {GRAMMAR_POINT} — tepat (OK) / belum tepat (catatan) + penjelasan singkat kontrastif Bahasa Indonesia (kenapa salah dari kebiasaan Bahasa Indonesia).
3. Repeat After Me — WAJIB & blocking: minta ucap ulang kalimat koreksi. Jangan lanjut sampai aku kirim ulang. Masih salah -> koreksi + minta ulang.
4. Kolokasi & Chunk Alami — 1-2 chunk natural pakai {GRAMMAR_POINT} + contoh kalimat + arti (Indonesia). Cek jawaban user sudah natural atau masih terjemahan Bahasa Indonesia kaku.
5. Analisa Level CEFR — level grammar-ku saat ini + 1 tips konkret naik ke {NEXT_LEVEL}.
6. Pattern Drill (kondisional) — kalau aku macet/salah berulang: kasih 2-3 latihan pola kalimat sama, baru lanjut.
7. Transfer Challenge — minta aku buat 1 kalimat BARU pakai {GRAMMAR_POINT} di konteks berbeda dari pertanyaan tadi. Benar -> lanjut; salah -> koreksi singkat + minta ulang 1x.
8. Contoh Kalimat Natural — 2-3 kalimat natural pakai {GRAMMAR_POINT} yang bisa langsung dipakai ngobrol.
LANGKAH 3 — MODE SPEAKING (trigger: Let's start speaking!):
Ulangi 3 pertanyaan satu per satu, langsung ke pertanyaan, jangan basa-basi. Setelah aku jawab, jalankan KOREKSI 8 LANGKAH untuk jawaban itu (termasuk Repeat After Me wajib) sebelum pindah pertanyaan. Transkrip jawabanku ke Inggris, koreksi dalam Bahasa Indonesia. Lancar -> tambah 1 pertanyaan lanjutan. Macet -> Pattern Drill lalu ulangi. Pujian singkat hanya di akhir sesi, tulus, tidak berlebihan.
```

### 6.2 Variable Fields

| Field | Isi | Contoh (A1 Day 12) |
|---|---|---|
| `{TOPIC_NAME}` | Nama topik hari itu | `Verb 3 (Sudah Terjadi)` |
| `{SAPAAN}` / `{PANGGILAN}` | Dari profil user | `Kak` / `Arif` |
| `{LEVEL}` / `{LEVEL_NAME}` / `{NEXT_LEVEL}` | Kode + nama CEFR | `A1` / `Beginner` / `A2` |
| `{GRAMMAR_POINT}` | Struktur grammar inti (boleh > TOPIC_NAME) | `Verb 3 (Past Participle untuk Present Perfect)` |
| `{LANG_RULE}` | Instruksi bahasa per level (lihat §3.1) | A1: `Koreksi dan penjelasan dalam Bahasa Indonesia, tiap kalimat Inggris diberi terjemahan Indonesia.` |
| `{SPEAKING_Q1/2/3_EN}` | Pertanyaan Inggris dalam `**...**` | `**Have you ever eaten sushi?**` |
| `{SPEAKING_Q1/2/3_ID}` | Terjemahan dalam `*...*` | `*Pernahkah kamu makan sushi?*` |

**Variasi `{LANG_RULE}` per level (ringkas, hemat karakter):**
- **A1/A2:** `Koreksi dan penjelasan dalam Bahasa Indonesia, tiap kalimat Inggris diberi terjemahan.`
- **B1:** `Penjelasan & koreksi dalam Bahasa Indonesia, istilah grammar pakai English (Present Perfect, 2nd Conditional). Terjemahan hanya untuk 3 pertanyaan speaking & kalimat contoh.`
- **B2:** `Use English as the main language. Bahasa Indonesia hanya untuk catatan singkat di poin yang berisiko salah paham.`
- **C1/C2:** `All explanations, corrections, and feedback in English only. No Indonesian translation.` (+ C1/C2 tambah Self-Check Pertama sebelum langkah 1 — lihat §3.2.)

### 6.3 Estimasi Ukuran & Audit RULE 1–6

Dihitung dengan template **terisi penuh nilai A1 Day 12** (worst-case A1 karena terjemahan penuh):

| Metrik | Hasil | Batas | Status |
|---|---|---|---|
| Raw chars (terisi) | **~3.039** *(+300 setelah Kolokasi & Transfer Challenge)* | < 3.200 | ✅ AMAN |
| URL chars (aktual `urllib.quote`) | **~4.350** *(estimasi; level B1+ lebih pendek)* | < 4.500 | ✅ AMAN (catatan: di atas 4.000 "sangat aman" untuk A1 worst-case, tapi masih di bawah batas keras 4.500) |
| Estimasi formula `30 + raw×1.42` | **~4.346** | < 4.500 | ✅ konsisten |
| Blank lines internal | 0 (hanya trailing `\n`) | 0 | ✅ RULE 2 |
| Separator `---` | 0 | 0 | ✅ RULE 2 |
| Header behavior | 2 baris ringkas | 2 baris | ✅ RULE 3 |
| Instruksi per-langkah | Keyword/format singkat | keyword | ✅ RULE 4 |
| Emoji di teks prompt | 0 | 0 | ✅ RULE 5 |
| Differentiator dipertahankan | Persona Kak Ara, Analisa CEFR, koreksi L1-contrastive + Metalinguistic (Lyster & Ranta), 3 speaking Q, Repeat After Me, Kolokasi & Chunk Alami, Transfer Challenge (Lightbown TAP), adaptivitas eksplisit | — | ✅ RULE 6 |

> **Catatan budget (setelah update 8 Langkah):** A1 worst-case (~4.350 URL) masih di bawah batas keras 4.500 — **AMAN**. Untuk level B1+ (`{LANG_RULE}` English ringkas, terjemahan ID dikurangi), URL akan jauh lebih rendah. Jika content team menginginkan buffer "sangat aman" (< 4.000) di A1, persingkat step 7 Transfer Challenge atau hapus step 8 Contoh Kalimat Natural.

---

## ✅ 7. ATURAN BAKU IMPLEMENTASI — WAJIB SEBELUM MENULIS DAY GRAMMAR BARU

Checklist tunggal (*single source of truth*) supaya tiap Day Grammar (semua level) konsisten. **Baca ini sebelum menulis materi Day baru** — jangan menebak.

### 7.1 Persona & Bahasa (tidak berubah antar Day)
- [ ] Nama AI = **Kak Ara**, personal AI Coach dari Inggrisin Yuk. Tunjukkan personality lewat gaya, jangan sebut diri "seru"/"asyik". Humble (rendah hati, tidak menggurui).
- [ ] Sapaan = `{SAPAAN} {PANGGILAN}` auto-fill dari profil, jangan diketik manual.
- [ ] `{LANG_RULE}` sesuai level (§3.1 / §6.2) — A1/A2 Indonesia, B1 hybrid, B2 English-dominant, C1/C2 full English.
- [ ] C1/C2: tambahkan Self-Check Pertama sebelum langkah 1 (§3.2).

### 7.2 Mekanisme (sesuai prd_user.md §4.3 — JANGAN ubah)
- [ ] LANGKAH 1 = penjelasan grammar (Gen Z style) + **5 contoh natural + terjemahan** + **3 pertanyaan speaking** yang memaksa pakai grammar target.
- [ ] Trigger speaking = **"Let's start speaking!"** (bukan "I'm ready to practice").
- [ ] Koreksi = **8 langkah** (§2.3): Koreksi Struktur → Analisa Grammar Target (kontrastif L1) → Repeat After Me (WAJIB blocking) → Kolokasi & Chunk Alami → Analisa CEFR → Pattern Drill (kondisional) → Transfer Challenge → Contoh Kalimat Natural.
- [ ] Repeat After Me (langkah 3️⃣) **WAJIB & blocking** — jangan dihilangkan saat memadatkan.
- [ ] Langkah 4️⃣ Kolokasi & Chunk: berikan 1-2 chunk natural dengan grammar target + cek naturalness jawaban user.
- [ ] Langkah 7️⃣ Transfer Challenge: minta 1 kalimat BARU di konteks berbeda — wajib ada untuk memastikan transfer ke real-world use.
- [ ] **JANGAN** impor Box of Words / Writing Challenge / Mode Cerita / 5W+1H / Frasa Siap Pakai sebagai langkah (itu modul Vocab).

### 7.3 Konten Topik
- [ ] Topik diambil dari kurikulum §5 untuk level itu — A1 verbatim PRD, A2–C2 dari §5.2–5.6.
- [ ] `{GRAMMAR_POINT}` = struktur inti yang benar (boleh lebih teknis dari nama topik display).
- [ ] 3 pertanyaan speaking **benar-benar memaksa** struktur target (tidak bisa dijawab tanpa memakainya).
- [ ] Koreksi kontrastif L1: cari 1–2 error paling umum pemula Indonesia untuk topik itu.
- [ ] Non-overlap: cek topik tidak mengulang materi level bawah (lihat catatan non-overlap §5).

### 7.4 URL-Safety (RULE 1–6)
- [ ] Tidak ada blank lines internal di string prompt.
- [ ] Tidak ada emoji di teks prompt (AI yang generate emoji di output).
- [ ] Hitung `url = 30 + raw × 1.42` → harus < 4.500 (idealnya < 4.000).
- [ ] Test klik link di browser sebelum deploy.

### 7.5 Tempat Plug-in di Codebase (mengikuti pola Vocab yang sudah ada)
- Source per level: `materi/<level>/grammar.md` (dokumentasi day-by-day, skeleton 6 sub-bagian seperti `materi/a1/vocab.md`) → lalu `materi/<level>/grammar_prompt.md` (versi tuned/padat siap encode).
- Encode sekali → `inggrisinyuk-app/lib/materi/grammar-<level>.ts` (array `GRAMMAR_A1_DAYS` dst, **pola file & helper sama dengan** `lib/materi/vocabulary-a1.ts` — jangan buat pola baru per modul, lihat CLAUDE.md §5).
- Render-time: helper `buildGrammarUrl()` / `buildGrammarPrompt()` setara `buildVocabUrl()` (precompute, 2× `.replace()`, tanpa `encodeURIComponent()` saat klik — architecture.md §6.3).
- UI: `inggrisinyuk-app/app/dashboard/[module]/page.tsx` sudah menangani modul lewat param `[module]` — Grammar tinggal nambah array day + helper, pola identik dengan Vocabulary.
- Progress: saat user klik link ChatGPT, tulis ke `topic_progress` (CLAUDE.md §4 — jangan andalkan `useState`).

---

## 🚀 8. NEXT STEPS

Dokumen ini (acuan) membuka pekerjaan lanjutan berikut, dikerjakan **per level** (jangan sekaligus 6 level):

1. **Validasi kurikulum A2–C2** dengan user/product owner — terutama lapisan C2 (ekstrapolasi tertinggi, §5.7). Konfirmasi sebelum menulis prompt.
2. **Tulis `materi/a1/grammar.md`** dulu (level paling siap — topik sudah final di PRD) mengikuti skeleton 6 sub-bagian (§2.1) dan ATURAN BAKU (§7). Pakai Template Master §6.
3. **Tuning → `materi/a1/grammar_prompt.md`** (versi padat siap encode), lalu encode ke `lib/materi/grammar-a1.ts` + helper `buildGrammarUrl()`.
4. **Sambungkan ke UI & progress** — tambah Grammar ke `app/dashboard/[module]/page.tsx` + tulis `topic_progress` saat klik.
5. **Ulangi A2 → B1 → B2 → C1 → C2** dengan pola yang sama, naikkan `{LANG_RULE}` & kedalaman per level (§3).
6. **Day 31 Placement Test Grammar** per level (§5.8) — soal dirotasi dari Day 1–30 level itu, telusur-balik ke Day asal untuk rekomendasi spesifik.

---

*Dokumen ACUAN — Grammar Analysis. Disusun 2026-06-26. Mekanisme mengikuti prd_user.md §4.3; constraint URL mengikuti prompt_recommendation.md RULE 1–6; kurikulum A2–C2 ter-riset CEFR (§4). A1 verbatim PRD, tidak diubah. Diperbarui 2026-06-27: Koreksi 6 Langkah diperkaya jadi 8 Langkah dengan Kolokasi & Chunk Alami (langkah 4️⃣, Lyster & Ranta 1997) dan Transfer Challenge (langkah 7️⃣, Lightbown 2008 TAP). URL worst-case A1: ~4.350 (masih di bawah batas keras 4.500).*
