import { format } from 'date-fns'

import type { Row10 } from '../../utils/table.js'
import { table } from '../../utils/table.js'
import type { RowData } from './types.js'

const sortByDateAsc = (a: RowData, b: RowData): number =>
  a.date.valueOf() - b.date.valueOf()

const calcTotals = (rows: readonly RowData[]): RowData => {
  const sum: RowData = {
    tradeId: '-',
    orderCreatedAt: undefined,
    date: new Date(0),
    exchange: '-',
    assetSymbol: '-',
    price: 0,
    nzd: 0,
    btc: 0,
    fee: 0,
    type: '-',
  }

  for (const row of rows) {
    if (row.type === 'BUY') {
      sum.nzd += row.nzd
      sum.btc += row.btc
      sum.fee += row.fee
    } else {
      sum.nzd -= row.nzd
      sum.btc -= row.btc
      sum.fee -= row.fee
    }
  }

  return {
    ...sum,
    price: sum.nzd / sum.btc,
    fee: sum.fee / rows.length,
  }
}

const formatRow = (row: RowData): Row10 => {
  const tradeId = row.tradeId
  const orderCreatedAt = row.orderCreatedAt
    ? format(row.orderCreatedAt, 'yyyy-LL-dd HH:mm:ss')
    : '-'
  const date =
    row.date.valueOf() === 0 ? '-' : format(row.date, 'yyyy-LL-dd HH:mm:ss')
  const exchange = row.exchange
  const assetSymbol = row.assetSymbol
  const price = row.price.toFixed(2)
  const nzd = row.nzd.toFixed(2)
  const btc = row.btc.toFixed(8)
  const fee = row.fee.toFixed(2) + '%'
  const type = row.type

  return [
    tradeId,
    orderCreatedAt,
    date,
    exchange,
    assetSymbol,
    price,
    nzd,
    btc,
    fee,
    type,
  ]
}

const drawTable = (unsortedRows: RowData[]): string => {
  const rowData = [...unsortedRows].sort(sortByDateAsc)

  const header: Row10 = [
    'tradeId',
    'created at',
    'trade at',
    'exchange',
    'asset',
    'price',
    'nzd',
    'btc',
    'fee',
    'type',
  ]
  const rows = rowData.map((row) => formatRow(row))
  const footer = formatRow(calcTotals(rowData))

  return table({ header, rows, footer })
}

export { drawTable }
