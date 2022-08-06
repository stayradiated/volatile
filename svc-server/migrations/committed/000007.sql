--! Previous: sha1:ae1547c44d9d53bb0336251c5221125f18e618e9
--! Hash: sha1:408c4bfd4b108eeaec0aae4a0cb664b3446dbcdb

ALTER TABLE "market_price" DROP COLUMN IF EXISTS symbol;
ALTER TABLE "market_price" ADD COLUMN symbol VARCHAR(5);
UPDATE "market_price" SET symbol='BTC' WHERE symbol IS NULL;
ALTER TABLE "market_price" ALTER COLUMN symbol SET NOT NULL;

ALTER TABLE "market_price" DROP COLUMN IF EXISTS created_at;
ALTER TABLE "market_price" DROP COLUMN IF EXISTS updated_at;
