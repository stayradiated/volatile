import type { DateTime } from 'luxon'

type RowData = {
  exchangeID: string
  openedAt: DateTime
  value: number
  price: number
  volume: number
  primaryCurrency: string
  secondaryCurrency: string
  type: string
}

export { RowData }
