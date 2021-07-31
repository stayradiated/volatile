import { DateTime } from 'luxon'
import * as dasset from '@stayradiated/dasset-api'

import { mustGetUserDassetExchangeKeys } from '../../../models/user-exchange-keys/index.js'
import {
  getExchangeUID,
  EXCHANGE_DASSET,
} from '../../../models/exchange/index.js'
import { insertTrade } from '../../../models/trade/insert-trade.js'
import {
  hasOrderByID,
  selectOrderByID,
  insertOrder,
} from '../../../models/order/index.js'

import type { CryptoSymbol, Pool } from '../../../types.js'

const LIMIT = 25

type FetchNextPageOptions = {
  page: number
  pool: Pool
  config: dasset.Config
  userUID: string
  exchangeUID: string
}

const fetchPageLoop = async (
  options: FetchNextPageOptions,
): Promise<void | Error> => {
  const { page, pool, config, userUID, exchangeUID } = options

  const orders = await dasset.getPage(config, dasset.closedOrders, LIMIT, page)
  if (orders instanceof Error) {
    return orders
  }

  const totalOrderCount = orders.results.length

  console.log(`Fetched ${totalOrderCount}/${orders.total} results`)
  let matchedCount = 0

  for (const order of orders.results) {
    const hasOrder = await hasOrderByID(pool, {
      userUID,
      exchangeUID,
      orderID: order.id,
    })

    if (hasOrder) {
      matchedCount += 1
    }

    if (!hasOrder) {
      const error = await insertOrder(pool, {
        userUID,
        exchangeUID,
        orderID: order.id,
        symbol: order.baseSymbol,
        priceNZD: order.details.price,
        amount: order.baseAmount,
        type: order.type === dasset.OrderType.BUY ? 0 : 1,
        openedAt: DateTime.fromISO(order.timestamp),
        closedAt: order.isOpen ? undefined : DateTime.local(),
      })
      if (error instanceof Error) {
        return error
      }
    }

    if (order.status === dasset.OrderStatus.COMPLETED) {
      const maybeOrder = await selectOrderByID(pool, {
        userUID,
        exchangeUID,
        orderID: order.id,
      })

      const orderUID = maybeOrder instanceof Error ? undefined : maybeOrder.UID

      await insertTrade(pool, {
        userUID,
        exchangeUID,
        orderUID,
        timestamp: DateTime.fromISO(order.timestamp),
        ID: order.id,
        type: order.type === dasset.OrderType.BUY ? 0 : 1,
        amount: order.details.filled,
        symbol: order.baseSymbol as CryptoSymbol,
        priceNZD: order.details.price,
        totalNZD: order.details.total,
        feeNZD: order.details.nzdFee,
      })
    }
  }

  console.log(`Matched ${matchedCount}/${orders.results.length} orders`)
  if (matchedCount === orders.results.length) {
    return
  }

  if (orders.hasNext) {
    return fetchPageLoop(options)
  }
}

type Options = {
  userUID: string
  userExchangeKeysUID: string
}

const syncDassetTradeList = async (
  pool: Pool,
  options: Options,
): Promise<void | Error> => {
  const { userUID, userExchangeKeysUID } = options

  const exchangeUID = await getExchangeUID(pool, EXCHANGE_DASSET)
  if (exchangeUID instanceof Error) {
    return exchangeUID
  }

  const config = await mustGetUserDassetExchangeKeys(pool, userExchangeKeysUID)
  if (config instanceof Error) {
    return config
  }

  const error = await fetchPageLoop({
    pool,
    config,
    page: 1,
    userUID,
    exchangeUID,
  })
  if (error instanceof Error) {
    return error
  }
}

export { syncDassetTradeList }
