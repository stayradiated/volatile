import {
  createCachedFetchFn,
  currencySources,
} from '@stayradiated/market-price'

import type { Config, Currency } from '../../types.js'

type CurrencyConfig = {
  readonly currency: Currency
  readonly createFetchRateFn: (config: Config) => () => Promise<number | Error>
}

const currencyConfigList: readonly CurrencyConfig[] = [
  {
    currency: 'NZD',
    createFetchRateFn: () => async () => Promise.resolve(1),
  },
  {
    currency: 'USD',
    createFetchRateFn: (config: Config) =>
      createCachedFetchFn(currencySources.USD_NZD, {
        config: config.openExchangeRates,
      }),
  },
]

export { Currency, currencyConfigList }
