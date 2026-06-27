import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { getAdminSessionId } from "@/lib/admin-session"
import { toAdminDTO, type AdminDTO } from "@/lib/admin-types"

export async function requireAdmin(): Promise<AdminDTO> {
  const adminId = await getAdminSessionId()
  if (!adminId) redirect("/admin/login")

  const admin = await db.admin.findUnique({ where: { id: adminId } })
  if (!admin) redirect("/admin/login")

  return toAdminDTO(admin)
}

export async function requireAdminApi(): Promise<AdminDTO | null> {
  const adminId = await getAdminSessionId()
  if (!adminId) return null

  const admin = await db.admin.findUnique({ where: { id: adminId } })
  return admin ? toAdminDTO(admin) : null
}
