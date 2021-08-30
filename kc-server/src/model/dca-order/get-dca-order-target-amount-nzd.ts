import { DateTime } from 'luxon'

import { IllegalStateError } from '../../util/error.js'
import { round } from '../../util/round.js'

import { selectTradesAfterDate } from '../trade/index.js'

import type { Pool } from '../../types.js'
import type { DCAOrder } from './types.js'

const getDCAOrderTargetAmountNZD = async (
  pool: Pool,
  dcaOrder: DCAOrder,
  currentTime: DateTime,
): Promise<number | Error> => {
  const {
    userUID,
    exchangeUID,
    assetSymbol,
    startAt,
    dailyAverage,
    maxAmountNZD,
  } = dcaOrder

  const trades = await selectTradesAfterDate(pool, {
    userUID,
    exchangeUID,
    assetSymbol,
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

  const minutesSinceStartDate = currentTime.diff(startAt).as('minutes')
  const minuteAverage = dailyAverage / 24 / 60

  const orderAmountNZD = round(
    4,
    (minuteAverage - tradedAmountNZD / minutesSinceStartDate) *
      minutesSinceStartDate,
  )

  if (Number.isNaN(orderAmountNZD)) {
    return new IllegalStateError({
      message: 'orderAmountNZD is NaN',
      context: {
        minuteAverage,
        tradedAmountNZD,
        minutesSinceStartDate,
      },
    })
  }

  return Math.max(
    0,
    Math.min(maxAmountNZD ?? Number.POSITIVE_INFINITY, orderAmountNZD),
  )
}

export { getDCAOrderTargetAmountNZD }
