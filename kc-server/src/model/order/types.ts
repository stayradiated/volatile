import type { DateTime } from 'luxon'

import type { BuySell } from '../../types.js'

type Order = {
  UID: string
  userUID: string
  exchangeUID: string
  orderID: string
  assetSymbol: string
  priceNZD: number
  amount: number
  type: BuySell
  openedAt: DateTime
  closedAt: DateTime | undefined
}

export { Order }
