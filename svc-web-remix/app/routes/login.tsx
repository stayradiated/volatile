import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useActionData, useLoaderData } from '@remix-run/react'
import invariant from 'tiny-invariant'

import {
  getSessionData,
  setSessionData,
  commitSession,
} from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { LoginForm } from '~/components/login-form/index'
import { safeRedirect } from '~/utils/redirect.server'

type ActionData = {
  error?: string
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()

  const email = form.get('email')
  const password = form.get('password')
  const token2FA = form.get('token2FA')
  invariant(typeof email === 'string', 'Must have email.')
  invariant(typeof password === 'string', 'Must have password.')
  invariant(typeof token2FA === 'string', 'Must have token2FA.')

  const formReturn = form.get('return')
  const returnTo =
    typeof formReturn === 'string' && formReturn.trim().length > 0
      ? formReturn
      : '/'

  try {
    const result = await sdk.createAuthToken({
      email,
      password,
      deviceID: 'device-name',
      deviceName: 'My Device',
      deviceTrusted: false,
      token2FA,
      role: 'user',
    })

    const userAuthToken = result.actionCreateAuthToken?.authToken

    const session = await setSessionData({
      request,
      email,
      userAuthToken,
    })

    // Login succeeded, send them to the home page.
    return safeRedirect(request, returnTo, {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    })
  } catch (error: unknown) {
    console.error(error)

    return json<ActionData>({
      error: error instanceof Error ? error.message : String(error),
    })
  }
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
