export interface AdminDTO {
  id: string
  email: string
  role: string
}

export function toAdminDTO(admin: { id: string; email: string; role: string }): AdminDTO {
  return { id: admin.id, email: admin.email, role: admin.role }
}
