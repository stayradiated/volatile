import { Market } from '../../model/market/index.js'

import { IllegalArgumentError } from '../../util/error.js'

import {
  marketPriceConfigList,
  MarketPriceConfig,
  Currency,
  CurrencyPair,
  AssetSymbol,
} from './config.js'

import { resolveMarketPriceMap } from './resolve-market-price.js'
import { resolveCurrencyMap } from './resolve-currency.js'

type CreateFetchSourcePriceOptions = {
  market: Market
  assetSymbol: AssetSymbol
  currency: Currency
}

const createFetchSourcePrice = (
  options: CreateFetchSourcePriceOptions,
): (() => Promise<number | Error>) => {
  const { market, assetSymbol, currency } = options

  if (!resolveMarketPriceMap.has(market)) {
    return async () =>
      new IllegalArgumentError({
        message: `Could not resolve market price for "${market.ID}"`,
        context: { market, assetSymbol, currency },
      })
  }

  return resolveMarketPriceMap.get(market)!({
    assetSymbol,
    currency,
  })
}

type CreateFetchFxRateOptions = {
  currencyPair: CurrencyPair
}

const createFetchFxRate = (
  options: CreateFetchFxRateOptions,
): (() => Promise<number | Error>) => {
  const { currencyPair } = options
  if (!resolveCurrencyMap.has(currencyPair)) {
    return async () =>
      new IllegalArgumentError({
        message: `Could not resolve market price for "${currencyPair.join(
          '/',
        )}"`,
        context: { currencyPair },
      })
  }

  return resolveCurrencyMap.get(currencyPair)!
}

type MarketPriceInstance = {
  market: Market
  assetSymbol: AssetSymbol
  sourceCurrency: Currency
  currency: Currency
  fetchSourcePrice: () => Promise<number | Error>
  fetchFxRate: () => Promise<number | Error>
}

const toInstance = (
  marketPriceConfig: MarketPriceConfig,
): MarketPriceInstance => {
  const { market, pair, convert } = marketPriceConfig

  const [assetSymbol, sourceCurrency] = pair
  const currency = convert ? convert[1] : sourceCurrency

  const fetchSourcePrice = createFetchSourcePrice({
    market,
    assetSymbol,
    currency: sourceCurrency,
  })

  const fetchFxRate = convert
    ? createFetchFxRate({ currencyPair: convert })
    : async () => 1

  return {
    market,
    assetSymbol,
    sourceCurrency,
    currency,
    fetchSourcePrice,
    fetchFxRate,
  }
}

const marketPriceInstanceList = marketPriceConfigList.map((config) =>
  toInstance(config),
)

export { marketPriceInstanceList }
export type { MarketPriceInstance }
