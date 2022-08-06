--! Previous: sha1:4f388168e36561420b91725d384f8f9041c12c47
--! Hash: sha1:a719d9b8e5bb039d1dd1ed3c2b47e856595caa39

ALTER TABLE "trade"
DROP CONSTRAINT IF EXISTS unique_trade_exchange_trade_id;

ALTER TABLE "trade"
DROP CONSTRAINT IF EXISTS unique_trade_exchange_trade_id_user_uid;
ALTER TABLE "trade"
ADD CONSTRAINT unique_trade_exchange_trade_id_user_uid UNIQUE(exchange_uid, trade_id, user_uid);
