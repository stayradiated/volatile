import anyTest, { TestInterface } from 'ava'

import { pool } from '../pool.js'
import type { Pool } from '../types.js'
import { createMakeInstance, MakeInstance } from './make.js'

const test = anyTest as TestInterface<{
  pool: Pool
  make: MakeInstance
}>

test.beforeEach((t) => {
  t.context.pool = pool
  t.context.make = createMakeInstance()
})

export { test }
