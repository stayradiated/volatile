import { DateTime } from 'luxon'
import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { errorListBoundary } from '@stayradiated/error-boundary'

import { mustGetUserKiwiCoinExchangeKeys } from '../../../user-exchange-keys/index.js'
import { getExchangeUID, EXCHANGE_KIWI_COIN } from '../../../exchange/index.js'
import { upsertTrade } from '../../upsert-trade.js'
import { selectOrderByID } from '../../../order/index.js'

import type { Pool } from '../../../../types.js'

type Options = {
  userUID: string
  userExchangeKeysUID: string
}

const syncKiwiCoinTradeList = async (
  pool: Pool,
  options: Options,
): Promise<void | Error> => {
  const { userUID, userExchangeKeysUID } = options

  const exchangeUID = await getExchangeUID(pool, EXCHANGE_KIWI_COIN)
  if (exchangeUID instanceof Error) {
    return exchangeUID
  }

  const userExchangeKeys = await mustGetUserKiwiCoinExchangeKeys(
    pool,
    userExchangeKeysUID,
  )
  if (userExchangeKeys instanceof Error) {
    return userExchangeKeys
  }

  const allTrades = await kiwiCoin.getTradeList({
    config: userExchangeKeys.keys,
    timeframe: 'all',
  })
  if (allTrades instanceof Error) {
    return allTrades
  }

  const resultList = await errorListBoundary(async () =>
    Promise.all(
      allTrades.map(async (trade) => {
        const maybeOrder = await selectOrderByID(pool, {
          userUID,
          exchangeUID,
          orderID: String(trade.order_id),
        })

        const orderUID =
          maybeOrder instanceof Error ? undefined : maybeOrder.UID

        const upsertTradeError = await upsertTrade(pool, {
          userUID,
          exchangeUID,
          orderUID,
          timestamp: DateTime.fromSeconds(trade.datetime),
          tradeID: String(trade.transaction_id),
          type: trade.trade_type === 0 ? 'BUY' : 'SELL',
          amount: trade.income,
          assetSymbol: 'BTC',
          priceNZD: trade.price,
          totalNZD: trade.trade_size * trade.price,
          feeNZD: trade.fee * trade.price,
        })
        if (upsertTradeError instanceof Error) {
          return upsertTradeError
        }

        return undefined
      }),
    ),
  )
  if (resultList instanceof Error) {
    return resultList
  }

  return undefined
}

export { syncKiwiCoinTradeList }
