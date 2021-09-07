-- migrate:up
ALTER TABLE kc.market_price RENAME price TO source_price;
ALTER TABLE kc.market_price RENAME currency TO source_currency;
ALTER TABLE kc.market_price RENAME price_nzd TO price;
ALTER TABLE kc.market_price ADD COLUMN currency TEXT NOT NULL DEFAULT 'NZD';
ALTER TABLE kc.market_price ALTER COLUMN currency DROP DEFAULT;

ALTER TABLE kc.market_price DROP CONSTRAINT market_price_pkey;
ALTER TABLE kc.market_price ADD PRIMARY KEY ("timestamp", market_uid, asset_symbol, source_currency, currency);

-- migrate:down
ALTER TABLE kc.market_price DROP COLUMN currency;
ALTER TABLE kc.market_price RENAME price TO price_nzd;
ALTER TABLE kc.market_price RENAME source_currency TO currency;
ALTER TABLE kc.market_price RENAME source_price TO price;
ALTER TABLE kc.market_price DROP CONSTRAINT market_price_pkey;
ALTER TABLE kc.market_price ADD PRIMARY KEY ("timestamp", market_uid, asset_symbol);
