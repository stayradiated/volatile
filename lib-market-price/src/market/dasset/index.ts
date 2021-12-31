import { DateTime, Duration } from 'luxon'
import * as dasset from '@volatile/dasset-api'

import { IllegalStateError } from '../../util/error.js'
import { MarketPriceSource } from '../../util/market-price-source.js'

type Options = {
  config: dasset.Config
  assetSymbol: string
  currency: string
}

const marketSource: MarketPriceSource<Options> = {
  minCacheDuration: Duration.fromISOTime('00:00:05', {}),
  fetch: async (options) => {
    const { config, assetSymbol, currency } = options

    if (assetSymbol.toUpperCase() !== assetSymbol) {
      return new Error(
        `Asset symbol must be uppercase, received "${assetSymbol}".`,
      )
    }

    if (currency.toUpperCase() !== currency) {
      return new Error(`Currency must be uppercase, received "${currency}".`)
    }

    const marketSymbol = `${assetSymbol}-${currency}`

    const lastUpdated = DateTime.local()

    const [ticker] = await dasset.getMarketTicker({
      config,
      marketSymbol,
    })
    if (ticker instanceof Error) {
      // Dasset library already wraps the error for us
      return ticker
    }

    if (!ticker) {
      return new IllegalStateError({
        message: 'Received an empty ticker value from dassetx.com.',
        context: { assetSymbol, currency },
      })
    }

    const bidRate = Number.parseFloat(ticker.bidRate)
    // Const askRate = Number.parseFloat(ticker.askRate)
    // Const value = Math.round(((bidRate + askRate) / 2) * 100) / 100
    const value = bidRate

    return {
      value,
      lastUpdated,
    }
  },
}

export default marketSource
export { Options }
