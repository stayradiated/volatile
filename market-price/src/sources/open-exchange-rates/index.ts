import { inspect } from 'util'
import ky from 'ky-universal'
import debug from 'debug'
import { DateTime, Duration } from 'luxon'

import { createDebugHooks } from '../../utils/hooks.js'
import { MarketPriceSource } from '../../utils/market-price-source.js'

const log = debug('market-price:open-exchange-rates')

const openExchangeRates = ky.create({
  prefixUrl: 'https://openexchangerates.org/api/',
  hooks: createDebugHooks(log),
})

type OpenExchangeRatesConfig = {
  appId: string
}

type APIResponse = {
  disclaimer: string
  license: string
  timestamp: number
  base: string
  rates: Record<string, number>
}

const marketSource: MarketPriceSource<OpenExchangeRatesConfig> = {
  log,
  minCacheDuration: Duration.fromISOTime('01:00:00'),
  fetch: async (options) => {
    const { appId } = options

    const base = 'USD'
    const symbol = 'NZD'

    const response: APIResponse = await openExchangeRates
      .get('latest.json', {
        searchParams: {
          app_id: appId,
          base,
          symbols: symbol,
        },
      })
      .json()

    const lastUpdated = DateTime.fromSeconds(response.timestamp)

    const value = response.rates[symbol]
    if (typeof value !== 'number') {
      throw new TypeError(
        `Could not get ${base}/${symbol} rate. Expecting number, got ${inspect(
          value,
        )}`,
      )
    }

    return {
      value,
      lastUpdated,
    }
  },
}

export default marketSource
export { OpenExchangeRatesConfig }
