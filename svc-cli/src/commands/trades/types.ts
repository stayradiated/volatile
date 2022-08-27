type RowData = {
  date: Date
  exchange: string
  tradeId: string
  orderCreatedAt: Date | undefined
  assetSymbol: string
  price: number
  nzd: number
  btc: number
  fee: number
  type: string
}

export type { RowData }
