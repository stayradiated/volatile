import * as d from '@stayradiated/dasset-api'
import { DateTime } from 'luxon'

import { ExchangeError } from '../util/error.js'
import type { ExchangeAPI, UserExchangeAPI } from './index.js'

const dasset: ExchangeAPI<d.Config> = {
  getLowestAskPrice: (config) => async (options) => {
    const { assetSymbol, currency } = options
    const orderBook = await d.getMarketOrderBook({
      config,
      marketSymbol: `${assetSymbol}-${currency}`,
    })
    if (orderBook instanceof Error) {
      return new ExchangeError({
        message: 'Failed to get lowest ask price from dassetx.com',
        cause: orderBook,
        context: { assetSymbol, currency },
      })
    }

    const lowestAsk = orderBook.ask[0]
    const lowestAskPrice = lowestAsk
      ? Number.parseFloat(lowestAsk.rate)
      : Number.POSITIVE_INFINITY

    return lowestAskPrice
  },
  getBalance: (config) => async (options) => {
    const { currency } = options
    const balance = await d.getBalance({ config, currencySymbol: currency })
    if (balance instanceof Error) {
      return new ExchangeError({
        message: 'Failed to fetch available NZD from dassetx.com',
        cause: balance,
        context: { currency },
      })
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
  getOpenOrders: (config) => async () => {
    const openOrders = await d.getOpenOrderList({ config })
    if (openOrders instanceof Error) {
      return new ExchangeError({
        message: 'Failed to get open orders for dassetx.com',
        cause: openOrders,
      })
    }

    return openOrders.results.map((order) => ({
      orderID: order.id,
      assetSymbol: order.baseSymbol,
      priceNZD: order.details.price ?? 0,
      amount: order.baseAmount,
      type: order.type,
      openedAt: DateTime.fromISO(order.timestamp),
    }))
  },
  createOrder: (config) => async (options) => {
    const { amount, price, assetSymbol, currency } = options
    const order = await d.createOrder({
      config,
      order: {
        amount: amount * (1 - 0.0036), // Account for 0.35% trading fee,
        limit: price,
        orderType: 'LIMIT',
        side: 'BUY',
        timeInForce: 'GOOD_TIL_CANCELLED',
        tradingPair: `${assetSymbol}-${currency}`,
      },
    })
    if (order instanceof Error) {
      return new ExchangeError({
        message: 'Failed to create order on dassetx.com',
        cause: order,
        context: { amount, price, assetSymbol, currency },
      })
    }

    return {
      orderID: order.order.orderId,
    }
  },
  cancelOrder: (config) => async (options) => {
    const { orderID } = options
    const error = await d.cancelOrder({ config, orderID })
    if (error instanceof Error) {
      return new ExchangeError({
        message: 'Failed to cancel order on dassetx.com',
        cause: error,
        context: { orderID },
      })
    }

    return undefined
  },
}

const getDassetExchangeAPI = (
  config: Record<string, string>,
): UserExchangeAPI | Error => {
  if (!d.isValidConfig(config)) {
    return new ExchangeError({
      message: 'Config is not valid for dassetx.com.',
    })
  }

  return {
    getLowestAskPrice: dasset.getLowestAskPrice(config),
    getBalance: dasset.getBalance(config),
    getOpenOrders: dasset.getOpenOrders(config),
    createOrder: dasset.createOrder(config),
    cancelOrder: dasset.cancelOrder(config),
  }
}

export { dasset, getDassetExchangeAPI }
