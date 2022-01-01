import db, { conditions as dc } from 'zapatos/db'
import { errorBoundary, errorListBoundary } from '@stayradiated/error-boundary'

import { ModelError } from '../../util/error.js'
import type { UserExchangeAPI } from '../../exchange-api/index.js'

import type { Pool } from '../../types.js'
import { upsertOrder } from './upsert-order.js'

type SyncExchangeOpenOrderListOptions = {
  userUID: string
  exchangeUID: string
  userExchangeAPI: UserExchangeAPI
}

const syncExchangeOpenOrderList = async (
  pool: Pool,
  options: SyncExchangeOpenOrderListOptions,
): Promise<void | Error> => {
  const { userUID, exchangeUID, userExchangeAPI } = options

  const openOrderList = await userExchangeAPI.getOpenOrders()
  if (openOrderList instanceof Error) {
    return new ModelError({
      message: 'Could not get open order list while syncing open order list.',
      cause: openOrderList,
      context: { userUID, exchangeUID },
    })
  }

  const openOrderIDList = openOrderList.map((order) => order.orderID)

  const result = await errorBoundary(async () =>
    db
      .update(
        'order',
        {
          closed_at: new Date(),
        },
        {
          user_uid: userUID,
          exchange_uid: exchangeUID,
          order_id: dc.isNotIn(openOrderIDList),
          closed_at: dc.isNull,
        },
      )
      .run(pool),
  )
  if (result instanceof Error) {
    return result
  }

  const resultList = await errorListBoundary(async () =>
    Promise.all(
      openOrderList.map(async (order): Promise<void | Error> => {
        // TODO: add userUID to unique constraint on order (exchangeUID + userUID + orderID)
        const error = await upsertOrder(pool, {
          ...order,
          value: order.price * order.volume,
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
