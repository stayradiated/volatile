import type { DateTime } from 'luxon'

type RowData = {
  exchangeID: string
  openedAt: DateTime
  amount: number
  priceNZD: number
  totalNZD: number
  symbol: string
  type: string
}

export { RowData }
