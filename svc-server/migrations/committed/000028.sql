--! Previous: sha1:98040f48fa319bd93394b7e96318850a5d1c61a3
--! Hash: sha1:ef75cdf179add88106434c8a379b4132a447bc52

DROP TABLE IF EXISTS "currency_fx";
CREATE TABLE "currency_fx"(
  timestamp TIMESTAMPTZ NOT NULL,
  from_symbol TEXT NOT NULL,
  to_symbol TEXT NOT NULL,
  fx_rate NUMERIC(12,6) NOT NULL,

  PRIMARY KEY(timestamp, from_symbol, to_symbol)
);
