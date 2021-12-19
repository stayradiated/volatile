import type { Config } from '../util/types.js'
import { post } from '../util/client.js'

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
  return post(config, 'Private/GetBrokerageFees', {})
}

export { getBrokerageFees }
