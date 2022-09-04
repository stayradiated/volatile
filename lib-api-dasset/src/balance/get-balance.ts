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

const responseSchema = z.tuple([balanceSchema])

type GetBalanceResult = z.infer<typeof balanceSchema>

type GetBalanceOptions = {
  config: Config
  currencySymbol: string
}

const getBalance = async (
  options: GetBalanceOptions,
): Promise<[GetBalanceResult | Error, Kanye?]> => {
  const { config, currencySymbol } = options

  const raw = await request({
    config,
    method: 'GET',
    endpoint: `balances/${currencySymbol}`,
  })
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  if (result instanceof Error) {
    const error = new Error(
      `Could not get balance for currency "${currencySymbol}" from dasset.com.
${JSON.stringify({ currencySymbol })}`,
      {
        cause: result,
      },
    )
    return [error, raw]
  }

  return [result[0], raw]
}

export { getBalance }
export type { GetBalanceOptions, GetBalanceResult }
