import { inspect } from 'util'
import { DateTime } from 'luxon'

import test from '../../test-utils/ava.js'

import { selectOpenOrdersForDCA } from './select-open-orders-for-dca.js'
import { updateOrder } from './update-order.js'

test('selectOpenOrdersForDCA: should return open orders', async (t) => {
  const { pool, make } = t.context
  const dcaOrderUID = await make.dcaOrder()
  const orderUID = await make.order()
  await make.dcaOrderHistory()

  const rows = await selectOpenOrdersForDCA(pool, { dcaOrderUID })
  if (rows instanceof Error) {
    t.fail(inspect(rows))
    return
  }

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

  const rows = await selectOpenOrdersForDCA(pool, { dcaOrderUID })
  if (rows instanceof Error) {
    t.fail(inspect(rows))
    return
  }

  t.is(0, rows.length)
})
