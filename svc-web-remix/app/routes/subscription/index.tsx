import { Link } from '@remix-run/react'
import { useLoaderData, Outlet } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { Card } from '~/components/retro-ui'
import { Navigation } from '~/components/navigation'
import { getSessionData } from '~/utils/auth.server'
import { loginRedirect } from '~/utils/redirect.server'

interface LoaderData {
  email: string
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { email } = session

  return json<LoaderData>({
    email,
  })
}

const SubscriptionRoute = () => {
  const { email } = useLoaderData<LoaderData>()

  return (
    <>
      <Navigation isAuthenticatedUser email={email} />
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
