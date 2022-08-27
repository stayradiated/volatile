import * as Types from '../../types.graphql';

export type GetDcaOrdersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetDcaOrdersQuery = { __typename?: 'query_root', dcaOrder: Array<{ __typename?: 'DcaOrder', primaryCurrencySymbol: string, secondaryCurrencySymbol: string, startAt: string, dailyAverage: number, marketOffset: number, minValue?: number | null, maxValue?: number | null, exchange: { __typename?: 'Exchange', id: string }, market: { __typename?: 'Market', id: string }, dcaOrderHistories: Array<{ __typename?: 'DcaOrderHistory', createdAt: string, marketPrice: number, marketOffset: number, availableBalance: number, targetValue: number, createdOrder: boolean, description: string, primaryCurrency: string, secondaryCurrency: string, order?: { __typename?: 'Order', price: number, volume: number, value: number } | null }> }> };
