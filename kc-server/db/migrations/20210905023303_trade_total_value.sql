-- migrate:up
ALTER TABLE kc.trade ADD COLUMN total_value NUMERIC(12, 2);
UPDATE kc.trade set total_value = value + fee;
ALTER TABLE kc.trade ALTER COLUMN total_value SET NOT NULL;

-- migrate:down
ALTER TABLE kc.trade DROP COLUMN total_value;

