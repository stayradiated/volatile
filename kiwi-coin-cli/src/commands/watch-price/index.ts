import { setTimeout } from 'timers/promises'
import {
  topOrderPrice,
  TopOrderPriceType,
  extPrice,
  ExtPriceSource,
  ExtPriceResult,
} from '@stayradiated/kiwi-coin-api'
import {
  latest as getLatestExchangeRate,
  LatestResult as GetLatestExchangeResult,
} from '@stayradiated/exchange-rate'
import {
  quotesLatest as getLatestCMCQuote,
  QuotesLatestResult as GetLatestCMCQuoteResult,
} from '@stayradiated/coin-market-cap'
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
  name: string,
  updateState: TickerUpdateFn<State>
  getPrice: TickerPriceFn<State>
}

const kiwiCoinTopBuyTicker: TickerOptions<ExtPriceResult> = {
  name: 'kiwi-coin.com (top buy)',
  updateState: async (state) =>
    topOrderPrice({ type: TopOrderPriceType.buy }, state),
  getPrice: (state) => state.price,
}

const kiwiCoinTopSellTicker: TickerOptions<ExtPriceResult> = {
  name: 'kiwi-coin.com (top sell)',
  updateState: async (state) =>
    topOrderPrice({ type: TopOrderPriceType.sell }, state),
  getPrice: (state) => state.price,
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

const coinMarketCapTicker: TickerOptions<GetLatestCMCQuoteResult> = {
  name: 'coinmarketcap.com',
  updateState: async (state, config) => getLatestCMCQuote(
      config.coinMarketCap,
      {
        slug: 'bitcoin',
        currency: 'NZD',
      },
      state,
    ),
  getPrice:(state) => Math.round(state.price * 100) / 100
}

const initTicker = <T>(
  options: TickerOptions<T>,
  config: Config,
): (() => Promise<number>) => {
  let state: T | undefined
  return async () => {
    try {
      state = await options.updateState(state, config)
    } catch (error) {
      console.error(options.name, error.message)
    } finally {
      if (state !== undefined) {
        return options.getPrice(state)
      } else {
        return 0
      }
    }
  }
}

export const handler = withConfig(async (config) => {
  const getPriceFromKiwiCoinTopBuy = initTicker(kiwiCoinTopBuyTicker, config)
  const getPriceFromKiwiCoinTopSell = initTicker(kiwiCoinTopSellTicker, config)
  const getPriceFromKiwiCoinWorldwide = initTicker(
    kiwiCoinWorldwideTicker,
    config,
  )
  const getPriceFromKiwiCoinEurope = initTicker(kiwiCoinEuropeTicker, config)
  const getPriceFromBinance = initTicker(binanceTicker, config)
  const getPriceFromCoinMarketCap = initTicker(coinMarketCapTicker, config)

  // CSV header
  console.log(
    'date,top buy,top sell,kiwi-coin.com (worldwide), kiwi-coin.com (europe),binance.us,coinmarketcap.com',
  )

  const loop = async (): Promise<void> => {
    const [
      kiwiCoinTopBuy,
      kiwiCoinTopSell,
      kiwiCoinWorldwide,
      kiwiCoinEurope,
      binance,
      coinMarketCap,
    ] = await Promise.all([
      getPriceFromKiwiCoinTopBuy(),
      getPriceFromKiwiCoinTopSell(),
      getPriceFromKiwiCoinWorldwide(),
      getPriceFromKiwiCoinEurope(),
      getPriceFromBinance(),
      getPriceFromCoinMarketCap(),
    ])

    console.log(
      [
        new Date().toISOString(),
        kiwiCoinTopBuy,
        kiwiCoinTopSell,
        kiwiCoinWorldwide,
        kiwiCoinEurope,
        binance,
        coinMarketCap,
      ].join(','),
    )

    await setTimeout(5000)
    return loop()
  }

  await loop()
})
