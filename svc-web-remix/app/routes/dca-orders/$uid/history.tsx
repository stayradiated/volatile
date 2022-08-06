import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { parseISO, formatISO, subHours } from 'date-fns'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DCAOrderHistoryList } from '~/components/dca-order-history-list'
import { DCAOrderHistoryPriceChart } from '~/components/dca-order-history-price-chart'
import { Card } from '~/components/retro-ui'
import { loginRedirect } from '~/utils/redirect.server'

import { sdk } from '~/utils/api.server'
import {
  GetDcaOrderHistoryListQuery,
  GetDcaOrderHistoryPriceChartQuery,
} from '~/graphql/generated'
import { getSessionData } from '~/utils/auth.server'

type LoaderData = {
  dateRange: {
    gt: string
    lte: string
  }
  query: {
    getDCAOrderHistoryList: GetDcaOrderHistoryListQuery
    getDCAOrderHistoryPriceChart: GetDcaOrderHistoryPriceChartQuery
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const { uid: dcaOrderUID } = params
  invariant(typeof dcaOrderUID === 'string', 'Must have params.uid')

  const dateRange = {
    gt: formatISO(subHours(new Date(), 3)),
    lte: formatISO(new Date()),
  }

  const getDCAOrderHistoryList = await errorBoundary(async () =>
    sdk.getDCAOrderHistoryList(
      {
        dcaOrderUID,
        gt: dateRange.gt,
        lte: dateRange.lte,
      },
      {
        authorization: `Bearer ${authToken}`,
        'x-hasura-role': 'user',
      },
    ),
  )
  if (getDCAOrderHistoryList instanceof Error) {
    throw getDCAOrderHistoryList
  }

  const getDCAOrderHistoryPriceChart = await errorBoundary(async () =>
    sdk.getDCAOrderHistoryPriceChart(
      {
        dcaOrderUID,
        gt: dateRange.gt,
        lte: dateRange.lte,
      },
      {
        authorization: `Bearer ${authToken}`,
        'x-hasura-role': 'user',
      },
    ),
  )
  if (getDCAOrderHistoryPriceChart instanceof Error) {
    throw getDCAOrderHistoryList
  }

  const query = {
    getDCAOrderHistoryList,
    getDCAOrderHistoryPriceChart,
  }

  return json<LoaderData>({ query, dateRange })
}

const DCAOrderHistoryRoute = () => {
  const loaderData = useLoaderData<LoaderData>()
  const { query, dateRange: dateRangeISO } = loaderData

  const dateRange = {
    gt: parseISO(dateRangeISO.gt),
    lte: parseISO(dateRangeISO.lte),
  }

  const dcaOrder = query.getDCAOrderHistoryList.dca_order_by_pk!
  const exchange = dcaOrder.exchange.name
  const tradingPair = `${dcaOrder.primary_currency.symbol}-${dcaOrder.secondary_currency.symbol}`

  const dcaOrderHistoryList =
    query.getDCAOrderHistoryList.dca_order_history ?? []

  return (
    <Card width={1200}>
      <h2>
        ☰ DCA Order | {exchange} | {tradingPair}
      </h2>
      <DCAOrderHistoryPriceChart
        query={query.getDCAOrderHistoryPriceChart}
        dcaOrderHistoryList={dcaOrderHistoryList}
        dateRange={dateRange}
      />
      <DCAOrderHistoryList query={query.getDCAOrderHistoryList} />
    </Card>
  )
}

export default DCAOrderHistoryRoute
