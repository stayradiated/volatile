import { DateTime } from 'luxon'
import { errorListBoundary } from '@stayradiated/error-boundary'
import { BetterError } from '@northscaler/better-error'

import type { Pool } from '../../types.js'
import {
  DCAOrder,
  getDCAOrderCurrentAmountNZD,
} from '../../model/dca-order/index.js'
import { selectAvgMarketPrice } from '../../model/market-price/index.js'
import {
  insertOrder,
  updateOrder,
  selectOpenOrdersForDCA,
} from '../../model/order/index.js'
import { insertDCAOrderHistory } from '../../model/dca-order-history/index.js'
import { round } from '../../util/round.js'
import { syncExchangeTradeList } from '../../model/trade/index.js'

import type { UserExchangeAPI } from '../../exchange-api/index.js'

type ExecuteDCAOrderOptions = {
  userExchangeAPI: UserExchangeAPI
  dcaOrder: DCAOrder
}

const executeDCAOrder = async (
  pool: Pool,
  options: ExecuteDCAOrderOptions,
): Promise<void | Error> => {
  const { userExchangeAPI, dcaOrder } = options

  const previousOrders = await selectOpenOrdersForDCA(pool, {
    dcaOrderUID: dcaOrder.UID,
  })
  if (previousOrders instanceof Error) {
    return new BetterError({
      message: 'Could not select open orders for DCA.',
      cause: previousOrders,
      context: { dcaOrderUID: dcaOrder.UID },
    })
  }

  const cancelOrderError = await errorListBoundary(async () =>
    Promise.all(
      previousOrders.map(async (order): Promise<void | Error> => {
        console.log(`[${dcaOrder.UID.slice(0, 4)}] Cancelling order ${order.orderID} from exchange.`)
        const cancelOrderError = await userExchangeAPI.cancelOrder({
          orderID: order.orderID,
        })
        if (cancelOrderError instanceof Error) {
          return cancelOrderError
        }

        console.log(`[${dcaOrder.UID.slice(0, 4)}] Updating order ${order.orderID} in DB.`)
        const updateOrderError = await updateOrder(pool, {
          UID: order.UID,
          closedAt: DateTime.local(),
        })
        if (updateOrderError instanceof Error) {
          return updateOrderError
        }

        return undefined
      }),
    ),
  )
  if (cancelOrderError instanceof Error) {
    return cancelOrderError
  }

  const previousOrderNZD = previousOrders.reduce(
    (sum, order) => sum + order.priceNZD * order.amount,
    0,
  )

  console.log(`[${dcaOrder.UID.slice(0, 4)}] Syncing trade list from exchange.`)
  // Must do this before calling getDCAOrderCurrentAmountNZD
  const syncError = await syncExchangeTradeList(pool, {
    userUID: dcaOrder.userUID,
    exchangeUID: dcaOrder.exchangeUID,
    userExchangeKeysUID: dcaOrder.userExchangeKeysUID,
  })
  if (syncError instanceof Error) {
    return syncError
  }

  console.log(`[${dcaOrder.UID.slice(0, 4)}] Getting DCA order current amount.`)
  const goalAmountNZD = await getDCAOrderCurrentAmountNZD(
    pool,
    dcaOrder,
    DateTime.local(),
  )
  if (goalAmountNZD instanceof Error) {
    return goalAmountNZD
  }

  // Should really be done concurrently
  console.log(`[${dcaOrder.UID.slice(0, 4)}] Geting balance of account`)
  const availableNZD = await userExchangeAPI.getBalance({ currency: 'NZD' })
  if (availableNZD instanceof Error) {
    return availableNZD
  }

  const totalAvailableNZD = availableNZD + previousOrderNZD
  const amountNZD = Math.min(
    dcaOrder.maxAmountNZD ?? Number.POSITIVE_INFINITY,
    goalAmountNZD,
    totalAvailableNZD,
  )

  const marketPriceNZD = await selectAvgMarketPrice(pool, {
    marketUID: dcaOrder.marketUID,
    assetSymbol: dcaOrder.assetSymbol,
  })
  if (marketPriceNZD instanceof Error) {
    return marketPriceNZD
  }

  if (amountNZD <= (dcaOrder.minAmountNZD ?? 0)) {
    const dcaOrderHistory = await insertDCAOrderHistory(pool, {
      userUID: dcaOrder.userUID,
      dcaOrderUID: dcaOrder.UID,
      orderUID: undefined,
      marketPriceNZD,
      assetSymbol: dcaOrder.assetSymbol,
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
    const lowestAskPriceNZD = await userExchangeAPI.getLowestAskPrice({
      assetSymbol: dcaOrder.assetSymbol,
      currency: 'NZD',
    })
    if (lowestAskPriceNZD instanceof Error) {
      return lowestAskPriceNZD
    }

    const offsetPercent = (dcaOrder.marketOffset + 100) / 100
    const maxOrderPriceNZD = round(2, marketPriceNZD * offsetPercent)

    const orderPriceNZD =
      maxOrderPriceNZD > lowestAskPriceNZD
        ? lowestAskPriceNZD - 0.01
        : maxOrderPriceNZD

    if (orderPriceNZD !== maxOrderPriceNZD) {
      console.log('Lowering bid price to just below lowest ask price')
    }

    const amountCrypto = round(8, amountNZD / orderPriceNZD)
    const freshOrder = await userExchangeAPI.createOrder({
      amount: amountCrypto,
      price: orderPriceNZD,
      assetSymbol: dcaOrder.assetSymbol,
      currency: 'NZD',
    })
    if (freshOrder instanceof Error) {
      return freshOrder
    }

    const order = await insertOrder(pool, {
      userUID: dcaOrder.userUID,
      exchangeUID: dcaOrder.exchangeUID,
      orderID: freshOrder.orderID,
      assetSymbol: dcaOrder.assetSymbol,
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
      assetSymbol: dcaOrder.assetSymbol,
      marketPriceNZD,
      marketOffset: dcaOrder.marketOffset,
      calculatedAmountNZD: goalAmountNZD,
      availableBalanceNZD: totalAvailableNZD,
      description: 'Created order',
    })
    if (dcaOrderHistory instanceof Error) {
      return dcaOrderHistory
    }

    console.log(dcaOrderHistory)
  }
}

export { executeDCAOrder }
