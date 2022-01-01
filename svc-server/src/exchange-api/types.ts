import type { Kanye } from '@volatile/kanye'

import type { BuySell, Pool } from '../types.js'
import type { Exchange } from '../model/exchange/index.js'

type CreateOrderOptions = {
  volume: number
  price: number
  primaryCurrency: string
  secondaryCurrency: string
}

type CreateOrderResult = {
  orderID: string
}

type CreateOrderFn = (
  options: CreateOrderOptions,
) => Promise<CreateOrderResult | Error>

type CancelOrderOptions = {
  orderID: string
}

type CancelOrderFn = (options: CancelOrderOptions) => Promise<void | Error>

type GetBalanceOptions = {
  currency: string
}

type GetBalanceFn = (options: GetBalanceOptions) => Promise<number | Error>

type GetLowestAskPriceOptions = {
  primaryCurrency: string
  secondaryCurrency: string
}

type GetLowestAskPriceFn = (
  options: GetLowestAskPriceOptions,
) => Promise<number | Error>

/* GET OPEN ORDERS */

type GetOpenOrdersResult = Array<{
  orderID: string
  primaryCurrency: string
  secondaryCurrency: string
  price: number
  volume: number
  type: BuySell
  openedAt: Date
}>

type GetOpenOrders = () => Promise<GetOpenOrdersResult | Error>

/* GET TRADES */

type GetTradesResult = {
  total: number
  hasNextPage: boolean
  items: Array<{
    tradeID: string
    orderID: string
    timestamp: Date
    primaryCurrency: string
    secondaryCurrency: string
    price: number
    volume: number
    fee: number
    type: BuySell
  }>
}

type GetTradesOptions = {
  pageIndex: number
  pageSize: number
}

type GetTrades = (options: GetTradesOptions) => Promise<GetTradesResult | Error>

/* EXCHANGE API */

type ConfigOptions<Config> = {
  pool: Pool
  config: Config
  userUID: string
  exchangeUID: string
  userExchangeKeysUID: string | undefined
}

type LogRequestFn = (raw: Kanye) => Promise<unknown | Error>

type Context<Config> = {
  config: Config
  logRequest: LogRequestFn
}

type WithContext<Config, Fn> = (options: Context<Config>) => Fn

type ExchangeAPI<Config> = {
  exchange: Exchange
  getLowestAskPrice: WithContext<Config, GetLowestAskPriceFn>
  getBalance: WithContext<Config, GetBalanceFn>
  getOpenOrders: WithContext<Config, GetOpenOrders>
  getTrades: WithContext<Config, GetTrades>
  createOrder: WithContext<Config, CreateOrderFn>
  cancelOrder: WithContext<Config, CancelOrderFn>
}

type UserExchangeAPI = {
  exchange: Exchange
  getLowestAskPrice: GetLowestAskPriceFn
  getBalance: GetBalanceFn
  getOpenOrders: GetOpenOrders
  getTrades: GetTrades
  createOrder: CreateOrderFn
  cancelOrder: CancelOrderFn
}

export type { ExchangeAPI, UserExchangeAPI, ConfigOptions, LogRequestFn }
