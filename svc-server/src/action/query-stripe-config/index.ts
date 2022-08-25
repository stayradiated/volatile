import * as z from 'zod'
import { config } from '../../env.js'

import type { ActionHandler } from '../../util/action-handler.js'

const schema = {
  input: {},
  output: {
    publishableKey: z.string(),
  },
}
const queryStripeConfig: ActionHandler<typeof schema> = {
  schema,
  async handler(_context) {
    return {
      publishableKey: config.STRIPE_PUBLISHABLE_KEY,
    }
  },
}

export { queryStripeConfig }
