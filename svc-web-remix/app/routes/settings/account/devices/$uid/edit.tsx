import { useLoaderData } from '@remix-run/react'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import invariant from 'tiny-invariant'

import { UserDeviceFormEdit } from '~/components/user-device-form-edit'
import { Card } from '~/components/retro-ui'
import type { GetUserDeviceByUidQuery } from '~/graphql/generated'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { loginRedirect } from '~/utils/redirect.server'

export const action: ActionFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const { uid: userDeviceUid } = params
  invariant(userDeviceUid, 'Must have params.uid')

  const formData = await request.formData()
  const name = formData.get('name')
  invariant(typeof name === 'string', 'Must have formData.name')

  await sdk.updateUserDevice(
    {
      userDeviceUid,
      name,
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
  query: GetUserDeviceByUidQuery
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const { uid: userDeviceUid } = params
  invariant(userDeviceUid, 'Expected params.uid')

  const query = await sdk.getUserDeviceByUid(
    {
      userDeviceUid,
    },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  return json<LoaderData>({
    userDeviceUid,
    query,
  })
}

const EditDeviceRoute = () => {
  const { userDeviceUid, query } = useLoaderData<LoaderData>()

  return (
    <Card width={400}>
      <UserDeviceFormEdit userDeviceUid={userDeviceUid} query={query} />
    </Card>
  )
}

export default EditDeviceRoute
