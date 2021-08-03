import { sort } from 'rambda'

import { table, Row7 } from '../../utils/table.js'
import { RowData } from './types.js'

const sortByDateAsc = sort<RowData>(
  (a, b): number => a.openedAt.valueOf() - b.openedAt.valueOf(),
)

const formatRow = (row: RowData): Row7 => {
  const date =
    row.openedAt.valueOf() === 0
      ? '-'
      : row.openedAt.toFormat('yyyy-LL-dd HH:mm:ss')
  const exchange = row.exchangeID
  const amount = row.amount.toFixed(8)
  const priceNZD = row.priceNZD.toFixed(2)
  const total = row.totalNZD.toFixed(2)
  const symbol = row.symbol
  const type = row.type

  return [date, exchange, amount, priceNZD, total, symbol, type]
}

const drawTable = (unsortedRows: RowData[]): string => {
  const rowData = sortByDateAsc(unsortedRows)

  const header: Row7 = [
    'date',
    'exchange',
    'amount',
    'price',
    'total',
    'symbol',
    'type',
  ]
  const rows = rowData.map((row) => formatRow(row))

  return table({ header, rows })
}

export { drawTable }
