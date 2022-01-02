-- migrate:up
ALTER TABLE kc.balance ALTER COLUMN total_balance TYPE NUMERIC(18, 8);
ALTER TABLE kc.balance ALTER COLUMN available_balance TYPE NUMERIC(18, 8);

-- migrate:down
ALTER TABLE kc.balance ALTER COLUMN total_balance TYPE NUMERIC(16, 8);
ALTER TABLE kc.balance ALTER COLUMN available_balance TYPE NUMERIC(16, 8);
