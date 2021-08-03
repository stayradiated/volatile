import type { DateTime } from 'luxon'

import type { CryptoSymbol } from '../../types.js'

type DCAOrder = {
  UID: string
  userUID: string
  exchangeUID: string
  userExchangeKeysUID: string
  marketUID: string
  symbol: CryptoSymbol
  startAt: DateTime
  marketOffset: number
  dailyAverage: number
  minPriceNZD: number | undefined
  maxPriceNZD: number | undefined
  minAmountNZD: number | undefined
  maxAmountNZD: number | undefined
}

export { DCAOrder }
