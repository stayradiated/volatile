-- migrate:up
ALTER TABLE kc.exchange ADD COLUMN market_uid UUID NULL;

CREATE TABLE market_trading_pair (
  market_uid UUID NOT NULL,
  primary_currency_symbol text NOT NULL,
  secondary_currency_symbol text NOT NULL
);

ALTER TABLE ONLY kc.market_trading_pair
ADD CONSTRAINT fk_market_trading_pair_market
FOREIGN KEY (market_uid) REFERENCES kc.market(uid)
ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY kc.market_trading_pair
ADD CONSTRAINT fk_market_trading_pair_primary_currency_symbol
FOREIGN KEY (primary_currency_symbol) REFERENCES kc.currency(symbol)
ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE ONLY kc.market_trading_pair
ADD CONSTRAINT fk_market_trading_pair_secondary_currency_symbol
FOREIGN KEY (secondary_currency_symbol) REFERENCES kc.currency(symbol)
ON UPDATE CASCADE ON DELETE RESTRICT;

CREATE OR REPLACE FUNCTION dca_order_market_trading_pair(self dca_order)
RETURNS market_trading_pair AS $$
  SELECT
    exchange.market_uid as market_uid,
    dca_order.primary_currency_symbol as primary_currency_symbol,
    dca_order.secondary_currency_symbol as secondary_currency_symbol
  FROM dca_order
  INNER JOIN exchange ON (exchange.uid = dca_order.exchange_uid)
  WHERE dca_order.uid = self.uid
$$ LANGUAGE sql STABLE;

-- migrate:down
DROP FUNCTION dca_order_market_trading_pair;
DROP TABLE kc.market_trading_pair;
ALTER TABLE kc.exchange DROP COLUMN market_uid;
