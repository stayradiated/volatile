import { setTimeout } from 'timers/promises'
import {
  extPrice,
  ExtPriceSource,
  ExtPriceResult,
} from '@stayradiated/kiwi-coin-api'
import {
  latest as getLatestExchangeRate,
  LatestResult as GetLatestExchangeResult,
} from '@stayradiated/exchange-rate'
import {
  averagePrice as getBinanceAveragePrice,
  AveragePriceResult as BinanceAveragePriceResult,
} from '@stayradiated/binance-us'

import withConfig, { Config } from '../../utils/with-config.js'

export const command = 'watch-price'

export const desc = 'Continuously print the current price of BTC/NZD.'

export const builder = {}

type TickerUpdateFn<State> = (
  state: State | undefined,
  config: Config,
) => Promise<State>

type TickerPriceFn<State> = (state: State) => number

type TickerOptions<State> = {
  name: string
  updateState: TickerUpdateFn<State>
  getPrice: TickerPriceFn<State>
}

const kiwiCoinWorldwideTicker: TickerOptions<ExtPriceResult> = {
  name: 'kiwi-coin.com (worldwide)',
  updateState: async (state) =>
    extPrice({ source: ExtPriceSource.worldwide }, state),
  getPrice: (state) => state.price,
}

const kiwiCoinEuropeTicker: TickerOptions<ExtPriceResult> = {
  name: 'kiwi-coin.com (europe)',
  updateState: async (state) =>
    extPrice({ source: ExtPriceSource.europe }, state),
  getPrice: (state) => state.price,
}

const binanceTicker: TickerOptions<{
  binance: BinanceAveragePriceResult
  exchangeRate: GetLatestExchangeResult
}> = {
  name: 'binance.us',
  updateState: async (state, config) => {
    const [binance, exchangeRate] = await Promise.all([
      getBinanceAveragePrice(
        {
          symbol: 'BTCUSD',
        },
        state?.binance,
      ),
      getLatestExchangeRate(
        {
          appId: config.exchangeRate.appId,
          base: 'USD',
          symbol: 'NZD',
        },
        state?.exchangeRate,
      ),
    ])

    return {
      binance,
      exchangeRate,
    }
  },
  getPrice: (state) => {
    const { binance, exchangeRate } = state
    const { price: btcUsdPrice } = binance
    const { rate: usdNzdRate } = exchangeRate
    return Math.round(btcUsdPrice * usdNzdRate * 100) / 100
  },
}

const initTicker = <T>(
  options: TickerOptions<T>,
  config: Config,
): (() => Promise<number>) => {
  let state: T | undefined
  return async () => {
    try {
      state = await options.updateState(state, config)
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`${options.name}: ${error.message}`)
      } else {
        console.error(`${options.name}: unknown error occurred.`)
      }
    }

    if (state === undefined) {
      return 0
    }

    return options.getPrice(state)
  }
}

export const handler = withConfig(async (config) => {
  const getPriceFromKiwiCoinWorldwide = initTicker(
    kiwiCoinWorldwideTicker,
    config,
  )
  const getPriceFromKiwiCoinEurope = initTicker(kiwiCoinEuropeTicker, config)
  const getPriceFromBinance = initTicker(binanceTicker, config)

  // CSV header
  console.log(
    'date,kiwi-coin.com (worldwide), kiwi-coin.com (europe),binance.us',
  )

  const loop = async (): Promise<void> => {
    const [kiwiCoinWorldwide, kiwiCoinEurope, binance] = await Promise.all([
      getPriceFromKiwiCoinWorldwide(),
      getPriceFromKiwiCoinEurope(),
      getPriceFromBinance(),
    ])

    console.log(
      [
        new Date().toISOString(),
        kiwiCoinWorldwide,
        kiwiCoinEurope,
        binance,
      ].join(','),
    )

    await setTimeout(5000)
    return loop()
  }

  await loop()
})
