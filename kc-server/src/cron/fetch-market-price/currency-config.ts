import {
  createCachedFetchFn,
  currencySources,
} from '@stayradiated/market-price'

import { OPEN_EXCHANGE_RATES_APP_ID } from '../../env.js'

import type { Currency } from '../../types.js'

type CurrencyConfig = {
  readonly currency: Currency
  readonly createFetchRateFn: () => () => Promise<number | Error>
}

const currencyConfigList: readonly CurrencyConfig[] = [
  {
    currency: 'NZD',
    createFetchRateFn: () => async () => Promise.resolve(1),
  },
  {
    currency: 'USD',
    createFetchRateFn: () =>
      createCachedFetchFn(currencySources.USD_NZD, {
        config: {
          appId: OPEN_EXCHANGE_RATES_APP_ID,
        },
      }),
  },
]

export { Currency, currencyConfigList }
