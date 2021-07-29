import type { DateTime } from 'luxon'

import type { CryptoSymbol } from '../../types.js'

enum TradeType {
  BUY = 0,
  SELL = 1,
}

type Trade = {
  UID: string
  userUID: string
  exchangeUID: string
  orderUID: string | undefined
  timestamp: DateTime
  ID: string
  type: TradeType
  symbol: CryptoSymbol
  amount: number
  priceNZD: number
  totalNZD: number
  feeNZD: number
}

export { Trade, TradeType }
