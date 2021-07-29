-- migrate:up
CREATE TABLE kc.trade(
  uid UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  timestamp TIMESTAMPTZ NOT NULL,
  user_uid UUID NOT NULL,
  exchange_uid UUID NOT NULL,
  order_uid UUID NULL,
  id VARCHAR NOT NULL,
  type SMALLINT NOT NULL,
  symbol VARCHAR NOT NULL,
  amount NUMERIC(16,8) NOT NULL,
  price_nzd NUMERIC(12,2) NOT NULL,
  total_nzd NUMERIC(12,2) NOT NULL,
  fee_nzd NUMERIC(12,4) NOT NULL,

  PRIMARY KEY(uid),
  CONSTRAINT unique_trade_exchange_order_id UNIQUE(exchange_uid, id),
  CONSTRAINT fk_trade_user
    FOREIGN KEY(user_uid) REFERENCES kc.user(uid)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_trade_exchange
    FOREIGN KEY(exchange_uid) REFERENCES kc.exchange(uid)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_trade_order
    FOREIGN KEY(order_uid) REFERENCES kc.order(uid)
    ON DELETE SET NULL ON UPDATE CASCADE
);


-- migrate:down
DROP TABLE kc.trade;
