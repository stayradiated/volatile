import { errorBoundary } from '@stayradiated/error-boundary'

import type { Config } from '../types.js'
import { createSignedBody } from '../signature.js'
import { client } from '../client.js'

type CancelOrderOptions = {
  config: Config
  // The guid of currently open or partially filled order.
  orderGuid: string
}

type CancelOrderResult = Record<string, unknown>

const cancelOrder = async (
  options: CancelOrderOptions,
): Promise<CancelOrderResult | Error> => {
  const { config, orderGuid } = options
  const endpoint = 'Private/CancelOrder'

  return errorBoundary(async () =>
    client
      .post(endpoint, {
        json: createSignedBody({
          config,
          endpoint,
          parameters: {
            orderGuid,
          },
        }),
      })
      .json(),
  )
}

export { cancelOrder }
