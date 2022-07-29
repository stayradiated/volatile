import { useLoaderData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'
import invariant from 'tiny-invariant'

import { UserExchangeKeysDelete } from '~/components/user-exchange-keys-delete'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { GetUserExchangeKeysByUidQuery } from '~/graphql/generated'
import { loginRedirect } from '~/utils/redirect.server'

export const action: ActionFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const { uid: userExchangeKeysUID } = params
  invariant(userExchangeKeysUID, 'Expected params.uid')

  sdk.deleteUserExchangeKeys(
    {
      userExchangeKeysUID,
    },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  return redirect('/settings')
}

interface LoaderData {
  query: {
    getUserExchangeKeysByUID: GetUserExchangeKeysByUidQuery
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const { uid: userExchangeKeysUID } = params
  invariant(userExchangeKeysUID, 'Expected params.uid')

  const getUserExchangeKeysByUID = await sdk.getUserExchangeKeysByUID(
    {
      userExchangeKeysUID,
    },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  const query = {
    getUserExchangeKeysByUID,
  }

  return json<LoaderData>({
    query,
  })
}

const EditRoute = () => {
  const { query } = useLoaderData<LoaderData>()

  return <UserExchangeKeysDelete query={query.getUserExchangeKeysByUID} />
}

export default EditRoute
