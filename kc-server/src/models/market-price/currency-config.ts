import {
  createCachedFetchFn,
  currencySources,
} from '@stayradiated/market-price'

import type { Config } from '../../types.js'

enum Currency {
  USD = 'USD',
  NZD = 'NZD',
}

type CurrencyConfig = {
  readonly currency: Currency
  readonly createFetchRateFn: (config: Config) => () => Promise<number | Error>
}

const currencyConfigList: readonly CurrencyConfig[] = [
  {
    currency: Currency.NZD,
    createFetchRateFn: () => async () => Promise.resolve(1),
  },
  {
    currency: Currency.USD,
    createFetchRateFn: (config: Config) =>
      createCachedFetchFn(currencySources.USD_NZD, {
        config: config.openExchangeRates,
      }),
  },
]

export { Currency, currencyConfigList }
