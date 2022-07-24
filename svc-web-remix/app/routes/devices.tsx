import { useLoaderData, Outlet } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { Card } from '~/components/retro-ui'
import { GetUserDeviceListQuery } from '~/graphql/generated'
import { Navigation } from '~/components/navigation'
import { UserDeviceList } from '~/components/user-device-list'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'

interface LoaderData {
  isAuthenticatedUser: boolean
  email: string | undefined
  query: GetUserDeviceListQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken, email } = await getSessionData(request)
  const isAuthenticatedUser = Boolean(authToken)

  const query = await sdk.getUserDeviceList(
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

const DevicesRoute = () => {
  const { isAuthenticatedUser, email, query } = useLoaderData()

  return (
    <>
      <Navigation isAuthenticatedUser={isAuthenticatedUser} email={email} />
      <Card width={1000}>
        <h2>Devices</h2>
        <UserDeviceList query={query} />
      </Card>
      <Outlet />
    </>
  )
}

export default DevicesRoute
