-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "wa_number" TEXT NOT NULL,
    "panggilan" TEXT NOT NULL,
    "sapaan" TEXT NOT NULL DEFAULT 'Kak',
    "email" TEXT,
    "level" TEXT NOT NULL DEFAULT 'A1',
    "level_name" TEXT NOT NULL DEFAULT 'Beginner',
    "avatar" TEXT,
    "status" TEXT NOT NULL DEFAULT 'active',
    "placement_test_done" BOOLEAN NOT NULL DEFAULT false,
    "dismissed_placement_test" BOOLEAN NOT NULL DEFAULT false,
    "placement_total_correct" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_active_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "placement_test_results" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "level_recommended" TEXT NOT NULL,
    "correct_by_level" JSONB NOT NULL,
    "total_correct" INTEGER NOT NULL,
    "taken_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "placement_test_results_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_wa_number_key" ON "users"("wa_number");

-- AddForeignKey
ALTER TABLE "placement_test_results" ADD CONSTRAINT "placement_test_results_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
