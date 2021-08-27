import ky from 'ky-universal'
import debug from 'debug'
import { DateTime, Duration } from 'luxon'
import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError, withErrorResponse } from '../../util/error.js'
import { createDebugHooks } from '../../util/hooks.js'
import { MarketPriceSource } from '../../util/market-price-source.js'

const log = debug('market-price:easy-crypto')

const easyCrypto = ky.create({
  prefixUrl: 'https://r.easycrypto.nz/pub/',
  hooks: createDebugHooks(log),
})

type Options = {
  symbol: string
  currency: string
}

type APIResponse = {
  symbol: string
  ask: string
  bid: string
}

const marketSource: MarketPriceSource<Options> = {
  minCacheDuration: Duration.fromISOTime('00:00:30', {}),
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
      easyCrypto.get(`ticker/${tradingPair}`).json(),
    )
    if (result instanceof Error) {
      return new NetError({
        message: 'Could not ticker price from easycrypto.ai',
        cause: await withErrorResponse(result),
        context: {
          symbol,
          currency,
        },
      })
    }

    // Const bid = Number.parseFloat(result.bid)
    const ask = Number.parseFloat(result.ask)
    // Const value = Math.round(((bid + ask) / 2) * 100) / 100
    const value = ask

    return {
      value,
      lastUpdated,
    }
  },
}

export default marketSource
export { Options }
