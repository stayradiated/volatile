import { DateTime } from 'luxon'
import * as dasset from '@stayradiated/dasset-api'

import { mustGetUserDassetExchangeKeys } from '../../../models/user-exchange-keys/index.js'
import {
  getExchangeUID,
  EXCHANGE_DASSET,
} from '../../../models/exchange/index.js'
import { insertTrade } from '../../../models/trade/insert-trade.js'

import type { CryptoSymbol, Pool } from '../../../types.js'

type Options = {
  userUID: string
  userExchangeKeysUID: string
}

const syncDassetTradeList = async (pool: Pool, options: Options) => {
  const { userUID, userExchangeKeysUID } = options

  const exchangeUID = await getExchangeUID(pool, EXCHANGE_DASSET)
  if (exchangeUID instanceof Error) {
    return exchangeUID
  }

  const config = await mustGetUserDassetExchangeKeys(pool, userExchangeKeysUID)
  if (config instanceof Error) {
    return config
  }

  const allOrders = await dasset.closedOrders(config, { limit: 1, page: 1 })
  if (allOrders instanceof Error) {
    return allOrders
  }

  await Promise.all(
    allOrders.results
      .filter((order) => order.status === dasset.OrderStatus.COMPLETED)
      .map(async (trade) => {
        await insertTrade(pool, {
          userUID,
          exchangeUID,
          orderUID: undefined,
          timestamp: DateTime.fromISO(trade.timestamp),
          ID: trade.id,
          type: trade.type === dasset.OrderType.BUY ? 0 : 1,
          amount: trade.details.filled,
          symbol: trade.baseSymbol as CryptoSymbol,
          priceNZD: trade.details.price,
          totalNZD: trade.details.total,
          feeNZD: trade.details.nzdFee,
        })
      }),
  )

  return true
}

export { syncDassetTradeList }
