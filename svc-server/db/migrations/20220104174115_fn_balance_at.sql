-- migrate:up
DROP FUNCTION balance_latest_total_balance_fx;
DROP FUNCTION balance_latest_available_balance_fx;
DROP VIEW balance_latest;

CREATE OR REPLACE FUNCTION user_exchange_keys_balance(self user_exchange_keys, timestamp_at TIMESTAMPTZ) RETURNS SETOF balance AS $$
  SELECT balance.*
  FROM (
    SELECT user_exchange_keys_uid,
           currency_symbol,
           max(updated_at) AS max_updated_at
     FROM kc.balance
     WHERE 
       user_exchange_keys_uid = self.uid AND
       created_at <= timestamp_at
     GROUP BY
       user_exchange_keys_uid,
       currency_symbol
  ) latest_balance
  INNER JOIN balance ON
    balance.user_exchange_keys_uid = latest_balance.user_exchange_keys_uid AND
    balance.currency_symbol = latest_balance.currency_symbol AND
    balance.updated_at = latest_balance.max_updated_at;
$$ LANGUAGE sql STABLE;

-- migrate:down
DROP FUNCTION user_exchange_keys_balance;

CREATE VIEW balance_latest AS
SELECT balance.*
FROM (
  SELECT user_uid,
         exchange_uid,
         user_exchange_keys_uid,
         currency_symbol,
         max(updated_at) AS max_updated_at
   FROM kc.balance
   GROUP BY user_uid,
            exchange_uid,
            user_exchange_keys_uid,
            currency_symbol) latest_balance
INNER JOIN balance ON
    balance.user_uid = latest_balance.user_uid
AND balance.exchange_uid = latest_balance.exchange_uid
AND balance.user_exchange_keys_uid = latest_balance.user_exchange_keys_uid
AND balance.currency_symbol = latest_balance.currency_symbol
AND balance.updated_at = latest_balance.max_updated_at;

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
