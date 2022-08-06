--! Previous: sha1:7f5527322df2f8785aaeeb92bb7b1bdb61d6178e
--! Hash: sha1:0ec17893a40e91b21f34af1e8994804e7d0d8ab6

DROP TABLE IF EXISTS "trade";
CREATE TABLE "trade"(
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
    FOREIGN KEY(user_uid) REFERENCES "user"(uid)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_trade_exchange
    FOREIGN KEY(exchange_uid) REFERENCES "exchange"(uid)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_trade_order
    FOREIGN KEY(order_uid) REFERENCES "order"(uid)
    ON DELETE SET NULL ON UPDATE CASCADE
);

ALTER TABLE "order" DROP COLUMN IF EXISTS new_type;
ALTER TABLE "order" ADD COLUMN new_type VARCHAR(4);
ALTER TABLE "order" ALTER new_type SET NOT NULL;
ALTER TABLE "order" DROP COLUMN IF EXISTS type;
ALTER TABLE "order" RENAME new_type TO type;

CALL rename_column_if_exists('order', 'id', 'order_id');
