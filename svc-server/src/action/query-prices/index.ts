import { stripe } from '../../util/stripe.js'

import type { ActionHandlerFn } from '../../util/action-handler.js'

type Input = Record<string, never>

type PriceOutput = {
  id: string
  type: string
  interval: string | undefined
  interval_count: number | undefined
  currency: string
  unit_amount: number
}

type Output = PriceOutput[]

const queryPrices: ActionHandlerFn<Input, Output> = async (_context) => {
  const prices = await stripe.prices.list({
    active: true,
    expand: ['data.product'],
  })

  return prices.data.map<PriceOutput>((price) => ({
    id: price.id,
    type: price.type,
    interval: price.recurring?.interval,
    interval_count: price.recurring?.interval_count,
    currency: price.currency,
    unit_amount: price.unit_amount ?? 0,
  }))
}

export { queryPrices }
