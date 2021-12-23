-- migrate:up
DROP VIEW trade_sum_total_value_by_week;
DROP VIEW trade_sum_total_value_by_month;
DROP VIEW trade_sum_volume_by_week;
DROP VIEW trade_sum_volume_by_month;
DROP VIEW trade_avg_price_by_day;

CREATE OR REPLACE FUNCTION trade_fx(currency TEXT)
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
  FROM kc.trade
$$ LANGUAGE sql STABLE;

CREATE TABLE type_trade_sum_by_window (
  user_uid UUID,
  timestamp TIMESTAMPTZ,
  primary_currency TEXT,
  volume NUMERIC(16, 8),
  value NUMERIC(12, 2),
  total_value NUMERIC(12, 2)
);

CREATE OR REPLACE FUNCTION trade_sum_by_window(group_by TEXT, currency TEXT)
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

CREATE TABLE type_trade_avg_price_by_window (
  user_uid UUID,
  timestamp TIMESTAMPTZ,
  primary_currency TEXT,
  price NUMERIC(12, 2),
  volume NUMERIC(16, 8),
  total_value NUMERIC(12, 2),
  avg_price NUMERIC(12, 2)
);

CREATE OR REPLACE FUNCTION trade_avg_price_by_window(group_by TEXT, currency TEXT)
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

-- migrate:down
DROP FUNCTION trade_avg_price_by_window(TEXT, TEXT);
DROP FUNCTION trade_sum_by_window(TEXT, TEXT);
DROP TABLE type_trade_avg_price_by_window;
DROP TABLE type_trade_sum_by_window;

DROP FUNCTION trade_fx(TEXT);

CREATE VIEW kc.trade_sum_total_value_by_month AS
 SELECT trade.user_uid,
    date_trunc('month'::text, trade."timestamp") AS month,
    trade.primary_currency,
    trade.secondary_currency,
    sum(trade.total_value) AS sum
   FROM kc.trade
  GROUP BY trade.user_uid, (date_trunc('month'::text, trade."timestamp")), trade.primary_currency, trade.secondary_currency
  ORDER BY (date_trunc('month'::text, trade."timestamp")) DESC;

CREATE VIEW kc.trade_sum_total_value_by_week AS
 SELECT trade.user_uid,
    date_trunc('week'::text, trade."timestamp") AS week,
    trade.primary_currency,
    trade.secondary_currency,
    sum(trade.total_value) AS sum
   FROM kc.trade
  GROUP BY trade.user_uid, (date_trunc('week'::text, trade."timestamp")), trade.primary_currency, trade.secondary_currency
  ORDER BY (date_trunc('week'::text, trade."timestamp")) DESC;

CREATE VIEW kc.trade_sum_volume_by_month AS
 SELECT trade.user_uid,
    date_trunc('month'::text, trade."timestamp") AS month,
    trade.primary_currency,
    trade.secondary_currency,
    sum(trade.volume) AS sum
   FROM kc.trade
  GROUP BY trade.user_uid, (date_trunc('month'::text, trade."timestamp")), trade.primary_currency, trade.secondary_currency
  ORDER BY (date_trunc('month'::text, trade."timestamp")) DESC;

CREATE VIEW kc.trade_sum_volume_by_week AS
 SELECT trade.user_uid,
    date_trunc('week'::text, trade."timestamp") AS week,
    trade.primary_currency,
    trade.secondary_currency,
    sum(trade.volume) AS sum
   FROM kc.trade
  GROUP BY trade.user_uid, (date_trunc('week'::text, trade."timestamp")), trade.primary_currency, trade.secondary_currency
  ORDER BY (date_trunc('week'::text, trade."timestamp")) DESC;

CREATE VIEW kc.trade_avg_price_by_day AS
 SELECT source2.user_uid,
    source2.day,
    source2.primary_currency,
    source2.secondary_currency,
    source2.total_value,
    source2.volume,
    source2.price,
    source2.sum_volume,
    source2.sum_total_value,
    round((source2.sum_total_value / source2.sum_volume), 2) AS avg_price
   FROM ( SELECT source1.user_uid,
            source1.day,
            source1.primary_currency,
            source1.secondary_currency,
            source1.total_value,
            source1.volume,
            source1.price,
            sum(source1.volume) OVER (PARTITION BY source1.user_uid, source1.primary_currency, source1.secondary_currency ORDER BY source1.day) AS sum_volume,
            sum(source1.total_value) OVER (PARTITION BY source1.user_uid, source1.primary_currency, source1.secondary_currency ORDER BY source1.day) AS sum_total_value
           FROM ( SELECT trade.user_uid,
                    date_trunc('day'::text, trade."timestamp") AS day,
                    trade.primary_currency,
                    trade.secondary_currency,
                    sum(trade.total_value) AS total_value,
                    sum(trade.volume) AS volume,
                    round(avg(trade.price), 2) AS price
                   FROM kc.trade
                  WHERE ((trade.type)::text = 'BUY'::text)
                  GROUP BY trade.user_uid, (date_trunc('day'::text, trade."timestamp")), trade.primary_currency, trade.secondary_currency) source1) source2
  ORDER BY source2.day DESC;
