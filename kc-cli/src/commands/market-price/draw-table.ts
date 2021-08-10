import { sort } from 'rambda'
import { table, Row7 } from '../../utils/table.js'
import { RowData } from './types.js'

const sortByPriceNZD = sort<RowData>(
  (a, b): number => a.priceNZD - b.priceNZD
)

const formatRow = (row: RowData): Row7 => [
  row.marketName,
  row.timestamp.toFormat('yyyy-LL-dd HH:mm:ss'),
  row.symbol,
  row.price.toFixed(2),
  row.currency,
  row.fxRate.toFixed(2),
  row.priceNZD.toFixed(2),
]

const drawTable = (input: RowData[]): string => {
  const rowData = sortByPriceNZD(input)

  const header: Row7 = [
    'market',
    'date',
    'symbol',
    'price',
    'currency',
    'fx rate',
    'price NZD',
  ]
  const rows = rowData.map((row) => formatRow(row))

  return table({ header, rows })
}

export { drawTable }
