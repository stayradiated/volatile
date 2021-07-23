import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
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
import { mustGetUserKiwiCoinExchangeKeys } from '../../models/user-exchange-keys/index.js'
import { fetchAvailableNZD } from './fetch-available-nzd.js'
import { calculateOrderAmountNZD } from './calculate-order-amount-nzd.js'

const MINIMUM_BTC_BID = 0.000_01

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

  const goalAmountNZD = await calculateOrderAmountNZD({
    config,
    dcaOrder,
  })
  if (goalAmountNZD instanceof Error) {
    return goalAmountNZD
  }

  const totalAvailableNZD = availableNZD + previousOrderNZD
  const amountNZD = Math.min(
    dcaOrder.maxAmountNZD,
    goalAmountNZD,
    totalAvailableNZD,
  )

  if (amountNZD <= dcaOrder.minAmountNZD) {
    console.log('Have reached daily goal, passing...')
  } else {
    const orderBook = await kiwiCoin.orderBook()
    if (orderBook instanceof Error) {
      return orderBook
    }

    const marketPriceNZD = await getMarketPrice(pool, dcaOrder.marketUID)
    if (marketPriceNZD instanceof Error) {
      return marketPriceNZD
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

    const amountBTC = round(8, amountNZD / orderPriceNZD)
    if (amountBTC < MINIMUM_BTC_BID) {
      console.log(
        `Bid amount is below MINIMUM_BTC_BID: ${amountBTC}/${MINIMUM_BTC_BID}`,
      )
    } else {
      await Promise.all(
        previousOrders.map(async (previousOrder) => {
          const previousOrderID = Number.parseInt(previousOrder.ID, 10)

          const error = await kiwiCoin.cancelOrder(config, previousOrderID)
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

      const freshOrder = await kiwiCoin.buy(config, {
        price: orderPriceNZD,
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
        priceNZD: orderPriceNZD,
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
        marketPriceNZD,
        marketOffset: dcaOrder.marketOffset,
      })
      if (dcaOrderHistory instanceof Error) {
        return dcaOrderHistory
      }

      console.log({
        dcaOrderHistoryUID: dcaOrderHistory.UID,
        orderUID: order.UID,
        orderID: order.ID,
        marketPriceNZD,
        marketOffset: dcaOrderHistory.marketOffset,
        priceNZD: order.priceNZD,
        amountBTC: order.amount,
        valueNZD: order.amount * order.priceNZD,
      })
    }
  }
}

export { executeDCAOrder }
