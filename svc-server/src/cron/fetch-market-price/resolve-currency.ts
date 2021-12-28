import { createCachedFetchFn, currencySources } from '@volatile/market-price'

import { OPEN_EXCHANGE_RATES_APP_ID } from '../../env.js'

import { CurrencyPair, USD_NZD, USD_AUD, AUD_NZD } from './config.js'

const OPEN_EXCHANGE_RATES_OPTIONS = {
  config: {
    appId: OPEN_EXCHANGE_RATES_APP_ID,
  },
}

type Resolver = () => Promise<number | Error>

const resolveCurrencyMap = new Map<CurrencyPair, Resolver>([
  [
    USD_NZD,
    createCachedFetchFn(currencySources.USD_NZD, OPEN_EXCHANGE_RATES_OPTIONS),
  ],
  [
    USD_AUD,
    createCachedFetchFn(currencySources.USD_AUD, OPEN_EXCHANGE_RATES_OPTIONS),
  ],
  [
    AUD_NZD,
    createCachedFetchFn(currencySources.AUD_NZD, OPEN_EXCHANGE_RATES_OPTIONS),
  ],
])

export { resolveCurrencyMap }
