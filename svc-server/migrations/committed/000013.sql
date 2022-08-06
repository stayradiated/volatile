--! Previous: sha1:ea4fcbc4369461b3d745c282b432f1692b67dde2
--! Hash: sha1:f0da191116ecb6035d962a1e9283741f5ddb201d

ALTER TABLE "market_price" DROP CONSTRAINT IF EXISTS market_price_pkey;
ALTER TABLE "market_price" ADD PRIMARY KEY ("timestamp", market_uid, symbol);
