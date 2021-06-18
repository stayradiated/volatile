import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { table as printTable } from 'table'
import { DateTime } from 'luxon'

import withConfig from '../../utils/with-config.js'

export const command = 'trades'

export const desc = 'Print trades'

export const builder = {}

type Trade = kiwiCoin.TradesResult[0]

enum TradeType {
  buy = 0,
  sell = 1,
}

type RowData = {
  date: DateTime
  price: number
  nzd: number
  xbt: number
  fee: number
  bought: number
  sold: number
  type: TradeType | undefined
}

const sortByDateAsc = (a: RowData, b: RowData): number => {
  return a.date.valueOf() - b.date.valueOf()
}

const calcTotals = (rows: RowData[]): RowData => {
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

const toRowData = (trade: Trade): RowData => {
  const date = DateTime.fromSeconds(trade.datetime)
  const price = trade.price
  const nzd = trade.trade_size * trade.price
  const xbt = trade.trade_size
  const fee = (trade.fee / trade.trade_size) * 100
  const bought = trade.income && trade.trade_type === 0 ? trade.income : 0
  const sold = trade.income && trade.trade_type === 1 ? trade.income : 0
  const type = trade.trade_type

  return {
    date,
    price,
    nzd,
    xbt,
    fee,
    bought,
    sold,
    type,
  }
}

const formatRow = (row: RowData): string[] => {
  const date =
    row.date.valueOf() === 0 ? '-' : row.date.toFormat('yyyy-LL-dd HH:mm:ss')
  const price = row.price.toFixed(2)

  const nzd = row.nzd.toFixed(2)
  const xbt = row.xbt.toFixed(8)
  const fee = row.fee.toFixed(1) + '%'
  const bought = row.type === TradeType.sell ? '' : row.bought.toFixed(8)
  const sold = row.type === TradeType.buy ? '' : row.sold.toFixed(8)

  return [date, price, nzd, xbt, fee, bought, sold]
}

export const handler = withConfig(async (config) => {
  const trades = await kiwiCoin.trades(config.kiwiCoin, 'all')

  const rows = trades.map((trade) => toRowData(trade)).sort(sortByDateAsc)
  const totals = calcTotals(rows)

  const columns = ['date', 'price', 'nzd', 'btc', 'fee', 'bought', 'sold']

  const table = [...rows, totals].map((row) => formatRow(row))
  table.unshift(columns)

  console.log(
    printTable(table, {
      drawHorizontalLine: (lineIndex, rowCount) => {
        return (
          lineIndex === 0 ||
          lineIndex === 1 ||
          lineIndex === rowCount - 1 ||
          lineIndex === rowCount
        )
      },
      columnDefault: {
        alignment: 'right',
      },
    }),
  )
})
