import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError } from '../util/error.js'
import { client } from '../util/client.js'
import { createSignedBody } from '../util/signature.js'
import type { Config, Order } from '../util/types.js'

type OpenOrdersResult = Order[]

const openOrders = async (
  config: Config,
): Promise<OpenOrdersResult | Error> => {
  const endpoint = 'open_orders'
  const result = await errorBoundary(async () =>
    client.post(endpoint, { body: createSignedBody(config, endpoint) }).json(),
  )
  if (result instanceof Error) {
    return new NetError({
      message: 'Could not fetch open orders from kiwi-coin.com',
      cause: result,
      context: {
        config,
      },
    })
  }

  return result
}

export { openOrders }
export type { Order, OpenOrdersResult }
