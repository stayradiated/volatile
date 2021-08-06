import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { DateTime } from 'luxon'

import type { Pool } from '../../types.js'
import {
  DCAOrder,
  getDCAOrderCurrentAmountNZD,
} from '../../model/dca-order/index.js'
import { getMarketPrice } from '../../model/market-price/index.js'
import {
  insertOrder,
  updateOrder,
  selectOpenOrdersForDCA,
} from '../../model/order/index.js'
import { insertDCAOrderHistory } from '../../model/dca-order-history/index.js'
import { round } from '../../util/round.js'
import { explainError } from '../../util/error.js'
import { mustGetUserKiwiCoinExchangeKeys } from '../../model/user-exchange-keys/index.js'
import { syncExchangeTradeList } from '../../model/trade/index.js'
import { fetchAvailableNZD } from './fetch-available-nzd.js'

const executeDCAOrder = async (
  pool: Pool,
  dcaOrder: DCAOrder,
): Promise<void | Error> => {
  const config = await mustGetUserKiwiCoinExchangeKeys(
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

  // eslint-disable-next-line unicorn/no-array-reduce
  const previousOrderNZD = previousOrders.reduce(
    (sum, order) => sum + order.priceNZD * order.amount,
    0,
  )

  // Should really be done concurrently, but kiwi-coin.com often returns a 401?
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

  const goalAmountNZD = await getDCAOrderCurrentAmountNZD(pool, dcaOrder)
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
    const orderBook = await kiwiCoin.orderBook()
    if (orderBook instanceof Error) {
      return orderBook
    }

    const offsetPercent = (dcaOrder.marketOffset + 100) / 100
    const maxOrderPrice = round(2, marketPriceNZD * offsetPercent)

    const lowestAsk = orderBook.asks[0]
    const lowestAskPrice = lowestAsk
      ? Number.parseFloat(lowestAsk[0])
      : Number.POSITIVE_INFINITY

    const orderPriceNZD =
      maxOrderPrice > lowestAskPrice ? lowestAskPrice - 0.01 : maxOrderPrice

    if (orderPriceNZD !== maxOrderPrice) {
      console.log('Lowering bid price to just below lowest ask price')
    }

    const amountCrypto = round(8, amountNZD / orderPriceNZD)
    await Promise.all(
      previousOrders.map(async (previousOrder) => {
        const previousOrderID = Number.parseInt(previousOrder.orderID, 10)

        const error = await kiwiCoin.cancelOrder(config, previousOrderID)
        if (error instanceof Error) {
          console.error(
            explainError(
              'Failed to cancel order',
              { orderID: previousOrder.orderID },
              error,
            ),
          )
        }

        await updateOrder(pool, {
          UID: previousOrder.UID,
          closedAt: DateTime.local(),
        })
      }),
    )

    const freshOrder = await kiwiCoin.buy(config, {
      price: orderPriceNZD,
      amount: amountCrypto,
    })
    if (freshOrder instanceof Error) {
      return freshOrder
    }

    const order = await insertOrder(pool, {
      userUID: dcaOrder.userUID,
      exchangeUID: dcaOrder.exchangeUID,
      orderID: String(freshOrder.id),
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
      marketPriceNZD,
      symbol: dcaOrder.symbol,
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
      amountCrypto: order.amount,
      valueNZD: order.amount * order.priceNZD,
    })
  }
}

export { executeDCAOrder }
