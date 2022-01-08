import { inspect } from 'util'
import {
  latest as getLatestExchangeRate,
  Config as OpenExchangeRatesConfig,
} from '@volatile/open-exchange-rates-api'

import { MarketPriceSource } from '../util/market-price-source.js'

type Options = {
  config: OpenExchangeRatesConfig
}

type CreateMarketSourceForCurrencyOptions = {
  base: string
  symbol: string
}

const createMarketSourceForCurrency = (
  options: CreateMarketSourceForCurrencyOptions,
) => {
  const { base, symbol } = options

  const marketSource: MarketPriceSource<Options> = {
    minCacheDurationMs: 60 * 1000,
    fetch: async (fetchOptions) => {
      const { config } = fetchOptions

      const [response, raw] = await getLatestExchangeRate({
        config,
        base,
        symbols: [symbol],
      })
      if (response instanceof Error) {
        return [response, raw]
      }

      const lastUpdated = new Date()

      const value = response.rates[symbol]
      if (typeof value !== 'number') {
        const error = new TypeError(
          `Could not get ${base}/${symbol} rate. Expecting number, got ${inspect(
            value,
          )}`,
        )
        return [error, raw]
      }

      return [
        {
          value,
          lastUpdated,
        },
        raw,
      ]
    },
  }

  return marketSource
}

export { createMarketSourceForCurrency }

export { Config as OpenExchangeRatesConfig } from '@volatile/open-exchange-rates-api'
