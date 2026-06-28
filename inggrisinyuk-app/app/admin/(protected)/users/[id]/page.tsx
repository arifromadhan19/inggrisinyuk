import { notFound } from "next/navigation"
import Link from "next/link"
import { db } from "@/lib/db"
import { EditWaForm } from "@/components/admin/edit-wa-form"
import { SuspendButton } from "@/components/admin/suspend-button"
import { DeleteRestoreButton } from "@/components/admin/delete-restore-button"

export default async function AdminUserDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const user = await db.user.findUnique({
    where: { id },
    include: { placementTestResults: { orderBy: { takenAt: "desc" } } },
  })
  if (!user) notFound()

  const transaction = await db.transaction.findFirst({
    where: user.waNumber ? { OR: [{ userId: user.id }, { waNumber: user.waNumber }] } : { userId: user.id },
    orderBy: { createdAt: "desc" },
  })

  return (
    <div className="flex flex-col gap-5">
      <Link href="/admin/users" className="text-sm text-muted-foreground hover:text-foreground">
        ← Kembali ke User Management
      </Link>

      <div className="rounded-xl border border-border bg-white p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-lg font-bold text-foreground">
              {user.sapaan} {user.panggilan}
            </h1>
            <p className="text-sm text-muted-foreground">
              {user.waNumber ?? "—"} · {user.level} — {user.levelName}
            </p>
            {user.email && <p className="text-sm text-muted-foreground">{user.email}</p>}
          </div>
          {user.isDeleted ? (
            <span className="rounded-full bg-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-600">Dihapus</span>
          ) : user.isSuspended ? (
            <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700">Suspended</span>
          ) : (
            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">Aktif</span>
          )}
        </div>
        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
          <div>
            <dt className="text-xs text-muted-foreground">Order ID</dt>
            <dd className="font-mono font-medium text-foreground">{transaction?.orderId ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">Tanggal Daftar</dt>
            <dd className="font-medium text-foreground">{user.createdAt.toLocaleDateString("id-ID")}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">Last Active</dt>
            <dd className="font-medium text-foreground">
              {user.lastActiveAt ? user.lastActiveAt.toLocaleString("id-ID") : "—"}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">Placement Test</dt>
            <dd className="font-medium text-foreground">
              {user.placementTestDone ? `Sudah (${user.placementTotalCorrect ?? "-"}/40)` : "Belum"}
            </dd>
          </div>
        </dl>
      </div>

      <div className="rounded-xl border border-border bg-white p-5">
        <h2 className="text-sm font-bold text-foreground">Histori Placement Test</h2>
        {user.placementTestResults.length === 0 ? (
          <p className="mt-2 text-sm text-muted-foreground">Belum ada histori tes.</p>
        ) : (
          <table className="mt-3 w-full text-left text-sm">
            <thead className="text-xs font-semibold uppercase text-muted-foreground">
              <tr>
                <th className="py-1.5">Tanggal</th>
                <th className="py-1.5">Level Rekomendasi</th>
                <th className="py-1.5">Skor</th>
              </tr>
            </thead>
            <tbody>
              {user.placementTestResults.map((r) => (
                <tr key={r.id} className="border-t border-border">
                  <td className="py-2">{r.takenAt.toLocaleString("id-ID")}</td>
                  <td className="py-2">{r.levelRecommended}</td>
                  <td className="py-2">{r.totalCorrect}/40</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {user.isDeleted ? (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-sm font-bold text-foreground">User Ini Sudah Dihapus</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Dihapus pada {user.deletedAt?.toLocaleString("id-ID")}. Restore untuk mengaktifkan kembali akun ini.
          </p>
          <DeleteRestoreButton userId={user.id} isDeleted={user.isDeleted} />
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-3">
          {user.waNumber && (
            <div className="rounded-xl border border-border bg-white p-5">
              <h2 className="text-sm font-bold text-foreground">Edit Nomor WhatsApp</h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Untuk kasus user salah input WA saat checkout. Wajib verifikasi Order ID. Tercatat di Audit Log.
              </p>
              <EditWaForm userId={user.id} currentWaNumber={user.waNumber} />
            </div>
          )}
          <div className="rounded-xl border border-border bg-white p-5">
            <h2 className="text-sm font-bold text-foreground">Status Akun</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Suspend untuk blokir akses login tanpa menghapus data user.
            </p>
            <SuspendButton userId={user.id} isSuspended={user.isSuspended} />
          </div>
          <div className="rounded-xl border border-border bg-white p-5">
            <h2 className="text-sm font-bold text-foreground">Hapus User</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Soft delete — data tetap tersimpan dan bisa di-restore kapan saja.
            </p>
            <DeleteRestoreButton userId={user.id} isDeleted={user.isDeleted} />
          </div>
        </div>
      )}
    </div>
  )
}
