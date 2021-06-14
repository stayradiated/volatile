import { setTimeout } from 'timers/promises'
import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { DateTime } from 'luxon'

import withConfig, { Config } from '../../utils/with-config.js'
import {
  createPriceIterator,
  binancePriceSource,
} from '../../utils/price-source.js'

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

  const startDate = DateTime.local().startOf('day')

  const allTrades = await kiwiCoin.trades(config.kiwiCoin, 'day')
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

export const handler = withConfig(async (config, _argv) => {
  const getPriceFromBinance = createPriceIterator(binancePriceSource, config)

  const offsetPercent = -2

  const loop = async (): Promise<void> => {
    const balance = await kiwiCoin.balance(config.kiwiCoin)
    const availableNZD = Number.parseFloat(balance.nzd_balance)

    const goalAmountNZD = await calculateOrderAmountNZD({
      config,
      dailyGoal: 600,
    })

    const amountNZD = Math.min(goalAmountNZD, availableNZD)

    if (amountNZD <= 0) {
      console.log('Have reached daily goal, passing...')
    } else {
      const marketPrice = await getPriceFromBinance()
      let orderPrice = round(2, marketPrice * ((offsetPercent + 100) / 100))

      const orderBook = await kiwiCoin.orderBook()
      const lowestAsk = orderBook.asks[0]
      if (lowestAsk) {
        const lowestAskPrice = Number.parseFloat(lowestAsk[0])
        if (orderPrice > lowestAskPrice) {
          console.log('Lowering bid price to just below lowest ask price')
          orderPrice = lowestAskPrice - 0.01
        }
      }

      const amountBTC = round(8, amountNZD / orderPrice)

      const existingOrders = await kiwiCoin.openOrders(config.kiwiCoin)
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

    await setTimeout(5 * 60 * 1000)
    return loop()
  }

  await loop()
})
