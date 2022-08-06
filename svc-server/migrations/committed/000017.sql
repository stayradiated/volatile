--! Previous: sha1:d1b243191df6b68cc3b63716248966e134d84f98
--! Hash: sha1:cd338f629f88f95f594c77079f66f80892d27c1f

ALTER TABLE "trade" DROP COLUMN IF EXISTS total_value;
ALTER TABLE "trade" ADD COLUMN total_value NUMERIC(12, 2);
UPDATE "trade" set total_value = value + fee;
ALTER TABLE "trade" ALTER COLUMN total_value SET NOT NULL;
