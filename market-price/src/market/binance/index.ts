import ky from 'ky-universal'
import debug from 'debug'
import { DateTime, Duration } from 'luxon'
import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError, withErrorResponse } from '../../util/error.js'
import { createDebugHooks } from '../../util/hooks.js'
import { MarketPriceSource } from '../../util/market-price-source.js'

const log = debug('market-price:binance-us')

const binance = ky.create({
  prefixUrl: 'https://api.binance.us/api/',
  hooks: createDebugHooks(log),
})

type Options = {
  symbol: string
  currency: string
}

type APIResponse = {
  price: string
  symbol: string
}

const marketSource: MarketPriceSource<Options> = {
  minCacheDuration: Duration.fromISOTime('00:00:05'),
  fetch: async (options) => {
    const { symbol, currency } = options

    if (symbol.toUpperCase() !== symbol) {
      return new Error(`Symbol must be uppercase, received "${symbol}".`)
    }

    if (currency.toUpperCase() !== currency) {
      return new Error(`Currency must be uppercase, received "${currency}".`)
    }

    const tradingPair = symbol + currency

    const lastUpdated = DateTime.local()

    const result = await errorBoundary<APIResponse>(async () =>
      binance
        .get('v3/avgPrice', {
          searchParams: {
            symbol: tradingPair,
          },
        })
        .json(),
    )

    if (result instanceof Error) {
      return new NetError({
        message: 'Could not fetch average price from binance.us.',
        cause: await withErrorResponse(result),
        context: {
          symbol,
          currency,
        },
      })
    }

    const value = Number.parseFloat(result.price)

    return {
      value,
      lastUpdated,
    }
  },
}

export default marketSource
export { Options }
