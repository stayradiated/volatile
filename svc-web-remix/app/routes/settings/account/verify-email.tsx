import { errorBoundary } from '@stayradiated/error-boundary'
import type { LoaderFunction, ActionFunction } from '@remix-run/node'
import { redirect, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import invariant from 'tiny-invariant'
import { sdk } from '~/utils/api.server'
import { getSessionData } from '~/utils/auth.server'
import { Card, Alert } from '~/components/retro-ui'
import { loginRedirect } from '~/utils/redirect.server'

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  await sdk.sendUserEmailVerify(
    {},
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  return redirect('/')
}

type LoaderData = {
  email: string
  error?: string
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { email, authToken } = session

  const url = new URL(request.url)
  const secret = url.searchParams.get('secret')
  invariant(secret, 'Missing searchParams.secret')

  const verifyUserEmail = await errorBoundary(async () =>
    sdk.verifyUserEmail(
      {
        emailVerifySecret: secret,
      },
      {
        authorization: `Bearer ${authToken}`,
        'x-hasura-role': 'user',
      },
    ),
  )

  if (verifyUserEmail instanceof Error) {
    return json<LoaderData>({ email, error: verifyUserEmail.message })
  }

  return json<LoaderData>({ email })
}

const VerifyEmailRoute = () => {
  const { email, error } = useLoaderData<LoaderData>()

  if (error) {
    return (
      <Card>
        <Alert message={error} type="error" />
      </Card>
    )
  }

  return (
    <Card>
      Successuflly verified email <strong>{email}</strong>
    </Card>
  )
}

export default VerifyEmailRoute
