import { makeDomainFunction } from 'remix-domains'
import * as z from 'zod'

import { sdk } from '~/utils/api.server'

const updateStripeSubscription = makeDomainFunction(
  z.object({
    subscriptionID: z.string(),
    cancelAtPeriodEnd: z.preprocess((input) => input === 'true', z.boolean()),
  }),
  z.object({
    authToken: z.string(),
  }),
)(async (input, environment) => {
  const { subscriptionID, cancelAtPeriodEnd } = input
  const { authToken } = environment
  return sdk.updateStripeSubscription(
    {
      subscriptionID,
      cancelAtPeriodEnd,
    },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )
})

export { updateStripeSubscription }
