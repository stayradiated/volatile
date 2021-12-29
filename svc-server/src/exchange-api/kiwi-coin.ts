import * as kc from '@volatile/kiwi-coin-api'

import { ExchangeError } from '../util/error.js'
import { EXCHANGE_KIWI_COIN } from '../model/exchange/index.js'

import type { ExchangeAPI, UserExchangeAPI } from './types.js'

const kiwiCoin: ExchangeAPI<kc.Config> = {
  exchange: EXCHANGE_KIWI_COIN,
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

    const availableNZD = balance.nzd.available
    if (typeof availableNZD !== 'number' || Number.isNaN(availableNZD)) {
      return new ExchangeError({
        message: 'Could not fetch available NZD from kiwi-coin.com',
        context: { balance },
      })
    }

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
      price: order.price,
      volume: order.amount,
      type: order.type,
      openedAt: order.datetime,
    }))
  },
  getTrades: (config) => async (options) => {
    const { pageIndex } = options

    const getAll = pageIndex > 1

    const allTrades = await kc.getTradeList({
      config,
      timeframe: getAll ? 'all' : 'day',
    })
    if (allTrades instanceof Error) {
      return allTrades
    }

    return {
      total: allTrades.length,
      hasNextPage: !getAll,
      items: allTrades.map((trade) => ({
        tradeID: String(trade.transactionId),
        orderID: String(trade.orderId),
        timestamp: trade.datetime,
        primaryCurrency: 'BTC',
        secondaryCurrency: 'NZD',
        price: trade.price,
        volume: trade.income,
        type: trade.tradeType,
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
    exchange: kiwiCoin.exchange,
    getLowestAskPrice: kiwiCoin.getLowestAskPrice(config),
    getBalance: kiwiCoin.getBalance(config),
    getOpenOrders: kiwiCoin.getOpenOrders(config),
    getTrades: kiwiCoin.getTrades(config),
    createOrder: kiwiCoin.createOrder(config),
    cancelOrder: kiwiCoin.cancelOrder(config),
  }
}

export { kiwiCoin, getKiwiCoinExchangeAPI }
