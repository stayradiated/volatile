import { useLoaderData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json } from '@remix-run/node'
import { promiseHash } from 'remix-utils'
import { makeDomainFunction, inputFromForm } from 'remix-domains'
import * as z from 'zod'

import { Card } from '~/components/retro-ui'
import { GetSubscriptionsQuery, GetStripeConfigQuery } from '~/graphql/generated'
import { StripeContainer } from '~/components/subscription-price-list/stripe-container'
import { StripeForm } from '~/components/subscription-price-list/stripe-form'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { loginRedirect } from '~/utils/redirect.server'

export const action: ActionFunction = async ({ request }) => {
  return null
}

interface LoaderData {
  query: {
    incompleteSubscriptions: GetSubscriptionsQuery,
    stripeConfig: GetStripeConfigQuery
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const incompleteSubscriptions = sdk.getSubscriptions({
    status: 'incomplete'
  }, {
    authorization: `Bearer ${authToken}`,
    'x-hasura-role': 'user',
  })

  const stripeConfig = sdk.getStripeConfig(
    {},
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  const query = await promiseHash({
    incompleteSubscriptions,
    stripeConfig
  })

  return json<LoaderData>({
    query,
  })
}

const SubscriptionRoute = () => {
  const { query } = useLoaderData<LoaderData>()
  const clientSecret = query.incompleteSubscriptions.query_subscriptions?.subscriptions[0]?.latest_invoice?.payment_intent?.client_secret ?? ''

  return (
    <>
      <Card>
        <StripeContainer query={query.stripeConfig}>
          <StripeForm clientSecret={clientSecret} />
        </StripeContainer>
      </Card>
    </>
  )
}

export default SubscriptionRoute
