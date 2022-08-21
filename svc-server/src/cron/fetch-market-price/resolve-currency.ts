import { createCachedFetchFn, currencySources } from '@volatile/market-price'
import { Kanye } from '@volatile/kanye'

import { config } from '../../env.js'

import { CurrencyPair, usdNzd, usdAud, audNzd } from './config.js'

const OPEN_EXCHANGE_RATES_OPTIONS = {
  config: {
    appId: config.OPEN_EXCHANGE_RATES_APP_ID,
  },
}

type Resolver = () => Promise<[number | Error, Kanye?]>

const resolveCurrencyMap = new Map<CurrencyPair, Resolver>([
  [
    usdNzd,
    createCachedFetchFn(currencySources.usdNzd, OPEN_EXCHANGE_RATES_OPTIONS),
  ],
  [
    usdAud,
    createCachedFetchFn(currencySources.usdAud, OPEN_EXCHANGE_RATES_OPTIONS),
  ],
  [
    audNzd,
    createCachedFetchFn(currencySources.audNzd, OPEN_EXCHANGE_RATES_OPTIONS),
  ],
])

export { resolveCurrencyMap }
