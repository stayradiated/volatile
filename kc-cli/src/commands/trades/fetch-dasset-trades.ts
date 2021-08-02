import * as dasset from '@stayradiated/dasset-api'
import { DateTime } from 'luxon'

import type { RowData } from './types.js'

const toRowData = (trade: dasset.Order): RowData => {
  const date = DateTime.fromISO(trade.timestamp)
  const price = trade.details.price
  const xbt = trade.details.total / trade.details.price
  const nzd = trade.details.total
  const fee = (trade.details.nzdFee / trade.details.total) * 100
  const bought = trade.type === dasset.OrderType.BUY ? trade.details.filled : 0
  const sold = trade.type === dasset.OrderType.SELL ? trade.details.filled : 0
  const type = trade.type === dasset.OrderType.BUY ? 0 : 1

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

const fetchDassetTrades = async (
  config: dasset.Config,
): Promise<RowData[] | Error> => {
  const orders = await dasset.getAllPages(config, dasset.closedOrders)
  if (orders instanceof Error) {
    return orders
  }

  return orders
    .filter((order) => order.status === dasset.OrderStatus.COMPLETED)
    .map((trade) => {
      console.log(trade)
      return toRowData(trade)
    })
}

export { fetchDassetTrades }
