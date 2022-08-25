import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { errorBoundary } from '@stayradiated/error-boundary'
import * as z from 'zod'
import { parseISO } from 'date-fns'
import { makeDomainFunction, inputFromForm } from 'remix-domains'

import { Card } from '~/components/retro-ui'
import { DcaOrderFormCreate } from '~/components/dca-order-form-create'
import { GetDcaOrderFormCreateQuery } from '~/graphql/generated'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { loginRedirect } from '~/utils/redirect.server'

const createDcaOrder = makeDomainFunction(
  z.object({
    userExchangeKeysUid: z.string().uuid(),
    primaryCurrency: z.string(),
    secondaryCurrency: z.string(),
    marketUid: z.string().uuid(),
    startAt: z.string(),
    marketOffset: z.number(),
    dailyAverage: z.number(),
    intervalMs: z.number().int(),
    minValue: z.number(),
    maxValue: z.number(),
  }),
  z.object({
    authToken: z.string(),
  }),
)(async (input, environment) => {
  await sdk.createDcaOrder(input, {
    authorization: `Bearer ${environment.authToken}`,
    'x-hasura-role': 'user',
  })
})

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const result = await createDcaOrder(await inputFromForm(request), {
    authToken,
  })

  return redirect('/dca-orders')
}

interface LoaderData {
  query: {
    getDcaOrderFormCreate: GetDcaOrderFormCreateQuery
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const getDcaOrderFormCreate = await errorBoundary(async () =>
    sdk.getDcaOrderFormCreate(
      {},
      {
        authorization: `Bearer ${authToken}`,
        'x-hasura-role': 'user',
      },
    ),
  )
  if (getDcaOrderFormCreate instanceof Error) {
    throw getDcaOrderFormCreate
  }

  const query = { getDcaOrderFormCreate }

  return json<LoaderData>({
    query,
  })
}

const DcaOrderCreateRoute = () => {
  const { query } = useLoaderData<LoaderData>()

  return (
    <Card>
      <DcaOrderFormCreate query={query.getDcaOrderFormCreate} />
    </Card>
  )
}

export default DcaOrderCreateRoute
