-- migrate:up
ALTER TABLE asset RENAME TO currency; 
ALTER TABLE exchange_asset RENAME TO exchange_primary_currency; 
ALTER TABLE exchange_primary_currency RENAME COLUMN asset_symbol TO symbol;

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

-- migrate:down
DROP TABLE exchange_secondary_currency;
ALTER TABLE exchange_primary_currency RENAME COLUMN symbol TO asset_symbol;
ALTER TABLE exchange_primary_currency RENAME TO exchange_asset; 
ALTER TABLE currency RENAME TO asset; 

