import { CommandModule } from 'yargs'

import * as trades from './trades/index.js'
import * as openOrders from './open-orders/index.js'
import * as dcaOrders from './dca-orders/index.js'

const commandsList: Array<CommandModule<any, any>> = [trades, openOrders, dcaOrders]

// Force type to CommandModule to fix typescript error
const commands = commandsList as unknown as CommandModule<
  Record<string, unknown>,
  any
>

export { commands }
