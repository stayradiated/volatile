import { ActionFunction, LoaderFunction, json } from '@remix-run/node'
import invariant from 'tiny-invariant'

import {
  getSessionData,
  setSessionData,
  commitSession,
} from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { safeRedirect, loginRedirect } from '~/utils/redirect.server'
import { Card, Form, Input, PrimaryButton } from '~/components/retro-ui'

type ActionData = {
  error?: string
}

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const form = await request.formData()

  const password = form.get('password')
  invariant(typeof password === 'string', 'Must have password.')

  try {
    const result = await sdk.createAdminAuthToken(
      {
        userUID: session.userUID,
      },
      {
        'x-hasura-admin-secret': password,
        'x-hasura-role': 'admin',
      },
    )

    const adminAuthToken = result.action_create_admin_auth_token?.auth_token

    const sessionCookie = await setSessionData({
      request,
      adminAuthToken,
    })

    return safeRedirect(request, '/admin', {
      headers: {
        'Set-Cookie': await commitSession(sessionCookie),
      },
    })
  } catch (error: unknown) {
    console.error(error)

    return json<ActionData>({
      error: 'Invalid email or password.',
    })
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  return {}
}

const Login = () => {
  return (
    <Card>
      <Form name="AdminLoginForm" method="post">
        <Form.Item label="Admin Password">
          <Input type="password" name="password" />
        </Form.Item>
        <Form.Item>
          <PrimaryButton>Login</PrimaryButton>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Login
