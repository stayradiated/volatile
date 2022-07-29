import { useLoaderData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'

import { Logo } from '~/components/logo'
import { getSessionData, destroySession } from '~/utils/auth.server'
import { Card, Form, PrimaryButton } from '~/components/retro-ui'
import { Navigation } from '~/components/navigation'
import { loginRedirect } from '~/utils/redirect.server'

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionData(request)
  return redirect('/login', {
    headers: {
      'Set-Cookie': await destroySession(session.cookie),
    },
  })
}

interface LoaderData {
  email: string
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)
  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { email } = session
  return json<LoaderData>({ email })
}

const LogoutRoute = () => {
  const { email } = useLoaderData<LoaderData>()

  return (
    <>
      <Navigation isAuthenticatedUser email={email} />

      <Card>
        <Logo />
        <Form name="logout" method="post" action="/logout">
          <Form.Item>
            <h2>Logout</h2>
            <p>Are you sure you want to log out?</p>
          </Form.Item>
          <Form.Item>
            <PrimaryButton>Logout</PrimaryButton>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}

export default LogoutRoute
