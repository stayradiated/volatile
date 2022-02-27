import * as kiwiCoin from '@volatile/kiwi-coin-api'

import { MarketPriceSource } from '../../util/market-price-source.js'

type Options = {
  assetSymbol: string
  currency: string
}

const marketSource: MarketPriceSource<Options> = {
  minCacheDurationMs: 30 * 1000,
  async fetch(options) {
    const { assetSymbol, currency } = options
    if (assetSymbol !== 'BTC') {
      const error = new Error(
        `Asset symbol must be "BTC", received ${assetSymbol}`,
      )
      return [error]
    }

    if (currency !== 'NZD') {
      const error = new Error(`Currency must be "NZD", received ${currency}`)
      return [error]
    }

    const lastUpdated = new Date()

    const [value, raw] = await kiwiCoin.getHighestBid()
    if (value instanceof Error) {
      return [value, raw]
    }

    return [
      {
        value,
        lastUpdated,
      },
      raw,
    ]
  },
}

export default marketSource
export { Options }
