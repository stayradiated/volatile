import { errorListBoundary } from '@stayradiated/error-boundary'

import { selectAllDCAOrders } from '../../model/dca-order/index.js'
import {
  getExchange,
  EXCHANGE_DASSET,
  EXCHANGE_KIWI_COIN,
} from '../../model/exchange/index.js'
import type { CronHandlerFn } from '../../util/cron-handler.js'

import { executeKiwiCoinDCAOrder, executeDassetDCAOrder } from './impl/index.js'

type Input = void
type Output = void

const autoBuyHandler: CronHandlerFn<Input, Output> = async (context) => {
  const { pool } = context

  const dcaOrderList = await selectAllDCAOrders(pool, {})
  if (dcaOrderList instanceof Error) {
    return dcaOrderList
  }

  const error = await errorListBoundary(async () =>
    Promise.all(
      dcaOrderList.map(async (dcaOrder) => {
        const { exchangeUID } = dcaOrder

        const exchange = await getExchange(pool, exchangeUID)
        if (exchange instanceof Error) {
          return exchange
        }

        const error = await (() => {
          switch (exchange) {
            case EXCHANGE_KIWI_COIN:
              return executeKiwiCoinDCAOrder(pool, dcaOrder)
            case EXCHANGE_DASSET:
              return executeDassetDCAOrder(pool, dcaOrder)
            default:
              return new Error('Unexpected exchange')
          }
        })()
        if (error instanceof Error) {
          return error
        }

        return undefined
      }),
    ),
  )
  if (error instanceof Error) {
    return error
  }

  return undefined
}

export { autoBuyHandler }
