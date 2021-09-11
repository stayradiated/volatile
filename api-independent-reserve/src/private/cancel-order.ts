import type { Config } from '../util/types.js'
import { post } from '../util/client.js'

type CancelOrderOptions = {
  config: Config
  // The guid of currently open or partially filled order.
  orderGuid: string
}

type CancelOrderResult = Record<string, unknown>

const cancelOrder = async (
  options: CancelOrderOptions,
): Promise<CancelOrderResult | Error> => {
  const { config, orderGuid } = options
  return post(config, 'Private/CancelOrder', {
    orderGuid,
  })
}

export { cancelOrder }
