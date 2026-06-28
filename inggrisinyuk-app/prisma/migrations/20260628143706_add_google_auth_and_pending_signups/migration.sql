-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "amount" INTEGER NOT NULL DEFAULT 99000,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "flow" TEXT NOT NULL DEFAULT 'wa',
ADD COLUMN     "paid_at" TIMESTAMP(3),
ADD COLUMN     "payment_method" TEXT,
ADD COLUMN     "pending_signup_id" TEXT,
ADD COLUMN     "user_id" TEXT,
ADD COLUMN     "xendit_invoice_id" TEXT,
ALTER COLUMN "wa_number" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'pending';

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "google_sub" TEXT,
ALTER COLUMN "wa_number" DROP NOT NULL;

-- CreateTable
CREATE TABLE "pending_signups" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "google_sub" TEXT NOT NULL,
    "name" TEXT,
    "xendit_invoice_id" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pending_signups_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "transactions_xendit_invoice_id_key" ON "transactions"("xendit_invoice_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_google_sub_key" ON "users"("google_sub");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_pending_signup_id_fkey" FOREIGN KEY ("pending_signup_id") REFERENCES "pending_signups"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- CheckConstraint: a user must be identifiable by at least one auth method
ALTER TABLE "users" ADD CONSTRAINT "users_wa_or_email_check" CHECK ("wa_number" IS NOT NULL OR "email" IS NOT NULL);
