import { post } from '../util/client.js'
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

  return post(config, 'cancel_order', {
    id: String(orderID),
  })
}

export { cancelOrder }
export type { CancelOrderOptions, CancelOrderResult }
