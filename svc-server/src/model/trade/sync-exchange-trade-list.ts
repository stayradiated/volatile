import { errorListBoundary } from '@stayradiated/error-boundary'

import type { UserExchangeApi } from '../../exchange-api/index.js'

import {
  getUserExchangeKeys,
  getUserExchangeApiByKeysUid,
} from '../user-exchange-keys/index.js'
import { upsertTrade } from '../trade/upsert-trade.js'
import { selectOrderByID } from '../order/index.js'

import type { Pool } from '../../types.js'

const PAGE_SIZE = 25

type SyncPageLoopOptions = {
  pageIndex: number
  pool: Pool
  userExchangeApi: UserExchangeApi
  userUid: string
  exchangeUid: string
  forceSync: boolean
}

const syncPageLoop = async (
  options: SyncPageLoopOptions,
): Promise<void | Error> => {
  const { pageIndex, pool, userExchangeApi, userUid, exchangeUid, forceSync } =
    options

  const trades = await userExchangeApi.getTrades({
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
          userUid,
          exchangeUid,
          orderId: trade.orderId,
        })

        const orderUid =
          maybeOrder instanceof Error ? undefined : maybeOrder.uid

        const upsertTradeError = await upsertTrade(pool, {
          userUid,
          exchangeUid,
          orderUid,
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
  userExchangeKeysUid: string
  forceSync?: boolean
}

const syncExchangeTradeList = async (
  pool: Pool,
  options: SyncExchangeTradeListOptions,
): Promise<void | Error> => {
  const { userExchangeKeysUid, forceSync = false } = options

  const userExchangeKeys = await getUserExchangeKeys(pool, userExchangeKeysUid)
  if (userExchangeKeys instanceof Error) {
    return userExchangeKeys
  }

  const userExchangeApi = await getUserExchangeApiByKeysUid(
    pool,
    userExchangeKeysUid,
  )
  if (userExchangeApi instanceof Error) {
    return userExchangeApi
  }

  const error = await syncPageLoop({
    pool,
    userExchangeApi,
    pageIndex: 1,
    userUid: userExchangeKeys.userUid,
    exchangeUid: userExchangeKeys.exchangeUid,
    forceSync,
  })

  return error
}

export { syncExchangeTradeList }
