import type { Config } from '../util/types.js'
import { post } from '../util/client.js'

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
): Promise<GetAccountsResult | Error> => {
  const { config } = options
  return post(config, 'Private/GetAccounts', {})
}

export { getAccounts }
