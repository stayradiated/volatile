import { DateTime } from 'luxon'

import { explainError } from '../../utils/error.js'
import { selectTradesAfterDate } from '../../models/trade/index.js'

import type { DCAOrder } from '../../models/dca-order/index.js'
import type { Pool } from '../../types.js'

type CalculateOrderAmountNZDOptions = {
  pool: Pool
  dcaOrder: DCAOrder
}

const calculateOrderAmountNZD = async (
  options: CalculateOrderAmountNZDOptions,
): Promise<number | Error> => {
  const { pool, dcaOrder } = options
  const { userUID, exchangeUID, startAt, dailyAverage } = dcaOrder

  const trades = await selectTradesAfterDate(pool, {
    userUID,
    exchangeUID,
    symbol: 'BTC',
    type: 0,
    afterDate: startAt,
  })
  if (trades instanceof Error) {
    return trades
  }

  // eslint-disable-next-line unicorn/no-array-reduce
  const sum = trades.reduce((sum, trade) => {
    const nzd = trade.totalNZD
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
