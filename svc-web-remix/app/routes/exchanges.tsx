import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'
import { subHours, formatISO } from 'date-fns'

import { Navigation } from '~/components/navigation'
import { ExchangeList } from '~/components/exchange-list'
import { getSessionData, NonGuestSession } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { GetExchangeListQuery } from '~/graphql/generated'
import { loginRedirect } from '~/utils/redirect.server'

interface LoaderData {
  session: NonGuestSession
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
    session,
    query,
  })
}

const Exchanges = () => {
  const { session, query } = useLoaderData<LoaderData>()

  return (
    <>
      <Navigation isAuthenticatedUser email={session.email} />
      <ExchangeList query={query} />
    </>
  )
}

export default Exchanges
