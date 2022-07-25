import { errorBoundary } from '@stayradiated/error-boundary'
import { LoaderFunction, ActionFunction, redirect, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import invariant from 'tiny-invariant'
import { sdk } from '~/utils/api.server'
import { getSessionData } from '~/utils/auth.server'
import { Card, Alert } from '~/components/retro-ui'

export const action: ActionFunction = async ({ request }) => {
  const { authToken } = await getSessionData(request)

  await sdk.sendUserEmailVerify(
    {},
    {
      authorization: `Bearer ${authToken}`,
    },
  )

  return redirect('/')
}

type LoaderData = {
  email: string
  error?: string
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken, email } = await getSessionData(request)
  invariant(email, 'Missing email.')

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
