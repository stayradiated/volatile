import * as dasset from '@stayradiated/dasset-api'
import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { Argv } from 'yargs'

import { createHandler } from '../../utils/create-handler.js'

export const command = 'balance'

export const desc = 'Print balance'

export const builder = (argv: Argv) =>
  argv.option('exchange', {
    type: 'string',
    required: true,
    choices: ['kiwi-coin.com', 'dassetx.com'],
  })

type Options = {
  exchange: string
}

export const handler = createHandler<Options>(
  async (config, argv): Promise<void | Error> => {
    const { exchange } = argv

    const balance = await (async () => {
      switch (exchange) {
        case 'kiwi-coin.com': {
          const result = await kiwiCoin.balance(config.kiwiCoin)
          return [result]
        }

        case 'dassetx.com': {
          return dasset.balanceAll(config.dasset)
        }

        default: {
          return new Error('unknown exchange')
        }
      }
    })()
    if (balance instanceof Error) {
      return balance
    }

    console.dir(balance)
  },
)
