import { errorListBoundary } from '@stayradiated/error-boundary'

import { ModelError } from '../../util/error.js'

import { getUserExchangeAPI } from '../user-exchange-keys/index.js'

import type { Pool } from '../../types.js'
import { upsertOrder } from './upsert-order.js'

type SyncExchangeOpenOrderListOptions = {
  userUID: string
  exchangeUID: string
  userExchangeKeysUID: string
}

const syncExchangeOpenOrderList = async (
  pool: Pool,
  options: SyncExchangeOpenOrderListOptions,
): Promise<void | Error> => {
  const { userUID, exchangeUID, userExchangeKeysUID } = options

  const userExchangeAPI = await getUserExchangeAPI(pool, userExchangeKeysUID)
  if (userExchangeAPI instanceof Error) {
    return userExchangeAPI
  }

  const openOrderList = await userExchangeAPI.getOpenOrders()
  if (openOrderList instanceof Error) {
    return new ModelError({
      message: 'Could not get open order list while syncing open order list.',
      cause: openOrderList,
      context: { userUID, exchangeUID, userExchangeKeysUID },
    })
  }

  const resultList = await errorListBoundary(async () =>
    Promise.all(
      openOrderList.map(async (order): Promise<void | Error> => {
        // TODO: add userUID to unique constraint on order (exchangeUID + userUID + orderID)
        const error = await upsertOrder(pool, {
          ...order,
          exchangeUID,
          userUID,
          closedAt: undefined,
        })
        if (error instanceof Error) {
          return error
        }

        return undefined
      }),
    ),
  )
  if (resultList instanceof Error) {
    return resultList
  }

  return undefined
}

export { syncExchangeOpenOrderList }
