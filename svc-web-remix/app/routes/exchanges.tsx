import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'
import { subHours, formatISO } from 'date-fns'

import { Navigation } from '~/components/navigation'
import { ExchangeList } from '~/components/exchange-list'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { GetExchangeListQuery } from '~/graphql/generated'

interface LoaderData {
  isAuthenticatedUser: boolean
  email: string | undefined
  query: GetExchangeListQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken, email } = await getSessionData(request)
  const isAuthenticatedUser = Boolean(authToken)

  const currentTimestamp = new Date()
  const historicTimestamp = subHours(currentTimestamp, 24)

  const query = await sdk.getExchangeList(
    {
      currentTimestamp: formatISO(currentTimestamp),
      historicTimestamp: formatISO(historicTimestamp),
    },
    {
      authorization: `Bearer ${authToken}`,
    },
  )

  return json<LoaderData>({
    isAuthenticatedUser,
    email,
    query,
  })
}

const Exchanges = () => {
  const { isAuthenticatedUser, email, query } = useLoaderData<LoaderData>()

  return (
    <>
      <Navigation isAuthenticatedUser={isAuthenticatedUser} email={email} />
      <ExchangeList query={query} />
    </>
  )
}

export default Exchanges
