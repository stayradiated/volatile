import * as Types from '../../types.graphql'

export type GetMarketPriceQueryVariables = Types.Exact<{
  assetSymbol: Types.Scalars['String']
}>

export type GetMarketPriceQuery = {
  __typename?: 'query_root'
  kc_market: Array<{
    __typename?: 'kc_market'
    name: string
    market_prices: Array<{
      __typename?: 'kc_market_price'
      timestamp: any
      asset_symbol: string
      currency: any
      fx_rate: any
      price: any
      price_nzd: any
    }>
  }>
}
