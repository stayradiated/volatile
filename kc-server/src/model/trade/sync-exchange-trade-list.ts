import { errorListBoundary } from '@stayradiated/error-boundary'

import type { UserExchangeAPI } from '../../exchange-api/index.js'

import {
  getUserExchangeKeys,
  getUserExchangeAPI,
} from '../user-exchange-keys/index.js'
import { upsertTrade } from '../trade/upsert-trade.js'
import { selectOrderByID } from '../order/index.js'

import type { Pool } from '../../types.js'

const PAGE_SIZE = 25

type SyncPageLoopOptions = {
  pageIndex: number
  pool: Pool
  userExchangeAPI: UserExchangeAPI
  userUID: string
  exchangeUID: string
  forceSync: boolean
}

const syncPageLoop = async (
  options: SyncPageLoopOptions,
): Promise<void | Error> => {
  const { pageIndex, pool, userExchangeAPI, userUID, exchangeUID, forceSync } =
    options

  const trades = await userExchangeAPI.getTrades({
    pageSize: PAGE_SIZE,
    pageIndex,
  })
  if (trades instanceof Error) {
    return trades
  }

  const errorList = await errorListBoundary(async () =>
    Promise.all(
      trades.items.map(async (trade): Promise<void | Error> => {
        const maybeOrder = await selectOrderByID(pool, {
          userUID,
          exchangeUID,
          orderID: trade.orderID,
        })

        const orderUID =
          maybeOrder instanceof Error ? undefined : maybeOrder.UID

        const upsertTradeError = await upsertTrade(pool, {
          userUID,
          exchangeUID,
          orderUID,
          timestamp: trade.timestamp,
          tradeID: trade.tradeID,
          type: trade.type,
          primaryCurrency: trade.primaryCurrency,
          secondaryCurrency: trade.secondaryCurrency,
          price: trade.price,
          volume: trade.volume,
          value: trade.price * trade.volume,
          fee: trade.fee,
          totalValue: trade.price * trade.volume + trade.fee,
        })
        if (upsertTradeError instanceof Error) {
          return upsertTradeError
        }

        return undefined
      }),
    ),
  )
  if (errorList instanceof Error) {
    return errorList
  }

  if (!forceSync) {
    return
  }

  if (trades.hasNextPage) {
    return syncPageLoop({
      ...options,
      pageIndex: pageIndex + 1,
    })
  }
}

type SyncExchangeTradeListOptions = {
  userExchangeKeysUID: string
  forceSync?: boolean
}

const syncExchangeTradeList = async (
  pool: Pool,
  options: SyncExchangeTradeListOptions,
): Promise<void | Error> => {
  const { userExchangeKeysUID, forceSync = false } = options

  const userExchangeKeys = await getUserExchangeKeys(pool, userExchangeKeysUID)
  if (userExchangeKeys instanceof Error) {
    return userExchangeKeys
  }

  const userExchangeAPI = await getUserExchangeAPI(pool, userExchangeKeysUID)
  if (userExchangeAPI instanceof Error) {
    return userExchangeAPI
  }

  const error = await syncPageLoop({
    pool,
    userExchangeAPI,
    pageIndex: 1,
    userUID: userExchangeKeys.userUID,
    exchangeUID: userExchangeKeys.exchangeUID,
    forceSync,
  })

  return error
}

export { syncExchangeTradeList }
