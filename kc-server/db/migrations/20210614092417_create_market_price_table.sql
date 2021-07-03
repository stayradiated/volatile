-- migrate:up
CREATE TABLE market(
  uid UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  id VARCHAR(30) UNIQUE NOT NULL,
  name VARCHAR(50) NOT NULL,

  PRIMARY KEY(uid)
);

CREATE TABLE market_price(
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  timestamp TIMESTAMPTZ NOT NULL,
  market_uid UUID NOT NULL,
  price NUMERIC(12,2) NOT NULL,
  currency CHAR(3) NOT NULL,
  fx_rate NUMERIC(12,6) NOT NULL,
  price_nzd NUMERIC(12,2) NOT NULL,

  PRIMARY KEY(timestamp, market_uid),
  CONSTRAINT fk_market_price_market
    FOREIGN KEY(market_uid) REFERENCES market(uid)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);


-- migrate:down
drop table market_price;
drop table market;
