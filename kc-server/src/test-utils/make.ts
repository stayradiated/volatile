/* eslint-disable fp/no-throw */

import { randomUUID } from 'crypto'
import { DateTime } from 'luxon'
import { once } from 'rambda'

import { createUser } from '../models/user/index.js'
import { getExchangeUID, EXCHANGE_KIWI_COIN } from '../models/exchange/index.js'
import { getMarketUID, MARKET_KIWI_COIN } from '../models/market/index.js'
import { createDCAOrder } from '../models/dca-order/index.js'
import { insertOrder, OrderType } from '../models/order/index.js'
import { insertDCAOrderHistory } from '../models/dca-order-history/index.js'
import { pool } from '../pool.js'
import { round } from '../utils/round.js'

type MakeInstanceFn = () => Promise<string>

type MakeInstance = {
  user: MakeInstanceFn
  exchange: MakeInstanceFn
  market: MakeInstanceFn
  dcaOrder: MakeInstanceFn
  dcaOrderHistory: MakeInstanceFn
  order: MakeInstanceFn
}

type MakeFn = (instance: MakeInstance) => MakeInstanceFn

const makeUser: MakeFn = () =>
  once(async () => {
    const email = `${randomUUID()}@domain`

    const user = await createUser(pool, {
      email,
      password: 'password',
    })
    if (user instanceof Error) {
      throw user
    }

    return user.UID
  })

const makeExchange: MakeFn = () =>
  once(async () => {
    const exchangeUID = await getExchangeUID(pool, EXCHANGE_KIWI_COIN)
    if (exchangeUID instanceof Error) {
      throw exchangeUID
    }

    return exchangeUID
  })

const makeMarket: MakeFn = () =>
  once(async () => {
    const marketUID = await getMarketUID(pool, MARKET_KIWI_COIN)
    if (marketUID instanceof Error) {
      throw marketUID
    }

    return marketUID
  })

const makeDCAOrder: MakeFn = (make) =>
  once(async () => {
    const userUID = await make.user()
    const exchangeUID = await make.exchange()
    const marketUID = await make.market()

    const dcaOrder = await createDCAOrder(pool, {
      userUID,
      exchangeUID,
      marketUID,
      startAt: DateTime.local(),
      marketOffset: round(2, Math.random() * -100),
      dailyAverage: round(0, Math.random() * 1000),
      minPrice: round(0, Math.random() * 100),
      maxPrice: round(0, Math.random() * 10_000),
      minAmount: round(0, Math.random() * 100),
      maxAmount: round(0, Math.random() * 10_000),
    })
    if (dcaOrder instanceof Error) {
      throw dcaOrder
    }

    return dcaOrder.UID
  })

const makeOrder: MakeFn = (make) =>
  once(async () => {
    const userUID = await make.user()
    const exchangeUID = await make.exchange()

    const order = await insertOrder(pool, {
      userUID,
      exchangeUID,
      symbol: 'BTC',
      price: round(2, Math.random() * 100_000),
      ID: randomUUID(),
      amount: round(6, Math.random()),
      type: OrderType.BUY,
      openedAt: DateTime.local(),
      closedAt: undefined,
    })
    if (order instanceof Error) {
      throw order
    }

    return order.UID
  })

const makeDCAOrderHistory: MakeFn = (make) =>
  once(async () => {
    const userUID = await make.user()
    const dcaOrderUID = await make.dcaOrder()
    const orderUID = await make.order()

    const order = await insertDCAOrderHistory(pool, {
      userUID,
      dcaOrderUID,
      orderUID,
      marketPrice: round(2, Math.random() * 100_000),
      marketOffset: round(4, Math.random() * -10 + 2),
    })
    if (order instanceof Error) {
      throw order
    }

    return order.UID
  })

const createMakeInstance = () => {
  const instance: MakeInstance = {
    user: undefined,
    exchange: undefined,
    market: undefined,
    dcaOrder: undefined,
    order: undefined,
  } as unknown as MakeInstance

  instance.user = makeUser(instance)
  instance.exchange = makeExchange(instance)
  instance.market = makeMarket(instance)
  instance.dcaOrder = makeDCAOrder(instance)
  instance.dcaOrderHistory = makeDCAOrderHistory(instance)
  instance.order = makeOrder(instance)

  return instance
}

export { createMakeInstance, MakeInstance }
