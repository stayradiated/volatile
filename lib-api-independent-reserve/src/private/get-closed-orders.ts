import * as z from 'zod'
import type { Kanye } from '@volatile/kanye'

import type { Config } from '../util/types.js'
import { post, getResponseBody } from '../util/client.js'

type GetClosedOrdersOptions = {
  config: Config
  primaryCurrencyCode?: string // The primary currency of orders. This is an optional parameter.
  secondaryCurrencyCode?: string // The secondary currency of orders. This is an optional parameter.
  pageIndex: number // The page index. Must be greater or equal to 1
  pageSize: number // Must be greater or equal to 1 and less than or equal to 50. If a number greater than 50 is specified, then 50 will be used.
}

/* eslint-disable @typescript-eslint/naming-convention */
const responseSchema = z.array(
  z.object({
    CurrencyCode: z.string(),
    Fee: z.number(),
  }),
)
/* eslint-enable @typescript-eslint/naming-convention */

type GetClosedOrdersResult = z.infer<typeof responseSchema>

const getClosedOrders = async (
  options: GetClosedOrdersOptions,
): Promise<[GetClosedOrdersResult | Error, Kanye?]> => {
  const {
    config,
    primaryCurrencyCode,
    secondaryCurrencyCode,
    pageIndex,
    pageSize,
  } = options
  const raw = await post(config, 'Private/GetClosedOrders', {
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

export { getClosedOrders }
