--! Previous: sha1:7d057867b12e306858e27e4a02931d988f31ab29
--! Hash: sha1:d9b03da146692a05c836828a73d71ac2c620ac88

DROP TABLE IF EXISTS "balance";
CREATE TABLE "balance"(
  user_uid UUID NOT NULL,
  exchange_uid UUID NOT NULL,
  currency_symbol TEXT NOT NULL,
  timestamp timestamptz NOT NULL,
  total_balance NUMERIC(16,8) NOT NULL,
  available_balance NUMERIC(16,8) NOT NULL,

  PRIMARY KEY (user_uid, exchange_uid, currency_symbol, timestamp),
  CONSTRAINT fk_balance_user
    FOREIGN KEY(user_uid) REFERENCES "user"(uid)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_balance_exchange
    FOREIGN KEY(exchange_uid) REFERENCES "exchange"(uid)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
