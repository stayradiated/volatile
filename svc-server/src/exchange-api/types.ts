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
  orderId: string
}

type CreateOrderFn = (
  options: CreateOrderOptions,
) => Promise<CreateOrderResult | Error>

type CancelOrderOptions = {
  orderId: string
}

type CancelOrderFn = (options: CancelOrderOptions) => Promise<void | Error>

type GetBalanceFn = () => Promise<
  | Array<{
      currency: string
      total: number
      available: number
    }>
  | Error
>

type GetLowestAskPriceOptions = {
  primaryCurrency: string
  secondaryCurrency: string
}

type GetLowestAskPriceFn = (
  options: GetLowestAskPriceOptions,
) => Promise<number | Error>

/* GET OPEN ORDERS */

type GetOpenOrdersResult = Array<{
  orderId: string
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
    orderId: string
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

/* EXCHANGE Api */

type ConfigOptions<Config> = {
  pool: Pool
  config: Config
  userUid: string
  exchangeUid: string
  userExchangeKeysUid: string | undefined
}

type LogRequestFn<T = unknown> = (raw: Kanye) => Promise<T | Error>

type Context<Config> = {
  config: Config
  logRequest: LogRequestFn
}

type WithContext<Config, Fn> = (options: Context<Config>) => Fn

type ExchangeApi<Config> = {
  exchange: Exchange
  getLowestAskPrice: WithContext<Config, GetLowestAskPriceFn>
  getBalance: WithContext<Config, GetBalanceFn>
  getOpenOrders: WithContext<Config, GetOpenOrders>
  getTrades: WithContext<Config, GetTrades>
  createOrder: WithContext<Config, CreateOrderFn>
  cancelOrder: WithContext<Config, CancelOrderFn>
}

type UserExchangeApi = {
  exchange: Exchange
  getLowestAskPrice: GetLowestAskPriceFn
  getBalance: GetBalanceFn
  getOpenOrders: GetOpenOrders
  getTrades: GetTrades
  createOrder: CreateOrderFn
  cancelOrder: CancelOrderFn
}

export type { ExchangeApi, UserExchangeApi, ConfigOptions, LogRequestFn }
