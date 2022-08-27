import type { CommandModule } from 'yargs'

import * as dcaOrders from './dca-orders/index.js'
import * as marketPrice from './market-price/index.js'
import * as openOrders from './open-orders/index.js'
import * as trades from './trades/index.js'

const commandsList: Array<CommandModule<any, any>> = [
  trades,
  openOrders,
  dcaOrders,
  marketPrice,
]

// Force type to CommandModule to fix typescript error
const commands = commandsList as unknown as CommandModule<
  Record<string, unknown>,
  any
>

export { commands }
