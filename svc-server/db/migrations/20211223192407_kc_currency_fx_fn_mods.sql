-- migrate:up
DROP FUNCTION trade_fee_nzd;
DROP FUNCTION trade_total_value_nzd;
DROP FUNCTION trade_value_nzd;
DROP FUNCTION trade_price_nzd;

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

-- migrate:down
DROP FUNCTION trade_fee_fx;
DROP FUNCTION trade_total_value_fx;
DROP FUNCTION trade_value_fx;
DROP FUNCTION trade_price_fx;

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

