import { errorListBoundary } from '@stayradiated/error-boundary'

import { selectAllDCAOrders } from '../../model/dca-order/index.js'
import type { CronHandlerFn } from '../../util/cron-handler.js'

import { getUserExchangeAPIByKeysUID } from '../../model/user-exchange-keys/index.js'
import { executeDCAOrder } from './execute-dca-order.js'

type Input = void
type Output = {
  message: string
}

const autoBuyHandler: CronHandlerFn<Input, Output> = async (context) => {
  const { pool } = context

  const dcaOrderList = await selectAllDCAOrders(pool, {
    enabled: true,
  })
  if (dcaOrderList instanceof Error) {
    return dcaOrderList
  }

  const error = await errorListBoundary(async () =>
    Promise.all(
      dcaOrderList.map(async (dcaOrder) => {
        const { userExchangeKeysUID } = dcaOrder

        const userExchangeAPI = await getUserExchangeAPIByKeysUID(
          pool,
          userExchangeKeysUID,
        )
        if (userExchangeAPI instanceof Error) {
          return userExchangeAPI
        }

        return executeDCAOrder(pool, { userExchangeAPI, dcaOrder })
      }),
    ),
  )
  if (error instanceof Error) {
    return error
  }

  return {
    message: `Successfully executed ${dcaOrderList.length} DCA order(s).`,
  }
}

export { autoBuyHandler }
