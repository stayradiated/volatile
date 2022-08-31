import { useActionData } from '@remix-run/react'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { errorBoundary } from '@stayradiated/error-boundary'

import { UserFormDelete2FA } from '~/components/user-form-delete-2fa'
import { Card } from '~/components/retro-ui'
import { getSessionData } from '~/utils/auth.server'
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
  const token = formData.get('token')
  invariant(typeof token === 'string', 'Must have token.')

  const result = await errorBoundary(async () =>
    sdk.deleteUser2FA(
      {
        token,
      },
      {
        authorization: `Bearer ${authToken}`,
        'x-hasura-role': 'user',
      },
    ),
  )

  if (result instanceof Error) {
    return json<ActionData>({ error: result.message })
  }

  return null
}

type LoaderData = Record<string, unknown>

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const user2FA = await sdk.getUser2FA(
    {},
    { authorization: `Bearer ${authToken}`, 'x-hasura-role': 'user' },
  )
  if (typeof user2FA.user[0].user2fa?.uid !== 'string') {
    return redirect('/account/2fa')
  }

  return json<LoaderData>({})
}

const Account = () => {
  const actionData = useActionData<ActionData>()
  const error = actionData?.error

  return (
    <>
      <Card>
        <UserFormDelete2FA error={error} />
      </Card>
    </>
  )
}

export default Account
