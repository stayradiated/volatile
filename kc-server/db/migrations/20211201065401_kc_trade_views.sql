-- migrate:up
CREATE VIEW trade_sum_value_by_week AS
SELECT
  user_uid,
  date_trunc('week', timestamp) AS week,
  primary_currency,
  secondary_currency,
  sum(value)
FROM kc.trade
GROUP BY user_uid, week, primary_currency, secondary_currency
ORDER BY week desc;

CREATE VIEW trade_sum_value_by_month AS
SELECT
  user_uid,
  date_trunc('month', timestamp) AS month,
  primary_currency,
  secondary_currency,
  sum(value)
FROM kc.trade
GROUP BY user_uid, month, primary_currency, secondary_currency
ORDER BY month desc;

CREATE VIEW trade_sum_volume_by_week AS
SELECT
  user_uid,
  date_trunc('week', timestamp) AS week,
  primary_currency,
  secondary_currency,
  sum(volume)
FROM kc.trade
GROUP BY user_uid, week, primary_currency, secondary_currency
ORDER BY week desc;

CREATE VIEW trade_sum_volume_by_month AS
SELECT
  user_uid,
  date_trunc('month', timestamp) AS month,
  primary_currency,
  secondary_currency,
  sum(volume)
FROM kc.trade
GROUP BY user_uid, month, primary_currency, secondary_currency
ORDER BY month desc;

-- migrate:down
DROP VIEW trade_sum_volume_by_month;
DROP VIEW trade_sum_volume_by_week;
DROP VIEW trade_sum_value_by_month;
DROP VIEW trade_sum_value_by_week;
