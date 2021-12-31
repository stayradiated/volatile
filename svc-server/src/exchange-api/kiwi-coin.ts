import * as kc from '@volatile/kiwi-coin-api'

import { ExchangeError } from '../util/error.js'
import { EXCHANGE_KIWI_COIN } from '../model/exchange/index.js'
import { insertUserExchangeRequest } from '../model/user-exchange-request/index.js'

import type { ExchangeAPI, UserExchangeAPI, ConfigOptions } from './types.js'

const redactRequestBody = (
  config: kc.Config,
  responseBody: string | undefined,
): string | undefined => {
  if (typeof responseBody === 'undefined') {
    return undefined
  }

  return responseBody
    .replace(config.userId, '********')
    .replace(config.apiKey, '********')
    .replace(config.apiSecret, '********')
}

const kiwiCoin: ExchangeAPI<kc.Config> = {
  exchange: EXCHANGE_KIWI_COIN,
  getLowestAskPrice:
    ({ pool, userUID, exchangeUID, userExchangeKeysUID }) =>
    async () => {
      const [orderBook, info] = await kc.getOrderBook()
      if (info) {
        await insertUserExchangeRequest(pool, {
          userUID,
          exchangeUID,
          userExchangeKeysUID,
          ...info,
        })
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
    ({ pool, config, userUID, exchangeUID, userExchangeKeysUID }) =>
    async () => {
      const [balance, info] = await kc.getBalance({ config })
      if (info) {
        await insertUserExchangeRequest(pool, {
          userUID,
          exchangeUID,
          userExchangeKeysUID,
          ...info,
          requestBody: redactRequestBody(config, info.requestBody),
        })
      }

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
  getOpenOrders:
    ({ config, pool, userUID, exchangeUID, userExchangeKeysUID }) =>
    async () => {
      const [openOrders, info] = await kc.getOpenOrderList({ config })
      if (info) {
        await insertUserExchangeRequest(pool, {
          userUID,
          exchangeUID,
          userExchangeKeysUID,
          ...info,
          requestBody: redactRequestBody(config, info.requestBody),
        })
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
    ({ config, pool, userUID, exchangeUID, userExchangeKeysUID }) =>
    async (options) => {
      const { pageIndex } = options

      const getAll = pageIndex > 1

      const [allTrades, info] = await kc.getTradeList({
        config,
        timeframe: getAll ? 'all' : 'day',
      })
      if (info) {
        await insertUserExchangeRequest(pool, {
          userUID,
          exchangeUID,
          userExchangeKeysUID,
          ...info,
          requestBody: redactRequestBody(config, info.requestBody),
        })
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
    ({ config, userUID, pool, exchangeUID, userExchangeKeysUID }) =>
    async (options) => {
      const { price, volume } = options
      const [order, info] = await kc.createBuyOrder({
        config,
        price,
        amount: volume,
      })
      if (info) {
        await insertUserExchangeRequest(pool, {
          userUID,
          exchangeUID,
          userExchangeKeysUID,
          ...info,
          requestBody: redactRequestBody(config, info.requestBody),
        })
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
    ({ config, pool, userUID, exchangeUID, userExchangeKeysUID }) =>
    async (options) => {
      const { orderID } = options
      const [error, info] = await kc.cancelOrder({
        config,
        orderID: Number.parseInt(orderID, 10),
      })
      if (info) {
        await insertUserExchangeRequest(pool, {
          userUID,
          exchangeUID,
          userExchangeKeysUID,
          ...info,
          requestBody: redactRequestBody(config, info.requestBody),
        })
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
  input: ConfigOptions<Record<string, string>>,
): UserExchangeAPI | Error => {
  const { config } = input

  if (!kc.isValidConfig(config)) {
    return new ExchangeError({
      message: 'Config is not valid for kiwi-coin.com.',
    })
  }

  const options = { ...input, config }

  return {
    exchange: kiwiCoin.exchange,
    getLowestAskPrice: kiwiCoin.getLowestAskPrice(options),
    getBalance: kiwiCoin.getBalance(options),
    getOpenOrders: kiwiCoin.getOpenOrders(options),
    getTrades: kiwiCoin.getTrades(options),
    createOrder: kiwiCoin.createOrder(options),
    cancelOrder: kiwiCoin.cancelOrder(options),
  }
}

export { kiwiCoin, getKiwiCoinExchangeAPI }
