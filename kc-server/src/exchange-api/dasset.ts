import * as d from '@stayradiated/dasset-api'

import { explainError } from '../util/error.js'

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
      return explainError('Could not fetch available NZD from dassetx.com', {
        balance: JSON.stringify(balance),
      })
    }

    return availableNZD
  },
  createOrder: async (options) => {
    const { config, amount, price, assetSymbol, currency } = options
    const order = await d.createOrder(config, {
      amount,
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
    if (
      error instanceof d.APIError &&
      error.response.code === d.APIErrorCode.PreconditionFailed
    ) {
      console.error(error)
    } else if (error instanceof Error) {
      return explainError('Failed to cancel order', { orderID }, error)
    }

    return undefined
  },
}

export { dasset }
