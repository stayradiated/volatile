import type { Kanye } from '@volatile/kanye'
import { kanye } from '@volatile/kanye'

import { requestOptions, getResponseBody } from '../util/client.js'
import { buildHeaders } from '../util/build-headers.js'
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

  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return [headers, undefined]
  }

  const raw = await kanye(`orders/${orderId}`, {
    ...requestOptions(config),
    method: 'DELETE',
    headers,
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
