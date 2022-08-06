--! Previous: sha1:89155662804e3fdf100412ee0c70c29ceb4928bc
--! Hash: sha1:d1b243191df6b68cc3b63716248966e134d84f98

CALL rename_column_if_exists('dca_order', 'min_price_nzd', 'min_price');
CALL rename_column_if_exists('dca_order', 'max_price_nzd', 'max_price');
CALL rename_column_if_exists('dca_order', 'min_amount_nzd', 'min_value');
CALL rename_column_if_exists('dca_order', 'max_amount_nzd', 'max_value');
CALL rename_column_if_exists('dca_order', 'asset_symbol', 'primary_currency');
ALTER TABLE "dca_order" DROP COLUMN IF EXISTS secondary_currency;
ALTER TABLE "dca_order" ADD COLUMN secondary_currency TEXT NOT NULL DEFAULT 'NZD';
ALTER TABLE "dca_order" ALTER COLUMN secondary_currency DROP DEFAULT;
ALTER TABLE "dca_order" ALTER COLUMN primary_currency TYPE TEXT;

CALL rename_column_if_exists('dca_order_history', 'market_price_nzd', 'market_price');
CALL rename_column_if_exists('dca_order_history', 'target_amount_nzd', 'target_value');
CALL rename_column_if_exists('dca_order_history', 'amount_nzd', 'value');
CALL rename_column_if_exists('dca_order_history', 'available_balance_nzd', 'available_balance');
CALL rename_column_if_exists('dca_order_history', 'asset_symbol', 'primary_currency');
ALTER TABLE "dca_order_history" DROP COLUMN IF EXISTS secondary_currency;
ALTER TABLE "dca_order_history" ADD COLUMN secondary_currency TEXT NOT NULL DEFAULT 'NZD';
ALTER TABLE "dca_order_history" ALTER COLUMN secondary_currency DROP DEFAULT;
ALTER TABLE "dca_order" ALTER COLUMN primary_currency TYPE TEXT;

CALL rename_column_if_exists('order', 'price_nzd', 'price');
CALL rename_column_if_exists('order', 'amount', 'volume');
CALL rename_column_if_exists('order', 'asset_symbol', 'primary_currency');
ALTER TABLE "order" DROP COLUMN IF EXISTS secondary_currency;
ALTER TABLE "order" ADD COLUMN secondary_currency TEXT NOT NULL DEFAULT 'NZD';
ALTER TABLE "order" ALTER COLUMN secondary_currency DROP DEFAULT;
ALTER TABLE "dca_order" ALTER COLUMN primary_currency TYPE TEXT;

ALTER TABLE "order" DROP COLUMN IF EXISTS value;
ALTER TABLE "order" ADD COLUMN value NUMERIC(12, 2);
UPDATE "order" SET value = price * volume;
ALTER TABLE "order" ALTER COLUMN value SET NOT NULL;

CALL rename_column_if_exists('trade', 'amount', 'volume');
CALL rename_column_if_exists('trade', 'price_nzd', 'price');
CALL rename_column_if_exists('trade', 'fee_nzd', 'fee');
CALL rename_column_if_exists('trade', 'total_nzd', 'value');
CALL rename_column_if_exists('trade', 'asset_symbol', 'primary_currency');
ALTER TABLE "trade" DROP COLUMN IF EXISTS secondary_currency;
ALTER TABLE "trade" ADD COLUMN secondary_currency TEXT NOT NULL DEFAULT 'NZD';
ALTER TABLE "trade" ALTER COLUMN secondary_currency DROP DEFAULT;
ALTER TABLE "dca_order" ALTER COLUMN primary_currency TYPE TEXT;
