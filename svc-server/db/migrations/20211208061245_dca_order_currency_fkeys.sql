-- migrate:up
ALTER TABLE dca_order RENAME COLUMN primary_currency TO primary_currency_symbol;
ALTER TABLE dca_order RENAME COLUMN secondary_currency TO secondary_currency_symbol;

ALTER TABLE kc.dca_order
ADD CONSTRAINT fk_dca_order_primary_currency_symbol
  FOREIGN KEY(primary_currency_symbol) REFERENCES kc.currency(symbol)
  ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE kc.dca_order
ADD CONSTRAINT fk_dca_order_secondary_currency_symbol
  FOREIGN KEY(secondary_currency_symbol) REFERENCES kc.currency(symbol)
  ON DELETE RESTRICT ON UPDATE CASCADE;

-- migrate:down
ALTER TABLE dca_order DROP CONSTRAINT fk_dca_order_secondary_currency_symbol;
ALTER TABLE dca_order DROP CONSTRAINT fk_dca_order_primary_currency_symbol;
ALTER TABLE dca_order RENAME COLUMN secondary_currency_symbol TO secondary_currency;
ALTER TABLE dca_order RENAME COLUMN primary_currency_symbol TO primary_currency;
