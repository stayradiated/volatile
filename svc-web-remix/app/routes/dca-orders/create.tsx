import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { errorBoundary } from '@stayradiated/error-boundary'
import * as z from 'zod'
import { parseISO } from 'date-fns'
import { makeDomainFunction, inputFromForm } from 'remix-domains'

import { Card } from '~/components/retro-ui'
import { DCAOrderFormCreate } from '~/components/dca-order-form-create'
import { GetDcaOrderFormCreateQuery } from '~/graphql/generated'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { loginRedirect } from '~/utils/redirect.server'

const createDCAOrder = makeDomainFunction(
  z.object({
    userExchangeKeysUID: z.string().uuid(),
    primaryCurrency: z.string(),
    secondaryCurrency: z.string(),
    marketUID: z.string().uuid(),
    startAt: z.preprocess((d: unknown) => {
      if (typeof d === 'string') {
        return parseISO(d)
      }
    }, z.date()),
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
  await sdk.createDCAOrder(input, {
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

  const result = await createDCAOrder(await inputFromForm(request), {
    authToken,
  })

  return redirect('/dca-orders')
}

interface LoaderData {
  query: {
    getDCAOrderFormCreate: GetDcaOrderFormCreateQuery
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const getDCAOrderFormCreate = await errorBoundary(async () =>
    sdk.getDCAOrderFormCreate(
      {},
      {
        authorization: `Bearer ${authToken}`,
        'x-hasura-role': 'user',
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
