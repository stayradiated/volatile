import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { DateTime } from 'luxon'

type CalculateOrderAmountNZDOptions = {
  config: kiwiCoin.Config
  dailyAverage: number
  startAt: DateTime
}

const calculateOrderAmountNZD = async (
  options: CalculateOrderAmountNZDOptions,
): Promise<number | Error> => {
  const { config, startAt, dailyAverage } = options

  const allTrades = await kiwiCoin.trades(config, 'all')
  if (allTrades instanceof Error) {
    return allTrades
  }

  const trades = allTrades.filter((trade) => {
    const tradeDate = DateTime.fromSeconds(trade.datetime)
    return tradeDate >= startAt
  })

  // eslint-disable-next-line unicorn/no-array-reduce
  const sum = trades.reduce((sum, trade) => {
    const nzd = trade.trade_size * trade.price
    return sum + nzd
  }, 0)

  const now = DateTime.local()
  const minutesSinceStartDate = now.diff(startAt).as('minutes')
  const goalPerMinute = dailyAverage / 24 / 60

  const orderAmountNZD =
    (goalPerMinute - sum / minutesSinceStartDate) * minutesSinceStartDate
  return orderAmountNZD
}

export { calculateOrderAmountNZD }
