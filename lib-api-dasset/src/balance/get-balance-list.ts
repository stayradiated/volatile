import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import { request, getResponseBody } from '../util/client.js'
import type { Config } from '../util/types.js'

const balanceSchema = z.object({
  currencySymbol: z.string(),
  currencyName: z.string(),
  updatedAt: z.optional(z.string()),
  available: z.number(),
  inflight: z.optional(z.number()),
  total: z.optional(z.number()),
  nonce: z.optional(z.number()),
  held: z.optional(z.number()),
  nzdRate: z.number(),
  nzdValue: z.number(),
  btcValue: z.number(),
})

const responseSchema = z.array(balanceSchema)

type GetBalanceListResult = z.infer<typeof responseSchema>

type GetBalanceListOptions = {
  config: Config
}

const getBalanceList = async (
  options: GetBalanceListOptions,
): Promise<[GetBalanceListResult | Error, Kanye?]> => {
  const { config } = options

  const raw = await request({ config, method: 'GET', endpoint: 'balances' })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  if (result instanceof Error) {
    const error = new Error('Could not get balance list from dasset.com', {
      cause: result,
    })
    return [error, raw]
  }

  return [result, raw]
}

export { getBalanceList }
export type { GetBalanceListOptions, GetBalanceListResult }
