import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import type { Config } from '../util/types.js'
import { post, getResponseBody } from '../util/client.js'

type CancelOrderOptions = {
  config: Config
  // The guid of currently open or partially filled order.
  orderGuid: string
}

const responseSchema = z.boolean()

type CancelOrderResult = z.infer<typeof responseSchema>

const cancelOrder = async (
  options: CancelOrderOptions,
): Promise<[CancelOrderResult | Error, Kanye?]> => {
  const { config, orderGuid } = options
  const raw = await post(config, 'Private/CancelOrder', {
    orderGuid,
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  if (result instanceof Error) {
    if (
      result.message.includes(
        'Order is in an invalid state to be cancelled (Filled)',
      )
    ) {
      return [false, raw]
    }

    return [result, raw]
  }

  return [true, raw]
}

export { cancelOrder }
