import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import { request, getResponseBody } from '../util/client.js'
import type { Config } from '../util/types.js'

type CreateOrderOptions = {
  config: Config
  order: {
    // The amount of the order
    amount: number
    // The trading pair you wish to place the order for
    tradingPair: string
    // Whether you wish to place an order on the buy or sell side
    side: 'BUY' | 'SELL'
    // The type of order you wish to place
    orderType: 'LIMIT' | 'MARKET'
    // The time in force option you wish to use ofr the order
    timeInForce: 'GOOD_TIL_CANCELLED' | 'IMMEDIATE_OR_CANCEL' | 'FILL_OR_KILL'
    // The limit price for the order if it is a limit order type
    limit?: number
  }
}

const createOrderSchema = z.object({
  order: z.object({ orderId: z.string() }),
})

const responseSchema = z.tuple([createOrderSchema])

type CreateOrderResult = z.infer<typeof createOrderSchema>

const createOrder = async (
  options: CreateOrderOptions,
): Promise<[CreateOrderResult | Error, Kanye?]> => {
  const { config, order } = options

  const raw = await request({
    config,
    method: 'POST',
    endpoint: 'orders',
    body: order,
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  if (result instanceof Error) {
    const error = new Error(
      `Could not create order on dasset.com.
${JSON.stringify({ order })}`,
      {
        cause: result,
      },
    )
    return [error, raw]
  }

  return [result[0], raw]
}

export { createOrder }
export type { CreateOrderOptions, CreateOrderResult }
