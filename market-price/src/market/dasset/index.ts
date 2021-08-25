import { DateTime, Duration } from 'luxon'
import * as dasset from '@stayradiated/dasset-api'

import { MarketPriceSource } from '../../util/market-price-source.js'

type Options = {
  config: dasset.Config
  symbol: string
  currency: string
}

const marketSource: MarketPriceSource<Options> = {
  minCacheDuration: Duration.fromISOTime('00:00:05'),
  fetch: async (options) => {
    const { config, symbol, currency } = options

    if (symbol.toUpperCase() !== symbol) {
      return new Error(`Symbol must be uppercase, received "${symbol}".`)
    }

    if (currency.toUpperCase() !== currency) {
      return new Error(`Currency must be uppercase, received "${currency}".`)
    }

    const marketSymbol = `${symbol}-${currency}`

    const lastUpdated = DateTime.local()

    const ticker = await dasset.getMarketTicker({
      config,
      marketSymbol,
    })
    if (ticker instanceof Error) {
      return ticker
    }

    if (!ticker) {
      return new Error(`Could not get ticker back for symbol: ${symbol}`)
    }

    // Const bidRate = Number.parseFloat(ticker.bidRate)
    const askRate = Number.parseFloat(ticker.askRate)
    // Const value = Math.round(((bidRate + askRate) / 2) * 100) / 100
    const value = askRate

    return {
      value,
      lastUpdated,
    }
  },
}

export default marketSource
export { Options }
