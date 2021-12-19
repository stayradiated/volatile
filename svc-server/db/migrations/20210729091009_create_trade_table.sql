-- migrate:up
CREATE TABLE kc.trade(
  uid UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  timestamp TIMESTAMPTZ NOT NULL,
  user_uid UUID NOT NULL,
  exchange_uid UUID NOT NULL,
  order_uid UUID NULL,
  trade_id VARCHAR NOT NULL,
  type VARCHAR(4) NOT NULL,
  symbol VARCHAR NOT NULL,
  amount NUMERIC(16,8) NOT NULL,
  price_nzd NUMERIC(12,2) NOT NULL,
  total_nzd NUMERIC(12,2) NOT NULL,
  fee_nzd NUMERIC(12,4) NOT NULL,

  PRIMARY KEY(uid),
  CONSTRAINT unique_trade_exchange_trade_id UNIQUE(exchange_uid, trade_id),
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

ALTER TABLE kc.order ADD COLUMN new_type VARCHAR(4);
UPDATE kc.order SET new_type = CASE WHEN type = 0 THEN 'BUY' ELSE 'SELL' END;
ALTER TABLE kc.order ALTER new_type SET NOT NULL;
ALTER TABLE kc.order DROP type;
ALTER TABLE kc.order RENAME new_type TO type;

ALTER TABLE kc.order RENAME id TO order_id;

-- migrate:down
ALTER TABLE kc.order ADD COLUMN old_type SMALLINT;
UPDATE kc.order SET old_type = CASE WHEN type = 'BUY' THEN 0 ELSE 1 END;
ALTER TABLE kc.order ALTER old_type SET NOT NULL;
ALTER TABLE kc.order DROP type;
ALTER TABLE kc.order RENAME old_type TO type;

DROP TABLE kc.trade;
