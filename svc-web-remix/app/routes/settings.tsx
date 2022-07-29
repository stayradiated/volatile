import { useLoaderData, Outlet } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { Navigation } from '~/components/navigation'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { GetUserExchangeKeysListQuery } from '~/graphql/generated'
import { UserExchangeKeysList } from '~/components/user-exchange-keys-list'
import { loginRedirect } from '~/utils/redirect.server'

interface LoaderData {
  email: string
  query: GetUserExchangeKeysListQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { email, authToken } = session

  const query = await sdk.getUserExchangeKeysList(
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

const SettingsRoute = () => {
  const { email, query } = useLoaderData<LoaderData>()

  return (
    <>
      <Navigation isAuthenticatedUser email={email} />
      <UserExchangeKeysList query={query} />
      <Outlet />
    </>
  )
}

export default SettingsRoute
