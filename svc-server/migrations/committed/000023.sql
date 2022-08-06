--! Previous: sha1:5bf518c9b7403a3f22181e2539c20f4944c695a5
--! Hash: sha1:d04711d14f56997a064e5b41fa0af9e15591fe85

DROP VIEW IF EXISTS trade_sum_value_by_week;
CREATE VIEW trade_sum_value_by_week AS
SELECT
  user_uid,
  date_trunc('week', timestamp) AS week,
  primary_currency,
  secondary_currency,
  sum(value)
FROM "trade"
GROUP BY user_uid, week, primary_currency, secondary_currency
ORDER BY week desc;

DROP VIEW IF EXISTS trade_sum_value_by_month;
CREATE VIEW trade_sum_value_by_month AS
SELECT
  user_uid,
  date_trunc('month', timestamp) AS month,
  primary_currency,
  secondary_currency,
  sum(value)
FROM "trade"
GROUP BY user_uid, month, primary_currency, secondary_currency
ORDER BY month desc;

DROP VIEW IF EXISTS trade_sum_volume_by_week;
CREATE VIEW trade_sum_volume_by_week AS
SELECT
  user_uid,
  date_trunc('week', timestamp) AS week,
  primary_currency,
  secondary_currency,
  sum(volume)
FROM "trade"
GROUP BY user_uid, week, primary_currency, secondary_currency
ORDER BY week desc;

DROP VIEW IF EXISTS trade_sum_volume_by_month;
CREATE VIEW trade_sum_volume_by_month AS
SELECT
  user_uid,
  date_trunc('month', timestamp) AS month,
  primary_currency,
  secondary_currency,
  sum(volume)
FROM "trade"
GROUP BY user_uid, month, primary_currency, secondary_currency
ORDER BY month desc;
