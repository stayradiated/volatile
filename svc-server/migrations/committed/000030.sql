--! Previous: sha1:d86e3a5ad4aaa2928a63216751437058e0326123
--! Hash: sha1:3684f17f047ff9865a3a0bbf57a4dbbeb9be811a

DROP FUNCTION IF EXISTS trade_fee_nzd;
DROP FUNCTION IF EXISTS trade_total_value_nzd;
DROP FUNCTION IF EXISTS trade_value_nzd;
DROP FUNCTION IF EXISTS trade_price_nzd;

CREATE OR REPLACE FUNCTION trade_price_fx(self trade, currency TEXT)
RETURNS NUMERIC(12,2) AS $$
  SELECT
    CASE
      WHEN self.secondary_currency = currency THEN self.price
      ELSE (
        SELECT ROUND(fx_rate * self.price, 2)
        FROM get_currency_fx_rate(self.timestamp, self.secondary_currency, currency)
      )
    END;
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION trade_value_fx(self trade, currency TEXT)
RETURNS NUMERIC(12,2) AS $$
  SELECT
    CASE
      WHEN self.secondary_currency = currency THEN self.value
      ELSE (
        SELECT ROUND(FX_RATE * self.value, 2)
        FROM get_currency_fx_rate(self.timestamp, self.secondary_currency, currency)
      )
    END;
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION trade_total_value_fx(self trade, currency TEXT)
RETURNS NUMERIC(12,2) AS $$
  SELECT
    CASE
      WHEN self.secondary_currency = currency THEN self.total_value
      ELSE (
        SELECT ROUND(fx_rate * self.total_value, 2)
        FROM get_currency_fx_rate(self.timestamp, self.secondary_currency, currency)
      )
    END;
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION trade_fee_fx(self trade, currency TEXT)
RETURNS NUMERIC(12,2) AS $$
  SELECT
    CASE
      WHEN self.secondary_currency = currency THEN self.fee
      ELSE (
        SELECT ROUND(fx_rate * self.fee, 4)
        FROM get_currency_fx_rate(self.timestamp, self.secondary_currency, currency)
      )
    END;
$$ LANGUAGE sql STABLE;
