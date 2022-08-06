--! Previous: sha1:988fe460fd7a46c77f1a29a011376a8fdea0ba7a
--! Hash: sha1:54a71d21d009464a3dd6f9f7f023c0dd2848a041

DROP TABLE IF EXISTS "user_exchange_request";
CREATE TABLE "user_exchange_request"(
  uid UUID NOT NULL,
  user_uid UUID NOT NULL,
  exchange_uid UUID NOT NULL,
  user_exchange_keys_uid UUID NULL,

  method TEXT NOT NULL,
  url TEXT NOT NULL,
  request_at TIMESTAMPTZ NOT NULL,
  request_body TEXT NULL,
  response_at TIMESTAMPTZ NULL,
  response_status INTEGER NULL,
  response_headers JSONB NULL,
  response_body TEXT NULL,
  response_body_at TIMESTAMPTZ NULL,

  PRIMARY KEY (uid),
  CONSTRAINT fk_user_exchange_request_user
    FOREIGN KEY(user_uid) REFERENCES "user"(uid)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_user_exchange_request_exchange
    FOREIGN KEY(exchange_uid) REFERENCES "exchange"(uid)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_user_exchange_request_user_exchange_keys
    FOREIGN KEY(user_exchange_keys_uid) REFERENCES "user_exchange_keys"(uid)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
