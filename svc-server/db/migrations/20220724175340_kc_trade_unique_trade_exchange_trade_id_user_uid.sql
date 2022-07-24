-- migrate:up
ALTER TABLE kc.trade
DROP CONSTRAINT unique_trade_exchange_trade_id;

ALTER TABLE kc.trade
ADD CONSTRAINT unique_trade_exchange_trade_id_user_uid UNIQUE(exchange_uid, trade_id, user_uid);

-- migrate:down
ALTER TABLE kc.trade
DROP CONSTRAINT unique_trade_exchange_trade_id_user_uid;

ALTER TABLE kc.trade
ADD CONSTRAINT unique_trade_exchange_trade_id UNIQUE(exchange_uid, trade_id);
