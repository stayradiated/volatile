import { useLoaderData, useActionData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { promiseHash } from 'remix-utils'
import { errorBoundary } from '@stayradiated/error-boundary'

import { UserFormSetup2FA } from '~/components/user-form-setup-2fa'
import { Card } from '~/components/retro-ui'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { SetupUser2FaQuery } from '~/graphql/generated'

type ActionData = {
  error?: string
}

export const action: ActionFunction = async ({ request }) => {
  const { authToken } = await getSessionData(request)
  invariant(authToken, 'Must be logged in.')

  const formData = await request.formData()
  const token = formData.get('token')
  invariant(typeof token === 'string', 'Must have token.')
  const secret = formData.get('secret')
  invariant(typeof secret === 'string', 'Must have secret.')

  const result = await errorBoundary(async () =>
    sdk.enableUser2FA(
      {
        name: 'Name?',
        secret,
        token,
      },
      {
        authorization: `Bearer ${authToken}`,
      },
    ),
  )

  if (result instanceof Error) {
    return json<ActionData>({ error: result.message })
  }

  return null
}

interface LoaderData {
  query: {
    setupUser2FA: SetupUser2FaQuery
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken } = await getSessionData(request)
  invariant(authToken, 'Must be logged in.')

  const user2FA = await sdk.getUser2FA(
    {},
    { authorization: `Bearer ${authToken}` },
  )
  if (typeof user2FA.kc_user[0].user_2fa?.uid === 'string') {
    return redirect('/account/2fa')
  }

  const query = await promiseHash({
    setupUser2FA: sdk.setupUser2FA(
      {},
      { authorization: `Bearer ${authToken}` },
    ),
  })

  return json<LoaderData>({ query })
}

const Account = () => {
  const { query } = useLoaderData<LoaderData>()
  const actionData = useActionData<ActionData>()
  const error = actionData?.error

  return (
    <>
      <Card>
        <UserFormSetup2FA query={query.setupUser2FA} error={error} />
      </Card>
    </>
  )
}

export default Account
