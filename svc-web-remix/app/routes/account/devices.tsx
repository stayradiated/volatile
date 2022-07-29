import { useLoaderData, Outlet } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { Card } from '~/components/retro-ui'
import { GetUserDeviceListQuery } from '~/graphql/generated'
import { UserDeviceList } from '~/components/user-device-list'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { loginRedirect } from '~/utils/redirect.server'

interface LoaderData {
  query: GetUserDeviceListQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const query = await sdk.getUserDeviceList(
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

const DevicesRoute = () => {
  const { query } = useLoaderData<LoaderData>()

  return (
    <>
      <Card width={1000}>
        <h2>Devices</h2>
        <UserDeviceList query={query} />
      </Card>
      <Outlet />
    </>
  )
}

export default DevicesRoute
