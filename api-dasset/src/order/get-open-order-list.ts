import { errorBoundary } from '@stayradiated/error-boundary'

import { client } from '../util/client.js'
import { NetError } from '../util/error.js'
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
  quoteAmount: number | null
  details: {
    precision: number
    orderType: string
    price: number | null
    total: number | null
    orderId: string
    filled: number
    fee: number | null
    nzdFee: number | null
  }
  isOpen: boolean
}

type GetOpenOrderListOptions = PaginationOptions & {
  config: Config
}
type GetOpenOrderListResult = PaginatedList<Order>

const getOpenOrderList = async (
  options: GetOpenOrderListOptions,
): Promise<GetOpenOrderListResult | Error> => {
  const { config } = options

  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return headers
  }

  const result = await errorBoundary(async () =>
    client
      .get('orders/open', {
        headers,
        searchParams: buildPaginationSearchParams(options),
      })
      .json(),
  )
  if (result instanceof Error) {
    return new NetError({
      message: 'Could not get open order list from dasset.com',
      cause: result,
      context: {
        config,
      },
    })
  }

  return result[0] as GetOpenOrderListResult
}

export { getOpenOrderList }
export type { GetOpenOrderListOptions, GetOpenOrderListResult }
