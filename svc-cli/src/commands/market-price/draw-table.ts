import { format } from 'date-fns'

import { table, Row8 } from '../../utils/table.js'
import { RowData } from './types.js'

const sortByPrice = (a: RowData, b: RowData): number => a.price - b.price

const formatRow = (row: RowData): Row8 => [
  row.marketName,
  format(row.timestamp, 'yyyy-LL-dd HH:mm:ss'),
  row.assetSymbol,
  row.sourcePrice.toFixed(2),
  row.sourceCurrency,
  row.fxRate.toFixed(2),
  row.price.toFixed(2),
  row.currency,
]

const drawTable = (input: RowData[]): string => {
  const rowData = [...input].sort(sortByPrice)

  const header: Row8 = [
    'market',
    'date',
    'asset',
    'source price',
    'source currency',
    'fx rate',
    'price',
    'currency',
  ]
  const rows = rowData.map((row) => formatRow(row))

  return table({ header, rows })
}

export { drawTable }
