import { DateTime } from 'luxon'
import { errorListBoundary } from '@stayradiated/error-boundary'
import * as dasset from '@stayradiated/dasset-api'

import { mustGetUserDassetExchangeKeys } from '../../../user-exchange-keys/index.js'
import { getExchangeUID, EXCHANGE_DASSET } from '../../../exchange/index.js'
import { upsertTrade } from '../../../trade/upsert-trade.js'
import {
  hasOrderByID,
  selectOrderByID,
  upsertOrder,
} from '../../../order/index.js'

import type { Pool } from '../../../../types.js'

const LIMIT = 25

type FetchPageLoopOptions = {
  prevFetchCount: number
  page: number
  pool: Pool
  config: dasset.Config
  userUID: string
  exchangeUID: string
  forceSync: boolean
}

type IntemediateResult = {
  hasOrder: boolean
  isTrade: boolean
}

const fetchPageLoop = async (
  options: FetchPageLoopOptions,
): Promise<void | Error> => {
  const {
    prevFetchCount,
    page,
    pool,
    config,
    userUID,
    exchangeUID,
    forceSync,
  } = options

  const orders = await dasset.getPage({
    config,
    fetchFn: dasset.getClosedOrderList,
    limit: LIMIT,
    page,
  })
  if (orders instanceof Error) {
    return orders
  }

  const totalOrderCount = prevFetchCount + orders.results.length
  console.log(`Fetched ${totalOrderCount}/${orders.total} results`)

  const resultList = await errorListBoundary<IntemediateResult>(async () =>
    Promise.all(
      orders.results.map(async (order): Promise<IntemediateResult | Error> => {
        const hasOrder = await hasOrderByID(pool, {
          userUID,
          exchangeUID,
          orderID: order.id,
        })
        if (hasOrder instanceof Error) {
          return hasOrder
        }

        const upsertOrderError = await upsertOrder(pool, {
          userUID,
          exchangeUID,
          orderID: order.id,
          assetSymbol: order.baseSymbol,
          priceNZD: order.details.price ?? 0,
          amount: order.baseAmount,
          type: order.type,
          openedAt: DateTime.fromISO(order.timestamp),
          closedAt: order.isOpen ? undefined : DateTime.local(),
        })
        if (upsertOrderError instanceof Error) {
          return upsertOrderError
        }

        const isTrade = order.status === 'Completed'
        if (isTrade) {
          const maybeOrder = await selectOrderByID(pool, {
            userUID,
            exchangeUID,
            orderID: order.id,
          })

          const orderUID =
            maybeOrder instanceof Error ? undefined : maybeOrder.UID

          const upsertTradeError = await upsertTrade(pool, {
            userUID,
            exchangeUID,
            orderUID,
            timestamp: DateTime.fromISO(order.timestamp),
            tradeID: order.id,
            type: order.type,
            amount: order.details.filled,
            assetSymbol: order.baseSymbol,
            priceNZD: order.details.price ?? 0,
            totalNZD: order.details.total ?? 0,
            feeNZD: order.details.nzdFee ?? 0,
          })
          if (upsertTradeError instanceof Error) {
            return upsertTradeError
          }
        }

        return {
          hasOrder,
          isTrade,
        }
      }),
    ),
  )
  if (resultList instanceof Error) {
    return resultList
  }

  const isTradeCount = resultList.filter((result) => result.isTrade).length
  console.log(`Found ${isTradeCount} trades`)

  const hasOrderCount = resultList.filter((result) => result.hasOrder).length
  console.log(`Matched ${hasOrderCount}/${orders.results.length} orders`)

  if (!forceSync && hasOrderCount === orders.results.length) {
    return
  }

  if (orders.hasNext) {
    return fetchPageLoop({
      ...options,
      prevFetchCount: totalOrderCount,
      page: page + 1,
    })
  }
}

type Options = {
  userUID: string
  userExchangeKeysUID: string
  forceSync?: boolean
}

const syncDassetTradeList = async (
  pool: Pool,
  options: Options,
): Promise<void | Error> => {
  const { userUID, userExchangeKeysUID, forceSync = false } = options

  const exchangeUID = await getExchangeUID(pool, EXCHANGE_DASSET)
  if (exchangeUID instanceof Error) {
    return exchangeUID
  }

  const userExchangeKeys = await mustGetUserDassetExchangeKeys(
    pool,
    userExchangeKeysUID,
  )
  if (userExchangeKeys instanceof Error) {
    return userExchangeKeys
  }

  const error = await fetchPageLoop({
    prevFetchCount: 0,
    pool,
    config: userExchangeKeys.keys,
    page: 1,
    userUID,
    exchangeUID,
    forceSync,
  })

  return error
}

export { syncDassetTradeList }
