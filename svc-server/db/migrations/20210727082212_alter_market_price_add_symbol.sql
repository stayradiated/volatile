-- migrate:up
ALTER TABLE kc.market_price ADD COLUMN symbol VARCHAR(5);
UPDATE kc.market_price SET symbol='BTC' WHERE symbol IS NULL;
ALTER TABLE kc.market_price ALTER COLUMN symbol SET NOT NULL;

ALTER TABLE kc.market_price DROP COLUMN created_at;
ALTER TABLE kc.market_price DROP COLUMN updated_at;

-- migrate:down
ALTER TABLE kc.market_price DROP COLUMN symbol;
ALTER TABLE kc.market_price ADD COLUMN created_at TIMESTAMPTZ;
ALTER TABLE kc.market_price ADD COLUMN updated_at TIMESTAMPTZ;
UPDATE kc.market_price SET created_at=now(), updated_at=now();
ALTER TABLE kc.market_price ALTER COLUMN created_at SET NOT NULL;
ALTER TABLE kc.market_price ALTER COLUMN updated_at SET NOT NULL;
