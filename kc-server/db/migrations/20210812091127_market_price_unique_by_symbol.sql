-- migrate:up
ALTER TABLE kc.market_price DROP CONSTRAINT market_price_pkey;
ALTER TABLE kc.market_price ADD PRIMARY KEY ("timestamp", market_uid, symbol);

-- migrate:down
ALTER TABLE kc.market_price DROP CONSTRAINT market_price_pkey;
ALTER TABLE kc.market_price ADD PRIMARY KEY ("timestamp", market_uid);
