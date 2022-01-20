import { errorListBoundary } from '@stayradiated/error-boundary'
import { startOfToday, subDays, formatISO } from 'date-fns'

import type { CronHandlerFn } from '../../util/cron-handler.js'

import { syncCurrencyFx } from '../../model/currency-fx/index.js'

type Input = Record<string, unknown>
type Output = {
  message: string
}

const pairs: Array<[string, string]> = [
  ['BTC', 'NZD'],
  // ['ETH', 'NZD'],
]

const fetchCurrencyFxHandler: CronHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool } = context

  const endDate = startOfToday()
  const startDate = subDays(endDate, 30)

  const results = await errorListBoundary(async () =>
    Promise.all(
      pairs.map(async (pair) => {
        const [fromSymbol, toSymbol] = pair

        return syncCurrencyFx(pool, {
          startDate,
          endDate,
          fromSymbol,
          toSymbol,
        })
      }),
    ),
  )
  if (results instanceof Error) {
    return results
  }

  const totalDays = results.reduce((sum, result) => {
    return sum + result.count
  }, 0)

  return {
    message: `Successfully fetched ${totalDays} records for ${pairs.length} pair(s) from ${formatISO(startDate)} to ${formatISO(endDate)}.`,
  }
}

export { fetchCurrencyFxHandler }
