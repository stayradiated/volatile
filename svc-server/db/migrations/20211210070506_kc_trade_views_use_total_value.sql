-- migrate:up
CREATE VIEW trade_sum_total_value_by_week AS
SELECT
  user_uid,
  date_trunc('week', timestamp) AS week,
  primary_currency,
  secondary_currency,
  sum(total_value)
FROM kc.trade
GROUP BY user_uid, week, primary_currency, secondary_currency
ORDER BY week desc;

CREATE VIEW trade_sum_total_value_by_month AS
SELECT
  user_uid,
  date_trunc('month', timestamp) AS month,
  primary_currency,
  secondary_currency,
  sum(total_value)
FROM kc.trade
GROUP BY user_uid, month, primary_currency, secondary_currency
ORDER BY month desc;

DROP VIEW trade_sum_value_by_month;
DROP VIEW trade_sum_value_by_week;

-- migrate:down
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

DROP VIEW trade_sum_total_value_by_month;
DROP VIEW trade_sum_total_value_by_week;
