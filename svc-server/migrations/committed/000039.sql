--! Previous: sha1:e6e2fe54b1c94e7f71d5f83cbf153ee9f1c410e7
--! Hash: sha1:2c781e2d6bc8a86c3557c9258d5aa9f82a6d79f9

CREATE OR REPLACE FUNCTION "balance_available_balance_fx"(self balance, currency TEXT)
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

CREATE OR REPLACE FUNCTION "balance_total_balance_fx"(self balance, currency TEXT)
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

CREATE OR REPLACE FUNCTION "balance_latest_available_balance_fx"(self balance_latest, currency TEXT)
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

CREATE OR REPLACE FUNCTION "balance_latest_total_balance_fx"(self balance_latest, currency TEXT)
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
