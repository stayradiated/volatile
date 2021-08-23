import { errorBoundary } from '@stayradiated/error-boundary'

import { client } from '../util/client.js'
import { NetError } from '../util/error.js'
import { buildHeaders } from '../util/build-headers.js'
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

type CreateOrderResult = {
  order: { orderId: string }
}

const createOrder = async (
  options: CreateOrderOptions,
): Promise<CreateOrderResult | Error> => {
  const { config, order } = options

  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return headers
  }

  const result = await errorBoundary(async () =>
    client
      .post('orders', {
        headers,
        json: order,
      })
      .json(),
  )
  if (result instanceof Error) {
    return new NetError({
      message: 'Could not create order on dasset.com',
      cause: result,
      context: {
        config,
        order,
      },
    })
  }

  return result[0] as CreateOrderResult
}

export { createOrder }
export type { CreateOrderOptions, CreateOrderResult }
