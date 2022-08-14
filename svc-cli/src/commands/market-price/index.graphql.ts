import * as Types from '../../types.graphql';

export type GetMarketPriceQueryVariables = Types.Exact<{
  assetSymbol: Types.Scalars['String'];
  timestamp: Types.Scalars['timestamptz'];
}>;


export type GetMarketPriceQuery = { __typename?: 'query_root', market_price: Array<{ __typename?: 'market_price', timestamp: string, asset_symbol: string, source_price: number, source_currency: string, fx_rate: number, price: number, currency: string, market: { __typename?: 'market', name: string } }> };
