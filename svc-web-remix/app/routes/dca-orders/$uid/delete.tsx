import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import invariant from 'tiny-invariant'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DcaOrderDelete } from '~/components/dca-order-delete'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { loginRedirect } from '~/utils/redirect.server'

import type { GetDcaOrderDeleteQuery } from '~/graphql/generated'

export const action: ActionFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const { uid: dcaOrderUid } = params
  invariant(typeof dcaOrderUid === 'string', 'Must have params.uid')

  const deleteDcaOrder = await errorBoundary(async () =>
    sdk.deleteDcaOrder(
      {
        dcaOrderUid,
      },
      {
        authorization: `Bearer ${authToken}`,
        'x-hasura-role': 'user',
      },
    ),
  )
  if (deleteDcaOrder instanceof Error) {
    throw deleteDcaOrder
  }

  return redirect('/dca-orders')
}

type LoaderData = {
  query: {
    getDcaOrderDelete: GetDcaOrderDeleteQuery
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

  const getDcaOrderDelete = await errorBoundary(async () =>
    sdk.getDcaOrderDelete(
      {
        dcaOrderUid,
      },
      {
        authorization: `Bearer ${authToken}`,
        'x-hasura-role': 'user',
      },
    ),
  )
  if (getDcaOrderDelete instanceof Error) {
    throw getDcaOrderDelete
  }

  const query = {
    getDcaOrderDelete,
  }

  return json<LoaderData>({ query })
}

const DcaOrderDeleteRoute = () => {
  const { query } = useLoaderData<LoaderData>()

  return <DcaOrderDelete query={query.getDcaOrderDelete} />
}

export default DcaOrderDeleteRoute
