import * as dasset from '@stayradiated/dasset-api'
import { Argv } from 'yargs'

import { createHandler } from '../../utils/create-handler.js'

export const command = 'closed-orders'

export const desc = 'Print closed-orders'

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

    const closedOrders = await (async () => {
      switch (exchange) {
        case 'kiwi-coin.com': {
          return new Error("kiwi-coin.com doesn't support closed orders")
        }

        case 'dassetx.com': {
          const result = await dasset.closedOrders(config.dasset)
          if (result instanceof Error) {
            return result
          }

          return result.results
        }

        default: {
          return new Error('unknown exchange')
        }
      }
    })()
    if (closedOrders instanceof Error) {
      return closedOrders
    }

    console.log(closedOrders)
  },
)
