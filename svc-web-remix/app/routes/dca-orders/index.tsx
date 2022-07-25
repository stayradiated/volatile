import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { DCAOrderList } from '~/components/dca-order-list/index'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { GetDcaOrderListQuery } from '~/graphql/generated'

interface LoaderData {
  query: GetDcaOrderListQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken } = await getSessionData(request)

  const query = await sdk.getDCAOrderList(
    {},
    {
      authorization: `Bearer ${authToken}`,
    },
  )

  return json<LoaderData>({
    query,
  })
}

const DCAOrdersRoute = () => {
  const { query } = useLoaderData<LoaderData>()

  return (
    <>
      <DCAOrderList query={query} />
    </>
  )
}

export default DCAOrdersRoute
