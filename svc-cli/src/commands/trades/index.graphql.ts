import * as Types from '../../types.graphql';

export type GetTradesQueryVariables = Types.Exact<{
  assetSymbol: Types.Scalars['String'];
  limit: Types.Scalars['Int'];
  offset: Types.Scalars['Int'];
}>;


export type GetTradesQuery = { __typename?: 'query_root', trade_aggregate: { __typename?: 'trade_aggregate', aggregate?: { __typename?: 'trade_aggregate_fields', count: number } | null }, trade: Array<{ __typename?: 'trade', trade_id: string, timestamp: string, volume: number, primary_currency: string, type: string, price: number, fee: number, total_value: number, exchange: { __typename?: 'exchange', id: string }, order?: { __typename?: 'order', created_at: string } | null }> };
