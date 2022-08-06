import { useLoaderData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'
import { makeDomainFunction, inputFromFormData } from 'remix-domains'
import * as z from 'zod'

import { DCAOrderList } from '~/components/dca-order-list/index'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { GetDcaOrderListQuery } from '~/graphql/generated'
import { loginRedirect } from '~/utils/redirect.server'

const updateDCAOrderEnabled = makeDomainFunction(
  z.object({
    dcaOrderUID: z.string().uuid(),
    enabled: z.preprocess((x) => x === 'true', z.boolean()),
  }),
  z.object({ authToken: z.string() }),
)(async (userInput, environment) => {
  const { dcaOrderUID, enabled } = userInput
  const { authToken } = environment

  const result = await sdk.updateDCAOrderEnabled(
    {
      dcaOrderUID,
      enabled,
    },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  return result.action_update_dca_order.dca_order
})

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const formData = await request.formData()
  const action = formData.get('_action')

  if (action === 'updateDCAOrderEnabled') {
    const result = await updateDCAOrderEnabled(inputFromFormData(formData), {
      authToken,
    })
    if (!result.success) {
      return json(result)
    }

    return redirect('/dca-orders')
  }

  return null
}

interface LoaderData {
  query: GetDcaOrderListQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const query = await sdk.getDCAOrderList(
    {},
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
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
