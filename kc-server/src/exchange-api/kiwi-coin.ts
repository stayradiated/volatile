import * as kc from '@stayradiated/kiwi-coin-api'

import { ExchangeError } from '../util/error.js'
import type { ExchangeAPI } from './index.js'

const kiwiCoin: ExchangeAPI<kc.Config> = {
  getLowestAskPrice: async () => {
    const orderBook = await kc.getOrderBook()
    if (orderBook instanceof Error) {
      return new ExchangeError({
        message: 'Failed to get lowest ask price from kiwi-coin.com',
        cause: orderBook,
      })
    }

    const lowestAsk = orderBook.asks[0]
    const lowestAskPrice = lowestAsk
      ? Number.parseFloat(lowestAsk[0])
      : Number.POSITIVE_INFINITY

    return lowestAskPrice
  },
  getBalance: async (options) => {
    const { config } = options

    const balance = await kc.getBalance({ config })
    if (balance instanceof Error) {
      return new ExchangeError({
        message: 'Failed to get balance from kiwi-coin.com',
        cause: balance,
      })
    }

    const availableNZD = Number.parseFloat(balance.nzd_available)
    return availableNZD
  },
  createOrder: async (options) => {
    const { config, price, amount } = options
    const order = await kc.createBuyOrder({ config, price, amount })
    if (order instanceof Error) {
      return new ExchangeError({
        message: 'Failed to create order on kiwi-coin.com',
        cause: order,
        context: { price, amount },
      })
    }

    return {
      orderID: String(order.id),
    }
  },
  cancelOrder: async (options) => {
    const { config, orderID } = options
    const error = await kc.cancelOrder({ config, orderID: Number.parseInt(orderID, 10) })
    if (error instanceof Error) {
      return new ExchangeError({
        message: 'Failed to cancel order on kiwi-coin.com',
        cause: error,
        context: { orderID },
      })
    }

    return undefined
  },
}

export { kiwiCoin }
