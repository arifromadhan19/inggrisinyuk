# First Placement Test — Inggrisin Yuk

> Tes penempatan awal untuk menentukan level CEFR pengguna (A1–C2) sebelum memulai
> perjalanan belajar. Dirancang khusus untuk pembelajar **Indonesia**.

---

## 1. Ringkasan & Dasar Riset

### 1.1 Tujuan
Menempatkan pengguna baru ke salah satu dari 6 level CEFR (A1, A2, B1, B2, C1, C2)
secepat & seakurat mungkin, lalu mengarahkan mereka ke materi yang sesuai. Hasilnya
disimpan sebagai `user.level` + `user.levelName` dan `user.placementTestDone = true`.

### 1.2 Benchmark dari tes standar dunia
Hasil riset terhadap tes penempatan terkemuka:

| Tes | Yang diukur | Jumlah soal | Durasi | Output |
|-----|-------------|-------------|--------|--------|
| **Oxford Online Placement** | Use of English + Listening (adaptif/IRT) | bervariasi | 45–60 mnt | skor /120 → Pre-A1…C2 |
| **Oxford Spotlight** | Reading 20, Listening 20, Grammar 20, Vocab 20, Writing 2, Speaking 3 | ±85 | 60+ mnt | A1–C2 |
| **EF SET Quick Check** | Grammar + Vocab | 20 | 15 mnt | A / B / C (kasar) |
| **EF SET Certificate** | Reading + Listening (adaptif) | bervariasi | 50 mnt | 0–100 → A1–C2 |

**Pelajaran desain:**
- Tes adaptif (IRT) bisa memangkas panjang tes hingga **50%** tanpa mengurangi reliabilitas.
- Untuk penempatan kasar yang cepat, **20 soal/15 menit** sudah cukup (EF Quick Check) tetapi hanya menghasilkan 3 band (A/B/C).
- Untuk membedakan **6 level penuh** dengan andal tanpa mesin adaptif, dibutuhkan **lebih banyak soal yang terdistribusi merata per level** dan diurutkan dari mudah → sulit.

### 1.3 Keputusan desain untuk Inggrisin Yuk (MVP tanpa backend)
Karena belum ada mesin adaptif/IRT, kita pakai **tes linear bertingkat** (graded linear test):

| Parameter | Keputusan | Alasan |
|-----------|-----------|--------|
| **Jumlah soal** | **40** | Cukup untuk membedakan 6 level (≈6–7 soal/level) tetapi tidak melelahkan. Di antara EF Quick Check (20, terlalu kasar) dan Oxford penuh (85, terlalu panjang). |
| **Tipe soal** | **Pilihan ganda (4 opsi)** | 100% bisa di-grade otomatis tanpa backend/AI. Tidak perlu file audio. |
| **3 bagian** | Grammar/Use of English (24) · Vocabulary (8) · Reading (8) | Grammar + vocab paling kuat korelasinya dengan level CEFR & paling mudah dinilai. Reading menambah validitas. |
| **Durasi ideal** | **30 menit** (soft total timer) | 40 soal × ~45 detik = 30 menit. Lihat §5. |
| **Urutan** | Mudah → sulit (A1 dulu, C2 terakhir) | Memungkinkan skoring *ceiling* & menjaga rasa percaya diri pengguna di awal. |
| **Bahasa** | Instruksi & UI **Bahasa Indonesia**, soal **Bahasa Inggris** | Sesuai target pengguna. Glosa Indonesia di level rendah. |

### 1.4 Skala vokabulari per level (acuan Milton & Alexiou — untuk kalibrasi)
| Level | Perkiraan jumlah kata dikuasai |
|-------|-------------------------------|
| A1 | ~120–500 |
| A2 | 1.500–2.500 |
| B1 | 2.750–3.250 |
| B2 | 3.250–5.000 |
| C1 | 5.000–7.000 |
| C2 | 7.000–9.000 |

### 1.5 Fokus khusus pembelajar Indonesia
Riset kesalahan (error analysis) pembelajar Indonesia menunjukkan urutan kesalahan tersering.
Soal-soal **sengaja menyasar titik lemah ini** agar penempatan lebih tajam:

| Kesalahan | Frekuensi | Sebab (interferensi B. Indonesia) | Disasar di soal |
|-----------|-----------|-----------------------------------|-----------------|
| **Verb tense** | 33,8% | B. Indonesia tidak punya sistem tenses | Q5, Q10, Q13, Q16, Q24 |
| **Article (a/an/the)** | 17,5% | B. Indonesia tidak punya artikel | Q3 var, Q14, Reading |
| **Preposition** | 14,1% | Pemetaan preposisi berbeda ("by foot" ❌) | Q20, Q23, Q31 |
| **Subject-verb agreement** | 13,1% | Tidak ada konjugasi di B. Indonesia | Q1, Q2 |
| **False friends / collocation** | — | "join with us" ❌, "boring/bored" tertukar | Q26, Q28, Q29 |

---

## 2. Struktur Tes

```
PART 1 — Grammar & Use of English   24 soal   (4 soal × 6 level)   ~15 menit
PART 2 — Vocabulary                  8 soal                         ~5 menit
PART 3 — Reading Comprehension       8 soal   (2 teks)             ~10 menit
────────────────────────────────────────────────────────────────────────────
TOTAL                               40 soal                         30 menit
```

Distribusi soal per level CEFR (penting untuk skoring):

| Level | Nomor soal | Jumlah |
|-------|-----------|--------|
| A1 | 1, 2, 3, 4, 25 | 5 |
| A2 | 5, 6, 7, 8, 26, 33, 34 | 7 |
| B1 | 9, 10, 11, 12, 27, 28, 35, 36 | 8 |
| B2 | 13, 14, 15, 16, 29, 30, 37, 38 | 8 |
| C1 | 17, 18, 19, 20, 31, 39, 40 | 7 |
| C2 | 21, 22, 23, 24, 32 | 5 |

---

## 3. Bank Soal (dengan Kunci Jawaban)

> Tanda ✅ = jawaban benar. Kode level di akhir tiap soal = target CEFR.

### PART 1 — Grammar & Use of English

**A1**
1. She ___ a teacher.
   - A) am  B) is ✅  C) are  D) be  — `[A1]`
2. I ___ coffee every morning.
   - A) drink ✅  B) drinks  C) drinking  D) drank  — `[A1]`
3. ___ you have a pen?
   - A) Does  B) Do ✅  C) Are  D) Is  — `[A1]`
4. There ___ two books on the table.
   - A) is  B) am  C) are ✅  D) be  — `[A1]`

**A2**
5. Yesterday, we ___ to the beach.
   - A) go  B) goes  C) went ✅  D) going  — `[A2]` *(past simple)*
6. She is ___ than her sister.
   - A) tall  B) taller ✅  C) tallest  D) more tall  — `[A2]` *(comparative)*
7. You ___ smoke here. This is a hospital.
   - A) mustn't ✅  B) don't  C) aren't  D) not  — `[A2]` *(modal: prohibition)*
8. While I ___ TV, the phone rang.
   - A) watch  B) watched  C) was watching ✅  D) watching  — `[A2]` *(past progressive)*

**B1**
9. If it rains tomorrow, we ___ stay at home.
   - A) will ✅  B) would  C) are  D) did  — `[B1]` *(1st conditional)*
10. I have ___ in Jakarta since 2010.
    - A) live  B) lived ✅  C) living  D) lives  — `[B1]` *(present perfect + since)*
11. She told me that she ___ tired.
    - A) is  B) was ✅  C) are  D) been  — `[B1]` *(reported speech)*
12. This is the man ___ car was stolen.
    - A) who  B) which  C) whose ✅  D) whom  — `[B1]` *(relative pronoun)*

**B2**
13. If I ___ known, I would have helped you.
    - A) have  B) had ✅  C) would  D) has  — `[B2]` *(3rd conditional)*
14. The report ___ by the team last week.
    - A) was written ✅  B) wrote  C) has written  D) writes  — `[B2]` *(passive)*
15. You ___ have told me earlier; now it's too late.
    - A) should ✅  B) must  C) can  D) will  — `[B2]` *(should have + past)*
16. By the time we arrived, the movie ___ already started.
    - A) has  B) had ✅  C) was  D) have  — `[B2]` *(past perfect)*

**C1**
17. Not only ___ late, but he also forgot the documents.
    - A) he was  B) was he ✅  C) he is  D) is he  — `[C1]` *(inversion)*
18. ___ harder, she would have passed the exam.
    - A) If she studied  B) Had she studied ✅  C) She had studied  D) Did she study  — `[C1]` *(inverted 3rd conditional)*
19. I'd rather you ___ smoke in here.
    - A) don't  B) didn't ✅  C) not  D) won't  — `[C1]` *(unreal subjunctive)*
20. The new policy will come ___ effect next month.
    - A) into ✅  B) in  C) on  D) to  — `[C1]` *(collocation/preposition)*

**C2**
21. ___ be any problems, please contact us immediately.
    - A) Should there ✅  B) If there  C) There should  D) Were there  — `[C2]` *(formal inversion conditional)*
22. Little ___ that he was being watched.
    - A) he knew  B) did he know ✅  C) he did know  D) knew he  — `[C2]` *(negative inversion)*
23. The decision was, ___ all accounts, deeply controversial.
    - A) by ✅  B) on  C) in  D) for  — `[C2]` *(idiom "by all accounts")*
24. Hardly ___ the meeting begun when the fire alarm went off.
    - A) had ✅  B) has  C) did  D) was  — `[C2]` *(Hardly … when + inversion)*

### PART 2 — Vocabulary

25. The opposite of "big" is ___.
    - A) small ✅  B) tall  C) long  D) short  — `[A1]`
26. I'm really ___ about the trip. I can't wait!
    - A) boring  B) bored  C) excited ✅  D) exciting  — `[A2]` *(false-friend trap: -ed/-ing)*
27. Please ___ off your shoes before entering.
    - A) take ✅  B) put  C) get  D) bring  — `[B1]` *(phrasal verb)*
28. She has a great ___ of humour.
    - A) sense ✅  B) feeling  C) mind  D) view  — `[B1]` *(collocation)*
29. The factory had to ___ down due to financial problems.
    - A) shut ✅  B) cut  C) put  D) turn  — `[B2]` *(phrasal verb)*
30. His argument was very ___; nobody could disagree.
    - A) convincing ✅  B) convinced  C) convince  D) convincingly  — `[B2]` *(word form)*
31. The government introduced measures to ___ the economic crisis.
    - A) tackle ✅  B) touch  C) treat  D) take  — `[C1]` *(collocation)*
32. The novel offers a ___ critique of modern society.
    - A) scathing ✅  B) scratching  C) scared  D) scaled  — `[C2]` *(advanced vocab)*

### PART 3 — Reading Comprehension

**Passage A** *(level ~A2–B1)*
> **Subject: New Library Opening Hours**
> Hi Sara,
> Thanks for your email. I'm writing to tell you about our new opening hours. From next
> Monday, the library will open at 8 a.m. and close at 9 p.m. on weekdays. On Saturdays,
> we open at 10 a.m. and close at 5 p.m. We are closed on Sundays.
> Also, you can now borrow up to 10 books at a time, instead of 5. If you return books
> late, you will pay a fine of Rp2.000 per day.
> Best,
> The City Library

33. What time does the library close on weekdays?
    - A) 8 a.m.  B) 5 p.m.  C) 9 p.m. ✅  D) 10 a.m.  — `[A2]`
34. How many books can a member borrow now?
    - A) 5  B) 10 ✅  C) 2  D) 8  — `[A2]`
35. What happens if you return a book late?
    - A) Nothing  B) You pay Rp2.000 per day ✅  C) You are banned  D) You pay Rp5.000  — `[B1]`
36. When is the library closed?
    - A) Saturdays  B) Weekdays  C) Sundays ✅  D) Mondays  — `[B1]`

**Passage B** *(level ~B2–C1)*
> Remote work, once considered a temporary response to global disruption, has now become
> a permanent feature of the modern workplace. While many employees praise the flexibility
> it offers, critics argue that it erodes the sense of community that physical offices once
> fostered. Studies suggest that although productivity has not declined, feelings of
> isolation among workers have risen sharply. Companies now face a delicate balancing act:
> how to preserve efficiency without sacrificing the human connections that drive long-term
> innovation.

37. According to the passage, remote work is now ___.
    - A) temporary  B) permanent ✅  C) declining  D) banned  — `[B2]`
38. What do critics say about remote work?
    - A) It increases salaries  B) It erodes the sense of community ✅  C) It reduces productivity  D) It is illegal  — `[B2]`
39. What has happened to productivity?
    - A) It has fallen sharply  B) It has not declined ✅  C) It has doubled  D) It is unknown  — `[C1]`
40. The phrase "a delicate balancing act" suggests companies must ___.
    - A) stop remote work entirely  B) manage two competing needs carefully ✅  C) hire more managers  D) ignore employee feelings  — `[C1]`

**Kunci jawaban ringkas:**
```
1-B  2-A  3-B  4-C  5-C  6-B  7-A  8-C  9-A  10-B
11-B 12-C 13-B 14-A 15-A 16-B 17-B 18-B 19-B 20-A
21-A 22-B 23-A 24-A 25-A 26-C 27-A 28-A 29-A 30-A
31-A 32-A 33-C 34-B 35-B 36-C 37-B 38-B 39-B 40-B
```

---

## 4. Sistem Skoring → Level CEFR

### 4.1 Metode utama: *Mastery / Ceiling* (paling akurat — direkomendasikan)
Pengguna ditempatkan di **level tertinggi yang ia kuasai**, dengan syarat semua level di
bawahnya juga dikuasai (≥60% benar per band). Begitu gagal di satu level, itulah "plafon"-nya.

**Ambang lulus per level (≥60% benar):**
| Level | Jumlah soal | Ambang lulus |
|-------|-------------|--------------|
| A1 | 5 | ≥ 3 benar |
| A2 | 7 | ≥ 4 benar |
| B1 | 8 | ≥ 5 benar |
| B2 | 8 | ≥ 5 benar |
| C1 | 7 | ≥ 4 benar |
| C2 | 5 | ≥ 3 benar |

**Algoritma:**
```
level = "A1"  (default minimal)
untuk tiap band dari A1 → C2:
    jika benar(band) >= ambang(band):
        level = band            // naik
    selain itu:
        berhenti                // plafon tercapai
hasil = level
```
> Jika band A1 sendiri gagal (< 3 benar) → tempatkan di **A1** (pemula murni / "Pre-A1 → mulai dari A1").

### 4.2 Metode alternatif: Total skor (paling mudah di-code)
Jika ingin implementasi paling sederhana, jumlahkan total benar (0–40) lalu petakan:

| Total benar | Level |
|-------------|-------|
| 0 – 7   | **A1** |
| 8 – 14  | **A2** |
| 15 – 22 | **B1** |
| 23 – 30 | **B2** |
| 31 – 36 | **C1** |
| 37 – 40 | **C2** |

> Metode total skor lebih kasar (mengabaikan *di level mana* jawaban benar), tetapi cukup
> untuk MVP. **Rekomendasi: gunakan metode Mastery (§4.1) karena lebih adil & akurat.**

### 4.3 Pemetaan ke `levelName` (dipakai di aplikasi)
```
A1 → Beginner
A2 → Elementary
B1 → Intermediate
B2 → Upper Intermediate
C1 → Advanced
C2 → Proficient
```

---

## 5. Waktu Ideal Pengerjaan

### Rekomendasi: **30 menit total**, tanpa timer per-soal.

**Dasar perhitungan:**
- 40 soal pilihan ganda × ~45 detik/soal = **30 menit** — sejalan dengan benchmark Oxford (45–60 mnt untuk ±2× soal) & EF (15 mnt untuk separuh soal).
- **Timer total (countdown), bukan per-soal.** Timer per-soal memicu kecemasan, khususnya bagi pengguna yang lebih tua atau kurang percaya diri — yang banyak di pasar Indonesia.

**Panduan waktu per bagian (saran, bukan paksaan):**
| Bagian | Soal | Saran waktu |
|--------|------|-------------|
| Part 1 — Grammar | 24 | 15 menit |
| Part 2 — Vocabulary | 8 | 5 menit |
| Part 3 — Reading | 8 | 10 menit |

**Aturan UX tambahan:**
- Tampilkan progress bar ("Soal 12 dari 40") agar pengguna tahu posisinya.
- Jika waktu habis → otomatis submit dengan jawaban yang sudah ada (soal kosong = salah).
- Tidak ada penalti tebakan (no negative marking) → dorong pengguna menjawab semua.
- Boleh kembali ke soal sebelumnya (review) selama waktu masih ada.

---

## 6. Catatan Implementasi (untuk halaman `/dashboard/placement-test`)

### 6.1 Struktur data soal (TypeScript)
```ts
interface PlacementQuestion {
  id: number
  part: "grammar" | "vocabulary" | "reading"
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2"
  passageId?: "A" | "B"          // hanya untuk reading
  question: string
  options: string[]              // 4 opsi
  answerIndex: number            // 0-based index jawaban benar
}

interface ReadingPassage {
  id: "A" | "B"
  title: string
  text: string
}
```

### 6.2 Fungsi skoring (metode Mastery §4.1)
```ts
const THRESHOLD: Record<string, number> = {
  A1: 3, A2: 4, B1: 5, B2: 5, C1: 4, C2: 3,
}
const ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"] as const

function scorePlacement(
  questions: PlacementQuestion[],
  answers: Record<number, number>   // questionId -> chosen index
): { level: string; correctByLevel: Record<string, number> } {
  const correctByLevel: Record<string, number> = {
    A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0,
  }
  for (const q of questions) {
    if (answers[q.id] === q.answerIndex) correctByLevel[q.level]++
  }
  let level = "A1"
  for (const lv of ORDER) {
    if (correctByLevel[lv] >= THRESHOLD[lv]) level = lv
    else break
  }
  return { level, correctByLevel }
}

const LEVEL_NAME: Record<string, string> = {
  A1: "Beginner", A2: "Elementary", B1: "Intermediate",
  B2: "Upper Intermediate", C1: "Advanced", C2: "Proficient",
}
```

### 6.3 Simpan hasil ke localStorage
```ts
const { level } = scorePlacement(QUESTIONS, answers)
const stored = JSON.parse(localStorage.getItem("iy_user")!)
const updated = {
  ...stored,
  level,
  levelName: LEVEL_NAME[level],
  placementTestDone: true,
}
localStorage.setItem("iy_user", JSON.stringify(updated))
// → redirect ke /dashboard, banner placement test otomatis hilang
```

### 6.4 Alur halaman
1. **Intro** — jelaskan: 40 soal, 30 menit, pilihan ganda, untuk menentukan level. Tombol "Mulai Tes".
2. **Tes** — 1 soal per layar (atau per bagian), progress bar, countdown 30:00, tombol Sebelumnya/Berikutnya.
3. **Submit** — manual ("Selesai") atau otomatis saat waktu habis.
4. **Hasil** — tampilkan level (mis. "Level kamu: B1 — Intermediate 🎉"), ringkasan benar per bagian, motivasi, tombol "Mulai Belajar".
5. Update localStorage & redirect ke dashboard.

---

## 7. Pengembangan Lanjutan (opsional, fase berikutnya)
- **Listening section** (butuh file audio + backend) — tambah 8 soal, ±10 menit, untuk validitas penuh.
- **Speaking/Writing** dengan penilaian AI (Kak Ara) — untuk produksi aktif, bukan hanya reseptif.
- **Adaptif (IRT)** saat backend siap — pangkas jumlah soal hingga 50% dengan akurasi setara.
- **Bank soal acak** — beberapa varian per level agar tes tidak bisa dihafal.
- **Kalibrasi empiris** — kumpulkan data jawaban nyata, hitung tingkat kesulitan & daya beda tiap soal, buang/revisi soal yang lemah.

---

## Sumber Riset
- [Oxford Online Placement Test — Oxford University Press](https://elt.oup.com/feature/global/oxford-online-placement/)
- [Oxford Placement Test — Wikipedia](https://en.wikipedia.org/wiki/Oxford_Placement_Test)
- [Oxford Spotlight — Oxford ELLT](https://oxfordellt.com/spotlight/)
- [EF SET explained — EF](https://www.ef.edu/english-tests/efset/)
- [EF SET Quick Check](https://www.ef.com/wwen/english-tests/efset/quick-english-check/)
- [English grammar CEFR level requirements — Tracktest](https://tracktest.eu/english-grammar-cef-level-requirements/)
- [CEFR Levels Explained — Nona Academy](https://www.nona.academy/post/cefr-levels-explained)
- [Vocabulary and the CEFR — Paul Nation / VUW](https://www.wgtn.ac.nz/lals/resources/paul-nations-resources/vocabulary-lists/vocabulary-cefr-and-word-family-size/vocabulary-and-the-cefr-docx)
- [Common grammatical mistakes made by Indonesian learners — Academia.edu](https://www.academia.edu/5595639/Common_grammatical_mistakes_made_by_Indonesian_learners)
- [Common Grammatical Errors Made by Indonesian Advanced Learners of English — ResearchGate](https://www.researchgate.net/publication/321288926_Common_Grammatical_Errors_Made_by_Indonesian_Advanced_Learners_of_English)
- [Online placement test based on Item Response Theory — arXiv](https://arxiv.org/pdf/1411.5225)
