import type { DateTime } from 'luxon'

enum TradeType {
  buy = 0,
  sell = 1,
}

type RowData = {
  date: DateTime
  price: number
  nzd: number
  xbt: number
  fee: number
  bought: number
  sold: number
  type: TradeType | undefined
}

export { TradeType, RowData }
