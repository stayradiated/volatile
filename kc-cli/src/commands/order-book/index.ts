import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { marketPriceSources, currencySources } from '@stayradiated/market-price'
import { table as printTable } from 'table'

import { withConfig } from '../../utils/with-config.js'

export const command = 'order-book'

export const desc = 'Print order book'

export const builder = {}

type Row = {
  price: string
  amount: string
  value: string
  relative: string
}

const EMPTY_ROW: Row = {
  price: '',
  amount: '',
  value: '',
  relative: '',
}

const toRow = (order: [string, string], worldPrice: number): Row => {
  const [priceRaw, amountRaw] = order
  const price = Number.parseFloat(priceRaw)
  const amount = Number.parseFloat(amountRaw)
  const relative = ((price / worldPrice) * 100 - 100).toFixed(1) + '%'

  return {
    price: price.toFixed(2),
    amount: amount.toFixed(8),
    value: (price * amount).toFixed(2),
    relative,
  }
}

export const handler = withConfig(async (config) => {
  const [{ value: binanceRate }, { value: usdRate }, orderBook] =
    await Promise.all([
      marketPriceSources.binance.fetch({}),
      currencySources.USD_NZD.fetch({ config: config.openExchangeRates }),
      kiwiCoin.orderBook(),
    ])

  const worldPrice = binanceRate * usdRate

  const length = 15

  const bids = orderBook.bids
    .slice(0, length)
    .map((order) => toRow(order, worldPrice))
  const asks = orderBook.asks
    .slice(0, length)
    .map((order) => toRow(order, worldPrice))

  const table = Array.from({ length })
    .fill(null)
    .map((_, index) => {
      const bid = bids[index] ?? EMPTY_ROW
      const ask = asks[index] ?? EMPTY_ROW

      return [
        index + 1,
        bid.relative,
        bid.price,
        bid.amount,
        bid.value,
        ask.relative,
        ask.price,
        ask.amount,
        ask.value,
      ]
    })

  table.unshift([
    '#',
    'bid %',
    'price',
    'amount',
    'value',
    'ask %',
    'price',
    'amount',
    'value',
  ])

  console.log(
    printTable(table, {
      drawVerticalLine: (lineIndex, columnCount) => {
        return (
          lineIndex === 0 ||
          lineIndex === 1 ||
          lineIndex === 5 ||
          lineIndex === columnCount
        )
      },
      drawHorizontalLine: (lineIndex, rowCount) => {
        return lineIndex === 0 || lineIndex === 1 || lineIndex === rowCount
      },
      columnDefault: {
        alignment: 'right',
      },
    }),
  )
})
