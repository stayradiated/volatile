import { useLoaderData, Outlet, Link } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { Card } from '~/components/retro-ui'
import { Navigation } from '~/components/navigation'
import { getSessionData } from '~/utils/auth.server'
import { loginRedirect } from '~/utils/redirect.server'

interface LoaderData {
  userUID: string
  email: string
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { userUID, email } = session

  return json<LoaderData>({ userUID, email })
}

const Account = () => {
  const { userUID, email } = useLoaderData<LoaderData>()

  return (
    <>
      <Navigation isAuthenticatedUser email={email} />

      <Card>
        <pre><code>Account ID: {userUID}</code></pre>
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
