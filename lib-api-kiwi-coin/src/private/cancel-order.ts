import { Kanye, APIError } from '@volatile/kanye'

import { post, getResponseBody } from '../util/client.js'
import type { Config } from '../util/types.js'

type CancelOrderOptions = {
  config: Config
  orderID: number
}

const cancelOrder = async (
  options: CancelOrderOptions,
): Promise<[boolean | Error, Kanye?]> => {
  const { config, orderID } = options

  const raw = await post(config, 'cancel_order', {
    id: String(orderID),
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw)

  if (result instanceof APIError) {
    if (result.info.result?.error === 'Order not found') {
      return [false, raw]
    }

    return [result, raw]
  }

  return [true, raw]
}

export { cancelOrder }
export type { CancelOrderOptions }
