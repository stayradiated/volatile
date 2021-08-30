import { test } from '../../test-util/ava.js'

import { calculateAmountNZDToBid } from './calculate-amount-nzd-to-bid.js'

test('no other orders', async (t) => {
  const { pool, make } = t.context

  const userExchangeKeysUID = await make.userExchangeKeys()
  const dcaOrderUID = await make.dcaOrder({ maxAmountNZD: undefined })

  const targetAmountNZD = 200
  const availableBalanceNZD = 200

  const result = await calculateAmountNZDToBid(pool, {
    dcaOrderUID,
    userExchangeKeysUID,
    targetAmountNZD,
    availableBalanceNZD,
  })

  t.is(result, targetAmountNZD)
})

test('sharing with 3 other orders for $50', async (t) => {
  const { pool, make } = t.context

  const userExchangeKeysUID = await make.userExchangeKeys()
  const dcaOrderUID = await make.dcaOrder({ maxAmountNZD: undefined })

  await make.dcaOrder()
  await make.order({ closedAt: undefined, amount: 0.005, priceNZD: 10_000 })
  await make.dcaOrderHistory({ targetAmountNZD: 100 })
  await make.order({ closedAt: undefined, amount: 0.0025, priceNZD: 20_000 })
  await make.dcaOrderHistory({ targetAmountNZD: 100 })

  await make.dcaOrder()
  await make.order({ closedAt: undefined, amount: 0.001_25, priceNZD: 40_000 })
  await make.dcaOrderHistory({ targetAmountNZD: 100 })

  const targetAmountNZD = 200
  const availableBalanceNZD = 300

  const result = await calculateAmountNZDToBid(pool, {
    dcaOrderUID,
    userExchangeKeysUID,
    targetAmountNZD,
    availableBalanceNZD,
  })

  t.is(result, 180)
})
