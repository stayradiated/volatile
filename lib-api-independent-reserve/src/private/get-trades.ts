import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import type { Config } from '../util/types.js'
import { post, getResponseBody } from '../util/client.js'

type GetTradesOptions = {
  config: Config
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
      TradeGuid: z.string(),
      TradeTimestampUtc: z.string(),
      OrderGuid: z.string(),
      OrderType: z.enum(['LimitBid', 'LimitOffer', 'MarketBid', 'MarketOffer']),
      OrderTimestampUtc: z.string(),
      VolumeTraded: z.number(),
      Price: z.number(),
      PrimaryCurrencyCode: z.string(),
      SecondaryCurrencyCode: z.string(),
    }),
  ),
})
/* eslint-enable @typescript-eslint/naming-convention */

type GetTradesResult = z.infer<typeof responseSchema>

const getTrades = async (
  options: GetTradesOptions,
): Promise<[GetTradesResult | Error, Kanye?]> => {
  const { config, pageIndex, pageSize } = options
  const raw = await post(config, 'Private/GetTrades', {
    pageIndex,
    pageSize,
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  return [result, raw]
}

export { getTrades }
