import * as Types from '../../types.graphql'

export type GetTradesQueryVariables = Types.Exact<{
  assetSymbol: Types.Scalars['String']
  limit: Types.Scalars['Int']
  offset: Types.Scalars['Int']
}>

export type GetTradesQuery = {
  __typename?: 'query_root'
  kc_trade_aggregate: {
    __typename?: 'kc_trade_aggregate'
    aggregate?: Types.Maybe<{
      __typename?: 'kc_trade_aggregate_fields'
      count: number
    }>
  }
  kc_trade: Array<{
    __typename?: 'kc_trade'
    timestamp: string
    amount: number
    asset_symbol: string
    type: string
    price_nzd: number
    total_nzd: number
    fee_nzd: number
    exchange: { __typename?: 'kc_exchange'; id: string }
    order?: Types.Maybe<{
      __typename?: 'kc_order'
      created_at: string
      order_id: string
    }>
  }>
}
