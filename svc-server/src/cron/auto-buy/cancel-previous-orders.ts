import { errorListBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import type { UserExchangeAPI } from '../../exchange-api/index.js'

import { updateOrder, selectOpenOrdersForDCA } from '../../model/order/index.js'

import { mapSeries } from '../../util/map.js'

type CancelPreviousOrdersOptions = {
  dcaOrderUID: string
  userExchangeAPI: UserExchangeAPI
}

const cancelPreviousOrders = async (
  pool: Pool,
  options: CancelPreviousOrdersOptions,
): Promise<void | Error> => {
  const { dcaOrderUID, userExchangeAPI } = options

  const previousOrders = await selectOpenOrdersForDCA(pool, {
    dcaOrderUID,
  })
  if (previousOrders instanceof Error) {
    return previousOrders
  }

  const cancelOrderError = await errorListBoundary(async () =>
    mapSeries(previousOrders, async (order): Promise<void | Error> => {
      const cancelOrderError = await userExchangeAPI.cancelOrder({
        orderID: order.orderID,
      })
      if (cancelOrderError instanceof Error) {
        return cancelOrderError
      }

      const updateOrderError = await updateOrder(pool, {
        UID: order.UID,
        closedAt: new Date(),
      })
      if (updateOrderError instanceof Error) {
        return updateOrderError
      }

      return undefined
    }),
  )

  if (cancelOrderError instanceof Error) {
    return cancelOrderError
  }

  return undefined
}

export { cancelPreviousOrders }
