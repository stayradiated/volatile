import { useLoaderData, Outlet } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { Navigation } from '~/components/navigation'
import { getSessionData } from '~/utils/auth.server'

interface LoaderData {
  isAuthenticatedUser: boolean
  email: string | undefined
}

export const loader: LoaderFunction = async ({ request }) => {
  const { authToken, email } = await getSessionData(request)
  const isAuthenticatedUser = Boolean(authToken)

  return json<LoaderData>({
    isAuthenticatedUser,
    email,
  })
}

const DCAOrdersRoute = () => {
  const { isAuthenticatedUser, email } = useLoaderData<LoaderData>()

  return (
    <>
      <Navigation isAuthenticatedUser={isAuthenticatedUser} email={email} />
      <Outlet />
    </>
  )
}

export default DCAOrdersRoute
