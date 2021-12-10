-- migrate:up
CREATE VIEW trade_avg_price_by_day AS
SELECT
  *,
  round(sum_total_value / sum_volume, 2) as avg_price
FROM (
  SELECT
    *,
    sum(volume) OVER (PARTITION BY user_uid, primary_currency, secondary_currency ORDER BY day) AS sum_volume,
    sum(total_value) OVER (PARTITION BY user_uid, primary_currency, secondary_currency ORDER BY day) AS sum_total_value
  FROM (
    SELECT
      user_uid,
      date_trunc('day', timestamp) AS day,
      primary_currency,
      secondary_currency,
      sum(total_value) as total_value,
      sum(volume) as volume,
      round(avg(price), 2) as price
    FROM kc.trade
    WHERE type = 'BUY'
    GROUP BY user_uid, day, primary_currency, secondary_currency
  ) AS source1
) as source2
ORDER BY day desc;

-- migrate:down
DROP VIEW trade_avg_price_by_day;
