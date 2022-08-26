import type { TestFn } from 'ava'
import anyTest from 'ava'

import { pool } from '../pool.js'
import type { Pool } from '../types.js'
import type { MakeInstance } from './make.js'
import { createMakeInstance } from './make.js'

type DefaultContext = {
  pool: Pool
  make: MakeInstance
}

const test = anyTest as TestFn<DefaultContext>

test.beforeEach((t) => {
  t.context.pool = pool
  t.context.make = createMakeInstance()
})

export { test }
export type { DefaultContext }
