import db, { conditions as dc } from 'zapatos/db'
import { errorBoundary, errorListBoundary } from '@stayradiated/error-boundary'

import { ModelError } from '../../util/error.js'
import type { UserExchangeApi } from '../../exchange-api/index.js'

import type { Pool } from '../../types.js'
import { upsertOrder } from './upsert-order.js'

type SyncExchangeOpenOrderListOptions = {
  userUid: string
  exchangeUid: string
  userExchangeApi: UserExchangeApi
}

const syncExchangeOpenOrderList = async (
  pool: Pool,
  options: SyncExchangeOpenOrderListOptions,
): Promise<void | Error> => {
  const { userUid, exchangeUid, userExchangeApi } = options

  const openOrderList = await userExchangeApi.getOpenOrders()
  if (openOrderList instanceof Error) {
    return new ModelError({
      message: 'Could not get open order list while syncing open order list.',
      cause: openOrderList,
      context: { userUid, exchangeUid },
    })
  }

  const openOrderIDList = openOrderList.map((order) => order.orderId)

  const result = await errorBoundary(async () =>
    db
      .update(
        'order',
        {
          closed_at: new Date(),
        },
        {
          user_uid: userUid,
          exchange_uid: exchangeUid,
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
        // TODO: add userUid to unique constraint on order (exchangeUid + userUid + orderId)
        const error = await upsertOrder(pool, {
          ...order,
          value: order.price * order.volume,
          exchangeUid,
          userUid,
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
