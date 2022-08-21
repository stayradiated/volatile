import type { BuySell } from '../../types.js'

type Order = {
  uid: string
  userUid: string
  exchangeUid: string
  orderId: string
  primaryCurrency: string
  secondaryCurrency: string
  price: number
  volume: number
  value: number
  type: BuySell
  openedAt: Date
  closedAt: Date | undefined
}

export { Order }
