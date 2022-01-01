import * as ir from '@volatile/independent-reserve-api'
import { parseISO } from 'date-fns'

import { ExchangeError } from '../util/error.js'
import { EXCHANGE_INDEPENDENT_RESERVE } from '../model/exchange/index.js'
import { insertUserExchangeRequest } from '../model/user-exchange-request/index.js'

import { redactString, redactObject } from './redact.js'

import type {
  ExchangeAPI,
  UserExchangeAPI,
  ConfigOptions,
  LogRequestFn,
} from './types.js'

// IR currencies are formatted as `Nzd` so we need to shift cases.
const formatCurrency = (currency: string): string => {
  currency = currency.toUpperCase()
  if (currency === 'XBT') {
    return 'BTC'
  }

  return currency
}

const independentReserve: ExchangeAPI<ir.Config> = {
  exchange: EXCHANGE_INDEPENDENT_RESERVE,
  getLowestAskPrice:
    ({ logRequest }) =>
    async (options) => {
      const { primaryCurrency, secondaryCurrency } = options
      const [orderBook, request] = await ir.getOrderBook({
        primaryCurrencyCode: primaryCurrency,
        secondaryCurrencyCode: secondaryCurrency,
      })
      if (request) {
        await logRequest(request)
      }

      if (orderBook instanceof Error) {
        return orderBook
      }

      const askPriceList = orderBook.SellOrders.map((order) => order.Price)
      return Math.min(...askPriceList)
    },
  getBalance:
    ({ config, logRequest }) =>
    async (options) => {
      const { currency } = options
      const [accounts, request] = await ir.getAccounts({ config })
      if (request) {
        await logRequest(request)
      }

      if (accounts instanceof Error) {
        return accounts
      }

      const account = accounts.find(
        (account) => formatCurrency(account.CurrencyCode) === currency,
      )
      if (!account) {
        return new ExchangeError({
          message: 'Failed to get balance from independentreserve.com',
          context: { currency },
        })
      }

      return account.AvailableBalance
    },
  getOpenOrders:
    ({ config, logRequest }) =>
    async () => {
      const [openOrders, request] = await ir.getOpenOrders({
        config,
        pageIndex: 1,
        pageSize: 25,
      })
      if (request) {
        await logRequest(request)
      }

      if (openOrders instanceof Error) {
        return openOrders
      }

      return openOrders.Data.map((order) => ({
        orderID: order.OrderGuid,
        primaryCurrency: formatCurrency(order.PrimaryCurrencyCode),
        secondaryCurrency: formatCurrency(order.SecondaryCurrencyCode),
        price: order.Price,
        volume: order.Volume,
        type: order.OrderType === 'LimitOffer' ? 'BUY' : 'SELL',
        openedAt: parseISO(order.CreatedTimestampUtc),
      }))
    },
  getTrades:
    ({ config, logRequest }) =>
    async (options) => {
      const { pageIndex, pageSize } = options

      const [results, request] = await ir.getTrades({
        config,
        pageIndex,
        pageSize,
      })
      if (request) {
        await logRequest(request)
      }

      if (results instanceof Error) {
        return results
      }

      return {
        total: results.TotalItems,
        hasNextPage: pageIndex < results.TotalPages,
        items: results.Data.map((trade) => ({
          tradeID: trade.TradeGuid,
          orderID: trade.OrderGuid,
          timestamp: parseISO(trade.TradeTimestampUtc),
          primaryCurrency: formatCurrency(trade.PrimaryCurrencyCode),
          secondaryCurrency: formatCurrency(trade.SecondaryCurrencyCode),
          price: trade.Price,
          volume: trade.VolumeTraded,
          fee: 0.005 * trade.VolumeTraded * trade.Price,
          type:
            trade.OrderType === 'LimitBid' || trade.OrderType === 'MarketBid'
              ? 'BUY'
              : 'SELL',
        })),
      }
    },
  createOrder:
    ({ config, logRequest }) =>
    async (options) => {
      const { volume, price, primaryCurrency, secondaryCurrency } = options
      const [order, request] = await ir.placeLimitOrder({
        config,
        primaryCurrencyCode: primaryCurrency,
        secondaryCurrencyCode: secondaryCurrency,
        orderType: 'LimitBid',
        price,
        volume: volume * (1 - 0.0051), // Account for 0.50% trading fee,
      })
      if (request) {
        await logRequest(request)
      }

      if (order instanceof Error) {
        return order
      }

      return {
        orderID: order.OrderGuid,
      }
    },
  cancelOrder:
    ({ config, logRequest }) =>
    async (options) => {
      const [error, request] = await ir.cancelOrder({
        config,
        orderGuid: options.orderID,
      })
      if (request) {
        await logRequest(request)
      }

      if (error instanceof Error) {
        return error
      }

      return undefined
    },
}

const getIndependentReserveExchangeAPI = (
  options: ConfigOptions<Record<string, string>>,
): UserExchangeAPI | Error => {
  const { pool, config, userUID, exchangeUID, userExchangeKeysUID } = options

  if (!ir.isValidConfig(config)) {
    return new ExchangeError({
      message: 'Config is not valid for independentreserve.com.',
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
    exchange: independentReserve.exchange,
    getLowestAskPrice: independentReserve.getLowestAskPrice(context),
    getBalance: independentReserve.getBalance(context),
    getOpenOrders: independentReserve.getOpenOrders(context),
    getTrades: independentReserve.getTrades(context),
    createOrder: independentReserve.createOrder(context),
    cancelOrder: independentReserve.cancelOrder(context),
  }
}

export { independentReserve, getIndependentReserveExchangeAPI }
