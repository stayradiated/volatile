import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError } from '../util/error.js'
import { client } from '../util/client.js'
import { createSignedBody } from '../util/signature.js'
import type { Config } from '../util/types.js'

type CancelOrderOptions = {
  config: Config
  orderID: number
}

type CancelOrderResult = boolean | { error: string }

const cancelOrder = async (
  options: CancelOrderOptions,
): Promise<CancelOrderResult | Error> => {
  const { config, orderID } = options

  const endpoint = 'cancel_order'

  const body = createSignedBody(config, endpoint, {
    id: String(orderID),
  })
  if (body instanceof Error) {
    return body
  }

  const result = await errorBoundary(async () =>
    client.post(endpoint, { body }).json(),
  )
  if (result instanceof Error) {
    return new NetError({
      message: `Could not cancel order "${orderID}" on kiwi-coin.com`,
      cause: result,
      context: {
        config,
        orderID,
      },
    })
  }

  return result
}

export { cancelOrder }
export type { CancelOrderOptions, CancelOrderResult }
