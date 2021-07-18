import { DateTime } from 'luxon'

import { ActionHandlerFn } from '../../utils/action-handler.js'
import { createDCAOrder } from '../../models/dca-order/index.js'

type Input = {
  exchange_uid: string
  market_uid: string
  start_at: string
  market_offset: number
  daily_average: number
  min_price: number
  max_price: number
  min_amount: number
  max_amount: number
}

type Output = {
  dca_order_uid: string
}

const createDCAOrderHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool, input, session } = context
  const { userUID } = session

  const {
    exchange_uid: exchangeUID,
    market_uid: marketUID,
    start_at: startAt,
    market_offset: marketOffset,
    daily_average: dailyAverage,
    min_price: minPrice,
    max_price: maxPrice,
    min_amount: minAmount,
    max_amount: maxAmount,
  } = input

  const dcaOrder = await createDCAOrder(pool, {
    userUID,
    exchangeUID,
    marketUID,
    startAt: DateTime.fromISO(startAt),
    marketOffset,
    dailyAverage,
    minPrice,
    maxPrice,
    minAmount,
    maxAmount,
  })
  if (dcaOrder instanceof Error) {
    return dcaOrder
  }

  return {
    dca_order_uid: dcaOrder.UID,
  }
}

export { createDCAOrderHandler }
