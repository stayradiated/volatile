import { randomUUID } from 'crypto'
import { DateTime } from 'luxon'
import { once } from 'rambda'
import { throwIfError } from '@stayradiated/error-boundary'

import { getExchangeUID, EXCHANGE_KIWI_COIN } from '../model/exchange/index.js'
import { getMarketUID, MARKET_KIWI_COIN } from '../model/market/index.js'
import { insertDCAOrder, DCAOrder } from '../model/dca-order/index.js'
import {
  insertDCAOrderHistory,
  DCAOrderHistory,
} from '../model/dca-order-history/index.js'
import { insertOrder, Order } from '../model/order/index.js'
import { insertTrade, Trade } from '../model/trade/index.js'
import { insertUser, User } from '../model/user/index.js'
import {
  insertUserExchangeKeys,
  UserExchangeKeys,
} from '../model/user-exchange-keys/index.js'
import { pool } from '../pool.js'
import { round } from '../util/round.js'

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

    const user = await throwIfError<User>(
      insertUser(pool, {
        email,
        password: 'password',
      }),
    )

    return user.UID
  })

const makeExchange: MakeFn = () =>
  once(async () => {
    const exchangeUID = await throwIfError<string>(
      getExchangeUID(pool, EXCHANGE_KIWI_COIN),
    )

    return exchangeUID
  })

const makeUserExchangeKeys: MakeFn = (make) =>
  once(async () => {
    const userUID = await make.user()
    const exchangeUID = await make.exchange()

    const userExchangeKeys = await throwIfError<UserExchangeKeys>(
      insertUserExchangeKeys(pool, {
        userUID,
        exchangeUID,
        keys: { a: '1', b: '2', c: '3' },
        description: 'description',
        invalidatedAt: undefined,
      }),
    )

    return userExchangeKeys.UID
  })

const makeMarket: MakeFn = () =>
  once(async () => {
    const marketUID = await throwIfError<string>(
      getMarketUID(pool, MARKET_KIWI_COIN),
    )

    return marketUID
  })

const makeDCAOrder: MakeFn = (make) =>
  once(async () => {
    const userUID = await make.user()
    const exchangeUID = await make.exchange()
    const userExchangeKeysUID = await make.userExchangeKeys()
    const marketUID = await make.market()

    const dcaOrder = await throwIfError<DCAOrder>(
      insertDCAOrder(pool, {
        userUID,
        exchangeUID,
        userExchangeKeysUID,
        marketUID,
        symbol: 'BTC',
        startAt: DateTime.local(),
        marketOffset: round(2, Math.random() * -100),
        dailyAverage: round(0, Math.random() * 1000),
        minPriceNZD: round(0, Math.random() * 100),
        maxPriceNZD: round(0, Math.random() * 10_000),
        minAmountNZD: round(0, Math.random() * 100),
        maxAmountNZD: round(0, Math.random() * 10_000),
      }),
    )

    return dcaOrder.UID
  })

const makeTrade: MakeFn = (make) =>
  once(async () => {
    const userUID = await make.user()
    const exchangeUID = await make.exchange()
    const orderUID = await make.order()

    const trade = await throwIfError<Trade>(
      insertTrade(pool, {
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
      }),
    )

    return trade.UID
  })

const makeOrder: MakeFn = (make) =>
  once(async () => {
    const userUID = await make.user()
    const exchangeUID = await make.exchange()

    const order = await throwIfError<Order>(
      insertOrder(pool, {
        userUID,
        exchangeUID,
        symbol: 'BTC',
        priceNZD: round(2, Math.random() * 100_000),
        orderID: randomUUID(),
        amount: round(6, Math.random()),
        type: Math.random() > 0.5 ? 'BUY' : 'SELL',
        openedAt: DateTime.local(),
        closedAt: undefined,
      }),
    )

    return order.UID
  })

const makeDCAOrderHistory: MakeFn = (make) =>
  once(async () => {
    const userUID = await make.user()
    const dcaOrderUID = await make.dcaOrder()
    const orderUID = await make.order()

    const order = await throwIfError<DCAOrderHistory>(
      insertDCAOrderHistory(pool, {
        userUID,
        dcaOrderUID,
        orderUID,
        symbol: 'BTC',
        marketPriceNZD: round(2, Math.random() * 100_000),
        marketOffset: round(4, Math.random() * -10 + 2),
        calculatedAmountNZD: round(2, Math.random() * 100),
        availableBalanceNZD: round(2, Math.random() * 20_000),
        description: 'test entry',
      }),
    )

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
