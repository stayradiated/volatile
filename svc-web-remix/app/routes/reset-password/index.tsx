import { ActionFunction, json } from '@remix-run/node'
import { makeDomainFunction, inputFromForm, Result } from 'remix-domains'
import { useTransition, useActionData } from '@remix-run/react'
import * as z from 'zod'
import { SendUserPasswordResetForm } from '~/components/send-user-password-reset-form/index'

import { sdk } from '~/utils/api.server'

const sendUserPasswordReset = makeDomainFunction(
  z.object({
    email: z.string(),
  }),
)(async (input) => {
  const { email } = input

  const result = await sdk.sendUserPasswordReset(
    { email },
    {
      'x-hasura-role': 'guest',
    },
  )

  return {
    email: result.actionSendUserPasswordReset.email,
  }
})

const collapseError = (result: Result<unknown>): string => {
  return [
    result.errors.map((error) => error.message),
    result.inputErrors.map((error) => error.message),
    result.environmentErrors.map((error) => error.message),
  ]
    .flat()
    .join(' • ')
}

type ActionData = {
  email?: string
  error?: string
}

export const action: ActionFunction = async ({ request }) => {
  const result = await sendUserPasswordReset(await inputFromForm(request))
  if (!result.success) {
    return json<ActionData>({ error: collapseError(result) })
  }

  return json<ActionData>({ email: result.data.email })
}

const ResetPasswordRoute = () => {
  const transition = useTransition()
  const actionData = useActionData<ActionData>()

  const state = actionData?.email ? 'success' : transition.state
  const email = actionData?.email
  const error = actionData?.error

  return <SendUserPasswordResetForm state={state} email={email} error={error} />
}

export default ResetPasswordRoute
