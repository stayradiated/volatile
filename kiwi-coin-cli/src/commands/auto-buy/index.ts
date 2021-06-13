import { setTimeout } from 'timers/promises'
import * as kiwiCoin from '@stayradiated/kiwi-coin-api'

import withConfig from '../../utils/with-config.js'
import {
  createPriceIterator,
  binancePriceSource,
} from '../../utils/price-source.js'

export const command = 'auto-buy'

export const desc = 'Update open orders to match market value'

export const builder = {}

const round = (decimals: number, value: number): number => {
  const multiplier = Math.pow(10, decimals)
  return Math.round(value * multiplier) / multiplier
}

export const handler = withConfig(async (config, _argv) => {
  const getPriceFromBinance = createPriceIterator(binancePriceSource, config)

  const amountNZD = 100
  const offsetPercent = -1.5

  const loop = async (): Promise<void> => {
    const marketPrice = await getPriceFromBinance()
    const orderPrice = round(2, marketPrice * ((offsetPercent + 100) / 100))
    const amountBTC = round(8, amountNZD / orderPrice)

    console.dir({
      marketPrice,
      offsetPercent,
      orderPrice,
      amountNZD,
      amountBTC,
    })

    const existingOrders = await kiwiCoin.openOrders(config.kiwiCoin)

    await kiwiCoin.buy(config.kiwiCoin, {
      price: orderPrice,
      amount: amountBTC,
    })

    for (const order of existingOrders) {
      await kiwiCoin.cancelOrder(config.kiwiCoin, order.id)
    }

    await setTimeout(5 * 60 * 1000)
    return loop()
  }

  await loop()
})
