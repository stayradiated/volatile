import { test, mockUserExchangeAPI, asError } from '../../test-util/index.js'

import { EXCHANGE_DASSET } from '../../model/exchange/index.js'
import { cancelPreviousOrders } from './cancel-previous-orders.js'

test('no previous orders → should do nothing', async (t) => {
  const { pool, make } = t.context

  const dcaOrderUID = await make.dcaOrder()

  const userExchangeAPI = mockUserExchangeAPI()

  const error = await cancelPreviousOrders(pool, {
    dcaOrderUID,
    userExchangeAPI,
  })

  t.is(error, undefined)
  t.is(userExchangeAPI.cancelOrder.callCount, 0)
})

test('one previous order → should cancel', async (t) => {
  const { pool, make } = t.context

  const dcaOrderUID = await make.dcaOrder()
  await make.order({ closedAt: undefined })
  await make.dcaOrderHistory()

  const userExchangeAPI = mockUserExchangeAPI()

  const error = await cancelPreviousOrders(pool, {
    dcaOrderUID,
    userExchangeAPI,
  })

  t.is(error, undefined)
  t.is(userExchangeAPI.cancelOrder.callCount, 1)
})

test('two previous orders → should cancel both', async (t) => {
  const { pool, make } = t.context

  const dcaOrderUID = await make.dcaOrder()

  await make.order({ closedAt: undefined })
  await make.dcaOrderHistory()

  await make.order({ closedAt: undefined })
  await make.dcaOrderHistory()

  const userExchangeAPI = mockUserExchangeAPI()

  const error = await cancelPreviousOrders(pool, {
    dcaOrderUID,
    userExchangeAPI,
  })

  t.is(error, undefined)
  t.is(userExchangeAPI.cancelOrder.callCount, 2)
})

test('fail to cancel order → should error', async (t) => {
  const { pool, make } = t.context

  const dcaOrderUID = await make.dcaOrder()

  await make.order({ closedAt: undefined })
  await make.dcaOrderHistory()

  const userExchangeAPI = mockUserExchangeAPI()
  userExchangeAPI.cancelOrder.rejects(new Error('Fail'))

  const error = await asError(
    cancelPreviousOrders(pool, {
      dcaOrderUID,
      userExchangeAPI,
    }),
  )

  t.is(error.message, 'E_MULTI: Caught 1 error: [Fail]')
  t.is(userExchangeAPI.cancelOrder.callCount, 1)
})

test('fail to cancel 3 orders on dasset → should error', async (t) => {
  const { pool, make } = t.context

  const dcaOrderUID = await make.dcaOrder()

  await make.order({ closedAt: undefined })
  await make.dcaOrderHistory()

  await make.order({ closedAt: undefined })
  await make.dcaOrderHistory()

  await make.order({ closedAt: undefined })
  await make.dcaOrderHistory()

  const userExchangeAPI = mockUserExchangeAPI(EXCHANGE_DASSET)
  userExchangeAPI.cancelOrder.rejects(new Error('Fail'))

  const error = await asError(
    cancelPreviousOrders(pool, {
      dcaOrderUID,
      userExchangeAPI,
    }),
  )

  t.is(error.message, 'E_MULTI: Caught 3 errors: [Fail, Fail, Fail]')
  t.is(userExchangeAPI.cancelOrder.callCount, 3)
})
