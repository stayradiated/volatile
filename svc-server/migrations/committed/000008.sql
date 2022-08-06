--! Previous: sha1:408c4bfd4b108eeaec0aae4a0cb664b3446dbcdb
--! Hash: sha1:7a903ace5d2832d4d840680bd78c29da9c21534a

ALTER TABLE "dca_order" DROP COLUMN IF EXISTS symbol;
ALTER TABLE "dca_order" ADD COLUMN symbol VARCHAR(4);
UPDATE "dca_order" SET symbol='BTC';
ALTER TABLE "dca_order" ALTER COLUMN symbol SET NOT NULL;
