import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { printTable } from 'console-table-printer'

import { createHandler } from '../../utils/create-handler.js'

export const command = 'balance'

export const desc = 'Print balance'

export const builder = {}

export const handler = createHandler(async (config): Promise<void | Error> => {
  const balance = await kiwiCoin.balance(config.kiwiCoin)
  if (balance instanceof Error) {
    return balance
  }

  printTable([balance])
})
