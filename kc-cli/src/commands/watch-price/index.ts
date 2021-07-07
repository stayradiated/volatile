import { setTimeout } from 'timers/promises'
import {
  createCachedFetchFn,
  marketPriceSources,
  currencySources,
} from '@stayradiated/market-price'

import { withConfig } from '../../utils/with-config.js'

export const command = 'watch-price'

export const desc = 'Continuously print the current price of BTC/NZD.'

export const builder = {}

export const handler = withConfig(async (config) => {
  const fetchKiwiCoinPrice = createCachedFetchFn(
    marketPriceSources.kiwiCoin,
    {},
  )

  const fetchBinancePrice = createCachedFetchFn(marketPriceSources.binance, {})

  const fetchEasyCryptoPrice = createCachedFetchFn(
    marketPriceSources.easyCrypto,
    {},
  )

  const fetchUSDExchangeRate = createCachedFetchFn(currencySources.USD_NZD, {
    config: config.openExchangeRates,
  })

  const fetchDassetPrice = createCachedFetchFn(marketPriceSources.dasset, {
    config: config.dasset,
  })

  // CSV header
  console.log('date,kiwi-coin.com,easycrypto.nz,binance.us,dassetx.com')

  const loop = async (): Promise<void> => {
    const [kiwiCoinWorldwide, kiwiCoinEurope, binance, exchangeRate, dasset] =
      await Promise.all([
        fetchKiwiCoinPrice(),
        fetchEasyCryptoPrice(),
        fetchBinancePrice(),
        fetchUSDExchangeRate(),
        fetchDassetPrice(),
      ])

    if (binance instanceof Error) {
      throw binance
    }

    if (exchangeRate instanceof Error) {
      throw exchangeRate
    }

    console.log(
      [
        new Date().toISOString(),
        kiwiCoinWorldwide,
        kiwiCoinEurope,
        binance * exchangeRate,
        dasset,
      ].join(','),
    )

    await setTimeout(5000)
    return loop()
  }

  await loop()
})
