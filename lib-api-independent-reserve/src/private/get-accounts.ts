import type { Kanye } from '@volatile/kanye'

import type { Config } from '../util/types.js'
import { post, getResponseBody } from '../util/client.js'

type GetAccountsOptions = {
  config: Config
}

type GetAccountsResult = Array<{
  AccountGuid: string
  AccountStatus: string
  AvailableBalance: number
  CurrencyCode: string
  TotalBalance: number
}>

const getAccounts = async (
  options: GetAccountsOptions,
): Promise<[GetAccountsResult | Error, Kanye?]> => {
  const { config } = options
  const raw = await post(config, 'Private/GetAccounts', {})
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<GetAccountsResult>(raw)
  return [result, raw]
}

export { getAccounts }
