import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useActionData, useLoaderData } from '@remix-run/react'
import { makeDomainFunction, inputFromFormData } from 'remix-domains'
import * as z from 'zod'

import {
  getSessionData,
  setSessionData,
  commitSession,
} from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { LoginForm } from '~/components/login-form/index'
import { safeRedirect } from '~/utils/redirect.server'
import { collapseError } from '~/utils/error.server'

const createAuthToken = makeDomainFunction(
  z.object({
    email: z.string().email(),
    password: z.string(),
    token2FA: z.optional(z.string()),
  }),
)(async (input) => {
  const { email, password, token2FA } = input

  const query = await sdk.createAuthToken({
    email,
    password,
    deviceID: 'device-name',
    deviceName: 'My Device',
    deviceTrusted: false,
    token2FA,
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

  const actionData = useActionData<ActionData>()
  const error = actionData?.error

  return <LoginForm returnTo={returnTo} error={error} />
}

export default Login
