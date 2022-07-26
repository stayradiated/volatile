import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import invariant from 'tiny-invariant'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DCAOrderDelete } from '~/components/dca-order-delete'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'

import type { GetDcaOrderDeleteQuery } from '~/graphql/generated'

export const action: ActionFunction = async ({ request, params }) => {
  const { authToken } = await getSessionData(request)
  invariant(authToken, 'Must be logged in.')

  const { uid: dcaOrderUID } = params
  invariant(typeof dcaOrderUID === 'string', 'Must have params.uid')

  const deleteDCAOrder = await errorBoundary(async () =>
    sdk.deleteDCAOrder(
      {
        dcaOrderUID,
      },
      {
        authorization: `Bearer ${authToken}`,
      },
    ),
  )
  if (deleteDCAOrder instanceof Error) {
    throw deleteDCAOrder
  }

  return redirect('/dca-orders')
}

type LoaderData = {
  query: {
    getDCAOrderDelete: GetDcaOrderDeleteQuery
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const { authToken } = await getSessionData(request)
  invariant(authToken, 'Must be logged in.')

  const { uid: dcaOrderUID } = params
  invariant(typeof dcaOrderUID === 'string', 'Must have params.uid')

  const getDCAOrderDelete = await errorBoundary(async () =>
    sdk.getDCAOrderDelete(
      {
        dcaOrderUID,
      },
      {
        authorization: `Bearer ${authToken}`,
      },
    ),
  )
  if (getDCAOrderDelete instanceof Error) {
    throw getDCAOrderDelete
  }

  const query = {
    getDCAOrderDelete,
  }

  return json<LoaderData>({ query })
}

const DCAOrderDeleteRoute = () => {
  const { query } = useLoaderData<LoaderData>()

  return <DCAOrderDelete query={query.getDCAOrderDelete} />
}

export default DCAOrderDeleteRoute
