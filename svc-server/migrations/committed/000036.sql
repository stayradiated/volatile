--! Previous: sha1:d9b03da146692a05c836828a73d71ac2c620ac88
--! Hash: sha1:cbdfca36597b227bc66930e402aea4dc1cb7e362

DROP TABLE IF EXISTS "balance";
CREATE TABLE "balance"(
  uid UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  user_uid UUID NOT NULL,
  exchange_uid UUID NOT NULL,
  user_exchange_keys_uid UUID NOT NULL,
  currency_symbol TEXT NOT NULL,
  total_balance NUMERIC(16,8) NOT NULL,
  available_balance NUMERIC(16,8) NOT NULL,

  PRIMARY KEY (uid),
  CONSTRAINT fk_balance_user
    FOREIGN KEY(user_uid) REFERENCES "user"(uid)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_balance_exchange
    FOREIGN KEY(exchange_uid) REFERENCES "exchange"(uid)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_balance_user_exchange_keys
    FOREIGN KEY(user_exchange_keys_uid) REFERENCES "user_exchange_keys"(uid)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_balance_currency_symbol
    FOREIGN KEY(currency_symbol) REFERENCES "currency"(symbol)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
