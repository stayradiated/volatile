import { useLoaderData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'

import { Card } from '~/components/retro-ui'
import { GetCheckoutPageQuery } from '~/graphql/generated'
import { StripeContainer } from '~/components/subscription-price-list/stripe-container'
import { StripeForm } from '~/components/subscription-price-list/stripe-form'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { loginRedirect } from '~/utils/redirect.server'

export const action: ActionFunction = async ({ request }) => {
  return null
}

interface LoaderData {
  query: GetCheckoutPageQuery
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const subscriptionID = new URL(request.url).searchParams.get('id')
  if (typeof subscriptionID !== 'string') {
    return redirect('/subscription')
  }

  const query = await sdk.getCheckoutPage(
    {
      subscriptionID,
    },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  return json<LoaderData>({
    query,
  })
}

const SubscriptionRoute = () => {
  const { query } = useLoaderData<LoaderData>()
  const clientSecret = query.query_live_stripe_subscription.client_secret

  return (
    <>
      <Card>
        <StripeContainer query={query}>
          <StripeForm clientSecret={clientSecret} />
        </StripeContainer>
      </Card>
    </>
  )
}

export default SubscriptionRoute
