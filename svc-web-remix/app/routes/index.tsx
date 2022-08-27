import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { promiseHash } from 'remix-utils'

import { Navigation } from '~/components/navigation/index'
import { getSessionData } from '~/utils/auth.server'
import { VerifyEmail } from '~/components/verify-email/index'
import { sdk } from '~/utils/api.server'
import type { GetEmailVerifiedQuery } from '~/graphql/generated'

type LoaderData = {
  email?: string
  query?: {
    getEmailVerified?: GetEmailVerifiedQuery
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return json<LoaderData>({})
  }

  const { email, authToken } = session

  const query = await promiseHash({
    getEmailVerified: sdk.getEmailVerified(
      {},
      {
        authorization: `Bearer ${authToken}`,
        'x-hasura-role': 'user',
      },
    ),
  })

  return json<LoaderData>({ email, query })
}

const Index = () => {
  const { email, query } = useLoaderData<LoaderData>()
  const isAuthenticatedUser = typeof email === 'string'

  return (
    <>
      {isAuthenticatedUser && (
        <VerifyEmail email={email} query={query?.getEmailVerified!} />
      )}
      <Navigation isAuthenticatedUser={isAuthenticatedUser} email={email} />
    </>
  )
}

export default Index
