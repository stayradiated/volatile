import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { DateTime } from 'luxon'

import type { Pool } from '../../types.js'
import { DCAOrder } from '../../models/dca-order/index.js'
import { getMarketPrice } from '../../models/market-price/index.js'
import { getUserExchangeKeys } from '../../models/user-exchange-keys/index.js'
import {
  insertOrder,
  updateOrder,
  selectOpenOrdersForDCA,
  OrderType,
} from '../../models/order/index.js'
import { insertDCAOrderHistory } from '../../models/dca-order-history/index.js'
import { round } from '../../utils/round.js'
import { wrapError } from '../../utils/wrap-error.js'
import { fetchAvailableNZD } from './fetch-available-nzd.js'
import { calculateOrderAmountNZD } from './calculate-order-amount-nzd.js'

const MINIMUM_BTC_BID = 0.000_01

const executeDCAOrder = async (
  pool: Pool,
  dcaOrder: DCAOrder,
): Promise<void | Error> => {
  const userExchangeKeys = await getUserExchangeKeys(pool, {
    userUID: dcaOrder.userUID,
    exchangeUID: dcaOrder.exchangeUID,
  })
  if (userExchangeKeys instanceof Error) {
    return userExchangeKeys
  }

  const config = userExchangeKeys.keys

  if (!kiwiCoin.isValidConfig(config)) {
    return new Error('userExchangeKeys are not valid for kiwi-coin.com')
  }

  // Should really be done concurrently, but kiwi-coin.com often returns a 401?
  const availableNZD = await fetchAvailableNZD(config)
  if (availableNZD instanceof Error) {
    return availableNZD
  }

  const goalAmountNZD = await calculateOrderAmountNZD({
    config,
    dailyAverage: dcaOrder.dailyAverage,
    startAt: dcaOrder.startAt,
  })
  if (goalAmountNZD instanceof Error) {
    return goalAmountNZD
  }

  const amountNZD = Math.min(goalAmountNZD, availableNZD)

  if (amountNZD <= 0) {
    console.log('Have reached daily goal, passing...')
  } else {
    const [orderBook, existingOrders] = await Promise.all([
      kiwiCoin.orderBook(),
      kiwiCoin.openOrders(config),
    ])
    if (orderBook instanceof Error) {
      return orderBook
    }

    if (existingOrders instanceof Error) {
      return existingOrders
    }

    const marketPrice = await getMarketPrice(pool, dcaOrder.marketUID)
    if (marketPrice instanceof Error) {
      return marketPrice
    }

    const offsetPercent = (-1.5 + 100) / 100
    const maxOrderPrice = round(2, marketPrice * offsetPercent)

    const lowestAsk = orderBook.asks[0]
    const lowestAskPrice = lowestAsk
      ? Number.parseFloat(lowestAsk[0])
      : Number.POSITIVE_INFINITY

    const orderPrice =
      maxOrderPrice > lowestAskPrice ? lowestAskPrice - 0.01 : maxOrderPrice

    if (orderPrice !== maxOrderPrice) {
      console.log('Lowering bid price to just below lowest ask price')
    }

    const amountBTC = round(8, amountNZD / orderPrice)
    if (amountBTC < MINIMUM_BTC_BID) {
      console.log(
        `Bid amount is below MINIMUM_BTC_BID: ${amountBTC}/${MINIMUM_BTC_BID}`,
      )
    } else {
      const previousOrders = await selectOpenOrdersForDCA(pool, {
        dcaOrderUID: dcaOrder.UID,
      })
      if (previousOrders instanceof Error) {
        return previousOrders
      }

      await Promise.all(
        previousOrders.map(async (previousOrder) => {
          const orderID = Number.parseInt(previousOrder.ID, 10)

          const error = await kiwiCoin.cancelOrder(config, orderID)
          if (error instanceof Error) {
            console.error(
              wrapError(
                `Failed to cancel order for orderID='${orderID}'`,
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
        price: orderPrice,
        amount: amountBTC,
      })
      if (freshOrder instanceof Error) {
        return freshOrder
      }

      const order = await insertOrder(pool, {
        userUID: dcaOrder.userUID,
        exchangeUID: dcaOrder.exchangeUID,
        ID: String(freshOrder.id),
        symbol: 'BTC',
        type: OrderType.BUY,
        price: orderPrice,
        amount: amountBTC,
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
        marketPrice,
        marketOffset: dcaOrder.marketOffset,
      })
      if (dcaOrderHistory instanceof Error) {
        return dcaOrderHistory
      }

      console.log({
        dcaOrderHistoryUID: dcaOrderHistory.UID,
        orderUID: order.UID,
        orderID: order.ID,
        marketPrice,
        marketOffset: dcaOrderHistory.marketOffset,
        price: order.price,
        amount: order.amount,
        value: order.amount * order.price,
      })
    }
  }
}

export { executeDCAOrder }
