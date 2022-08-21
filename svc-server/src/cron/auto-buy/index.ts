import { errorListBoundary } from '@stayradiated/error-boundary'

import { selectAndUpdateOverdueDcaOrders } from '../../model/dca-order/index.js'
import type { CronHandlerFn } from '../../util/cron-handler.js'

import { getUserExchangeApiByKeysUid } from '../../model/user-exchange-keys/index.js'
import { executeDcaOrder } from './execute-dca-order.js'

type Input = void
type Output = {
  message: string
}

const autoBuyHandler: CronHandlerFn<Input, Output> = async (context) => {
  const { pool } = context

  const dcaOrderList = await selectAndUpdateOverdueDcaOrders(pool)
  if (dcaOrderList instanceof Error) {
    return dcaOrderList
  }

  const error = await errorListBoundary(async () =>
    Promise.all(
      dcaOrderList.map(async (dcaOrder) => {
        const { userExchangeKeysUid } = dcaOrder

        const userExchangeApi = await getUserExchangeApiByKeysUid(
          pool,
          userExchangeKeysUid,
        )
        if (userExchangeApi instanceof Error) {
          return userExchangeApi
        }

        return executeDcaOrder(pool, { userExchangeApi, dcaOrder })
      }),
    ),
  )
  if (error instanceof Error) {
    return error
  }

  return {
    message: `Successfully executed ${dcaOrderList.length} Dca order(s).`,
  }
}

export { autoBuyHandler }
