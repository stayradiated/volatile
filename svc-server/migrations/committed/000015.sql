--! Previous: sha1:a0db53234d714b9356e16ea99b7defe84c063b27
--! Hash: sha1:89155662804e3fdf100412ee0c70c29ceb4928bc

CALL rename_column_if_exists('dca_order_history', 'calculated_amount_nzd', 'target_amount_nzd');

ALTER TABLE "dca_order_history" DROP COLUMN IF EXISTS amount_nzd;
ALTER TABLE "dca_order_history" ADD COLUMN amount_nzd NUMERIC(12,2);
UPDATE "dca_order_history" SET amount_nzd = target_amount_nzd;
ALTER TABLE "dca_order_history" ALTER COLUMN amount_nzd SET NOT NULL;
