import db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import { UserLimitError, DBError } from '../../util/error.js'
import type { Pool } from '../../types.js'

import { getUserLimit } from '../user-limit/index.js'

import { selectDCAOrder } from './select-dca-order.js'
import { selectAllDCAOrders } from './select-all-dca-orders.js'
import { mapRowToDCAOrder } from './map-row-to-dca-order.js'
import type { DCAOrder } from './types.js'

type UpdateDCAOrderOptions = {
  dcaOrderUID: string
  enabled: boolean
}

const updateDCAOrder = async (
  pool: Pool,
  options: UpdateDCAOrderOptions,
): Promise<DCAOrder | Error> => {
  const { dcaOrderUID, enabled } = options

  const dcaOrder = await selectDCAOrder(pool, dcaOrderUID)
  if (dcaOrder instanceof Error) {
    return dcaOrder
  }

  if (enabled) {
    const userLimit = await getUserLimit(pool, dcaOrder.userUID)
    if (userLimit instanceof Error) {
      return userLimit
    }

    const enabledDCAOrders = await selectAllDCAOrders(pool, {
      userUID: dcaOrder.userUID,
      enabled: true,
    })
    if (enabledDCAOrders instanceof Error) {
      return enabledDCAOrders
    }

    const { maxEnabledDCAOrderCount } = userLimit
    const enabledDCAOrdersCount = enabledDCAOrders.length

    if (enabledDCAOrdersCount >= maxEnabledDCAOrderCount) {
      return new UserLimitError({
        message: 'You have reached the maximum number of DCAOrders',
        context: {
          enabledDCAOrdersCount,
          maxEnabledDCAOrderCount,
        },
      })
    }
  }

  const enabledAt = enabled ? new Date() : null

  const rows = await errorBoundary(async () =>
    db
      .update(
        'dca_order',
        {
          enabled_at: enabledAt,
        },
        {
          uid: dcaOrderUID,
        },
      )
      .run(pool),
  )
  if (rows instanceof Error) {
    return new DBError({
      message: 'Could not update DCA Order.',
      cause: rows,
      context: { dcaOrderUID, enabled },
    })
  }

  const row = rows[0]
  if (!row) {
    return new DBError({
      message: 'Could not update DCA Order.',
      context: { dcaOrderUID, enabled },
    })
  }

  return mapRowToDCAOrder(row)
}

export { updateDCAOrder }
