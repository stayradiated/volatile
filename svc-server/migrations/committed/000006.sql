--! Previous: sha1:4ff1a8a0f79619ca3945182cb544d20a916911c1
--! Hash: sha1:ae1547c44d9d53bb0336251c5221125f18e618e9

ALTER TABLE "dca_order_history" ALTER COLUMN order_uid DROP NOT NULL;

ALTER TABLE "dca_order_history" DROP COLUMN IF EXISTS calculated_amount_nzd;
ALTER TABLE "dca_order_history" ADD COLUMN calculated_amount_nzd NUMERIC(12,2);
UPDATE "dca_order_history" SET calculated_amount_nzd = 0 WHERE calculated_amount_nzd IS NULL;
ALTER TABLE "dca_order_history" ALTER COLUMN calculated_amount_nzd SET NOT NULL;

ALTER TABLE "dca_order_history" DROP COLUMN IF EXISTS available_balance_nzd;
ALTER TABLE "dca_order_history" ADD COLUMN available_balance_nzd NUMERIC(12,2);
UPDATE "dca_order_history" SET available_balance_nzd = 0 WHERE available_balance_nzd IS NULL;
ALTER TABLE "dca_order_history" ALTER COLUMN available_balance_nzd SET NOT NULL;

ALTER TABLE "dca_order_history" DROP COLUMN IF EXISTS created_order;
ALTER TABLE "dca_order_history" ADD COLUMN created_order BOOLEAN;
UPDATE "dca_order_history" SET created_order = true WHERE created_order IS NULL;
ALTER TABLE "dca_order_history" ALTER COLUMN created_order SET NOT NULL;

ALTER TABLE "dca_order_history" DROP COLUMN IF EXISTS description;
ALTER TABLE "dca_order_history" ADD COLUMN description VARCHAR;
UPDATE "dca_order_history" SET description = 'unknown' WHERE description IS NULL;
ALTER TABLE "dca_order_history" ALTER COLUMN description SET NOT NULL;
