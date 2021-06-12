import { CommandModule } from 'yargs'

import * as watchPrice from './watch-price/index.js'
import * as balance from './balance/index.js'
import * as buy from './buy/index.js'
import * as cancelOrder from './cancel-order/index.js'
import * as openOrders from './open-orders/index.js'
import * as orderBook from './order-book/index.js'
import * as sell from './sell/index.js'
import * as ticker from './ticker/index.js'
import * as trades from './trades/index.js'

const commandsList: Array<CommandModule<any, any>> = [
  watchPrice,
  balance,
  buy,
  cancelOrder,
  openOrders,
  orderBook,
  sell,
  ticker,
  trades,
]

// Force type to CommandModule to fix typescript error
const commands = commandsList as unknown as CommandModule<
  Record<string, unknown>,
  any
>

export { commands }
