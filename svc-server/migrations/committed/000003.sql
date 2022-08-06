--! Previous: sha1:4e6c3860280f311021b744981389e41fdd44f5b1
--! Hash: sha1:9005e1eea74a9e8167d1752a9928bd05ba84db10

ALTER TABLE "dca_order" DROP COLUMN IF EXISTS user_exchange_keys_uid;
ALTER TABLE "dca_order" ADD COLUMN user_exchange_keys_uid UUID;

ALTER TABLE "dca_order" DROP CONSTRAINT IF EXISTS fk_dca_order_user_exchange_keys;
ALTER TABLE "dca_order" ADD CONSTRAINT fk_dca_order_user_exchange_keys
  FOREIGN KEY(user_exchange_keys_uid) REFERENCES user_exchange_keys(uid)
  ON DELETE CASCADE ON UPDATE CASCADE;

UPDATE "dca_order" as d
SET user_exchange_keys_uid = k.uid
FROM user_exchange_keys as k
WHERE d.exchange_uid = k.exchange_uid;

ALTER TABLE "dca_order"
ALTER COLUMN user_exchange_keys_uid SET NOT NULL;

ALTER TABLE "user_exchange_keys" DROP CONSTRAINT IF EXISTS unique_user_exchange_keys_user_uid_exchange_uid;
