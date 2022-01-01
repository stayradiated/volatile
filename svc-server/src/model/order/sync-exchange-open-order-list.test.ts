import db from 'zapatos/db'
import { throwIfError } from '@stayradiated/error-boundary'

import { test, mockUserExchangeAPI } from '../../test-util/index.js'

import { syncExchangeOpenOrderList } from './sync-exchange-open-order-list.js'

test('sync open orders for user/exchange', async (t) => {
  const { pool, make } = t.context

  const userUID = await make.user()
  const exchangeUID = await make.exchange()
  const primaryCurrency = await make.primaryCurrency()
  const secondaryCurrency = await make.secondaryCurrency()

  await make.order({
    orderID: 'order-a',
    type: 'BUY',
    price: 900,
    volume: 6,
    value: 5400,
    closedAt: undefined,
  })

  const userExchangeAPI = mockUserExchangeAPI()

  userExchangeAPI.getOpenOrders.resolves([
    {
      orderID: 'order-b',
      type: 'BUY',
      primaryCurrency,
      secondaryCurrency,
      price: 1000,
      volume: 5,
      openedAt: new Date(),
    },
  ])

  await throwIfError(
    syncExchangeOpenOrderList(pool, {
      userUID,
      exchangeUID,
      userExchangeAPI,
    }),
  )

  const orderList = await db
    .select(
      'order',
      {
        user_uid: userUID,
        exchange_uid: exchangeUID,
      },
      {
        order: { by: 'opened_at', direction: 'ASC' },
      },
    )
    .run(pool)

  t.is(orderList.length, 2)

  t.like(orderList[0], {
    type: 'BUY',
    price: 900,
    volume: 6,
    value: 5400,
    order_id: 'order-a',
    user_uid: userUID,
    exchange_uid: exchangeUID,
    primary_currency: primaryCurrency,
    secondary_currency: secondaryCurrency,
  })
  t.not(orderList[0]!.closed_at, null)

  t.like(orderList[1], {
    type: 'BUY',
    price: 1000,
    volume: 5,
    value: 5000,
    order_id: 'order-b',
    user_uid: userUID,
    exchange_uid: exchangeUID,
    closed_at: null,
    primary_currency: primaryCurrency,
    secondary_currency: secondaryCurrency,
  })
})
