import { parseISO } from 'date-fns'

import { MissingRequiredArgumentError } from '../../util/error.js'

import { ActionHandlerFn } from '../../util/action-handler.js'
import { insertDcaOrder } from '../../model/dca-order/index.js'
import { getUserExchangeKeys } from '../../model/user-exchange-keys/index.js'

type Input = {
  user_exchange_keys_uid: string
  market_uid: string
  primary_currency: string
  secondary_currency: string
  start_at: string
  market_offset: number
  daily_average: number
  interval_ms: number
  min_price: number | undefined
  max_price: number | undefined
  min_value: number | undefined
  max_value: number | undefined
}

type Output = {
  dca_order_uid: string
}

const createDcaOrderHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool, input, session } = context
  const { userUid } = session
  if (!userUid) {
    return new MissingRequiredArgumentError({
      message: 'userUid is required',
      context: { userUid },
    })
  }

  const {
    user_exchange_keys_uid: userExchangeKeysUid,
    market_uid: marketUid,
    primary_currency: primaryCurrency,
    secondary_currency: secondaryCurrency,
    start_at: startAt,
    market_offset: marketOffset,
    daily_average: dailyAverage,
    interval_ms: intervalMs,
    min_price: minPrice,
    max_price: maxPrice,
    min_value: minValue,
    max_value: maxValue,
  } = input

  const userExchangeKeys = await getUserExchangeKeys(pool, userExchangeKeysUid)
  if (userExchangeKeys instanceof Error) {
    return userExchangeKeys
  }

  const dcaOrder = await insertDcaOrder(pool, {
    userUid,
    exchangeUid: userExchangeKeys.exchangeUid,
    userExchangeKeysUid,
    marketUid,
    primaryCurrency,
    secondaryCurrency,
    startAt: parseISO(startAt),
    marketOffset,
    dailyAverage,
    intervalMs,
    minPrice,
    maxPrice,
    minValue,
    maxValue,
    enabledAt: undefined,
    nextRunAt: undefined,
    lastRunAt: undefined,
  })
  if (dcaOrder instanceof Error) {
    return dcaOrder
  }

  return {
    dca_order_uid: dcaOrder.uid,
  }
}

export { createDcaOrderHandler }
