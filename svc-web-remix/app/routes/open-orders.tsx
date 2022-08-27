import { useLoaderData } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'

import { Navigation } from '~/components/navigation'
import { Card } from '~/components/retro-ui'
import { OpenOrderList } from '~/components/open-order-list/index'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import type { GetOpenOrderListQuery } from '~/graphql/generated'
import { loginRedirect } from '~/utils/redirect.server'

type LoaderData = {
  email: string
  query: GetOpenOrderListQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken, email } = session

  const query = await sdk.getOpenOrderList(
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

const OpenOrdersRoute = () => {
  const { email, query } = useLoaderData<LoaderData>()

  return (
    <>
      <Navigation isAuthenticatedUser email={email} />
      <Card width={1000}>
        <h2>Open Orders</h2>
        <OpenOrderList query={query} />
      </Card>
    </>
  )
}

export default OpenOrdersRoute
