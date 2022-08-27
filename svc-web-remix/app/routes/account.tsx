import { useLoaderData, Outlet, Link } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'

import { Card } from '~/components/retro-ui'
import { Navigation } from '~/components/navigation'
import { getSessionData } from '~/utils/auth.server'
import { loginRedirect } from '~/utils/redirect.server'

type LoaderData = {
  userUid: string
  email: string
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { userUid, email } = session

  return json<LoaderData>({ userUid, email })
}

const Account = () => {
  const { userUid, email } = useLoaderData<LoaderData>()

  return (
    <>
      <Navigation isAuthenticatedUser email={email} />

      <Card>
        <pre>
          <code>Account ID: {userUid}</code>
        </pre>
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
