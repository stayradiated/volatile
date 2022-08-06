--! Previous: sha1:7a903ace5d2832d4d840680bd78c29da9c21534a
--! Hash: sha1:7f5527322df2f8785aaeeb92bb7b1bdb61d6178e

ALTER TABLE "dca_order_history" DROP COLUMN IF EXISTS symbol;
ALTER TABLE "dca_order_history" ADD COLUMN symbol VARCHAR(4);
UPDATE "dca_order_history" SET symbol=dca_order.symbol FROM dca_order WHERE dca_order_history.dca_order_uid = dca_order.uid;
ALTER TABLE "dca_order_history" ALTER COLUMN symbol SET NOT NULL;
