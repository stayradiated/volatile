import type { DateTime } from 'luxon'

type RowData = {
  exchangeID: string
  openedAt: DateTime
  amount: number
  priceNZD: number
  totalNZD: number
  assetSymbol: string
  type: string
}

export { RowData }
