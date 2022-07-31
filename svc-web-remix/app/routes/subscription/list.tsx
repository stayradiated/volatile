import { useLoaderData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json } from '@remix-run/node'
import { makeDomainFunction, inputFromFormData } from 'remix-domains'
import * as z from 'zod'

import { Navigation } from '~/components/navigation'
import { GetSubscriptionsQuery } from '~/graphql/generated'
import { SubscriptionList } from '~/components/subscription-list'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { loginRedirect } from '~/utils/redirect.server'

const updateStripeSubscription = makeDomainFunction(
  z.object({
    subscriptionID: z.string(),
  }),
  z.object({
    authToken: z.string(),
    cancelAtPeriodEnd: z.boolean(),
  }),
)(async (input, environment) => {
  const { subscriptionID } = input
  const { authToken, cancelAtPeriodEnd } = environment
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

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const formData = await request.formData()
  const action = formData.get('_action')

  switch (action) {
    case 'cancelStripeSubscription': {
      return updateStripeSubscription(inputFromFormData(formData), {
        authToken,
        cancelAtPeriodEnd: true,
      })
    }

    case 'resumeStripeSubscription': {
      return updateStripeSubscription(inputFromFormData(formData), {
        authToken,
        cancelAtPeriodEnd: false,
      })
    }

    default: {
      throw new Error(`Invalid action: "${action}"`)
    }
  }
}

interface LoaderData {
  query: GetSubscriptionsQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { email, authToken } = session

  const query = await sdk.getSubscriptions(
    {},
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  return json<LoaderData>({
    email,
    query,
  })
}

const SubscriptionRoute = () => {
  const { email, query } = useLoaderData<LoaderData>()

  return (
    <>
      <Navigation isAuthenticatedUser email={email} />
      <SubscriptionList query={query} />
    </>
  )
}

export default SubscriptionRoute
