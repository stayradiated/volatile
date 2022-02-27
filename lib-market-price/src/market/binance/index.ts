import { kanye, getResponseBodyJSON, APIError } from '@volatile/kanye'

import { MarketPriceSource } from '../../util/market-price-source.js'

const prefixUrl = 'https://api.binance.us/api/'

type Options = {
  assetSymbol: string
  currency: string
}

type APIResponse = {
  price: string
  symbol: string
}

const marketSource: MarketPriceSource<Options> = {
  minCacheDurationMs: 5 * 1000,
  async fetch(options) {
    const { assetSymbol, currency } = options

    if (assetSymbol.toUpperCase() !== assetSymbol) {
      const error = new Error(
        `Asset symbol must be uppercase, received "${assetSymbol}".`,
      )
      return [error, undefined]
    }

    if (currency.toUpperCase() !== currency) {
      const error = new Error(
        `Currency must be uppercase, received "${currency}".`,
      )
      return [error, undefined]
    }

    const tradingPair = assetSymbol + currency

    const lastUpdated = new Date()

    const raw = await kanye('v3/ticker/price', {
      prefixUrl,
      searchParams: {
        symbol: tradingPair,
      },
    })
    if (raw instanceof Error) {
      return [raw, undefined]
    }

    const result = getResponseBodyJSON<APIResponse>(raw)
    if (result instanceof Error) {
      const error = new APIError({
        message: 'Could not fetch ticker price from binance.us.',
        cause: result,
        context: {
          assetSymbol,
          currency,
        },
      })
      return [error, raw]
    }

    const value = Number.parseFloat(result.price)

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
