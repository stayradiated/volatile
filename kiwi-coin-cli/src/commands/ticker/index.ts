import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { printTable } from 'console-table-printer'

export const command = 'ticker'

export const desc = 'Print ticker'

export const builder = {}

export const handler = async () => {
  const ticker = await kiwiCoin.ticker()
  printTable([ticker])
}
