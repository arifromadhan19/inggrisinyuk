import "dotenv/config"
import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import bcrypt from "bcryptjs"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const db = new PrismaClient({ adapter })

const SEED_USERS = [
  { waNumber: "628123456789", panggilan: "Arif", sapaan: "Kak", level: "A1", levelName: "Beginner", avatar: "robot_03.png" },
  { waNumber: "123", panggilan: "TestA", sapaan: "Kak", level: "A1", levelName: "Beginner", avatar: "robot_01.png" },
  { waNumber: "124", panggilan: "TestB", sapaan: "Kak", level: "B1", levelName: "Intermediate", avatar: "robot_02.png", placementTestDone: true, placementTotalCorrect: 28 },
  { waNumber: "125", panggilan: "TestC", sapaan: "Kak", level: "A1", levelName: "Beginner", avatar: "robot_04.png", dismissedPlacementTest: true },
]

const SEED_TRANSACTIONS = [
  { orderId: "INY-20260101-0001", waNumber: "628123456789", status: "success" },
]

const DEV_ADMIN_PASSWORD = "admin123"

const SEED_ADMINS = [
  { email: "admin@inggrisinyuk.ai", role: "super_admin" },
  { email: "cs@inggrisinyuk.ai", role: "cs" },
]

async function main() {
  const userByWaNumber = new Map<string, { id: string }>()
  for (const user of SEED_USERS) {
    const created = await db.user.upsert({
      where: { waNumber: user.waNumber },
      create: user,
      update: user,
    })
    userByWaNumber.set(user.waNumber, created)
  }

  for (const txn of SEED_TRANSACTIONS) {
    await db.transaction.upsert({
      where: { orderId: txn.orderId },
      create: { ...txn, userId: userByWaNumber.get(txn.waNumber)?.id },
      update: { ...txn, userId: userByWaNumber.get(txn.waNumber)?.id },
    })
  }

  const passwordHash = await bcrypt.hash(DEV_ADMIN_PASSWORD, 10)
  for (const admin of SEED_ADMINS) {
    await db.admin.upsert({
      where: { email: admin.email },
      create: { ...admin, passwordHash },
      update: { role: admin.role },
    })
  }

  console.log(`Seed admin dev-only — password untuk semua admin: "${DEV_ADMIN_PASSWORD}". GANTI sebelum production.`)
}

main()
  .then(() => db.$disconnect())
  .catch(async (err) => {
    console.error(err)
    await db.$disconnect()
    process.exit(1)
  })
