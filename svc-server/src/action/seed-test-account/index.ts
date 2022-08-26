import * as z from 'zod'
import { subDays, subMinutes } from 'date-fns'

import { assertOk } from '@stayradiated/error-boundary'
import type { ActionHandler } from '../../util/action-handler.js'

import { insertUser, updateUser } from '../../model/user/index.js'
import { getExchangeUid, getExchangeList } from '../../model/exchange/index.js'
import { insertUserExchangeKeys } from '../../model/user-exchange-keys/index.js'
import { upsertBalance } from '../../model/balance/index.js'
import {
  upsertCurrency,
  selectAllCurrencies,
} from '../../model/currency/index.js'
import { upsertExchangePrimaryCurrency } from '../../model/exchange-primary-currency/index.js'
import { upsertExchangeSecondaryCurrency } from '../../model/exchange-secondary-currency/index.js'
import { insertDcaOrder } from '../../model/dca-order/index.js'
import { insertDcaOrderHistory } from '../../model/dca-order-history/index.js'
import { insertOrder } from '../../model/order/index.js'
import { getMarketUid, MARKET_BINANCE_US } from '../../model/market/index.js'
import { insertTrade } from '../../model/trade/index.js'

const schema = {
  input: {
    email: z.string(),
  },
  output: {
    userUid: z.string(),
    email: z.string(),
  },
}
const range = (start: number, end: number): number[] => {
  if (end < start) {
    throw new Error('Invalid Range: end must be after start!')
  }

  const length = end - start
  const list = Array.from({ length })
  return list.map((_, index) => start + index)
}

const seedTestAccount: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { pool, input } = context
    const { email } = input

    assertOk(
      await upsertCurrency(pool, { symbol: 'NZD', name: 'New Zealand Dollar' }),
    )
    assertOk(await upsertCurrency(pool, { symbol: 'BTC', name: 'Bitcoin' }))
    assertOk(await upsertCurrency(pool, { symbol: 'ETH', name: 'Ethereum' }))

    const user = await insertUser(pool, {
      email,
      password: 'password',
    })
    assertOk(user)

    assertOk(
      await updateUser(pool, {
        userUid: user.uid,
        emailVerified: true,
      }),
    )

    const exchangeList = await getExchangeList(pool)
    assertOk(exchangeList)

    const currencyList = await selectAllCurrencies(pool)
    assertOk(currencyList)

    const marketUid = await getMarketUid(pool, MARKET_BINANCE_US)
    assertOk(marketUid)

    await Promise.all(
      exchangeList.map(async (exchange) => {
        const exchangeUid = await getExchangeUid(pool, exchange)
        assertOk(exchangeUid)

        assertOk(
          await upsertExchangePrimaryCurrency(pool, {
            exchangeUid,
            symbol: 'BTC',
          }),
        )
        assertOk(
          await upsertExchangePrimaryCurrency(pool, {
            exchangeUid,
            symbol: 'ETH',
          }),
        )
        assertOk(
          await upsertExchangeSecondaryCurrency(pool, {
            exchangeUid,
            symbol: 'NZD',
          }),
        )

        const userExchangeKeys = await insertUserExchangeKeys(pool, {
          userUid: user.uid,
          exchangeUid,
          keys: {},
          description: 'Fake account keys',
          invalidatedAt: undefined,
        })
        assertOk(userExchangeKeys)

        const dcaOrder = await insertDcaOrder(pool, {
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
        })
        assertOk(dcaOrder)

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

            const order = await insertOrder(pool, {
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
            })
            assertOk(order)

            assertOk(
              await insertDcaOrderHistory(pool, {
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

            assertOk(
              await insertTrade(pool, {
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

            assertOk(
              await upsertBalance(pool, {
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
      userUid: user.uid,
      email,
    }
  },
}

export { seedTestAccount }
