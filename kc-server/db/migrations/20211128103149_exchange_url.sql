-- migrate:up
ALTER TABLE kc.exchange ADD COLUMN url TEXT NOT NULL DEFAULT '';
ALTER TABLE kc.exchange ALTER COLUMN url DROP DEFAULT;

-- migrate:down
ALTER TABLE kc.exchange DROP COLUMN url;
