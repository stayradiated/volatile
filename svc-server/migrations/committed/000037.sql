--! Previous: sha1:cbdfca36597b227bc66930e402aea4dc1cb7e362
--! Hash: sha1:0c8d8bf072a2e182b18399c506bd70ffa1b01aaa

ALTER TABLE "balance" ALTER COLUMN total_balance TYPE NUMERIC(18, 8);
ALTER TABLE "balance" ALTER COLUMN available_balance TYPE NUMERIC(18, 8);
