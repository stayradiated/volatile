import { useLoaderData, Outlet } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { Page } from '~/components/ui'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { GetUserExchangeKeysListQuery } from '~/graphql/generated'
import { UserExchangeKeysList } from '~/components/user-exchange-keys-list'
import { loginRedirect } from '~/utils/redirect.server'

interface LoaderData {
  query: GetUserExchangeKeysListQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const query = await sdk.getUserExchangeKeysList(
    {},
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  return json<LoaderData>({
    query,
  })
}

const SettingsRoute = () => {
  const { query } = useLoaderData<LoaderData>()

  return (
    <Page title="Settings">
      <h2>☰ Exchange API List</h2>
      <UserExchangeKeysList query={query} />
      <Outlet />
    </Page>
  )
}

export default SettingsRoute
