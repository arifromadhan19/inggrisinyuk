import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Belajar jadi nggak ngebosenin karena bisa langsung praktik bareng AI. Materinya pas banget sama level aku.",
    name: "Dina Pratiwi",
    role: "Mahasiswa",
    initial: "D",
  },
  {
    quote:
      "Akhirnya berani ngomong bahasa Inggris! Feedback dari AI tutor bikin aku cepet sadar kesalahan dan langsung perbaiki.",
    name: "Rizky Hidayat",
    role: "Karyawan Swasta",
    initial: "R",
  },
  {
    quote: "Sekali bayar, akses selamanya. Worth banget buat yang mau serius belajar tanpa ribet langganan bulanan.",
    name: "Sari Lestari",
    role: "Fresh Graduate",
    initial: "S",
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-balance text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Apa Kata Mereka
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-1" aria-label="Rating 5 dari 5 bintang">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-card-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {t.initial}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-card-foreground">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
