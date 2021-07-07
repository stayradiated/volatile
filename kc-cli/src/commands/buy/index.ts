import { Argv } from 'yargs'
import * as kiwiCoin from '@stayradiated/kiwi-coin-api'

import { withConfig } from '../../utils/with-config.js'

export const command = 'buy'

export const desc = 'Create a buy order'

export const builder = (argv: Argv) =>
  argv
    .option('price', {
      type: 'number',
    })
    .option('amount', {
      type: 'number',
    })

type Options = {
  price: number
  amount: number
}

export const handler = withConfig<Options>(async (config, argv) => {
  const { price, amount } = argv
  const result = await kiwiCoin.buy(config.kiwiCoin, { price, amount })
  console.dir(result)
})
