import { Argv } from 'yargs'

import { createHandler } from '../../utils/create-handler.js'
import { fetchKiwiCoinTrades } from './fetch-kiwi-coin-trades.js'
import { fetchDassetTrades } from './fetch-dasset-trades.js'
import { drawTable } from './draw-table.js'

export const command = 'trades'

export const desc = 'Print trades'

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

    const trades = await (async () => {
      switch (exchange) {
        case 'kiwi-coin.com': {
          return fetchKiwiCoinTrades(config.kiwiCoin)
        }

        case 'dassetx.com': {
          return fetchDassetTrades(config.dasset)
        }

        default: {
          return new Error('unknown exchange')
        }
      }
    })()
    if (trades instanceof Error) {
      return trades
    }

    console.log(trades)
    console.log(drawTable(trades))
  },
)
