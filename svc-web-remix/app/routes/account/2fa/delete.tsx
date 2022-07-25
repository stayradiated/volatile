import { useActionData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { promiseHash } from 'remix-utils'
import { errorBoundary } from '@stayradiated/error-boundary'

import { UserFormDelete2FA } from '~/components/user-form-delete-2fa'
import { Card } from '~/components/retro-ui'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { GetUser2FaQuery } from '~/graphql/generated'

type ActionData = {
  error?: string
}

export const action: ActionFunction = async ({ request }) => {
  const { authToken } = await getSessionData(request)
  invariant(authToken, 'Must be logged in.')

  const formData = await request.formData()
  const token  = formData.get('token')
  invariant(typeof token === 'string', 'Must have token.')

  const result = await errorBoundary(() => sdk.deleteUser2FA({
    token,
  }, {
    authorization: `Bearer ${authToken}`
  }))

  if (result instanceof Error) {
    return json<ActionData>({ error: result.message })
  }

  return null
}

interface LoaderData {
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken } = await getSessionData(request)
  invariant(authToken, 'Must be logged in.')

  const user2FA = await sdk.getUser2FA( {}, { authorization: `Bearer ${authToken}`, })
  if (typeof user2FA.kc_user[0].user_2fa?.uid !== 'string') {
    return redirect('/account/2fa')
  }

  return json<LoaderData>({  })
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
