import { ActionFunction, redirect } from '@remix-run/node'

import { getSession, destroySession } from '~/utils/sessions.server'
import { Card, Form, PrimaryButton } from '~/components/retro-ui'
import { Logo } from '~/components/logo'

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))

  return redirect('/login', {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  })
}

const LogoutRoute = () => {
  return (
    <>
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
