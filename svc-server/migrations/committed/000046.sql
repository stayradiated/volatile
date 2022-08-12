--! Previous: sha1:4384cb78f3d40cbc3a0ebc7eff7ec9220e2c4bc5
--! Hash: sha1:dccb8d538cd1cdb566776ad35c89bd718043bde2

ALTER TABLE "user" DROP COLUMN IF EXISTS "timezone";
ALTER TABLE "user" ADD COLUMN "timezone" TEXT NOT NULL DEFAULT 'Pacific/Auckland';
