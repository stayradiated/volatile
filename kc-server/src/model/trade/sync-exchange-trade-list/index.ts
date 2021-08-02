import {
  getExchange,
  EXCHANGE_DASSET,
  EXCHANGE_KIWI_COIN,
} from '../../exchange/index.js'

import type { Pool } from '../../../types.js'
import { syncKiwiCoinTradeList, syncDassetTradeList } from './impl/index.js'

type SyncExchangeTradeListOptions = {
  userUID: string
  exchangeUID: string
  userExchangeKeysUID: string
}

const syncExchangeTradeList = async (
  pool: Pool,
  options: SyncExchangeTradeListOptions,
): Promise<void | Error> => {
  const { userUID, exchangeUID, userExchangeKeysUID } = options

  const exchange = await getExchange(pool, exchangeUID)
  if (exchange instanceof Error) {
    return exchange
  }

  const error = await (() => {
    switch (exchange) {
      case EXCHANGE_KIWI_COIN:
        return syncKiwiCoinTradeList(pool, { userUID, userExchangeKeysUID })
      case EXCHANGE_DASSET:
        return syncDassetTradeList(pool, { userUID, userExchangeKeysUID })
      default:
        return new Error('Not implemented')
    }
  })()

  return error
}

export { syncExchangeTradeList }
