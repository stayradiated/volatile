import ky from 'ky-universal'
import debug from 'debug'
import { DateTime, Duration } from 'luxon'
import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError, withErrorResponse, APIError } from '../../util/error.js'
import { createDebugHooks } from '../../util/hooks.js'
import { MarketPriceSource } from '../../util/market-price-source.js'

const log = debug('market-price:kraken')

const prefixUrl = 'https://api.kraken.com/'

const kraken = ky.create({
  prefixUrl,
  hooks: createDebugHooks(log),
})

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
  minCacheDuration: Duration.fromISOTime('00:00:05', {}),
  fetch: async (options) => {
    const { assetSymbol, currency } = options

    if (assetSymbol.toUpperCase() !== assetSymbol) {
      return new Error(
        `Asset symbol must be uppercase, received "${assetSymbol}".`,
      )
    }

    if (currency.toUpperCase() !== currency) {
      return new Error(`Currency must be uppercase, received "${currency}".`)
    }

    const tradingPair = assetSymbol + currency

    const lastUpdated = DateTime.local()

    const result = await errorBoundary<APIResponse>(async () =>
      kraken
        .get('0/public/Ticker', {
          searchParams: {
            pair: tradingPair,
          },
        })
        .json(),
    )

    if (result instanceof Error) {
      return new NetError({
        message: `Could not fetch average price from ${prefixUrl}`,
        cause: await withErrorResponse(result),
        context: {
          assetSymbol,
          currency,
        },
      })
    }

    const ticker = Object.values(result.result)[0]
    if (!ticker) {
      return new APIError({
        message: `Could not parse response price from ${prefixUrl}`,
        context: {
          assetSymbol,
          currency,
        },
      })
    }

    const bid = Number.parseFloat(ticker.b[0])
    const ask = Number.parseFloat(ticker.a[0])
    const value = (bid + ask) / 2

    return {
      value,
      lastUpdated,
    }
  },
}

export default marketSource
export { Options }
