import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError } from '../util/error.js'
import { client } from '../util/client.js'
import { createSignedBody } from '../util/signature.js'
import type { Config } from '../util/types.js'

type CancelOrderResult = boolean | { error: string }

const cancelOrder = async (
  config: Config,
  orderId: number,
): Promise<CancelOrderResult | Error> => {
  const endpoint = 'cancel_order'
  const result = await errorBoundary(async () =>
    client
      .post(endpoint, {
        body: createSignedBody(config, endpoint, { id: orderId.toString() }),
      })
      .json(),
  )
  if (result instanceof Error) {
    return new NetError({
      message: `Could not cancel order "${orderId}" on kiwi-coin.com`,
      cause: result,
      context: {
        config,
        orderId,
      },
    })
  }

  return result
}

export { cancelOrder }
export type { CancelOrderResult }
