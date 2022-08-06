--! Previous: sha1:cd338f629f88f95f594c77079f66f80892d27c1f
--! Hash: sha1:c81c09d389d279ab7a13b18841ffc08e9140fbc4

CALL rename_column_if_exists('market_price', 'price', 'source_price');
CALL rename_column_if_exists('market_price', 'currency', 'source_currency');
CALL rename_column_if_exists('market_price', 'price_nzd', 'price');
ALTER TABLE "market_price" DROP COLUMN IF EXISTS currency;
ALTER TABLE "market_price" ADD COLUMN currency TEXT NOT NULL DEFAULT 'NZD';
ALTER TABLE "market_price" ALTER COLUMN currency DROP DEFAULT;

ALTER TABLE "market_price" DROP CONSTRAINT market_price_pkey;
ALTER TABLE "market_price" ADD PRIMARY KEY ("timestamp", market_uid, asset_symbol, source_currency, currency);
