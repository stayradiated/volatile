import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'

import { Logo } from '~/components/logo'
import { getSessionData, destroySession } from '~/utils/auth.server'
import { Page } from '~/components/ui'
import { Form, PrimaryButton } from '~/components/retro-ui'
import { loginRedirect } from '~/utils/redirect.server'

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionData(request)
  return redirect('/login', {
    headers: {
      'Set-Cookie': await destroySession(session.cookie),
    },
  })
}

type LoaderData = Record<string, unknown>

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)
  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  return json<LoaderData>({})
}

const LogoutRoute = () => {
  return (
    <Page title="Logout">
      <Logo />
      <Form name="logout" method="post">
        <Form.Item>
          <h2>Logout</h2>
          <p>Are you sure you want to log out?</p>
        </Form.Item>
        <Form.Item>
          <PrimaryButton>Logout</PrimaryButton>
        </Form.Item>
      </Form>
    </Page>
  )
}

export default LogoutRoute
