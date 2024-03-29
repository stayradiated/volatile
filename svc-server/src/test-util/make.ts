import { randomUUID } from 'node:crypto'
import { assertOk } from '@stayradiated/error-boundary'
import { formatISO } from 'date-fns'

import { getExchangeUid } from '../model/exchange/index.js'
import type { Market } from '../model/market/index.js'
import { getMarketUid, MARKET_KIWI_COIN } from '../model/market/index.js'
import type { Balance } from '../model/balance/index.js'
import { upsertBalance } from '../model/balance/index.js'
import type { Currency } from '../model/currency/index.js'
import { upsertCurrency } from '../model/currency/index.js'
import type { MarketPrice } from '../model/market-price/index.js'
import { insertMarketPrice } from '../model/market-price/index.js'
import type { DcaOrder } from '../model/dca-order/index.js'
import { insertDcaOrder } from '../model/dca-order/index.js'
import type { DcaOrderHistory } from '../model/dca-order-history/index.js'
import { insertDcaOrderHistory } from '../model/dca-order-history/index.js'
import type { InsertOrderOptions } from '../model/order/index.js'
import { insertOrder } from '../model/order/index.js'
import { insertTrade } from '../model/trade/index.js'
import { insertUser } from '../model/user/index.js'
import { insertUserExchangeKeys } from '../model/user-exchange-keys/index.js'
import type { UserDevice } from '../model/user-device/index.js'
import { upsertUserDevice } from '../model/user-device/index.js'
import { pool } from '../pool.js'
import { round } from '../util/round.js'

type MakeInstanceFn<T = void> = (options?: Partial<T>) => Promise<string>

type MakeInstance = {
  user: MakeInstanceFn
  userUid?: string

  balance: MakeInstanceFn<Balance>
  balanceUid?: string

  primaryCurrency: MakeInstanceFn<Currency>
  primaryCurrencySymbol?: string

  secondaryCurrency: MakeInstanceFn<Currency>
  secondaryCurrencySymbol?: string

  exchange: MakeInstanceFn
  exchangeUid?: string

  userExchangeKeys: MakeInstanceFn
  userExchangeKeysUid?: string

  market: MakeInstanceFn<Market>
  marketUid?: string

  marketPrice: MakeInstanceFn<MarketPrice>
  marketPriceUid?: string

  dcaOrder: MakeInstanceFn<DcaOrder>
  dcaOrderUid?: string

  dcaOrderHistory: MakeInstanceFn<DcaOrderHistory>
  dcaOrderHistoryUid?: string

  order: MakeInstanceFn<InsertOrderOptions>
  orderUid?: string

  trade: MakeInstanceFn
  tradeUid?: string

  userDevice: MakeInstanceFn<UserDevice>
  userDeviceUid?: string
}

type MakeFn<T = void> = (instance: MakeInstance) => MakeInstanceFn<T>

const makeUser: MakeFn = (make) => async () => {
  const email = `${randomUUID()}@domain`

  const user = await insertUser(pool, {
    email,
    password: 'password',
  })
  assertOk(user)

  make.userUid = user.uid

  return user.uid
}

const makeBalance: MakeFn<Balance> = (make) => async (options) => {
  const {
    userUid = await make.user(),
    exchangeUid = await make.exchange(),
    userExchangeKeysUid = await make.userExchangeKeys(),
    secondaryCurrencySymbol = await make.primaryCurrency(),
  } = make

  const totalBalance = Math.floor(Math.random() * 100_000_000) / 100
  const availableBalance = totalBalance / 3

  const balanceUid = await upsertBalance(pool, {
    createdAt: new Date(),
    updatedAt: new Date(),
    userUid,
    exchangeUid,
    userExchangeKeysUid,
    currencySymbol: secondaryCurrencySymbol,
    totalBalance,
    availableBalance,
    ...options,
  })
  assertOk(balanceUid)

  return balanceUid
}

const makePrimaryCurrency: MakeFn<Currency> = (make) => async (options) => {
  const name = options?.name ?? 'Bitcoin'
  const symbol = options?.symbol ?? 'BTC'
  assertOk(await upsertCurrency(pool, { name, symbol }))
  make.primaryCurrencySymbol = symbol
  return symbol
}

const makeSecondaryCurrency: MakeFn<Currency> = (make) => async (options) => {
  const name = options?.name ?? 'New Zealand Dollar'
  const symbol = options?.symbol ?? 'NZD'
  assertOk(await upsertCurrency(pool, { name, symbol }))
  make.secondaryCurrencySymbol = symbol
  return symbol
}

const makeExchange: MakeFn = (make) => async () => {
  const exchangeUid = await getExchangeUid(pool, {
    ID: randomUUID().slice(0, 32),
    name: 'Test Exchange',
    url: 'test-exchange.co.nz',
  })
  assertOk(exchangeUid)

  make.exchangeUid = exchangeUid

  return exchangeUid
}

const makeUserExchangeKeys: MakeFn = (make) => async () => {
  const { userUid = await make.user(), exchangeUid = await make.exchange() } =
    make

  const userExchangeKeys = await insertUserExchangeKeys(pool, {
    userUid,
    exchangeUid,
    keys: { a: '1', b: '2', c: '3' },
    description: 'description',
    invalidatedAt: undefined,
  })
  assertOk(userExchangeKeys)

  make.userExchangeKeysUid = userExchangeKeys.uid

  return userExchangeKeys.uid
}

const makeMarket: MakeFn<Market> =
  (make) =>
  async (options = {}) => {
    const market = {
      ID: options.ID ?? MARKET_KIWI_COIN.ID,
      name: options.name ?? MARKET_KIWI_COIN.name,
    }

    const marketUid = await getMarketUid(pool, market)
    assertOk(marketUid)

    make.marketUid = marketUid

    return marketUid
  }

const makeMarketPrice: MakeFn<MarketPrice> = (make) => async (options) => {
  const { marketUid = await make.market() } = make

  const sourcePrice = round(2, Math.random() * 1_000_000)
  const fxRate = round(6, Math.random() * 3)
  const price = sourcePrice * fxRate
  const timestamp = new Date()

  assertOk(
    await insertMarketPrice(pool, {
      timestamp,
      marketUid,
      assetSymbol: 'BTC',
      sourceCurrency: 'USD',
      sourcePrice,
      fxRate,
      price,
      currency: 'NZD',
      ...options,
    }),
  )

  make.marketPriceUid = formatISO(timestamp)

  return formatISO(timestamp)
}

const makeDcaOrder: MakeFn<DcaOrder> = (make) => async (options) => {
  const {
    userUid = await make.user(),
    exchangeUid = await make.exchange(),
    userExchangeKeysUid = await make.userExchangeKeys(),
    marketUid = await make.market(),
    primaryCurrencySymbol = await make.primaryCurrency(),
    secondaryCurrencySymbol = await make.secondaryCurrency(),
  } = make

  const dcaOrder = await insertDcaOrder(pool, {
    userUid,
    exchangeUid,
    userExchangeKeysUid,
    marketUid,
    primaryCurrency: primaryCurrencySymbol,
    secondaryCurrency: secondaryCurrencySymbol,
    startAt: new Date(),
    marketOffset: round(2, Math.random() * -100),
    dailyAverage: round(0, Math.random() * 1000),
    intervalMs: 1000 * 60 * 5,
    minPrice: round(0, Math.random() * 100),
    maxPrice: round(0, Math.random() * 10_000),
    minValue: round(0, Math.random() * 100),
    maxValue: round(0, Math.random() * 10_000),
    enabledAt: new Date(),
    nextRunAt: undefined,
    lastRunAt: undefined,
    ...options,
  })
  assertOk(dcaOrder)

  make.dcaOrderUid = dcaOrder.uid

  return dcaOrder.uid
}

const makeTrade: MakeFn = (make) => async () => {
  const {
    userUid = await make.user(),
    exchangeUid = await make.exchange(),
    orderUid = await make.order(),
  } = make

  const volume = round(6, Math.random())
  const price = round(2, Math.random() * 100_000)
  const value = volume * price
  const fee = round(2, Math.random() * 10)
  const totalValue = value + fee

  const trade = await insertTrade(pool, {
    userUid,
    exchangeUid,
    orderUid,
    tradeID: randomUUID(),
    primaryCurrency: 'BTC',
    secondaryCurrency: 'NZD',
    type: Math.random() > 0.5 ? 'BUY' : 'SELL',
    timestamp: new Date(),
    volume,
    price,
    value,
    fee,
    totalValue,
  })
  assertOk(trade)

  make.tradeUid = trade.uid

  return trade.uid
}

const makeOrder: MakeFn<InsertOrderOptions> = (make) => async (options) => {
  const { userUid = await make.user(), exchangeUid = await make.exchange() } =
    make

  const price = round(2, Math.random() * 100_000)
  const volume = round(6, Math.random())
  const value = price * volume

  const order = await insertOrder(pool, {
    userUid,
    exchangeUid,
    primaryCurrency: 'BTC',
    secondaryCurrency: 'NZD',
    orderId: randomUUID(),
    price,
    volume,
    value,
    type: Math.random() > 0.5 ? 'BUY' : 'SELL',
    openedAt: new Date(),
    closedAt: undefined,
    ...options,
  })
  assertOk(order)

  make.orderUid = order.uid

  return order.uid
}

const makeDcaOrderHistory: MakeFn<DcaOrderHistory> =
  (make) => async (options) => {
    const {
      userUid = await make.user(),
      dcaOrderUid = await make.dcaOrder(),
      orderUid = await make.order(),
    } = make

    const dcaOrderHistory = await insertDcaOrderHistory(pool, {
      userUid,
      dcaOrderUid,
      orderUid,
      createdAt: new Date(),
      updatedAt: new Date(),
      primaryCurrency: 'BTC',
      secondaryCurrency: 'NZD',
      marketPrice: round(2, Math.random() * 100_000),
      marketOffset: round(4, Math.random() * -10 + 2),
      targetValue: round(2, Math.random() * 100),
      value: round(2, Math.random() * 100),
      availableBalance: round(2, Math.random() * 20_000),
      description: 'test entry',
      ...options,
    })
    assertOk(dcaOrderHistory)

    make.dcaOrderHistoryUid = dcaOrderHistory.uid

    return dcaOrderHistory.uid
  }

const makeUserDevice: MakeFn<UserDevice> = (make) => async (options) => {
  const { userUid = await make.user() } = make

  const userDeviceUid = await upsertUserDevice(pool, {
    accessedAt: new Date(),
    userUid,
    name: 'Device Name',
    deviceId: randomUUID(),
    trusted: Boolean(Math.random() > 0.5),
    ...options,
  })
  assertOk(userDeviceUid)

  return userDeviceUid
}

const createMakeInstance = () => {
  const instance: MakeInstance = {} as unknown as MakeInstance

  instance.user = makeUser(instance)
  instance.balance = makeBalance(instance)
  instance.primaryCurrency = makePrimaryCurrency(instance)
  instance.secondaryCurrency = makeSecondaryCurrency(instance)
  instance.exchange = makeExchange(instance)
  instance.userExchangeKeys = makeUserExchangeKeys(instance)
  instance.market = makeMarket(instance)
  instance.marketPrice = makeMarketPrice(instance)
  instance.dcaOrder = makeDcaOrder(instance)
  instance.dcaOrderHistory = makeDcaOrderHistory(instance)
  instance.order = makeOrder(instance)
  instance.trade = makeTrade(instance)
  instance.userDevice = makeUserDevice(instance)

  return instance
}

export { createMakeInstance, type MakeInstance }
