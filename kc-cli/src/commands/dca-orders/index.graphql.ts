import * as Types from '../../types.graphql'

export type GetDcaOrdersQueryVariables = Types.Exact<Record<string, never>>

export type GetDcaOrdersQuery = {
  __typename?: 'query_root'
  kc_dca_order: Array<{
    __typename?: 'kc_dca_order'
    asset_symbol: string
    start_at: string
    daily_average: number
    market_offset: number
    min_amount_nzd?: Types.Maybe<number>
    max_amount_nzd?: Types.Maybe<number>
    exchange: { __typename?: 'kc_exchange'; id: string }
    market: { __typename?: 'kc_market'; id: string }
    dca_order_histories: Array<{
      __typename?: 'kc_dca_order_history'
      created_at: string
      market_price_nzd: number
      available_balance_nzd: number
      calculated_amount_nzd: number
      created_order: boolean
      description: string
      order?: Types.Maybe<{
        __typename?: 'kc_order'
        price_nzd: number
        amount: number
      }>
    }>
  }>
}
