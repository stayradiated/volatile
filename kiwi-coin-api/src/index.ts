import { createHmac } from 'crypto'
import ky from 'ky-universal'
import debug from 'debug'
import { errorBoundary } from '@stayradiated/error-boundary'

import * as privateAPI from './private/index.js'

const log = debug('kiwi-coin-api')

export type Config = {
  userId: string
  apiKey: string
  apiSecret: string
}

const isValidConfig = (config: Record<string, string>): config is Config =>
  typeof config === 'object' &&
  config !== null &&
  typeof config['userId'] === 'string' &&
  typeof config['apiKey'] === 'string' &&
  typeof config['apiSecret'] === 'string'

const createSignature = (
  config: Config,
  endpoint: string,
  args: string[] = [],
) => {
  const { userId, apiKey, apiSecret } = config

  const nonce = Date.now().toString()
  const message = [
    nonce.toString(),
    userId,
    apiKey,
    ';',
    [endpoint, ...args].join(','),
  ].join('')

  const hmac = createHmac('sha256', apiSecret, { encoding: 'utf8' })
  hmac.update(message, 'utf8')
  const signature = hmac.digest('hex').toUpperCase()

  return { key: apiKey, nonce, signature }
}

const kiwiCoin = ky.create({
  prefixUrl: 'https://kiwi-coin.com/api/',
  hooks: {
    beforeRequest: [
      (request) => {
        log(request.url)
      },
    ],
    afterResponse: [
      (request) => {
        log(request.url)
      },
    ],
  },
})

const createSignedBody = (
  config: Config,
  endpoint: string,
  parameters: Record<string, string> = {},
) => {
  const body = new URLSearchParams(parameters)
  const args: string[] = Object.values(parameters)

  const { key, nonce, signature } = createSignature(config, endpoint, args)

  body.set('key', key)
  body.set('nonce', nonce)
  body.set('signature', signature)

  return body
}

export type TickerResult = {
  last: number
  date: number
  high: number
  low: number
  vwap: number
  volume: number
  bid: number
  ask: number
}

const ticker = async (): Promise<TickerResult | Error> =>
  errorBoundary(async () => kiwiCoin.get('ticker').json())

export type OrderBookResult = {
  timestamp: string
  bids: Array<[string, string]>
  asks: Array<[string, string]>
}

const orderBook = async (): Promise<OrderBookResult | Error> =>
  errorBoundary(async () => kiwiCoin.get('order_book').json())

export type BalanceResult = {
  nzd_available: string
  nzd_reserved: string
  nzd_balance: string
  btc_available: string
  btc_reserved: string
  btc_balance: string
  fee: string
  mmfee: string
}

const balance = async (config: Config): Promise<BalanceResult | Error> => {
  const endpoint = 'balance'
  return errorBoundary(async () =>
    kiwiCoin
      .post(endpoint, { body: createSignedBody(config, endpoint) })
      .json(),
  )
}

export enum OrderType {
  buy = 0,
  sell = 1,
}

export type Order = {
  price: string
  amount: string
  type: OrderType
  id: number
  datetime: string
}

export type OpenOrdersResult = Order[]

const openOrders = async (
  config: Config,
): Promise<OpenOrdersResult | Error> => {
  const endpoint = 'open_orders'
  return errorBoundary(async () =>
    kiwiCoin
      .post(endpoint, { body: createSignedBody(config, endpoint) })
      .json(),
  )
}

export type Timeframe = 'minute' | 'hour' | 'day' | 'all'

export type TradesResult = Array<{
  transaction_id: number
  order_id: number
  datetime: number
  trade_type: number
  trade_size: number
  price: number
  income: number
  fee: number
}>

const trades = async (
  config: Config,
  timeframe: Timeframe,
): Promise<TradesResult | Error> => {
  const endpoint = 'trades'
  return errorBoundary(async () =>
    kiwiCoin
      .post(endpoint, {
        body: createSignedBody(config, endpoint, { timeframe }),
      })
      .json(),
  )
}

export type CancelOrderResult = boolean | { error: string }

const cancelOrder = async (
  config: Config,
  orderId: number,
): Promise<CancelOrderResult | Error> => {
  const endpoint = 'cancel_order'
  return errorBoundary(async () =>
    kiwiCoin
      .post(endpoint, {
        body: createSignedBody(config, endpoint, { id: orderId.toString() }),
      })
      .json(),
  )
}

export type TradeOptions = { price: number; amount: number }

type APIError = {error: string}
export type BuyResult = Order | APIError

const isAPIError = (response: Record<string, unknown>): response is APIError => {
  return typeof response === 'object' && response !== null && typeof response['error'] === 'string'
}

const buy = async (
  config: Config,
  options: TradeOptions,
): Promise<Order | Error> => {
  const endpoint = 'buy'
  const response = await errorBoundary<BuyResult>(async () =>
    kiwiCoin
      .post(endpoint, {
        body: createSignedBody(config, endpoint, {
          price: options.price.toString(),
          amount: options.amount.toString(),
        }),
      })
      .json(),
  )
  if (response instanceof Error) {
    return response
  }
  if (isAPIError(response)) {
    return new Error(response.error)
  }
  return response
}

export type SellResult = Order | { error: string }

const sell = async (
  config: Config,
  options: TradeOptions,
): Promise<SellResult | Error> => {
  const endpoint = 'sell'
  return errorBoundary(async () =>
    kiwiCoin
      .post(endpoint, {
        body: createSignedBody(config, endpoint, {
          price: options.price.toString(),
          amount: options.amount.toString(),
        }),
      })
      .json(),
  )
}

export enum ExtPriceSource {
  worldwide = '1',
  europe = '2',
}

export type ExtPriceOptions = {
  source: ExtPriceSource
}

export type ExtPriceResult = {
  price: number
}

const extPrice = async (
  options: ExtPriceOptions,
): Promise<ExtPriceResult | Error> => {
  const { source } = options

  const price = await errorBoundary(async () =>
    kiwiCoin
      .get('extprice', {
        prefixUrl: 'https://kiwi-coin.com/',
        searchParams: { s: source },
      })
      .text(),
  )

  if (price instanceof Error) {
    return price
  }

  return {
    price: Number.parseFloat(price),
  }
}

export enum TopOrderPriceType {
  buy = 'buy',
  sell = 'sell',
}

export type TopOrderPriceOptions = {
  type: TopOrderPriceType
}

export type TopOrderPriceResult = {
  price: number
}

const topOrderPrice = async (
  options: TopOrderPriceOptions,
): Promise<TopOrderPriceResult | Error> => {
  const { type } = options

  const price = await errorBoundary(async () =>
    kiwiCoin
      .get('extprice', {
        prefixUrl: 'https://kiwi-coin.com/',
        searchParams: { s: '-1', t: type },
      })
      .text(),
  )

  if (price instanceof Error) {
    return price
  }

  return {
    price: Number.parseFloat(price),
  }
}

export {
  isValidConfig,
  ticker,
  orderBook,
  balance,
  openOrders,
  trades,
  cancelOrder,
  buy,
  sell,
  extPrice,
  topOrderPrice,
  privateAPI,
}
