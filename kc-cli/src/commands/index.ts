import { CommandModule } from 'yargs'

import * as autoBuy from './auto-buy/index.js'
import * as balance from './balance/index.js'
import * as buy from './buy/index.js'
import * as cancelOrder from './cancel-order/index.js'
import * as openOrders from './open-orders/index.js'
import * as orderBook from './order-book/index.js'
import * as sell from './sell/index.js'
import * as stats from './stats/index.js'
import * as ticker from './ticker/index.js'
import * as trades from './trades/index.js'
import * as watchPrice from './watch-price/index.js'

const commandsList: Array<CommandModule<any, any>> = [
  autoBuy,
  balance,
  buy,
  cancelOrder,
  openOrders,
  orderBook,
  sell,
  stats,
  ticker,
  trades,
  watchPrice,
]

// Force type to CommandModule to fix typescript error
const commands = commandsList as unknown as CommandModule<
  Record<string, unknown>,
  any
>

export { commands }
