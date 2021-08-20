import { errorListBoundary } from '@stayradiated/error-boundary'

import { IllegalStateError } from '../../util/error.js'
import { selectAllDCAOrders } from '../../model/dca-order/index.js'
import {
  getExchange,
  EXCHANGE_DASSET,
  EXCHANGE_KIWI_COIN,
} from '../../model/exchange/index.js'
import type { CronHandlerFn } from '../../util/cron-handler.js'
import * as exchangeAPIs from '../../exchange-api/index.js'

import {
  mustGetUserDassetExchangeKeys,
  mustGetUserKiwiCoinExchangeKeys,
} from '../../model/user-exchange-keys/index.js'
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
        const { exchangeUID } = dcaOrder

        const exchange = await getExchange(pool, exchangeUID)
        if (exchange instanceof Error) {
          return exchange
        }

        const error = await (async () => {
          switch (exchange) {
            case EXCHANGE_KIWI_COIN: {
              const config = await mustGetUserKiwiCoinExchangeKeys(
                pool,
                dcaOrder.userExchangeKeysUID,
              )
              if (config instanceof Error) {
                return config
              }

              return executeDCAOrder(
                pool,
                config,
                exchangeAPIs.kiwiCoin,
                dcaOrder,
              )
            }

            case EXCHANGE_DASSET: {
              const config = await mustGetUserDassetExchangeKeys(
                pool,
                dcaOrder.userExchangeKeysUID,
              )
              if (config instanceof Error) {
                return config
              }

              return executeDCAOrder(
                pool,
                config,
                exchangeAPIs.dasset,
                dcaOrder,
              )
            }

            default: {
              return new IllegalStateError({
                message: 'Unexpected exchange',
                context: { exchange },
              })
            }
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

  return {
    message: `Successfully executed ${dcaOrderList.length} DCA order(s).`,
  }
}

export { autoBuyHandler }
