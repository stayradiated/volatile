import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { Card } from '~/components/retro-ui'

import { UserExchangeKeysFormEdit } from '~/components/user-exchange-keys-form-edit'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { GetUserExchangeKeysFormEditQuery } from '~/graphql/generated'
import { loginRedirect } from '~/utils/redirect.server'

interface LoaderData {
  userExchangeKeysUID: string
  query: GetUserExchangeKeysFormEditQuery
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const { uid: userExchangeKeysUID } = params
  invariant(userExchangeKeysUID, 'Expected params.uid')

  const query = await sdk.getUserExchangeKeysFormEdit(
    {
      userExchangeKeysUID,
    },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  return json<LoaderData>({
    userExchangeKeysUID,
    query,
  })
}

const EditRoute = () => {
  const { query, userExchangeKeysUID } = useLoaderData<LoaderData>()

  return (
    <Card width={400}>
      <UserExchangeKeysFormEdit
        userExchangeKeysUID={userExchangeKeysUID}
        query={query}
      />
    </Card>
  )
}

export default EditRoute
