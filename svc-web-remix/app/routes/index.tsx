import { LoaderFunction, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { Navigation } from '~/components/navigation/index'
import { getSessionData } from '~/utils/auth.server'

interface LoaderData {
  isAuthenticatedUser: boolean
  email: string | undefined
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken, email } = await getSessionData(request)
  const isAuthenticatedUser = Boolean(authToken)
  return json<LoaderData>({ isAuthenticatedUser, email })
}

const Index = () => {
  const { isAuthenticatedUser, email } = useLoaderData()

  return (
    <>
      <Navigation isAuthenticatedUser={isAuthenticatedUser} email={email} />
    </>
  )
}

export default Index
