import * as d from '@stayradiated/dasset-api'

import { ExchangeError } from '../util/error.js'

import type { ExchangeAPI } from './index.js'

const dasset: ExchangeAPI<d.Config> = {
  getLowestAskPrice: async (options) => {
    const { config, assetSymbol, currency } = options
    const orderBook = await d.orderBook(config, `${assetSymbol}-${currency}`)
    if (orderBook instanceof Error) {
      return orderBook
    }

    const lowestAsk = orderBook.ask[0]
    const lowestAskPrice = lowestAsk
      ? Number.parseFloat(lowestAsk.rate)
      : Number.POSITIVE_INFINITY

    return lowestAskPrice
  },
  getBalance: async (options) => {
    const { config, currency } = options
    const balance = await d.balanceSingle(config, currency)
    if (balance instanceof Error) {
      return balance
    }

    const availableNZD = balance.total
    if (typeof availableNZD !== 'number' || Number.isNaN(availableNZD)) {
      return new ExchangeError({
        message: 'Could not fetch available NZD from dassetx.com',
        context: { balance },
      })
    }

    return availableNZD
  },
  createOrder: async (options) => {
    const { config, amount, price, assetSymbol, currency } = options
    const order = await d.createOrder(config, {
      amount: amount * (1 - 0.0036), // Account for 0.35% trading fee,
      limit: price,
      orderType: 'LIMIT',
      side: d.OrderType.BUY,
      timeInForce: 'GOOD_TIL_CANCELLED',
      tradingPair: `${assetSymbol}-${currency}`,
    })
    if (order instanceof Error) {
      return order
    }

    return {
      orderID: order.order.orderId,
    }
  },
  cancelOrder: async (options) => {
    const { config, orderID } = options
    const error = d.cancelOrder(config, orderID)
    if (error instanceof Error) {
      return new ExchangeError({
        message: 'Failed to cancel order',
        cause: error,
        context: { orderID },
      })
    }

    return undefined
  },
}

export { dasset }
