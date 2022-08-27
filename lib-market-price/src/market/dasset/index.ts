import * as dasset from '@volatile/dasset-api'

import type { MarketPriceSource } from '../../util/market-price-source.js'

type Options = {
  config: dasset.Config
  assetSymbol: string
  currency: string
}

const marketSource: MarketPriceSource<Options> = {
  minCacheDurationMs: 5 * 1000,
  async fetch(options) {
    const { config, assetSymbol, currency } = options

    if (assetSymbol.toUpperCase() !== assetSymbol) {
      const error = new Error(
        `Asset symbol must be uppercase, received "${assetSymbol}".`,
      )
      return [error]
    }

    if (currency.toUpperCase() !== currency) {
      const error = new Error(
        `Currency must be uppercase, received "${currency}".`,
      )
      return [error]
    }

    const marketSymbol = `${assetSymbol}-${currency}`

    const lastUpdated = new Date()

    const [ticker, raw] = await dasset.getMarketTicker({
      config,
      marketSymbol,
    })
    if (ticker instanceof Error) {
      return [ticker]
    }

    if (!ticker) {
      const error = new Error(
        `Received an empty ticker value from dassetx.com.
${JSON.stringify({ assetSymbol, currency })}`,
      )
      return [error, raw]
    }

    const bidRate = Number.parseFloat(ticker.bidRate)
    // Const askRate = Number.parseFloat(ticker.askRate)
    // Const value = Math.round(((bidRate + askRate) / 2) * 100) / 100
    const value = bidRate

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
export type { Options }
