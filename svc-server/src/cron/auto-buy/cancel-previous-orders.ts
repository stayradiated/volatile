import { errorListBoundary, MultiError } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import type { UserExchangeApi } from '../../exchange-api/index.js'

import { EXCHANGE_DASSET } from '../../model/exchange/index.js'

import { updateOrder, selectOpenOrdersForDca } from '../../model/order/index.js'

import { mapSeries } from '../../util/map.js'

type CancelPreviousOrdersOptions = {
  dcaOrderUid: string
  userExchangeApi: UserExchangeApi
}

const cancelPreviousOrders = async (
  pool: Pool,
  options: CancelPreviousOrdersOptions,
): Promise<void | Error> => {
  const { dcaOrderUid, userExchangeApi } = options

  const previousOrders = await selectOpenOrdersForDca(pool, {
    dcaOrderUid,
  })
  if (previousOrders instanceof Error) {
    return previousOrders
  }

  const cancelOrderError = await errorListBoundary(async () =>
    mapSeries(previousOrders, async (order): Promise<void | Error> => {
      const cancelOrderError = await userExchangeApi.cancelOrder({
        orderId: order.orderId,
      })
      if (cancelOrderError instanceof Error) {
        return cancelOrderError
      }

      const updateOrderError = await updateOrder(pool, {
        uid: order.uid,
        closedAt: new Date(),
      })
      if (updateOrderError instanceof Error) {
        return updateOrderError
      }

      return undefined
    }),
  )

  if (cancelOrderError instanceof Error) {
    if (
      userExchangeApi.exchange === EXCHANGE_DASSET &&
      cancelOrderError instanceof MultiError &&
      cancelOrderError.cause.length <= 2
    ) {
      console.error(cancelOrderError)
    } else {
      return cancelOrderError
    }
  }

  return undefined
}

export { cancelPreviousOrders }
