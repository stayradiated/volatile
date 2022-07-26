import { useLoaderData, Outlet } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { Card } from '~/components/retro-ui'
import { GetUserDeviceListQuery } from '~/graphql/generated'
import { UserDeviceList } from '~/components/user-device-list'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'

interface LoaderData {
  query: GetUserDeviceListQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken } = await getSessionData(request)

  const query = await sdk.getUserDeviceList(
    {},
    {
      authorization: `Bearer ${authToken}`,
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
