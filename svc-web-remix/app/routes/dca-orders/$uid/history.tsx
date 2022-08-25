import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { parseISO, formatISO, subHours } from 'date-fns'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DcaOrderHistoryList } from '~/components/dca-order-history-list'
import { DcaOrderHistoryPriceChart } from '~/components/dca-order-history-price-chart'
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
    getDcaOrderHistoryList: GetDcaOrderHistoryListQuery
    getDcaOrderHistoryPriceChart: GetDcaOrderHistoryPriceChartQuery
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const { uid: dcaOrderUid } = params
  invariant(typeof dcaOrderUid === 'string', 'Must have params.uid')

  const dateRange = {
    gt: formatISO(subHours(new Date(), 3)),
    lte: formatISO(new Date()),
  }

  const getDcaOrderHistoryList = await errorBoundary(async () =>
    sdk.getDcaOrderHistoryList(
      {
        dcaOrderUid,
        gt: dateRange.gt,
        lte: dateRange.lte,
      },
      {
        authorization: `Bearer ${authToken}`,
        'x-hasura-role': 'user',
      },
    ),
  )
  if (getDcaOrderHistoryList instanceof Error) {
    throw getDcaOrderHistoryList
  }

  const getDcaOrderHistoryPriceChart = await errorBoundary(async () =>
    sdk.getDcaOrderHistoryPriceChart(
      {
        dcaOrderUid,
        gt: dateRange.gt,
        lte: dateRange.lte,
      },
      {
        authorization: `Bearer ${authToken}`,
        'x-hasura-role': 'user',
      },
    ),
  )
  if (getDcaOrderHistoryPriceChart instanceof Error) {
    throw getDcaOrderHistoryList
  }

  const query = {
    getDcaOrderHistoryList,
    getDcaOrderHistoryPriceChart,
  }

  return json<LoaderData>({ query, dateRange })
}

const DcaOrderHistoryRoute = () => {
  const loaderData = useLoaderData<LoaderData>()
  const { query, dateRange: dateRangeISO } = loaderData

  const dateRange = {
    gt: parseISO(dateRangeISO.gt),
    lte: parseISO(dateRangeISO.lte),
  }

  const dcaOrder = query.getDcaOrderHistoryList.dcaOrderByPk!
  const exchange = dcaOrder.exchange.name
  const tradingPair = `${dcaOrder.primaryCurrency.symbol}-${dcaOrder.secondaryCurrency.symbol}`

  const dcaOrderHistoryList = query.getDcaOrderHistoryList.dcaOrderHistory ?? []

  return (
    <Card width={1200}>
      <h2>
        ☰ Dca Order | {exchange} | {tradingPair}
      </h2>
      <DcaOrderHistoryPriceChart
        query={query.getDcaOrderHistoryPriceChart}
        dcaOrderHistoryList={dcaOrderHistoryList}
        dateRange={dateRange}
      />
      <DcaOrderHistoryList query={query.getDcaOrderHistoryList} />
    </Card>
  )
}

export default DcaOrderHistoryRoute
