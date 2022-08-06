--! Previous: sha1:a774d86f0f9d1bc32afa6aa3ac303aeff9a775bf
--! Hash: sha1:4f388168e36561420b91725d384f8f9041c12c47

CREATE OR REPLACE FUNCTION "trade_avg_price_by_window"(group_by TEXT, currency TEXT)
RETURNS SETOF type_trade_avg_price_by_window AS $$
  SELECT
    *,
    round(total_value / volume, 2) as avg_price
  FROM (
    SELECT
      user_uid,
      timestamp,
      primary_currency,
      price,
      sum(volume) OVER (
        PARTITION BY user_uid, 
        primary_currency
        ORDER BY timestamp
      ) AS volume,
      sum(total_value) OVER (
        PARTITION BY user_uid,
        primary_currency
        ORDER BY timestamp
      ) AS total_value
    FROM (
      SELECT
        user_uid,
        date_trunc(group_by, timestamp) AS timestamp,
        primary_currency,
        sum(total_value) as total_value,
        sum(volume) as volume,
        round((sum(total_value) / sum(volume)), 2) as price
      FROM trade_fx(currency)
      WHERE type = 'BUY' AND volume > 0
      GROUP BY user_uid, date_trunc(group_by, timestamp), primary_currency
    ) AS source1
  ) as source2
  ORDER BY timestamp desc;
$$ LANGUAGE sql STABLE;
