import type { BuySell } from '../../types.js'

type Trade = {
  uid: string
  userUid: string
  exchangeUid: string
  orderUid: string | undefined
  timestamp: Date
  tradeID: string
  type: BuySell
  primaryCurrency: string
  secondaryCurrency: string
  volume: number
  price: number
  value: number
  fee: number
  totalValue: number
}

export { Trade }
