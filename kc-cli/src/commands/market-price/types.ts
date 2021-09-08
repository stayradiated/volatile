import type { DateTime } from 'luxon'

type RowData = {
  marketName: string
  timestamp: DateTime
  assetSymbol: string
  sourcePrice: number
  sourceCurrency: string
  fxRate: number
  price: number
  currency: string
}

export { RowData }
