import { setTimeout } from 'timers/promises'

import withConfig from '../../utils/with-config.js'
import {
  createPriceIterator,
  kiwiCoinWorldwidePriceSource,
  kiwiCoinEuropePriceSource,
  binancePriceSource,
} from '../../utils/price-source.js'

export const command = 'watch-price'

export const desc = 'Continuously print the current price of BTC/NZD.'

export const builder = {}

export const handler = withConfig(async (config) => {
  const getPriceFromKiwiCoinWorldwide = createPriceIterator(
    kiwiCoinWorldwidePriceSource,
    config,
  )
  const getPriceFromKiwiCoinEurope = createPriceIterator(
    kiwiCoinEuropePriceSource,
    config,
  )
  const getPriceFromBinance = createPriceIterator(binancePriceSource, config)

  // CSV header
  console.log(
    'date,kiwi-coin.com (worldwide), kiwi-coin.com (europe),binance.us',
  )

  const loop = async (): Promise<void> => {
    const [kiwiCoinWorldwide, kiwiCoinEurope, binance] = await Promise.all([
      getPriceFromKiwiCoinWorldwide(),
      getPriceFromKiwiCoinEurope(),
      getPriceFromBinance(),
    ])

    console.log(
      [
        new Date().toISOString(),
        kiwiCoinWorldwide,
        kiwiCoinEurope,
        binance,
      ].join(','),
    )

    await setTimeout(5000)
    return loop()
  }

  await loop()
})
