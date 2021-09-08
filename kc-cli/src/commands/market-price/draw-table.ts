import { sort } from 'rambda'
import { table, Row8 } from '../../utils/table.js'
import { RowData } from './types.js'

const sortByPrice = sort<RowData>((a, b): number => a.price - b.price)

const formatRow = (row: RowData): Row8 => [
  row.marketName,
  row.timestamp.toFormat('yyyy-LL-dd HH:mm:ss'),
  row.assetSymbol,
  row.sourcePrice.toFixed(2),
  row.sourceCurrency,
  row.fxRate.toFixed(2),
  row.price.toFixed(2),
  row.currency,
]

const drawTable = (input: RowData[]): string => {
  const rowData = sortByPrice(input)

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
