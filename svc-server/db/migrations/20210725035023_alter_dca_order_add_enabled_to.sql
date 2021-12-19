-- migrate:up
ALTER TABLE kc.dca_order ADD COLUMN enabled_at TIMESTAMPTZ NULL;

-- migrate:down
ALTER TABLE kc.dca_order DROP COLUMN enabled_at;
