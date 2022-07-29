import { useLoaderData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { errorBoundary } from '@stayradiated/error-boundary'

import { UserFormDelete } from '~/components/user-form-delete'
import { Card } from '~/components/retro-ui'
import { getSessionData, destroySession } from '~/utils/auth.server'
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

  const { email, authToken } = session

  const formData = await request.formData()
  const confirmPhrase = formData.get('confirm')
  invariant(typeof confirmPhrase === 'string', 'Must have params.confirm')

  if (confirmPhrase !== email) {
    return json<ActionData>({ error: 'Invalid confirm phrase.' })
  }

  const error = await errorBoundary(async () =>
    sdk.deleteUser(
      {},
      {
        authorization: `Bearer ${authToken}`,
        'x-hasura-role': 'superuser',
      },
    ),
  )
  if (error instanceof Error) {
    return json<ActionData>({ error: error.message })
  }

  return redirect('/', {
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

  if (session.role === 'user') {
    return redirect('/sudo?return=/account/delete')
  }

  return json<LoaderData>({ email: session.email })
}

const DeleteAccountRoute = () => {
  const { email } = useLoaderData<LoaderData>()

  return (
    <>
      <Card>
        <UserFormDelete confirmPhrase={email} />
      </Card>
    </>
  )
}

export default DeleteAccountRoute
