import * as dasset from '@stayradiated/dasset-api'
import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { Argv } from 'yargs'

import { createHandler } from '../../utils/create-handler.js'

export const command = 'open-orders'

export const desc = 'Print open-orders'

export const builder = (argv: Argv) =>
  argv.option('exchange', {
    type: 'string',
  })

type Options = {
  exchange: string
}

export const handler = createHandler<Options>(
  async (config, argv): Promise<void | Error> => {
    const { exchange } = argv

    const openOrders = await (async () => {
      switch (exchange) {
        case 'kiwi-coin.com': {
          return kiwiCoin.openOrders(config.kiwiCoin)
        }

        case 'dassetx.com': {
          const result = await dasset.openOrders(config.dasset)
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
    if (openOrders instanceof Error) {
      return openOrders
    }

    console.log(openOrders)
  },
)
