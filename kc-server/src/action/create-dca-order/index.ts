import { DateTime } from 'luxon'

import { MissingRequiredArgumentError } from '../../util/error.js'

import { ActionHandlerFn } from '../../util/action-handler.js'
import { insertDCAOrder } from '../../model/dca-order/index.js'
import { getUserExchangeKeys } from '../../model/user-exchange-keys/index.js'

type Input = {
  user_exchange_keys_uid: string
  market_uid: string
  asset_symbol: string
  start_at: string
  market_offset: number
  daily_average: number
  min_price_nzd: number | undefined
  max_price_nzd: number | undefined
  min_amount_nzd: number | undefined
  max_amount_nzd: number | undefined
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
    asset_symbol: assetSymbol,
    start_at: startAt,
    market_offset: marketOffset,
    daily_average: dailyAverage,
    min_price_nzd: minPriceNZD,
    max_price_nzd: maxPriceNZD,
    min_amount_nzd: minAmountNZD,
    max_amount_nzd: maxAmountNZD,
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
    assetSymbol,
    startAt: DateTime.fromISO(startAt),
    marketOffset,
    dailyAverage,
    minPriceNZD,
    maxPriceNZD,
    minAmountNZD,
    maxAmountNZD,
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
