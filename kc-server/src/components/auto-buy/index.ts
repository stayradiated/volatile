import { setTimeout } from 'timers/promises'

import { getAllDCAOrders } from '../dca-order/index.js'
import { getMarketUID, MARKET_KIWI_COIN } from '../market/index.js'
import type { Component } from '../../types.js'
import { executeDCAOrder } from './execute-dca-order.js'

const initAutoBuy: Component = async (props) => {
  const { pool } = props

  const marketUID = await getMarketUID(pool, MARKET_KIWI_COIN)
  if (marketUID instanceof Error) {
    return marketUID
  }

  const loop = async (): Promise<void> => {
    const dcaOrderList = await getAllDCAOrders(pool, {
      marketUID,
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

export { initAutoBuy }
