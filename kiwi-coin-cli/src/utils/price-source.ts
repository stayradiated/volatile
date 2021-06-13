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

import { Config } from './with-config.js'

type SourceUpdateFn<State> = (
  state: State | undefined,
  config: Config,
) => Promise<State>

type SourceValueFn<State> = (state: State) => number

type PriceSourceOptions<State> = {
  name: string
  updateState: SourceUpdateFn<State>
  getPrice: SourceValueFn<State>
}

const kiwiCoinWorldwidePriceSource: PriceSourceOptions<ExtPriceResult> = {
  name: 'kiwi-coin.com (worldwide)',
  updateState: async (state) =>
    extPrice({ source: ExtPriceSource.worldwide }, state),
  getPrice: (state) => state.price,
}

const kiwiCoinEuropePriceSource: PriceSourceOptions<ExtPriceResult> = {
  name: 'kiwi-coin.com (europe)',
  updateState: async (state) =>
    extPrice({ source: ExtPriceSource.europe }, state),
  getPrice: (state) => state.price,
}

const binancePriceSource: PriceSourceOptions<{
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

const createPriceIterator = <T>(
  options: PriceSourceOptions<T>,
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

export {
  createPriceIterator,
  kiwiCoinWorldwidePriceSource,
  kiwiCoinEuropePriceSource,
  binancePriceSource,
}
