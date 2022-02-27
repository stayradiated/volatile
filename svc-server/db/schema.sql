SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: kc; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA kc;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: balance; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.balance (
    uid uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    user_uid uuid NOT NULL,
    exchange_uid uuid NOT NULL,
    user_exchange_keys_uid uuid NOT NULL,
    currency_symbol text NOT NULL,
    total_balance numeric(18,8) NOT NULL,
    available_balance numeric(18,8) NOT NULL
);


--
-- Name: balance_available_balance_fx(kc.balance, text); Type: FUNCTION; Schema: kc; Owner: -
--

CREATE FUNCTION kc.balance_available_balance_fx(self kc.balance, currency text) RETURNS numeric
    LANGUAGE sql STABLE
    AS $$
  SELECT
    CASE
      WHEN self.currency_symbol = currency THEN self.available_balance
      ELSE (
        SELECT ROUND(fx_rate * self.available_balance, 2)
        FROM get_currency_fx_rate(now(), self.currency_symbol, currency)
      )
    END;
$$;


--
-- Name: balance_total_balance_fx(kc.balance, text); Type: FUNCTION; Schema: kc; Owner: -
--

CREATE FUNCTION kc.balance_total_balance_fx(self kc.balance, currency text) RETURNS numeric
    LANGUAGE sql STABLE
    AS $$
  SELECT
    CASE
      WHEN self.currency_symbol = currency THEN self.total_balance
      ELSE (
        SELECT ROUND(fx_rate * self.total_balance, 2)
        FROM get_currency_fx_rate(now(), self.currency_symbol, currency)
      )
    END;
$$;


--
-- Name: dca_order; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.dca_order (
    uid uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    user_uid uuid NOT NULL,
    exchange_uid uuid NOT NULL,
    market_uid uuid NOT NULL,
    start_at timestamp with time zone NOT NULL,
    market_offset numeric(12,6) NOT NULL,
    daily_average numeric(12,2) NOT NULL,
    min_price numeric(12,2),
    max_price numeric(12,2),
    min_value numeric(12,2),
    max_value numeric(12,2),
    user_exchange_keys_uid uuid NOT NULL,
    enabled_at timestamp with time zone,
    primary_currency_symbol text NOT NULL,
    secondary_currency_symbol text NOT NULL,
    interval_ms integer NOT NULL,
    last_run_at timestamp with time zone,
    next_run_at timestamp with time zone,
    CONSTRAINT dca_order_interval_ms_check CHECK ((interval_ms >= 0))
);


--
-- Name: market_trading_pair; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.market_trading_pair (
    market_uid uuid NOT NULL,
    primary_currency_symbol text NOT NULL,
    secondary_currency_symbol text NOT NULL
);


--
-- Name: dca_order_market_trading_pair(kc.dca_order); Type: FUNCTION; Schema: kc; Owner: -
--

CREATE FUNCTION kc.dca_order_market_trading_pair(self kc.dca_order) RETURNS kc.market_trading_pair
    LANGUAGE sql STABLE
    AS $$
  SELECT
    exchange.market_uid as market_uid,
    dca_order.primary_currency_symbol as primary_currency_symbol,
    dca_order.secondary_currency_symbol as secondary_currency_symbol
  FROM dca_order
  INNER JOIN exchange ON (exchange.uid = dca_order.exchange_uid)
  WHERE dca_order.uid = self.uid
$$;


--
-- Name: currency_fx; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.currency_fx (
    "timestamp" timestamp with time zone NOT NULL,
    from_symbol text NOT NULL,
    to_symbol text NOT NULL,
    fx_rate numeric(12,6) NOT NULL
);


--
-- Name: get_currency_fx_rate(timestamp with time zone, text, text); Type: FUNCTION; Schema: kc; Owner: -
--

CREATE FUNCTION kc.get_currency_fx_rate(_timestamp timestamp with time zone, _from_symbol text, _to_symbol text) RETURNS kc.currency_fx
    LANGUAGE sql STABLE
    AS $$
  SELECT *
  FROM currency_fx
  WHERE
    currency_fx.from_symbol = _from_symbol
    AND currency_fx.to_symbol = _to_symbol
  ORDER BY _timestamp <-> currency_fx.timestamp
  LIMIT 1;
$$;


--
-- Name: market_price; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.market_price (
    "timestamp" timestamp with time zone NOT NULL,
    market_uid uuid NOT NULL,
    source_price numeric(12,2) NOT NULL,
    source_currency character(3) NOT NULL,
    fx_rate numeric(12,6) NOT NULL,
    price numeric(12,2) NOT NULL,
    asset_symbol character varying(5) NOT NULL,
    currency text NOT NULL
);


--
-- Name: market_price_latest(text, text, uuid); Type: FUNCTION; Schema: kc; Owner: -
--

CREATE FUNCTION kc.market_price_latest(asset_symbol text, currency text, market_uid uuid) RETURNS SETOF kc.market_price
    LANGUAGE plpgsql STABLE
    AS $$
DECLARE
  _asset_symbol ALIAS FOR asset_symbol;
  _currency ALIAS FOR currency;
  _market_uid ALIAS FOR market_uid;
BEGIN
  RETURN QUERY
    SELECT market_price.*
    FROM market_price
    WHERE market_price.asset_symbol = _asset_symbol
      AND market_price.currency = _currency
      AND market_price.market_uid = _market_uid
      AND market_price.timestamp = (
        SELECT max(timestamp)
        FROM market_price
        WHERE market_price.currency = _currency
        AND market_price.asset_symbol = _asset_symbol
        AND market_price.market_uid = _market_uid
      )
    LIMIT 1;
END;
$$;


--
-- Name: type_trade_avg_price_by_window; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.type_trade_avg_price_by_window (
    user_uid uuid,
    "timestamp" timestamp with time zone,
    primary_currency text,
    price numeric(12,2),
    volume numeric(16,8),
    total_value numeric(12,2),
    avg_price numeric(12,2)
);


--
-- Name: trade_avg_price_by_window(text, text); Type: FUNCTION; Schema: kc; Owner: -
--

CREATE FUNCTION kc.trade_avg_price_by_window(group_by text, currency text) RETURNS SETOF kc.type_trade_avg_price_by_window
    LANGUAGE sql STABLE
    AS $$
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
$$;


--
-- Name: trade; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.trade (
    uid uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    "timestamp" timestamp with time zone NOT NULL,
    user_uid uuid NOT NULL,
    exchange_uid uuid NOT NULL,
    order_uid uuid,
    trade_id character varying NOT NULL,
    type character varying(4) NOT NULL,
    primary_currency character varying NOT NULL,
    volume numeric(16,8) NOT NULL,
    price numeric(12,2) NOT NULL,
    value numeric(12,2) NOT NULL,
    fee numeric(12,4) NOT NULL,
    secondary_currency text NOT NULL,
    total_value numeric(12,2) NOT NULL
);


--
-- Name: trade_fee_fx(kc.trade, text); Type: FUNCTION; Schema: kc; Owner: -
--

CREATE FUNCTION kc.trade_fee_fx(self kc.trade, currency text) RETURNS numeric
    LANGUAGE sql STABLE
    AS $$
  SELECT
    CASE
      WHEN self.secondary_currency = currency THEN self.fee
      ELSE (
        SELECT ROUND(fx_rate * self.fee, 4)
        FROM get_currency_fx_rate(self.timestamp, self.secondary_currency, currency)
      )
    END;
$$;


--
-- Name: trade_fx(text); Type: FUNCTION; Schema: kc; Owner: -
--

CREATE FUNCTION kc.trade_fx(currency text) RETURNS SETOF kc.trade
    LANGUAGE sql STABLE
    AS $$
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
$$;


--
-- Name: trade_price_fx(kc.trade, text); Type: FUNCTION; Schema: kc; Owner: -
--

CREATE FUNCTION kc.trade_price_fx(self kc.trade, currency text) RETURNS numeric
    LANGUAGE sql STABLE
    AS $$
  SELECT
    CASE
      WHEN self.secondary_currency = currency THEN self.price
      ELSE (
        SELECT ROUND(fx_rate * self.price, 2)
        FROM get_currency_fx_rate(self.timestamp, self.secondary_currency, currency)
      )
    END;
$$;


--
-- Name: type_trade_sum_by_window; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.type_trade_sum_by_window (
    user_uid uuid,
    "timestamp" timestamp with time zone,
    primary_currency text,
    volume numeric(16,8),
    value numeric(12,2),
    total_value numeric(12,2)
);


--
-- Name: trade_sum_by_window(text, text); Type: FUNCTION; Schema: kc; Owner: -
--

CREATE FUNCTION kc.trade_sum_by_window(group_by text, currency text) RETURNS SETOF kc.type_trade_sum_by_window
    LANGUAGE sql STABLE
    AS $$
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
$$;


--
-- Name: trade_total_value_fx(kc.trade, text); Type: FUNCTION; Schema: kc; Owner: -
--

CREATE FUNCTION kc.trade_total_value_fx(self kc.trade, currency text) RETURNS numeric
    LANGUAGE sql STABLE
    AS $$
  SELECT
    CASE
      WHEN self.secondary_currency = currency THEN self.total_value
      ELSE (
        SELECT ROUND(fx_rate * self.total_value, 2)
        FROM get_currency_fx_rate(self.timestamp, self.secondary_currency, currency)
      )
    END;
$$;


--
-- Name: trade_value_fx(kc.trade, text); Type: FUNCTION; Schema: kc; Owner: -
--

CREATE FUNCTION kc.trade_value_fx(self kc.trade, currency text) RETURNS numeric
    LANGUAGE sql STABLE
    AS $$
  SELECT
    CASE
      WHEN self.secondary_currency = currency THEN self.value
      ELSE (
        SELECT ROUND(FX_RATE * self.value, 2)
        FROM get_currency_fx_rate(self.timestamp, self.secondary_currency, currency)
      )
    END;
$$;


--
-- Name: user_exchange_keys; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.user_exchange_keys (
    uid uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    user_uid uuid NOT NULL,
    exchange_uid uuid NOT NULL,
    keys_keyring_id smallint NOT NULL,
    keys_encrypted character varying NOT NULL,
    keys_hash character varying NOT NULL,
    description character varying(128) NOT NULL,
    invalidated_at timestamp with time zone
);


--
-- Name: user_exchange_keys_balance(kc.user_exchange_keys, timestamp with time zone); Type: FUNCTION; Schema: kc; Owner: -
--

CREATE FUNCTION kc.user_exchange_keys_balance(self kc.user_exchange_keys, timestamp_at timestamp with time zone) RETURNS SETOF kc.balance
    LANGUAGE sql STABLE
    AS $$
  SELECT balance.*
  FROM (
    SELECT user_exchange_keys_uid,
           currency_symbol,
           max(updated_at) AS max_updated_at
     FROM kc.balance
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
$$;


--
-- Name: currency; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.currency (
    symbol text NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    name text NOT NULL
);


--
-- Name: customer; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.customer (
    user_uid uuid NOT NULL,
    customer_id character varying(32) NOT NULL
);


--
-- Name: dca_order_history; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.dca_order_history (
    uid uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    user_uid uuid NOT NULL,
    dca_order_uid uuid NOT NULL,
    order_uid uuid,
    market_price numeric(12,2) NOT NULL,
    market_offset numeric(12,6) NOT NULL,
    target_value numeric(12,2) NOT NULL,
    available_balance numeric(12,2) NOT NULL,
    created_order boolean NOT NULL,
    description character varying NOT NULL,
    primary_currency character varying(4) NOT NULL,
    value numeric(12,2) NOT NULL,
    secondary_currency text NOT NULL
);


--
-- Name: exchange; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.exchange (
    uid uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    id character varying(32) NOT NULL,
    name character varying(64) NOT NULL,
    url text NOT NULL,
    market_uid uuid
);


--
-- Name: exchange_primary_currency; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.exchange_primary_currency (
    exchange_uid uuid NOT NULL,
    symbol text NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


--
-- Name: exchange_secondary_currency; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.exchange_secondary_currency (
    exchange_uid uuid NOT NULL,
    symbol text NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


--
-- Name: market; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.market (
    uid uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    id character varying(30) NOT NULL,
    name character varying(50) NOT NULL
);


--
-- Name: order; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc."order" (
    uid uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    user_uid uuid NOT NULL,
    exchange_uid uuid NOT NULL,
    order_id character varying NOT NULL,
    primary_currency character varying NOT NULL,
    price numeric(12,2) NOT NULL,
    volume numeric(16,8) NOT NULL,
    opened_at timestamp with time zone NOT NULL,
    closed_at timestamp with time zone,
    type character varying(4) NOT NULL,
    secondary_currency text NOT NULL,
    value numeric(12,2) NOT NULL
);


--
-- Name: request; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.request (
    uid uuid NOT NULL,
    method text NOT NULL,
    url text NOT NULL,
    request_at timestamp with time zone NOT NULL,
    request_headers jsonb,
    request_body text,
    response_at timestamp with time zone,
    response_status integer,
    response_headers jsonb,
    response_body text,
    response_body_at timestamp with time zone
);


--
-- Name: schema_migrations; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.schema_migrations (
    version character varying(255) NOT NULL
);


--
-- Name: user; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc."user" (
    uid uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    email_keyring_id smallint NOT NULL,
    email_encrypted character varying NOT NULL,
    email_hash character varying NOT NULL,
    password_hash character varying NOT NULL,
    email_verified boolean NOT NULL
);


--
-- Name: user_2fa; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.user_2fa (
    uid uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    user_uid uuid NOT NULL,
    name text NOT NULL,
    secret_encrypted text NOT NULL,
    secret_keyring_id smallint NOT NULL
);


--
-- Name: user_device; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.user_device (
    uid uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    accessed_at timestamp with time zone NOT NULL,
    user_uid uuid NOT NULL,
    name text NOT NULL,
    device_id_hash text NOT NULL,
    trusted boolean NOT NULL
);


--
-- Name: user_email_verify; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.user_email_verify (
    uid uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    user_uid uuid NOT NULL,
    secret_hash text NOT NULL
);


--
-- Name: user_exchange_request; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.user_exchange_request (
    uid uuid NOT NULL,
    user_uid uuid NOT NULL,
    exchange_uid uuid NOT NULL,
    user_exchange_keys_uid uuid,
    method text NOT NULL,
    url text NOT NULL,
    request_at timestamp with time zone NOT NULL,
    request_body text,
    response_at timestamp with time zone,
    response_status integer,
    response_headers jsonb,
    response_body text,
    response_body_at timestamp with time zone,
    request_headers jsonb
);


--
-- Name: user_password_reset; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.user_password_reset (
    uid uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    expires_at timestamp with time zone NOT NULL,
    user_uid uuid NOT NULL,
    secret_hash text NOT NULL
);


--
-- Name: currency asset_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.currency
    ADD CONSTRAINT asset_pkey PRIMARY KEY (symbol);


--
-- Name: balance balance_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.balance
    ADD CONSTRAINT balance_pkey PRIMARY KEY (uid);


--
-- Name: currency_fx currency_fx_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.currency_fx
    ADD CONSTRAINT currency_fx_pkey PRIMARY KEY ("timestamp", from_symbol, to_symbol);


--
-- Name: customer customer_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (user_uid);


--
-- Name: dca_order_history dca_order_history_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.dca_order_history
    ADD CONSTRAINT dca_order_history_pkey PRIMARY KEY (uid);


--
-- Name: dca_order dca_order_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.dca_order
    ADD CONSTRAINT dca_order_pkey PRIMARY KEY (uid);


--
-- Name: exchange_primary_currency exchange_asset_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.exchange_primary_currency
    ADD CONSTRAINT exchange_asset_pkey PRIMARY KEY (exchange_uid, symbol);


--
-- Name: exchange exchange_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.exchange
    ADD CONSTRAINT exchange_pkey PRIMARY KEY (uid);


--
-- Name: exchange_secondary_currency exchange_secondary_currency_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.exchange_secondary_currency
    ADD CONSTRAINT exchange_secondary_currency_pkey PRIMARY KEY (exchange_uid, symbol);


--
-- Name: market market_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.market
    ADD CONSTRAINT market_pkey PRIMARY KEY (uid);


--
-- Name: market_price market_price_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.market_price
    ADD CONSTRAINT market_price_pkey PRIMARY KEY ("timestamp", market_uid, asset_symbol, source_currency, currency);


--
-- Name: order order_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (uid);


--
-- Name: request request_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.request
    ADD CONSTRAINT request_pkey PRIMARY KEY (uid);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: trade trade_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.trade
    ADD CONSTRAINT trade_pkey PRIMARY KEY (uid);


--
-- Name: customer unique_customer_id; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.customer
    ADD CONSTRAINT unique_customer_id UNIQUE (customer_id);


--
-- Name: dca_order_history unique_dca_order; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.dca_order_history
    ADD CONSTRAINT unique_dca_order UNIQUE (dca_order_uid, order_uid);


--
-- Name: exchange unique_exchange_id; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.exchange
    ADD CONSTRAINT unique_exchange_id UNIQUE (id);


--
-- Name: order unique_exchange_order_id; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc."order"
    ADD CONSTRAINT unique_exchange_order_id UNIQUE (exchange_uid, order_id);


--
-- Name: market unique_market_id; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.market
    ADD CONSTRAINT unique_market_id UNIQUE (id);


--
-- Name: trade unique_trade_exchange_trade_id; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.trade
    ADD CONSTRAINT unique_trade_exchange_trade_id UNIQUE (exchange_uid, trade_id);


--
-- Name: user_2fa unique_user_2fa_user_uid; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.user_2fa
    ADD CONSTRAINT unique_user_2fa_user_uid UNIQUE (user_uid);


--
-- Name: user_device unique_user_device_user_uid_device_id_hash; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.user_device
    ADD CONSTRAINT unique_user_device_user_uid_device_id_hash UNIQUE (user_uid, device_id_hash);


--
-- Name: user unique_user_email_hash; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc."user"
    ADD CONSTRAINT unique_user_email_hash UNIQUE (email_hash);


--
-- Name: user_email_verify unique_user_email_verify_secret_hash; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.user_email_verify
    ADD CONSTRAINT unique_user_email_verify_secret_hash UNIQUE (secret_hash);


--
-- Name: user_email_verify unique_user_email_verify_user_uid; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.user_email_verify
    ADD CONSTRAINT unique_user_email_verify_user_uid UNIQUE (user_uid);


--
-- Name: user_password_reset unique_user_password_reset_secret_hash; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.user_password_reset
    ADD CONSTRAINT unique_user_password_reset_secret_hash UNIQUE (secret_hash);


--
-- Name: user_2fa user_2fa_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.user_2fa
    ADD CONSTRAINT user_2fa_pkey PRIMARY KEY (uid);


--
-- Name: user_device user_device_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.user_device
    ADD CONSTRAINT user_device_pkey PRIMARY KEY (uid);


--
-- Name: user_email_verify user_email_verify_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.user_email_verify
    ADD CONSTRAINT user_email_verify_pkey PRIMARY KEY (uid);


--
-- Name: user_exchange_keys user_exchange_keys_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.user_exchange_keys
    ADD CONSTRAINT user_exchange_keys_pkey PRIMARY KEY (uid);


--
-- Name: user_exchange_request user_exchange_request_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.user_exchange_request
    ADD CONSTRAINT user_exchange_request_pkey PRIMARY KEY (uid);


--
-- Name: user_password_reset user_password_reset_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.user_password_reset
    ADD CONSTRAINT user_password_reset_pkey PRIMARY KEY (uid);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (uid);


--
-- Name: currency_fx_timestamp_idx; Type: INDEX; Schema: kc; Owner: -
--

CREATE INDEX currency_fx_timestamp_idx ON kc.currency_fx USING gist ("timestamp");


--
-- Name: balance fk_balance_currency_symbol; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.balance
    ADD CONSTRAINT fk_balance_currency_symbol FOREIGN KEY (currency_symbol) REFERENCES kc.currency(symbol) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: balance fk_balance_exchange; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.balance
    ADD CONSTRAINT fk_balance_exchange FOREIGN KEY (exchange_uid) REFERENCES kc.exchange(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: balance fk_balance_user; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.balance
    ADD CONSTRAINT fk_balance_user FOREIGN KEY (user_uid) REFERENCES kc."user"(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: balance fk_balance_user_exchange_keys; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.balance
    ADD CONSTRAINT fk_balance_user_exchange_keys FOREIGN KEY (user_exchange_keys_uid) REFERENCES kc.user_exchange_keys(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: dca_order fk_dca_order_exchange; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.dca_order
    ADD CONSTRAINT fk_dca_order_exchange FOREIGN KEY (exchange_uid) REFERENCES kc.exchange(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: order fk_dca_order_exchange; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc."order"
    ADD CONSTRAINT fk_dca_order_exchange FOREIGN KEY (exchange_uid) REFERENCES kc.exchange(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: dca_order_history fk_dca_order_history_dca_order; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.dca_order_history
    ADD CONSTRAINT fk_dca_order_history_dca_order FOREIGN KEY (dca_order_uid) REFERENCES kc.dca_order(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: dca_order_history fk_dca_order_history_order; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.dca_order_history
    ADD CONSTRAINT fk_dca_order_history_order FOREIGN KEY (order_uid) REFERENCES kc."order"(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: dca_order_history fk_dca_order_history_user; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.dca_order_history
    ADD CONSTRAINT fk_dca_order_history_user FOREIGN KEY (user_uid) REFERENCES kc."user"(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: dca_order fk_dca_order_market; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.dca_order
    ADD CONSTRAINT fk_dca_order_market FOREIGN KEY (market_uid) REFERENCES kc.market(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: dca_order fk_dca_order_primary_currency_symbol; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.dca_order
    ADD CONSTRAINT fk_dca_order_primary_currency_symbol FOREIGN KEY (primary_currency_symbol) REFERENCES kc.currency(symbol) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: dca_order fk_dca_order_secondary_currency_symbol; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.dca_order
    ADD CONSTRAINT fk_dca_order_secondary_currency_symbol FOREIGN KEY (secondary_currency_symbol) REFERENCES kc.currency(symbol) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: dca_order fk_dca_order_user; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.dca_order
    ADD CONSTRAINT fk_dca_order_user FOREIGN KEY (user_uid) REFERENCES kc."user"(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: order fk_dca_order_user; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc."order"
    ADD CONSTRAINT fk_dca_order_user FOREIGN KEY (user_uid) REFERENCES kc."user"(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: dca_order fk_dca_order_user_exchange_keys; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.dca_order
    ADD CONSTRAINT fk_dca_order_user_exchange_keys FOREIGN KEY (user_exchange_keys_uid) REFERENCES kc.user_exchange_keys(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: exchange_primary_currency fk_exchange_asset_asset_symbol; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.exchange_primary_currency
    ADD CONSTRAINT fk_exchange_asset_asset_symbol FOREIGN KEY (symbol) REFERENCES kc.currency(symbol) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: exchange_primary_currency fk_exchange_asset_exchange_uid; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.exchange_primary_currency
    ADD CONSTRAINT fk_exchange_asset_exchange_uid FOREIGN KEY (exchange_uid) REFERENCES kc.exchange(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: exchange_secondary_currency fk_exchange_secondary_currency_exchange_uid; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.exchange_secondary_currency
    ADD CONSTRAINT fk_exchange_secondary_currency_exchange_uid FOREIGN KEY (exchange_uid) REFERENCES kc.exchange(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: exchange_secondary_currency fk_exchange_secondary_currency_symbol; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.exchange_secondary_currency
    ADD CONSTRAINT fk_exchange_secondary_currency_symbol FOREIGN KEY (symbol) REFERENCES kc.currency(symbol) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: market_price fk_market_price_market; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.market_price
    ADD CONSTRAINT fk_market_price_market FOREIGN KEY (market_uid) REFERENCES kc.market(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: market_trading_pair fk_market_trading_pair_market; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.market_trading_pair
    ADD CONSTRAINT fk_market_trading_pair_market FOREIGN KEY (market_uid) REFERENCES kc.market(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: market_trading_pair fk_market_trading_pair_primary_currency_symbol; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.market_trading_pair
    ADD CONSTRAINT fk_market_trading_pair_primary_currency_symbol FOREIGN KEY (primary_currency_symbol) REFERENCES kc.currency(symbol) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: market_trading_pair fk_market_trading_pair_secondary_currency_symbol; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.market_trading_pair
    ADD CONSTRAINT fk_market_trading_pair_secondary_currency_symbol FOREIGN KEY (secondary_currency_symbol) REFERENCES kc.currency(symbol) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: trade fk_trade_exchange; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.trade
    ADD CONSTRAINT fk_trade_exchange FOREIGN KEY (exchange_uid) REFERENCES kc.exchange(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: trade fk_trade_order; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.trade
    ADD CONSTRAINT fk_trade_order FOREIGN KEY (order_uid) REFERENCES kc."order"(uid) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: trade fk_trade_user; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.trade
    ADD CONSTRAINT fk_trade_user FOREIGN KEY (user_uid) REFERENCES kc."user"(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_2fa fk_user_2fa_user; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.user_2fa
    ADD CONSTRAINT fk_user_2fa_user FOREIGN KEY (user_uid) REFERENCES kc."user"(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_device fk_user_device_user; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.user_device
    ADD CONSTRAINT fk_user_device_user FOREIGN KEY (user_uid) REFERENCES kc."user"(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_exchange_keys fk_user_exchange_keys_exchange; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.user_exchange_keys
    ADD CONSTRAINT fk_user_exchange_keys_exchange FOREIGN KEY (exchange_uid) REFERENCES kc.exchange(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_exchange_keys fk_user_exchange_keys_user; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.user_exchange_keys
    ADD CONSTRAINT fk_user_exchange_keys_user FOREIGN KEY (user_uid) REFERENCES kc."user"(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_exchange_request fk_user_exchange_request_exchange; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.user_exchange_request
    ADD CONSTRAINT fk_user_exchange_request_exchange FOREIGN KEY (exchange_uid) REFERENCES kc.exchange(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_exchange_request fk_user_exchange_request_user; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.user_exchange_request
    ADD CONSTRAINT fk_user_exchange_request_user FOREIGN KEY (user_uid) REFERENCES kc."user"(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_exchange_request fk_user_exchange_request_user_exchange_keys; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.user_exchange_request
    ADD CONSTRAINT fk_user_exchange_request_user_exchange_keys FOREIGN KEY (user_exchange_keys_uid) REFERENCES kc.user_exchange_keys(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_password_reset fk_user_password_reset_user; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.user_password_reset
    ADD CONSTRAINT fk_user_password_reset_user FOREIGN KEY (user_uid) REFERENCES kc."user"(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--


--
-- Dbmate schema migrations
--

INSERT INTO kc.schema_migrations (version) VALUES
    ('20210614092417'),
    ('20210721191422'),
    ('20210722105131'),
    ('20210725002018'),
    ('20210725035023'),
    ('20210726092656'),
    ('20210727082212'),
    ('20210729091009'),
    ('20210803064848'),
    ('20210803071520'),
    ('20210807084803'),
    ('20210808043640'),
    ('20210812091127'),
    ('20210814232237'),
    ('20210830210200'),
    ('20210904183924'),
    ('20210905023303'),
    ('20210905043231'),
    ('20211127183330'),
    ('20211128100212'),
    ('20211128103149'),
    ('20211201065401'),
    ('20211208061245'),
    ('20211210060725'),
    ('20211210070506'),
    ('20211211123516'),
    ('20211222165111'),
    ('20211223085648'),
    ('20211223192407'),
    ('20211223195806'),
    ('20211228103502'),
    ('20211230175305'),
    ('20211231200236'),
    ('20220101111511'),
    ('20220102071546'),
    ('20220102083618'),
    ('20220102092309'),
    ('20220103102441'),
    ('20220104101603'),
    ('20220104174115'),
    ('20220123081226');
