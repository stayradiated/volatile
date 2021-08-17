import type { DateTime } from 'luxon'

type RowData = {
  marketName: string
  timestamp: DateTime
  assetSymbol: string
  currency: string
  fxRate: number
  price: number
  priceNZD: number
}

export { RowData }
