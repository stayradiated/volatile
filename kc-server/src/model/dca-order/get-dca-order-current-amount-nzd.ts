import { DateTime } from 'luxon'

import { explainError } from '../../util/error.js'
import { round } from '../../util/round.js'

import { selectTradesAfterDate } from '../trade/index.js'

import type { Pool } from '../../types.js'
import type { DCAOrder } from './types.js'

const getDCAOrderCurrentAmountNZD = async (
  pool: Pool,
  dcaOrder: DCAOrder,
): Promise<number | Error> => {
  const {
    userUID,
    exchangeUID,
    symbol,
    startAt,
    dailyAverage,
    minPriceNZD,
    maxPriceNZD,
  } = dcaOrder

  const trades = await selectTradesAfterDate(pool, {
    userUID,
    exchangeUID,
    symbol,
    type: 'BUY',
    afterDate: startAt,
  })
  if (trades instanceof Error) {
    return trades
  }

  // eslint-disable-next-line unicorn/no-array-reduce
  const tradedAmountNZD = trades.reduce((sum, trade) => {
    const nzd = trade.totalNZD
    return sum + nzd
  }, 0)

  const now = DateTime.local()
  const minutesSinceStartDate = now.diff(startAt).as('minutes')
  const goalPerMinute = dailyAverage / 24 / 60

  const orderAmountNZD = round(
    4,
    (goalPerMinute - tradedAmountNZD / minutesSinceStartDate) *
      minutesSinceStartDate,
  )

  if (Number.isNaN(orderAmountNZD)) {
    return explainError('orderAmountNZD is NaN', {
      goalPerMinute: String(goalPerMinute),
      tradedAmountNZD: String(tradedAmountNZD),
      minutesSinceStartDate: String(minutesSinceStartDate),
    })
  }

  return Math.max(
    minPriceNZD ?? 0,
    Math.min(maxPriceNZD ?? Number.POSITIVE_INFINITY, orderAmountNZD),
  )
}

export { getDCAOrderCurrentAmountNZD }
