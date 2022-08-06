--! Previous: sha1:3684f17f047ff9865a3a0bbf57a4dbbeb9be811a
--! Hash: sha1:da26dd5c36ba0bb0a6f78913f60a728171f69432

DROP VIEW IF EXISTS "trade_sum_total_value_by_week";
DROP VIEW IF EXISTS "trade_sum_total_value_by_month";
DROP VIEW IF EXISTS "trade_sum_volume_by_week";
DROP VIEW IF EXISTS "trade_sum_volume_by_month";
DROP VIEW IF EXISTS "trade_avg_price_by_day";

CREATE OR REPLACE FUNCTION "trade_fx"(currency TEXT)
RETURNS SETOF trade AS $$
  SELECT
    user_uid,
    created_at,
    updated_at,
    timestamp,
    user_uid,
    exchange_uid,
    order_uid,
    trade_id,
    type,
    primary_currency,
    volume,
    trade_price_fx(trade, currency) as price,
    trade_value_fx(trade, currency) as value,
    trade_fee_fx(trade, currency) as fee,
    secondary_currency,
    trade_total_value_fx(trade, currency) as total_value
  FROM "trade"
$$ LANGUAGE sql STABLE;

DROP TABLE IF EXISTS "type_trade_sum_by_window" CASCADE;
CREATE TABLE "type_trade_sum_by_window" (
  user_uid UUID,
  timestamp TIMESTAMPTZ,
  primary_currency TEXT,
  volume NUMERIC(16, 8),
  value NUMERIC(12, 2),
  total_value NUMERIC(12, 2)
);

CREATE OR REPLACE FUNCTION "trade_sum_by_window"(group_by TEXT, currency TEXT)
RETURNS SETOF type_trade_sum_by_window AS $$
  SELECT
    user_uid,
    date_trunc(group_by, timestamp) AS timestamp,
    primary_currency,
    sum(volume) as volume,
    sum(value) as value,
    sum(total_value) as total_value
  FROM trade_fx(currency)
  GROUP BY user_uid, date_trunc(group_by, timestamp), primary_currency
  ORDER BY date_trunc(group_by, timestamp) desc;
$$ LANGUAGE sql STABLE;

DROP TABLE IF EXISTS "type_trade_avg_price_by_window" CASCADE;
CREATE TABLE "type_trade_avg_price_by_window" (
  user_uid UUID,
  timestamp TIMESTAMPTZ,
  primary_currency TEXT,
  price NUMERIC(12, 2),
  volume NUMERIC(16, 8),
  total_value NUMERIC(12, 2),
  avg_price NUMERIC(12, 2)
);

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
      WHERE type = 'BUY'
      GROUP BY user_uid, date_trunc(group_by, timestamp), primary_currency
    ) AS source1
  ) as source2
  ORDER BY timestamp desc;
$$ LANGUAGE sql STABLE;
