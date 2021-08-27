import { DateTime } from 'luxon'

import { log } from '../../util/debug'
import type { Pool } from '../../types.js'
import {
  DCAOrder,
  getDCAOrderCurrentAmountNZD,
} from '../../model/dca-order/index.js'
import { selectAvgMarketPrice } from '../../model/market-price/index.js'
import { insertOrder } from '../../model/order/index.js'
import { insertDCAOrderHistory } from '../../model/dca-order-history/index.js'
import { round } from '../../util/round.js'
import { syncExchangeTradeList } from '../../model/trade/index.js'
import type { UserExchangeAPI } from '../../exchange-api/index.js'
import { cancelPreviousOrders } from './cancel-previous-orders.js'

type ExecuteDCAOrderOptions = {
  userExchangeAPI: UserExchangeAPI
  dcaOrder: DCAOrder
}

const executeDCAOrder = async (
  pool: Pool,
  options: ExecuteDCAOrderOptions,
): Promise<void | Error> => {
  const { userExchangeAPI, dcaOrder } = options

  await cancelPreviousOrders(pool, {
    dcaOrderUID: dcaOrder.UID,
    userExchangeAPI,
  })

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

  const availableBalanceNZD = await userExchangeAPI.getBalance({
    currency: 'NZD',
  })
  if (availableBalanceNZD instanceof Error) {
    return availableBalanceNZD
  }

  const amountNZD = Math.min(
    dcaOrder.maxAmountNZD ?? Number.POSITIVE_INFINITY,
    goalAmountNZD,
    availableBalanceNZD,
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
      availableBalanceNZD,
      description: `amountNZD (${amountNZD.toFixed(
        2,
      )}) is below minAmountNZD (${dcaOrder.minAmountNZD ?? 0})`,
    })
    if (dcaOrderHistory instanceof Error) {
      return dcaOrderHistory
    }

    log(dcaOrderHistory)
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
      log('Lowering bid price to just below lowest ask price')
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
      availableBalanceNZD,
      description: 'Created order',
    })
    if (dcaOrderHistory instanceof Error) {
      return dcaOrderHistory
    }

    log(dcaOrderHistory)
  }
}

export { executeDCAOrder }
