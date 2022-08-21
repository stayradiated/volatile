import { inspect } from 'node:util'
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
    minCacheDurationMs: 3 * 60 * 60 * 1000,
    async fetch(fetchOptions) {
      const { config } = fetchOptions

      const [response, raw] = await getLatestExchangeRate({
        config,
        base: 'USD', // Free tier only supports base of USD
        symbols: [base, symbol],
      })
      if (response instanceof Error) {
        return [response, raw]
      }

      const lastUpdated = new Date()

      const symbolValue = response.rates[symbol] ?? Number.NaN
      const baseValue = response.rates[base] ?? Number.NaN

      const value = symbolValue / baseValue
      if (typeof value !== 'number' || Number.isNaN(value)) {
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
