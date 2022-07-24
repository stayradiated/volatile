import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { UserForm2FA } from '~/components/user-form-2fa'
// Import { UserFormDelete } from '~/components/user-form-delete'
import { Card } from '~/components/retro-ui'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { GetUser2FaQuery } from '~/graphql/generated'

interface LoaderData {
  query: GetUser2FaQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken } = await getSessionData(request)

  const query = await sdk.getUser2FA(
    {},
    {
      authorization: `Bearer ${authToken}`,
    },
  )

  return json<LoaderData>({
    query,
  })
}

const Account = () => {
  const { query } = useLoaderData()

  return (
    <>
      <Card>
        <UserForm2FA query={query} />
      </Card>
    </>
  )
}

export default Account
