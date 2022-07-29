import { useLoaderData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'
import invariant from 'tiny-invariant'

import { UserDeviceDelete } from '~/components/user-device-delete'
import { Card } from '~/components/retro-ui'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import type { GetUserDeviceByUidQuery } from '~/graphql/generated'
import { loginRedirect } from '~/utils/redirect.server'

export const action: ActionFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const { uid: userDeviceUID } = params

  await sdk.deleteUserDevice(
    {
      userDeviceUID,
    },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  return redirect('/account/devices')
}

interface LoaderData {
  userDeviceUID: string
  query: {
    getUserDeviceByUID: GetUserDeviceByUidQuery
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const { uid: userDeviceUID } = params
  invariant(userDeviceUID, 'Expected params.uid')

  const getUserDeviceByUID = await sdk.getUserDeviceByUID(
    {
      userDeviceUID,
    },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  const query = {
    getUserDeviceByUID,
  }

  return json<LoaderData>({
    userDeviceUID,
    query,
  })
}

const DeleteDeviceRoute = () => {
  const { query, userDeviceUID } = useLoaderData<LoaderData>()

  return (
    <Card width={400}>
      <UserDeviceDelete
        userDeviceUID={userDeviceUID}
        query={query.getUserDeviceByUID}
      />
    </Card>
  )
}

export default DeleteDeviceRoute
