import type { DateTime } from 'luxon'

import type { BuySell, CryptoSymbol } from '../../types.js'

type Trade = {
  UID: string
  userUID: string
  exchangeUID: string
  orderUID: string | undefined
  timestamp: DateTime
  tradeID: string
  type: BuySell
  symbol: CryptoSymbol
  amount: number
  priceNZD: number
  totalNZD: number
  feeNZD: number
}

export { Trade }
