import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { DateTime, Duration } from 'luxon'

import { MarketPriceSource } from '../../utils/market-price-source.js'

type Options = {
  source?: kiwiCoin.ExtPriceSource
}

const marketSource: MarketPriceSource<Options> = {
  minCacheDuration: Duration.fromISOTime('00:00:30'),
  fetch: async (options) => {
    const { source = kiwiCoin.ExtPriceSource.worldwide } = options
    const lastUpdated = DateTime.local()
    const { price: value } = await kiwiCoin.extPrice({ source })
    return {
      value,
      lastUpdated,
    }
  },
}

export default marketSource
export { Options }
