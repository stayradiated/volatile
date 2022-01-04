import { kanye, getResponseBodyJSON, APIError } from '@volatile/kanye'

import { MarketPriceSource } from '../../util/market-price-source.js'

const prefixUrl = 'https://api.kraken.com/'

type Options = {
  assetSymbol: string
  currency: string
}

type APIResponse = {
  result: Record<
    string,
    {
      a: [string, string, string]
      b: [string, string, string]
      c: [string, string]
      h: [string, string]
      l: [string, string]
      o: string
      p: [string, string]
      t: [number, number]
      v: [string, string]
    }
  >
}

const marketSource: MarketPriceSource<Options> = {
  minCacheDurationMs: 5 * 1000,
  fetch: async (options) => {
    const { assetSymbol, currency } = options

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

    const tradingPair = assetSymbol + currency

    const lastUpdated = new Date()

    const raw = await kanye('0/public/Ticker', {
      method: 'GET',
      prefixUrl,
      searchParams: {
        pair: tradingPair,
      },
    })
    if (raw instanceof Error) {
      return [raw]
    }

    const result = getResponseBodyJSON<APIResponse>(raw)
    if (result instanceof Error) {
      const error = new APIError({
        message: `Could not fetch average price from ${prefixUrl}`,
        cause: result,
        context: {
          assetSymbol,
          currency,
        },
      })
      return [error, raw]
    }

    const ticker = Object.values(result.result)[0]
    if (!ticker) {
      const error = new APIError({
        message: `Could not parse response price from ${prefixUrl}`,
        context: {
          assetSymbol,
          currency,
        },
      })
      return [error, raw]
    }

    const bid = Number.parseFloat(ticker.b[0])
    const ask = Number.parseFloat(ticker.a[0])
    const value = (bid + ask) / 2

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
