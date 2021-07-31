import {
  getExchange,
  EXCHANGE_DASSET,
  EXCHANGE_KIWI_COIN,
} from '../../models/exchange/index.js'
import { ActionHandlerFn } from '../../utils/action-handler.js'

import { syncKiwiCoinTradeList, syncDassetTradeList } from './exchange/index.js'

type Input = {
  exchange_uid: string
  user_exchange_keys_uid: string
}

type Output = {
  user_uid: string
}

const syncExchangeTradeListHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { input, pool, session } = context
  const { userUID } = session
  if (!userUID) {
    return new Error('userUID is required')
  }

  const {
    exchange_uid: exchangeUID,
    user_exchange_keys_uid: userExchangeKeysUID,
  } = input

  const exchange = await getExchange(pool, exchangeUID)
  if (exchange instanceof Error) {
    return exchange
  }

  const error = await (async () => {
    switch (exchange) {
      case EXCHANGE_KIWI_COIN:
        return syncKiwiCoinTradeList(pool, { userUID, userExchangeKeysUID })
      case EXCHANGE_DASSET:
        return syncDassetTradeList(pool, { userUID, userExchangeKeysUID })
      default:
        return new Error('Not implemented')
    }
  })()

  if (error instanceof Error) {
    return error
  }

  return {
    user_uid: userUID,
  }
}

export { syncExchangeTradeListHandler }
