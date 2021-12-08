import { randomUUID } from 'crypto'
import { DateTime } from 'luxon'
import { throwIfError } from '@stayradiated/error-boundary'

import { getExchangeUID, EXCHANGE_KIWI_COIN } from '../model/exchange/index.js'
import { getMarketUID, MARKET_KIWI_COIN } from '../model/market/index.js'
import { upsertCurrency, Currency } from '../model/currency/index.js'
import { insertMarketPrice, MarketPrice } from '../model/market-price/index.js'
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

  primaryCurrency: MakeInstanceFn<Currency>
  primaryCurrencySymbol?: string

  secondaryCurrency: MakeInstanceFn<Currency>
  secondaryCurrencySymbol?: string

  exchange: MakeInstanceFn
  exchangeUID?: string

  userExchangeKeys: MakeInstanceFn
  userExchangeKeysUID?: string

  market: MakeInstanceFn
  marketUID?: string

  marketPrice: MakeInstanceFn<MarketPrice>
  marketPriceUID?: string

  dcaOrder: MakeInstanceFn<DCAOrder>
  dcaOrderUID?: string

  dcaOrderHistory: MakeInstanceFn<DCAOrderHistory>
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

const makePrimaryCurrency: MakeFn<Currency> = (make) => async (options) => {
  const name = options?.name ?? 'Bitcoin'
  const symbol = options?.symbol ?? 'BTC'
  await throwIfError<void>(upsertCurrency(pool, { name, symbol }))
  make.primaryCurrencySymbol = symbol
  return symbol
}

const makeSecondaryCurrency: MakeFn<Currency> = (make) => async (options) => {
  const name = options?.name ?? 'New Zealand Dollar'
  const symbol = options?.symbol ?? 'NZD'
  await throwIfError<void>(upsertCurrency(pool, { name, symbol }))
  make.secondaryCurrencySymbol = symbol
  return symbol
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

const makeMarketPrice: MakeFn<MarketPrice> = (make) => async (options) => {
  const { marketUID = await make.market() } = make

  const sourcePrice = round(2, Math.random() * 1_000_000)
  const fxRate = round(6, Math.random() * 3)
  const price = sourcePrice * fxRate
  const timestamp = DateTime.local()

  await throwIfError(
    insertMarketPrice(pool, {
      timestamp,
      marketUID,
      assetSymbol: 'BTC',
      sourceCurrency: 'USD',
      sourcePrice,
      fxRate,
      price,
      currency: 'NZD',
      ...options,
    }),
  )

  make.marketPriceUID = timestamp.toISO()

  return timestamp.toISO()
}

const makeDCAOrder: MakeFn<DCAOrder> = (make) => async (options) => {
  const {
    userUID = await make.user(),
    exchangeUID = await make.exchange(),
    userExchangeKeysUID = await make.userExchangeKeys(),
    marketUID = await make.market(),
    primaryCurrencySymbol = await make.primaryCurrency(),
    secondaryCurrencySymbol = await make.secondaryCurrency(),
  } = make

  const dcaOrder = await throwIfError<DCAOrder>(
    insertDCAOrder(pool, {
      userUID,
      exchangeUID,
      userExchangeKeysUID,
      marketUID,
      primaryCurrency: primaryCurrencySymbol,
      secondaryCurrency: secondaryCurrencySymbol,
      startAt: DateTime.local(),
      marketOffset: round(2, Math.random() * -100),
      dailyAverage: round(0, Math.random() * 1000),
      minPrice: round(0, Math.random() * 100),
      maxPrice: round(0, Math.random() * 10_000),
      minValue: round(0, Math.random() * 100),
      maxValue: round(0, Math.random() * 10_000),
      enabledAt: DateTime.local(),
      ...options,
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

  const volume = round(6, Math.random())
  const price = round(2, Math.random() * 100_000)
  const value = volume * price
  const fee = round(2, Math.random() * 10)
  const totalValue = value + fee

  const trade = await throwIfError<Trade>(
    insertTrade(pool, {
      userUID,
      exchangeUID,
      orderUID,
      tradeID: randomUUID(),
      primaryCurrency: 'BTC',
      secondaryCurrency: 'NZD',
      type: Math.random() > 0.5 ? 'BUY' : 'SELL',
      timestamp: DateTime.local(),
      volume,
      price,
      value,
      fee,
      totalValue,
    }),
  )

  make.tradeUID = trade.UID

  return trade.UID
}

const makeOrder: MakeFn<InsertOrderOptions> = (make) => async (options) => {
  const { userUID = await make.user(), exchangeUID = await make.exchange() } =
    make

  const price = round(2, Math.random() * 100_000)
  const volume = round(6, Math.random())
  const value = price * volume

  const order = await throwIfError<Order>(
    insertOrder(pool, {
      userUID,
      exchangeUID,
      primaryCurrency: 'BTC',
      secondaryCurrency: 'NZD',
      orderID: randomUUID(),
      price,
      volume,
      value,
      type: Math.random() > 0.5 ? 'BUY' : 'SELL',
      openedAt: DateTime.local(),
      closedAt: undefined,
      ...options,
    }),
  )

  make.orderUID = order.UID

  return order.UID
}

const makeDCAOrderHistory: MakeFn<DCAOrderHistory> =
  (make) => async (options) => {
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
        primaryCurrency: 'BTC',
        secondaryCurrency: 'NZD',
        marketPrice: round(2, Math.random() * 100_000),
        marketOffset: round(4, Math.random() * -10 + 2),
        targetValue: round(2, Math.random() * 100),
        value: round(2, Math.random() * 100),
        availableBalance: round(2, Math.random() * 20_000),
        description: 'test entry',
        ...options,
      }),
    )

    make.dcaOrderHistoryUID = dcaOrderHistory.UID

    return dcaOrderHistory.UID
  }

const createMakeInstance = () => {
  const instance: MakeInstance = {} as unknown as MakeInstance

  instance.user = makeUser(instance)
  instance.primaryCurrency = makePrimaryCurrency(instance)
  instance.secondaryCurrency = makeSecondaryCurrency(instance)
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
