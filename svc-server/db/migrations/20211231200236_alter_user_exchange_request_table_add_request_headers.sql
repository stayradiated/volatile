-- migrate:up
ALTER TABLE kc.user_exchange_request ADD COLUMN request_headers JSONB NULL;

-- migrate:down
ALTER TABLE kc.user_exchange_request DROP COLUMN request_headers;
