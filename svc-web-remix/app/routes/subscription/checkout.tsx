import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, json, redirect } from '@remix-run/node'

import { Card } from '~/components/retro-ui'
import { GetCheckoutPageQuery } from '~/graphql/generated'
import { StripeContainer } from '~/components/subscription-price-list/stripe-container'
import { StripeForm } from '~/components/subscription-price-list/stripe-form'
import { SubscriptionCard } from '~/components/subscription-list'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { loginRedirect } from '~/utils/redirect.server'

interface LoaderData {
  query: GetCheckoutPageQuery
}

export const loader: LoaderFunction = async ({ request }) => {
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

  const clientSecret = query.action_query_live_stripe_subscription.client_secret
  const publishableKey = query.action_query_stripe_config.publishable_key
  const subscription = query.stripe_subscription_by_pk

  if (!subscription) {
    return <p>Error: could not find that subscription.</p>
  }

  return (
    <>
      <Card>
        <SubscriptionCard subscription={subscription} />
      </Card>
      <Card>
        <StripeContainer publishableKey={publishableKey}>
          <StripeForm clientSecret={clientSecret} />
        </StripeContainer>
      </Card>
    </>
  )
}

export default SubscriptionRoute
