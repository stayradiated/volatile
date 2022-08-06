--! Previous: sha1:f0da191116ecb6035d962a1e9283741f5ddb201d
--! Hash: sha1:a0db53234d714b9356e16ea99b7defe84c063b27

DROP TABLE IF EXISTS "asset" CASCADE;
CREATE TABLE "asset"(
  symbol TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  name TEXT NOT NULL,

  PRIMARY KEY(symbol)
);

DROP TABLE IF EXISTS "exchange_asset";
CREATE TABLE "exchange_asset"(
  exchange_uid UUID NOT NULL,
  asset_symbol TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,

  PRIMARY KEY (exchange_uid, asset_symbol),
  CONSTRAINT fk_exchange_asset_exchange_uid
    FOREIGN KEY(exchange_uid) REFERENCES "exchange"(uid)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_exchange_asset_asset_symbol
    FOREIGN KEY(asset_symbol) REFERENCES "asset"(symbol)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CALL rename_column_if_exists('dca_order', 'symbol', 'asset_symbol');
CALL rename_column_if_exists('dca_order_history', 'symbol', 'asset_symbol');
CALL rename_column_if_exists('market_price', 'symbol', 'asset_symbol');
CALL rename_column_if_exists('order', 'symbol', 'asset_symbol');
CALL rename_column_if_exists('trade', 'symbol', 'asset_symbol');
