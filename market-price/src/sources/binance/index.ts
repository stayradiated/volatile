import ky from 'ky-universal'
import debug from 'debug'
import { DateTime, Duration } from 'luxon'

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
  log,
  minCacheDuration: Duration.fromISOTime('00:00:05'),
  fetch: async (options) => {
    const { symbol = 'BTCUSD' } = options

    if (symbol.toUpperCase() !== symbol) {
      throw new Error(`Symbol must be uppercase, received "${symbol}".`)
    }

    const lastUpdated = DateTime.local()

    const result: APIResponse = await binance
      .get('v3/avgPrice', {
        searchParams: {
          symbol,
        },
      })
      .json()

    const value = Number.parseFloat(result.price)

    return {
      value,
      lastUpdated,
    }
  },
}

export default marketSource
export { Options }
