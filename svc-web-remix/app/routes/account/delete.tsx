import { useLoaderData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json } from '@remix-run/node'

import { UserFormDelete } from '~/components/user-form-delete'
import { Card } from '~/components/retro-ui'
import { getSessionData } from '~/utils/auth.server'

export const action: ActionFunction = async ({ request }) => {
  const session = getSessionData(request)
  console.log(session)
}

interface LoaderData {}

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({})
}

const Account = () => {
  const {} = useLoaderData()

  return (
    <>
      <Card>
        <UserFormDelete />
      </Card>
    </>
  )
}

export default Account
