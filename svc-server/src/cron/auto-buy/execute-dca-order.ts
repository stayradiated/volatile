import { errorListBoundary } from '@stayradiated/error-boundary'

import { IllegalStateError, messageWithContext } from '../../util/error.js'
import { log } from '../../util/debug.js'
import type { DcaOrder } from '../../model/dca-order/index.js'
import { getDcaOrderTargetValue } from '../../model/dca-order/index.js'
import {
  selectAvgMarketPrice,
  selectLatestMarketPrice,
} from '../../model/market-price/index.js'
import {
  insertOrder,
  syncExchangeOpenOrderList,
} from '../../model/order/index.js'
import { insertDcaOrderHistory } from '../../model/dca-order-history/index.js'
import { upsertBalance } from '../../model/balance/index.js'
import { round } from '../../util/round.js'
import { syncExchangeTradeList } from '../../model/trade/index.js'
import { selectAllCurrencies } from '../../model/currency/index.js'

import type { Pool } from '../../types.js'
import type { UserExchangeApi } from '../../exchange-api/index.js'

import { cancelPreviousOrders } from './cancel-previous-orders.js'
import { calculateValueToBid } from './calculate-value-to-bid.js'

type ExecuteDcaOrderOptions = {
  userExchangeApi: UserExchangeApi
  dcaOrder: DcaOrder
}

const executeDcaOrder = async (
  pool: Pool,
  options: ExecuteDcaOrderOptions,
): Promise<void | Error> => {
  const { userExchangeApi, dcaOrder } = options

  // Must do this before calling getDcaOrderTargetValue
  const tradeSyncError = await syncExchangeTradeList(pool, {
    userExchangeKeysUid: dcaOrder.userExchangeKeysUid,
  })
  if (tradeSyncError instanceof Error) {
    return tradeSyncError
  }

  const openOrderSyncError = await syncExchangeOpenOrderList(pool, {
    userUid: dcaOrder.userUid,
    exchangeUid: dcaOrder.exchangeUid,
    userExchangeApi,
  })
  if (openOrderSyncError instanceof Error) {
    return openOrderSyncError
  }

  // We cancel after sync in case to make sure we have kept track of failed errors
  const cancelPreviousOrdersError = await cancelPreviousOrders(pool, {
    dcaOrderUid: dcaOrder.uid,
    userExchangeApi,
  })
  if (cancelPreviousOrdersError instanceof Error) {
    return cancelPreviousOrdersError
  }

  const targetValue = await getDcaOrderTargetValue(pool, dcaOrder, new Date())
  if (targetValue instanceof Error) {
    return targetValue
  }

  const balanceList = await userExchangeApi.getBalance()
  if (balanceList instanceof Error) {
    return balanceList
  }

  const currencyList = await selectAllCurrencies(pool)
  if (currencyList instanceof Error) {
    return currencyList
  }

  const upsertBalanceError = await errorListBoundary(async () =>
    Promise.all(
      balanceList
        .filter((balance) => {
          return currencyList.some((currency) => {
            return currency.symbol === balance.currency
          })
        })
        .map(async (balance) => {
          return upsertBalance(pool, {
            createdAt: new Date(),
            updatedAt: new Date(),
            userUid: dcaOrder.userUid,
            exchangeUid: dcaOrder.exchangeUid,
            userExchangeKeysUid: dcaOrder.userExchangeKeysUid,
            currencySymbol: balance.currency,
            totalBalance: balance.total,
            availableBalance: balance.available,
          })
        }),
    ),
  )
  if (upsertBalanceError instanceof Error) {
    return upsertBalanceError
  }

  const balance = balanceList.find(
    (balance) => balance.currency === dcaOrder.secondaryCurrency,
  )
  if (!balance) {
    return new Error(
      `Could not read balance for currency ${dcaOrder.secondaryCurrency}`,
    )
  }

  const value = await calculateValueToBid(pool, {
    dcaOrderUid: dcaOrder.uid,
    userExchangeKeysUid: dcaOrder.userExchangeKeysUid,
    targetValue,
    availableBalance: balance.available,
  })
  if (value instanceof Error) {
    return value
  }

  const avgMarketPrice = await selectAvgMarketPrice(pool, {
    marketUid: dcaOrder.marketUid,
    assetSymbol: dcaOrder.primaryCurrency,
    currency: dcaOrder.secondaryCurrency,
    minutes: 30,
  })
  if (avgMarketPrice instanceof Error) {
    return avgMarketPrice
  }

  const latestMarketPrice = await selectLatestMarketPrice(pool, {
    marketUid: dcaOrder.marketUid,
    assetSymbol: dcaOrder.primaryCurrency,
    currency: dcaOrder.secondaryCurrency,
  })
  if (latestMarketPrice instanceof Error) {
    return latestMarketPrice
  }

  const marketPrice = Math.min(avgMarketPrice, latestMarketPrice)

  if (value <= (dcaOrder.minValue ?? 0)) {
    const dcaOrderHistory = await insertDcaOrderHistory(pool, {
      userUid: dcaOrder.userUid,
      dcaOrderUid: dcaOrder.uid,
      orderUid: undefined,
      marketPrice,
      createdAt: new Date(),
      updatedAt: new Date(),
      primaryCurrency: dcaOrder.primaryCurrency,
      secondaryCurrency: dcaOrder.secondaryCurrency,
      marketOffset: dcaOrder.marketOffset,
      targetValue,
      value,
      availableBalance: balance.available,
      description: `value (${value.toFixed(2)}) is below minValue (${
        dcaOrder.minValue ?? 0
      })`,
    })
    if (dcaOrderHistory instanceof Error) {
      return dcaOrderHistory
    }

    log(dcaOrderHistory)
  } else {
    const lowestAskPrice = await userExchangeApi.getLowestAskPrice({
      primaryCurrency: dcaOrder.primaryCurrency,
      secondaryCurrency: dcaOrder.secondaryCurrency,
    })
    if (lowestAskPrice instanceof Error) {
      return lowestAskPrice
    }

    const offsetPercent = (dcaOrder.marketOffset + 100) / 100
    const maxOrderPrice = round(2, marketPrice * offsetPercent)

    const orderPrice =
      maxOrderPrice > lowestAskPrice ? lowestAskPrice - 0.01 : maxOrderPrice

    if (orderPrice !== maxOrderPrice) {
      log('Lowering bid price to just below lowest ask price')
    }

    const volume = round(8, value / orderPrice)
    if (typeof volume !== 'number' || Number.isNaN(volume)) {
      return new IllegalStateError(
        messageWithContext(`Calculated volume is not a number`, {
          volume,
          value,
          orderPrice,
          maxOrderPrice,
          lowestAskPrice,
          offsetPercent,
          marketPrice,
        }),
      )
    }

    const freshOrder = await userExchangeApi.createOrder({
      volume,
      price: orderPrice,
      primaryCurrency: dcaOrder.primaryCurrency,
      secondaryCurrency: dcaOrder.secondaryCurrency,
    })
    if (freshOrder instanceof Error) {
      return freshOrder
    }

    const order = await insertOrder(pool, {
      userUid: dcaOrder.userUid,
      exchangeUid: dcaOrder.exchangeUid,
      orderId: freshOrder.orderId,
      primaryCurrency: dcaOrder.primaryCurrency,
      secondaryCurrency: dcaOrder.secondaryCurrency,
      type: 'BUY',
      price: orderPrice,
      volume,
      value: orderPrice * volume,
      openedAt: new Date(),
      closedAt: undefined,
    })
    if (order instanceof Error) {
      return order
    }

    const dcaOrderHistory = await insertDcaOrderHistory(pool, {
      userUid: dcaOrder.userUid,
      dcaOrderUid: dcaOrder.uid,
      orderUid: order.uid,
      createdAt: new Date(),
      updatedAt: new Date(),
      primaryCurrency: dcaOrder.primaryCurrency,
      secondaryCurrency: dcaOrder.secondaryCurrency,
      marketPrice,
      marketOffset: dcaOrder.marketOffset,
      targetValue,
      value,
      availableBalance: balance.available,
      description: 'Created order',
    })
    if (dcaOrderHistory instanceof Error) {
      return dcaOrderHistory
    }

    log(dcaOrderHistory)
  }
}

export { executeDcaOrder }
