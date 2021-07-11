import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { printTable } from 'console-table-printer'

import { createHandler } from '../../utils/create-handler.js'

export const command = 'open-orders'

export const desc = 'Print open-orders'

export const builder = {}

export const handler = createHandler(async (config): Promise<void | Error> => {
  const openOrders = await kiwiCoin.openOrders(config.kiwiCoin)
  if (openOrders instanceof Error) {
    return openOrders
  }

  printTable(openOrders)
})
