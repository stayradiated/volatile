import type * as Types from '../../types.graphql'

export type GetDcaOrdersQueryVariables = Types.Exact<Record<string, never>>

export type GetDcaOrdersQuery = {
  __typename?: 'query_root'
  dcaOrder: Array<{
    __typename?: 'DcaOrder'
    primaryCurrencySymbol: string
    secondaryCurrencySymbol: string
    startAt: string
    dailyAverage: number
    marketOffset: number
    minValue?: number | undefined
    maxValue?: number | undefined
    exchange: { __typename?: 'Exchange'; id: string }
    market: { __typename?: 'Market'; id: string }
    dcaOrderHistories: Array<{
      __typename?: 'DcaOrderHistory'
      createdAt: string
      marketPrice: number
      marketOffset: number
      availableBalance: number
      targetValue: number
      createdOrder: boolean
      description: string
      primaryCurrency: string
      secondaryCurrency: string
      order?:
        | {
            __typename?: 'Order'
            price: number
            volume: number
            value: number
          }
        | undefined
    }>
  }>
}
