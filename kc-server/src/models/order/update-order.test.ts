import { inspect } from 'util'
import { DateTime } from 'luxon'
import * as db from 'zapatos/db'

import test from '../../test-utils/ava.js'

import { updateOrder } from './update-order.js'

test('updatedOrder', async (t) => {
  const { pool, make } = t.context
  const orderUID = await make.order()

  const input = {
    UID: orderUID,
    closedAt: DateTime.local(),
  }

  const result = await updateOrder(pool, input)
  if (result instanceof Error) {
    t.fail(inspect(result))
    return
  }

  const row = await db.selectExactlyOne('order', { uid: orderUID }).run(pool)

  t.is(input.closedAt.valueOf(), DateTime.fromISO(row.closed_at!).valueOf())
})
