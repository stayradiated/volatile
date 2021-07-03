import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { DateTime, Duration } from 'luxon'
import debug from 'debug'

import { MarketPriceSource } from '../../utils/market-price-source.js'

const log = debug('market-price:kiwi-coin')

type Options = {
  source?: kiwiCoin.ExtPriceSource
}

const marketSource: MarketPriceSource<Options> = {
  log,
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
