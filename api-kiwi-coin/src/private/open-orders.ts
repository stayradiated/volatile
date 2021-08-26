import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError } from '../util/error.js'
import { client } from '../util/client.js'
import { createSignedBody } from '../util/signature.js'
import type { Config, Order } from '../util/types.js'

type GetOpenOrderListOptions = { config: Config }
type GetOpenOrderListResult = Order[]

const getOpenOrderList = async (
  options: GetOpenOrderListOptions,
): Promise<GetOpenOrderListResult | Error> => {
  const { config } = options

  const endpoint = 'open_orders'

  const body = createSignedBody(config, endpoint)
  if (body instanceof Error) {
    return body
  }

  const result = await errorBoundary(async () =>
    client.post(endpoint, { body }).json(),
  )
  if (result instanceof Error) {
    return new NetError({
      message: 'Could not fetch open orders from kiwi-coin.com',
      cause: result,
    })
  }

  return result
}

export { getOpenOrderList }
export type { GetOpenOrderListOptions, GetOpenOrderListResult }
