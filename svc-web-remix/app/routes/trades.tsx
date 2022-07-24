import { useLoaderData, Outlet } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { TradeList } from '~/components/trade-list/index'
import { Navigation } from '~/components/navigation'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { GetTradeListQuery } from '~/graphql/generated'

interface LoaderData {
  isAuthenticatedUser: boolean
  email: string | undefined
  query: GetTradeListQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken, email } = await getSessionData(request)
  const isAuthenticatedUser = Boolean(authToken)

  const query = await sdk.getTradeList(
    {
      offset: 0,
      limit: 100,
      filters: {
        timestamp: { _gte: undefined, _lte: undefined },
        exchange_uid: {
          _eq: undefined,
        },
        primary_currency: {
          _eq: undefined,
        },
        secondary_currency: {
          _eq: undefined,
        },
      },
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

const TradesRoute = () => {
  const { isAuthenticatedUser, email, query } = useLoaderData<LoaderData>()

  return (
    <>
      <Navigation isAuthenticatedUser={isAuthenticatedUser} email={email} />

      {/* <Card> */}
      {/*   <h1>Trades</h1> */}
      {/*  */}
      {/*   <SelectExchange onChange={} /> */}
      {/*   <SelectAsset onChange={} /> */}
      {/*   <SelectCurrency onChange={} /> */}
      {/*  */}
      {/*   <DateInput value={} onChange={} /> */}
      {/*   <DateInput value={} onChange={} /> */}
      {/* </Card> */}

      <TradeList query={query} />
    </>
  )
}

export default TradesRoute
