import { useLoaderData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'
import invariant from 'tiny-invariant'

import { UserDeviceFormEdit } from '~/components/user-device-form-edit'
import { Card } from '~/components/retro-ui'
import { GetUserDeviceByUidQuery } from '~/graphql/generated'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { loginRedirect } from '~/utils/redirect.server'

export const action: ActionFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const { uid: userDeviceUID } = params
  invariant(userDeviceUID, 'Must have params.uid')

  const formData = await request.formData()
  const name = formData.get('name')
  invariant(typeof name === 'string', 'Must have formData.name')

  await sdk.updateUserDevice(
    {
      userDeviceUID,
      name,
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
  query: GetUserDeviceByUidQuery
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const { uid: userDeviceUID } = params
  invariant(userDeviceUID, 'Expected params.uid')

  const query = await sdk.getUserDeviceByUID(
    {
      userDeviceUID,
    },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
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
