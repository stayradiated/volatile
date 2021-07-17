import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { printTable } from 'console-table-printer'

import { createHandler } from '../../utils/create-handler.js'

export const command = 'ticker'

export const desc = 'Print ticker'

export const builder = {}

export const handler = createHandler(async (): Promise<void | Error> => {
  const ticker = await kiwiCoin.ticker()
  if (ticker instanceof Error) {
    return ticker
  }

  printTable([ticker])
})
