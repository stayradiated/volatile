import { Argv } from 'yargs'
import * as kiwiCoin from '@stayradiated/kiwi-coin-api'

import withConfig from '../../utils/with-config.js'

export const command = 'sell'

export const desc = 'Create a sell order'

export const builder = (argv: Argv) => {
  return argv
    .option('price', {
      type: 'number',
    })
    .option('amount', {
      type: 'number',
    })
}

type Options = {
  price: number
  amount: number
}

export const handler = withConfig<Options>(async (config, argv) => {
  const { price, amount } = argv
  const result = await kiwiCoin.sell(config, { price, amount })
  console.dir(result)
})
