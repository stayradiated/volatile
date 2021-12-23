-- migrate:up
CREATE EXTENSION btree_gist;
CREATE INDEX currency_fx_timestamp_idx ON currency_fx USING gist(timestamp);

CREATE OR REPLACE FUNCTION get_currency_fx_rate(
  _timestamp timestamptz,
  _from_symbol text,
  _to_symbol text
) RETURNS currency_fx AS $$
  SELECT *
  FROM currency_fx
  WHERE 
    currency_fx.from_symbol = _from_symbol
    AND currency_fx.to_symbol = _to_symbol
  ORDER BY _timestamp <-> currency_fx.timestamp
  LIMIT 1;
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION trade_price_nzd(self trade)
RETURNS NUMERIC(12,2) AS $$
  SELECT
    CASE
      WHEN self.secondary_currency = 'NZD' THEN self.price
      ELSE (
        SELECT ROUND(fx_rate * self.price, 2)
        FROM get_currency_fx_rate(self.timestamp, self.secondary_currency, 'NZD')
      )
    END;
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION trade_value_nzd(self trade)
RETURNS NUMERIC(12,2) AS $$
  SELECT
    CASE
      WHEN self.secondary_currency = 'NZD' THEN self.value
      ELSE (
        SELECT ROUND(FX_RATE * self.value, 2)
        FROM get_currency_fx_rate(self.timestamp, self.secondary_currency, 'NZD')
      )
    END;
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION trade_total_value_nzd(self trade)
RETURNS NUMERIC(12,2) AS $$
  SELECT
    CASE
      WHEN self.secondary_currency = 'NZD' THEN self.total_value
      ELSE (
        SELECT ROUND(fx_rate * self.total_value, 2)
        FROM get_currency_fx_rate(self.timestamp, self.secondary_currency, 'NZD')
      )
    END;
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION trade_fee_nzd(self trade)
RETURNS NUMERIC(12,2) AS $$
  SELECT
    CASE
      WHEN self.secondary_currency = 'NZD' THEN self.fee
      ELSE (
        SELECT ROUND(fx_rate * self.fee, 4)
        FROM get_currency_fx_rate(self.timestamp, self.secondary_currency, 'NZD')
      )
    END;
$$ LANGUAGE sql STABLE;

-- migrate:down
DROP EXTENSION btree_gist;
DROP INDEX currency_fx_timestamp_idx;
CREATE FUNCTION get_currency_fx_rate;

DROP FUNCTION trade_fee_nzd;
DROP FUNCTION trade_total_value_nzd;
DROP FUNCTION trade_value_nzd;
DROP FUNCTION trade_price_nzd;
