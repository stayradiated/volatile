import { Argv } from 'yargs'
import * as kiwiCoin from '@stayradiated/kiwi-coin-api'

import { createHandler } from '../../utils/create-handler.js'

export const command = 'sell'

export const desc = 'Create a sell order'

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

export const handler = createHandler<Options>(
  async (config, argv): Promise<void | Error> => {
    const { price, amount } = argv
    const result = await kiwiCoin.sell(config.kiwiCoin, { price, amount })
    if (result instanceof Error) {
      return result
    }

    console.dir(result)
  },
)
