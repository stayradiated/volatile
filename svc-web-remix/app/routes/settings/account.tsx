import { useLoaderData, Outlet, Link } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'

import { Page } from '~/components/ui'
import { getSessionData } from '~/utils/auth.server'
import { loginRedirect } from '~/utils/redirect.server'

type LoaderData = {
  userUid: string
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { userUid } = session

  return json<LoaderData>({ userUid })
}

const Account = () => {
  const { userUid } = useLoaderData<LoaderData>()

  return (
    <Page title="Settings → Account">
      <pre>
        <code>Account ID: {userUid}</code>
      </pre>
      <ul>
        <li>
          <Link to="./email">Edit Email</Link>
        </li>
        <li>
          <Link to="./password">Edit Password</Link>
        </li>
        <li>
          <Link to="./2fa">Configure 2FA</Link>
        </li>
        <li>
          <Link to="./devices">Trusted Devices</Link>
        </li>
        <li>
          <Link to="./delete">Delete Account</Link>
        </li>
      </ul>

      <Outlet />
    </Page>
  )
}

export default Account
