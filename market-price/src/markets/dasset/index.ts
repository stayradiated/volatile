import ky from 'ky-universal'
import debug from 'debug'
import { DateTime, Duration } from 'luxon'
import { errorBoundary } from '@stayradiated/error-boundary'

import { createDebugHooks } from '../../utils/hooks.js'
import { MarketPriceSource } from '../../utils/market-price-source.js'

const log = debug('market-price:dasset')

const dasset = ky.create({
  prefixUrl: 'https://api.dassetx.com/api/',
  hooks: createDebugHooks(log),
})

type DassetConfig = {
  apiKey: string
  accountId: string
}

type Options = {
  config: DassetConfig
  symbol?: string
}

type APIResponse = Array<{
  lastTradeRate: string
  bidRate: string
  askRate: string
  symbol: string
}>

const marketSource: MarketPriceSource<Options> = {
  minCacheDuration: Duration.fromISOTime('00:00:05'),
  fetch: async (options) => {
    const { config, symbol = 'BTC-NZD' } = options
    const { apiKey, accountId } = config

    if (symbol.toUpperCase() !== symbol) {
      return new Error(`Symbol must be uppercase, received "${symbol}".`)
    }

    const lastUpdated = DateTime.local()

    const result = await errorBoundary<APIResponse>(async () =>
      dasset
        .get(`markets/${symbol}/ticker`, {
          headers: {
            'x-api-key': apiKey,
            'x-account-id': accountId,
          },
        })
        .json(),
    )
    if (result instanceof Error) {
      log(result.message)
      return result
    }

    const ticker = result[0]
    if (!ticker) {
      return new Error(`Could not get ticker back for symbol: ${symbol}`)
    }

    // Const bidRate = Number.parseFloat(ticker.bidRate)
    const askRate = Number.parseFloat(ticker.askRate)
    // Const value = Math.round(((bidRate + askRate) / 2) * 100) / 100
    const value = askRate

    return {
      value,
      lastUpdated,
    }
  },
}

export default marketSource
export { DassetConfig, Options }
