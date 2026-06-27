import Link from "next/link"
import { CreateUserForm } from "@/components/admin/create-user-form"

export default function AdminCreateUserPage() {
  return (
    <div className="flex flex-col gap-5">
      <Link href="/admin/users" className="text-sm text-muted-foreground hover:text-foreground">
        ← Kembali ke User Management
      </Link>

      <div className="max-w-md rounded-xl border border-border bg-white p-6">
        <h1 className="text-lg font-bold text-foreground">Tambah User Baru</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Untuk akun yang dikonfirmasi manual (mis. transfer manual), bukan lewat checkout otomatis.
        </p>
        <div className="mt-5">
          <CreateUserForm />
        </div>
      </div>
    </div>
  )
}
