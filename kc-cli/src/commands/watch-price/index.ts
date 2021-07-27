import { setTimeout } from 'timers/promises'
import {
  createCachedFetchFn,
  marketPriceSources,
  currencySources,
} from '@stayradiated/market-price'

import { createHandler } from '../../utils/create-handler.js'

export const command = 'watch-price'

export const desc = 'Continuously print the current price of BTC/NZD.'

export const builder = {}

export const handler = createHandler(async (config) => {
  const fetchKiwiCoinPrice = createCachedFetchFn(marketPriceSources.kiwiCoin, {
    currency: 'NZD',
    symbol: 'BTC',
  })

  const fetchBinancePrice = createCachedFetchFn(marketPriceSources.binance, {
    currency: 'NZD',
    symbol: 'BTC',
  })

  const fetchEasyCryptoPrice = createCachedFetchFn(
    marketPriceSources.easyCrypto,
    { currency: 'NZD', symbol: 'BTC' },
  )

  const fetchUSDExchangeRate = createCachedFetchFn(currencySources.USD_NZD, {
    config: config.openExchangeRates,
    currency: 'NZD',
    symbol: 'BTC',
  })

  const fetchDassetPrice = createCachedFetchFn(marketPriceSources.dasset, {
    config: config.dasset,
    currency: 'NZD',
    symbol: 'BTC',
  })

  // CSV header
  console.log('date,kiwi-coin.com,easycrypto.nz,binance.us,dassetx.com')

  const tryPrintPrice = async (): Promise<void | Error> => {
    const [kiwiCoinWorldwide, kiwiCoinEurope, binance, exchangeRate, dasset] =
      await Promise.all([
        fetchKiwiCoinPrice(),
        fetchEasyCryptoPrice(),
        fetchBinancePrice(),
        fetchUSDExchangeRate(),
        fetchDassetPrice(),
      ])

    if (binance instanceof Error) {
      return binance
    }

    if (exchangeRate instanceof Error) {
      return exchangeRate
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
  }

  const loop = async (): Promise<void> => {
    const error = await tryPrintPrice()
    if (error instanceof Error) {
      console.error(error)
    }

    await setTimeout(5000)
    return loop()
  }

  await loop()
})
