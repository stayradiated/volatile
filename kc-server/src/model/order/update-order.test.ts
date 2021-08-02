import { DateTime } from 'luxon'
import * as db from 'zapatos/db'
import { throwIfError } from '@stayradiated/error-boundary'

import test from '../../test-util/ava.js'

import { updateOrder } from './update-order.js'

test('updatedOrder', async (t) => {
  const { pool, make } = t.context
  const orderUID = await make.order()

  const input = {
    UID: orderUID,
    closedAt: DateTime.local(),
  }

  await throwIfError(updateOrder(pool, input))

  const row = await db.selectExactlyOne('order', { uid: orderUID }).run(pool)

  t.is(input.closedAt.valueOf(), DateTime.fromISO(row.closed_at!).valueOf())
})
