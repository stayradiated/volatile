import * as dasset from '@stayradiated/dasset-api'
import { DateTime } from 'luxon'

import type { Pool } from '../../../../types.js'
import {
  DCAOrder,
  getDCAOrderCurrentAmountNZD,
} from '../../../../model/dca-order/index.js'
import { getMarketPrice } from '../../../../model/market-price/index.js'
import {
  insertOrder,
  selectOpenOrdersForDCA,
} from '../../../../model/order/index.js'
import { insertDCAOrderHistory } from '../../../../model/dca-order-history/index.js'
import { round } from '../../../../util/round.js'
import { mustGetUserDassetExchangeKeys } from '../../../../model/user-exchange-keys/index.js'
import { syncExchangeTradeList } from '../../../../model/trade/index.js'
import { fetchAvailableNZD } from './fetch-available-nzd.js'
import { closeOrders } from './close-orders.js'

const executeDassetDCAOrder = async (
  pool: Pool,
  dcaOrder: DCAOrder,
): Promise<void | Error> => {
  const config = await mustGetUserDassetExchangeKeys(
    pool,
    dcaOrder.userExchangeKeysUID,
  )
  if (config instanceof Error) {
    return config
  }

  const previousOrders = await selectOpenOrdersForDCA(pool, {
    dcaOrderUID: dcaOrder.UID,
  })
  if (previousOrders instanceof Error) {
    return previousOrders
  }

  const error = await closeOrders(pool, config, previousOrders)
  if (error instanceof Error) {
    return error
  }

  const previousOrderNZD = previousOrders.reduce(
    (sum, order) => sum + order.priceNZD * order.amount,
    0,
  )

  // Should really be done concurrently
  const availableNZD = await fetchAvailableNZD(config)
  if (availableNZD instanceof Error) {
    return availableNZD
  }

  // Must do this before calling getDCAOrderCurrentAmountNZD
  const syncError = await syncExchangeTradeList(pool, {
    userUID: dcaOrder.userUID,
    exchangeUID: dcaOrder.exchangeUID,
    userExchangeKeysUID: dcaOrder.userExchangeKeysUID,
  })
  if (syncError instanceof Error) {
    return syncError
  }

  const goalAmountNZD = await getDCAOrderCurrentAmountNZD(
    pool,
    dcaOrder,
    DateTime.local(),
  )
  if (goalAmountNZD instanceof Error) {
    return goalAmountNZD
  }

  const totalAvailableNZD = availableNZD + previousOrderNZD
  const amountNZD = Math.min(
    dcaOrder.maxAmountNZD ?? Number.POSITIVE_INFINITY,
    goalAmountNZD,
    totalAvailableNZD,
  )

  const marketPriceNZD = await getMarketPrice(
    pool,
    dcaOrder.marketUID,
    dcaOrder.symbol,
  )
  if (marketPriceNZD instanceof Error) {
    return marketPriceNZD
  }

  if (amountNZD <= (dcaOrder.minAmountNZD ?? 0)) {
    const dcaOrderHistory = await insertDCAOrderHistory(pool, {
      userUID: dcaOrder.userUID,
      dcaOrderUID: dcaOrder.UID,
      orderUID: undefined,
      marketPriceNZD,
      symbol: dcaOrder.symbol,
      marketOffset: dcaOrder.marketOffset,
      calculatedAmountNZD: goalAmountNZD,
      availableBalanceNZD: totalAvailableNZD,
      description: `amountNZD (${amountNZD.toFixed(
        2,
      )}) is below minAmountNZD (${dcaOrder.minAmountNZD ?? 0})`,
    })
    if (dcaOrderHistory instanceof Error) {
      return dcaOrderHistory
    }

    console.log(dcaOrderHistory)
  } else {
    const offsetPercent = (dcaOrder.marketOffset + 100) / 100
    const orderPriceNZD = round(2, marketPriceNZD * offsetPercent)

    const amountCrypto = round(8, amountNZD / orderPriceNZD)
    const freshOrder = await dasset.createOrder(config, {
      amount: amountCrypto,
      limit: orderPriceNZD,
      orderType: 'LIMIT',
      side: dasset.OrderType.BUY,
      timeInForce: 'GOOD_TIL_CANCELLED',
      tradingPair: `${dcaOrder.symbol}-NZD`,
    })
    if (freshOrder instanceof Error) {
      return freshOrder
    }

    const order = await insertOrder(pool, {
      userUID: dcaOrder.userUID,
      exchangeUID: dcaOrder.exchangeUID,
      orderID: freshOrder.order.orderId,
      symbol: dcaOrder.symbol,
      type: 'BUY',
      priceNZD: orderPriceNZD,
      amount: amountCrypto,
      openedAt: DateTime.local(),
      closedAt: undefined,
    })
    if (order instanceof Error) {
      return order
    }

    const dcaOrderHistory = await insertDCAOrderHistory(pool, {
      userUID: dcaOrder.userUID,
      dcaOrderUID: dcaOrder.UID,
      orderUID: order.UID,
      symbol: dcaOrder.symbol,
      marketPriceNZD,
      marketOffset: dcaOrder.marketOffset,
      calculatedAmountNZD: goalAmountNZD,
      availableBalanceNZD: totalAvailableNZD,
      description: 'Created order',
    })
    if (dcaOrderHistory instanceof Error) {
      return dcaOrderHistory
    }

    console.log({
      dcaOrderHistoryUID: dcaOrderHistory.UID,
      orderUID: order.UID,
      orderID: order.orderID,
      marketPriceNZD,
      marketOffset: dcaOrderHistory.marketOffset,
      priceNZD: order.priceNZD,
      amount: order.amount,
      totalNZD: order.amount * order.priceNZD,
    })
  }
}

export { executeDassetDCAOrder }
