import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError, APIError } from '../util/error.js'
import { client } from '../util/client.js'
import { createSignedBody } from '../util/signature.js'
import { isAPIErrorBody, APIErrorBody } from '../util/is-api-error-body.js'
import type { Config, Order } from '../util/types.js'

type BuyOptions = { price: number; amount: number }

const buy = async (
  config: Config,
  options: BuyOptions,
): Promise<Order | Error> => {
  const endpoint = 'buy'
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
      message: 'Could not create buy order on kiwi-coin.com',
      cause: result,
      context: {
        config,
        options,
      },
    })
  }

  if (isAPIErrorBody(result)) {
    return new APIError({
      message: 'Received error when creating buy order on kiwi-coin.com',
      context: {
        result,
      },
    })
  }

  return result
}

export { buy }
export type { BuyOptions }
