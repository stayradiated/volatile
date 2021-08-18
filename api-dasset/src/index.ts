import ky from 'ky-universal'
import debug from 'debug'
import { errorBoundary } from '@stayradiated/error-boundary'
import { HTTPError } from 'ky'

import { APIError } from './api-error.js'
import type {
  Config,
  PaginationOptions,
  PaginatedList,
  APIErrorResponse,
} from './types.js'

const log = debug('dasset-api')

const isValidConfig = (config: Record<string, string>): config is Config =>
  typeof config === 'object' &&
  config !== null &&
  typeof config['apiKey'] === 'string' &&
  typeof config['accountId'] === 'string'

const buildHeaders = (config: Config): Record<string, string> | Error => {
  if (!isValidConfig(config)) {
    return new Error('dasset: config is invalid')
  }

  const { apiKey, accountId } = config
  return {
    'x-api-key': apiKey,
    'x-account-id': accountId,
  }
}

const dasset = ky.create({
  prefixUrl: 'https://api.dassetx.com/api/',
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

export type BalanceResult = {
  currencySymbol: string // 'NZD'
  currencyName: string // 'New Zealand Dollar'
  updatedAt?: string // '2021-07-20T11:07:51.81Z'
  available: number // 0
  inflight?: number // 0
  total?: number // 0
  nonce?: number // 1
  held?: number // 0
  nzdRate: number // 1
  nzdValue: number // 0
  btcValue: number // 0
}

const balanceAll = async (config: Config): Promise<BalanceResult[] | Error> => {
  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return headers
  }

  const result = await errorBoundary(async () =>
    dasset.get('balances', { headers }).json(),
  )
  if (result instanceof Error) {
    return result
  }

  return result as BalanceResult[]
}

const balanceSingle = async (
  config: Config,
  symbol: string,
): Promise<BalanceResult | Error> => {
  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return headers
  }

  const result = await errorBoundary(async () =>
    dasset
      .get(`balances/${symbol}`, {
        headers,
      })
      .json(),
  )
  if (result instanceof Error) {
    return result
  }

  return result[0] as BalanceResult
}

export enum OrderType {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum OrderStatus {
  CANCELLED = 'Cancelled',
  COMPLETED = 'Completed',
  OPEN = 'Open',
}

export type Order = {
  id: string
  baseSymbol: string
  quoteSymbol: string
  product: string
  timestamp: string
  type: OrderType
  description: string
  status: OrderStatus
  baseAmount: number
  quoteAmount: number | null
  details: {
    precision: number
    orderType: string
    price: number | null
    total: number | null
    orderId: string
    filled: number
    fee: number | null
    nzdFee: number | null
  }
  isOpen: boolean
}

const openOrders = async (
  config: Config,
  options?: PaginationOptions,
): Promise<PaginatedList<Order> | Error> => {
  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return headers
  }

  const result = await errorBoundary(async () =>
    dasset
      .get('orders/open', {
        headers,
        searchParams: options,
      })
      .json(),
  )
  if (result instanceof Error) {
    return result
  }

  return result[0] as PaginatedList<Order>
}

const closedOrders = async (
  config: Config,
  options?: PaginationOptions,
): Promise<PaginatedList<Order> | Error> => {
  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return headers
  }

  const result = await errorBoundary(async () =>
    dasset
      .get('orders', {
        headers,
        searchParams: options,
      })
      .json(),
  )
  if (result instanceof Error) {
    return result
  }

  return result[0] as PaginatedList<Order>
}

export type CreateOrderOptions = {
  amount: number // The amount of the order
  tradingPair: string // The trading pair you wish to place the order for
  side: OrderType // Whether you wish to place an order on the buy or sell side
  orderType: 'LIMIT' | 'MARKET' // The type of order you wish to place
  timeInForce: 'GOOD_TIL_CANCELLED' | 'IMMEDIATE_OR_CANCEL' | 'FILL_OR_KILL' // The time in force option you wish to use ofr the order
  limit?: number // The limit price for the order if it is a limit order type
}

export type CreateOrderResult = {
  order: { orderId: string }
}

const createOrder = async (
  config: Config,
  options: CreateOrderOptions,
): Promise<CreateOrderResult | Error> => {
  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return headers
  }

  const result = await errorBoundary(async () =>
    dasset
      .post('orders', {
        headers,
        body: JSON.stringify(options),
      })
      .json(),
  )
  if (result instanceof Error) {
    return result
  }

  return result[0] as CreateOrderResult
}

export type CancelOrderResult = {
  message: string
}

const cancelOrder = async (
  config: Config,
  orderId: string,
): Promise<CancelOrderResult | Error> => {
  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return headers
  }

  const result = await errorBoundary<CancelOrderResult[]>(async () =>
    dasset
      .delete(`orders/${orderId}`, {
        headers,
      })
      .json(),
  )
  if (result instanceof Error) {
    if (result instanceof HTTPError) {
      const response = (await result.response.json()) as APIErrorResponse
      return new APIError(result.response.url, response)
    }

    return result
  }

  return result[0]!
}

type TicketResult = {
  lastTradeRate: string
  bidRate: string
  askRate: string
  symbol: string
}

const ticker = async (
  config: Config,
  tradingPair: string,
): Promise<TicketResult | Error> => {
  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return headers
  }

  const result = await errorBoundary<[TicketResult]>(async () =>
    dasset
      .get(`markets/${tradingPair}/ticker`, {
        headers,
      })
      .json(),
  )
  if (result instanceof Error) {
    return result
  }

  return result[0]
}

type OrderBookResult = {
  bid: Array<{
    quantity: string
    rate: string
  }>
  ask: Array<{
    quantity: string
    rate: string
  }>
}

const orderBook = async (config: Config, tradingPair: string) => {
  const headers = buildHeaders(config)
  if (headers instanceof Error) {
    return headers
  }

  const result = await errorBoundary<[OrderBookResult]>(async () =>
    dasset
      .get(`markets/${tradingPair}/orderbook`, {
        headers,
      })
      .json(),
  )
  if (result instanceof Error) {
    return result
  }

  return result[0]
}

export * from './pagination.js'
export * from './types.js'
export * from './api-error.js'

export {
  isValidConfig,
  balanceSingle,
  balanceAll,
  openOrders,
  closedOrders,
  createOrder,
  cancelOrder,
  ticker,
  orderBook,
}
