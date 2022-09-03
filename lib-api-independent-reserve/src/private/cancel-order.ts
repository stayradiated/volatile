import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import type { Config } from '../util/types.js'
import { post, getResponseBody } from '../util/client.js'

type CancelOrderOptions = {
  config: Config
  // The guid of currently open or partially filled order.
  orderGuid: string
}

const responseSchema = z.object({
  /* eslint-disable @typescript-eslint/naming-convention */
  AvgPrice: z.number().nullable(),
  CreatedTimestampUtc: z.string(),
  FeePercent: z.number(),
  OrderGuid: z.string(),
  Price: z.number(),
  PrimaryCurrencyCode: z.string(),
  ReservedAmount: z.number(),
  SecondaryCurrencyCode: z.string(),
  Status: z.enum([
    'Filled',
    'PartiallyFilledAndCancelled',
    'Cancelled',
    'PartiallyFilledAndExpired',
    'Expired',
  ]),
  Type: z.enum(['LimitBid', 'LimitOffer']),
  VolumeCurrencyType: z.enum(['Primary', 'Secondary']),
  VolumeFilled: z.number(),
  VolumeOrdered: z.number(),
  /* eslint-enable @typescript-eslint/naming-convention */
})

const cancelOrder = async (
  options: CancelOrderOptions,
): Promise<[boolean | Error, Kanye?]> => {
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
