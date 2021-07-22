import { table as printTable } from 'table'
import { sort } from 'rambda'
import { DateTime } from 'luxon'

import { TradeType, RowData } from './types.js'

const sortByDateAsc = sort<RowData>(
  (a, b): number => a.date.valueOf() - b.date.valueOf(),
)

const calcTotals = (rows: readonly RowData[]): RowData => {
  const sum: RowData = {
    date: DateTime.fromSeconds(0),
    price: 0,
    nzd: 0,
    xbt: 0,
    fee: 0,
    bought: 0,
    sold: 0,
    type: undefined,
  }

  for (const row of rows) {
    sum.price += row.price
    sum.nzd += row.nzd
    sum.xbt += row.xbt
    sum.fee += row.fee
    sum.bought += row.bought
    sum.sold += row.sold
  }

  return {
    ...sum,
    price: sum.nzd / sum.bought,
    fee: sum.fee / rows.length,
  }
}

const formatRow = (row: RowData): string[] => {
  const date =
    row.date.valueOf() === 0 ? '-' : row.date.toFormat('yyyy-LL-dd HH:mm:ss')
  const price = row.price.toFixed(2)

  const nzd = row.nzd.toFixed(2)
  const xbt = row.xbt.toFixed(8)
  const fee = row.fee.toFixed(2) + '%'
  const bought = row.type === TradeType.sell ? '' : row.bought.toFixed(8)
  const sold = row.type === TradeType.buy ? '' : row.sold.toFixed(8)

  return [date, price, nzd, xbt, fee, bought, sold]
}

const drawTable = (unsortedRows: RowData[]): string => {
  const rowData = sortByDateAsc(unsortedRows)
  const totals = calcTotals(rowData)

  const headers = ['date', 'price', 'nzd', 'btc', 'fee', 'bought', 'sold']
  const rows = [...rowData, totals].map((row) => formatRow(row))

  const table = [headers, ...rows]

  return printTable(table, {
    drawHorizontalLine: (lineIndex, rowCount) =>
      lineIndex === 0 ||
      lineIndex === 1 ||
      lineIndex === rowCount - 1 ||
      lineIndex === rowCount,
    columnDefault: {
      alignment: 'right',
    },
  })
}

export { drawTable }
