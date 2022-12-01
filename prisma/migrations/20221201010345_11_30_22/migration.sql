/*
  Warnings:

  - The values [INITIAL_CALL] on the enum `EventStep` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EventStep_new" AS ENUM ('APPLICATION', 'PHONE_SCREEN', 'ONSITE_STEP', 'BEHAVIOURAL', 'CLOSER');
ALTER TABLE "Event" ALTER COLUMN "step" DROP DEFAULT;
ALTER TABLE "Event" ALTER COLUMN "step" TYPE "EventStep_new" USING ("step"::text::"EventStep_new");
ALTER TYPE "EventStep" RENAME TO "EventStep_old";
ALTER TYPE "EventStep_new" RENAME TO "EventStep";
DROP TYPE "EventStep_old";
ALTER TABLE "Event" ALTER COLUMN "step" SET DEFAULT 'APPLICATION';
COMMIT;
