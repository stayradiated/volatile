import { createHmac } from 'crypto'
import ky from 'ky-universal'

export type Config = {
  userId: string
  apiKey: string
  apiSecret: string
}

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

const kiwiCoin = ky.create({ prefixUrl: 'https://kiwi-coin.com/api/' })

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

const ticker = async (): Promise<TickerResult> => {
  return kiwiCoin.get('ticker').json()
}

export type OrderBookResult = {
  timestamp: string
  bids: Array<[string, string]>
  asks: Array<[string, string]>
}

const orderBook = async (): Promise<OrderBookResult> => {
  return kiwiCoin.get('order_book').json()
}

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

const balance = async (config: Config): Promise<BalanceResult> => {
  const endpoint = 'balance'
  return kiwiCoin
    .post(endpoint, { body: createSignedBody(config, endpoint) })
    .json()
}

export type Order = {
  price: string
  amount: string
  type: 0 | 1
  id: number
  datetime: string
}

export type OpenOrdersResult = Order[]

const openOrders = async (config: Config): Promise<OpenOrdersResult> => {
  const endpoint = 'open_orders'
  return kiwiCoin
    .post(endpoint, { body: createSignedBody(config, endpoint) })
    .json()
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
): Promise<TradesResult> => {
  const endpoint = 'trades'
  return kiwiCoin
    .post(endpoint, {
      body: createSignedBody(config, endpoint, { timeframe }),
    })
    .json()
}

export type CancelOrderResult = boolean | { error: string }

const cancelOrder = async (
  config: Config,
  orderId: number,
): Promise<CancelOrderResult> => {
  const endpoint = 'cancel_order'
  return kiwiCoin
    .post(endpoint, {
      body: createSignedBody(config, endpoint, { id: orderId.toString() }),
    })
    .json()
}

export type TradeOptions = { price: number; amount: number }

export type BuyResult = Order | { error: string }

const buy = async (
  config: Config,
  options: TradeOptions,
): Promise<BuyResult> => {
  const endpoint = 'buy'
  return kiwiCoin
    .post(endpoint, {
      body: createSignedBody(config, endpoint, {
        price: options.price.toString(),
        amount: options.amount.toString(),
      }),
    })
    .json()
}

export type SellResult = Order | { error: string }

const sell = async (
  config: Config,
  options: TradeOptions,
): Promise<SellResult> => {
  const endpoint = 'sell'
  return kiwiCoin
    .post(endpoint, {
      body: createSignedBody(config, endpoint, {
        price: options.price.toString(),
        amount: options.amount.toString(),
      }),
    })
    .json()
}

export enum ExtPriceSource {
  worldwide = '1',
  europe = '2',
}

type ExtPriceResult = number

const extPrice = async (source: ExtPriceSource): Promise<ExtPriceResult> => {
  const price = await kiwiCoin
    .get('extprice', {
      prefixUrl: 'https://kiwi-coin.com/',
      searchParams: { s: source },
    })
    .text()
  return Number.parseFloat(price)
}

export {
  ticker,
  orderBook,
  balance,
  openOrders,
  trades,
  cancelOrder,
  buy,
  sell,
  extPrice,
}
