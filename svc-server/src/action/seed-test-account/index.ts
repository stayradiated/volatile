import { throwIfError } from '@stayradiated/error-boundary'
import { ActionHandlerFn } from '../../util/action-handler.js'

import { insertUser, updateUser, User } from '../../model/user/index.js'
import { getExchangeUID, getExchangeList, Exchange } from '../../model/exchange/index.js'
import { insertUserExchangeKeys, UserExchangeKeys } from '../../model/user-exchange-keys/index.js'
import { upsertBalance } from '../../model/balance/index.js'
import { upsertCurrency, selectAllCurrencies, Currency } from '../../model/currency/index.js'
import { insertDCAOrder } from '../../model/dca-order/index.js'
import { getMarketUID, MARKET_BINANCE_US } from '../../model/market/index.js'

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

    await throwIfError(insertDCAOrder(pool, {
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
