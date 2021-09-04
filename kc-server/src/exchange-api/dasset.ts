import * as d from '@stayradiated/dasset-api'
import { DateTime } from 'luxon'

import { ExchangeError } from '../util/error.js'
import type { ExchangeAPI, UserExchangeAPI } from './index.js'

const dasset: ExchangeAPI<d.Config> = {
  getLowestAskPrice: (config) => async (options) => {
    const { primaryCurrency, secondaryCurrency } = options
    const orderBook = await d.getMarketOrderBook({
      config,
      marketSymbol: `${primaryCurrency}-${secondaryCurrency}`,
    })
    if (orderBook instanceof Error) {
      return new ExchangeError({
        message: 'Failed to get lowest ask price from dassetx.com',
        cause: orderBook,
        context: { primaryCurrency, secondaryCurrency },
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

    const availableNZD = balance.available
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
      primaryCurrency: order.baseSymbol,
      secondaryCurrency: order.quoteSymbol,
      price: order.details.price ?? 0,
      volume: order.baseAmount,
      type: order.type,
      openedAt: DateTime.fromISO(order.timestamp),
    }))
  },
  getTrades: (config) => async (options) => {
    const { pageSize, pageIndex } = options

    const orders = await d.getPage({
      config,
      fetchFn: d.getClosedOrderList,
      limit: pageSize,
      page: pageIndex,
    })
    if (orders instanceof Error) {
      return new ExchangeError({
        message: 'Failed to get closed orders from dassetx.com',
        cause: orders,
        context: { pageSize, pageIndex },
      })
    }

    return {
      total: orders.total,
      hasNextPage: orders.hasNext,
      items: orders.results
        .filter((order) => order.status === 'Completed')
        .map((trade) => ({
          tradeID: trade.id,
          orderID: trade.id,
          primaryCurrency: trade.baseSymbol,
          secondaryCurrency: trade.quoteSymbol,
          price: trade.details.price ?? 0,
          volume: trade.baseAmount,
          type: trade.type,
          fee: trade.details.nzdFee ?? 0,
          timestamp: DateTime.fromISO(trade.timestamp),
        })),
    }
  },
  createOrder: (config) => async (options) => {
    const { volume, price, primaryCurrency, secondaryCurrency } = options
    const order = await d.createOrder({
      config,
      order: {
        amount: volume * (1 - 0.0036), // Account for 0.35% trading fee,
        limit: price,
        orderType: 'LIMIT',
        side: 'BUY',
        timeInForce: 'GOOD_TIL_CANCELLED',
        tradingPair: `${primaryCurrency}-${secondaryCurrency}`,
      },
    })
    if (order instanceof Error) {
      return new ExchangeError({
        message: 'Failed to create order on dassetx.com',
        cause: order,
        context: { volume, price, primaryCurrency, secondaryCurrency },
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
    getTrades: dasset.getTrades(config),
    createOrder: dasset.createOrder(config),
    cancelOrder: dasset.cancelOrder(config),
  }
}

export { dasset, getDassetExchangeAPI }
