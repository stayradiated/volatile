import { kanye, Kanye, APIError } from '@volatile/kanye'

import { requestOptions, getResponseBody } from '../util/client.js'
import { buildHeaders } from '../util/build-headers.js'
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
  status: 'Open'
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

type GetOpenOrderListOptions = PaginationOptions & {
  config: Config
}
type GetOpenOrderListResult = PaginatedList<Order>

const getOpenOrderList = async (
  options: GetOpenOrderListOptions,
): Promise<[GetOpenOrderListResult | Error, Kanye?]> => {
  const { config } = options

  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return [headers, undefined]
  }

  const raw = await kanye('orders/open', {
    ...requestOptions(config),
    method: 'GET',
    headers,
    searchParams: buildPaginationSearchParams(options),
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<[GetOpenOrderListResult]>(raw)
  if (result instanceof Error) {
    const error = new APIError({
      message: 'Could not get open order list from dasset.com',
      cause: result,
    })
    return [error, raw]
  }

  return [result[0], raw]
}

export { getOpenOrderList }
export type { GetOpenOrderListOptions, GetOpenOrderListResult }
