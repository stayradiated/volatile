import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'
import { Card } from '~/components/retro-ui'

import { UserExchangeKeysFormCreate } from '~/components/user-exchange-keys-form-create'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { GetExchangeKeysFormCreateQuery } from '~/graphql/generated'

interface LoaderData {
  query: GetExchangeKeysFormCreateQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken } = await getSessionData(request)

  const query = await sdk.getExchangeKeysFormCreate(
    {},
    {
      authorization: `Bearer ${authToken}`,
    },
  )

  return json<LoaderData>({
    query,
  })
}

const CreateRoute = () => {
  const { query } = useLoaderData()

  return (
    <Card width={400}>
      <UserExchangeKeysFormCreate query={query} />
    </Card>
  )
}

export default CreateRoute
