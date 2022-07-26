import { useLoaderData, Outlet, Link } from '@remix-run/react'
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

const Account = () => {
  const { isAuthenticatedUser, email } = useLoaderData<LoaderData>()

  return (
    <>
      <Navigation isAuthenticatedUser={isAuthenticatedUser} email={email} />

      <Card>
        <ul>
          <li>
            <Link to="/account/email">Edit Email</Link>
          </li>
          <li>
            <Link to="/account/password">Edit Password</Link>
          </li>
          <li>
            <Link to="/account/2fa">Configure 2FA</Link>
          </li>
          <li>
            <Link to="/account/devices">Trusted Devices</Link>
          </li>
          <li>
            <Link to="/account/delete">Delete Account</Link>
          </li>
        </ul>
      </Card>

      <Outlet />
    </>
  )
}

export default Account
