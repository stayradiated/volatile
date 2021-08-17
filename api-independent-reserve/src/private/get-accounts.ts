import { errorBoundary } from '@stayradiated/error-boundary'

import type { Config } from '../types.js'
import { createSignedBody } from '../signature.js'
import { client } from '../client.js'

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
  return errorBoundary(async () =>
    client
      .post('Private/GetAccounts', {
        json: createSignedBody({
          config,
          endpoint: 'Private/GetAccounts',
          parameters: {},
        }),
      })
      .json(),
  )
}

export { getAccounts }
