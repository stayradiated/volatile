import * as db from 'zapatos/db'
import { throwIfError } from '@stayradiated/error-boundary'
import { parseISO } from 'date-fns'

import { test } from '../../test-util/ava.js'

import { updateOrder } from './update-order.js'

test('updatedOrder', async (t) => {
  const { pool, make } = t.context
  const orderUID = await make.order()

  const input = {
    UID: orderUID,
    closedAt: new Date(),
  }

  await throwIfError(updateOrder(pool, input))

  const row = await db.selectExactlyOne('order', { uid: orderUID }).run(pool)

  t.is(input.closedAt.valueOf(), parseISO(row.closed_at!).valueOf())
})
