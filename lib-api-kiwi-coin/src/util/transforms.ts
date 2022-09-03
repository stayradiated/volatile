import { inspect } from 'node:util'
import { fromUnixTime, parseISO } from 'date-fns'
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

const toDate = ($: Prism<string | undefined>): Date => {
  if (typeof $.value !== 'string') {
    throw new TypeError(`Could not convert ${inspect($.value)} to Date.`)
  }

  return parseISO($.value)
}

const toDateFromSeconds = ($: Prism<number | undefined>): Date => {
  if (typeof $.value !== 'number') {
    throw new TypeError(`Could not convert ${inspect($.value)} to Date.`)
  }

  return fromUnixTime($.value)
}

export { toFloat, toBuySell, toDate, toDateFromSeconds }
