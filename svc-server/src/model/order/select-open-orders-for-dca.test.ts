import { subHours } from 'date-fns'
import { assertOk } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { selectOpenOrdersForDca } from './select-open-orders-for-dca.js'

test('selectOpenOrdersForDca: should return all open orders', async (t) => {
  const { pool, make } = t.context
  const dcaOrderUid = await make.dcaOrder()

  const orderA = await make.order({
    openedAt: subHours(new Date(), 2),
    closedAt: undefined,
  })
  await make.dcaOrderHistory()

  const orderB = await make.order({
    openedAt: subHours(new Date(), 1),
    closedAt: undefined,
  })
  await make.dcaOrderHistory()

  const orderC = await make.order({
    openedAt: new Date(),
    closedAt: undefined,
  })
  await make.dcaOrderHistory()

  const rows = await selectOpenOrdersForDca(pool, { dcaOrderUid })
  assertOk(rows)

  t.deepEqual(
    [orderA, orderB, orderC],
    rows.map((row) => row.uid),
  )
})

test('selectOpenOrdersForDca: should not return closed orders', async (t) => {
  const { pool, make } = t.context
  const dcaOrderUid = await make.dcaOrder()

  await make.order({
    openedAt: subHours(new Date(), 1),
    closedAt: new Date(),
  })
  await make.dcaOrderHistory()

  const rows = await selectOpenOrdersForDca(pool, { dcaOrderUid })
  assertOk(rows)

  t.is(0, rows.length)
})
