import { kanye, getResponseBodyJson } from '@volatile/kanye'

import type { MarketPriceSource } from '../../util/market-price-source.js'

const prefixUrl = 'https://api.kraken.com/'

type Options = {
  assetSymbol: string
  currency: string
}

type ApiResponse = {
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
  async fetch(options) {
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

    const raw = await kanye(prefixUrl + '0/public/Ticker', {
      method: 'GET',
      searchParams: {
        pair: tradingPair,
      },
    })
    if (raw instanceof Error) {
      return [raw]
    }

    const result = getResponseBodyJson<ApiResponse>(raw)
    if (result instanceof Error) {
      const error = new Error(
        `Could not fetch average price from ${prefixUrl}
${JSON.stringify({ assetSymbol, currency })}`,
        {
          cause: result,
        },
      )
      return [error, raw]
    }

    const ticker = Object.values(result.result)[0]
    if (!ticker) {
      const error = new Error(
        `Could not parse response price from ${prefixUrl}
${JSON.stringify({ assetSymbol, currency })}`,
      )
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
export type { Options }
