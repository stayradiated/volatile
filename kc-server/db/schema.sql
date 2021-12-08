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
-- Name: sales_tax(real); Type: FUNCTION; Schema: kc; Owner: -
--

CREATE FUNCTION kc.sales_tax(real) RETURNS real
    LANGUAGE plpgsql
    AS $_$
DECLARE
    subtotal ALIAS FOR $1;
BEGIN
    RETURN subtotal * 0.06;
END;
$_$;


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
    primary_currency_symbol text NOT NULL,
    enabled_at timestamp with time zone,
    secondary_currency_symbol text NOT NULL
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
    url text NOT NULL
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
    primary_currency character varying(4) NOT NULL,
    price numeric(12,2) NOT NULL,
    volume numeric(16,8) NOT NULL,
    opened_at timestamp with time zone NOT NULL,
    closed_at timestamp with time zone,
    type character varying(4) NOT NULL,
    secondary_currency text NOT NULL,
    value numeric(12,2) NOT NULL
);


--
-- Name: schema_migrations; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.schema_migrations (
    version character varying(255) NOT NULL
);


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
    primary_currency character varying(4) NOT NULL,
    volume numeric(16,8) NOT NULL,
    price numeric(12,2) NOT NULL,
    value numeric(12,2) NOT NULL,
    fee numeric(12,4) NOT NULL,
    secondary_currency text NOT NULL,
    total_value numeric(12,2) NOT NULL
);


--
-- Name: trade_sum_value_by_month; Type: VIEW; Schema: kc; Owner: -
--

CREATE VIEW kc.trade_sum_value_by_month AS
 SELECT trade.user_uid,
    date_trunc('month'::text, trade."timestamp") AS month,
    trade.primary_currency,
    trade.secondary_currency,
    sum(trade.value) AS sum
   FROM kc.trade
  GROUP BY trade.user_uid, (date_trunc('month'::text, trade."timestamp")), trade.primary_currency, trade.secondary_currency
  ORDER BY (date_trunc('month'::text, trade."timestamp")) DESC;


--
-- Name: trade_sum_value_by_week; Type: VIEW; Schema: kc; Owner: -
--

CREATE VIEW kc.trade_sum_value_by_week AS
 SELECT trade.user_uid,
    date_trunc('week'::text, trade."timestamp") AS week,
    trade.primary_currency,
    trade.secondary_currency,
    sum(trade.value) AS sum
   FROM kc.trade
  GROUP BY trade.user_uid, (date_trunc('week'::text, trade."timestamp")), trade.primary_currency, trade.secondary_currency
  ORDER BY (date_trunc('week'::text, trade."timestamp")) DESC;


--
-- Name: trade_sum_volume_by_month; Type: VIEW; Schema: kc; Owner: -
--

CREATE VIEW kc.trade_sum_volume_by_month AS
 SELECT trade.user_uid,
    date_trunc('month'::text, trade."timestamp") AS month,
    trade.primary_currency,
    trade.secondary_currency,
    sum(trade.volume) AS sum
   FROM kc.trade
  GROUP BY trade.user_uid, (date_trunc('month'::text, trade."timestamp")), trade.primary_currency, trade.secondary_currency
  ORDER BY (date_trunc('month'::text, trade."timestamp")) DESC;


--
-- Name: trade_sum_volume_by_week; Type: VIEW; Schema: kc; Owner: -
--

CREATE VIEW kc.trade_sum_volume_by_week AS
 SELECT trade.user_uid,
    date_trunc('week'::text, trade."timestamp") AS week,
    trade.primary_currency,
    trade.secondary_currency,
    sum(trade.volume) AS sum
   FROM kc.trade
  GROUP BY trade.user_uid, (date_trunc('week'::text, trade."timestamp")), trade.primary_currency, trade.secondary_currency
  ORDER BY (date_trunc('week'::text, trade."timestamp")) DESC;


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
    ('20211208061245');
