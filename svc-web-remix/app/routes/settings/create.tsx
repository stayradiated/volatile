import { useLoaderData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { Card } from '~/components/retro-ui'

import { UserExchangeKeysFormCreate } from '~/components/user-exchange-keys-form-create'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { GetExchangeKeysFormCreateQuery } from '~/graphql/generated'

export const action: ActionFunction = async ({ request }) => {
  const { authToken } = await getSessionData(request)

  const formData = await request.formData()
  const description = formData.get('description')
  const exchangeUID = formData.get('exchange')
  invariant(typeof description === 'string', 'Must have formData.description')
  invariant(typeof exchangeUID === 'string', 'Must have formData.exchange')

  const apiKey = formData.get('apiKey')
  const apiSecret = formData.get('apiSecret')
  const accountId = formData.get('accountId')
  const userId = formData.get('userId')

  const keys = {
    apiKey,
    apiSecret,
    accountId,
    userId,
  }

  await sdk.createUserExchangeKeys(
    {
      description,
      exchangeUID,
      keys,
    },
    {
      authorization: `Bearer ${authToken}`,
    },
  )

  return redirect('/settings')
}

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
  const { query } = useLoaderData<LoaderData>()

  return (
    <Card width={400}>
      <UserExchangeKeysFormCreate query={query} />
    </Card>
  )
}

export default CreateRoute
