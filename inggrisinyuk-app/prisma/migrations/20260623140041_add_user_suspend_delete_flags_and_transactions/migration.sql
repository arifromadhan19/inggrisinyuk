-- AlterTable
ALTER TABLE "users" DROP COLUMN "status",
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_suspended" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "transactions" (
    "order_id" TEXT NOT NULL,
    "wa_number" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'success',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("order_id")
);

