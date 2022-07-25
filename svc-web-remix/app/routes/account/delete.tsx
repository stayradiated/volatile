import { useLoaderData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { errorBoundary } from '@stayradiated/error-boundary'

import { UserFormDelete } from '~/components/user-form-delete'
import { Card } from '~/components/retro-ui'
import { getSessionData } from '~/utils/auth.server'
import { destroySession } from '~/utils/sessions.server'
import { sdk } from '~/utils/api.server'

type ActionData = {
  error?: string
}

export const action: ActionFunction = async ({ request }) => {
  const { email, authToken, session } = await getSessionData(request)
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
      },
    ),
  )
  if (error instanceof Error) {
    return json<ActionData>({ error: error.message })
  }

  return redirect('/', {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  })
}

interface LoaderData {
  email: string
}

export const loader: LoaderFunction = async ({ request }) => {
  const { email } = await getSessionData(request)
  invariant(email, 'Must be logged in.')
  return json<LoaderData>({ email })
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
