import { useLoaderData } from '@remix-run/react'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { Card } from '~/components/retro-ui'

import { UserExchangeKeysFormCreate } from '~/components/user-exchange-keys-form-create'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import type { GetExchangeKeysFormCreateQuery } from '~/graphql/generated'
import { loginRedirect } from '~/utils/redirect.server'

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const formData = await request.formData()
  const description = formData.get('description')
  const exchangeUid = formData.get('exchange')
  invariant(typeof description === 'string', 'Must have formData.description')
  invariant(typeof exchangeUid === 'string', 'Must have formData.exchange')

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
      exchangeUid,
      keys,
    },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  return redirect('/settings')
}

type LoaderData = {
  query: GetExchangeKeysFormCreateQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const query = await sdk.getExchangeKeysFormCreate(
    {},
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
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
