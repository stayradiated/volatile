import type * as Types from '../../types.graphql'

export type GetOpenOrdersQueryVariables = Types.Exact<Record<string, never>>

export type GetOpenOrdersQuery = {
  __typename?: 'query_root'
  order: Array<{
    __typename?: 'Order'
    openedAt: string
    price: number
    value: number
    volume: number
    primaryCurrency: string
    secondaryCurrency: string
    type: string
    exchange: { __typename?: 'Exchange'; id: string }
  }>
}
