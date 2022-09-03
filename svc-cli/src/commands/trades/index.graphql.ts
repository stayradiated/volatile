import type * as Types from '../../types.graphql'

export type GetTradesQueryVariables = Types.Exact<{
  assetSymbol: Types.Scalars['String']
  limit: Types.Scalars['Int']
  offset: Types.Scalars['Int']
}>

export type GetTradesQuery = {
  __typename?: 'query_root'
  tradeAggregate: {
    __typename?: 'TradeAggregate'
    aggregate?:
      | { __typename?: 'TradeAggregateFields'; count: number }
      | undefined
  }
  trade: Array<{
    __typename?: 'Trade'
    tradeId: string
    timestamp: string
    volume: number
    primaryCurrency: string
    type: string
    price: number
    fee: number
    totalValue: number
    exchange: { __typename?: 'Exchange'; id: string }
    order?: { __typename?: 'Order'; createdAt: string } | undefined
  }>
}
