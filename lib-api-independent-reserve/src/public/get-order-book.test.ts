import test from 'ava'
import { assertOk } from '@stayradiated/error-boundary'

import { getOrderBook } from './get-order-book.js'

test('should get order book', async (t) => {
  const [result] = await getOrderBook({
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
  t.is(buyOrder.OrderType, 'LimitBid')
  t.is(typeof buyOrder.Price, 'number')
  t.is(typeof buyOrder.Volume, 'number')

  const sellOrder = result.SellOrders[0]!
  t.is(sellOrder.OrderType, 'LimitOffer')
  t.is(typeof sellOrder.Price, 'number')
  t.is(typeof sellOrder.Volume, 'number')
})
