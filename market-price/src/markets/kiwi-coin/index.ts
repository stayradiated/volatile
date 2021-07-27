import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { DateTime, Duration } from 'luxon'

import { MarketPriceSource } from '../../utils/market-price-source.js'

type Options = {
  symbol: string
  currency: string
  type?: kiwiCoin.TopOrderPriceType
}

const marketSource: MarketPriceSource<Options> = {
  minCacheDuration: Duration.fromISOTime('00:00:30'),
  fetch: async (options) => {
    const { symbol, currency, type = kiwiCoin.TopOrderPriceType.sell } = options
    if (symbol !== 'BTC') {
      return new Error(`Symbol must be "BTC", received ${symbol}`)
    }

    if (currency !== 'NZD') {
      return new Error(`Currency must be "NZD", received ${currency}`)
    }

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
