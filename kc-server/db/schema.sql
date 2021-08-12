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
    min_price_nzd numeric(12,2),
    max_price_nzd numeric(12,2),
    min_amount_nzd numeric(12,2),
    max_amount_nzd numeric(12,2),
    user_exchange_keys_uid uuid NOT NULL,
    symbol character varying(4) NOT NULL,
    enabled_at timestamp with time zone
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
    market_price_nzd numeric(12,2) NOT NULL,
    market_offset numeric(12,6) NOT NULL,
    calculated_amount_nzd numeric(12,2) NOT NULL,
    available_balance_nzd numeric(12,2) NOT NULL,
    created_order boolean NOT NULL,
    description character varying NOT NULL,
    symbol character varying(4) NOT NULL
);


--
-- Name: exchange; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.exchange (
    uid uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    id character varying(32) NOT NULL,
    name character varying(64) NOT NULL
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
-- Name: market_price; Type: TABLE; Schema: kc; Owner: -
--

CREATE TABLE kc.market_price (
    "timestamp" timestamp with time zone NOT NULL,
    market_uid uuid NOT NULL,
    price numeric(12,2) NOT NULL,
    currency character(3) NOT NULL,
    fx_rate numeric(12,6) NOT NULL,
    price_nzd numeric(12,2) NOT NULL,
    symbol character varying(5) NOT NULL
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
    symbol character varying NOT NULL,
    price_nzd numeric(12,2) NOT NULL,
    amount numeric(16,8) NOT NULL,
    opened_at timestamp with time zone NOT NULL,
    closed_at timestamp with time zone,
    type character varying(4) NOT NULL
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
    symbol character varying NOT NULL,
    amount numeric(16,8) NOT NULL,
    price_nzd numeric(12,2) NOT NULL,
    total_nzd numeric(12,2) NOT NULL,
    fee_nzd numeric(12,4) NOT NULL
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
-- Name: exchange exchange_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.exchange
    ADD CONSTRAINT exchange_pkey PRIMARY KEY (uid);


--
-- Name: market market_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.market
    ADD CONSTRAINT market_pkey PRIMARY KEY (uid);


--
-- Name: market_price market_price_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.market_price
    ADD CONSTRAINT market_price_pkey PRIMARY KEY ("timestamp", market_uid, symbol);


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
    ('20210812091127');
