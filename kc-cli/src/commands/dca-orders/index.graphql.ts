import * as Types from '../../types.graphql'

export type GetDcaOrdersQueryVariables = Types.Exact<Record<string, never>>

export type GetDcaOrdersQuery = {
  __typename?: 'query_root'
  kc_dca_order: Array<{
    __typename?: 'kc_dca_order'
    asset_symbol: string
    start_at: any
    daily_average: any
    market_offset: any
    min_amount_nzd?: Types.Maybe<any>
    max_amount_nzd?: Types.Maybe<any>
    exchange: { __typename?: 'kc_exchange'; id: string }
    market: { __typename?: 'kc_market'; id: string }
    dca_order_histories: Array<{
      __typename?: 'kc_dca_order_history'
      created_at: any
      market_price_nzd: any
      available_balance_nzd: any
      calculated_amount_nzd: any
      created_order: boolean
      description: string
      order?: Types.Maybe<{
        __typename?: 'kc_order'
        price_nzd: any
        amount: any
      }>
    }>
  }>
}
