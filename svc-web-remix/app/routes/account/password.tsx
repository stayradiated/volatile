import { ActionFunction, json } from '@remix-run/node'
import { useActionData } from '@remix-run/react'
import invariant from 'tiny-invariant'
import { errorBoundary } from '@stayradiated/error-boundary'

import { UserFormEditPassword } from '~/components/user-form-edit-password'
import { Card } from '~/components/retro-ui'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'

type ActionData = {
  success?: true
  error?: string
}

export const action: ActionFunction = async ({ request }) => {
  const { authToken } = await getSessionData(request)

  const formData = await request.formData()
  const password = formData.get('password')
  const password2 = formData.get('password2')

  invariant(typeof password === 'string', 'Must have formData.password')
  invariant(typeof password2 === 'string', 'Must have formData.password2')

  if (password !== password2) {
    return json<ActionData>({ error: 'Passwords do not match!' })
  }

  const error = await errorBoundary(async () =>
    sdk.updateUser(
      { password },
      {
        authorization: `Bearer ${authToken}`,
      },
    ),
  )

  if (error instanceof Error) {
    return json<ActionData>({ error: error.message })
  }

  return json<ActionData>({ success: true })
}

const AccountPasswordRoute = () => {
  const actionData = useActionData<ActionData>()
  const success = actionData?.success
  const error = actionData?.error

  return (
    <>
      <Card>
        <h2>Edit Password</h2>
        <UserFormEditPassword success={success} error={error} />
      </Card>
    </>
  )
}

export default AccountPasswordRoute
