--! Previous: sha1:355eb29004ae65f45784ee247e93c5d50b7569b3
--! Hash: sha1:79f3977d3d75eeb2981a86089489a538bc96feb3

ALTER TABLE IF EXISTS asset RENAME TO currency; 
ALTER TABLE IF EXISTS exchange_asset RENAME TO exchange_primary_currency; 
CALL rename_column_if_exists('exchange_primary_currency', 'asset_symbol', 'symbol');

DROP TABLE IF EXISTS exchange_secondary_currency;
CREATE TABLE exchange_secondary_currency(
  exchange_uid UUID NOT NULL,
  symbol TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,

  PRIMARY KEY (exchange_uid, symbol),
  CONSTRAINT fk_exchange_secondary_currency_exchange_uid
    FOREIGN KEY(exchange_uid) REFERENCES exchange(uid)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_exchange_secondary_currency_symbol
    FOREIGN KEY(symbol) REFERENCES currency(symbol)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
