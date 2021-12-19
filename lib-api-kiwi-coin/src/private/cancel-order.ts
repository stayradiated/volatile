import { post } from '../util/client.js'
import { APIError } from '../util/error.js'
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

  const result = await post(config, 'cancel_order', {
    id: String(orderID),
  })

  if (result instanceof APIError) {
    if (result.info.result?.error === 'Order not found') {
      return false
    }

    return result
  }

  return true
}

export { cancelOrder }
export type { CancelOrderOptions, CancelOrderResult }
