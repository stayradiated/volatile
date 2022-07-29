import { useLoaderData, Outlet, Link } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { Card } from '~/components/retro-ui'
import { Navigation } from '~/components/navigation'
import { getSessionData } from '~/utils/auth.server'
import { loginRedirect } from '~/utils/redirect.server'

interface LoaderData {
  email: string | undefined
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { email } = session

  return json<LoaderData>({ email })
}

const Account = () => {
  const { email } = useLoaderData<LoaderData>()

  return (
    <>
      <Navigation isAuthenticatedUser email={email} />

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
