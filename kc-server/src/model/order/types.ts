import type { DateTime } from 'luxon'

import type { BuySell } from '../../types.js'

type Order = {
  UID: string
  userUID: string
  exchangeUID: string
  orderID: string
  primaryCurrency: string
  secondaryCurrency: string
  price: number
  volume: number
  value: number
  type: BuySell
  openedAt: DateTime
  closedAt: DateTime | undefined
}

export { Order }
