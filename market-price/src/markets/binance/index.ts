import ky from 'ky-universal'
import debug from 'debug'
import { DateTime, Duration } from 'luxon'
import { errorBoundary } from '@stayradiated/error-boundary'

import { createDebugHooks } from '../../utils/hooks.js'
import { MarketPriceSource } from '../../utils/market-price-source.js'

const log = debug('market-price:binance-us')

const binance = ky.create({
  prefixUrl: 'https://api.binance.us/api/',
  hooks: createDebugHooks(log),
})

type Options = {
  symbol?: string
}

type APIResponse = {
  price: string
  symbol: string
}

const marketSource: MarketPriceSource<Options> = {
  minCacheDuration: Duration.fromISOTime('00:00:05'),
  fetch: async (options) => {
    const { symbol = 'BTCUSD' } = options

    if (symbol.toUpperCase() !== symbol) {
      return new Error(`Symbol must be uppercase, received "${symbol}".`)
    }

    const lastUpdated = DateTime.local()

    const result = await errorBoundary<APIResponse>(async () =>
      binance
        .get('v3/avgPrice', {
          searchParams: {
            symbol,
          },
        })
        .json(),
    )

    if (result instanceof Error) {
      log(result.message)
      return result
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
