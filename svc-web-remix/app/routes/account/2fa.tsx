import { Link } from '@remix-run/react'
import { useLoaderData, Outlet } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { promiseHash } from 'remix-utils'

import { Card } from '~/components/retro-ui'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { GetUser2FaQuery } from '~/graphql/generated'

interface LoaderData {
  query: {
    getUser2FA: GetUser2FaQuery
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken } = await getSessionData(request)
  invariant(authToken, 'Must be logged in.')

  const query = await promiseHash({
    getUser2FA: sdk.getUser2FA({}, { authorization: `Bearer ${authToken}` }),
  })

  return json<LoaderData>({ query })
}

const Account = () => {
  const { query } = useLoaderData<LoaderData>()

  console.log(query)

  const has2FA = query.getUser2FA.kc_user[0].user_2fa?.uid

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
