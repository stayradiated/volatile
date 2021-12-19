import { inspect } from 'util'
import { DateTime } from 'luxon'
import type { Prism } from '@zwolf/prism'

const toFloat = ($: Prism<string | undefined>) => {
  if (typeof $.value !== 'string') {
    throw new TypeError(`Could not convert ${inspect($.value)} to float.`)
  }

  return Number.parseFloat($.value)
}

const toBuySell = ($: Prism<number | undefined>): 'BUY' | 'SELL' => {
  switch ($.value) {
    case 0:
      return 'BUY'
    case 1:
      return 'SELL'
    default:
      throw new Error(`Unsupported value "${inspect($.value)}"`)
  }
}

const toDateTime = ($: Prism<string | undefined>): DateTime => {
  if (typeof $.value !== 'string') {
    throw new TypeError(`Could not convert ${inspect($.value)} to DateTime.`)
  }

  return DateTime.fromISO($.value)
}

const toDateTimeFromSeconds = ($: Prism<number | undefined>): DateTime => {
  if (typeof $.value !== 'number') {
    throw new TypeError(`Could not convert ${inspect($.value)} to DateTime.`)
  }

  return DateTime.fromSeconds($.value)
}

export { toFloat, toBuySell, toDateTime, toDateTimeFromSeconds }
