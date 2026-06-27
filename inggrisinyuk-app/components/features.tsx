import { Target, BookMarked, PenLine, Mic, Ear, Drama, Star, Briefcase } from "lucide-react"

const features = [
  {
    icon: Target,
    name: "Placement Test",
    description: "Cari tahu level bahasa Inggrismu dulu",
    iconColor: "text-slate-600",
    iconBg: "bg-slate-100",
  },
  {
    icon: BookMarked,
    name: "Vocabulary",
    description: "Kosakata fungsional + Writing & Speaking Challenge",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    icon: PenLine,
    name: "Grammar",
    description: "Grammar praktis yang langsung bisa dipakai",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100",
  },
  {
    icon: Mic,
    name: "Speaking",
    description: "Latihan speaking dengan feedback AI langsung",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-100",
  },
  {
    icon: Ear,
    name: "Listening",
    description: "Latih pemahaman dari cerita bahasa Inggris",
    iconColor: "text-violet-600",
    iconBg: "bg-violet-100",
  },
  {
    icon: Drama,
    name: "Roleplay Practice",
    description: "Simulasi percakapan nyata dengan AI",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
  },
  {
    icon: Briefcase,
    name: "Professional English",
    description: "Email profesional, presentasi, job interview, negosiasi, dan meeting",
    iconColor: "text-cyan-700",
    iconBg: "bg-cyan-100",
  },
]

export function Features() {
  return (
    <section id="fitur" className="bg-background px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-balance text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          8 Fitur Unggulan
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md sm:p-6"
            >
              <div className={`flex size-12 items-center justify-center rounded-xl ${feature.iconBg}`}>
                <feature.icon className={`size-6 ${feature.iconColor}`} aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-card-foreground sm:text-lg">{feature.name}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}

          {/* Latihan Bebas feature */}
          <div className="relative rounded-2xl border border-violet-200 bg-violet-50 p-5 transition-shadow hover:shadow-md sm:p-6">
            <div className="flex size-12 items-center justify-center rounded-xl bg-violet-200">
              <Star className="size-6 text-violet-500" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-violet-950 sm:text-lg">Latihan Bebas</h3>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-violet-900/70">
              Baca Bareng Kak Ara · Pronunciation Challenge · Vocab Mission
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
