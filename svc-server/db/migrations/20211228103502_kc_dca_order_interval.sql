-- migrate:up
ALTER TABLE kc.dca_order ADD COLUMN interval_ms INTEGER NOT NULL DEFAULT 5 CHECK (interval_ms >= 0);
ALTER TABLE kc.dca_order ALTER COLUMN interval_ms DROP DEFAULT;

ALTER TABLE kc.dca_order ADD COLUMN last_run_at timestamptz NULL;
ALTER TABLE kc.dca_order ADD COLUMN next_run_at timestamptz NULL;

-- migrate:down
ALTER TABLE kc.dca_order DROP COLUMN interval_ms;
ALTER TABLE kc.dca_order DROP COLUMN last_run_at;
ALTER TABLE kc.dca_order DROP COLUMN next_run_at;
