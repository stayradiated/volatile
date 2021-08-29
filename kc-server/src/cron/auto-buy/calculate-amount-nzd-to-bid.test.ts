import { throwIfError } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { selectDCAOrder, DCAOrder } from '../../model/dca-order/index.js'
import { calculateAmountNZDToBid } from './calculate-amount-nzd-to-bid.js'

test('no other orders', async (t) => {
  const {pool, make} = t.context

  const dcaOrderUID = await make.dcaOrder({ maxAmountNZD: undefined })
  const dcaOrder = await throwIfError<DCAOrder>(selectDCAOrder(pool, dcaOrderUID))

  const goalAmountNZD = 200
  const availableBalanceNZD = 200

  const result = await calculateAmountNZDToBid(pool, {
    dcaOrder,
    goalAmountNZD,
    availableBalanceNZD
  })

  t.is(result, goalAmountNZD)
})

test('sharing with 3 other orders for $50', async (t) => {
  const {pool, make} = t.context

  const dcaOrderUID = await make.dcaOrder({ maxAmountNZD: undefined })
  const dcaOrder = await throwIfError<DCAOrder>(selectDCAOrder(pool, dcaOrderUID))

  await make.dcaOrder()
  await make.order({ closedAt: undefined, amount: 0.005, priceNZD: 10000 })
  await make.dcaOrderHistory({ calculatedAmountNZD: 100 })
  await make.order({ closedAt: undefined, amount: 0.0025, priceNZD: 20000 })
  await make.dcaOrderHistory({ calculatedAmountNZD: 100 })

  await make.dcaOrder()
  await make.order({ closedAt: undefined, amount: 0.00125, priceNZD: 40000 })
  await make.dcaOrderHistory({ calculatedAmountNZD: 100 })

  const goalAmountNZD = 200
  const availableBalanceNZD = 300

  const result = await calculateAmountNZDToBid(pool, {
    dcaOrder,
    goalAmountNZD,
    availableBalanceNZD
  })

  t.is(result, 180)
})
