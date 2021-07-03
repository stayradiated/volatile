-- migrate:up
CREATE TABLE market(
  uid UUID,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
  id VARCHAR(30) UNIQUE NOT NULL,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY(uid)
);

CREATE TABLE market_price(
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
  timestamp TIMESTAMPTZ,
  market_uid UUID,
  price NUMERIC(12,2),
  currency CHAR(3),
  fx_rate NUMERIC(12,6),
  price_nzd NUMERIC(12,2),
  PRIMARY KEY(timestamp, market_uid),
  CONSTRAINT fk_market_price_market
    FOREIGN KEY(market_uid) REFERENCES market(uid)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);


-- migrate:down
drop table market_price;
drop table market;
