import { AdminLoginForm } from "@/components/admin/admin-login-form"

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-[400px]">
        <header className="mb-6 flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-primary">Inggrisin Yuk</h1>
          <p className="text-sm text-muted-foreground">Admin Panel</p>
        </header>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <AdminLoginForm />
        </div>
      </div>
    </main>
  )
}
