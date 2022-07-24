import { useLoaderData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json } from '@remix-run/node'

import { UserFormEdit } from '~/components/user-form-edit'
import { Card } from '~/components/retro-ui'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  const password2 = formData.get('password2')

  const { authToken } = await getSessionData(request)

  if (typeof email === 'string') {
    await sdk.updateUser(
      { email },
      {
        authorization: `Bearer ${authToken}`,
      },
    )
  }

  if (typeof password === 'string' && password === password2) {
    await sdk.updateUser(
      { password },
      {
        authorization: `Bearer ${authToken}`,
      },
    )
  }

  return json({})
}

interface LoaderData {
  email: string
}

export const loader: LoaderFunction = async ({ request }) => {
  const { email } = await getSessionData(request)

  return json<LoaderData>({
    email,
  })
}

const Account = () => {
  const { email } = useLoaderData()

  return (
    <>
      <Card>
        <h2>Account</h2>
        <UserFormEdit email={email} />
      </Card>
    </>
  )
}

export default Account
