--! Previous: sha1:d04711d14f56997a064e5b41fa0af9e15591fe85
--! Hash: sha1:4f7e924a1d12fc840ecfc9805225dd81688ae7dc

CALL rename_column_if_exists('dca_order', 'primary_currency', 'primary_currency_symbol');
CALL rename_column_if_exists('dca_order', 'secondary_currency', 'secondary_currency_symbol');

ALTER TABLE "dca_order"
DROP CONSTRAINT IF EXISTS fk_dca_order_primary_currency_symbol;
ALTER TABLE "dca_order"
ADD CONSTRAINT fk_dca_order_primary_currency_symbol
  FOREIGN KEY(primary_currency_symbol) REFERENCES "currency"(symbol)
  ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "dca_order"
DROP CONSTRAINT IF EXISTS fk_dca_order_secondary_currency_symbol;
ALTER TABLE "dca_order"
ADD CONSTRAINT fk_dca_order_secondary_currency_symbol
  FOREIGN KEY(secondary_currency_symbol) REFERENCES "currency"(symbol)
  ON DELETE RESTRICT ON UPDATE CASCADE;
