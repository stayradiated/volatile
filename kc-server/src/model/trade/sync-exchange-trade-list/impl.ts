/*
Import { errorListBoundary } from '@stayradiated/error-boundary'

import { upsertTrade } from '../../trade/upsert-trade.js'
import {
  hasOrderByID,
  selectOrderByID,
  upsertOrder,
} from '../../order/index.js'

import type { Pool } from '../../../types.js'
import type { UserExchangeAPI } from '../../../exchange-api/index.js'

const LIMIT = 25

type FetchPageLoopOptions = {
  prevFetchCount: number
  page: number
  pool: Pool
  userExchangeAPI: UserExchangeAPI,
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
    userExchangeAPI,
    userUID,
    exchangeUID,
    forceSync,
  } = options

  const orders = await userExchangeAPI.getClosedOrders({
    limit: LIMIT,
    page,
  })
  if (orders instanceof Error) {
    return orders
  }

  const totalOrderCount = prevFetchCount + orders.items.length
  console.log(`Fetched ${totalOrderCount}/${orders.total} items`)

  const resultList = await errorListBoundary<IntemediateResult>(async () =>
    Promise.all(
      orders.items.map(async (order): Promise<IntemediateResult | Error> => {
        const hasOrder = await hasOrderByID(pool, {
          userUID,
          exchangeUID,
          orderID: order.orderID,
        })
        if (hasOrder instanceof Error) {
          return hasOrder
        }

        const upsertOrderError = await upsertOrder(pool, {
          userUID,
          exchangeUID,
          orderID: order.orderID,
          primaryCurrency: order.primaryCurrency,
          secondaryCurrency: order.secondaryCurrency,
          price: order.price,
          volume: order.volume,
          value: order.price * order.volume,
          type: order.type,
          openedAt: order.openedAt,
          closedAt: order.closedAt,
        })
        if (upsertOrderError instanceof Error) {
          return upsertOrderError
        }

        const isTrade = order.status === 'Completed'
        if (isTrade) {
          const maybeOrder = await selectOrderByID(pool, {
            userUID,
            exchangeUID,
            orderID: order.orderID,
          })

          const orderUID =
            maybeOrder instanceof Error ? undefined : maybeOrder.UID

          const upsertTradeError = await upsertTrade(pool, {
            userUID,
            exchangeUID,
            orderUID,
            timestamp: order.openedAt,
            tradeID: order.orderID,
            type: order.type,
            volume: order.volume,
            primaryCurrency: order.primaryCurrency,
            secondaryCurrency: order.secondaryCurrency,
            price: order.price,
            value: order.value,
            fee: order.fee,
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
  console.log(`Matched ${hasOrderCount}/${orders.items.length} orders`)

  if (!forceSync && hasOrderCount === orders.items.length) {
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
*/
