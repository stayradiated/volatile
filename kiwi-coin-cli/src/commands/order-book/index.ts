import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { printTable } from 'console-table-printer'

export const command = 'order-book'

export const desc = 'Print order book'

export const builder = {}

type Row = {
  price: string,
  amount: string,
  value: string,
}

const EMPTY_ROW: Row = {
  price: '',
  amount: '',
  value: '',
}

const toRow = (row: [string, string]): Row => {
  const [ priceRaw, amountRaw ] = row
  const price = parseFloat(priceRaw)
  const amount = parseFloat(amountRaw)

  return {
    price: price.toFixed(2),
    amount: amount.toFixed(8),
    value: (price * amount).toFixed(2),
  }
}

export const handler = async () => {
  const orderBook = await kiwiCoin.orderBook()

  const length = 15

  const bids = orderBook.bids.slice(0, length).map(toRow)
  const asks = orderBook.asks.slice(0, length).map(toRow)

  const table = new Array(length).fill(null).map((_, index) => {
    const bid = bids[index] ?? EMPTY_ROW
    const ask = asks[index] ?? EMPTY_ROW

    return {
      '#': index + 1,
      bid_price: bid.price,
      bid_amount: bid.amount,
      bid_value: bid.value,
      ' ': '',
      ask_price: ask.price,
      ask_amount: ask.amount,
      ask_value: ask.value,
    }
  })

  printTable(table)
}
