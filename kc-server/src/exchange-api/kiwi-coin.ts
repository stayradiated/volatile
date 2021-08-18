import * as kc from '@stayradiated/kiwi-coin-api'
import type { ExchangeAPI } from './index.js'

const kiwiCoin: ExchangeAPI<kc.Config> = {
  getLowestAskPrice: async () => {
    const orderBook = await kc.orderBook()
    if (orderBook instanceof Error) {
      return orderBook
    }

    const lowestAsk = orderBook.asks[0]
    const lowestAskPrice = lowestAsk
      ? Number.parseFloat(lowestAsk[0])
      : Number.POSITIVE_INFINITY

    return lowestAskPrice
  },
  getBalance: async (options) => {
    const { config } = options

    const balance = await kc.balance(config)
    if (balance instanceof Error) {
      return balance
    }

    const availableNZD = Number.parseFloat(balance.nzd_available)
    return availableNZD
  },
  createOrder: async (options) => {
    const { config, price, amount } = options
    const order = await kc.buy(config, { price, amount })
    if (order instanceof Error) {
      return order
    }

    return {
      orderID: String(order.id),
    }
  },
  cancelOrder: async (options) => {
    const { config, orderID } = options
    const error = await kc.cancelOrder(config, Number.parseInt(orderID, 10))
    if (error instanceof Error) {
      return error
    }

    return undefined
  },
}

export { kiwiCoin }
