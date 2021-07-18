import anyTest, { TestInterface } from 'ava'

import { pool } from '../pool.js'
import type { Pool } from '../types.js'
import * as make from './make.js'

const test = anyTest as TestInterface<{
  pool: Pool
  makeUser: () => Promise<string>
  makeExchange: () => Promise<string>
  makeMarket: () => Promise<string>
}>

test.before((t) => {
  t.context.pool = pool
  t.context.makeUser = make.user
  t.context.makeExchange = make.exchange
  t.context.makeMarket = make.market
})

export default test
