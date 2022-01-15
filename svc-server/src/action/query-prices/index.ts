import { stripe } from '../../util/stripe.js'

import type { ActionHandlerFn } from '../../util/action-handler.js'

type Input = Record<string, never>

type Output = {
  prices: unknown[]
}

const queryPrices: ActionHandlerFn<Input, Output> = async (
  _context,
) => {
  const prices = await stripe.prices.list({
    active: true,
    expand: ['data.product']
  });

  return {
    prices: prices.data
  }
}

export { queryPrices }
