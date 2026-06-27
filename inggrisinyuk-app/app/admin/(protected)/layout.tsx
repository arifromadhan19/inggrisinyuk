import Link from "next/link"
import { requireAdmin } from "@/lib/require-admin"
import { AdminLogoutButton } from "@/components/admin/admin-logout-button"

export default async function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
  const admin = await requireAdmin()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border bg-white px-4 py-3 sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="text-base font-bold text-primary">Inggrisin Yuk — Admin</span>
            <nav className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
              <Link href="/admin/users" className="hover:text-foreground">
                Users
              </Link>
              {admin.role === "super_admin" && (
                <Link href="/admin/audit-log" className="hover:text-foreground">
                  Audit Log
                </Link>
              )}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">
              {admin.email} · {admin.role}
            </span>
            <AdminLogoutButton />
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6">{children}</main>
    </div>
  )
}
