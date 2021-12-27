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
  assetSymbol: string
  currency: string
}

type APIResponse = {
  price: string
  symbol: string
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
      binance
        .get('v3/ticker/price', {
          searchParams: {
            symbol: tradingPair,
          },
        })
        .json(),
    )

    if (result instanceof Error) {
      return new NetError({
        message: 'Could not fetch ticker price from binance.us.',
        cause: await withErrorResponse(result),
        context: {
          assetSymbol,
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
