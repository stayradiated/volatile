import type { Kanye } from '@volatile/kanye'

import { request, getResponseBody } from '../util/client.js'
import { buildPaginationSearchParams } from '../util/pagination.js'

import type { PaginationOptions, PaginatedList, Config } from '../util/types.js'

type Order = {
  id: string
  baseSymbol: string
  quoteSymbol: string
  product: string
  timestamp: string
  type: 'BUY' | 'SELL'
  description: string
  status: 'Cancelled' | 'Completed' | 'Partially filled'
  baseAmount: number
  quoteAmount: number | undefined
  details: {
    precision: number
    orderType: string
    price: number | undefined
    total: number | undefined
    orderId: string
    filled: number
    fee: number | undefined
    nzdFee: number | undefined
  }
  isOpen: boolean
}

type GetClosedOrderListOptions = PaginationOptions & {
  config: Config
}

type GetClosedOrderListResult = PaginatedList<Order>

const getClosedOrderList = async (
  options: GetClosedOrderListOptions,
): Promise<[GetClosedOrderListResult | Error, Kanye?]> => {
  const { config } = options

  const raw = await request({
    config,
    method: 'GET',
    endpoint: 'orders',
    searchParams: buildPaginationSearchParams(options),
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<[GetClosedOrderListResult]>(raw)
  if (result instanceof Error) {
    const error = new Error('Could not get closed order list from dasset.com', {
      cause: result,
    })
    return [error, raw]
  }

  return [result[0], raw]
}

export { getClosedOrderList }
export type { GetClosedOrderListOptions, GetClosedOrderListResult }
