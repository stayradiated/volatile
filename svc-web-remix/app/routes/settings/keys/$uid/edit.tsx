import { useLoaderData } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { Card } from '~/components/retro-ui'

import { UserExchangeKeysFormEdit } from '~/components/user-exchange-keys-form-edit'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import type { GetUserExchangeKeysFormEditQuery } from '~/graphql/generated'
import { loginRedirect } from '~/utils/redirect.server'

type LoaderData = {
  userExchangeKeysUid: string
  query: GetUserExchangeKeysFormEditQuery
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const { uid: userExchangeKeysUid } = params
  invariant(userExchangeKeysUid, 'Expected params.uid')

  const query = await sdk.getUserExchangeKeysFormEdit(
    {
      userExchangeKeysUid,
    },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  return json<LoaderData>({
    userExchangeKeysUid,
    query,
  })
}

const EditRoute = () => {
  const { query, userExchangeKeysUid } = useLoaderData<LoaderData>()

  return (
    <Card width={400}>
      <UserExchangeKeysFormEdit
        userExchangeKeysUid={userExchangeKeysUid}
        query={query}
      />
    </Card>
  )
}

export default EditRoute
