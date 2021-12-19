-- migrate:up
ALTER TABLE kc.dca_order RENAME min_price_nzd to min_price;
ALTER TABLE kc.dca_order RENAME max_price_nzd to max_price;
ALTER TABLE kc.dca_order RENAME min_amount_nzd to min_value;
ALTER TABLE kc.dca_order RENAME max_amount_nzd to max_value;
ALTER TABLE kc.dca_order RENAME asset_symbol to primary_currency;
ALTER TABLE kc.dca_order ADD COLUMN secondary_currency TEXT NOT NULL DEFAULT 'NZD';
ALTER TABLE kc.dca_order ALTER COLUMN secondary_currency DROP DEFAULT;
ALTER TABLE kc.dca_order ALTER COLUMN primary_currency TYPE TEXT;

ALTER TABLE kc.dca_order_history RENAME market_price_nzd to market_price;
ALTER TABLE kc.dca_order_history RENAME target_amount_nzd to target_value;
ALTER TABLE kc.dca_order_history RENAME amount_nzd to value;
ALTER TABLE kc.dca_order_history RENAME available_balance_nzd to available_balance;
ALTER TABLE kc.dca_order_history RENAME asset_symbol to primary_currency;
ALTER TABLE kc.dca_order_history ADD COLUMN secondary_currency TEXT NOT NULL DEFAULT 'NZD';
ALTER TABLE kc.dca_order_history ALTER COLUMN secondary_currency DROP DEFAULT;
ALTER TABLE kc.dca_order ALTER COLUMN primary_currency TYPE TEXT;

ALTER TABLE kc."order" RENAME price_nzd TO price;
ALTER TABLE kc."order" RENAME amount TO volume;
ALTER TABLE kc."order" RENAME asset_symbol to primary_currency;
ALTER TABLE kc."order" ADD COLUMN secondary_currency TEXT NOT NULL DEFAULT 'NZD';
ALTER TABLE kc."order" ALTER COLUMN secondary_currency DROP DEFAULT;
ALTER TABLE kc.dca_order ALTER COLUMN primary_currency TYPE TEXT;

ALTER TABLE kc."order" ADD COLUMN value NUMERIC(12, 2);
UPDATE kc."order" SET value = price * volume;
ALTER TABLE kc."order" ALTER COLUMN value SET NOT NULL;

ALTER TABLE kc.trade RENAME amount TO volume;
ALTER TABLE kc.trade RENAME price_nzd TO price;
ALTER TABLE kc.trade RENAME fee_nzd TO fee;
ALTER TABLE kc.trade RENAME total_nzd TO value;
ALTER TABLE kc.trade RENAME asset_symbol to primary_currency;
ALTER TABLE kc.trade ADD COLUMN secondary_currency TEXT NOT NULL DEFAULT 'NZD';
ALTER TABLE kc.trade ALTER COLUMN secondary_currency DROP DEFAULT;
ALTER TABLE kc.dca_order ALTER COLUMN primary_currency TYPE TEXT;

-- migrate:down
ALTER TABLE kc.dca_order ALTER COLUMN primary_currency TYPE VARCHAR(4);
ALTER TABLE kc.dca_order RENAME min_price to min_price_nzd;
ALTER TABLE kc.dca_order RENAME max_price to max_price_nzd;
ALTER TABLE kc.dca_order RENAME min_value to min_amount_nzd;
ALTER TABLE kc.dca_order RENAME max_value to max_amount_nzd;
ALTER TABLE kc.dca_order RENAME primary_currency to asset_symbol;
ALTER TABLE kc.dca_order DROP COLUMN secondary_currency;

ALTER TABLE kc.dca_order_history ALTER COLUMN primary_currency TYPE VARCHAR(4);
ALTER TABLE kc.dca_order_history RENAME market_price to market_price_nzd;
ALTER TABLE kc.dca_order_history RENAME target_value to target_amount_nzd;
ALTER TABLE kc.dca_order_history RENAME value to amount_nzd;
ALTER TABLE kc.dca_order_history RENAME available_balance to available_balance_nzd;
ALTER TABLE kc.dca_order_history RENAME primary_currency to asset_symbol;
ALTER TABLE kc.dca_order_history DROP COLUMN secondary_currency;

ALTER TABLE kc."order" DROP COLUMN value;
ALTER TABLE kc."order" ALTER COLUMN primary_currency TYPE VARCHAR(4);
ALTER TABLE kc."order" RENAME price to price_nzd;
ALTER TABLE kc."order" RENAME volume to amount;
ALTER TABLE kc."order" RENAME primary_currency to asset_symbol;
ALTER TABLE kc."order" DROP COLUMN secondary_currency;

ALTER TABLE kc.trade ALTER COLUMN primary_currency TYPE VARCHAR(4);
ALTER TABLE kc.trade RENAME volume to amount;
ALTER TABLE kc.trade RENAME price to price_nzd;
ALTER TABLE kc.trade RENAME fee to fee_nzd;
ALTER TABLE kc.trade RENAME value to total_nzd;
ALTER TABLE kc.trade RENAME primary_currency to asset_symbol;
ALTER TABLE kc.trade DROP COLUMN secondary_currency;
