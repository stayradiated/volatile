import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { Card } from '~/components/retro-ui'

import { UserExchangeKeysFormEdit } from '~/components/user-exchange-keys-form-edit'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { GetUserExchangeKeysFormEditQuery } from '~/graphql/generated'

interface LoaderData {
  userExchangeKeysUID: string
  query: GetUserExchangeKeysFormEditQuery
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const { authToken } = await getSessionData(request)
  const { uid: userExchangeKeysUID } = params

  invariant(userExchangeKeysUID, 'Expected params.uid')

  const query = await sdk.getUserExchangeKeysFormEdit(
    {
      userExchangeKeysUID,
    },
    {
      authorization: `Bearer ${authToken}`,
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
