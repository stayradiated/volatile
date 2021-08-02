import { table as printTable } from 'table'
import { sort } from 'rambda'
import { DateTime } from 'luxon'

import { RowData } from './types.js'

const sortByDateAsc = sort<RowData>(
  (a, b): number => a.date.valueOf() - b.date.valueOf(),
)

const calcTotals = (rows: readonly RowData[]): RowData => {
  const sum: RowData = {
    date: DateTime.fromSeconds(0),
    exchange: '-',
    symbol: '-',
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

const formatRow = (row: RowData): string[] => {
  const date =
    row.date.valueOf() === 0 ? '-' : row.date.toFormat('yyyy-LL-dd HH:mm:ss')
  const exchange = row.exchange
  const symbol = row.symbol
  const price = row.price.toFixed(2)
  const nzd = row.nzd.toFixed(2)
  const btc = row.btc.toFixed(8)
  const fee = row.fee.toFixed(2) + '%'
  const type = row.type

  return [date, exchange, symbol, price, nzd, btc, fee, type]
}

const drawTable = (unsortedRows: RowData[]): string => {
  const rowData = sortByDateAsc(unsortedRows)
  const totals = calcTotals(rowData)

  const headers = ['date', 'exchange', 'symbol', 'price', 'nzd', 'btc', 'fee', 'type']
  const rows = [...rowData, totals].map((row) => formatRow(row))

  const table = [headers, ...rows]

  const tableString = printTable(table, {
    border: {
      topBody: '-',
      topJoin: '+',
      topLeft: '|',
      topRight: '|',
      bottomBody: '-',
      bottomJoin: '+',
      bottomLeft: '|',
      bottomRight: '|',
      bodyLeft: '|',
      bodyRight: '|',
      bodyJoin: '|',
      headerJoin: '+',
      joinBody: '-',
      joinLeft: '|',
      joinRight: '|',
      joinJoin: '+',
    },
    drawHorizontalLine: (lineIndex, rowCount) =>
      lineIndex === 0 ||
      lineIndex === 1 ||
      lineIndex === rowCount - 1 ||
      lineIndex === rowCount,
    columnDefault: {
      alignment: 'right',
    },
  })

  // Add markdown alignment indicators
  return tableString.replace(/---(\+|\|)/g, '--:$1')
}

export { drawTable }
