import * as Types from '../../types.graphql';

export type GetOpenOrdersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetOpenOrdersQuery = { __typename?: 'query_root', order: Array<{ __typename?: 'order', opened_at: string, price: number, value: number, volume: number, primary_currency: string, secondary_currency: string, type: string, exchange: { __typename?: 'exchange', id: string } }> };
