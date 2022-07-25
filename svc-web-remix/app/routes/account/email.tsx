import { useLoaderData, useActionData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { errorBoundary } from '@stayradiated/error-boundary'

import { UserFormEditEmail } from '~/components/user-form-edit-email'
import { Card } from '~/components/retro-ui'
import { getSessionData } from '~/utils/auth.server'
import { commitSession } from '~/utils/sessions.server'
import { sdk } from '~/utils/api.server'

type ActionData = {
  error?: string
}

export const action: ActionFunction = async ({ request }) => {
  const { authToken, session } = await getSessionData(request)

  const formData = await request.formData()
  const email = formData.get('email')
  invariant(typeof email === 'string', 'Missing formData.email')

  const result = await errorBoundary(async () =>
    sdk.updateUser(
      { email },
      {
        authorization: `Bearer ${authToken}`,
      },
    ),
  )

  if (result instanceof Error) {
    console.error(result)
    return json<ActionData>({
      error: `Sorry, please use a different email address. "${email}" is not available.`,
    })
  }

  session.set('email', email)

  return redirect('/account/email', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  })
}

interface LoaderData {
  email: string
}

export const loader: LoaderFunction = async ({ request }) => {
  const { email } = await getSessionData(request)
  invariant(email, 'Must have email.')

  return json<LoaderData>({
    email,
  })
}

const Account = () => {
  const { email } = useLoaderData<LoaderData>()
  const actionData = useActionData<ActionData>()
  const error = actionData?.error

  return (
    <>
      <Card>
        <h2>Change Email</h2>
        <UserFormEditEmail email={email} error={error} />
      </Card>
    </>
  )
}

export default Account
