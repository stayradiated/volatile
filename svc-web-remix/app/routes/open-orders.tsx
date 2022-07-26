import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { Navigation } from '~/components/navigation'
import { Card } from '~/components/retro-ui'
import { OpenOrderList } from '~/components/open-order-list/index'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { GetOpenOrderListQuery } from '~/graphql/generated'

interface LoaderData {
  isAuthenticatedUser: boolean
  email: string | undefined
  query: GetOpenOrderListQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken, email } = await getSessionData(request)
  const isAuthenticatedUser = Boolean(authToken)

  const query = await sdk.getOpenOrderList(
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

const OpenOrdersRoute = () => {
  const { isAuthenticatedUser, email, query } = useLoaderData<LoaderData>()

  return (
    <>
      <Navigation isAuthenticatedUser={isAuthenticatedUser} email={email} />
      <Card width={1000}>
        <h2>Open Orders</h2>
        <OpenOrderList query={query} />
      </Card>
    </>
  )
}

export default OpenOrdersRoute
