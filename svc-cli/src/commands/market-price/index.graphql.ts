import * as Types from '../../types.graphql';

export type GetMarketPriceQueryVariables = Types.Exact<{
  assetSymbol: Types.Scalars['String'];
  timestamp: Types.Scalars['timestamptz'];
}>;


export type GetMarketPriceQuery = { __typename?: 'query_root', marketPrice: Array<{ __typename?: 'MarketPrice', timestamp: string, assetSymbol: string, sourcePrice: number, sourceCurrency: string, fxRate: number, price: number, currency: string, market: { __typename?: 'Market', name: string } }> };
