import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { DateTime, Duration } from 'luxon'

import { MarketPriceSource } from '../../utils/market-price-source.js'

type Options = {
  type?: kiwiCoin.TopOrderPriceType
}

const marketSource: MarketPriceSource<Options> = {
  minCacheDuration: Duration.fromISOTime('00:00:30'),
  fetch: async (options) => {
    const { type = kiwiCoin.TopOrderPriceType.sell } = options
    const lastUpdated = DateTime.local()

    const result = await kiwiCoin.topOrderPrice({ type })
    if (result instanceof Error) {
      return result
    }

    const { price: value } = result
    return {
      value,
      lastUpdated,
    }
  },
}

export default marketSource
export { Options }
