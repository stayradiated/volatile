-- migrate:up
ALTER TABLE kc.dca_order_history ADD COLUMN symbol VARCHAR(4);
UPDATE kc.dca_order_history SET symbol=dca_order.symbol FROM dca_order WHERE dca_order_history.dca_order_uid = dca_order.uid;
ALTER TABLE kc.dca_order_history ALTER COLUMN symbol SET NOT NULL;

-- migrate:down
ALTER TABLE kc.dca_order_history DROP COLUMN symbol;
