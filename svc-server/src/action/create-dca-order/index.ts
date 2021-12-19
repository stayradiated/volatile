import { DateTime } from 'luxon'

import { MissingRequiredArgumentError } from '../../util/error.js'

import { ActionHandlerFn } from '../../util/action-handler.js'
import { insertDCAOrder } from '../../model/dca-order/index.js'
import { getUserExchangeKeys } from '../../model/user-exchange-keys/index.js'

type Input = {
  user_exchange_keys_uid: string
  market_uid: string
  primary_currency: string
  secondary_currency: string
  start_at: string
  market_offset: number
  daily_average: number
  min_price: number | undefined
  max_price: number | undefined
  min_value: number | undefined
  max_value: number | undefined
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
    return new MissingRequiredArgumentError({
      message: 'userUID is required',
      context: { userUID },
    })
  }

  const {
    user_exchange_keys_uid: userExchangeKeysUID,
    market_uid: marketUID,
    primary_currency: primaryCurrency,
    secondary_currency: secondaryCurrency,
    start_at: startAt,
    market_offset: marketOffset,
    daily_average: dailyAverage,
    min_price: minPrice,
    max_price: maxPrice,
    min_value: minValue,
    max_value: maxValue,
  } = input

  const userExchangeKeys = await getUserExchangeKeys(pool, userExchangeKeysUID)
  if (userExchangeKeys instanceof Error) {
    return userExchangeKeys
  }

  const dcaOrder = await insertDCAOrder(pool, {
    userUID,
    exchangeUID: userExchangeKeys.exchangeUID,
    userExchangeKeysUID,
    marketUID,
    primaryCurrency,
    secondaryCurrency,
    startAt: DateTime.fromISO(startAt),
    marketOffset,
    dailyAverage,
    minPrice,
    maxPrice,
    minValue,
    maxValue,
    enabledAt: undefined,
  })
  if (dcaOrder instanceof Error) {
    return dcaOrder
  }

  return {
    dca_order_uid: dcaOrder.UID,
  }
}

export { createDCAOrderHandler }
