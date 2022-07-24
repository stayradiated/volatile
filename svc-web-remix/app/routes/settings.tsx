import { useLoaderData, Outlet } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { Navigation } from '~/components/navigation'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { GetUserExchangeKeysListQuery } from '~/graphql/generated'
import { UserExchangeKeysList } from '~/components/user-exchange-keys-list'

interface LoaderData {
  isAuthenticatedUser: boolean
  email: string | undefined
  query: GetUserExchangeKeysListQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken, email } = await getSessionData(request)
  const isAuthenticatedUser = Boolean(authToken)

  const query = await sdk.getUserExchangeKeysList(
    {},
    {
      authorization: `Bearer ${authToken}`,
    },
  )

  return json<LoaderData>({
    isAuthenticatedUser,
    email,
    query,
  })
}

const SettingsRoute = () => {
  const { isAuthenticatedUser, email, query } = useLoaderData<LoaderData>()

  return (
    <>
      <Navigation isAuthenticatedUser={isAuthenticatedUser} email={email} />
      <UserExchangeKeysList query={query} />
      <Outlet />
    </>
  )
}

export default SettingsRoute
