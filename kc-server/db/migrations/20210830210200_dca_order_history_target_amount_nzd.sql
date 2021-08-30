-- migrate:up
ALTER TABLE kc.dca_order_history RENAME calculated_amount_nzd TO target_amount_nzd; 
ALTER TABLE kc.dca_order_history ADD COLUMN amount_nzd NUMERIC(12,2);
UPDATE kc.dca_order_history SET amount_nzd = target_amount_nzd;
ALTER TABLE kc.dca_order_history ALTER COLUMN amount_nzd SET NOT NULL;

-- migrate:down
ALTER TABLE kc.dca_order_history DROP COLUMN amount_nzd;
ALTER TABLE kc.dca_order_history RENAME target_amount_nzd TO calculated_amount_nzd; 

