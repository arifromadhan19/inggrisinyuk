import { CreditCard, KeyRound, BookOpen, Bot } from "lucide-react"

const steps = [
  {
    icon: CreditCard,
    title: "Beli Akses",
    description: "Bayar QRIS Rp 99.000, akun langsung aktif",
  },
  {
    icon: KeyRound,
    title: "Login",
    description: "Masuk dengan nomor WhatsApp, tanpa password",
  },
  {
    icon: BookOpen,
    title: "Pilih Modul & Topik",
    description: "7 fitur, 6 level CEFR, 30 topik per level",
  },
  {
    icon: Bot,
    title: "Belajar di ChatGPT",
    description: "AI tutor Kak Arif membimbing langsung",
  },
]

export function HowItWorks() {
  return (
    <section id="cara-kerja" className="bg-muted px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-balance text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Cara Kerja
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <step.icon className="size-7" aria-hidden="true" />
                </div>
                <span className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
