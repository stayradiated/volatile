import type { DateTime } from 'luxon'

type DCAOrder = {
  UID: string
  userUID: string
  exchangeUID: string
  marketUID: string
  startAt: DateTime
  marketOffset: number
  dailyAverage: number
  minPriceNZD: number | undefined
  maxPriceNZD: number | undefined
  minAmountNZD: number | undefined
  maxAmountNZD: number | undefined
}

export { DCAOrder }
