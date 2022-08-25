import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import invariant from 'tiny-invariant'
import { errorBoundary } from '@stayradiated/error-boundary'
import * as z from 'zod'
import { makeDomainFunction, inputFromForm } from 'remix-domains'

import { DcaOrderFormEdit } from '~/components/dca-order-form-edit'
import { Card } from '~/components/retro-ui'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { loginRedirect } from '~/utils/redirect.server'

import type { GetDcaOrderFormEditQuery } from '~/graphql/generated'

const updateDcaOrder = makeDomainFunction(
  z.object({
    dcaOrderUid: z.string().uuid(),
  }),
  z.object({
    authToken: z.string(),
  }),
)(async (input, environment) => {
  const { dcaOrderUid, ...values } = input
  const { authToken } = environment

  await sdk.updateDcaOrder(
    {
      dcaOrderUid,
      values,
    },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )
})

export const action: ActionFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const { uid: dcaOrderUid } = params
  invariant(typeof dcaOrderUid === 'string', 'Must have params.uid')

  const result = await updateDcaOrder(await inputFromForm(request), {
    authToken,
  })

  return redirect('/dca-orders')
}

type LoaderData = {
  query: {
    getDcaOrderFormEdit: GetDcaOrderFormEditQuery
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

  const getDcaOrderFormEdit = await errorBoundary(async () =>
    sdk.getDcaOrderFormEdit(
      {
        dcaOrderUid,
      },
      {
        authorization: `Bearer ${authToken}`,
        'x-hasura-role': 'user',
      },
    ),
  )
  if (getDcaOrderFormEdit instanceof Error) {
    throw getDcaOrderFormEdit
  }

  const query = {
    getDcaOrderFormEdit,
  }

  return json<LoaderData>({ query })
}

const DcaOrderEditRoute = () => {
  const { query } = useLoaderData<LoaderData>()

  return (
    <Card>
      <DcaOrderFormEdit query={query.getDcaOrderFormEdit} />
    </Card>
  )
}

export default DcaOrderEditRoute
