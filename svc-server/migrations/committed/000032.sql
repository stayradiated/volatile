--! Previous: sha1:da26dd5c36ba0bb0a6f78913f60a728171f69432
--! Hash: sha1:988fe460fd7a46c77f1a29a011376a8fdea0ba7a

ALTER TABLE "dca_order" DROP COLUMN IF EXISTS interval_ms;
ALTER TABLE "dca_order" ADD COLUMN interval_ms INTEGER NOT NULL DEFAULT 5 CHECK (interval_ms >= 0);
ALTER TABLE "dca_order" ALTER COLUMN interval_ms DROP DEFAULT;

ALTER TABLE "dca_order" DROP COLUMN IF EXISTS last_run_at;
ALTER TABLE "dca_order" ADD COLUMN last_run_at timestamptz NULL;
ALTER TABLE "dca_order" DROP COLUMN IF EXISTS next_run_at;
ALTER TABLE "dca_order" ADD COLUMN next_run_at timestamptz NULL;
