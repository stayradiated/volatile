-- migrate:up
CREATE TABLE kc.currency_fx(
  timestamp TIMESTAMPTZ NOT NULL,
  from_symbol TEXT NOT NULL,
  to_symbol TEXT NOT NULL,
  fx_rate NUMERIC(12,6) NOT NULL,

  PRIMARY KEY(timestamp, from_symbol, to_symbol)
);

-- migrate:down
DROP TABLe kc.currency_fx;

