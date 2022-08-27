import { useLoaderData } from '@remix-run/react'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { inputFromFormData } from 'remix-domains'

import type { GetSubscriptionsQuery } from '~/graphql/generated'
import { SubscriptionList } from '~/components/subscription-list'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { loginRedirect } from '~/utils/redirect.server'
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
  query: GetSubscriptionsQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const query = await sdk.getSubscriptions(
    {},
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

  return (
    <>
      <SubscriptionList query={query} />
    </>
  )
}

export default SubscriptionRoute
