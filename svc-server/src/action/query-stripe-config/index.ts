import { STRIPE_PUBLISHABLE_KEY } from '../../env.js'

import type { ActionHandlerFn } from '../../util/action-handler.js'

type Input = Record<string, never>

type Output = {
  publishable_key: string
}

const queryStripeConfig: ActionHandlerFn<Input, Output> = async (_context) => {
  return {
    publishable_key: STRIPE_PUBLISHABLE_KEY,
  }
}

export { queryStripeConfig }
