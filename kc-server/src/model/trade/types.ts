import type { DateTime } from 'luxon'

import type { BuySell } from '../../types.js'

type Trade = {
  UID: string
  userUID: string
  exchangeUID: string
  orderUID: string | undefined
  timestamp: DateTime
  tradeID: string
  type: BuySell
  assetSymbol: string
  amount: number
  priceNZD: number
  totalNZD: number
  feeNZD: number
}

export { Trade }
