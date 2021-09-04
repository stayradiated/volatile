import * as kc from '@stayradiated/kiwi-coin-api'
import { DateTime } from 'luxon'

import { ExchangeError } from '../util/error.js'
import type { ExchangeAPI, UserExchangeAPI } from './index.js'

const kiwiCoin: ExchangeAPI<kc.Config> = {
  getLowestAskPrice: () => async () => {
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
  getBalance: (config) => async () => {
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
  getOpenOrders: (config) => async () => {
    const openOrders = await kc.getOpenOrderList({ config })
    if (openOrders instanceof Error) {
      return new ExchangeError({
        message: 'Failed to get open orders for kiwi-coin.com',
        cause: openOrders,
      })
    }

    return openOrders.map((order) => ({
      orderID: String(order.id),
      primaryCurrency: 'BTC',
      secondaryCurrency: 'NZD',
      price: Number.parseFloat(order.price),
      volume: Number.parseFloat(order.amount),
      type: order.type === 0 ? 'BUY' : 'SELL',
      openedAt: DateTime.fromISO(order.datetime),
    }))
  },
  getTrades: (config) => async () => {
    const allTrades = await kc.getTradeList({
      config,
      timeframe: 'all',
    })
    if (allTrades instanceof Error) {
      return allTrades
    }

    return {
      total: allTrades.length,
      hasNextPage: false,
      items: allTrades.map((trade) => ({
        tradeID: String(trade.transaction_id),
        orderID: String(trade.order_id),
        timestamp: DateTime.fromSeconds(trade.datetime),
        primaryCurrency: 'BTC',
        secondaryCurrency: 'NZD',
        price: trade.price,
        volume: trade.income,
        type: trade.trade_type === 0 ? 'BUY' : 'SELL',
        fee: trade.fee * trade.price,
      })),
    }
  },
  createOrder: (config) => async (options) => {
    const { price, volume } = options
    const order = await kc.createBuyOrder({ config, price, amount: volume })
    if (order instanceof Error) {
      return new ExchangeError({
        message: 'Failed to create order on kiwi-coin.com',
        cause: order,
        context: { price, volume },
      })
    }

    return {
      orderID: String(order.id),
    }
  },
  cancelOrder: (config) => async (options) => {
    const { orderID } = options
    const error = await kc.cancelOrder({
      config,
      orderID: Number.parseInt(orderID, 10),
    })
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

const getKiwiCoinExchangeAPI = (
  config: Record<string, string>,
): UserExchangeAPI | Error => {
  if (!kc.isValidConfig(config)) {
    return new ExchangeError({
      message: 'Config is not valid for kiwi-coin.com.',
    })
  }

  return {
    getLowestAskPrice: kiwiCoin.getLowestAskPrice(config),
    getBalance: kiwiCoin.getBalance(config),
    getOpenOrders: kiwiCoin.getOpenOrders(config),
    getTrades: kiwiCoin.getTrades(config),
    createOrder: kiwiCoin.createOrder(config),
    cancelOrder: kiwiCoin.cancelOrder(config),
  }
}

export { kiwiCoin, getKiwiCoinExchangeAPI }
