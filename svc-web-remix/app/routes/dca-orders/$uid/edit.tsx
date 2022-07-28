import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import invariant from 'tiny-invariant'
import { errorBoundary } from '@stayradiated/error-boundary'
import * as z from 'zod'
import { makeDomainFunction, inputFromForm } from 'remix-domains'

import { DCAOrderFormEdit } from '~/components/dca-order-form-edit'
import { Card } from '~/components/retro-ui'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'

import type { GetDcaOrderFormEditQuery } from '~/graphql/generated'

const updateDCAOrder = makeDomainFunction(
  z.object({
    dcaOrderUID: z.string().uuid(),
  }),
  z.object({
    authToken: z.string(),
  }),
)(async (input, environment) => {
  const { dcaOrderUID, ...values } = input
  const { authToken } = environment

  await sdk.updateDCAOrder(
    {
      dcaOrderUID,
      values,
    },
    {
      authorization: `Bearer ${authToken}`,
    },
  )
})

export const action: ActionFunction = async ({ request, params }) => {
  const { authToken } = await getSessionData(request)
  invariant(authToken, 'Must be logged in.')

  const { uid: dcaOrderUID } = params
  invariant(typeof dcaOrderUID === 'string', 'Must have params.uid')

  const result = await updateDCAOrder(await inputFromForm(request), {
    authToken,
  })
  console.log(result)

  return redirect('/dca-orders')
}

type LoaderData = {
  query: {
    getDCAOrderFormEdit: GetDcaOrderFormEditQuery
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const { authToken } = await getSessionData(request)
  invariant(authToken, 'Must be logged in.')

  const { uid: dcaOrderUID } = params
  invariant(typeof dcaOrderUID === 'string', 'Must have params.uid')

  const getDCAOrderFormEdit = await errorBoundary(async () =>
    sdk.getDCAOrderFormEdit(
      {
        dcaOrderUID,
      },
      {
        authorization: `Bearer ${authToken}`,
      },
    ),
  )
  if (getDCAOrderFormEdit instanceof Error) {
    throw getDCAOrderFormEdit
  }

  const query = {
    getDCAOrderFormEdit,
  }

  return json<LoaderData>({ query })
}

const DCAOrderEditRoute = () => {
  const { query } = useLoaderData<LoaderData>()

  return (
    <Card>
      <DCAOrderFormEdit query={query.getDCAOrderFormEdit} />
    </Card>
  )
}

export default DCAOrderEditRoute
