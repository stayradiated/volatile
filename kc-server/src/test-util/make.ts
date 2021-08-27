import { randomUUID } from 'crypto'
import { DateTime } from 'luxon'
import { throwIfError } from '@stayradiated/error-boundary'

import { getExchangeUID, EXCHANGE_KIWI_COIN } from '../model/exchange/index.js'
import { getMarketUID, MARKET_KIWI_COIN } from '../model/market/index.js'
import { insertMarketPrice } from '../model/market-price/index.js'
import { insertDCAOrder, DCAOrder } from '../model/dca-order/index.js'
import {
  insertDCAOrderHistory,
  DCAOrderHistory,
} from '../model/dca-order-history/index.js'
import { insertOrder, Order, InsertOrderOptions } from '../model/order/index.js'
import { insertTrade, Trade } from '../model/trade/index.js'
import { insertUser, User } from '../model/user/index.js'
import {
  insertUserExchangeKeys,
  UserExchangeKeys,
} from '../model/user-exchange-keys/index.js'
import { pool } from '../pool.js'
import { round } from '../util/round.js'

type MakeInstanceFn<T = void> = (options?: Partial<T>) => Promise<string>

type MakeInstance = {
  user: MakeInstanceFn
  userUID?: string

  exchange: MakeInstanceFn
  exchangeUID?: string

  userExchangeKeys: MakeInstanceFn
  userExchangeKeysUID?: string

  market: MakeInstanceFn
  marketUID?: string

  marketPrice: MakeInstanceFn
  marketPriceUID?: string

  dcaOrder: MakeInstanceFn
  dcaOrderUID?: string

  dcaOrderHistory: MakeInstanceFn
  dcaOrderHistoryUID?: string

  order: MakeInstanceFn<InsertOrderOptions>
  orderUID?: string

  trade: MakeInstanceFn
  tradeUID?: string
}

type MakeFn<T = void> = (instance: MakeInstance) => MakeInstanceFn<T>

const makeUser: MakeFn = (make) => async () => {
  const email = `${randomUUID()}@domain`

  const user = await throwIfError<User>(
    insertUser(pool, {
      email,
      password: 'password',
    }),
  )

  make.userUID = user.UID

  return user.UID
}

const makeExchange: MakeFn = (make) => async () => {
  const exchangeUID = await throwIfError<string>(
    getExchangeUID(pool, EXCHANGE_KIWI_COIN),
  )

  make.exchangeUID = exchangeUID

  return exchangeUID
}

const makeUserExchangeKeys: MakeFn = (make) => async () => {
  const { userUID = await make.user(), exchangeUID = await make.exchange() } =
    make

  const userExchangeKeys = await throwIfError<UserExchangeKeys>(
    insertUserExchangeKeys(pool, {
      userUID,
      exchangeUID,
      keys: { a: '1', b: '2', c: '3' },
      description: 'description',
      invalidatedAt: undefined,
    }),
  )

  make.userExchangeKeysUID = userExchangeKeys.UID

  return userExchangeKeys.UID
}

const makeMarket: MakeFn = (make) => async () => {
  const marketUID = await throwIfError<string>(
    getMarketUID(pool, MARKET_KIWI_COIN),
  )

  make.marketUID = marketUID

  return marketUID
}

const makeMarketPrice: MakeFn = (make) => async () => {
  const { marketUID = await make.market() } = make

  const price = round(2, Math.random() * 1_000_000)
  const fxRate = round(6, Math.random() * 3)
  const priceNZD = price * fxRate
  const timestamp = DateTime.local()

  await throwIfError(
    insertMarketPrice(pool, {
      timestamp,
      marketUID,
      assetSymbol: 'BTC',
      currency: 'USD',
      fxRate,
      price,
      priceNZD,
    }),
  )

  make.marketPriceUID = timestamp.toISO()

  return timestamp.toISO()
}

const makeDCAOrder: MakeFn = (make) => async () => {
  const {
    userUID = await make.user(),
    exchangeUID = await make.exchange(),
    userExchangeKeysUID = await make.userExchangeKeys(),
    marketUID = await make.market(),
  } = make

  const dcaOrder = await throwIfError<DCAOrder>(
    insertDCAOrder(pool, {
      userUID,
      exchangeUID,
      userExchangeKeysUID,
      marketUID,
      assetSymbol: 'BTC',
      startAt: DateTime.local(),
      marketOffset: round(2, Math.random() * -100),
      dailyAverage: round(0, Math.random() * 1000),
      minPriceNZD: round(0, Math.random() * 100),
      maxPriceNZD: round(0, Math.random() * 10_000),
      minAmountNZD: round(0, Math.random() * 100),
      maxAmountNZD: round(0, Math.random() * 10_000),
      enabledAt: DateTime.local(),
    }),
  )

  make.dcaOrderUID = dcaOrder.UID

  return dcaOrder.UID
}

const makeTrade: MakeFn = (make) => async () => {
  const {
    userUID = await make.user(),
    exchangeUID = await make.exchange(),
    orderUID = await make.order(),
  } = make

  const trade = await throwIfError<Trade>(
    insertTrade(pool, {
      userUID,
      exchangeUID,
      orderUID,
      tradeID: randomUUID(),
      assetSymbol: 'BTC',
      amount: round(6, Math.random()),
      type: Math.random() > 0.5 ? 'BUY' : 'SELL',
      priceNZD: round(2, Math.random() * 100_000),
      totalNZD: round(2, Math.random() * 100_000),
      feeNZD: round(2, Math.random() * 10),
      timestamp: DateTime.local(),
    }),
  )

  make.tradeUID = trade.UID

  return trade.UID
}

const makeOrder: MakeFn<InsertOrderOptions> = (make) => async (options) => {
  const { userUID = await make.user(), exchangeUID = await make.exchange() } =
    make

  const order = await throwIfError<Order>(
    insertOrder(pool, {
      userUID,
      exchangeUID,
      assetSymbol: 'BTC',
      priceNZD: round(2, Math.random() * 100_000),
      orderID: randomUUID(),
      amount: round(6, Math.random()),
      type: Math.random() > 0.5 ? 'BUY' : 'SELL',
      openedAt: DateTime.local(),
      closedAt: undefined,
      ...options,
    }),
  )

  make.orderUID = order.UID

  return order.UID
}

const makeDCAOrderHistory: MakeFn = (make) => async () => {
  const {
    userUID = await make.user(),
    dcaOrderUID = await make.dcaOrder(),
    orderUID = await make.order(),
  } = make

  const dcaOrderHistory = await throwIfError<DCAOrderHistory>(
    insertDCAOrderHistory(pool, {
      userUID,
      dcaOrderUID,
      orderUID,
      assetSymbol: 'BTC',
      marketPriceNZD: round(2, Math.random() * 100_000),
      marketOffset: round(4, Math.random() * -10 + 2),
      calculatedAmountNZD: round(2, Math.random() * 100),
      availableBalanceNZD: round(2, Math.random() * 20_000),
      description: 'test entry',
    }),
  )

  make.dcaOrderHistoryUID = dcaOrderHistory.UID

  return dcaOrderHistory.UID
}

const createMakeInstance = () => {
  const instance: MakeInstance = {} as unknown as MakeInstance

  instance.user = makeUser(instance)
  instance.exchange = makeExchange(instance)
  instance.userExchangeKeys = makeUserExchangeKeys(instance)
  instance.market = makeMarket(instance)
  instance.marketPrice = makeMarketPrice(instance)
  instance.dcaOrder = makeDCAOrder(instance)
  instance.dcaOrderHistory = makeDCAOrderHistory(instance)
  instance.order = makeOrder(instance)
  instance.trade = makeTrade(instance)

  return instance
}

export { createMakeInstance, MakeInstance }
