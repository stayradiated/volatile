--! Previous: sha1:9d889344f2e6908f8e3ad6445e10e047cd4a74e7
--! Hash: sha1:4ff1a8a0f79619ca3945182cb544d20a916911c1

ALTER TABLE "dca_order" DROP COLUMN IF EXISTS enabled_at;
ALTER TABLE "dca_order" ADD COLUMN enabled_at TIMESTAMPTZ NULL;
