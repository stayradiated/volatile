import { test } from '../../test-util/ava.js'

import { calculateValueToBid } from './calculate-value-to-bid.js'

test('no other orders', async (t) => {
  const { pool, make } = t.context

  const userExchangeKeysUid = await make.userExchangeKeys()
  const dcaOrderUid = await make.dcaOrder({ maxValue: undefined })

  const targetValue = 200
  const availableBalance = 200

  const result = await calculateValueToBid(pool, {
    dcaOrderUid,
    userExchangeKeysUid,
    targetValue,
    availableBalance,
  })

  t.is(result, targetValue)
})

test('sharing with 3 other orders for $50', async (t) => {
  const { pool, make } = t.context

  const userExchangeKeysUid = await make.userExchangeKeys()
  const dcaOrderUid = await make.dcaOrder({ maxValue: undefined })

  await make.dcaOrder()
  await make.order({ closedAt: undefined, value: 50 })
  await make.dcaOrderHistory({ targetValue: 100 })
  await make.order({ closedAt: undefined, value: 50 })
  await make.dcaOrderHistory({ targetValue: 100 })

  await make.dcaOrder()
  await make.order({ closedAt: undefined, value: 50 })
  await make.dcaOrderHistory({ targetValue: 100 })

  const targetValue = 200
  const availableBalance = 300

  const result = await calculateValueToBid(pool, {
    dcaOrderUid,
    userExchangeKeysUid,
    targetValue,
    availableBalance,
  })

  t.is(result, 180)
})
