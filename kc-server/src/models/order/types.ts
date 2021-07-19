import type { DateTime } from 'luxon'

enum OrderType {
  BUY = 0,
  SELL = 1,
}

type Order = {
  UID: string
  userUID: string
  exchangeUID: string
  ID: string
  symbol: string
  price: number
  amount: number
  type: OrderType
  openedAt: DateTime
  closedAt: DateTime | undefined
}

export { Order, OrderType }
