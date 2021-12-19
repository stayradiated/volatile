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
  const volume = row.volume.toFixed(8)
  const price = row.price.toFixed(2)
  const value = row.value.toFixed(2)
  const primaryCurrency = row.primaryCurrency
  const type = row.type

  return [date, exchange, value, price, volume, primaryCurrency, type]
}

const drawTable = (unsortedRows: RowData[]): string => {
  const rowData = sortByDateAsc(unsortedRows)

  const header: Row7 = [
    'date',
    'exchange',
    'value',
    'price',
    'volume',
    'asset',
    'type',
  ]
  const rows = rowData.map((row) => formatRow(row))

  return table({ header, rows })
}

export { drawTable }
