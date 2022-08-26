import test from 'ava'
import { assertOk } from '@stayradiated/error-boundary'

import { getAllOrders } from './get-all-orders.js'

test('should get all orders', async (t) => {
  const [result] = await getAllOrders({
    primaryCurrencyCode: 'Xbt',
    secondaryCurrencyCode: 'Nzd',
  })
  assertOk(result)

  t.true(Array.isArray(result.BuyOrders))
  t.true(Array.isArray(result.SellOrders))
  t.is(result.PrimaryCurrencyCode, 'Xbt')
  t.is(result.SecondaryCurrencyCode, 'Nzd')
  t.is(typeof result.CreatedTimestampUtc, 'string')

  const buyOrder = result.BuyOrders[0]!
  t.is(typeof buyOrder.Guid, 'string')
  t.is(typeof buyOrder.Price, 'number')
  t.is(typeof buyOrder.Volume, 'number')

  const sellOrder = result.SellOrders[0]!
  t.is(typeof sellOrder.Guid, 'string')
  t.is(typeof sellOrder.Price, 'number')
  t.is(typeof sellOrder.Volume, 'number')
})
