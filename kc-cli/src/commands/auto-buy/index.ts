import { setTimeout } from 'timers/promises'
import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { DateTime } from 'luxon'
import {
  createCachedFetchFn,
  marketPriceSources,
} from '@stayradiated/market-price'

import { withConfig, Config } from '../../utils/with-config.js'

export const command = 'auto-buy'

export const desc = 'Update open orders to match market value'

export const builder = {}

const round = (decimals: number, value: number): number => {
  const multiplier = 10 ** decimals
  return Math.round(value * multiplier) / multiplier
}

type CalculateOrderAmountNZDOptions = {
  config: Config
  dailyGoal: number
}

const calculateOrderAmountNZD = async (
  options: CalculateOrderAmountNZDOptions,
): Promise<number> => {
  const { config, dailyGoal } = options

  const startDate = DateTime.fromISO('2021-06-15T00:00:00.000+12:00')

  const allTrades = await kiwiCoin.trades(config.kiwiCoin, 'all')
  const trades = allTrades.filter((trade) => {
    const tradeDate = DateTime.fromSeconds(trade.datetime)
    return tradeDate >= startDate
  })

  // eslint-disable-next-line unicorn/no-array-reduce
  const sum = trades.reduce((sum, trade) => {
    const nzd = trade.trade_size * trade.price
    return sum + nzd
  }, 0)

  const now = DateTime.local()
  const minutesSinceStartDate = now.diff(startDate).as('minutes')
  const goalPerMinute = dailyGoal / 24 / 60

  const orderAmountNZD =
    (goalPerMinute - sum / minutesSinceStartDate) * minutesSinceStartDate
  return orderAmountNZD
}

const fetchAvailableNZD = async (
  kiwiCoinConfig: kiwiCoin.Config,
): Promise<number> => {
  const balance = await kiwiCoin.balance(kiwiCoinConfig)
  const availableNZD = Number.parseFloat(balance.nzd_balance)
  return availableNZD
}

export const handler = withConfig(async (config, _argv) => {
  const fetchBinancePrice = createCachedFetchFn(marketPriceSources.binance, {})
  const fetchExchangeRate = createCachedFetchFn(
    marketPriceSources.openExchangeRates,
    config.openExchangeRates,
  )

  const offsetPercent = -1.5

  const loop = async (): Promise<void> => {
    try {
      // Should really be done concurrently, but kiwi-coin.com often returns a 401?
      const availableNZD = await fetchAvailableNZD(config.kiwiCoin)
      const goalAmountNZD = await calculateOrderAmountNZD({
        config,
        dailyGoal: 100,
      })

      const amountNZD = Math.min(goalAmountNZD, availableNZD)

      if (amountNZD <= 0) {
        console.log('Have reached daily goal, passing...')
      } else {
        const [binanceRate, exchangeRate, orderBook, existingOrders] =
          await Promise.all([
            fetchBinancePrice(),
            fetchExchangeRate(),
            kiwiCoin.orderBook(),
            kiwiCoin.openOrders(config.kiwiCoin),
          ])

        const marketPrice = binanceRate * exchangeRate

        let orderPrice = round(2, marketPrice * ((offsetPercent + 100) / 100))

        const lowestAsk = orderBook.asks[0]
        if (lowestAsk) {
          const lowestAskPrice = Number.parseFloat(lowestAsk[0])
          if (orderPrice > lowestAskPrice) {
            console.log('Lowering bid price to just below lowest ask price')
            orderPrice = lowestAskPrice - 0.01
          }
        }

        const amountBTC = round(8, amountNZD / orderPrice)

        await Promise.all(
          existingOrders.map(async (order) => {
            return kiwiCoin.cancelOrder(config.kiwiCoin, order.id)
          }),
        )

        await kiwiCoin.buy(config.kiwiCoin, {
          price: orderPrice,
          amount: amountBTC,
        })

        console.dir({
          marketPrice,
          offsetPercent,
          orderPrice,
          amountNZD,
          amountBTC,
        })
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message)
        console.error(error.stack)
      } else {
        console.error('Unknown error...')
      }
    }

    await setTimeout(5 * 60 * 1000)
    return loop()
  }

  await loop()
})
