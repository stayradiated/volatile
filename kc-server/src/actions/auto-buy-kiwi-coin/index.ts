import { setTimeout } from 'timers/promises'

import { getAllDCAOrders } from '../../models/dca-order/index.js'
import {
  getExchangeUID,
  EXCHANGE_KIWI_COIN,
} from '../../models/exchange/index.js'
import type { ActionHandlerFn } from '../../utils/action-handler.js'
import { executeDCAOrder } from './execute-dca-order.js'

type Input = Record<string, unknown>
type Output = void

const autoBuyKiwiCoinHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool } = context

  const exchangeUID = await getExchangeUID(pool, EXCHANGE_KIWI_COIN)
  if (exchangeUID instanceof Error) {
    return exchangeUID
  }

  const loop = async (): Promise<void> => {
    const dcaOrderList = await getAllDCAOrders(pool, {
      exchangeUID,
    })
    if (dcaOrderList instanceof Error) {
      console.error(dcaOrderList)
      return
    }

    await Promise.all(
      dcaOrderList.map(async (dcaOrder) => {
        const error = await executeDCAOrder(pool, dcaOrder)
        if (error instanceof Error) {
          console.error(error)
        }
      }),
    )

    await setTimeout(5 * 60 * 1000)
    return loop()
  }

  await loop()
  return undefined
}

export { autoBuyKiwiCoinHandler }
