-- migrate:up
ALTER TABLE kc.dca_order_history ALTER COLUMN order_uid DROP NOT NULL;

ALTER TABLE kc.dca_order_history ADD COLUMN calculated_amount_nzd NUMERIC(12,2);
UPDATE kc.dca_order_history SET calculated_amount_nzd = 0 WHERE calculated_amount_nzd IS NULL;
ALTER TABLE kc.dca_order_history ALTER COLUMN calculated_amount_nzd SET NOT NULL;

ALTER TABLE kc.dca_order_history ADD COLUMN available_balance_nzd NUMERIC(12,2);
UPDATE kc.dca_order_history SET available_balance_nzd = 0 WHERE available_balance_nzd IS NULL;
ALTER TABLE kc.dca_order_history ALTER COLUMN available_balance_nzd SET NOT NULL;

ALTER TABLE kc.dca_order_history ADD COLUMN created_order BOOLEAN;
UPDATE kc.dca_order_history SET created_order = true WHERE created_order IS NULL;
ALTER TABLE kc.dca_order_history ALTER COLUMN created_order SET NOT NULL;

ALTER TABLE kc.dca_order_history ADD COLUMN description VARCHAR;
UPDATE kc.dca_order_history SET description = 'unknown' WHERE description IS NULL;
ALTER TABLE kc.dca_order_history ALTER COLUMN description SET NOT NULL;

-- migrate:down
ALTER TABLE kc.dca_order_history DROP COLUMN description;
ALTER TABLE kc.dca_order_history DROP COLUMN created_order;
ALTER TABLE kc.dca_order_history DROP COLUMN calculated_amount_nzd;
ALTER TABLE kc.dca_order_history DROP COLUMN available_balance_nzd;
ALTER TABLE kc.dca_order_history ALTER COLUMN order_uid SET NOT NULL;
