import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { printTable } from 'console-table-printer'

import { withConfig } from '../../utils/with-config.js'

export const command = 'balance'

export const desc = 'Print balance'

export const builder = {}

export const handler = withConfig(async (config) => {
  const balance = await kiwiCoin.balance(config.kiwiCoin)
  printTable([balance])
})
