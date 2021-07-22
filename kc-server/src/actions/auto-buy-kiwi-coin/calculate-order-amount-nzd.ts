import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { DateTime } from 'luxon'

import { explainError } from '../../utils/error.js'

import type { DCAOrder } from '../../models/dca-order/index.js'

type CalculateOrderAmountNZDOptions = {
  config: kiwiCoin.Config
  dcaOrder: DCAOrder
}

const calculateOrderAmountNZD = async (
  options: CalculateOrderAmountNZDOptions,
): Promise<number | Error> => {
  const { config, dcaOrder } = options
  const { startAt, dailyAverage } = dcaOrder

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

  if (Number.isNaN(orderAmountNZD)) {
    return explainError('orderAmountNZD is NaN', {
      goalPerMinute: String(goalPerMinute),
      sum: String(sum),
      minutesSinceStartDate: String(minutesSinceStartDate),
    })
  }

  return Math.max(
    dcaOrder.minPriceNZD,
    Math.min(dcaOrder.maxPriceNZD, orderAmountNZD),
  )
}

export { calculateOrderAmountNZD }
