import { DateTime } from 'luxon'
import * as kiwiCoin from '@stayradiated/kiwi-coin-api'

import { mustGetUserKiwiCoinExchangeKeys } from '../../../models/user-exchange-keys/index.js'
import {
  getExchangeUID,
  EXCHANGE_KIWI_COIN,
} from '../../../models/exchange/index.js'
import { insertTrade } from '../../../models/trade/insert-trade.js'
import { selectOrderByID } from '../../../models/order/index.js'

import type { Pool } from '../../../types.js'

type Options = {
  userUID: string
  userExchangeKeysUID: string
}

const syncKiwiCoinTradeList = async (pool: Pool, options: Options) => {
  const { userUID, userExchangeKeysUID } = options

  const exchangeUID = await getExchangeUID(pool, EXCHANGE_KIWI_COIN)
  if (exchangeUID instanceof Error) {
    return exchangeUID
  }

  const config = await mustGetUserKiwiCoinExchangeKeys(
    pool,
    userExchangeKeysUID,
  )
  if (config instanceof Error) {
    return config
  }

  const allTrades = await kiwiCoin.trades(config, 'all')
  if (allTrades instanceof Error) {
    return allTrades
  }

  await Promise.all(
    allTrades.map(async (trade) => {
      const maybeOrder = await selectOrderByID(pool, {
        userUID,
        exchangeUID,
        orderID: String(trade.order_id),
      })

      const orderUID = maybeOrder instanceof Error ? undefined : maybeOrder.UID

      await insertTrade(pool, {
        userUID,
        exchangeUID,
        orderUID,
        timestamp: DateTime.fromSeconds(trade.datetime),
        tradeID: String(trade.transaction_id),
        type: trade.trade_type === 0 ? 'BUY' : 'SELL',
        amount: trade.income,
        symbol: 'BTC',
        priceNZD: trade.price,
        totalNZD: trade.trade_size * trade.price,
        feeNZD: trade.fee * trade.price,
      })
    }),
  )

  return true
}

export { syncKiwiCoinTradeList }
