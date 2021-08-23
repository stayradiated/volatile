import * as Types from '../../types.graphql'

export type GetOpenOrdersQueryVariables = Types.Exact<Record<string, never>>

export type GetOpenOrdersQuery = {
  __typename?: 'query_root'
  kc_order: Array<{
    __typename?: 'kc_order'
    opened_at: string
    amount: number
    price_nzd: number
    asset_symbol: string
    type: string
    exchange: { __typename?: 'kc_exchange'; id: string }
  }>
}
