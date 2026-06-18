import { ArrowLeft } from "lucide-react"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-[400px]">
        <a
          href="/"
          className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          Kembali
        </a>

        <header className="mb-6 flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-primary">Inggrisin Yuk</h1>
          <p className="text-sm text-muted-foreground">Belajar Bahasa Inggris dengan AI</p>
        </header>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
