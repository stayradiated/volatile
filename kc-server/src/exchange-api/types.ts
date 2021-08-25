import type { DateTime } from 'luxon'

import type { BuySell } from '../types.js'

type CreateOrderOptions = {
  amount: number
  price: number
  assetSymbol: string
  currency: string
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
  assetSymbol: string
  currency: string
}

type GetLowestAskPriceFn = (
  options: GetLowestAskPriceOptions,
) => Promise<number | Error>

type GetOpenOrdersResult = Array<{
  orderID: string
  assetSymbol: string
  priceNZD: number
  amount: number
  type: BuySell
  openedAt: DateTime
}>

type GetOpenOrders = () => Promise<GetOpenOrdersResult | Error>

type WithConfig<Config, Fn> = (config: Config) => Fn

type ExchangeAPI<Config> = {
  getLowestAskPrice: WithConfig<Config, GetLowestAskPriceFn>
  getBalance: WithConfig<Config, GetBalanceFn>
  getOpenOrders: WithConfig<Config, GetOpenOrders>
  createOrder: WithConfig<Config, CreateOrderFn>
  cancelOrder: WithConfig<Config, CancelOrderFn>
}

type UserExchangeAPI = {
  getLowestAskPrice: GetLowestAskPriceFn
  getBalance: GetBalanceFn
  getOpenOrders: GetOpenOrders
  createOrder: CreateOrderFn
  cancelOrder: CancelOrderFn
}

export type { ExchangeAPI, UserExchangeAPI }
