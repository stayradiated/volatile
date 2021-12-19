import { errorListBoundary } from '@stayradiated/error-boundary'

import type { CronHandlerFn } from '../../util/cron-handler.js'

import { marketPriceInstanceList } from './instance.js'
import { fetchMarketPrice } from './fetch-market-price.js'

type Input = Record<string, unknown>
type Output = {
  message: string
}

const fetchMarketPriceHandler: CronHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool } = context

  const error = await errorListBoundary(async () =>
    Promise.all(
      marketPriceInstanceList.map(async (instance) =>
        fetchMarketPrice(pool, instance),
      ),
    ),
  )
  if (error instanceof Error) {
    return error
  }

  return {
    message: `Successfully fetched price for ${marketPriceInstanceList.length} market(s).`,
  }
}

export { fetchMarketPriceHandler }
