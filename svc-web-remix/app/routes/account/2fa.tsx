import { Link, useLoaderData, Outlet } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { promiseHash } from 'remix-utils'

import { Card } from '~/components/retro-ui'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import type { GetUser2FaQuery } from '~/graphql/generated'
import { loginRedirect } from '~/utils/redirect.server'

type LoaderData = {
  query: {
    getUser2FA: GetUser2FaQuery
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const query = await promiseHash({
    getUser2FA: sdk.getUser2FA(
      {},
      {
        authorization: `Bearer ${authToken}`,
        'x-hasura-role': 'user',
      },
    ),
  })

  return json<LoaderData>({ query })
}

const Account = () => {
  const { query } = useLoaderData<LoaderData>()

  const has2FA = query.getUser2FA.user[0].user2fa?.uid

  if (has2FA) {
    return (
      <>
        <Card>
          <h3>You have 2FA Enabled</h3>
          <Link to="/account/2fa/delete">Remove 2FA</Link>
        </Card>
        <Outlet />
      </>
    )
  }

  return (
    <>
      <Card>
        <h3>You do not have 2FA Enabled</h3>
        <Link to="/account/2fa/enable">Enable 2FA</Link>
      </Card>
      <Outlet />
    </>
  )
}

export default Account
