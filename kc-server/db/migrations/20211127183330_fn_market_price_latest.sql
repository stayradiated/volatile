-- migrate:up
CREATE OR REPLACE FUNCTION market_price_latest(asset_symbol text, currency text, market_uid uuid)
RETURNS SETOF market_price AS $$
DECLARE 
  _asset_symbol ALIAS FOR asset_symbol; 
  _currency ALIAS FOR currency;
  _market_uid ALIAS FOR market_uid;
BEGIN
  RETURN QUERY
    SELECT market_price.*
    FROM market_price
    WHERE market_price.asset_symbol = _asset_symbol
      AND market_price.currency = _currency
      AND market_price.market_uid = _market_uid
      AND market_price.timestamp = (
        SELECT max(timestamp)
        FROM market_price
        WHERE market_price.currency = _currency
        AND market_price.asset_symbol = _asset_symbol
        AND market_price.market_uid = _market_uid
      )
    LIMIT 1;
END;
$$ LANGUAGE plpgsql STABLE;

-- migrate:down
DROP FUNCTION market_price_latest;
