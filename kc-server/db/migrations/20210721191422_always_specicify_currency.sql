-- migrate:up
ALTER TABLE kc.dca_order         RENAME COLUMN min_price    TO min_price_nzd;
ALTER TABLE kc.dca_order         RENAME COLUMN max_price    TO max_price_nzd;
ALTER TABLE kc.dca_order         RENAME COLUMN min_amount   TO min_amount_nzd;
ALTER TABLE kc.dca_order         RENAME COLUMN max_amount   TO max_amount_nzd;
ALTER TABLE kc.dca_order_history RENAME COLUMN market_price TO market_price_nzd;
ALTER TABLE kc.order             RENAME COLUMN price        TO price_nzd;

-- migrate:down
ALTER TABLE kc.dca_order         RENAME COLUMN min_price_nzd    TO min_price;
ALTER TABLE kc.dca_order         RENAME COLUMN max_price_nzd    TO max_price;
ALTER TABLE kc.dca_order         RENAME COLUMN min_amount_nzd   TO min_amount;
ALTER TABLE kc.dca_order         RENAME COLUMN max_amount_nzd   TO max_amount;
ALTER TABLE kc.dca_order_history RENAME COLUMN market_price_nzd TO market_price;
ALTER TABLE kc.order             RENAME COLUMN price_nzd        TO price;
