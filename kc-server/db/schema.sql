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
    min_amount numeric(12,2),
    max_amount numeric(12,2)
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
    order_uid uuid NOT NULL,
    market_price numeric(12,2) NOT NULL,
    market_offset numeric(12,6) NOT NULL
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
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    "timestamp" timestamp with time zone NOT NULL,
    market_uid uuid NOT NULL,
    price numeric(12,2) NOT NULL,
    currency character(3) NOT NULL,
    fx_rate numeric(12,6) NOT NULL,
    price_nzd numeric(12,2) NOT NULL
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
    id character varying NOT NULL,
    symbol character varying NOT NULL,
    price numeric(12,2) NOT NULL,
    amount numeric(12,2) NOT NULL,
    type smallint NOT NULL,
    opened_at timestamp with time zone NOT NULL,
    closed_at timestamp with time zone
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
    email_encrypted character varying NOT NULL,
    email_hash character varying NOT NULL,
    password_hash character varying NOT NULL
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
    keys_encrypted character varying NOT NULL,
    description character varying(128) NOT NULL,
    invalidated_at timestamp with time zone
);


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
    ADD CONSTRAINT market_price_pkey PRIMARY KEY ("timestamp", market_uid);


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
    ADD CONSTRAINT unique_exchange_order_id UNIQUE (exchange_uid, id);


--
-- Name: market unique_market_id; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.market
    ADD CONSTRAINT unique_market_id UNIQUE (id);


--
-- Name: user unique_user_email_hash; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc."user"
    ADD CONSTRAINT unique_user_email_hash UNIQUE (email_hash);


--
-- Name: user_exchange_keys user_exchange_keys_pkey; Type: CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.user_exchange_keys
    ADD CONSTRAINT user_exchange_keys_pkey PRIMARY KEY (uid);


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
-- Name: market_price fk_market_price_market; Type: FK CONSTRAINT; Schema: kc; Owner: -
--

ALTER TABLE ONLY kc.market_price
    ADD CONSTRAINT fk_market_price_market FOREIGN KEY (market_uid) REFERENCES kc.market(uid) ON UPDATE CASCADE ON DELETE CASCADE;


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
-- PostgreSQL database dump complete
--


--
-- Dbmate schema migrations
--

INSERT INTO kc.schema_migrations (version) VALUES
    ('20210614092417'),
    ('20210704030306');
