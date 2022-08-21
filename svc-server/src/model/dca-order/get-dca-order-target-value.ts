import { differenceInMinutes } from 'date-fns'

import { IllegalStateError } from '../../util/error.js'
import { round } from '../../util/round.js'

import { selectTradesAfterDate } from '../trade/index.js'

import type { Pool } from '../../types.js'
import type { DcaOrder } from './types.js'

const getDcaOrderTargetValue = async (
  pool: Pool,
  dcaOrder: DcaOrder,
  currentTime: Date,
): Promise<number | Error> => {
  const {
    userUid,
    exchangeUid,
    primaryCurrency,
    secondaryCurrency,
    startAt,
    dailyAverage,
    maxValue,
  } = dcaOrder

  // TODO: find trades using dcaOrderUid
  const trades = await selectTradesAfterDate(pool, {
    userUid,
    exchangeUid,
    primaryCurrency,
    secondaryCurrency,
    type: 'BUY',
    afterDate: startAt,
  })
  if (trades instanceof Error) {
    return trades
  }

  const tradedValue = trades.reduce((sum, trade) => sum + trade.totalValue, 0)

  const minutesSinceStartDate = differenceInMinutes(currentTime, startAt)
  const minuteAverage = dailyAverage / 24 / 60

  const orderValue = round(
    4,
    (minuteAverage - tradedValue / minutesSinceStartDate) *
      minutesSinceStartDate,
  )

  if (typeof orderValue !== 'number' || Number.isNaN(orderValue)) {
    return new IllegalStateError({
      message: 'Calculated Dca order target value is not a number',
      context: {
        minuteAverage,
        tradedValue,
        minutesSinceStartDate,
      },
    })
  }

  return Math.max(0, Math.min(maxValue ?? Number.POSITIVE_INFINITY, orderValue))
}

export { getDcaOrderTargetValue }
