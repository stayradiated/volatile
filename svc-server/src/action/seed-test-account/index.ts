import { subDays, subMinutes } from 'date-fns'

import { throwIfError } from '@stayradiated/error-boundary'
import { ActionHandlerFn } from '../../util/action-handler.js'

import { insertUser, updateUser, User } from '../../model/user/index.js'
import { getExchangeUID, getExchangeList, Exchange } from '../../model/exchange/index.js'
import { insertUserExchangeKeys, UserExchangeKeys } from '../../model/user-exchange-keys/index.js'
import { upsertBalance } from '../../model/balance/index.js'
import { upsertCurrency, selectAllCurrencies, Currency } from '../../model/currency/index.js'
import { insertDCAOrder, DCAOrder } from '../../model/dca-order/index.js'
import { insertDCAOrderHistory } from '../../model/dca-order-history/index.js'
import { insertOrder, Order } from '../../model/order/index.js'
import { getMarketUID, MARKET_BINANCE_US } from '../../model/market/index.js'
import { insertTrade } from '../../model/trade/index.js'

type Input = {
  email: string
}

type Output = {
  user_uid: string,
  email: string
}

const seedTestAccount: ActionHandlerFn<Input, Output> = async (context) => {
  const { pool, input } = context
  const { email } = input

  await throwIfError(upsertCurrency(pool, { symbol: 'NZD', name: 'New Zealand Dollar' }))
  await throwIfError(upsertCurrency(pool, { symbol: 'BTC', name: 'Bitcoin' }))
  await throwIfError(upsertCurrency(pool, { symbol: 'ETH', name: 'Ethereum' }))

  const user = await throwIfError<User>(insertUser(pool, {
    email,
    password: 'password',
  }))

  await throwIfError(updateUser(pool, {
    userUID: user.UID,
    emailVerified: true,
  }))

  const exchangeList = await throwIfError<Exchange[]>(getExchangeList(pool))
  const currencyList = await throwIfError<Currency[]>(selectAllCurrencies(pool))

  const marketUID = await throwIfError<string>(getMarketUID(pool, MARKET_BINANCE_US))

  for (const exchange of exchangeList) {
    const exchangeUID = await throwIfError<string>(getExchangeUID(pool, exchange))

    const userExchangeKeys = await throwIfError<UserExchangeKeys>(insertUserExchangeKeys(pool, {
      userUID: user.UID,
      exchangeUID,
      keys: {},
      description: 'Fake account keys',
      invalidatedAt: undefined
    }))

    const dcaOrder = await throwIfError<DCAOrder>(insertDCAOrder(pool, {
      userUID: user.UID,
      exchangeUID,
      userExchangeKeysUID: userExchangeKeys.UID,
      marketUID,
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
    }))

    for (let i = 0; i < 100; i++) {
      const marketPrice = Math.random() * 100_000
      const marketOffset = (Math.random() * 5) - 2.5
      const targetValue = Math.random() * 200
      const value = Math.random() * targetValue
      const availableBalance = Math.random() * 1000

      const price = marketOffset * marketPrice
      const volume = value / price

      const   primaryCurrency = Math.random() > 0.5 ? 'ETH' : 'BTC'
      const   secondaryCurrency= 'NZD'

      const date = subMinutes(new Date(), i * 3)

      const order = await throwIfError<Order>(insertOrder(pool, {
        userUID: user.UID,
        exchangeUID,
        orderID: `${dcaOrder.UID}-${i}`,
        primaryCurrency,
        secondaryCurrency,
        price,
        volume,
        value,
        type: 'BUY',
        openedAt: date,
        closedAt: i === 0 ? undefined : date,
      }))

      await throwIfError(insertDCAOrderHistory(pool, {
        userUID: user.UID,
        dcaOrderUID: dcaOrder.UID,
        orderUID: order.UID, 
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
      }))
    }

    for (let i = 0; i < 100; i++) {
      const volume = Math.random() * 1
      const price = Math.random() * 100_000
      const value = volume * price
      const fee = 0.0035 * value
      const totalValue = fee + value

      await throwIfError(insertTrade(pool, {
        userUID: user.UID,
        exchangeUID: exchangeUID,
        orderUID: undefined,
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
      }))
    }

    for (const currency of currencyList) {
      const totalBalance = Math.random() * 100
      const availableBalance = Math.random() * totalBalance

      await throwIfError(upsertBalance(pool, {
        createdAt: new Date(),
        updatedAt: new Date(),
        userUID: user.UID,
        exchangeUID,
        userExchangeKeysUID: userExchangeKeys.UID,
        currencySymbol: currency.symbol,
        totalBalance,
        availableBalance,
      }))
    }
  }

  return {
    user_uid: user.UID,
    email,
  }
}

export { seedTestAccount }
