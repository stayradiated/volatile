import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { Card } from '~/components/retro-ui'
import { GetPricesQuery } from '~/graphql/generated'
import { SubscriptionPriceList } from '~/components/subscription-price-list'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'

interface LoaderData {
  query: GetPricesQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken } = await getSessionData(request)

  const query = await sdk.getPrices(
    {},
    {
      authorization: `Bearer ${authToken}`,
    },
  )

  return json<LoaderData>({
    query,
  })
}

const SubscriptionRoute = () => {
  const { query } = useLoaderData<LoaderData>()

  return (
    <>
      <Card>
        <SubscriptionPriceList query={query} />
      </Card>
    </>
  )
}

export default SubscriptionRoute
