import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { TradeList } from '~/components/trade-list/index'
import { Card } from '~/components/retro-ui'
import { Navigation } from '~/components/navigation'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import {
  GetTradeListQuery,
  GetTradeSumValueByWeekQuery,
  GetTradeAvgPriceQuery,
  GetTradeCumulativeSumByDayQuery,
  GetTradeCumulativeVolumeByDayQuery,
} from '~/graphql/generated'
import { TradeAvgPrice } from '~/components/trade-list/trade-avg-price'
import { TradeCumulativeSum } from '~/components/trade-list/trade-cumulative-sum'
import { TradeCumulativeVolume } from '~/components/trade-list/trade-cumulative-volume'
import { TradeSumValueByWeek } from '~/components/trade-list/trade-sum-value-by-week'

interface LoaderData {
  isAuthenticatedUser: boolean
  email: string | undefined
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

  const tradeSumValueByWeek = await sdk.getTradeSumValueByWeek(
    {},
    {
      authorization: `Bearer ${authToken}`,
    },
  )

  const tradeAvgPrice = {
    BTC: await sdk.getTradeAvgPrice(
      { primaryCurrency: 'BTC' },
      { authorization: `Bearer ${authToken}` },
    ),
    ETH: await sdk.getTradeAvgPrice(
      { primaryCurrency: 'BTC' },
      { authorization: `Bearer ${authToken}` },
    ),
  }

  const tradeCumulativeVolume = await sdk.getTradeCumulativeVolumeByDay(
    {},
    {
      authorization: `Bearer ${authToken}`,
    },
  )
  const tradeCumulativeSum = await sdk.getTradeCumulativeSumByDay(
    {},
    {
      authorization: `Bearer ${authToken}`,
    },
  )

  return json<LoaderData>({
    isAuthenticatedUser,
    email,
    query,
    tradeSumValueByWeek,
    tradeAvgPrice,
    tradeCumulativeVolume,
    tradeCumulativeSum,
  })
}

const TradesRoute = () => {
  const {
    isAuthenticatedUser,
    email,
    query,
    tradeSumValueByWeek,
    tradeAvgPrice,
    tradeCumulativeSum,
    tradeCumulativeVolume,
  } = useLoaderData<LoaderData>()

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

      <Card width={1200}>
        <TradeSumValueByWeek query={tradeSumValueByWeek} />
        <TradeAvgPrice primaryCurrency="BTC" query={tradeAvgPrice.BTC} />
        <TradeAvgPrice primaryCurrency="ETH" query={tradeAvgPrice.ETH} />
        <TradeCumulativeSum query={tradeCumulativeSum} />
        <TradeCumulativeVolume query={tradeCumulativeVolume} />
      </Card>

      <TradeList query={query} />
    </>
  )
}

export default TradesRoute
