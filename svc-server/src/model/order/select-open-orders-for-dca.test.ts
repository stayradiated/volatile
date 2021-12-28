import { subHours } from 'date-fns'
import { throwIfError } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { selectOpenOrdersForDCA } from './select-open-orders-for-dca.js'
import type { Order } from './types.js'

test('selectOpenOrdersForDCA: should return all open orders', async (t) => {
  const { pool, make } = t.context
  const dcaOrderUID = await make.dcaOrder()

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

  const rows = await throwIfError<Order[]>(
    selectOpenOrdersForDCA(pool, { dcaOrderUID }),
  )

  t.is(3, rows.length)
  t.is(orderA, rows[0]!.UID)
  t.is(orderB, rows[1]!.UID)
  t.is(orderC, rows[2]!.UID)
})

test('selectOpenOrdersForDCA: should not return closed orders', async (t) => {
  const { pool, make } = t.context
  const dcaOrderUID = await make.dcaOrder()

  await make.order({
    openedAt: subHours(new Date(), 1),
    closedAt: new Date(),
  })
  await make.dcaOrderHistory()

  const rows = await throwIfError<Order[]>(
    selectOpenOrdersForDCA(pool, { dcaOrderUID }),
  )

  t.is(0, rows.length)
})
