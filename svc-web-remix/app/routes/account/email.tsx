import { useLoaderData, useActionData } from '@remix-run/react'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { errorBoundary } from '@stayradiated/error-boundary'

import { UserFormEditEmail } from '~/components/user-form-edit-email'
import { Card } from '~/components/retro-ui'
import {
  getSessionData,
  setSessionData,
  commitSession,
} from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { loginRedirect } from '~/utils/redirect.server'

type ActionData = {
  error?: string
}

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const formData = await request.formData()
  const email = formData.get('email')
  invariant(typeof email === 'string', 'Missing formData.email')

  const result = await errorBoundary(async () =>
    sdk.updateUser(
      { email },
      {
        authorization: `Bearer ${authToken}`,
        'x-hasura-role': 'user',
      },
    ),
  )

  if (result instanceof Error) {
    console.error(result)
    return json<ActionData>({
      error: `Sorry, please use a different email address. "${email}" is not available.`,
    })
  }

  const updatedSession = await setSessionData({
    request,
    email,
  })

  return redirect('/account/email', {
    headers: {
      'Set-Cookie': await commitSession(updatedSession),
    },
  })
}

type LoaderData = {
  email: string
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)
  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { email } = session
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
