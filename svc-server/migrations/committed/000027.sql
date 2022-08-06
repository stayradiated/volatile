--! Previous: sha1:01941c972a92b381227e9fab73a8a40c0d98339c
--! Hash: sha1:98040f48fa319bd93394b7e96318850a5d1c61a3

ALTER TABLE "exchange" DROP COLUMN IF EXISTS market_uid;
ALTER TABLE "exchange" ADD COLUMN market_uid UUID NULL;

DROP TABLE IF EXISTS "market_trading_pair" CASCADE;
CREATE TABLE "market_trading_pair" (
  market_uid UUID NOT NULL,
  primary_currency_symbol text NOT NULL,
  secondary_currency_symbol text NOT NULL
);

ALTER TABLE ONLY market_trading_pair
DROP CONSTRAINT IF EXISTS fk_market_trading_pair_market;
ALTER TABLE ONLY market_trading_pair
ADD CONSTRAINT fk_market_trading_pair_market
FOREIGN KEY (market_uid) REFERENCES market(uid)
ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY market_trading_pair
DROP CONSTRAINT IF EXISTS fk_market_trading_pair_primary_currency_symbol;
ALTER TABLE ONLY market_trading_pair
ADD CONSTRAINT fk_market_trading_pair_primary_currency_symbol
FOREIGN KEY (primary_currency_symbol) REFERENCES currency(symbol)
ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE ONLY market_trading_pair
DROP CONSTRAINT IF EXISTS fk_market_trading_pair_secondary_currency_symbol;
ALTER TABLE ONLY market_trading_pair
ADD CONSTRAINT fk_market_trading_pair_secondary_currency_symbol
FOREIGN KEY (secondary_currency_symbol) REFERENCES currency(symbol)
ON UPDATE CASCADE ON DELETE RESTRICT;

CREATE OR REPLACE FUNCTION "dca_order_market_trading_pair"(self dca_order)
RETURNS market_trading_pair AS $$
  SELECT
    exchange.market_uid as market_uid,
    dca_order.primary_currency_symbol as primary_currency_symbol,
    dca_order.secondary_currency_symbol as secondary_currency_symbol
  FROM dca_order
  INNER JOIN exchange ON (exchange.uid = dca_order.exchange_uid)
  WHERE dca_order.uid = self.uid
$$ LANGUAGE sql STABLE;
