import { subDays, subMinutes } from 'date-fns'

import { throwIfError } from '@stayradiated/error-boundary'
import { ActionHandlerFn } from '../../util/action-handler.js'

import { insertUser, updateUser, User } from '../../model/user/index.js'
import {
  getExchangeUid,
  getExchangeList,
  Exchange,
} from '../../model/exchange/index.js'
import {
  insertUserExchangeKeys,
  UserExchangeKeys,
} from '../../model/user-exchange-keys/index.js'
import { upsertBalance } from '../../model/balance/index.js'
import {
  upsertCurrency,
  selectAllCurrencies,
  Currency,
} from '../../model/currency/index.js'
import { upsertExchangePrimaryCurrency } from '../../model/exchange-primary-currency/index.js'
import { upsertExchangeSecondaryCurrency } from '../../model/exchange-secondary-currency/index.js'
import { insertDcaOrder, DcaOrder } from '../../model/dca-order/index.js'
import { insertDcaOrderHistory } from '../../model/dca-order-history/index.js'
import { insertOrder, Order } from '../../model/order/index.js'
import { getMarketUid, MARKET_BINANCE_US } from '../../model/market/index.js'
import { insertTrade } from '../../model/trade/index.js'

type Input = {
  email: string
}

type Output = {
  user_uid: string
  email: string
}

const range = (start: number, end: number): number[] => {
  if (end < start) {
    throw new Error('Invalid Range: end must be after start!')
  }

  const length = end - start
  const list = Array.from({ length })
  return list.map((_, index) => start + index)
}

const seedTestAccount: ActionHandlerFn<Input, Output> = async (context) => {
  const { pool, input } = context
  const { email } = input

  await throwIfError(
    upsertCurrency(pool, { symbol: 'NZD', name: 'New Zealand Dollar' }),
  )
  await throwIfError(upsertCurrency(pool, { symbol: 'BTC', name: 'Bitcoin' }))
  await throwIfError(upsertCurrency(pool, { symbol: 'ETH', name: 'Ethereum' }))

  const user = await throwIfError<User>(
    insertUser(pool, {
      email,
      password: 'password',
    }),
  )

  await throwIfError(
    updateUser(pool, {
      userUid: user.uid,
      emailVerified: true,
    }),
  )

  const exchangeList = await throwIfError<Exchange[]>(getExchangeList(pool))
  const currencyList = await throwIfError<Currency[]>(selectAllCurrencies(pool))

  const marketUid = await throwIfError<string>(
    getMarketUid(pool, MARKET_BINANCE_US),
  )

  await Promise.all(
    exchangeList.map(async (exchange) => {
      const exchangeUid = await throwIfError<string>(
        getExchangeUid(pool, exchange),
      )

      await throwIfError(
        upsertExchangePrimaryCurrency(pool, { exchangeUid, symbol: 'BTC' }),
      )
      await throwIfError(
        upsertExchangePrimaryCurrency(pool, { exchangeUid, symbol: 'ETH' }),
      )
      await throwIfError(
        upsertExchangeSecondaryCurrency(pool, { exchangeUid, symbol: 'NZD' }),
      )

      const userExchangeKeys = await throwIfError<UserExchangeKeys>(
        insertUserExchangeKeys(pool, {
          userUid: user.uid,
          exchangeUid,
          keys: {},
          description: 'Fake account keys',
          invalidatedAt: undefined,
        }),
      )

      const dcaOrder = await throwIfError<DcaOrder>(
        insertDcaOrder(pool, {
          userUid: user.uid,
          exchangeUid,
          userExchangeKeysUid: userExchangeKeys.uid,
          marketUid,
          primaryCurrency: 'BTC',
          secondaryCurrency: 'NZD',
          startAt: new Date(),
          marketOffset: -0.2,
          dailyAverage: 100,
          intervalMs: 1000 * 60 * 5,
          maxPrice: undefined,
          minPrice: undefined,
          minValue: undefined,
          maxValue: undefined,
          enabledAt: undefined,
          nextRunAt: undefined,
          lastRunAt: undefined,
        }),
      )

      await Promise.all(
        range(0, 100).map(async (i) => {
          const marketPrice = Math.random() * 100_000
          const marketOffset = Math.random() * 5 - 2.5
          const targetValue = Math.random() * 200
          const value = Math.random() * targetValue
          const availableBalance = Math.random() * 1000

          const price = marketOffset * marketPrice
          const volume = value / price

          const primaryCurrency = Math.random() > 0.5 ? 'ETH' : 'BTC'
          const secondaryCurrency = 'NZD'

          const date = subMinutes(new Date(), i * 3)

          const order = await throwIfError<Order>(
            insertOrder(pool, {
              userUid: user.uid,
              exchangeUid,
              orderId: `${dcaOrder.uid}-${i}`,
              primaryCurrency,
              secondaryCurrency,
              price,
              volume,
              value,
              type: 'BUY',
              openedAt: date,
              closedAt: i === 0 ? undefined : date,
            }),
          )

          await throwIfError(
            insertDcaOrderHistory(pool, {
              userUid: user.uid,
              dcaOrderUid: dcaOrder.uid,
              orderUid: order.uid,
              createdAt: date,
              updatedAt: date,
              primaryCurrency,
              secondaryCurrency,
              marketPrice,
              marketOffset,
              targetValue,
              value,
              availableBalance,
              description: '',
            }),
          )
        }),
      )

      await Promise.all(
        range(0, 100).map(async (i) => {
          const volume = Number(Math.random())
          const price = Math.random() * 100_000
          const value = volume * price
          const fee = 0.0035 * value
          const totalValue = fee + value

          await throwIfError(
            insertTrade(pool, {
              userUid: user.uid,
              exchangeUid,
              orderUid: undefined,
              timestamp: subDays(new Date(), i),
              tradeID: `trade-${i}`,
              type: 'BUY',
              primaryCurrency: Math.random() > 0.5 ? 'ETH' : 'BTC',
              secondaryCurrency: 'NZD',
              volume,
              price,
              value,
              fee,
              totalValue,
            }),
          )
        }),
      )

      await Promise.all(
        currencyList.map(async (currency) => {
          const totalBalance = Math.random() * 100
          const availableBalance = Math.random() * totalBalance

          await throwIfError(
            upsertBalance(pool, {
              createdAt: new Date(),
              updatedAt: new Date(),
              userUid: user.uid,
              exchangeUid,
              userExchangeKeysUid: userExchangeKeys.uid,
              currencySymbol: currency.symbol,
              totalBalance,
              availableBalance,
            }),
          )
        }),
      )
    }),
  )

  return {
    user_uid: user.uid,
    email,
  }
}

export { seedTestAccount }
