import { Link, useLoaderData, Outlet } from '@remix-run/react'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { inputFromFormData } from 'remix-domains'

import { Card } from '~/components/retro-ui'
import { Navigation } from '~/components/navigation'
import { SubscriptionCard } from '~/components/subscription-list'
import { getSessionData } from '~/utils/auth.server'
import { loginRedirect } from '~/utils/redirect.server'
import { sdk } from '~/utils/api.server'
import type { GetSubscriptionStatusQuery } from '~/graphql/generated'
import { updateStripeSubscription } from '~/actions'

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const formData = await request.formData()
  const action = formData.get('_action')

  switch (action) {
    case 'updateStripeSubscription': {
      return updateStripeSubscription(inputFromFormData(formData), {
        authToken,
      })
    }

    default: {
      throw new Error(`Invalid action: "${action}"`)
    }
  }
}

type LoaderData = {
  email: string
  query: GetSubscriptionStatusQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { email, authToken } = session

  const query = await sdk.getSubscriptionStatus(
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

  const activeSubscription = query.activeStripeSubscription[0]
  const incompleteSubscription = query.incompleteStripeSubscription[0]

  return (
    <>
      <Navigation isAuthenticatedUser email={email} />
      <Card>
        {activeSubscription && (
          <SubscriptionCard subscription={activeSubscription} />
        )}
        {incompleteSubscription && (
          <p>
            <Link to={`/subscription/checkout?id=${incompleteSubscription.id}`}>
              Resume your subscription
            </Link>
          </p>
        )}
        {!activeSubscription && !incompleteSubscription && (
          <>
            <p>No Active Subscription :(</p>
            <ul>
              <li>
                <Link to="price-list">Subscribe!</Link>
              </li>
              {(query.stripeSubscriptionAggregate.aggregate?.count ?? 0) >
                0 && (
                <li>
                  <Link to="list">Your Previous Subscriptions</Link>
                </li>
              )}
            </ul>
          </>
        )}
      </Card>
      <Outlet />
    </>
  )
}

export default SubscriptionRoute
