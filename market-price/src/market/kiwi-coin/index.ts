import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { DateTime, Duration } from 'luxon'

import { MarketPriceSource } from '../../util/market-price-source.js'

type Options = {
  symbol: string
  currency: string
}

const marketSource: MarketPriceSource<Options> = {
  minCacheDuration: Duration.fromISOTime('00:00:30', {}),
  fetch: async (options) => {
    const { symbol, currency } = options
    if (symbol !== 'BTC') {
      return new Error(`Symbol must be "BTC", received ${symbol}`)
    }

    if (currency !== 'NZD') {
      return new Error(`Currency must be "NZD", received ${currency}`)
    }

    const lastUpdated = DateTime.local()

    const value = await kiwiCoin.getLowestAsk()
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
