import { useLoaderData } from '@remix-run/react'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
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

  const { uid: userDeviceUid } = params
  invariant(typeof userDeviceUid === 'string', 'params.uid must exist')

  await sdk.deleteUserDevice(
    {
      userDeviceUid,
    },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  return redirect('/account/devices')
}

type LoaderData = {
  userDeviceUid: string
  query: {
    getUserDeviceByUid: GetUserDeviceByUidQuery
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const { uid: userDeviceUid } = params
  invariant(userDeviceUid, 'Expected params.uid')

  const getUserDeviceByUid = await sdk.getUserDeviceByUid(
    {
      userDeviceUid,
    },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  const query = {
    getUserDeviceByUid,
  }

  return json<LoaderData>({
    userDeviceUid,
    query,
  })
}

const DeleteDeviceRoute = () => {
  const { query, userDeviceUid } = useLoaderData<LoaderData>()

  return (
    <Card width={400}>
      <UserDeviceDelete
        userDeviceUid={userDeviceUid}
        query={query.getUserDeviceByUid}
      />
    </Card>
  )
}

export default DeleteDeviceRoute
