import * as dasset from '@stayradiated/dasset-api'
import { DateTime } from 'luxon'

import type { Pool } from '../../types.js'
import { DCAOrder } from '../../models/dca-order/index.js'
import { getMarketPrice } from '../../models/market-price/index.js'
import {
  insertOrder,
  updateOrder,
  selectOpenOrdersForDCA,
  OrderType,
} from '../../models/order/index.js'
import { insertDCAOrderHistory } from '../../models/dca-order-history/index.js'
import { round } from '../../utils/round.js'
import { explainError } from '../../utils/error.js'
import { mustGetUserDassetExchangeKeys } from '../../models/user-exchange-keys/index.js'
import { fetchAvailableNZD } from './fetch-available-nzd.js'
import { calculateOrderAmountNZD } from './calculate-order-amount-nzd.js'

const MINIMUM_BTC_BID = 0.000_01

const executeDCAOrder = async (
  pool: Pool,
  dcaOrder: DCAOrder,
): Promise<void | Error> => {
  const config = await mustGetUserDassetExchangeKeys(pool, {
    userUID: dcaOrder.userUID,
  })
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
    (sum, order) => sum + order.price * order.amount,
    0,
  )

  // Should really be done concurrently
  const availableNZD = await fetchAvailableNZD(config)
  if (availableNZD instanceof Error) {
    return availableNZD
  }

  const goalAmountNZD = await calculateOrderAmountNZD({
    config,
    dcaOrder,
  })
  if (goalAmountNZD instanceof Error) {
    return goalAmountNZD
  }

  const totalAvailableNZD = availableNZD + previousOrderNZD
  const amountNZD = Math.min(goalAmountNZD, totalAvailableNZD)

  if (amountNZD <= 0) {
    console.log('Have reached daily goal, passing...')
  } else {
    const marketPrice = await getMarketPrice(pool, dcaOrder.marketUID)
    if (marketPrice instanceof Error) {
      return marketPrice
    }

    const offsetPercent = (-1.5 + 100) / 100
    const orderPrice = round(2, marketPrice * offsetPercent)

    const amountBTC = round(8, amountNZD / orderPrice)
    if (amountBTC < MINIMUM_BTC_BID) {
      console.log(
        `Bid amount is below MINIMUM_BTC_BID: ${amountBTC}/${MINIMUM_BTC_BID}`,
      )
    } else {
      await Promise.all(
        previousOrders.map(async (previousOrder) => {
          const previousOrderID = previousOrder.ID

          const error = await dasset.cancelOrder(config, previousOrderID)
          if (error instanceof Error) {
            console.error(
              explainError(
                'Failed to cancel order',
                { orderID: previousOrder.ID },
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

      const freshOrder = await dasset.createOrder(config, {
        amount: amountBTC,
        limit: orderPrice,
        orderType: 'LIMIT',
        side: dasset.OrderType.BUY,
        timeInForce: 'GOOD_TIL_CANCELLED',
        tradingPair: 'BTC-NZD',
      })
      if (freshOrder instanceof Error) {
        return freshOrder
      }

      const order = await insertOrder(pool, {
        userUID: dcaOrder.userUID,
        exchangeUID: dcaOrder.exchangeUID,
        ID: freshOrder.order.orderId,
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
