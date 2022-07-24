import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { Card } from '~/components/retro-ui'
import { MarketPriceChart } from '~/components/market-price-chart'
import { GetMarketPriceQuery } from '~/graphql/generated'
import { MarketPriceChartCalc } from '~/components/market-price-chart-calc'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'

interface LoaderData {
  query: GetMarketPriceQuery
  primaryCurrency: string
  secondaryCurrency: string
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const { authToken } = await getSessionData(request)
  const { primary: primaryCurrency, secondary: secondaryCurrency } = params

  if (!primaryCurrency || !secondaryCurrency) {
    throw new Error('Missing required params.')
  }

  const query = await sdk.getMarketPrice(
    {
      primaryCurrency,
      secondaryCurrency,
    },
    {
      authorization: `Bearer ${authToken}`,
    },
  )

  return json<LoaderData>({
    query,
    primaryCurrency,
    secondaryCurrency,
  })
}

const MarketPriceRoute = () => {
  const { query, primaryCurrency, secondaryCurrency } = useLoaderData()

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
