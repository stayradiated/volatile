import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import { useLoaderData, useTransition } from '@remix-run/react'
import invariant from 'tiny-invariant'

import {
  ResetPasswordForm,
  InvalidSecret,
} from '~/components/reset-password-form/index'
import { sdk } from '~/utils/api.server'

export const action: ActionFunction = async () => {
  // Await sdk.resetUserPassword({
  //   email,
  //   passwordResetSecret,
  //   newPassword,
  // })
  return redirect('/')
}

type LoaderData = {
  email: string | undefined
  isValid: boolean
}

export const loader: LoaderFunction = async ({ params }) => {
  const { secret } = params
  invariant(typeof secret === 'string', 'params.secret must exist')

  const result = await sdk.validateUserPasswordReset(
    {
      passwordResetSecret: secret,
    },
    {
      'x-hasura-role': 'guest',
    },
  )

  const { email, isValid } = result.actionValidateUserPasswordReset

  return json<LoaderData>({ email: email ?? undefined, isValid })
}

const ResetPasswordRoute = () => {
  const { email, isValid } = useLoaderData()
  const transition = useTransition()

  if (!isValid) {
    return <InvalidSecret />
  }

  const { state } = transition
  const error = undefined

  return <ResetPasswordForm state={state} email={email} error={error} />
}

export default ResetPasswordRoute
