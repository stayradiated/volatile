import * as z from 'zod'
import type { Kanye } from '@volatile/kanye'

import type { Config } from '../util/types.js'
import { post, getResponseBody } from '../util/client.js'

type GetClosedFilledOrdersOptions = {
  config: Config
  primaryCurrencyCode?: string // The primary currency of orders. This is an optional parameter.
  secondaryCurrencyCode?: string // The secondary currency of orders. This is an optional parameter.
  pageIndex: number // The page index. Must be greater or equal to 1
  pageSize: number // Must be greater or equal to 1 and less than or equal to 50. If a number greater than 50 is specified, then 50 will be used.
}

/* eslint-disable @typescript-eslint/naming-convention */
const responseSchema = z.object({
  PageSize: z.number(),
  TotalItems: z.number(),
  TotalPages: z.number(),
  Data: z.array(
    z.object({
      AvgPrice: z.number(),
      CreatedTimestampUtc: z.string(),
      FeePercent: z.number(),
      OrderGuid: z.string(),
      OrderType: z.string(),
      Outstanding: z.number(),
      Price: z.undefined(),
      PrimaryCurrencyCode: z.string(),
      SecondaryCurrencyCode: z.string(),
      Status: z.enum([
        'Filled',
        'PartiallyFilledAndCancelled',
        'PartiallyFilledAndExpired',
      ]),
      Value: z.number(),
      Volume: z.number(),
    }),
  ),
})
/* eslint-enable @typescript-eslint/naming-convention */

type GetClosedFilledOrdersResult = z.infer<typeof responseSchema>

const getClosedFilledOrders = async (
  options: GetClosedFilledOrdersOptions,
): Promise<[GetClosedFilledOrdersResult | Error, Kanye?]> => {
  const {
    config,
    primaryCurrencyCode,
    secondaryCurrencyCode,
    pageIndex,
    pageSize,
  } = options
  const raw = await post(config, 'Private/GetClosedFilledOrders', {
    primaryCurrencyCode,
    secondaryCurrencyCode,
    pageIndex,
    pageSize,
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  return [result, raw]
}

export { getClosedFilledOrders }
