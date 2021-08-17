import { errorBoundary } from '@stayradiated/error-boundary'

import type { Config } from '../types.js'
import { createSignedBody } from '../signature.js'
import { client } from '../client.js'

type GetBrokerageFeesOptions = {
  config: Config
}

type GetBrokerageFeesResult = Array<{
  CurrencyCode: string
  Fee: number
}>

const getBrokerageFees = async (
  options: GetBrokerageFeesOptions,
): Promise<GetBrokerageFeesResult | Error> => {
  const { config } = options
  return errorBoundary(async () =>
    client
      .post('Private/GetBrokerageFees', {
        json: createSignedBody({
          config,
          endpoint: 'Private/GetBrokerageFees',
          parameters: {},
        }),
      })
      .json(),
  )
}

export { getBrokerageFees }
