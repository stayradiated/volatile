import { DateTime } from 'luxon'

import { IllegalStateError } from '../../util/error.js'
import { round } from '../../util/round.js'

import { selectTradesAfterDate } from '../trade/index.js'

import type { Pool } from '../../types.js'
import type { DCAOrder } from './types.js'

const getDCAOrderTargetValue = async (
  pool: Pool,
  dcaOrder: DCAOrder,
  currentTime: DateTime,
): Promise<number | Error> => {
  const {
    userUID,
    exchangeUID,
    primaryCurrency,
    secondaryCurrency,
    startAt,
    dailyAverage,
    maxValue,
  } = dcaOrder

  // TODO: find trades using dcaOrderUID
  const trades = await selectTradesAfterDate(pool, {
    userUID,
    exchangeUID,
    primaryCurrency,
    secondaryCurrency,
    type: 'BUY',
    afterDate: startAt,
  })
  if (trades instanceof Error) {
    return trades
  }

  const tradedValue = trades.reduce((sum, trade) => sum + trade.totalValue, 0)

  const minutesSinceStartDate = currentTime.diff(startAt).as('minutes')
  const minuteAverage = dailyAverage / 24 / 60

  const orderValue = round(
    4,
    (minuteAverage - tradedValue / minutesSinceStartDate) *
      minutesSinceStartDate,
  )

  if (typeof orderValue !== 'number' || Number.isNaN(orderValue)) {
    return new IllegalStateError({
      message: 'Calculated DCA order target value is not a number',
      context: {
        minuteAverage,
        tradedValue,
        minutesSinceStartDate,
      },
    })
  }

  return Math.max(0, Math.min(maxValue ?? Number.POSITIVE_INFINITY, orderValue))
}

export { getDCAOrderTargetValue }
