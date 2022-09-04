import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import { request, getResponseBody } from '../util/client.js'
import { buildPaginationSearchParams } from '../util/pagination.js'

import type { PaginationOptions, Config } from '../util/types.js'
import { paginatedListSchema } from '../util/schemas.js'

const orderSchema = z.object({
  id: z.string(),
  baseSymbol: z.string(),
  quoteSymbol: z.string(),
  product: z.string(),
  timestamp: z.string(),
  type: z.enum(['BUY', 'SELL']),
  description: z.string(),
  status: z.enum(['Cancelled', 'Completed', 'Partially filled']),
  baseAmount: z.number(),
  quoteAmount: z.number().optional(),
  details: z.object({
    precision: z.number(),
    orderType: z.string(),
    price: z.number().optional(),
    total: z.number().optional(),
    orderId: z.string(),
    filled: z.number(),
    fee: z.number().optional(),
    nzdFee: z.number().optional(),
  }),
  isOpen: z.boolean(),
})

const paginatedOrderListSchema = paginatedListSchema(orderSchema)
const responseSchema = z.tuple([paginatedOrderListSchema])

type GetClosedOrderListResult = z.infer<typeof paginatedOrderListSchema>

type GetClosedOrderListOptions = PaginationOptions & {
  config: Config
}

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

  const result = getResponseBody(raw, responseSchema)
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
