import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'
import invariant from 'tiny-invariant'

import { UserDeviceFormEdit } from '~/components/user-device-form-edit'
import { Card } from '~/components/retro-ui'
import { GetUserDeviceByUidQuery } from '~/graphql/generated'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'

interface LoaderData {
  userDeviceUID: string
  query: GetUserDeviceByUidQuery
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const { authToken } = await getSessionData(request)
  const { uid: userDeviceUID } = params

  invariant(userDeviceUID, 'Expected params.uid')

  const query = await sdk.getUserDeviceByUID(
    {
      userDeviceUID,
    },
    {
      authorization: `Bearer ${authToken}`,
    },
  )

  return json<LoaderData>({
    userDeviceUID,
    query,
  })
}

const EditDeviceRoute = () => {
  const { userDeviceUID, query } = useLoaderData<LoaderData>()

  return (
    <Card width={400}>
      <UserDeviceFormEdit userDeviceUID={userDeviceUID} query={query} />
    </Card>
  )
}

export default EditDeviceRoute
