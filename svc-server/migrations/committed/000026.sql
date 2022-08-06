--! Previous: sha1:d9399ce95f0ea1f03a9e57c79ca75662d83f9794
--! Hash: sha1:01941c972a92b381227e9fab73a8a40c0d98339c

DROP VIEW IF EXISTS trade_sum_total_value_by_week;
CREATE VIEW trade_sum_total_value_by_week AS
SELECT
  user_uid,
  date_trunc('week', timestamp) AS week,
  primary_currency,
  secondary_currency,
  sum(total_value)
FROM "trade"
GROUP BY user_uid, week, primary_currency, secondary_currency
ORDER BY week desc;

DROP VIEW IF EXISTS trade_sum_total_value_by_month;
CREATE VIEW trade_sum_total_value_by_month AS
SELECT
  user_uid,
  date_trunc('month', timestamp) AS month,
  primary_currency,
  secondary_currency,
  sum(total_value)
FROM "trade"
GROUP BY user_uid, month, primary_currency, secondary_currency
ORDER BY month desc;

DROP VIEW IF EXISTS trade_sum_value_by_month;
DROP VIEW IF EXISTS trade_sum_value_by_week;
