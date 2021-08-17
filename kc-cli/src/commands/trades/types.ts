import type { DateTime } from 'luxon'

type RowData = {
  date: DateTime
  exchange: string
  assetSymbol: string
  price: number
  nzd: number
  btc: number
  fee: number
  type: string
}

export { RowData }
