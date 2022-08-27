import { useLoaderData } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { subHours, formatISO } from 'date-fns'

import { Page } from '~/components/ui'
import { ExchangeList } from '~/components/exchange-list'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import type { GetExchangeListQuery } from '~/graphql/generated'
import { loginRedirect } from '~/utils/redirect.server'

type LoaderData = {
  query: GetExchangeListQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const currentTimestamp = new Date()
  const historicTimestamp = subHours(currentTimestamp, 24)

  const query = await sdk.getExchangeList(
    {
      currentTimestamp: formatISO(currentTimestamp),
      historicTimestamp: formatISO(historicTimestamp),
    },
    {
      authorization: `Bearer ${session.authToken}`,
      'x-hasura-role': 'user',
    },
  )

  return json<LoaderData>({
    query,
  })
}

const Exchanges = () => {
  const { query } = useLoaderData<LoaderData>()

  return (
    <Page title="Exchanges">
      <ExchangeList query={query} />
    </Page>
  )
}

export default Exchanges
