import { errorListBoundary } from '@stayradiated/error-boundary'

import type { CronHandlerFn } from '../../util/cron-handler.js'

import { fetchStripeProducts } from './fetch-stripe-products.js'
import { fetchStripePrices } from './fetch-stripe-prices.js'
import { fetchStripeSubscriptions } from './fetch-stripe-subscriptions.js'

type Input = Record<string, unknown>
type Output = {
  message: string
}

const fetchStripe: CronHandlerFn<Input, Output> = async (context) => {
  const { pool } = context

  const messages = await errorListBoundary(async () => [
    await fetchStripeProducts(pool),
    await fetchStripePrices(pool),
    await fetchStripeSubscriptions(pool),
  ])

  if (messages instanceof Error) {
    return messages
  }

  return {
    message: messages.join(' • '),
  }
}

export { fetchStripe }
