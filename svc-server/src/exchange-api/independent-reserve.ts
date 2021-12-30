import * as ir from '@volatile/independent-reserve-api'
import { parseISO } from 'date-fns'

import { ExchangeError } from '../util/error.js'
import { EXCHANGE_INDEPENDENT_RESERVE } from '../model/exchange/index.js'

import type { ExchangeAPI, UserExchangeAPI, ConfigOptions } from './types.js'

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
  getBalance:
    ({ config }) =>
    async (options) => {
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
  getOpenOrders:
    ({ config }) =>
    async () => {
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
        openedAt: parseISO(order.CreatedTimestampUtc),
      }))
    },
  getTrades:
    ({ config }) =>
    async (options) => {
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
    ({ config }) =>
    async (options) => {
      const { volume, price, primaryCurrency, secondaryCurrency } = options
      const order = await ir.placeLimitOrder({
        config,
        primaryCurrencyCode: primaryCurrency,
        secondaryCurrencyCode: secondaryCurrency,
        orderType: 'LimitBid',
        price,
        volume: volume * (1 - 0.0051), // Account for 0.50% trading fee,
      })
      if (order instanceof Error) {
        return order
      }

      return {
        orderID: order.OrderGuid,
      }
    },
  cancelOrder:
    ({ config }) =>
    async (options) => {
      const error = await ir.cancelOrder({ config, orderGuid: options.orderID })
      if (error instanceof Error) {
        return error
      }

      return undefined
    },
}

const getIndependentReserveExchangeAPI = (
  input: ConfigOptions<Record<string, string>>,
): UserExchangeAPI | Error => {
  const { config } = input

  if (!ir.isValidConfig(config)) {
    return new ExchangeError({
      message: 'Config is not valid for independentreserve.com.',
    })
  }

  const options = { ...input, config }

  return {
    exchange: independentReserve.exchange,
    getLowestAskPrice: independentReserve.getLowestAskPrice(options),
    getBalance: independentReserve.getBalance(options),
    getOpenOrders: independentReserve.getOpenOrders(options),
    getTrades: independentReserve.getTrades(options),
    createOrder: independentReserve.createOrder(options),
    cancelOrder: independentReserve.cancelOrder(options),
  }
}

export { independentReserve, getIndependentReserveExchangeAPI }
