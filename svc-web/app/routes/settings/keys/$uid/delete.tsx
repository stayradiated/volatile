import { useLoaderData } from '@remix-run/react'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import invariant from 'tiny-invariant'

import { UserExchangeKeysDelete } from '~/components/user-exchange-keys-delete'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import type { GetUserExchangeKeysByUidQuery } from '~/graphql/generated'
import { loginRedirect } from '~/utils/redirect.server'

export const action: ActionFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const { uid: userExchangeKeysUid } = params
  invariant(typeof userExchangeKeysUid === 'string', 'Expected params.uid')

  sdk.deleteUserExchangeKeys(
    {
      userExchangeKeysUid,
    },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  return redirect('/settings')
}

type LoaderData = {
  query: {
    getUserExchangeKeysByUid: GetUserExchangeKeysByUidQuery
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const { uid: userExchangeKeysUid } = params
  invariant(userExchangeKeysUid, 'Expected params.uid')

  const getUserExchangeKeysByUid = await sdk.getUserExchangeKeysByUid(
    {
      userExchangeKeysUid,
    },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  const query = {
    getUserExchangeKeysByUid,
  }

  return json<LoaderData>({
    query,
  })
}

const EditRoute = () => {
  const { query } = useLoaderData<LoaderData>()

  return <UserExchangeKeysDelete query={query.getUserExchangeKeysByUid} />
}

export default EditRoute
