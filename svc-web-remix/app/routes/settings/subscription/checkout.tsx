import { useLoaderData } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'

import { Card } from '~/components/retro-ui'
import type { GetCheckoutPageQuery } from '~/graphql/generated'
import { StripeContainer } from '~/components/subscription-price-list/stripe-container'
import { StripeForm } from '~/components/subscription-price-list/stripe-form'
import { SubscriptionCard } from '~/components/subscription-list'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { loginRedirect } from '~/utils/redirect.server'

type LoaderData = {
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

  const { clientSecret } = query.actionQueryLiveStripeSubscription
  const { publishableKey } = query.actionQueryStripeConfig
  const subscription = query.stripeSubscriptionByPk

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
