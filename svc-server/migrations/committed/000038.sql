--! Previous: sha1:0c8d8bf072a2e182b18399c506bd70ffa1b01aaa
--! Hash: sha1:e6e2fe54b1c94e7f71d5f83cbf153ee9f1c410e7

DROP VIEW IF EXISTS "balance_latest";
CREATE VIEW "balance_latest" AS
SELECT balance.*
FROM (
  SELECT user_uid,
         exchange_uid,
         user_exchange_keys_uid,
         currency_symbol,
         max(updated_at) AS max_updated_at
   FROM "balance"
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
