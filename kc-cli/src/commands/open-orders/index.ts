import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { printTable } from 'console-table-printer'

import { withConfig } from '../../utils/with-config.js'

export const command = 'open-orders'

export const desc = 'Print open-orders'

export const builder = {}

export const handler = withConfig(async (config) => {
  const openOrders = await kiwiCoin.openOrders(config.kiwiCoin)
  printTable(openOrders)
})
