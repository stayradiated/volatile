-- migrate:up
CREATE TABLE kc.market(
  uid UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  id VARCHAR(30) NOT NULL,
  name VARCHAR(50) NOT NULL,

  PRIMARY KEY(uid),
  CONSTRAINT unique_market_id UNIQUE(id)
);

CREATE TABLE kc.market_price(
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

CREATE TABLE kc.user(
  uid UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  email_keyring_id SMALLINT NOT NULL,
  email_encrypted VARCHAR NOT NULL,
  email_hash VARCHAR NOT NULL,
  password_hash VARCHAR NOT NULL,

  PRIMARY KEY(uid),
  CONSTRAINT unique_user_email_hash UNIQUE(email_hash)
);

CREATE TABLE kc.exchange(
  uid UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  id VARCHAR(32) NOT NULL,
  name VARCHAR(64) NOT NULL,

  PRIMARY KEY(uid),
  CONSTRAINT unique_exchange_id UNIQUE(id)
);

CREATE TABLE kc.user_exchange_keys(
  uid UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  user_uid UUID NOT NULL,
  exchange_uid UUID NOT NULL,
  keys_keyring_id SMALLINT NOT NULL,
  keys_encrypted VARCHAR NOT NULL,
  keys_hash VARCHAR NOT NULL,
  description VARCHAR(128) NOT NULL,
  invalidated_at TIMESTAMPTZ NULL,

  PRIMARY KEY(uid),
  CONSTRAINT unique_user_exchange_keys_user_uid_exchange_uid UNIQUE(user_uid, exchange_uid),
  CONSTRAINT fk_user_exchange_keys_user
    FOREIGN KEY(user_uid) REFERENCES kc.user(uid)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_user_exchange_keys_exchange
    FOREIGN KEY(exchange_uid) REFERENCES kc.exchange(uid)
    ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE kc.dca_order(
  uid UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  user_uid UUID NOT NULL,
  exchange_uid UUID NOT NULL,
  market_uid UUID NOT NULL,
  start_at TIMESTAMPTZ NOT NULL,
  market_offset NUMERIC(12,6) NOT NULL,
  daily_average NUMERIC(12,2) NOT NULL,
  min_price NUMERIC(12,2) NULL,
  max_price NUMERIC(12,2) NULL,
  min_amount NUMERIC(12,2) NULL,
  max_amount NUMERIC(12,2) NULL,

  PRIMARY KEY(uid),
  CONSTRAINT fk_dca_order_user
    FOREIGN KEY(user_uid) REFERENCES kc.user(uid)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_dca_order_exchange
    FOREIGN KEY(exchange_uid) REFERENCES kc.exchange(uid)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_dca_order_market
    FOREIGN KEY(market_uid) REFERENCES kc.market(uid)
    ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE kc.order(
  uid UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  user_uid UUID NOT NULL,
  exchange_uid UUID NOT NULL,
  id VARCHAR NOT NULL,
  symbol VARCHAR NOT NULL,
  price NUMERIC(12,2) NOT NULL,
  amount NUMERIC(12,2) NOT NULL,
  type SMALLINT NOT NULL,
  opened_at TIMESTAMPTZ NOT NULL,
  closed_at TIMESTAMPTZ NULL,

  PRIMARY KEY(uid),
  CONSTRAINT unique_exchange_order_id UNIQUE(exchange_uid, id),
  CONSTRAINT fk_dca_order_user
    FOREIGN KEY(user_uid) REFERENCES kc.user(uid)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_dca_order_exchange
    FOREIGN KEY(exchange_uid) REFERENCES kc.exchange(uid)
    ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE kc.dca_order_history(
  uid UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  user_uid UUID NOT NULL,
  dca_order_uid UUID NOT NULL,
  order_uid UUID NOT NULL,
  market_price NUMERIC(12,2) NOT NULL,
  market_offset NUMERIC(12,6) NOT NULL,

  PRIMARY KEY(uid),
  CONSTRAINT unique_dca_order UNIQUE(dca_order_uid, order_uid),
  CONSTRAINT fk_dca_order_history_user
    FOREIGN KEY(user_uid) REFERENCES kc.user(uid)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_dca_order_history_dca_order
    FOREIGN KEY(dca_order_uid) REFERENCES kc.dca_order(uid)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_dca_order_history_order
    FOREIGN KEY(order_uid) REFERENCES kc.order(uid)
    ON DELETE CASCADE ON UPDATE CASCADE
);

-- migrate:down
drop table kc.market_price;
drop table kc.market;
DROP TABLE kc.dca_order_history;
DROP TABLE kc.order;
DROP TABLE kc.dca_order;
DROP TABLE kc.user_exchange_keys;
DROP TABLE kc.exchange;
DROP TABLE kc.user;

