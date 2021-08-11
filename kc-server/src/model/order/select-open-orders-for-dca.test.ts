import { DateTime } from 'luxon'
import { throwIfError } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { selectOpenOrdersForDCA } from './select-open-orders-for-dca.js'
import { updateOrder } from './update-order.js'
import type { Order } from './types.js'

test('selectOpenOrdersForDCA: should return open orders', async (t) => {
  const { pool, make } = t.context
  const dcaOrderUID = await make.dcaOrder()
  const orderUID = await make.order()
  await make.dcaOrderHistory()

  const rows = await throwIfError<Order[]>(
    selectOpenOrdersForDCA(pool, { dcaOrderUID }),
  )

  t.is(1, rows.length)
  t.is(orderUID, rows[0]?.UID)
})

test('selectOpenOrdersForDCA: should not return closed orders', async (t) => {
  const { pool, make } = t.context
  const dcaOrderUID = await make.dcaOrder()
  const orderUID = await make.order()
  await make.dcaOrderHistory()

  await updateOrder(pool, {
    UID: orderUID,
    closedAt: DateTime.local(),
  })

  const rows = await throwIfError<Order[]>(
    selectOpenOrdersForDCA(pool, { dcaOrderUID }),
  )

  t.is(0, rows.length)
})
