import * as dasset from '@stayradiated/dasset-api'
import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { Argv } from 'yargs'

import { createHandler } from '../../utils/create-handler.js'

export const command = 'cancel-order'

export const desc = 'Cancel an open order'

export const builder = (argv: Argv) =>
  argv
    .option('exchange', {
      type: 'string',
    })
    .option('order-id', {
      type: 'string',
      describe: 'ID of order to cancel',
    })

type Options = {
  exchange: string
  orderId: string
}

export const handler = createHandler<Options>(async (config, argv) => {
  const { exchange, orderId } = argv
  const result = await (async () => {
    switch (exchange) {
      case 'kiwi-coin.com': {
        return kiwiCoin.cancelOrder(
          config.kiwiCoin,
          Number.parseInt(orderId, 10),
        )
      }

      case 'dassetx.com': {
        return dasset.cancelOrder(config.dasset, orderId)
      }

      default: {
        return new Error('unknown exchange')
      }
    }
  })()
  if (result instanceof Error) {
    return result
  }

  console.dir(result)
  return undefined
})
