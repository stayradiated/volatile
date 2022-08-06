--! Previous: sha1:50a7861a553fc3c61f638128ace7cf577c5ce791
--! Hash: sha1:a774d86f0f9d1bc32afa6aa3ac303aeff9a775bf

DROP FUNCTION IF EXISTS "balance_latest_total_balance_fx";
DROP FUNCTION IF EXISTS "balance_latest_available_balance_fx";
DROP VIEW IF EXISTS "balance_latest";

CREATE OR REPLACE FUNCTION "user_exchange_keys_balance"(self user_exchange_keys, timestamp_at TIMESTAMPTZ) RETURNS SETOF balance AS $$
  SELECT balance.*
  FROM (
    SELECT user_exchange_keys_uid,
           currency_symbol,
           max(updated_at) AS max_updated_at
     FROM "balance"
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
