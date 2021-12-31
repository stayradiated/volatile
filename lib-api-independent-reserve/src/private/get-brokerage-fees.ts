import type { Kanye } from '@volatile/kanye'

import type { Config } from '../util/types.js'
import { post, getResponseBody } from '../util/client.js'

type GetBrokerageFeesOptions = {
  config: Config
}

type GetBrokerageFeesResult = Array<{
  CurrencyCode: string
  Fee: number
}>

const getBrokerageFees = async (
  options: GetBrokerageFeesOptions,
): Promise<[GetBrokerageFeesResult | Error, Kanye?]> => {
  const { config } = options
  const raw = await post(config, 'Private/GetBrokerageFees', {})
  if (raw instanceof Error) {
    return [raw, undefined]
  }

  const result = getResponseBody<GetBrokerageFeesResult>(raw)
  return [result, raw]
}

export { getBrokerageFees }
