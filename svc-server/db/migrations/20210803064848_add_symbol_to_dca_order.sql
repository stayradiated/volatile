-- migrate:up
ALTER TABLE kc.dca_order ADD COLUMN symbol VARCHAR(4);
UPDATE kc.dca_order SET symbol='BTC';
ALTER TABLE kc.dca_order ALTER COLUMN symbol SET NOT NULL;

-- migrate:down
ALTER TABLE kc.dca_order DROP COLUMN symbol;
