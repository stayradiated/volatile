import { useLoaderData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json } from '@remix-run/node'
import invariant from 'tiny-invariant'

import { SudoForm } from '~/components/sudo-form'
import { Card } from '~/components/retro-ui'
import {
  getSessionData,
  setSessionData,
  commitSession,
} from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { safeRedirect, loginRedirect } from '~/utils/redirect.server'

type ActionData = {
  error?: string
}

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const form = await request.formData()

  const password = form.get('password')
  invariant(typeof password === 'string', 'Must have password.')

  const formReturn = form.get('return')
  const returnTo =
    typeof formReturn === 'string' && formReturn.trim().length > 0
      ? formReturn
      : '/'

  try {
    const result = await sdk.createAuthToken({
      email: session.email,
      password,
      deviceID: 'device-name',
      deviceName: 'My Device',
      deviceTrusted: true,
      role: 'superuser',
    })

    const superuserAuthToken = result.create_auth_token?.auth_token

    const remixSession = await setSessionData({
      request,
      superuserAuthToken,
    })

    // Login succeeded, send them to the home page.
    return safeRedirect(request, returnTo, {
      headers: {
        'Set-Cookie': await commitSession(remixSession),
      },
    })
  } catch (error: unknown) {
    console.error(error)

    return json<ActionData>({
      error: 'Invalid password.',
    })
  }
}

interface LoaderData {
  returnTo: string | undefined
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)
  invariant(session.role !== 'guest', 'Must be logged in.')

  const returnTo = new URL(request.url).searchParams.get('return') ?? undefined

  return json<LoaderData>({ returnTo })
}

const SudoRoute = () => {
  const { returnTo } = useLoaderData<LoaderData>()

  return (
    <>
      <Card>
        <SudoForm returnTo={returnTo} />
      </Card>
    </>
  )
}

export default SudoRoute
