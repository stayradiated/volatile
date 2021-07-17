import { setTimeout } from 'timers/promises'
import * as kiwiCoin from '@stayradiated/kiwi-coin-api'
import { DateTime } from 'luxon'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'

import { round } from '../../utils/round.js'
import { getAllDCAOrders, DCAOrder } from '../dca-order/index.js'
import { getUserExchangeKeys } from '../user-exchange-keys/index.js'

import type { Component, Pool } from '../../types.js'

const MINIMUM_BTC_BID = 0.000_01

const readMarketPrice = async (
  pool: Pool,
  marketUID: string,
): Promise<number | Error> => {
  const rows = await db.sql<s.market_price.SQL, s.market_price.Selectable[]>`
    SELECT ${'price_nzd'}
    FROM ${'market_price'} 
    WHERE ${{ market_uid: marketUID }}
    ORDER BY ${'timestamp'} DESC
    FETCH FIRST ROW ONLY
  `.run(pool)

  const row = rows[0]
  if (!row) {
    return new Error(`Could not read market price for marketUID='${marketUID}'`)
  }

  return row.price_nzd
}

type CalculateOrderAmountNZDOptions = {
  config: kiwiCoin.Config
  dailyAverage: number
  startAt: DateTime
}

const calculateOrderAmountNZD = async (
  options: CalculateOrderAmountNZDOptions,
): Promise<number | Error> => {
  const { config, startAt, dailyAverage } = options

  const allTrades = await kiwiCoin.trades(config, 'all')
  if (allTrades instanceof Error) {
    return allTrades
  }

  const trades = allTrades.filter((trade) => {
    const tradeDate = DateTime.fromSeconds(trade.datetime)
    return tradeDate >= startAt
  })

  // eslint-disable-next-line unicorn/no-array-reduce
  const sum = trades.reduce((sum, trade) => {
    const nzd = trade.trade_size * trade.price
    return sum + nzd
  }, 0)

  const now = DateTime.local()
  const minutesSinceStartDate = now.diff(startAt).as('minutes')
  const goalPerMinute = dailyAverage / 24 / 60

  const orderAmountNZD =
    (goalPerMinute - sum / minutesSinceStartDate) * minutesSinceStartDate
  return orderAmountNZD
}

const fetchAvailableNZD = async (
  kiwiCoinConfig: kiwiCoin.Config,
): Promise<number | Error> => {
  const balance = await kiwiCoin.balance(kiwiCoinConfig)
  if (balance instanceof Error) {
    return balance
  }

  const availableNZD = Number.parseFloat(balance.nzd_balance)
  return availableNZD
}

const executeDCAOrder = async (
  pool: Pool,
  dcaOrder: DCAOrder,
): Promise<void | Error> => {
  const userExchangeKeys = await getUserExchangeKeys(pool, {
    userUID: dcaOrder.userUID,
    exchangeUID: dcaOrder.exchangeUID,
  })
  if (userExchangeKeys instanceof Error) {
    return userExchangeKeys
  }

  const config = userExchangeKeys.keys

  if (!kiwiCoin.isValidConfig(config)) {
    return new Error('userExchangeKeys are not valid for kiwi-coin.com')
  }

  // Should really be done concurrently, but kiwi-coin.com often returns a 401?
  const availableNZD = await fetchAvailableNZD(config)
  if (availableNZD instanceof Error) {
    return availableNZD
  }

  const goalAmountNZD = await calculateOrderAmountNZD({
    config,
    dailyAverage: dcaOrder.dailyAverage,
    startAt: dcaOrder.startAt,
  })
  if (goalAmountNZD instanceof Error) {
    return goalAmountNZD
  }

  const amountNZD = Math.min(goalAmountNZD, availableNZD)

  if (amountNZD <= 0) {
    console.log('Have reached daily goal, passing...')
  } else {
    const [orderBook, existingOrders] = await Promise.all([
      kiwiCoin.orderBook(),
      kiwiCoin.openOrders(config),
    ])
    if (orderBook instanceof Error) {
      return orderBook
    }

    if (existingOrders instanceof Error) {
      return existingOrders
    }

    const marketPrice = await readMarketPrice(pool, dcaOrder.marketUID)
    if (marketPrice instanceof Error) {
      return marketPrice
    }

    const offsetPercent = (-1.5 + 100) / 100
    const maxOrderPrice = round(2, marketPrice * offsetPercent)

    const lowestAsk = orderBook.asks[0]
    const lowestAskPrice = lowestAsk
      ? Number.parseFloat(lowestAsk[0])
      : Number.POSITIVE_INFINITY

    const orderPrice =
      maxOrderPrice > lowestAskPrice ? lowestAskPrice - 0.01 : maxOrderPrice

    if (orderPrice !== maxOrderPrice) {
      console.log('Lowering bid price to just below lowest ask price')
    }

    const amountBTC = round(8, amountNZD / orderPrice)
    if (amountBTC < MINIMUM_BTC_BID) {
      console.log(
        `Bid amount is below MINIMUM_BTC_BID: ${amountBTC}/${MINIMUM_BTC_BID}`,
      )
    } else {
      await Promise.all(
        existingOrders.map(async (order) =>
          kiwiCoin.cancelOrder(config, order.id),
        ),
      )

      await kiwiCoin.buy(config, {
        price: orderPrice,
        amount: amountBTC,
      })

      console.dir({
        marketPrice,
        offsetPercent,
        orderPrice,
        amountNZD,
        amountBTC,
      })
    }
  }
}

const initAutoBuy: Component = async (props) => {
  const { pool } = props

  const loop = async (): Promise<void> => {
    const dcaOrderList = await getAllDCAOrders(pool)
    if (dcaOrderList instanceof Error) {
      console.error(dcaOrderList)
      return
    }

    console.log(dcaOrderList)

    await Promise.all(
      dcaOrderList.map(async (dcaOrder) => {
        const error = await executeDCAOrder(pool, dcaOrder)
        if (error instanceof Error) {
          console.error(error)
        }
      }),
    )

    await setTimeout(5 * 60 * 1000)
    return loop()
  }

  await loop()
}

export { initAutoBuy }
