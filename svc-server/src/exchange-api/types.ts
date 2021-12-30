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

type WithConfig<Config, Fn> = (options: ConfigOptions<Config>) => Fn

type ExchangeAPI<Config> = {
  exchange: Exchange
  getLowestAskPrice: WithConfig<Config, GetLowestAskPriceFn>
  getBalance: WithConfig<Config, GetBalanceFn>
  getOpenOrders: WithConfig<Config, GetOpenOrders>
  getTrades: WithConfig<Config, GetTrades>
  createOrder: WithConfig<Config, CreateOrderFn>
  cancelOrder: WithConfig<Config, CancelOrderFn>
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

export type { ExchangeAPI, UserExchangeAPI, ConfigOptions }
