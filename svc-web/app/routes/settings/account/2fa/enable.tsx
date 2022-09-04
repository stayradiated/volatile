import { useLoaderData, useActionData } from '@remix-run/react'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import { promiseHash } from 'remix-utils'
import { makeDomainFunction, inputFromForm } from 'remix-domains'
import * as z from 'zod'

import { UserFormSetup2FA } from '~/components/user-form-setup-2fa'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import type { SetupUser2FaQuery } from '~/graphql/generated'
import { loginRedirect } from '~/utils/redirect.server'
import { collapseError } from '~/utils/error.server'

type ActionData = {
  error?: string
}

const enableUser2fa = makeDomainFunction(
  z.object({
    name: z.string(),
    secret: z.string(),
    token: z.string(),
  }),
  z.object({ authToken: z.string() }),
)(async (userInput, environment) => {
  const { name, secret, token } = userInput
  const { authToken } = environment
  const result = await sdk.enableUser2FA(
    { name, secret, token },
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )
  return result.actionEnableUser2fa?.user?.user2fa
})

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session
  const result = await enableUser2fa(await inputFromForm(request), {
    authToken,
  })
  if (!result.success) {
    return json<ActionData>({ error: collapseError(result) })
  }

  return null
}

type LoaderData = {
  query: {
    setupUser2FA: SetupUser2FaQuery
  }
}

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
  if (typeof user2FA.user[0].user2fa?.uid === 'string') {
    return redirect('/settings/account/2fa')
  }

  const query = await promiseHash({
    setupUser2FA: sdk.setupUser2FA(
      {},
      { authorization: `Bearer ${authToken}`, 'x-hasura-role': 'user' },
    ),
  })

  return json<LoaderData>({ query })
}

const Account = () => {
  const { query } = useLoaderData<LoaderData>()
  const actionData = useActionData<ActionData>()
  const error = actionData?.error

  return <UserFormSetup2FA query={query.setupUser2FA} error={error} />
}

export default Account
