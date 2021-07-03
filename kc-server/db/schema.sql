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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: market; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.market (
    uid uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    id character varying(30) NOT NULL,
    name character varying(50) NOT NULL
);


--
-- Name: market_price; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.market_price (
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
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.schema_migrations (
    version character varying(255) NOT NULL
);


--
-- Name: market market_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.market
    ADD CONSTRAINT market_id_key UNIQUE (id);


--
-- Name: market market_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.market
    ADD CONSTRAINT market_pkey PRIMARY KEY (uid);


--
-- Name: market_price market_price_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.market_price
    ADD CONSTRAINT market_price_pkey PRIMARY KEY ("timestamp", market_uid);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: market_price fk_market_price_market; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.market_price
    ADD CONSTRAINT fk_market_price_market FOREIGN KEY (market_uid) REFERENCES public.market(uid) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--


--
-- Dbmate schema migrations
--

INSERT INTO public.schema_migrations (version) VALUES
    ('20210614092417');
