import { LoaderFunction, json, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { promiseHash } from 'remix-utils'
import { isBefore, parseISO } from 'date-fns'

import { Navigation } from '~/components/navigation/index'
import { getSessionData } from '~/utils/auth.server'
import { destroySession } from '~/utils/sessions.server'
import { VerifyEmail } from '~/components/verify-email/index'
import { sdk } from '~/utils/api.server'
import { GetEmailVerifiedQuery } from '~/graphql/generated'

interface LoaderData {
  isAuthenticatedUser: boolean
  email: string | undefined
  query: {
    getEmailVerified?: GetEmailVerifiedQuery
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken, email, expiresAt, session } = await getSessionData(request)
  const isAuthenticatedUser = Boolean(authToken)

  if (
    isAuthenticatedUser &&
    expiresAt &&
    isBefore(parseISO(expiresAt), new Date())
  ) {
    return redirect('/login', {
      headers: {
        'Set-Cookie': await destroySession(session),
      },
    })
  }

  const query = isAuthenticatedUser
    ? await promiseHash({
        getEmailVerified: sdk.getEmailVerified(
          {},
          {
            authorization: `Bearer ${authToken}`,
          },
        ),
      })
    : {}

  return json<LoaderData>({ isAuthenticatedUser, email, query })
}

const Index = () => {
  const { isAuthenticatedUser, email, query } = useLoaderData<LoaderData>()

  return (
    <>
      {isAuthenticatedUser && (
        <VerifyEmail email={email} query={query.getEmailVerified!} />
      )}
      <Navigation isAuthenticatedUser={isAuthenticatedUser} email={email} />
    </>
  )
}

export default Index
