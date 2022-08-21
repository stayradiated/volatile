import { format } from 'date-fns'

import { table, Row7 } from '../../utils/table.js'
import { RowData } from './types.js'

const sortByDateAsc = (a: RowData, b: RowData): number =>
  a.openedAt.valueOf() - b.openedAt.valueOf()

const formatRow = (row: RowData): Row7 => {
  const date =
    row.openedAt.valueOf() === 0
      ? '-'
      : format(row.openedAt, 'yyyy-LL-dd HH:mm:ss')
  const exchange = row.exchangeId
  const volume = row.volume.toFixed(8)
  const price = row.price.toFixed(2)
  const value = row.value.toFixed(2)
  const primaryCurrency = row.primaryCurrency
  const type = row.type

  return [date, exchange, value, price, volume, primaryCurrency, type]
}

const drawTable = (unsortedRows: RowData[]): string => {
  const rowData = [...unsortedRows].sort(sortByDateAsc)

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
