import { ActionFunction, json, redirect } from '@remix-run/node'
import { makeDomainFunction, inputFromForm } from 'remix-domains'
import * as z from 'zod'

import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'

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
    },
  )

  return result.update_dca_order.dca_order
})

export const action: ActionFunction = async ({ request }) => {
  const { authToken } = await getSessionData(request)
  const result = await updateDCAOrderEnabled(await inputFromForm(request), {
    authToken,
  })

  if (!result.success) {
    return json(result)
  }

  return redirect('/dca-orders')
}
