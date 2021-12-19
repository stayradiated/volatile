import type { Config } from '../util/types.js'
import { post } from '../util/client.js'

type GetClosedOrdersOptions = {
  config: Config
  primaryCurrencyCode?: string // The primary currency of orders. This is an optional parameter.
  secondaryCurrencyCode?: string // The secondary currency of orders. This is an optional parameter.
  pageIndex: number // The page index. Must be greater or equal to 1
  pageSize: number // Must be greater or equal to 1 and less than or equal to 50. If a number greater than 50 is specified, then 50 will be used.
}

type GetClosedOrdersResult = Array<{
  CurrencyCode: string
  Fee: number
}>

const getClosedOrders = async (
  options: GetClosedOrdersOptions,
): Promise<GetClosedOrdersResult | Error> => {
  const {
    config,
    primaryCurrencyCode,
    secondaryCurrencyCode,
    pageIndex,
    pageSize,
  } = options
  return post(config, 'Private/GetClosedOrders', {
    primaryCurrencyCode,
    secondaryCurrencyCode,
    pageIndex,
    pageSize,
  })
}

export { getClosedOrders }
