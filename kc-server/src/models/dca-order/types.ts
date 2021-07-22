import type { DateTime } from 'luxon'

type DCAOrder = {
  UID: string
  userUID: string
  exchangeUID: string
  marketUID: string
  startAt: DateTime
  marketOffset: number
  dailyAverage: number
  minPriceNZD: number
  maxPriceNZD: number
  minAmountNZD: number
  maxAmountNZD: number
}

export { DCAOrder }
