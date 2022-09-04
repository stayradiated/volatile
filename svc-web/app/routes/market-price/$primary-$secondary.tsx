import { useLoaderData } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import invariant from 'tiny-invariant'
import * as dateFns from 'date-fns'

import { Card } from '~/components/retro-ui'
import { MarketPriceChart } from '~/components/market-price-chart'
import type { GetMarketPriceQuery } from '~/graphql/generated'
import { MarketPriceChartCalc } from '~/components/market-price-chart-calc'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { loginRedirect } from '~/utils/redirect.server'

type LoaderData = {
  query: GetMarketPriceQuery
  primaryCurrency: string
  secondaryCurrency: string
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const { primary: primaryCurrency, secondary: secondaryCurrency } = params
  invariant(primaryCurrency, 'Expected params.primary.')
  invariant(secondaryCurrency, 'Expected params.secondary.')

  const query = await sdk.getMarketPrice(
    {
      primaryCurrency,
      secondaryCurrency,
      gteTimestamp: dateFns.subDays(new Date(), 7).toISOString(),
    },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  return json<LoaderData>({
    query,
    primaryCurrency,
    secondaryCurrency,
  })
}

const MarketPriceRoute = () => {
  const { query, primaryCurrency, secondaryCurrency } =
    useLoaderData<LoaderData>()

  return (
    <>
      <Card width={1000}>
        <MarketPriceChartCalc
          primaryCurrency={primaryCurrency}
          secondaryCurrency={secondaryCurrency}
          query={query}
        />
      </Card>
      <Card width={1000}>
        <MarketPriceChart
          primaryCurrency={primaryCurrency}
          secondaryCurrency={secondaryCurrency}
          query={query}
        />
      </Card>
    </>
  )
}

export default MarketPriceRoute
