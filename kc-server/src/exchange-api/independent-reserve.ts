import * as ir from '@stayradiated/independent-reserve-api'
import { DateTime } from 'luxon'

import { ExchangeError } from '../util/error.js'
import type { ExchangeAPI, UserExchangeAPI } from './index.js'

// IR currencies are formatted as `Nzd` so we need to shift cases.
const formatCurrency = (currency: string): string => {
  currency = currency.toUpperCase()
  if (currency === 'XBT') {
    return 'BTC'
  }

  return currency
}

const independentReserve: ExchangeAPI<ir.Config> = {
  getLowestAskPrice: () => async (options) => {
    const { primaryCurrency, secondaryCurrency } = options
    const orderBook = await ir.getOrderBook({
      primaryCurrencyCode: primaryCurrency,
      secondaryCurrencyCode: secondaryCurrency,
    })
    if (orderBook instanceof Error) {
      return orderBook
    }

    const askPriceList = orderBook.SellOrders.map((order) => order.Price)
    return Math.min(...askPriceList)
  },
  getBalance: (config) => async (options) => {
    const { currency } = options
    const accounts = await ir.getAccounts({ config })
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
  getOpenOrders: (config) => async () => {
    const openOrders = await ir.getOpenOrders({
      config,
      pageIndex: 0,
      pageSize: 25,
    })
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
      openedAt: DateTime.fromISO(order.CreatedTimestampUtc),
    }))
  },
  getTrades: (config) => async (options) => {
    const { pageIndex, pageSize } = options

    const results = await ir.getTrades({
      config,
      pageIndex,
      pageSize,
    })
    if (results instanceof Error) {
      return results
    }

    return {
      total: results.TotalItems,
      hasNextPage: pageIndex < results.TotalPages,
      items: results.Data.map((trade) => ({
        tradeID: trade.TradeGuid,
        orderID: trade.OrderGuid,
        timestamp: DateTime.fromISO(trade.TradeTimestampUtc),
        primaryCurrency: formatCurrency(trade.PrimaryCurrencyCode),
        secondaryCurrency: formatCurrency(trade.SecondaryCurrencyCode),
        price: trade.Price,
        volume: trade.VolumeTraded,
        fee: 0.005 * trade.VolumeTraded * trade.Price,
        type: trade.OrderType === 'LimitBid' ? 'BUY' : 'SELL',
      })),
    }
  },
  createOrder: (config) => async (options) => {
    const { volume, price, primaryCurrency, secondaryCurrency } = options
    const order = await ir.placeLimitOrder({
      config,
      primaryCurrencyCode: primaryCurrency,
      secondaryCurrencyCode: secondaryCurrency,
      orderType: 'LimitBid',
      price,
      volume,
    })
    if (order instanceof Error) {
      return order
    }

    return {
      orderID: order.OrderGuid,
    }
  },
  cancelOrder: (config) => async (options) => {
    const error = await ir.cancelOrder({ config, orderGuid: options.orderID })
    if (error instanceof Error) {
      return error
    }

    return undefined
  },
}

const getIndependentReserveExchangeAPI = (
  config: Record<string, string>,
): UserExchangeAPI | Error => {
  if (!ir.isValidConfig(config)) {
    return new ExchangeError({
      message: 'Config is not valid for independentreserve.com.',
    })
  }

  return {
    getLowestAskPrice: independentReserve.getLowestAskPrice(config),
    getBalance: independentReserve.getBalance(config),
    getOpenOrders: independentReserve.getOpenOrders(config),
    getTrades: independentReserve.getTrades(config),
    createOrder: independentReserve.createOrder(config),
    cancelOrder: independentReserve.cancelOrder(config),
  }
}

export { independentReserve, getIndependentReserveExchangeAPI }
