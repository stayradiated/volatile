import { inspect } from 'util'
import { currencyConfigList, Currency } from './currency-config.js'
import {
  marketPriceConfigList,
  MarketPriceInstance,
} from './market-price-config.js'

const currencyFnList = currencyConfigList.map((currencyConfig) => {
  const { createFetchRateFn } = currencyConfig
  return {
    ...currencyConfig,
    fetchRate: createFetchRateFn(),
  }
})

const fetchCurrencyRate = async (
  currency: Currency,
): Promise<number | Error> => {
  if (currency === 'NZD') {
    return 1
  }

  const currencyConfig = currencyFnList.find(
    (currencyConfig) => currencyConfig.currency === currency,
  )
  if (!currencyConfig) {
    return new Error(`Could not find currency config for ${inspect(currency)}.`)
  }

  return currencyConfig.fetchRate()
}

const marketPriceInstanceList: MarketPriceInstance[] =
  marketPriceConfigList.flatMap((marketPriceConfig) => {
    const { market, createFetchPriceFn, currency, assetSymbols } =
      marketPriceConfig
    return assetSymbols.map((assetSymbol) => ({
      market,
      currency,
      assetSymbol,
      fetchPrice: createFetchPriceFn({
        assetSymbol,
        currency,
      }),
    }))
  })

export { currencyFnList, fetchCurrencyRate, marketPriceInstanceList }
