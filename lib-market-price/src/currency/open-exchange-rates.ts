import { inspect } from 'util'
import { DateTime, Duration } from 'luxon'
import { latest as getLatestExchangeRate, Config as OpenExchangeRatesConfig } from '@volatile/open-exchange-rates-api'
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
    minCacheDuration: Duration.fromISOTime('01:15:00', {}),
    fetch: async (fetchOptions) => {
      const { config } = fetchOptions

      const response = await getLatestExchangeRate({
        config, 
        base,
        symbols: [symbol],
      })
      if (response instanceof Error) {
        return response
      }

      const lastUpdated = DateTime.fromSeconds(response.timestamp)

      const value = response.rates[symbol]
      if (typeof value !== 'number') {
        return new TypeError(
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

  return marketSource
}

export { createMarketSourceForCurrency, OpenExchangeRatesConfig }
