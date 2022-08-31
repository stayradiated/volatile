import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { safeRedirect } from '~/utils/redirect.server'
import { Card } from '~/components/retro-ui'

type LoaderData = {
  userList: Array<{
    uid: string
    createdAt: string
    emailVerified: boolean
  }>
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role !== 'admin') {
    return safeRedirect(request, '/admin/login')
  }

  const query = await sdk.getUserList(
    {},
    {
      'x-hasura-role': 'admin',
      authorization: `Bearer ${session.authToken}`,
    },
  )
  const userList = query.user

  return json<LoaderData>({ userList })
}

const UserRoute = () => {
  const { userList } = useLoaderData<LoaderData>()

  return (
    <Card width={1200}>
      <ul>
        {userList.map((user) => (
          <li>
            {user.uid} | {user.createdAt} | {String(user.emailVerified)}
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UserRoute
