import { Argv } from 'yargs'
import * as kiwiCoin from '@stayradiated/kiwi-coin-api'

import { withConfig } from '../../utils/with-config.js'

export const command = 'cancel-order'

export const desc = 'Cancel an open order'

export const builder = (argv: Argv) =>
  argv.option('order-id', {
    type: 'number',
    describe: 'ID of order to cancel',
  })

type Options = {
  orderId: number
}

export const handler = withConfig<Options>(async (config, argv) => {
  const { orderId } = argv
  console.log(await kiwiCoin.cancelOrder(config.kiwiCoin, orderId))
})
