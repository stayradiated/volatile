import { errorBoundary } from '@stayradiated/error-boundary'

import { client } from '../util/client.js'
import { NetError, getCause } from '../util/error.js'
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
  status: 'Cancelled' | 'Completed' | 'Partially filled'
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

type GetClosedOrderListOptions = PaginationOptions & {
  config: Config
}

type GetClosedOrderListResult = PaginatedList<Order>

const getClosedOrderList = async (
  options: GetClosedOrderListOptions,
): Promise<GetClosedOrderListResult | Error> => {
  const { config } = options

  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return headers
  }

  const result = await errorBoundary(async () =>
    client
      .get('orders', {
        headers,
        searchParams: buildPaginationSearchParams(options),
      })
      .json(),
  )
  if (result instanceof Error) {
    return new NetError({
      message: 'Could not get closed order list from dasset.com',
      cause: await getCause(result),
    })
  }

  return result[0] as GetClosedOrderListResult
}

export { getClosedOrderList }
export type { GetClosedOrderListOptions, GetClosedOrderListResult }
