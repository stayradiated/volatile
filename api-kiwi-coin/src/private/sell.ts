import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError, APIError } from '../util/error.js'
import { client } from '../util/client.js'
import { createSignedBody } from '../util/signature.js'
import { isAPIErrorBody, APIErrorBody } from '../util/is-api-error-body.js'
import type { Config, Order } from '../util/types.js'

type SellOptions = { price: number; amount: number }

const sell = async (
  config: Config,
  options: SellOptions,
): Promise<Order | Error> => {
  const endpoint = 'sell'
  const result = await errorBoundary<Order | APIErrorBody>(async () =>
    client
      .post(endpoint, {
        body: createSignedBody(config, endpoint, {
          price: options.price.toString(),
          amount: options.amount.toString(),
        }),
      })
      .json(),
  )
  if (result instanceof Error) {
    return new NetError({
      message: 'Could not create sell order on kiwi-coin.com',
      cause: result,
      context: {
        config,
        options,
      },
    })
  }

  if (isAPIErrorBody(result)) {
    return new APIError({
      message: 'Received error when creating sell order on kiwi-coin.com',
      context: {
        result,
      },
    })
  }

  return result
}

export { sell }
export type { SellOptions }
