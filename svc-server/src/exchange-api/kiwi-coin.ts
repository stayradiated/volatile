import * as kc from '@volatile/kiwi-coin-api'

import { ExchangeError } from '../util/error.js'
import { EXCHANGE_KIWI_COIN } from '../model/exchange/index.js'
import { insertUserExchangeRequest } from '../model/user-exchange-request/index.js'

import { redactString, redactObject } from './redact.js'

import type {
  ExchangeAPI,
  UserExchangeAPI,
  ConfigOptions,
  LogRequestFn,
} from './types.js'

const kiwiCoin: ExchangeAPI<kc.Config> = {
  exchange: EXCHANGE_KIWI_COIN,
  getLowestAskPrice:
    ({ logRequest }) =>
    async () => {
      const [orderBook, request] = await kc.getOrderBook()
      if (request) {
        await logRequest(request)
      }

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
  getBalance:
    ({ config, logRequest }) =>
    async ({ currency }) => {
      const [balance, request] = await kc.getBalance({ config })
      if (request) {
        await logRequest(request)
      }

      if (balance instanceof Error) {
        return new ExchangeError({
          message: 'Failed to get balance from kiwi-coin.com',
          cause: balance,
        })
      }

      if (currency === 'NZD') {
        return {
          available: balance.nzd.available,
          total: balance.nzd.balance,
        }
      }

      if (currency === 'BTC') {
        return {
          available: balance.btc.available,
          total: balance.btc.balance,
        }
      }

      return new ExchangeError({
        message: `Could not fetch balance for currency ${currency} from kiwi-coin.com`,
        context: { currency },
      })
    },
  getOpenOrders:
    ({ config, logRequest }) =>
    async () => {
      const [openOrders, request] = await kc.getOpenOrderList({ config })
      if (request) {
        await logRequest(request)
      }

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
  getTrades:
    ({ config, logRequest }) =>
    async (options) => {
      const { pageIndex } = options

      const getAll = pageIndex > 1

      const [allTrades, request] = await kc.getTradeList({
        config,
        timeframe: getAll ? 'all' : 'day',
      })
      if (request) {
        await logRequest(request)
      }

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
  createOrder:
    ({ config, logRequest }) =>
    async (options) => {
      const { price, volume } = options
      const [order, request] = await kc.createBuyOrder({
        config,
        price,
        amount: volume,
      })
      if (request) {
        await logRequest(request)
      }

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
  cancelOrder:
    ({ config, logRequest }) =>
    async (options) => {
      const { orderID } = options
      const [error, request] = await kc.cancelOrder({
        config,
        orderID: Number.parseInt(orderID, 10),
      })
      if (request) {
        await logRequest(request)
      }

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
  options: ConfigOptions<Record<string, string>>,
): UserExchangeAPI | Error => {
  const { pool, config, userUID, exchangeUID, userExchangeKeysUID } = options

  if (!kc.isValidConfig(config)) {
    return new ExchangeError({
      message: 'Config is not valid for kiwi-coin.com.',
    })
  }

  const logRequest: LogRequestFn = async (request) => {
    return insertUserExchangeRequest(pool, {
      ...request,
      userUID,
      exchangeUID,
      userExchangeKeysUID,
      requestBody: request.requestBody
        ? redactString(config, request.requestBody)
        : undefined,
      requestHeaders: request.requestHeaders
        ? redactObject(config, request.requestHeaders)
        : undefined,
    })
  }

  const context = { config, logRequest }

  return {
    exchange: kiwiCoin.exchange,
    getLowestAskPrice: kiwiCoin.getLowestAskPrice(context),
    getBalance: kiwiCoin.getBalance(context),
    getOpenOrders: kiwiCoin.getOpenOrders(context),
    getTrades: kiwiCoin.getTrades(context),
    createOrder: kiwiCoin.createOrder(context),
    cancelOrder: kiwiCoin.cancelOrder(context),
  }
}

export { kiwiCoin, getKiwiCoinExchangeAPI }
