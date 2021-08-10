import type { DateTime } from 'luxon'

type RowData = {
  marketName: string
  timestamp: DateTime
  symbol: string
  currency: string
  fxRate: number
  price: number
  priceNZD: number
}

export { RowData }
