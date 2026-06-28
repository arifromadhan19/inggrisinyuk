import Link from "next/link"
import { db } from "@/lib/db"
import type { Prisma } from "@prisma/client"

const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"]

export default async function AdminUsersPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; status?: string; level?: string; includeDeleted?: string }>
}) {
  const { q = "", status = "", level = "", includeDeleted = "" } = await searchParams
  const showDeleted = includeDeleted === "1"

  const where: Prisma.UserWhereInput = {}
  if (q.trim()) {
    where.OR = [
      { waNumber: { contains: q.trim() } },
      { panggilan: { contains: q.trim(), mode: "insensitive" } },
    ]
  }
  if (!showDeleted) where.isDeleted = false
  if (status === "active") where.isSuspended = false
  if (status === "suspended") where.isSuspended = true
  if (level) where.level = level

  const users = await db.user.findMany({ where, orderBy: { createdAt: "desc" } })

  const waNumbers = users.map((u) => u.waNumber).filter((wa): wa is string => wa !== null)
  const userIds = users.map((u) => u.id)
  const orders = users.length
    ? await db.transaction.findMany({
        where: { OR: [{ waNumber: { in: waNumbers } }, { userId: { in: userIds } }] },
        orderBy: { createdAt: "desc" },
      })
    : []
  const orderIdByUserId = new Map<string, string>()
  const orderIdByWaNumber = new Map<string, string>()
  for (const o of orders) {
    if (o.userId && !orderIdByUserId.has(o.userId)) orderIdByUserId.set(o.userId, o.orderId)
    if (o.waNumber && !orderIdByWaNumber.has(o.waNumber)) orderIdByWaNumber.set(o.waNumber, o.orderId)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">User Management</h1>
        <Link
          href="/admin/users/new"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          + Tambah User
        </Link>
      </div>

      <form className="flex flex-wrap items-end gap-3 rounded-xl border border-border bg-white p-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="q" className="text-xs font-semibold text-muted-foreground">
            Cari (WA / nama)
          </label>
          <input
            id="q"
            name="q"
            defaultValue={q}
            placeholder="08123456789 atau Arif"
            className="h-9 w-56 rounded-lg border border-border px-3 text-sm outline-none focus:border-primary"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="status" className="text-xs font-semibold text-muted-foreground">
            Status
          </label>
          <select
            id="status"
            name="status"
            defaultValue={status}
            className="h-9 rounded-lg border border-border px-3 text-sm"
          >
            <option value="">Semua</option>
            <option value="active">Aktif</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="level" className="text-xs font-semibold text-muted-foreground">
            Level
          </label>
          <select
            id="level"
            name="level"
            defaultValue={level}
            className="h-9 rounded-lg border border-border px-3 text-sm"
          >
            <option value="">Semua</option>
            {CEFR_LEVELS.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>
        </div>
        <label className="flex h-9 items-center gap-2 text-sm text-foreground">
          <input type="checkbox" name="includeDeleted" value="1" defaultChecked={showDeleted} />
          Tampilkan yang dihapus
        </label>
        <button type="submit" className="h-9 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground">
          Filter
        </button>
        {(q || status || level || showDeleted) && (
          <Link href="/admin/users" className="text-sm text-muted-foreground underline">
            Reset
          </Link>
        )}
      </form>

      <div className="overflow-hidden rounded-xl border border-border bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs font-semibold uppercase text-muted-foreground">
            <tr>
              <th className="px-4 py-3">WA / Email</th>
              <th className="px-4 py-3">Nama Panggilan</th>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Level</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Tanggal Daftar</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {users.map((u) => {
              const orderId = orderIdByUserId.get(u.id) ?? (u.waNumber ? orderIdByWaNumber.get(u.waNumber) : undefined)
              return (
                <tr key={u.id} className="border-t border-border">
                  <td className="px-4 py-3 font-medium text-foreground">{u.waNumber ?? u.email ?? "—"}</td>
                  <td className="px-4 py-3">
                    {u.sapaan} {u.panggilan}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{orderId ?? "—"}</td>
                  <td className="px-4 py-3">{u.level}</td>
                  <td className="px-4 py-3">
                    {u.isDeleted ? (
                      <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-600">
                        Dihapus
                      </span>
                    ) : u.isSuspended ? (
                      <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">
                        Suspended
                      </span>
                    ) : (
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                        Aktif
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{u.createdAt.toLocaleDateString("id-ID")}</td>
                  <td className="px-4 py-3 text-right">
                    <Link href={`/admin/users/${u.id}`} className="text-sm font-semibold text-primary hover:underline">
                      Detail
                    </Link>
                  </td>
                </tr>
              )
            })}
            {users.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">
                  Tidak ada user yang cocok.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
