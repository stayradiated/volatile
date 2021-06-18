import ky from 'ky-universal'
import debug from 'debug'
import { DateTime, Duration } from 'luxon'

import { createDebugHooks } from '../../utils/hooks.js'
import { MarketPriceSource } from '../../utils/market-price-source.js'

const log = debug('market-price:easy-crypto')

const easyCrypto = ky.create({
  prefixUrl: 'https://api.easycrypto.nz/public/api/',
  hooks: createDebugHooks(log),
})

type Options = {
  symbol?: string
}

type APIResponse = {
  symbol: string
  ask: string
  bid: string
}

const marketSource: MarketPriceSource<Options> = {
  log,
  minCacheDuration: Duration.fromISOTime('00:00:30'),
  fetch: async (options) => {
    const { symbol = 'BTCNZD' } = options

    if (symbol.toUpperCase() !== symbol) {
      throw new Error(`Symbol must be uppercase, received "${symbol}".`)
    }

    const lastUpdated = DateTime.local()

    const result: APIResponse = await easyCrypto.get(`ticker/${symbol}`).json()

    // const bid = Number.parseFloat(result.bid)
    const ask = Number.parseFloat(result.ask)
    // const value = Math.round(((bid + ask) / 2) * 100) / 100
    const value = ask

    return {
      value,
      lastUpdated,
    }
  },
}

export default marketSource
export { Options }
