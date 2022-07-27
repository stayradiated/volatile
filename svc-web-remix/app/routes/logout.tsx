import { useLoaderData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'


import { Logo } from '~/components/logo'
import { getSession, destroySession } from '~/utils/sessions.server'
import { Card, Form, PrimaryButton } from '~/components/retro-ui'
import { Navigation } from '~/components/navigation'
import { getSessionData } from '~/utils/auth.server'

interface LoaderData {
  isAuthenticatedUser: boolean
  email: string | undefined
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken, email } = await getSessionData(request)
  const isAuthenticatedUser = Boolean(authToken)

  return json<LoaderData>({
    isAuthenticatedUser,
    email,
  })
}

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))

  return redirect('/login', {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  })
}

const LogoutRoute = () => {
  const { isAuthenticatedUser, email } = useLoaderData<LoaderData>()

  return (
    <>
      <Navigation isAuthenticatedUser={isAuthenticatedUser} email={email} />

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
