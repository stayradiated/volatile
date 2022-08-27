import db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import {
  UserLimitError,
  messageWithContext,
  DbError,
} from '../../util/error.js'
import type { Pool } from '../../types.js'

import { getUserLimit } from '../user-limit/index.js'

import { selectDcaOrder } from './select-dca-order.js'
import { selectAllDcaOrders } from './select-all-dca-orders.js'
import { mapRowToDcaOrder } from './map-row-to-dca-order.js'
import type { DcaOrder } from './types.js'

type UpdateDcaOrderOptions = {
  dcaOrderUid: string
  enabled: boolean
}

const updateDcaOrder = async (
  pool: Pool,
  options: UpdateDcaOrderOptions,
): Promise<DcaOrder | Error> => {
  const { dcaOrderUid, enabled } = options

  const dcaOrder = await selectDcaOrder(pool, dcaOrderUid)
  if (dcaOrder instanceof Error) {
    return dcaOrder
  }

  if (enabled) {
    const userLimit = await getUserLimit(pool, dcaOrder.userUid)
    if (userLimit instanceof Error) {
      return userLimit
    }

    const enabledDcaOrders = await selectAllDcaOrders(pool, {
      userUid: dcaOrder.userUid,
      enabled: true,
    })
    if (enabledDcaOrders instanceof Error) {
      return enabledDcaOrders
    }

    const { maxEnabledDcaOrderCount } = userLimit
    const enabledDcaOrdersCount = enabledDcaOrders.length

    if (enabledDcaOrdersCount >= maxEnabledDcaOrderCount) {
      return new UserLimitError(
        messageWithContext(`You have reached the maximum number of DcaOrders`, {
          enabledDcaOrdersCount,
          maxEnabledDcaOrderCount,
        }),
      )
    }
  }

  const enabledAt = enabled ? new Date() : null

  const rows = await errorBoundary(async () =>
    db
      .update(
        'dca_order',
        {
          updated_at: new Date(),
          enabled_at: enabledAt,
        },
        {
          uid: dcaOrderUid,
        },
      )
      .run(pool),
  )
  if (rows instanceof Error) {
    return new DbError('Could not update Dca Order.', { cause: rows })
  }

  const row = rows[0]
  if (!row) {
    return new DbError(
      messageWithContext(`Could not update Dca Order.`, {
        dcaOrderUid,
        enabled,
      }),
    )
  }

  return mapRowToDcaOrder(row)
}

export { updateDcaOrder }
