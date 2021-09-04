import { test } from '../../test-util/ava.js'

import { calculateValueToBid } from './calculate-value-to-bid.js'

test('no other orders', async (t) => {
  const { pool, make } = t.context

  const userExchangeKeysUID = await make.userExchangeKeys()
  const dcaOrderUID = await make.dcaOrder({ maxValue: undefined })

  const targetValue = 200
  const availableBalance = 200

  const result = await calculateValueToBid(pool, {
    dcaOrderUID,
    userExchangeKeysUID,
    targetValue,
    availableBalance,
  })

  t.is(result, targetValue)
})

test('sharing with 3 other orders for $50', async (t) => {
  const { pool, make } = t.context

  const userExchangeKeysUID = await make.userExchangeKeys()
  const dcaOrderUID = await make.dcaOrder({ maxValue: undefined })

  await make.dcaOrder()
  await make.order({ closedAt: undefined, volume: 0.005, price: 10_000 })
  await make.dcaOrderHistory({ targetValue: 100 })
  await make.order({ closedAt: undefined, volume: 0.0025, price: 20_000 })
  await make.dcaOrderHistory({ targetValue: 100 })

  await make.dcaOrder()
  await make.order({ closedAt: undefined, volume: 0.001_25, price: 40_000 })
  await make.dcaOrderHistory({ targetValue: 100 })

  const targetValue = 200
  const availableBalance = 300

  const result = await calculateValueToBid(pool, {
    dcaOrderUID,
    userExchangeKeysUID,
    targetValue,
    availableBalance,
  })

  t.is(result, 180)
})
