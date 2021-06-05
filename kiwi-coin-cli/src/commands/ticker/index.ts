import * as kiwiCoin from '@stayradiated/kiwi-coin-api'

export const command = 'ticker'

export const desc = 'Print ticker'

export const builder = {}

export const handler = async () => {
  console.log(await kiwiCoin.ticker())
}
