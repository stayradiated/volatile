import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { GetSubscriptionsQuery } from '~/graphql/generated'
import { SubscriptionList } from '~/components/subscription-list'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'

interface LoaderData {
  isAuthenticatedUser: boolean
  email: string | undefined
  query: GetSubscriptionsQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken, email } = await getSessionData(request)
  const isAuthenticatedUser = Boolean(authToken)

  const query = await sdk.getSubscriptions(
    {},
    {
      authorization: `Bearer ${authToken}`,
    },
  )

  return json<LoaderData>({
    isAuthenticatedUser,
    email,
    query,
  })
}

const SubscriptionRoute = () => {
  const { query } = useLoaderData()

  return (
    <>
      <SubscriptionList query={query} />
    </>
  )
}

export default SubscriptionRoute
