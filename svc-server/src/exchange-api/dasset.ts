import * as d from '@volatile/dasset-api'

import { parseISO } from 'date-fns'
import { ExchangeError } from '../util/error.js'
import { EXCHANGE_DASSET } from '../model/exchange/index.js'
import { insertUserExchangeRequest } from '../model/user-exchange-request/index.js'

import type {
  ExchangeApi,
  UserExchangeApi,
  ConfigOptions,
  LogRequestFn,
} from './types.js'

const dasset: ExchangeApi<d.Config> = {
  exchange: EXCHANGE_DASSET,
  getLowestAskPrice:
    ({ config, logRequest }) =>
    async (options) => {
      const { primaryCurrency, secondaryCurrency } = options
      const [orderBook, request] = await d.getMarketOrderBook({
        config,
        marketSymbol: `${primaryCurrency}-${secondaryCurrency}`,
      })
      if (request) {
        await logRequest(request)
      }

      if (orderBook instanceof Error) {
        return new ExchangeError(
          'Failed to get lowest ask price from dassetx.com',
          { cause: orderBook },
        )
      }

      const lowestAsk = orderBook.ask[0]
      const lowestAskPrice = lowestAsk
        ? Number.parseFloat(lowestAsk.rate)
        : Number.POSITIVE_INFINITY

      return lowestAskPrice
    },
  getBalance:
    ({ config, logRequest }) =>
    async () => {
      const [balanceList, request] = await d.getBalanceList({ config })
      if (request) {
        await logRequest(request)
      }

      if (balanceList instanceof Error) {
        return new ExchangeError(`Failed to fetch balance from dassetx.com`, {
          cause: balanceList,
        })
      }

      return balanceList.map((entry) => ({
        currency: entry.currencySymbol,
        available: entry.available ?? 0,
        total: entry.total ?? 0,
      }))
    },
  getOpenOrders:
    ({ config, logRequest }) =>
    async () => {
      const [openOrders, request] = await d.getOpenOrderList({ config })
      if (request) {
        await logRequest(request)
      }

      if (openOrders instanceof Error) {
        return new ExchangeError('Failed to get open orders for dassetx.com', {
          cause: openOrders,
        })
      }

      return openOrders.results.map((order) => ({
        orderId: order.id,
        primaryCurrency: order.baseSymbol,
        secondaryCurrency: order.quoteSymbol,
        price: order.details.price ?? 0,
        volume: order.baseAmount,
        type: order.type,
        openedAt: parseISO(order.timestamp),
      }))
    },
  getTrades:
    ({ config, logRequest }) =>
    async (options) => {
      const { pageSize, pageIndex } = options

      const [orders, request] = await d.getPage({
        config,
        fetchFn: d.getClosedOrderList,
        limit: pageSize,
        page: pageIndex,
      })
      if (request) {
        await logRequest(request)
      }

      if (orders instanceof Error) {
        return new ExchangeError(
          'Failed to get closed orders from dassetx.com',
          { cause: orders },
        )
      }

      return {
        total: orders.total,
        hasNextPage: orders.hasNext,
        items: orders.results
          .filter(
            (order) =>
              order.status === 'Completed' ||
              order.status === 'Partially filled',
          )
          .map((trade) => ({
            tradeID: trade.id,
            orderId: trade.id,
            primaryCurrency: trade.baseSymbol,
            secondaryCurrency: trade.quoteSymbol,
            price: trade.details.price ?? 0,
            volume: trade.baseAmount,
            type: trade.type,
            fee: trade.details.nzdFee ?? 0,
            timestamp: parseISO(trade.timestamp),
          })),
      }
    },
  createOrder:
    ({ config, logRequest }) =>
    async (options) => {
      const { volume, price, primaryCurrency, secondaryCurrency } = options
      const [order, request] = await d.createOrder({
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
      if (request) {
        await logRequest(request)
      }

      if (order instanceof Error) {
        return new ExchangeError('Failed to create order on dassetx.com', {
          cause: order,
        })
      }

      return {
        orderId: order.order.orderId,
      }
    },
  cancelOrder:
    ({ config, logRequest }) =>
    async (options) => {
      const { orderId } = options
      const [error, request] = await d.cancelOrder({ config, orderId })
      if (request) {
        await logRequest(request)
      }

      if (error instanceof Error) {
        return new ExchangeError('Failed to cancel order on dassetx.com', {
          cause: error,
        })
      }

      return undefined
    },
}

const getDassetExchangeApi = (
  options: ConfigOptions<Record<string, string>>,
): UserExchangeApi | Error => {
  const { pool, config, userUid, exchangeUid, userExchangeKeysUid } = options

  if (!d.isValidConfig(config)) {
    return new ExchangeError('Config is not valid for dassetx.com.')
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
    exchange: dasset.exchange,
    getLowestAskPrice: dasset.getLowestAskPrice(context),
    getBalance: dasset.getBalance(context),
    getOpenOrders: dasset.getOpenOrders(context),
    getTrades: dasset.getTrades(context),
    createOrder: dasset.createOrder(context),
    cancelOrder: dasset.cancelOrder(context),
  }
}

export { dasset, getDassetExchangeApi }
