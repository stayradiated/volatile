import type { Config } from '../util/types.js'
import { post } from '../util/client.js'

type CancelOrderOptions = {
  config: Config
  // The guid of currently open or partially filled order.
  orderGuid: string
}

type CancelOrderResult = boolean

const cancelOrder = async (
  options: CancelOrderOptions,
): Promise<CancelOrderResult | Error> => {
  const { config, orderGuid } = options
  const result = await post(config, 'Private/CancelOrder', {
    orderGuid,
  })
  if (result instanceof Error) {
    if (
      result.message.includes(
        'Order is in an invalid state to be cancelled (Filled)',
      )
    ) {
      return false
    }

    return result
  }

  return true
}

export { cancelOrder }
