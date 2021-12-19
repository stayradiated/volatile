import * as kiwiCoin from '@volatile/kiwi-coin-api'
import { DateTime, Duration } from 'luxon'

import { MarketPriceSource } from '../../util/market-price-source.js'

type Options = {
  assetSymbol: string
  currency: string
}

const marketSource: MarketPriceSource<Options> = {
  minCacheDuration: Duration.fromISOTime('00:00:30', {}),
  fetch: async (options) => {
    const { assetSymbol, currency } = options
    if (assetSymbol !== 'BTC') {
      return new Error(`Asset symbol must be "BTC", received ${assetSymbol}`)
    }

    if (currency !== 'NZD') {
      return new Error(`Currency must be "NZD", received ${currency}`)
    }

    const lastUpdated = DateTime.local()

    const value = await kiwiCoin.getHighestBid()
    if (value instanceof Error) {
      return value
    }

    return {
      value,
      lastUpdated,
    }
  },
}

export default marketSource
export { Options }
