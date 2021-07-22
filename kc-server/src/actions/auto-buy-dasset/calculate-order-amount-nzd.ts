import * as dasset from '@stayradiated/dasset-api'
import { DateTime } from 'luxon'

import { explainError } from '../../utils/error.js'

import type { DCAOrder } from '../../models/dca-order/index.js'

type CalculateOrderAmountNZDOptions = {
  config: dasset.Config
  dcaOrder: DCAOrder
}

const calculateOrderAmountNZD = async (
  options: CalculateOrderAmountNZDOptions,
): Promise<number | Error> => {
  const { config, dcaOrder } = options
  const { startAt, dailyAverage } = dcaOrder

  const allClosedOrders = await dasset.paginate(config, dasset.closedOrders)
  if (allClosedOrders instanceof Error) {
    return allClosedOrders
  }

  const trades = allClosedOrders.results.filter((order) => {
    if (order.status !== dasset.OrderStatus.COMPLETED) {
      return false
    }

    const tradeDate = DateTime.fromISO(order.timestamp)
    return tradeDate >= startAt
  })

  // eslint-disable-next-line unicorn/no-array-reduce
  const sum = trades.reduce((sum, trade) => {
    const nzd = trade.details.total
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
