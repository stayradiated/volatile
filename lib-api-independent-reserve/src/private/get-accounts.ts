import type { Kanye } from '@volatile/kanye'
import * as z from 'zod'

import type { Config } from '../util/types.js'
import { post, getResponseBody } from '../util/client.js'

type GetAccountsOptions = {
  config: Config
}

/* eslint-disable @typescript-eslint/naming-convention */
const responseSchema = z.array(
  z.object({
    AccountGuid: z.string(),
    AccountStatus: z.string(),
    AvailableBalance: z.number(),
    CurrencyCode: z.string(),
    TotalBalance: z.number(),
  }),
)
/* eslint-enable @typescript-eslint/naming-convention */

type GetAccountsResult = z.infer<typeof responseSchema>

const getAccounts = async (
  options: GetAccountsOptions,
): Promise<[GetAccountsResult | Error, Kanye?]> => {
  const { config } = options
  const raw = await post(config, 'Private/GetAccounts', {})
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody(raw, responseSchema)
  return [result, raw]
}

export { getAccounts }
