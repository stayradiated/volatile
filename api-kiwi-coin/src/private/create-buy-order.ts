import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError, APIError } from '../util/error.js'
import { client } from '../util/client.js'
import { createSignedBody } from '../util/signature.js'
import { isAPIErrorBody, APIErrorBody } from '../util/is-api-error-body.js'
import type { Config, Order } from '../util/types.js'

type CreateBuyOrderOptions = { config: Config; price: number; amount: number }
type CreateBuyOrderResult = Order

const createBuyOrder = async (
  options: CreateBuyOrderOptions,
): Promise<CreateBuyOrderResult | Error> => {
  const { config, price, amount } = options

  const endpoint = 'buy'

  const body = createSignedBody(config, endpoint, {
    price: String(price),
    amount: String(amount),
  })
  if (body instanceof Error) {
    return body
  }

  const result = await errorBoundary<Order | APIErrorBody>(async () =>
    client.post(endpoint, { body }).json(),
  )
  if (result instanceof Error) {
    return new NetError({
      message: 'Could not create buy order on kiwi-coin.com',
      cause: result,
      context: {
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

export { createBuyOrder }
export type { CreateBuyOrderOptions, CreateBuyOrderResult }
