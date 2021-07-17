import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { printTable } from 'console-table-printer'
import { sort } from 'rambda'

import { createHandler } from '../../utils/create-handler.js'

const { DealDirection, fetchStats } = kiwiCoin.privateAPI.stats
type Deal = kiwiCoin.privateAPI.stats.Deal

export const command = 'stats'

export const desc = 'Print stats'

export const builder = {}

const sortDeals = sort((a: Deal, b: Deal) => {
  const dateDiff = a.datetime.valueOf() - b.datetime.valueOf()
  if (dateDiff !== 0) {
    return dateDiff
  }

  if (a.direction === DealDirection.sell) {
    return b.price - a.price
  }

  return a.price - b.price
})

export const handler = createHandler(async (): Promise<void | Error> => {
  const stats = await fetchStats()
  if (stats instanceof Error) {
    return stats
  }

  const deals = sortDeals(stats.deals)

  const table = deals.map((deal) => ({
    date: deal.datetime.toFormat('yyyy.LL.dd HH:mm:ss'),
    price: deal.price.toFixed(2),
    volume: deal.volume.toFixed(8),
    direction: deal.direction === DealDirection.buy ? 'buy' : 'sell',
  }))

  printTable(table)
})
