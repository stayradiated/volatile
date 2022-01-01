-- migrate:up
CREATE TABLE kc.balance(
  user_uid UUID NOT NULL,
  exchange_uid UUID NOT NULL,
  currency_symbol TEXT NOT NULL,
  timestamp timestamptz NOT NULL,
  total_balance NUMERIC(16,8) NOT NULL,
  available_balance NUMERIC(16,8) NOT NULL,

  PRIMARY KEY (user_uid, exchange_uid, currency_symbol, timestamp),
  CONSTRAINT fk_balance_user
    FOREIGN KEY(user_uid) REFERENCES kc.user(uid)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_balance_exchange
    FOREIGN KEY(exchange_uid) REFERENCES kc.exchange(uid)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- migrate:down
DROP TABLE kc.balance;
