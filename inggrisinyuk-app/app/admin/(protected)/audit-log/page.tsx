import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { requireAdmin } from "@/lib/require-admin"

export default async function AdminAuditLogPage() {
  const admin = await requireAdmin()
  if (admin.role !== "super_admin") redirect("/admin/users")

  const logs = await db.auditLog.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
    include: { admin: true, targetUser: true },
  })

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold text-foreground">Audit Log</h1>
      <div className="overflow-hidden rounded-xl border border-border bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs font-semibold uppercase text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Waktu</th>
              <th className="px-4 py-3">Admin</th>
              <th className="px-4 py-3">Aksi</th>
              <th className="px-4 py-3">Target User</th>
              <th className="px-4 py-3">Sebelum → Sesudah</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id} className="border-t border-border">
                <td className="px-4 py-3 text-muted-foreground">{log.createdAt.toLocaleString("id-ID")}</td>
                <td className="px-4 py-3">{log.admin.email}</td>
                <td className="px-4 py-3 font-medium">{log.action}</td>
                <td className="px-4 py-3">
                  {log.targetUser ? `${log.targetUser.sapaan} ${log.targetUser.panggilan}` : "—"}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  {JSON.stringify(log.before)} → {JSON.stringify(log.after)}
                </td>
              </tr>
            ))}
            {logs.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                  Belum ada aktivitas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
