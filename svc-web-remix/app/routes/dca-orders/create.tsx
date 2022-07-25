import { LoaderFunction, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { errorBoundary } from '@stayradiated/error-boundary'

import { Card } from '~/components/retro-ui'
import { DCAOrderFormCreate } from '~/components/dca-order-form-create'
import { GetDcaOrderFormCreateQuery } from '~/graphql/generated'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'

interface LoaderData {
  query: {
    getDCAOrderFormCreate: GetDcaOrderFormCreateQuery
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken } = await getSessionData(request)

  const getDCAOrderFormCreate = await errorBoundary(async () =>
    sdk.getDCAOrderFormCreate(
      {},
      {
        authorization: `Bearer ${authToken}`,
      },
    ),
  )
  if (getDCAOrderFormCreate instanceof Error) {
    throw getDCAOrderFormCreate
  }

  const query = { getDCAOrderFormCreate }

  return json<LoaderData>({
    query,
  })
}

const DCAOrderCreateRoute = () => {
  const { query } = useLoaderData<LoaderData>()

  return (
    <Card>
      <DCAOrderFormCreate query={query.getDCAOrderFormCreate} />
    </Card>
  )
}

export default DCAOrderCreateRoute
