import { ActionFunction, LoaderFunction, redirect, json } from '@remix-run/node'
import { useActionData } from '@remix-run/react'
import invariant from 'tiny-invariant'

import { getSession, commitSession } from '~/utils/sessions.server'
import { sdk } from '~/utils/api.server'
import { LoginForm } from '~/components/login-form/index'

type ActionData = {
  error?: string
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))

  if (session.has('userUID')) {
    // Redirect to the home page if they are already signed in.
    return redirect('/')
  }

  const data = { error: session.get('error') }

  return json(data, {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  })
}

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))
  const form = await request.formData()

  const email = form.get('email')
  const password  = form.get('password')
  const token2FA  = form.get('token2FA')
  invariant(typeof email === 'string', 'Must have email.')
  invariant(typeof password === 'string', 'Must have password.')
  invariant(typeof token2FA === 'string', 'Must have token2FA.')

  console.log({ email, password })

  try {
    const result = await sdk.createAuthToken({
      email,
      password,
      deviceID: 'device-name',
      deviceName: 'My Device',
      deviceTrusted: false,
      token2FA,
    })

    console.log({ result })

    const userUID = result.create_auth_token?.user_uid
    const authToken = result.create_auth_token?.auth_token
    const expiresAt = result.create_auth_token?.expires_at

    session.set('email', email)
    session.set('userUID', userUID)
    session.set('authToken', authToken)
    session.set('expiresAt', expiresAt)

    // Login succeeded, send them to the home page.
    return redirect('/', {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    })
  } catch (error: unknown) {
    console.error(error)

    return json({
      error: 'Invalid email or password.',
    })
  }
}

const Login = () => {
  const actionData = useActionData<ActionData>()
  const error = actionData?.error

  return <LoginForm error={error} />
}

export default Login
