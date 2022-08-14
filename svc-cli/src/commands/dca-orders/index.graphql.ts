import * as Types from '../../types.graphql';

export type GetDcaOrdersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetDcaOrdersQuery = { __typename?: 'query_root', dca_order: Array<{ __typename?: 'dca_order', primary_currency_symbol: string, secondary_currency_symbol: string, start_at: string, daily_average: number, market_offset: number, min_value?: number | null, max_value?: number | null, exchange: { __typename?: 'exchange', id: string }, market: { __typename?: 'market', id: string }, dca_order_histories: Array<{ __typename?: 'dca_order_history', created_at: string, market_price: number, market_offset: number, available_balance: number, target_value: number, created_order: boolean, description: string, primary_currency: string, secondary_currency: string, order?: { __typename?: 'order', price: number, volume: number, value: number } | null }> }> };
