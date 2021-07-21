import { DateTime } from 'luxon'

import { ActionHandlerFn } from '../../utils/action-handler.js'
import { createDCAOrder } from '../../models/dca-order/index.js'

type Input = {
  exchange_uid: string
  market_uid: string
  start_at: string
  market_offset: number
  daily_average: number
  min_price_nzd: number
  max_price_nzd: number
  min_amount_nzd: number
  max_amount_nzd: number
}

type Output = {
  dca_order_uid: string
}

const createDCAOrderHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool, input, session } = context
  const { userUID } = session
  if (!userUID) {
    return new Error('userUID is required')
  }

  const {
    exchange_uid: exchangeUID,
    market_uid: marketUID,
    start_at: startAt,
    market_offset: marketOffset,
    daily_average: dailyAverage,
    min_price_nzd: minPriceNZD,
    max_price_nzd: maxPriceNZD,
    min_amount_nzd: minAmountNZD,
    max_amount_nzd: maxAmountNZD,
  } = input

  const dcaOrder = await createDCAOrder(pool, {
    userUID,
    exchangeUID,
    marketUID,
    startAt: DateTime.fromISO(startAt),
    marketOffset,
    dailyAverage,
    minPriceNZD,
    maxPriceNZD,
    minAmountNZD,
    maxAmountNZD,
  })
  if (dcaOrder instanceof Error) {
    return dcaOrder
  }

  return {
    dca_order_uid: dcaOrder.UID,
  }
}

export { createDCAOrderHandler }
