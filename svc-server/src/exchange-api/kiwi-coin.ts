import * as kc from '@volatile/kiwi-coin-api'

import { ExchangeError } from '../util/error.js'
import { EXCHANGE_KIWI_COIN } from '../model/exchange/index.js'
import { insertUserExchangeRequest } from '../model/user-exchange-request/index.js'

import type {
  ExchangeApi,
  UserExchangeApi,
  ConfigOptions,
  LogRequestFn,
} from './types.js'

const kiwiCoin: ExchangeApi<kc.Config> = {
  exchange: EXCHANGE_KIWI_COIN,
  getLowestAskPrice:
    ({ logRequest }) =>
    async () => {
      const [orderBook, request] = await kc.getOrderBook()
      if (request) {
        await logRequest(request)
      }

      if (orderBook instanceof Error) {
        return new ExchangeError(
          'Failed to get lowest ask price from kiwi-coin.com',
          { cause: orderBook },
        )
      }

      const lowestAsk = orderBook.asks[0]
      const lowestAskPrice = lowestAsk
        ? Number.parseFloat(lowestAsk[0])
        : Number.POSITIVE_INFINITY

      return lowestAskPrice
    },
  getBalance:
    ({ config, logRequest }) =>
    async () => {
      const [balance, request] = await kc.getBalance({ config })
      if (request) {
        await logRequest(request)
      }

      if (balance instanceof Error) {
        return new ExchangeError('Failed to get balance from kiwi-coin.com', {
          cause: balance,
        })
      }

      return [
        {
          currency: 'NZD',
          available: balance.nzd.available,
          total: balance.nzd.balance,
        },
        {
          currency: 'BTC',
          available: balance.btc.available,
          total: balance.btc.balance,
        },
      ]
    },
  getOpenOrders:
    ({ config, logRequest }) =>
    async () => {
      const [openOrders, request] = await kc.getOpenOrderList({ config })
      if (request) {
        await logRequest(request)
      }

      if (openOrders instanceof Error) {
        return new ExchangeError(
          'Failed to get open orders for kiwi-coin.com',
          { cause: openOrders },
        )
      }

      return openOrders.map((order) => ({
        orderId: String(order.id),
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
          orderId: String(trade.orderId),
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
        return new ExchangeError('Failed to create order on kiwi-coin.com', {
          cause: order,
        })
      }

      return {
        orderId: String(order.id),
      }
    },
  cancelOrder:
    ({ config, logRequest }) =>
    async (options) => {
      const { orderId } = options
      const [error, request] = await kc.cancelOrder({
        config,
        orderId: Number.parseInt(orderId, 10),
      })
      if (request) {
        await logRequest(request)
      }

      if (error instanceof Error) {
        return new ExchangeError('Failed to cancel order on kiwi-coin.com', {
          cause: error,
        })
      }

      return undefined
    },
}

const getKiwiCoinExchangeApi = (
  options: ConfigOptions<Record<string, string>>,
): UserExchangeApi | Error => {
  const { pool, config, userUid, exchangeUid, userExchangeKeysUid } = options

  if (!kc.isValidConfig(config)) {
    return new ExchangeError('Config is not valid for kiwi-coin.com.')
  }

  const logRequest: LogRequestFn = async (request) => {
    return insertUserExchangeRequest(pool, {
      ...request.redacted(),
      userUid,
      exchangeUid,
      userExchangeKeysUid,
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

export { kiwiCoin, getKiwiCoinExchangeApi }
