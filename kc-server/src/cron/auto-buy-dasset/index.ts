import { errorListBoundary } from '@stayradiated/error-boundary'

import { selectAllDCAOrders } from '../../model/dca-order/index.js'
import { getExchangeUID, EXCHANGE_DASSET } from '../../model/exchange/index.js'
import type { CronHandlerFn } from '../../util/cron-handler.js'
import { executeDCAOrder } from './execute-dca-order.js'

type Input = void
type Output = void

const autoBuyDassetHandler: CronHandlerFn<Input, Output> = async (context) => {
  const { pool } = context

  const exchangeUID = await getExchangeUID(pool, EXCHANGE_DASSET)
  if (exchangeUID instanceof Error) {
    return exchangeUID
  }

  const dcaOrderList = await selectAllDCAOrders(pool, {
    exchangeUID,
  })
  if (dcaOrderList instanceof Error) {
    return dcaOrderList
  }

  const error = await errorListBoundary(async () =>
    Promise.allSettled(
      dcaOrderList.map(async (dcaOrder) => executeDCAOrder(pool, dcaOrder)),
    ),
  )
  if (error instanceof Error) {
    return error
  }

  return undefined
}

export { autoBuyDassetHandler }
