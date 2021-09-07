import * as Types from '../../types.graphql';

export type GetDcaOrdersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetDcaOrdersQuery = { __typename?: 'query_root', kc_dca_order: Array<{ __typename?: 'kc_dca_order', primary_currency: string, start_at: string, daily_average: number, market_offset: number, min_value?: Types.Maybe<number>, max_value?: Types.Maybe<number>, exchange: { __typename?: 'kc_exchange', id: string }, market: { __typename?: 'kc_market', id: string }, dca_order_histories: Array<{ __typename?: 'kc_dca_order_history', created_at: string, market_price: number, market_offset: number, available_balance: number, target_value: number, created_order: boolean, description: string, order?: Types.Maybe<{ __typename?: 'kc_order', price: number, volume: number, value: number }> }> }> };
