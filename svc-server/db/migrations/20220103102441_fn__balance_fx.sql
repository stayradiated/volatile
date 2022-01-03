-- migrate:up
CREATE OR REPLACE FUNCTION balance_available_balance_fx(self balance, currency TEXT)
RETURNS NUMERIC(12,2) AS $$
  SELECT
    CASE
      WHEN self.currency_symbol = currency THEN self.available_balance
      ELSE (
        SELECT ROUND(fx_rate * self.available_balance, 2)
        FROM get_currency_fx_rate(now(), self.currency_symbol, currency)
      )
    END;
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION balance_total_balance_fx(self balance, currency TEXT)
RETURNS NUMERIC(12,2) AS $$
  SELECT
    CASE
      WHEN self.currency_symbol = currency THEN self.total_balance
      ELSE (
        SELECT ROUND(fx_rate * self.total_balance, 2)
        FROM get_currency_fx_rate(now(), self.currency_symbol, currency)
      )
    END;
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION balance_latest_available_balance_fx(self balance_latest, currency TEXT)
RETURNS NUMERIC(12,2) AS $$
  SELECT
    CASE
      WHEN self.currency_symbol = currency THEN self.available_balance
      ELSE (
        SELECT ROUND(fx_rate * self.available_balance, 2)
        FROM get_currency_fx_rate(now(), self.currency_symbol, currency)
      )
    END;
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION balance_latest_total_balance_fx(self balance_latest, currency TEXT)
RETURNS NUMERIC(12,2) AS $$
  SELECT
    CASE
      WHEN self.currency_symbol = currency THEN self.total_balance
      ELSE (
        SELECT ROUND(fx_rate * self.total_balance, 2)
        FROM get_currency_fx_rate(now(), self.currency_symbol, currency)
      )
    END;
$$ LANGUAGE sql STABLE;

-- migrate:down
DROP FUNCTION balance_available_balance_fx(balance, TEXT);
DROP FUNCTION balance_total_balance_fx(balance, TEXT);
DROP FUNCTION balance_latest_available_balance_fx(balance_latest, TEXT);
DROP FUNCTION balance_latest_total_balance_fx(balance_latest, TEXT);
