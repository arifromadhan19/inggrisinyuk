import { CreditCard, KeyRound, BookOpen, Bot } from "lucide-react"

const steps = [
  {
    icon: CreditCard,
    title: "Beli Akses",
    description: "Bayar QRIS Rp 99.900, akun langsung aktif",
  },
  {
    icon: KeyRound,
    title: "Login",
    description: "Masuk dengan nomor WhatsApp, tanpa password",
  },
  {
    icon: BookOpen,
    title: "Pilih Modul & Topik",
    description: "8 fitur, 6 level CEFR & lebih dari 1.000 topik",
  },
  {
    icon: Bot,
    title: "Belajar dengan Kak Ara",
    description: "Personal AI Coach kamu, langsung melatih dan memberi feedback",
  },
]

export function HowItWorks() {
  return (
    <section id="cara-kerja" className="bg-muted px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-balance text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Cara Kerja
        </h2>

        {/* Mobile — baris horizontal ringkas dengan timeline vertikal */}
        <div className="mt-8 flex flex-col gap-6 md:hidden">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex items-start gap-4">
              {index < steps.length - 1 && (
                <span className="absolute left-6 top-12 h-6 w-px bg-border" aria-hidden="true" />
              )}
              <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <step.icon className="size-5" aria-hidden="true" />
                <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                  {index + 1}
                </span>
              </div>
              <div className="pt-1">
                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-0.5 text-pretty text-sm leading-snug text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop — stepper horizontal dengan connecting line */}
        <div className="relative mt-12 hidden md:grid md:grid-cols-4 md:gap-6">
          <div className="absolute left-[12.5%] right-[12.5%] top-7 h-px bg-border" aria-hidden="true" />
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary ring-8 ring-muted">
                <step.icon className="size-6" aria-hidden="true" />
                <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mx-auto mt-1.5 max-w-[200px] text-pretty text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
