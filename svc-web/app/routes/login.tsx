import { useState, useEffect } from 'react'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useActionData, useLoaderData, useTransition } from '@remix-run/react'
import { makeDomainFunction, inputFromFormData } from 'remix-domains'
import * as z from 'zod'

import {
  getSessionData,
  setSessionData,
  commitSession,
} from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { LoginForm, TwoFactorForm } from '~/components/login-form/index'
import { safeRedirect } from '~/utils/redirect.server'
import { collapseError } from '~/utils/error.server'
import { Logo } from '~/components/logo'

const createAuthToken = makeDomainFunction(
  z.object({
    deviceId: z.string(),
    deviceName: z.string(),
    email: z.string().email(),
    password: z.string(),
    token2fa: z.string().optional(),
  }),
)(async (input) => {
  const { deviceId, deviceName, email, password, token2fa } = input

  const query = await sdk.createAuthToken({
    email,
    password,
    deviceId,
    deviceName,
    deviceTrusted: false,
    token2fa: token2fa ?? undefined,
    role: 'user',
  })

  const authToken = query.actionCreateAuthToken?.authToken

  return {
    email,
    authToken,
  }
})

type ActionData = {
  error?: string
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const result = await createAuthToken(inputFromFormData(formData))
  if (!result.success) {
    console.error(result)
    return json<ActionData>({
      error: collapseError(result),
    })
  }

  const { authToken, email } = result.data

  const session = await setSessionData({
    request,
    email,
    userAuthToken: authToken,
  })

  const formReturn = formData.get('return')
  const returnTo =
    typeof formReturn === 'string' && formReturn.trim().length > 0
      ? formReturn
      : '/'

  // Login succeeded, send them to the home page.
  return safeRedirect(request, returnTo, {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  })
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  const returnTo = new URL(request.url).searchParams.get('return') ?? '/'

  // Redirect to the home page if they are already signed in.
  if (session.role !== 'guest') {
    return safeRedirect(request, returnTo)
  }

  return json({ returnTo })
}

const Login = () => {
  const { returnTo } = useLoaderData()

  const transition = useTransition()
  const actionData = useActionData<ActionData>()
  const error = actionData?.error

  const requires2fa = error?.startsWith('ERR_AUTH_2FA:')

  const [lastSubmission, setLastSubmission] =
    useState<typeof transition.submission>()
  useEffect(() => {
    if (transition.submission) {
      setLastSubmission(transition.submission)
    }
  }, [transition.submission])

  return (
    <main>
      <Logo />
      {requires2fa ? (
        <TwoFactorForm
          returnTo={returnTo}
          error={error}
          email={String(lastSubmission?.formData.get('email'))}
          password={String(lastSubmission?.formData.get('password'))}
          deviceId="device-id"
          deviceName="device-name"
        />
      ) : (
        <LoginForm
          returnTo={returnTo}
          error={error}
          deviceId="device-id"
          deviceName="device-name"
        />
      )}
    </main>
  )
}

export default Login
