import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { printTable } from 'console-table-printer'

import withConfig from '../../utils/with-config.js'

export const command = 'trades'

export const desc = 'Print trades'

export const builder = {}

export const handler = withConfig(async (config) => {
  const trades = await kiwiCoin.trades(config, 'all')

  const table = trades.map((trade) => {
    return {
      date: new Date(trade.datetime * 1000).toLocaleString(),
      amount: trade.trade_size.toFixed(8),
      price: trade.price.toFixed(2),
      bought: trade.trade_type === 0 ? trade.income.toFixed(8) : null,
      sold: trade.trade_type === 1 ? trade.income.toFixed(8) : null,
      fee: trade.fee.toFixed(8),
    }
  })

  printTable(table)
})
