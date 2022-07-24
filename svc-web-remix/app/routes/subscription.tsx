import { useLoaderData, Link, Outlet } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { Card } from '~/components/retro-ui'
import { Navigation } from '~/components/navigation'
import { getSessionData } from '~/utils/auth.server'

interface LoaderData {
  isAuthenticatedUser: boolean
  email: string | undefined
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken, email } = await getSessionData(request)
  const isAuthenticatedUser = Boolean(authToken)

  return json<LoaderData>({
    isAuthenticatedUser,
    email,
  })
}

const SubscriptionRoute = () => {
  const { isAuthenticatedUser, email } = useLoaderData()

  return (
    <>
      <Navigation isAuthenticatedUser={isAuthenticatedUser} email={email} />
      <Card>
        <ul>
          <li>
            <Link to="price-list">Price List</Link>
          </li>
          <li>
            <Link to="list">Subscription List</Link>
          </li>
        </ul>
      </Card>
      <Outlet />
    </>
  )
}

export default SubscriptionRoute
