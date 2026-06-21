const problems = [
  {
    emoji: "😔",
    label: "Kursus Grup",
    badge: "Waktu sangat terbatas",
    badgeColor: "bg-red-100 text-red-700",
    cardColor: "border-red-100 bg-red-50/50",
    problem:
      "Waktu belajar dibagi 10–20 orang. Giliran ngomong cuma sebentar — latihan speaking tidak pernah cukup.",
  },
  {
    emoji: "😤",
    label: "Private Lesson",
    badge: "Mahal & tidak fleksibel",
    badgeColor: "bg-orange-100 text-orange-700",
    cardColor: "border-orange-100 bg-orange-50/50",
    problem:
      "Personal memang, tapi Rp 500.000–2.000.000 per bulan. Tidak semua orang sanggup bayar rutin jangka panjang.",
  },
  {
    emoji: "😴",
    label: "Aplikasi Belajar Biasa",
    badge: "Tidak ada hasil nyata",
    badgeColor: "bg-yellow-100 text-yellow-800",
    cardColor: "border-yellow-100 bg-yellow-50/50",
    problem:
      "Gamifikasi yang membosankan. Sudah belajar bertahun-tahun tapi masih tidak percaya diri saat harus ngomong.",
  },
]

export function PainPoints() {
  return (
    <section className="bg-muted/40 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-balance text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Kenapa cara lama tidak cukup?
        </h2>
        <p className="mt-4 text-center text-base text-muted-foreground sm:text-lg">
          Banyak cara belajar Bahasa Inggris — tapi kenapa hasilnya masih sama saja?
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {problems.map((item) => (
            <div key={item.label} className={`rounded-2xl border p-6 ${item.cardColor}`}>
              <div className="text-3xl">{item.emoji}</div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <h3 className="font-semibold text-foreground">{item.label}</h3>
                <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.problem}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8">
          <p className="text-base font-semibold text-primary sm:text-lg">
            💡 Inggrisin Yuk: Kak Ara, Personal AI Coach kamu, 100% fokus ke kamu — Rp 99.900 sekali bayar, akses selamanya.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Tidak ada giliran. Tidak ada jadwal. Mulai kapan saja, dari level mana saja.
          </p>
        </div>
      </div>
    </section>
  )
}
