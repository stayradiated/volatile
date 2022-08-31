import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { redirect, json } from '@remix-run/node'
import { useActionData, useTransition } from '@remix-run/react'
import * as z from 'zod'
import { makeDomainFunction, inputFromForm } from 'remix-domains'

import {
  getSessionData,
  setSessionData,
  commitSession,
} from '~/utils/auth.server'
import { RegisterForm } from '~/components/register-form/index'
import { Logo } from '~/components/logo'
import { sdk } from '~/utils/api.server'

const createUser = makeDomainFunction(
  z.object({
    email: z.string().email(),
    password: z.string(),
  }),
)(async (input) => {
  const { email, password } = input

  await sdk.createUser(
    {
      email,
      password,
    },
    {
      'x-hasura-role': 'guest',
    },
  )

  const result = await sdk.createAuthToken({
    email,
    password,
    deviceID: '',
    deviceName: '',
    deviceTrusted: false,
    token2FA: undefined,
    role: 'user',
  })

  const userUid = result.actionCreateAuthToken?.userUid
  const authToken = result.actionCreateAuthToken?.authToken

  await sdk.sendUserEmailVerify(
    {},
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  return { email, userUid, authToken }
})

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionData(request)

  // Already logged in, cannot sign up again...
  if (session.role !== 'guest') {
    return redirect('/')
  }

  const user = await createUser(await inputFromForm(request))
  if (!user.success) {
    return json({ error: user.errors[0].message })
  }

  const cookie = await setSessionData({
    request,
    email: user.data.email,
    userAuthToken: user.data.authToken,
  })

  return redirect('/', {
    headers: {
      'Set-Cookie': await commitSession(cookie),
    },
  })
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  // Already logged in, cannot sign up again...
  if (session.role !== 'guest') {
    return redirect('/')
  }

  return null
}

const RegisterRoute = () => {
  const actionData = useActionData()
  const error = actionData?.error
  const transition = useTransition()
  const loading = transition.state === 'submitting'

  return (
    <>
      <Logo />
      <RegisterForm loading={loading} error={error} />
    </>
  )
}

export default RegisterRoute
