import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { TradeList } from '~/components/trade-list'
import { loginRedirect } from '~/utils/redirect.server'
import { Page } from '~/components/ui'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import {
  GetTradeListQuery,
  GetTradeSumValueByWeekQuery,
  GetTradeAvgPriceQuery,
  GetTradeCumulativeSumByDayQuery,
  GetTradeCumulativeVolumeByDayQuery,
} from '~/graphql/generated'
// Import { TradeAvgPrice } from '~/components/trade-list/trade-avg-price'
// import { TradeCumulativeSum } from '~/components/trade-list/trade-cumulative-sum'
// import { TradeCumulativeVolume } from '~/components/trade-list/trade-cumulative-volume'
// import { TradeSumValueByWeek } from '~/components/trade-list/trade-sum-value-by-week'

interface LoaderData {
  email: string
  query: GetTradeListQuery
  tradeCumulativeSum: GetTradeCumulativeSumByDayQuery
  tradeCumulativeVolume: GetTradeCumulativeVolumeByDayQuery
  tradeSumValueByWeek: GetTradeSumValueByWeekQuery
  tradeAvgPrice: {
    BTC: GetTradeAvgPriceQuery
    ETH: GetTradeAvgPriceQuery
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { email, authToken } = session

  const query = await sdk.getTradeList(
    {
      offset: 0,
      limit: 100,
      filters: {
        timestamp: { _gte: undefined, _lte: undefined },
        exchangeUid: {
          _eq: undefined,
        },
        primaryCurrency: {
          _eq: undefined,
        },
        secondaryCurrency: {
          _eq: undefined,
        },
      },
    },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  const tradeSumValueByWeek = await sdk.getTradeSumValueByWeek(
    {},
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  const tradeAvgPrice = {
    BTC: await sdk.getTradeAvgPrice(
      { primaryCurrency: 'BTC' },
      { authorization: `Bearer ${authToken}`, 'x-hasura-role': 'user' },
    ),
    ETH: await sdk.getTradeAvgPrice(
      { primaryCurrency: 'BTC' },
      { authorization: `Bearer ${authToken}`, 'x-hasura-role': 'user' },
    ),
  }

  const tradeCumulativeVolume = await sdk.getTradeCumulativeVolumeByDay(
    {},
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )
  const tradeCumulativeSum = await sdk.getTradeCumulativeSumByDay(
    {},
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  return json<LoaderData>({
    email,
    query,
    tradeSumValueByWeek,
    tradeAvgPrice,
    tradeCumulativeVolume,
    tradeCumulativeSum,
  })
}

const TradesRoute = () => {
  const { query } = useLoaderData<LoaderData>()

  return (
    <Page title="Trades">
      <TradeList query={query} />
    </Page>
  )
}

export default TradesRoute
