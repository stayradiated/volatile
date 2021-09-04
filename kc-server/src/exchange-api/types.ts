import type { DateTime } from 'luxon'

import type { BuySell } from '../types.js'

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
  openedAt: DateTime
}>

type GetOpenOrders = () => Promise<GetOpenOrdersResult | Error>

/* GET CLOSED ORDERS */

type GetClosedOrdersResult = {
  total: number
  items: Array<{
    orderID: string
    primaryCurrency: string
    secondaryCurrency: string
    price: number
    volume: number
    type: BuySell
    openedAt: DateTime
    closedAt: DateTime | undefined
  }>
}

type GetClosedOrdersOptions = {
  page: number
  limit: number
}

type GetClosedOrders = (
  options: GetClosedOrdersOptions,
) => Promise<GetClosedOrdersResult | Error>

/* EXCHANGE API */

type WithConfig<Config, Fn> = (config: Config) => Fn

type ExchangeAPI<Config> = {
  getLowestAskPrice: WithConfig<Config, GetLowestAskPriceFn>
  getBalance: WithConfig<Config, GetBalanceFn>
  getOpenOrders: WithConfig<Config, GetOpenOrders>
  getClosedOrders: WithConfig<Config, GetClosedOrders>
  createOrder: WithConfig<Config, CreateOrderFn>
  cancelOrder: WithConfig<Config, CancelOrderFn>
}

type UserExchangeAPI = {
  getLowestAskPrice: GetLowestAskPriceFn
  getBalance: GetBalanceFn
  getOpenOrders: GetOpenOrders
  getClosedOrders: GetClosedOrders
  createOrder: CreateOrderFn
  cancelOrder: CancelOrderFn
}

export type { ExchangeAPI, UserExchangeAPI }
