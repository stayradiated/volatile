import { errorBoundary } from '@stayradiated/error-boundary'
import { HTTPError } from 'ky'

import { client } from '../util/client.js'
import { NetError, getCause } from '../util/error.js'
import { APIError, APIErrorResponse } from '../util/api-error.js'
import { buildHeaders } from '../util/build-headers.js'
import type { Config } from '../util/types.js'

type CancelOrderOptions = {
  config: Config
  orderID: string
}

type CancelOrderResult = {
  message: string
}

const cancelOrder = async (
  options: CancelOrderOptions,
): Promise<CancelOrderResult | Error> => {
  const { config, orderID } = options

  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return headers
  }

  const result = await errorBoundary<CancelOrderResult[]>(async () =>
    client
      .delete(`orders/${orderID}`, {
        headers,
      })
      .json(),
  )
  if (result instanceof Error) {
    if (result instanceof HTTPError) {
      const response = (await result.response.json()) as APIErrorResponse
      return new APIError(result.response.url, response)
    }

    return new NetError({
      message: 'Could not cancel order on dasset.com',
      cause: await getCause(result),
      context: {
        orderID,
      },
    })
  }

  return result[0]!
}

export { cancelOrder }
export type { CancelOrderOptions, CancelOrderResult }
