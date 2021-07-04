import test from 'ava'

import pool from '../../pg-pool.js'
import { createUser } from './index.js'

test('createUser', async (t) => {
  const success = await createUser(pool, {
    email: 'user@domain.com',
    password: 'hunter2',
  })
  t.true(success)
})
