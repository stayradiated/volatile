type CreateOrderOptions<Config> = {
  config: Config
  amount: number
  price: number
  assetSymbol: string
  currency: string
}

type Order = {
  orderID: string
}

type CreateOrderFn<Config> = (
  options: CreateOrderOptions<Config>,
) => Promise<Order | Error>

type CancelOrderOptions<Config> = {
  config: Config
  orderID: string
}

type CancelOrderFn<Config> = (
  options: CancelOrderOptions<Config>,
) => Promise<void | Error>

type GetBalanceOptions<Config> = {
  config: Config
  currency: string
}

type GetBalanceFn<Config> = (
  options: GetBalanceOptions<Config>,
) => Promise<number | Error>

type GetLowestAskPriceOptions<Config> = {
  config: Config
  assetSymbol: string
  currency: string
}

type GetLowestAskPriceFn<Config> = (
  options: GetLowestAskPriceOptions<Config>,
) => Promise<number | Error>

type ExchangeAPI<Config> = {
  getLowestAskPrice: GetLowestAskPriceFn<Config>
  getBalance: GetBalanceFn<Config>
  createOrder: CreateOrderFn<Config>
  cancelOrder: CancelOrderFn<Config>
}

export type { ExchangeAPI }
