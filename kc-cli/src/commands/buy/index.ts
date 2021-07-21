import { Argv } from 'yargs'
import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import * as dasset from '@stayradiated/dasset-api'

import { createHandler } from '../../utils/create-handler.js'

export const command = 'buy'

export const desc = 'Create a buy order'

export const builder = (argv: Argv) =>
  argv
    .option('exchange', {
      type: 'string',
      required: true,
      choices: ['kiwi-coin.com', 'dassetx.com'],
    })
    .option('price', {
      type: 'number',
      required: true,
    })
    .option('amount', {
      type: 'number',
      required: true,
    })

type Options = {
  exchange: string
  price: number
  amount: number
}

export const handler = createHandler<Options>(
  async (config, argv): Promise<void | Error> => {
    const { exchange, price, amount } = argv

    const result = await (async () => {
      switch (exchange) {
        case 'kiwi-coin.com': {
          return kiwiCoin.buy(config.kiwiCoin, { price, amount })
        }

        case 'dassetx.com': {
          return dasset.createOrder(config.dasset, {
            tradingPair: 'BTC-NZD',
            side: dasset.OrderType.BUY,
            orderType: 'LIMIT',
            timeInForce: 'GOOD_TIL_CANCELLED',
            amount,
            limit: price,
          })
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
  },
)
