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
  primaryCurrency: string
  secondaryCurrency: string
  volume: number
  price: number
  value: number
  fee: number
  totalValue: number
}

export { Trade }
