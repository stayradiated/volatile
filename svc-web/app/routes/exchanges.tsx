import { useLoaderData } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { subHours, formatISO } from 'date-fns'
import { promiseHash } from 'remix-utils'

import { Page } from '~/components/ui'
import { ExchangeList } from '~/components/exchange-list'
import { OpenOrderList } from '~/components/open-order-list/index'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import type {
  GetExchangeListQuery,
  GetOpenOrderListQuery,
} from '~/graphql/generated'
import { loginRedirect } from '~/utils/redirect.server'

type LoaderData = {
  query: {
    exchangeList: GetExchangeListQuery
    openOrderList: GetOpenOrderListQuery
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const currentTimestamp = new Date()
  const historicTimestamp = subHours(currentTimestamp, 24)

  const query = await promiseHash({
    exchangeList: sdk.getExchangeList(
      {
        currentTimestamp: formatISO(currentTimestamp),
        historicTimestamp: formatISO(historicTimestamp),
      },
      {
        authorization: `Bearer ${session.authToken}`,
        'x-hasura-role': 'user',
      },
    ),

    openOrderList: sdk.getOpenOrderList(
      {},
      {
        authorization: `Bearer ${session.authToken}`,
        'x-hasura-role': 'user',
      },
    ),
  })

  return json<LoaderData>({
    query,
  })
}

const Exchanges = () => {
  const { query } = useLoaderData<LoaderData>()

  return (
    <Page title="Exchanges">
      <ExchangeList query={query.exchangeList} />

      <h1>Open Orders</h1>
      <OpenOrderList query={query.openOrderList} />
    </Page>
  )
}

export default Exchanges
