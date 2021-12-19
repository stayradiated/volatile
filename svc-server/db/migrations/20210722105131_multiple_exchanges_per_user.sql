-- migrate:up

ALTER TABLE kc.dca_order
ADD COLUMN user_exchange_keys_uid UUID;

ALTER TABLE kc.dca_order
ADD CONSTRAINT fk_dca_order_user_exchange_keys
  FOREIGN KEY(user_exchange_keys_uid) REFERENCES kc.user_exchange_keys(uid)
  ON DELETE CASCADE ON UPDATE CASCADE;

UPDATE kc.dca_order as d
SET user_exchange_keys_uid = k.uid
FROM kc.user_exchange_keys as k
WHERE d.exchange_uid = k.exchange_uid;

ALTER TABLE kc.dca_order
ALTER COLUMN user_exchange_keys_uid SET NOT NULL;

ALTER TABLE kc.user_exchange_keys
DROP CONSTRAINT unique_user_exchange_keys_user_uid_exchange_uid;

-- migrate:down
ALTER TABLE kc.dca_order DROP CONSTRAINT fk_dca_order_user_exchange_keys;
ALTER TABLE kc.dca_order DROP COLUMN user_exchange_keys_uid;
ALTER TABLE kc.user_exchange_keys ADD CONSTRAINT unique_user_exchange_keys_user_uid_exchange_uid UNIQUE(user_uid, exchange_uid);
