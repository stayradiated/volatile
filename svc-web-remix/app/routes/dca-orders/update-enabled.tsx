import type { ActionFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import { makeDomainFunction, inputFromForm } from 'remix-domains'
import * as z from 'zod'

import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { loginRedirect } from '~/utils/redirect.server'

const updateDcaOrderEnabled = makeDomainFunction(
  z.object({
    dcaOrderUid: z.string().uuid(),
    enabled: z.preprocess((x) => x === 'true', z.boolean()),
  }),
  z.object({ authToken: z.string() }),
)(async (userInput, environment) => {
  const { dcaOrderUid, enabled } = userInput
  const { authToken } = environment

  const result = await sdk.updateDcaOrderEnabled(
    {
      dcaOrderUid,
      enabled,
    },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  return result.actionUpdateDcaOrder.dcaOrder
})

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const result = await updateDcaOrderEnabled(await inputFromForm(request), {
    authToken,
  })

  if (!result.success) {
    return json(result)
  }

  return redirect('/dca-orders')
}
