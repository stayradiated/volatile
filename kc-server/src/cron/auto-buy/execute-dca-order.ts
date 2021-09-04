import { DateTime } from 'luxon'

import { IllegalStateError } from '../../util/error.js'
import { log } from '../../util/debug.js'
import type { Pool } from '../../types.js'
import {
  DCAOrder,
  getDCAOrderTargetValue,
} from '../../model/dca-order/index.js'
import { selectAvgMarketPrice } from '../../model/market-price/index.js'
import { insertOrder } from '../../model/order/index.js'
import { insertDCAOrderHistory } from '../../model/dca-order-history/index.js'
import { round } from '../../util/round.js'
import { syncExchangeTradeList } from '../../model/trade/index.js'
import type { UserExchangeAPI } from '../../exchange-api/index.js'

import { cancelPreviousOrders } from './cancel-previous-orders.js'
import { calculateValueToBid } from './calculate-value-to-bid.js'

type ExecuteDCAOrderOptions = {
  userExchangeAPI: UserExchangeAPI
  dcaOrder: DCAOrder
}

const executeDCAOrder = async (
  pool: Pool,
  options: ExecuteDCAOrderOptions,
): Promise<void | Error> => {
  const { userExchangeAPI, dcaOrder } = options

  // Must do this before calling getDCAOrderTargetValue
  const syncError = await syncExchangeTradeList(pool, {
    userExchangeKeysUID: dcaOrder.userExchangeKeysUID,
  })
  if (syncError instanceof Error) {
    return syncError
  }

  // We cancel after sync in case to make sure we have kept track of failed errors
  await cancelPreviousOrders(pool, {
    dcaOrderUID: dcaOrder.UID,
    userExchangeAPI,
  })

  const targetValue = await getDCAOrderTargetValue(
    pool,
    dcaOrder,
    DateTime.local(),
  )
  if (targetValue instanceof Error) {
    return targetValue
  }

  const availableBalance = await userExchangeAPI.getBalance({
    currency: dcaOrder.secondaryCurrency,
  })
  if (availableBalance instanceof Error) {
    return availableBalance
  }

  const value = await calculateValueToBid(pool, {
    dcaOrderUID: dcaOrder.UID,
    userExchangeKeysUID: dcaOrder.userExchangeKeysUID,
    targetValue,
    availableBalance,
  })
  if (value instanceof Error) {
    return value
  }

  const marketPrice = await selectAvgMarketPrice(pool, {
    marketUID: dcaOrder.marketUID,
    assetSymbol: dcaOrder.primaryCurrency,
  })
  if (marketPrice instanceof Error) {
    return marketPrice
  }

  if (value <= (dcaOrder.minValue ?? 0)) {
    const dcaOrderHistory = await insertDCAOrderHistory(pool, {
      userUID: dcaOrder.userUID,
      dcaOrderUID: dcaOrder.UID,
      orderUID: undefined,
      marketPrice,
      primaryCurrency: dcaOrder.primaryCurrency,
      secondaryCurrency: dcaOrder.secondaryCurrency,
      marketOffset: dcaOrder.marketOffset,
      targetValue,
      value,
      availableBalance,
      description: `value (${value.toFixed(2)}) is below minValue (${
        dcaOrder.minValue ?? 0
      })`,
    })
    if (dcaOrderHistory instanceof Error) {
      return dcaOrderHistory
    }

    log(dcaOrderHistory)
  } else {
    const lowestAskPrice = await userExchangeAPI.getLowestAskPrice({
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
      return new IllegalStateError({
        message: 'Calculated volume is not a number',
        context: {
          volume,
          value,
          orderPrice,
          maxOrderPrice,
          lowestAskPrice,
          offsetPercent,
          marketPrice,
        },
      })
    }

    const freshOrder = await userExchangeAPI.createOrder({
      volume,
      price: orderPrice,
      primaryCurrency: dcaOrder.primaryCurrency,
      secondaryCurrency: dcaOrder.secondaryCurrency,
    })
    if (freshOrder instanceof Error) {
      return freshOrder
    }

    const order = await insertOrder(pool, {
      userUID: dcaOrder.userUID,
      exchangeUID: dcaOrder.exchangeUID,
      orderID: freshOrder.orderID,
      primaryCurrency: dcaOrder.primaryCurrency,
      secondaryCurrency: dcaOrder.secondaryCurrency,
      type: 'BUY',
      price: orderPrice,
      volume,
      value: orderPrice * volume,
      openedAt: DateTime.local(),
      closedAt: undefined,
    })
    if (order instanceof Error) {
      return order
    }

    const dcaOrderHistory = await insertDCAOrderHistory(pool, {
      userUID: dcaOrder.userUID,
      dcaOrderUID: dcaOrder.UID,
      orderUID: order.UID,
      primaryCurrency: dcaOrder.primaryCurrency,
      secondaryCurrency: dcaOrder.secondaryCurrency,
      marketPrice,
      marketOffset: dcaOrder.marketOffset,
      targetValue,
      value,
      availableBalance,
      description: 'Created order',
    })
    if (dcaOrderHistory instanceof Error) {
      return dcaOrderHistory
    }

    log(dcaOrderHistory)
  }
}

export { executeDCAOrder }
