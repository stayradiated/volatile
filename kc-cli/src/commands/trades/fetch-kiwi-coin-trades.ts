import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { DateTime } from 'luxon'

import type { RowData } from './types.js'

type Trade = kiwiCoin.TradesResult[0]

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

const fetchKiwiCoinTrades = async (
  config: kiwiCoin.Config,
): Promise<RowData[] | Error> => {
  const trades = await kiwiCoin.trades(config, 'all')
  if (trades instanceof Error) {
    return trades
  }

  return trades.map((trade) => {
    console.log(trade)
    return toRowData(trade)
  })
}

export { fetchKiwiCoinTrades }
