/* eslint-disable fp/no-throw */

import { randomUUID } from 'crypto'
import { DateTime } from 'luxon'
import { once } from 'rambda'

import { createUser } from '../models/user/index.js'
import { getExchangeUID, EXCHANGE_KIWI_COIN } from '../models/exchange/index.js'
import { getMarketUID, MARKET_KIWI_COIN } from '../models/market/index.js'
import { insertDCAOrder } from '../models/dca-order/index.js'
import { insertOrder } from '../models/order/index.js'
import { insertDCAOrderHistory } from '../models/dca-order-history/index.js'
import { insertUserExchangeKeys } from '../models/user-exchange-keys/index.js'
import { insertTrade } from '../models/trade/index.js'
import { pool } from '../pool.js'
import { round } from '../utils/round.js'

type MakeInstanceFn = () => Promise<string>

type MakeInstance = {
  user: MakeInstanceFn
  exchange: MakeInstanceFn
  userExchangeKeys: MakeInstanceFn
  market: MakeInstanceFn
  dcaOrder: MakeInstanceFn
  dcaOrderHistory: MakeInstanceFn
  order: MakeInstanceFn
  trade: MakeInstanceFn
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

const makeUserExchangeKeys: MakeFn = (make) =>
  once(async () => {
    const userUID = await make.user()
    const exchangeUID = await make.exchange()

    const userExchangeKeys = await insertUserExchangeKeys(pool, {
      userUID,
      exchangeUID,
      keys: { a: '1', b: '2', c: '3' },
      description: 'description',
      invalidatedAt: undefined,
    })
    if (userExchangeKeys instanceof Error) {
      throw userExchangeKeys
    }

    return userExchangeKeys.UID
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
    const userExchangeKeysUID = await make.userExchangeKeys()
    const marketUID = await make.market()

    const dcaOrder = await insertDCAOrder(pool, {
      userUID,
      exchangeUID,
      userExchangeKeysUID,
      marketUID,
      startAt: DateTime.local(),
      marketOffset: round(2, Math.random() * -100),
      dailyAverage: round(0, Math.random() * 1000),
      minPriceNZD: round(0, Math.random() * 100),
      maxPriceNZD: round(0, Math.random() * 10_000),
      minAmountNZD: round(0, Math.random() * 100),
      maxAmountNZD: round(0, Math.random() * 10_000),
    })
    if (dcaOrder instanceof Error) {
      throw dcaOrder
    }

    return dcaOrder.UID
  })

const makeTrade: MakeFn = (make) =>
  once(async () => {
    const userUID = await make.user()
    const exchangeUID = await make.exchange()
    const orderUID = await make.order()

    const trade = await insertTrade(pool, {
      userUID,
      exchangeUID,
      orderUID,
      tradeID: randomUUID(),
      symbol: 'BTC',
      amount: round(6, Math.random()),
      type: Math.random() > 0.5 ? 'BUY' : 'SELL',
      priceNZD: round(2, Math.random() * 100_000),
      totalNZD: round(2, Math.random() * 100_000),
      feeNZD: round(2, Math.random() * 10),
      timestamp: DateTime.local(),
    })
    if (trade instanceof Error) {
      throw trade
    }

    return trade.UID
  })

const makeOrder: MakeFn = (make) =>
  once(async () => {
    const userUID = await make.user()
    const exchangeUID = await make.exchange()

    const order = await insertOrder(pool, {
      userUID,
      exchangeUID,
      symbol: 'BTC',
      priceNZD: round(2, Math.random() * 100_000),
      orderID: randomUUID(),
      amount: round(6, Math.random()),
      type: Math.random() > 0.5 ? 'BUY' : 'SELL',
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
      marketPriceNZD: round(2, Math.random() * 100_000),
      marketOffset: round(4, Math.random() * -10 + 2),
      calculatedAmountNZD: round(2, Math.random() * 100),
      availableBalanceNZD: round(2, Math.random() * 20_000),
      description: 'test entry',
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
  instance.userExchangeKeys = makeUserExchangeKeys(instance)
  instance.market = makeMarket(instance)
  instance.dcaOrder = makeDCAOrder(instance)
  instance.dcaOrderHistory = makeDCAOrderHistory(instance)
  instance.order = makeOrder(instance)
  instance.trade = makeTrade(instance)

  return instance
}

export { createMakeInstance, MakeInstance }
