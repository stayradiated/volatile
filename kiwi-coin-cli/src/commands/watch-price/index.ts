import { setTimeout } from 'timers/promises'
import { extPrice, ExtPriceSource } from '@stayradiated/kiwi-coin-api'
import {
  latest as getLatestExchangeRate,
  LatestResult as GetLatestExchangeResult,
} from '@stayradiated/exchange-rate'
import {
  quotesLatest as getLatestCMCQuote,
  QuotesLatestResult as GetLatestCMCQuoteResult,
} from '@stayradiated/coin-market-cap'
import { tickerPrice as getBinanceTickerPrice } from '@stayradiated/binance-us'

import withConfig, { Config } from '../../utils/with-config.js'

export const command = 'watch-price'

export const desc = 'Continuously print the current price of BTC/NZD.'

export const builder = {}

type TickerFn<T> = (
  state: T | undefined,
  config: Config,
) => Promise<{ state: T; price: number }>

const getPriceFromKiwiCoin: TickerFn<undefined> = async (state) => {
  const price = await extPrice(ExtPriceSource.worldwide)
  return { state, price }
}

const getPriceFromBinance: TickerFn<GetLatestExchangeResult> = async (
  state,
  config,
) => {
  const [binanceResult, exchangeRateResult] = await Promise.all([
    getBinanceTickerPrice({
      symbol: 'BTCUSD',
    }),
    getLatestExchangeRate(
      {
        appId: config.exchangeRate.appId,
        base: 'USD',
        symbol: 'NZD',
      },
      state,
    ),
  ])

  const { price: btcUsdPrice } = binanceResult
  const { rate: usdNzdRate } = exchangeRateResult
  const btcNzdPrice = Math.round(btcUsdPrice * usdNzdRate * 100) / 100

  return {
    state: exchangeRateResult,
    price: btcNzdPrice,
  }
}

const getPriceFromCoinMarketCap: TickerFn<GetLatestCMCQuoteResult> = async (
  state,
  config,
) => {
  const result = await getLatestCMCQuote(
    config.coinMarketCap,
    {
      slug: 'bitcoin',
      currency: 'NZD',
    },
    state,
  )
  const price = Math.round(result.price * 100) / 100
  return { state: result, price }
}

const initTicker = <T>(
  fn: TickerFn<T>,
  config: Config,
): (() => Promise<number>) => {
  let state: T | undefined
  return async () => {
    const result = await fn(state, config)
    state = result.state
    return result.price
  }
}

export const handler = withConfig(async (config) => {
  const kiwiCoin = initTicker(getPriceFromKiwiCoin, config)
  const binance = initTicker(getPriceFromBinance, config)
  const coinMarketCap = initTicker(getPriceFromCoinMarketCap, config)

  while (true) {
    console.log(await Promise.all([kiwiCoin(), binance(), coinMarketCap()]))
    await setTimeout(1000)
  }
})
