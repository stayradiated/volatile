-- migrate:up
CREATE TABLE asset(
  symbol TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  name TEXT NOT NULL,

  PRIMARY KEY(symbol)
);

CREATE TABLE exchange_asset(
  exchange_uid UUID NOT NULL,
  asset_symbol TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,

  PRIMARY KEY (exchange_uid, asset_symbol),
  CONSTRAINT fk_exchange_asset_exchange_uid
    FOREIGN KEY(exchange_uid) REFERENCES exchange(uid)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_exchange_asset_asset_symbol
    FOREIGN KEY(asset_symbol) REFERENCES asset(symbol)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

ALTER TABLE kc.dca_order RENAME symbol TO asset_symbol;
ALTER TABLE kc.dca_order_history RENAME symbol TO asset_symbol;
ALTER TABLE kc.market_price RENAME symbol TO asset_symbol;
ALTER TABLE kc.order RENAME symbol TO asset_symbol;
ALTER TABLE kc.trade RENAME symbol TO asset_symbol;

-- migrate:down
ALTER TABLE kc.dca_order RENAME asset_symbol TO symbol;
ALTER TABLE kc.dca_order_history RENAME asset_symbol TO symbol;
ALTER TABLE kc.market_price RENAME asset_symbol TO symbol;
ALTER TABLE kc.order RENAME asset_symbol TO symbol;
ALTER TABLE kc.trade RENAME asset_symbol TO symbol;

DROP TABLE exchange_asset;
DROP TABLE asset;
