import type { Kanye } from '@volatile/kanye'

import { request, getResponseBody } from '../util/client.js'
import type { Config } from '../util/types.js'

type CancelOrderOptions = {
  config: Config
  orderId: string
}

type CancelOrderResult = {
  message: string
}

const cancelOrder = async (
  options: CancelOrderOptions,
): Promise<[CancelOrderResult | Error, Kanye?]> => {
  const { config, orderId } = options

  const raw = await request({
    config,
    method: 'DELETE',
    endpoint: `orders/${orderId}`,
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<[CancelOrderResult]>(raw)
  if (result instanceof Error) {
    if (raw.responseStatus === 409) {
      // 409: order has already been cancelled
      return [
        {
          message: 'Order has already been cancelled',
        },
        raw,
      ]
    }

    const error = new Error(
      `Could not cancel order on dasset.com.
${JSON.stringify({ orderId })}`,
      {
        cause: result,
      },
    )
    return [error, raw]
  }

  return [result[0], raw]
}

export { cancelOrder }
export type { CancelOrderOptions, CancelOrderResult }
